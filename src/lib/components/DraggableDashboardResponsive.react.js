import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Responsive, WidthProvider as widthProvider} from 'react-grid-layout';

import {
    DEFAULT_HEIGHT,
    DEFAULT_ROW_HEIGHT,
    BREAKPOINTS,
    MAX_COLS_RESPONSIVE,
    ITEMS_BY_ROW_RESPONSIVE,
} from '../constants';

import {saveToLs, getFromLs} from '../localStorage';
import '../../../node_modules/react-grid-layout/css/styles.css';
import '../../../node_modules/react-resizable/css/styles.css';
import './style.css';

const ResponsiveReactGridLayout = widthProvider(Responsive);

const defaultItemLayout = (item_layout, id, key, items_by_row, max_cols) => {
    const col_width = Math.floor(max_cols / items_by_row);
    const col = key % items_by_row;
    const row = Math.floor(key / items_by_row);
    const defaultChildLayout = {
        i: id || key.toString(),
        x: col * col_width,
        y: row,
        w: col_width,
        h: DEFAULT_HEIGHT,
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
export default class DraggableDashboardResponsive extends Component {
    componentWillMount() {
        let {children = []} = this.props;
        const {
            id,
            layouts: providedLayouts,
            clearLayoutOnClient,
            items_by_row = ITEMS_BY_ROW_RESPONSIVE,
            breakpoints = BREAKPOINTS,
            cols = MAX_COLS_RESPONSIVE,
        } = this.props;
        const layouts = {};
        let child_props, child_id, isDashboardItem;

        children = Array.isArray(children) ? children : [children];

        // Build layout
        //   Priority to client local store [except if specified]
        //   Then layout
        //   And then DashboardItem [except if sepcified])
        if (clearLayoutOnClient) {
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
                        items_by_row[bkp],
                        cols[bkp]
                    );
                }
                if (!item_layout) {
                    item_layout = defaultItemLayout(
                        {},
                        child_id,
                        key,
                        items_by_row[bkp],
                        cols[bkp]
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
            saveToClient,
            setProps,
            breakpoints = BREAKPOINTS,
            cols = MAX_COLS_RESPONSIVE,
        } = this.props;

        children = Array.isArray(children) ? children : [children];

        return (
            <ResponsiveReactGridLayout
                className="layout"
                layouts={this.layouts}
                cols={cols}
                breakpoints={breakpoints}
                rowHeight={DEFAULT_ROW_HEIGHT}
                onLayoutChange={(current_layout, all_layouts) => {
                    this.layouts = all_layouts;

                    setProps({current_layout, all_layout: all_layouts});
                    if (saveToClient) {
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
                                    {/* <div className="item-top-right">...</div> */}
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

DraggableDashboardResponsive.defaultProps = {
    saveToClient: true,
    clearLayoutOnClient: false,
    children: [],
};

DraggableDashboardResponsive.propTypes = {
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

    breakpoints: PropTypes.object,

    cols: PropTypes.object,

    margin: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.arrayOf(PropTypes.object),
    ]),
    containerPadding: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.arrayOf(PropTypes.object),
    ]),

    /**
     * Children is a list of the elements to drag and resize on the dashboard.
     * It can be a list(Pytyhon)/vector(R) of dash Components and/or DashboardItem.
     */
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]),

    /**
     * (bool) It specify if the layout should automatically be saved.
     */
    saveToClient: PropTypes.bool,

    /**
     * (bool) If set to true, then the layout saved in the client browser
     * will be cleared in the next page load.
     */
    clearLayoutOnClient: PropTypes.bool,

    /**
     * (number) the default number of item by row.
     * Default is {lg: 2, md: 2, sm: 2, xs: 1, xxs: 1}
     */
    items_by_row: PropTypes.object,

    /**
     * (number) the default number of rows for an item with no predefined size.
     * The size of items can either be defined in the layout argument or in DashboardItem.
     */
    nrows: PropTypes.number,

    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func,
};
