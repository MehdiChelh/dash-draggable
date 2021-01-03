# AUTO GENERATED FILE - DO NOT EDIT

export ''_dashdraggableresponsive

"""
    ''_dashdraggableresponsive(;kwargs...)
    ''_dashdraggableresponsive(children::Any;kwargs...)
    ''_dashdraggableresponsive(children_maker::Function;kwargs...)


A DashDraggableResponsive component.
ExampleComponent is an example component.
It takes a property, `label`, and
displays it.
It renders an input with the property `value`
which is editable by the user.
Keyword arguments:
- `children` (Array of a list of or a singular dash component, string or numbers | a list of or a singular dash component, string or number; optional)
- `id` (String; optional): The ID used to identify this component in Dash callbacks.
- `value` (String; optional): The value displayed in the input.
- `layout` (Array of Dicts; optional)
- `ncols` (Real; optional)
- `nrows` (Real; optional)
"""
function ''_dashdraggableresponsive(; kwargs...)
        available_props = Symbol[:children, :id, :value, :layout, :ncols, :nrows]
        wild_props = Symbol[]
        return Component("''_dashdraggableresponsive", "DashDraggableResponsive", "dash_draggable", available_props, wild_props; kwargs...)
end

''_dashdraggableresponsive(children::Any; kwargs...) = ''_dashdraggableresponsive(;kwargs..., children = children)
''_dashdraggableresponsive(children_maker::Function; kwargs...) = ''_dashdraggableresponsive(children_maker(); kwargs...)

