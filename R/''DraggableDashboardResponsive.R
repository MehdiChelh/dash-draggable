# AUTO GENERATED FILE - DO NOT EDIT

''DraggableDashboardResponsive <- function(children=NULL, id=NULL, layouts=NULL, breakpoints=NULL, cols=NULL, margin=NULL, containerPadding=NULL, saveToClient=NULL, clearLayoutOnClient=NULL, items_by_row=NULL, nrows=NULL) {
    
    props <- list(children=children, id=id, layouts=layouts, breakpoints=breakpoints, cols=cols, margin=margin, containerPadding=containerPadding, saveToClient=saveToClient, clearLayoutOnClient=clearLayoutOnClient, items_by_row=items_by_row, nrows=nrows)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'DraggableDashboardResponsive',
        namespace = 'dash_draggable',
        propNames = c('children', 'id', 'layouts', 'breakpoints', 'cols', 'margin', 'containerPadding', 'saveToClient', 'clearLayoutOnClient', 'items_by_row', 'nrows'),
        package = 'dashDraggable'
        )

    structure(component, class = c('dash_component', 'list'))
}
