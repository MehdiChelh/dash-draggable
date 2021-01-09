# AUTO GENERATED FILE - DO NOT EDIT

export ''_dashboarditem

"""
    ''_dashboarditem(;kwargs...)
    ''_dashboarditem(children::Any;kwargs...)
    ''_dashboarditem(children_maker::Function;kwargs...)


A DashboardItem component.
DashboardItem is a wrapper that is intended to be used with DraggableDashboard 
to specify the position and size of the wrapped components.
Keyword arguments:
- `children` (Array of a list of or a singular dash component, string or numbers | a list of or a singular dash component, string or number; optional): The child or list of children wrapped by the component.
- `i` (String; optional): The ID used to identify this component in layout definition.
- `x` (Real; optional): The position on the x axis in number of columns (by default, the  max is 12).
- `y` (Real; optional): The position on the y axis (the unit is 30px, by default)
- `w` (Real; optional): The width of the x axis (default is 6).
- `h` (Real; optional): The height on the of y axis (default is 4)
- `static` (Bool; optional): If true, equal to `isDraggable: false, isResizable: false`.
- `isDraggable` (Bool; optional): If false, will not be draggable. Overrides `static`.
- `isResizable` (Bool; optional): If false, will not be resizable. Overrides `static`.
- `isBounded` (Bool; optional)
- `maxH` (Real; optional)
- `maxW` (Real; optional)
- `minH` (Real; optional)
- `minW` (Real; optional)
- `moved` (Bool; optional)
- `resizeHandles` (String; optional)
"""
function ''_dashboarditem(; kwargs...)
        available_props = Symbol[:children, :i, :x, :y, :w, :h, :static, :isDraggable, :isResizable, :isBounded, :maxH, :maxW, :minH, :minW, :moved, :resizeHandles]
        wild_props = Symbol[]
        return Component("''_dashboarditem", "DashboardItem", "dash_draggable", available_props, wild_props; kwargs...)
end

''_dashboarditem(children::Any; kwargs...) = ''_dashboarditem(;kwargs..., children = children)
''_dashboarditem(children_maker::Function; kwargs...) = ''_dashboarditem(children_maker(); kwargs...)

