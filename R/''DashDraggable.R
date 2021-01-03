# AUTO GENERATED FILE - DO NOT EDIT

''DashDraggable <- function(children=NULL, id=NULL, value=NULL, layout=NULL, saveToClient=NULL, clearLayoutOnClient=NULL, ncols=NULL, nrows=NULL) {
    
    props <- list(children=children, id=id, value=value, layout=layout, saveToClient=saveToClient, clearLayoutOnClient=clearLayoutOnClient, ncols=ncols, nrows=nrows)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'DashDraggable',
        namespace = 'dash_draggable',
        propNames = c('children', 'id', 'value', 'layout', 'saveToClient', 'clearLayoutOnClient', 'ncols', 'nrows'),
        package = 'dashDraggable'
        )

    structure(component, class = c('dash_component', 'list'))
}
