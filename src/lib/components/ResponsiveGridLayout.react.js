import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Responsive, WidthProvider as widthProvider} from 'react-grid-layout';

import {
    NROWS,
    ROW_HEIGHT,
    BREAKPOINTS,
    GRID_COLS_RESPONSIVE,
    NCOLS_RESPONSIVE,
} from '../constants';

import {saveToLs, getFromLs} from '../localStorage';
import '../../../node_modules/react-grid-layout/css/styles.css';
import '../../../node_modules/react-resizable/css/styles.css';
import './style.css';

const ResponsiveReactGridLayout = widthProvider(Responsive);

const defaultItemLayout = (item_layout, id, key, ncols, max_cols) => {
    const nb_items_x = Math.floor(max_cols / ncols);
    const col = key % nb_items_x;
    const row = Math.floor(key / nb_items_x);
    const defaultChildLayout = {
        i: id || key.toString(),
        x: col * ncols,
        y: row,
        w: ncols,
        h: NROWS,
    };
    return {
        ...defaultChildLayout,
        ...item_layout,
        i: id || key.toString(),
        x: item_layout.x ? item_layout.x : defaultChildLayout.x,
        y: item_layout.y ? item_layout.y : defaultChildLayout.y,
        w: item_layout.w ? item_layout.w : defaultChildLayout.w,
        h: item_layout.h ? item_layout.h : defaultChildLayout.h,
    };
};

/**
 * DraggableDashboard is a component for building
 * dashboards with draggable and resizable items.
 * It takes a list of children and display them in
 * div elements that can be moved around the page.
 * The initial size of each element can either be
 * defined with the layout argument or by wrapping
 * each element with the DashboardItem component.
 * By default, DraggableDashboard will saved the
 * position of the elements on client side, when
 * moved on the page. But you can also save it
 * on server side by defining a callback with :
 * `Input("<my-id>", "layout")`.
 */
export default class ResponsiveGridLayout extends Component {
    componentWillMount() {
        let {children = []} = this.props;
        const {
            id,
            layouts: providedLayouts,
            clearSavedLayout,
            ncols = NCOLS_RESPONSIVE,
            breakpoints = BREAKPOINTS,
            gridCols = GRID_COLS_RESPONSIVE,
        } = this.props;
        const layouts = {};
        let child_props, child_id, isDashboardItem;

        children = Array.isArray(children) ? children : [children];

        // Build layout
        //   Priority to client local store [except if specified]
        //   Then layout
        //   And then DashboardItem [except if sepcified])
        if (clearSavedLayout) {
            saveToLs(`${id}-layouts`, null);
        }
        const savedLayout = getFromLs(`${id}-layouts`);

        for (var bkp in breakpoints) {
            // eslint-disable-next-line no-loop-func
            const layout = children.map((child, key) => {
                let item_layout;

                // Get the child id and props
                // Depending on wether it is a string, a classic React component, or a DashboardItem
                if (typeof child === 'string') {
                    child_id = key.toString();
                } else {
                    child_props = child.props._dashprivate_layout
                        ? child.props._dashprivate_layout.props
                        : child.props;

                    isDashboardItem =
                        (child.props._dashprivate_layout
                            ? child.props._dashprivate_layout.type
                            : child.type.name) === 'DashboardItem';

                    child_id = isDashboardItem ? child_props.i : child_props.id;
                }
                // Define the layout for the specific item x breakpoint
                if (savedLayout && savedLayout[bkp]) {
                    item_layout = savedLayout[bkp].find(
                        (el) => el.i === child_id || el.i === key.toString()
                    );
                }
                if (!item_layout && providedLayouts && providedLayouts[bkp]) {
                    item_layout = providedLayouts[bkp].find(
                        (el) => el.i === child_id
                    );
                }
                if (!item_layout && isDashboardItem) {
                    const {
                        id = {},
                        x = {},
                        y = {},
                        w = {},
                        h = {},
                    } = child_props;

                    const item_provided_layout = {
                        i: typeof id === 'string' ? id : id[bkp],
                        x: typeof x === 'number' ? x : x[bkp],
                        y: typeof y === 'number' ? y : y[bkp],
                        w: typeof w === 'number' ? w : w[bkp],
                        h: typeof h === 'number' ? h : h[bkp],
                    };

                    item_layout = defaultItemLayout(
                        item_provided_layout,
                        child_id,
                        key,
                        ncols[bkp],
                        gridCols[bkp]
                    );
                }
                if (!item_layout) {
                    item_layout = defaultItemLayout(
                        {},
                        child_id,
                        key,
                        ncols[bkp],
                        gridCols[bkp]
                    );
                }

                return item_layout;
            });
            layouts[bkp] = layout;
        }
        this.layouts = layouts;
    }
    render() {
        let {children = []} = this.props;
        const {
            id,
            save,
            setProps,
            breakpoints = BREAKPOINTS,
            gridCols = GRID_COLS_RESPONSIVE,
            height=ROW_HEIGHT,
            className,
            style,
        } = this.props;

        children = Array.isArray(children) ? children : [children];

        return (
            <ResponsiveReactGridLayout
                className={className}
                style={style}
                layouts={this.layouts}
                cols={gridCols}
                breakpoints={breakpoints}
                rowHeight={height}
                onLayoutChange={(current_layout, all_layouts) => {
                    this.layouts = all_layouts;

                    setProps({current_layout, all_layout: all_layouts});
                    if (save) {
                        saveToLs(`${id}-layouts`, all_layouts);
                    }
                }}
            >
                {children.map((child, key) => {
                    let _key;
                    if (child.props) {
                        const child_props = child.props._dashprivate_layout
                            ? child.props._dashprivate_layout.props
                            : child.props;
                        const isDashboardItem =
                            (child.props._dashprivate_layout
                                ? child.props._dashprivate_layout.type
                                : child.type.name) === 'DashboardItem';
                        _key = isDashboardItem
                            ? child_props.i
                            : child_props.id || key.toString();
                    } else {
                        _key = key.toString();
                    }

                    return (
                        <div key={_key} className="item">
                            {
                                <div className="item-top">
                                    <span className="item-top-content">
                                        ...
                                    </span>
                                    {/* 
                                        <div className="item-top-right">...</div> 
                                        Maybe we could add a menu to change the 
                                        properties of the item.
                                        (static, draggable, resizeable, ...)
                                    */}
                                </div>
                            }
                            <div
                                className="item-content"
                                onMouseDown={(e) => e.stopPropagation()}
                            >
                                {child}
                            </div>
                        </div>
                    );
                })}
            </ResponsiveReactGridLayout>
        );
    }
}

ResponsiveGridLayout.defaultProps = {
    save: true,
    clearSavedLayout: false,
    children: [],
    style: {},
    className: "",
};

ResponsiveGridLayout.propTypes = {
    /**
     * (string) The ID used to identify this component in Dash callbacks.
     * The id is also used to automatically save the layout on client side.
     */
    id: PropTypes.string,

    /**
     * Layout is a list(python)/vector(R) of dictionnary(Python)/list(R) with the format:
     * {x: number, y: number, w: number, h: number}
     * The index into the layout must match the id used on each item component with DashboardItem.
     * If you choose to use custom keys, you can specify that key in the layout
     * array objects like so:
     * {i: string, x: number, y: number, w: number, h: number}
     * The ID used to identify this component in Dash callbacks.
     * The id is also used to automatically save the layout on client side.
     */
    layouts: PropTypes.object,

    /**
     * ({breakpoint: number}) The breakpoints for the responsive layout.
     * For each screen size (breakpoint) we can define a different layout.
     * (see also 'layouts' and 'gridCols' arguments)
     * Default value is {lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0}
     */
    breakpoints: PropTypes.object,

    /**
     * ({breakpoint: number}) the number of columns in the grid layout.
     * Default value is {lg: 12, md: 10, sm: 6, xs: 4, xxs: 2}.
     */
    gridCols: PropTypes.object,

    // margin: PropTypes.oneOfType([
    //     PropTypes.object,
    //     PropTypes.arrayOf(PropTypes.object),
    // ]),
    // containerPadding: PropTypes.oneOfType([
    //     PropTypes.object,
    //     PropTypes.arrayOf(PropTypes.object),
    // ]),

    /**
     * Children is a list of the items (dash Components and/or 
     * DashboardItem) to diplay on the layout.
     * By default all the items can be dragged and resized.
     */
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]),

    /**
     * (bool) If True, then the layout is automatically saved on client browser.
     * Default value is True
     */
    save: PropTypes.bool,

    /**
     * (bool) If set to true, then the layout saved in the client browser
     * will be cleared in the next page load.
     */
    clearSavedLayout: PropTypes.bool,

    /**
     * ({breakpoint: number}) the default number of columns by item.
     * Default value is {lg: 6, md: 5, sm: 3, xs: 4, xxs: 2}.
     */
    ncols: PropTypes.number,

    /**
     * (number) the default number of row by item.
     * Default value is 8.
     */
    nrows: PropTypes.number,
    
    /**
     * (number) height of a row (in px).
     * Default value is 30.
     */
    height: PropTypes.number,

    /**
     * (string) class passed to the react-grid-layout component 
     */
    className: PropTypes.string,

    /**
     * (dict) css style passed to the react-grid-layout component
     */
    style: PropTypes.object,

    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func,
};
