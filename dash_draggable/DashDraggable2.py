# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class DashDraggable2(Component):
    """A DashDraggable2 component.
ExampleComponent is an example component.
It takes a property, `label`, and
displays it.
It renders an input with the property `value`
which is editable by the user.

Keyword arguments:
- children (list of a list of or a singular dash component, string or numbers | a list of or a singular dash component, string or number; optional)
- id (string; optional): The ID used to identify this component in Dash callbacks.
- value (string; optional): The value displayed in the input."""
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, value=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'value']
        self._type = 'DashDraggable2'
        self._namespace = 'dash_draggable'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'id', 'value']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(DashDraggable2, self).__init__(children=children, **args)
