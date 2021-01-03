# AUTO GENERATED FILE - DO NOT EDIT

export ''_dashdraggable2

"""
    ''_dashdraggable2(;kwargs...)
    ''_dashdraggable2(children::Any;kwargs...)
    ''_dashdraggable2(children_maker::Function;kwargs...)


A DashDraggable2 component.
ExampleComponent is an example component.
It takes a property, `label`, and
displays it.
It renders an input with the property `value`
which is editable by the user.
Keyword arguments:
- `children` (Array of a list of or a singular dash component, string or numbers | a list of or a singular dash component, string or number; optional)
- `id` (String; optional): The ID used to identify this component in Dash callbacks.
- `value` (String; optional): The value displayed in the input.
"""
function ''_dashdraggable2(; kwargs...)
        available_props = Symbol[:children, :id, :value]
        wild_props = Symbol[]
        return Component("''_dashdraggable2", "DashDraggable2", "dash_draggable", available_props, wild_props; kwargs...)
end

''_dashdraggable2(children::Any; kwargs...) = ''_dashdraggable2(;kwargs..., children = children)
''_dashdraggable2(children_maker::Function; kwargs...) = ''_dashdraggable2(children_maker(); kwargs...)

