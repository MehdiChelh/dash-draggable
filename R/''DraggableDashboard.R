# AUTO GENERATED FILE - DO NOT EDIT

''DraggableDashboard <- function(children=NULL, id=NULL, layout=NULL, saveToClient=NULL, clearLayoutOnClient=NULL, items_by_row=NULL, nrows=NULL) {
    
    props <- list(children=children, id=id, layout=layout, saveToClient=saveToClient, clearLayoutOnClient=clearLayoutOnClient, items_by_row=items_by_row, nrows=nrows)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'DraggableDashboard',
        namespace = 'dash_draggable',
        propNames = c('children', 'id', 'layout', 'saveToClient', 'clearLayoutOnClient', 'items_by_row', 'nrows'),
        package = 'dashDraggable'
        )

    structure(component, class = c('dash_component', 'list'))
}
