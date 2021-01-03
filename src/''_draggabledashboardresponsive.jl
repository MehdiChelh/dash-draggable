# AUTO GENERATED FILE - DO NOT EDIT

export ''_draggabledashboardresponsive

"""
    ''_draggabledashboardresponsive(;kwargs...)
    ''_draggabledashboardresponsive(children::Any;kwargs...)
    ''_draggabledashboardresponsive(children_maker::Function;kwargs...)


A DraggableDashboardResponsive component.
DraggableDashboard is a component for building
dashboards with draggable and resizable items.
It takes a list of children and display them in
div elements that can be moved around the page.
The initial size of each element can either be
defined with the layout argument or by wrapping
each element with the DashboardItem component.
By default, DraggableDashboard will saved the
position of the elements on client side, when
moved on the page. But you can also save it
on server side by defining a callback with :
`Input("<my-id>", "layout")`.
Keyword arguments:
- `children` (Array of a list of or a singular dash component, string or numbers | a list of or a singular dash component, string or number; optional): Children is a list of the elements to drag and resize on the dashboard.
It can be a list(Pytyhon)/vector(R) of dash Components and/or DashboardItem.
- `id` (String; optional): (string) The ID used to identify this component in Dash callbacks.
The id is also used to automatically save the layout on client side.
- `layouts` (Dict; optional): Layout is a list(python)/vector(R) of dictionnary(Python)/list(R) with the format:
{x: number, y: number, w: number, h: number}
The index into the layout must match the id used on each item component with DashboardItem.
If you choose to use custom keys, you can specify that key in the layout
array objects like so:
{i: string, x: number, y: number, w: number, h: number}
The ID used to identify this component in Dash callbacks.
The id is also used to automatically save the layout on client side.
- `breakpoints` (Dict; optional)
- `cols` (Dict; optional)
- `margin` (Dict | Array of Dicts; optional)
- `containerPadding` (Dict | Array of Dicts; optional)
- `saveToClient` (Bool; optional): (bool) It specify if the layout should automatically be saved.
- `clearLayoutOnClient` (Bool; optional): (bool) If set to true, then the layout saved in the client browser
will be cleared in the next page load.
- `items_by_row` (Dict; optional): (number) the default number of item by row.
Default is {lg: 2, md: 2, sm: 2, xs: 1, xxs: 1}
- `nrows` (Real; optional): (number) the default number of rows for an item with no predefined size.
The size of items can either be defined in the layout argument or in DashboardItem.
"""
function ''_draggabledashboardresponsive(; kwargs...)
        available_props = Symbol[:children, :id, :layouts, :breakpoints, :cols, :margin, :containerPadding, :saveToClient, :clearLayoutOnClient, :items_by_row, :nrows]
        wild_props = Symbol[]
        return Component("''_draggabledashboardresponsive", "DraggableDashboardResponsive", "dash_draggable", available_props, wild_props; kwargs...)
end

''_draggabledashboardresponsive(children::Any; kwargs...) = ''_draggabledashboardresponsive(;kwargs..., children = children)
''_draggabledashboardresponsive(children_maker::Function; kwargs...) = ''_draggabledashboardresponsive(children_maker(); kwargs...)

