# AUTO GENERATED FILE - DO NOT EDIT

export ''_dragitem

"""
    ''_dragitem(;kwargs...)
    ''_dragitem(children::Any;kwargs...)
    ''_dragitem(children_maker::Function;kwargs...)


A DragItem component.
DragItem is a wrapper that can be used with DraggableDashboard 
to specify the position and size of the wrapped components.
Keyword arguments:
- `children` (Array of a list of or a singular dash component, string or numbers | a list of or a singular dash component, string or number; optional): The child or list of children wrapped by the component.
- `id` (String; optional): The ID used to identify this component in Dash callbacks.
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
- `__isDragItem` (Bool; optional): This is an internal prop used to identify the component, this property default value is True. 
Setting this value to false is equivalent to not using the DragItem wrapper.
"""
function ''_dragitem(; kwargs...)
        available_props = Symbol[:children, :id, :x, :y, :w, :h, :static, :isDraggable, :isResizable, :isBounded, :maxH, :maxW, :minH, :minW, :moved, :resizeHandles, :__isDragItem]
        wild_props = Symbol[]
        return Component("''_dragitem", "DragItem", "dash_draggable", available_props, wild_props; kwargs...)
end

''_dragitem(children::Any; kwargs...) = ''_dragitem(;kwargs..., children = children)
''_dragitem(children_maker::Function; kwargs...) = ''_dragitem(children_maker(); kwargs...)

