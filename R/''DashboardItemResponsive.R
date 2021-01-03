# AUTO GENERATED FILE - DO NOT EDIT

''DashboardItemResponsive <- function(children=NULL, id=NULL, x=NULL, y=NULL, w=NULL, h=NULL, static=NULL, isDraggable=NULL, isResizable=NULL, isBounded=NULL, maxH=NULL, maxW=NULL, minH=NULL, minW=NULL, moved=NULL, resizeHandles=NULL, __isDashboardItem=NULL) {
    
    props <- list(children=children, id=id, x=x, y=y, w=w, h=h, static=static, isDraggable=isDraggable, isResizable=isResizable, isBounded=isBounded, maxH=maxH, maxW=maxW, minH=minH, minW=minW, moved=moved, resizeHandles=resizeHandles, __isDashboardItem=__isDashboardItem)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'DashboardItemResponsive',
        namespace = 'dash_draggable',
        propNames = c('children', 'id', 'x', 'y', 'w', 'h', 'static', 'isDraggable', 'isResizable', 'isBounded', 'maxH', 'maxW', 'minH', 'minW', 'moved', 'resizeHandles', '__isDashboardItem'),
        package = 'dashDraggable'
        )

    structure(component, class = c('dash_component', 'list'))
}
