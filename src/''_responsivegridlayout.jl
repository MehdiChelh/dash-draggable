# AUTO GENERATED FILE - DO NOT EDIT

export ''_responsivegridlayout

"""
    ''_responsivegridlayout(;kwargs...)
    ''_responsivegridlayout(children::Any;kwargs...)
    ''_responsivegridlayout(children_maker::Function;kwargs...)


A ResponsiveGridLayout component.
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
- `children` (Array of a list of or a singular dash component, string or numbers | a list of or a singular dash component, string or number; optional): Children is a list of the items (dash Components and/or
DashboardItem) to diplay on the layout.
By default all the items can be dragged and resized.
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
- `breakpoints` (Dict; optional): ({breakpoint: number}) The breakpoints for the responsive layout.
For each screen size (breakpoint) we can define a different layout.
(see also 'layouts' and 'gridCols' arguments)
Default value is {lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0}
- `gridCols` (Dict; optional): ({breakpoint: number}) the number of columns in the grid layout.
Default value is {lg: 12, md: 10, sm: 6, xs: 4, xxs: 2}.
- `save` (Bool; optional): (bool) If True, then the layout is automatically saved on client browser.
Default value is True
- `clearSavedLayout` (Bool; optional): (bool) If set to true, the position of elements saved on client side
will be cleared on the next page load.
- `ncols` (Real; optional): ({breakpoint: number}) the default number of columns by item.
Default value is {lg: 6, md: 5, sm: 3, xs: 4, xxs: 2}.
- `nrows` (Real; optional): (number) the default number of row by item.
Default value is 8.
- `height` (Real; optional): (number) height of a row (in px).
Default value is 30.
- `className` (String; optional): (string) class passed to the react-grid-layout component
- `style` (Dict; optional): (dict) css style passed to the react-grid-layout component
"""
function ''_responsivegridlayout(; kwargs...)
        available_props = Symbol[:children, :id, :layouts, :breakpoints, :gridCols, :save, :clearSavedLayout, :ncols, :nrows, :height, :className, :style]
        wild_props = Symbol[]
        return Component("''_responsivegridlayout", "ResponsiveGridLayout", "dash_draggable", available_props, wild_props; kwargs...)
end

''_responsivegridlayout(children::Any; kwargs...) = ''_responsivegridlayout(;kwargs..., children = children)
''_responsivegridlayout(children_maker::Function; kwargs...) = ''_responsivegridlayout(children_maker(); kwargs...)

