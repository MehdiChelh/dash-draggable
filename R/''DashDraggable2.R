# AUTO GENERATED FILE - DO NOT EDIT

''DashDraggable2 <- function(children=NULL, id=NULL, value=NULL) {
    
    props <- list(children=children, id=id, value=value)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'DashDraggable2',
        namespace = 'dash_draggable',
        propNames = c('children', 'id', 'value'),
        package = 'dashDraggable'
        )

    structure(component, class = c('dash_component', 'list'))
}
