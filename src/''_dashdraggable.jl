# AUTO GENERATED FILE - DO NOT EDIT

export ''_dashdraggable

"""
    ''_dashdraggable(;kwargs...)
    ''_dashdraggable(children::Any;kwargs...)
    ''_dashdraggable(children_maker::Function;kwargs...)


A DashDraggable component.
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
- `saveToClient` (Bool; optional)
- `clearLayoutOnClient` (Bool; optional)
- `ncols` (Real; optional)
- `nrows` (Real; optional)
"""
function ''_dashdraggable(; kwargs...)
        available_props = Symbol[:children, :id, :value, :layout, :saveToClient, :clearLayoutOnClient, :ncols, :nrows]
        wild_props = Symbol[]
        return Component("''_dashdraggable", "DashDraggable", "dash_draggable", available_props, wild_props; kwargs...)
end

''_dashdraggable(children::Any; kwargs...) = ''_dashdraggable(;kwargs..., children = children)
''_dashdraggable(children_maker::Function; kwargs...) = ''_dashdraggable(children_maker(); kwargs...)

