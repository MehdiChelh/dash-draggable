# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class DraggableDashboard(Component):
    """A DraggableDashboard component.
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
- children (list of a list of or a singular dash component, string or numbers | a list of or a singular dash component, string or number; optional): Children is a list of the elements to drag and resize on the dashboard.
It can be a list(Pytyhon)/vector(R) of dash Components and/or DashboardItem.
- id (string; optional): (string) The ID used to identify this component in Dash callbacks.
The id is also used to automatically save the layout on client side.
- layout (list of dicts; optional): Layout is a list(python)/vector(R) of dictionnary(Python)/list(R) with the format:
{x: number, y: number, w: number, h: number}
The index into the layout must match the id used on each item component with DashboardItem.
If you choose to use custom keys, you can specify that key in the layout
array objects like so:
{i: string, x: number, y: number, w: number, h: number}
The ID used to identify this component in Dash callbacks.
The id is also used to automatically save the layout on client side.
- saveToClient (boolean; default True): (bool) It specify if the layout should automatically be saved.
- clearLayoutOnClient (boolean; default False): (bool) If set to true, then the layout saved in the client browser
will be cleared in the next page load.
- items_by_row (number; optional): (number) the default number of columns for an item with no predefined size.
The size of items can either be defined in the layout argument or in DashboardItem.
- nrows (number; optional): (number) the default number of items by row.
Default is 2."""
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, layout=Component.UNDEFINED, saveToClient=Component.UNDEFINED, clearLayoutOnClient=Component.UNDEFINED, items_by_row=Component.UNDEFINED, nrows=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'layout', 'saveToClient', 'clearLayoutOnClient', 'items_by_row', 'nrows']
        self._type = 'DraggableDashboard'
        self._namespace = 'dash_draggable'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'id', 'layout', 'saveToClient', 'clearLayoutOnClient', 'items_by_row', 'nrows']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(DraggableDashboard, self).__init__(children=children, **args)
