# AUTO GENERATED FILE - DO NOT EDIT

''GridLayout <- function(children=NULL, id=NULL, layout=NULL, save=NULL, clearSavedLayout=NULL, ncols=NULL, nrows=NULL, width=NULL, gridCols=NULL, height=NULL, className=NULL, style=NULL, autoSize=NULL, draggableCancel=NULL, draggableHandle=NULL, verticalCompact=NULL, compactType=NULL, margin=NULL, containerPadding=NULL, isDraggable=NULL, isResizable=NULL, isBounded=NULL, useCSSTransforms=NULL, transformScale=NULL, preventCollision=NULL, isDroppable=NULL, resizeHandles=NULL) {
    
    props <- list(children=children, id=id, layout=layout, save=save, clearSavedLayout=clearSavedLayout, ncols=ncols, nrows=nrows, width=width, gridCols=gridCols, height=height, className=className, style=style, autoSize=autoSize, draggableCancel=draggableCancel, draggableHandle=draggableHandle, verticalCompact=verticalCompact, compactType=compactType, margin=margin, containerPadding=containerPadding, isDraggable=isDraggable, isResizable=isResizable, isBounded=isBounded, useCSSTransforms=useCSSTransforms, transformScale=transformScale, preventCollision=preventCollision, isDroppable=isDroppable, resizeHandles=resizeHandles)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'GridLayout',
        namespace = 'dash_draggable',
        propNames = c('children', 'id', 'layout', 'save', 'clearSavedLayout', 'ncols', 'nrows', 'width', 'gridCols', 'height', 'className', 'style', 'autoSize', 'draggableCancel', 'draggableHandle', 'verticalCompact', 'compactType', 'margin', 'containerPadding', 'isDraggable', 'isResizable', 'isBounded', 'useCSSTransforms', 'transformScale', 'preventCollision', 'isDroppable', 'resizeHandles'),
        package = 'dashDraggable'
        )

    structure(component, class = c('dash_component', 'list'))
}
