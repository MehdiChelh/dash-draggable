import React, {Component} from 'react';
import PropTypes from 'prop-types';
import GridLayout from 'react-grid-layout';

import {
    ITEMS_BY_ROW,
    MAX_COLS,
    DEFAULT_HEIGHT,
    DEFAULT_ROW_HEIGHT
} from "../constants"

import {saveToLs, getFromLs} from "../localStorage";
import "../../../node_modules/react-grid-layout/css/styles.css"
import "../../../node_modules/react-resizable/css/styles.css"
import "./style.css"

const defaultItemLayout = (item_layout, id, key, items_by_row) => {
    
    const col_width = Math.floor(MAX_COLS / items_by_row)
    const col = (key % items_by_row)
    const row = Math.floor(key / items_by_row)
    const defaultChildLayout = {
        i: id || key.toString(),
        x: col * col_width,
        y: row,
        w: col_width,
        h: DEFAULT_HEIGHT
    }
    return {
        ...defaultChildLayout,
        ...item_layout,
        i: id || key.toString(),
        x: item_layout.x ? item_layout.x : defaultChildLayout.x,
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
            clearLayoutOnClient,
            items_by_row = ITEMS_BY_ROW,
        } = this.props;
        let child_props, child_id, isDashboardItem;
        console.log({layout: providedLayout})
        children = Array.isArray(children) ? children : [children]
        // Build layout
        //   client local store [except if specified]
        //   > layout
        //   > element [except if sepcified])
        if (clearLayoutOnClient) {
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

                console.log({isDashboardItem})
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
                console.log({item_layout})
            }
            if (!item_layout && isDashboardItem){
                const {id, x, y, w, h} = child_props
                item_layout = defaultItemLayout({i:id, x, y, w, h}, child_id, key, items_by_row)
            }
            if (!item_layout){
                item_layout = defaultItemLayout({}, child_id, key, items_by_row)
            }
            // }
            // else {
            //     item_layout = defaultItemLayout({}, null, key, items_by_row)
            // }
            return item_layout
        })
        console.log({initialLayout: layout})
        this.initialLayout = layout
    }
    render() {
        let {children=[]} = this.props
        const {id, saveToClient, setProps} = this.props

        children = Array.isArray(children) ? children : [children];
        
        // children = children.map((child) => {
        //     if (
        //         React.isValidElement(child) &&
        //         child.props._dashprivate_layout
        //     ) {
        //         return React.cloneElement(
        //             child,
        //             child.props._dashprivate_layout.props
        //         );
        //     }
        //     return child;
        // });
        
        
        return (
            <GridLayout
            className="layout"
            layout={this.initialLayout}
            cols={MAX_COLS}
            rowHeight={DEFAULT_ROW_HEIGHT}
            width={1200}
            onLayoutChange={(layout) => {
                console.log({layoutChange:layout})
                setProps({layout})
                if(saveToClient){
                    saveToLs(`${id}-layout`, layout)
                }
            }}
            >
            {children.map((child, key) => {
                // Get the id / key of each child
                let _key;
                if (child.props){
                    const child_props = child.props._dashprivate_layout ? child.props._dashprivate_layout.props : child.props
                    const isDashboardItem = (child.props._dashprivate_layout
                        ? child.props._dashprivate_layout.type
                        : child.type.name) === 'DashboardItem';
                    _key = isDashboardItem ? child_props.i : child_props.id || key.toString()
                } else {
                    _key = key.toString()
                }
                console.log({_key})
                
                return(
                    <div key={_key}
                        className="item">
                        {
                        <div className="item-top">
                            <span className="item-top-content">...</span>
                            {/* <div className="item-top-right">...</div> */}
                        </div>}
                        <div className="item-content" onMouseDown={ e => e.stopPropagation() }>
                            {child}
                        </div>
                    </div>
                )
            }
            )}
            </GridLayout>
        )
    }
}

DraggableDashboard.defaultProps = {
    saveToClient: true,
    clearLayoutOnClient: false,
    children: []
};

DraggableDashboard.propTypes = {
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
    layout: PropTypes.arrayOf(PropTypes.object),

    /**
     * Children is a list of the elements to drag and resize on the dashboard.
     * It can be a list(Pytyhon)/vector(R) of dash Components and/or DashboardItem.
     */
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
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
     * (number) the default number of columns for an item with no predefined size.
     * The size of items can either be defined in the layout argument or in DashboardItem.
     */
    items_by_row: PropTypes.number,

    /**
     * (number) the default number of items by row.
     * Default is 2.
     */
    nrows: PropTypes.number,

    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func
};
