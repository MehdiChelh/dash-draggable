# AUTO GENERATED FILE - DO NOT EDIT

export ''_dashboarditemresponsive

"""
    ''_dashboarditemresponsive(;kwargs...)
    ''_dashboarditemresponsive(children::Any;kwargs...)
    ''_dashboarditemresponsive(children_maker::Function;kwargs...)


A DashboardItemResponsive component.
DashboardItemResponsive is a wrapper that is intended to be used with DraggableDashboard.
DashboardItemResponsive specify the position and size of the item on the dashboard.
Keyword arguments:
- `children` (Array of a list of or a singular dash component, string or numbers | a list of or a singular dash component, string or number; optional): The child or list of children wrapped by the component.
- `id` (String | Dict; optional): The ID used to identify this component in Dash callbacks.
- `x` (Real | Dict; optional): The position on the x axis in number of columns (by default, the  max is 12).
- `y` (Real | Dict; optional): The position on the y axis (the unit is 30px, by default)
- `w` (Real | Dict; optional): The width of the x axis (default is 6).
- `h` (Real | Dict; optional): The height on the of y axis (default is 4)
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
- `__isDashboardItem` (Bool; optional): This is an internal prop used to identify the component, this property default value is True. 
Setting this value to false is equivalent to not using the DashboardItem wrapper.
"""
function ''_dashboarditemresponsive(; kwargs...)
        available_props = Symbol[:children, :id, :x, :y, :w, :h, :static, :isDraggable, :isResizable, :isBounded, :maxH, :maxW, :minH, :minW, :moved, :resizeHandles, :__isDashboardItem]
        wild_props = Symbol[]
        return Component("''_dashboarditemresponsive", "DashboardItemResponsive", "dash_draggable", available_props, wild_props; kwargs...)
end

''_dashboarditemresponsive(children::Any; kwargs...) = ''_dashboarditemresponsive(;kwargs..., children = children)
''_dashboarditemresponsive(children_maker::Function; kwargs...) = ''_dashboarditemresponsive(children_maker(); kwargs...)

