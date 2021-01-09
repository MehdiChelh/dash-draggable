# AUTO GENERATED FILE - DO NOT EDIT

''DraggableDashboardResponsive <- function(children=NULL, id=NULL, layouts=NULL, breakpoints=NULL, gridCols=NULL, save=NULL, clearSavedLayout=NULL, ncols=NULL, nrows=NULL, height=NULL, className=NULL, style=NULL) {
    
    props <- list(children=children, id=id, layouts=layouts, breakpoints=breakpoints, gridCols=gridCols, save=save, clearSavedLayout=clearSavedLayout, ncols=ncols, nrows=nrows, height=height, className=className, style=style)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'DraggableDashboardResponsive',
        namespace = 'dash_draggable',
        propNames = c('children', 'id', 'layouts', 'breakpoints', 'gridCols', 'save', 'clearSavedLayout', 'ncols', 'nrows', 'height', 'className', 'style'),
        package = 'dashDraggable'
        )

    structure(component, class = c('dash_component', 'list'))
}
