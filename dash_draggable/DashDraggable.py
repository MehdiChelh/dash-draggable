# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class DashDraggable(Component):
    """A DashDraggable component.
ExampleComponent is an example component.
It takes a property, `label`, and
displays it.
It renders an input with the property `value`
which is editable by the user.

Keyword arguments:
- children (list of a list of or a singular dash component, string or numbers | a list of or a singular dash component, string or number; optional)
- id (string; optional): The ID used to identify this component in Dash callbacks.
- value (string; optional): The value displayed in the input.
- layout (list of dicts; optional)
- saveToClient (boolean; default True)
- clearLayoutOnClient (boolean; default False)
- ncols (number; optional)
- nrows (number; optional)"""
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, value=Component.UNDEFINED, layout=Component.UNDEFINED, saveToClient=Component.UNDEFINED, clearLayoutOnClient=Component.UNDEFINED, ncols=Component.UNDEFINED, nrows=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'value', 'layout', 'saveToClient', 'clearLayoutOnClient', 'ncols', 'nrows']
        self._type = 'DashDraggable'
        self._namespace = 'dash_draggable'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'id', 'value', 'layout', 'saveToClient', 'clearLayoutOnClient', 'ncols', 'nrows']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(DashDraggable, self).__init__(children=children, **args)
