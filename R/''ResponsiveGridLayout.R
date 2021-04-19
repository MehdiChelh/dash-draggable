# AUTO GENERATED FILE - DO NOT EDIT

''ResponsiveGridLayout <- function(children=NULL, id=NULL, layouts=NULL, breakpoints=NULL, gridCols=NULL, save=NULL, clearSavedLayout=NULL, ncols=NULL, nrows=NULL, height=NULL, className=NULL, style=NULL, autoSize=NULL, draggableCancel=NULL, draggableHandle=NULL, verticalCompact=NULL, compactType=NULL, margin=NULL, containerPadding=NULL, isDraggable=NULL, isResizable=NULL, isBounded=NULL, useCSSTransforms=NULL, transformScale=NULL, preventCollision=NULL, isDroppable=NULL, resizeHandles=NULL) {
    
    props <- list(children=children, id=id, layouts=layouts, breakpoints=breakpoints, gridCols=gridCols, save=save, clearSavedLayout=clearSavedLayout, ncols=ncols, nrows=nrows, height=height, className=className, style=style, autoSize=autoSize, draggableCancel=draggableCancel, draggableHandle=draggableHandle, verticalCompact=verticalCompact, compactType=compactType, margin=margin, containerPadding=containerPadding, isDraggable=isDraggable, isResizable=isResizable, isBounded=isBounded, useCSSTransforms=useCSSTransforms, transformScale=transformScale, preventCollision=preventCollision, isDroppable=isDroppable, resizeHandles=resizeHandles)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'ResponsiveGridLayout',
        namespace = 'dash_draggable',
        propNames = c('children', 'id', 'layouts', 'breakpoints', 'gridCols', 'save', 'clearSavedLayout', 'ncols', 'nrows', 'height', 'className', 'style', 'autoSize', 'draggableCancel', 'draggableHandle', 'verticalCompact', 'compactType', 'margin', 'containerPadding', 'isDraggable', 'isResizable', 'isBounded', 'useCSSTransforms', 'transformScale', 'preventCollision', 'isDroppable', 'resizeHandles'),
        package = 'dashDraggable'
        )

    structure(component, class = c('dash_component', 'list'))
}
