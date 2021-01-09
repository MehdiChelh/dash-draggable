# AUTO GENERATED FILE - DO NOT EDIT

''DraggableDashboard <- function(children=NULL, id=NULL, layout=NULL, save=NULL, clearSavedLayout=NULL, ncols=NULL, nrows=NULL, width=NULL, height=NULL, className=NULL, style=NULL) {
    
    props <- list(children=children, id=id, layout=layout, save=save, clearSavedLayout=clearSavedLayout, ncols=ncols, nrows=nrows, width=width, height=height, className=className, style=style)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'DraggableDashboard',
        namespace = 'dash_draggable',
        propNames = c('children', 'id', 'layout', 'save', 'clearSavedLayout', 'ncols', 'nrows', 'width', 'height', 'className', 'style'),
        package = 'dashDraggable'
        )

    structure(component, class = c('dash_component', 'list'))
}
