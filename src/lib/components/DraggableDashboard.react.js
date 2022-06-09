import React, {Component} from 'react';
import PropTypes from 'prop-types';
import GridLayout from 'react-grid-layout';

import {
    GRID_COLS,
    NCOLS,
    NROWS,
    ROW_HEIGHT,
    WIDTH,
} from "../constants"

import {saveToLs, getFromLs} from "../localStorage";
import "../../../node_modules/react-grid-layout/css/styles.css"
import "../../../node_modules/react-resizable/css/styles.css"
import "./style.css"

const defaultItemLayout = (item_layout, id, key, ncols, nrows) => {
    
    const nb_child_x = Math.floor(GRID_COLS / ncols)
    const col = (key % nb_child_x)
    const row = Math.floor(key / nb_child_x)
    const defaultChildLayout = {
        i: id || key.toString(),
        x: col * ncols,
        y: row,
        w: ncols,
        h: nrows
    }
    return {
        ...defaultChildLayout,
        ...item_layout,
        i: id || key.toString(),
        x: item_layout.x ? item_layout.x : defaultChildLayout.x,  // to refactor
        y: item_layout.y ? item_layout.y : defaultChildLayout.y,
        w: item_layout.w ? item_layout.w : defaultChildLayout.w,
        h: item_layout.h ? item_layout.h : defaultChildLayout.h,
    }
}

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
export default class DraggableDashboard extends Component {
    componentWillMount() {
        let {children=[]} = this.props
        const {
            id,
            layout: providedLayout,
            clearSavedLayout,
            ncols = NCOLS,
            nrows = NROWS
        } = this.props;
        let child_props, child_id, isDashboardItem;
        children = Array.isArray(children) ? children : [children]
        // Build layout
        //   client local store [except if specified]
        //   > layout
        //   > element [except if sepcified])
        if (clearSavedLayout) {
            saveToLs(`${id}-layout`, null)
        }
        const savedLayout = getFromLs(`${id}-layout`)
        
        const layout = children.map((child, key) => {
            let item_layout;
            
            if (typeof child === 'string') {
                child_id = key.toString()
                
            } else {
                
                child_props = child.props._dashprivate_layout
                ? child.props._dashprivate_layout.props
                : child.props;

                isDashboardItem = (child.props._dashprivate_layout
                    ? child.props._dashprivate_layout.type
                    : child.type.name) === 'DashboardItem';

                child_id =
                    isDashboardItem
                        ? child_props.i
                        : child_props.id;
            }
            
            
            if (savedLayout) {
                item_layout = savedLayout.find(
                    (el) => el.i === child_id || el.i === key.toString()
                );
            }
            if (!item_layout && providedLayout){
                
                item_layout = providedLayout.find(el => el.i === child_id)
            }
            if (!item_layout && isDashboardItem){
                const {id, x, y, w, h} = child_props
                item_layout = defaultItemLayout({i:id, x, y, w, h}, child_id, key, ncols, nrows)
            }
            if (!item_layout){
                item_layout = defaultItemLayout({}, child_id, key, ncols, nrows)
            }
            // }
            // else {
            //     item_layout = defaultItemLayout({}, null, key, items_by_row)
            // }
            return item_layout
        })
        
        this.initialLayout = layout
    }
    render() {
        let {children=[]} = this.props
        const {
            id,
            save,
            setProps,
            width = WIDTH,
            height = ROW_HEIGHT,
            className,
            style,
        } = this.props;

        children = Array.isArray(children) ? children : [children];
        
        return (
            <GridLayout
                className={className}
                layout={this.initialLayout}
                cols={GRID_COLS}
                rowHeight={height}
                width={width}
                style={style}
                onLayoutChange={(layout) => {
                    setProps({layout});
                    if (save) {
                        saveToLs(`${id}-layout`, layout);
                    }
                }}
            >
                {children.map((child, key) => {
                    // Get the id / key of each child
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
            </GridLayout>
        );
    }
}

DraggableDashboard.defaultProps = {
    save: true,
    clearSavedLayout: false,
    children: [],
    className: "",
    style: {},
};

DraggableDashboard.propTypes = {
    /**
     * (string) The ID used to identify this component in Dash callbacks.
     * The id is also used to automatically save the layout on client side.
     */
    id: PropTypes.string,

    /**
     * Layout is a list of dictionnary with the format:
     * {x: number, y: number, w: number, h: number}
     * The index into the layout must match the id used on each item component with DashboardItem.
     * If you choose to use custom keys, you can specify that key in the layout
     * array objects like so:
     * {i: string, x: number, y: number, w: number, h: number}
     * The ID used to identify this component in Dash callbacks.
     * The id is also used to automatically save the layout on client side.
     */    
    layout: PropTypes.arrayOf(PropTypes.object),

    /**
     * Children is a list of the elements to drag and resize on the dashboard.
     * It can be a list of dash Components and/or DashboardItem.
     */
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]),

    /**
     * (bool) If False, then the layout is not saved in the browser.
     * Default value is True.
     */
    save: PropTypes.bool,
    
    /**
     * (bool) If set to true, then the layout saved in the client browser
     * will be cleared on page load.
     */
    clearSavedLayout: PropTypes.bool,

    /**
     * (number) the default number of columns by item.
     * Default value is 6.
     */
    ncols: PropTypes.number,

    /**
     * (number) the default number of row by item.
     * Default value is 8.
     */
    nrows: PropTypes.number,
    
    /**
     * (number) width (in px).
     * Default value is 1200.
     */
    width: PropTypes.number,

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
    setProps: PropTypes.func
};
