# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class GridLayout(Component):
    """A GridLayout component.
GridLayout is a component for building
dashboards with draggable and resizable items.
It takes a list of children and display them in
div elements that can be moved around the page.
The initial size of each element can either be
defined with the layout argument or by wrapping
each element with the DashboardItem component.
By default, GridLayout will saved the
position of the elements on client side, when
moved on the page. But you can also save it
on server side by defining a callback with :
`Input("<my-id>", "layout")`.

Keyword arguments:
- children (list of a list of or a singular dash component, string or numbers | a list of or a singular dash component, string or number; optional): Children is a list of the elements to drag and resize on the dashboard.
It can be a list of dash Components and/or DashboardItem.
- id (string; optional): (string) The ID used to identify this component in Dash callbacks.
The id is also used to automatically save the layout on client side.
- layout (list of dicts; optional): Layout is a list of dictionnary with the format:
{x: number, y: number, w: number, h: number}
The index into the layout must match the id used on each item component with DashboardItem.
If you choose to use custom keys, you can specify that key in the layout
array objects like so:
{i: string, x: number, y: number, w: number, h: number}
The ID used to identify this component in Dash callbacks.
The id is also used to automatically save the layout on client side.
- save (boolean; default True): (bool) If False, then the layout is not saved in the browser.
Default value is True.
- clearSavedLayout (boolean; default False): (bool) If set to true, then the layout saved in the client browser
will be cleared on page load.
- ncols (number; optional): (number) the default number of columns by item.
Default value is 6.
- nrows (number; optional): (number) the default number of row by item.
Default value is 8.
- width (number; optional): (number) width (in px).
Default value is 1200.
- gridCols (number; optional): (number) number of columns in the grid layout.
Default value is 12.
- height (number; optional): (number) height of a row (in px).
Default value is 30.
- className (string; default ''): (string) class passed to the react-grid-layout component
- style (dict; optional): (dict) css style passed to the react-grid-layout component
- autoSize (boolean; default True)
- draggableCancel (string; default '')
- draggableHandle (string; default '')
- verticalCompact (boolean; default True)
- compactType (a value equal to: 'vertical', 'horizontal'; default 'vertical')
- margin (list of numbers; default [10, 10])
- containerPadding (list of numbers; default [10, 10])
- isDraggable (boolean; default True)
- isResizable (boolean; default True)
- isBounded (boolean; default False)
- useCSSTransforms (boolean; default True)
- transformScale (number; default 1)
- preventCollision (boolean; default False)
- isDroppable (boolean; default False)
- resizeHandles (list of a value equal to: 's', 'w', 'e', 'n', 'sw', 'nw', 'se', 'ne's; default ['se'])"""
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, layout=Component.UNDEFINED, save=Component.UNDEFINED, clearSavedLayout=Component.UNDEFINED, ncols=Component.UNDEFINED, nrows=Component.UNDEFINED, width=Component.UNDEFINED, gridCols=Component.UNDEFINED, height=Component.UNDEFINED, className=Component.UNDEFINED, style=Component.UNDEFINED, autoSize=Component.UNDEFINED, draggableCancel=Component.UNDEFINED, draggableHandle=Component.UNDEFINED, verticalCompact=Component.UNDEFINED, compactType=Component.UNDEFINED, margin=Component.UNDEFINED, containerPadding=Component.UNDEFINED, isDraggable=Component.UNDEFINED, isResizable=Component.UNDEFINED, isBounded=Component.UNDEFINED, useCSSTransforms=Component.UNDEFINED, transformScale=Component.UNDEFINED, preventCollision=Component.UNDEFINED, isDroppable=Component.UNDEFINED, resizeHandles=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'layout', 'save', 'clearSavedLayout', 'ncols', 'nrows', 'width', 'gridCols', 'height', 'className', 'style', 'autoSize', 'draggableCancel', 'draggableHandle', 'verticalCompact', 'compactType', 'margin', 'containerPadding', 'isDraggable', 'isResizable', 'isBounded', 'useCSSTransforms', 'transformScale', 'preventCollision', 'isDroppable', 'resizeHandles']
        self._type = 'GridLayout'
        self._namespace = 'dash_draggable'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'id', 'layout', 'save', 'clearSavedLayout', 'ncols', 'nrows', 'width', 'gridCols', 'height', 'className', 'style', 'autoSize', 'draggableCancel', 'draggableHandle', 'verticalCompact', 'compactType', 'margin', 'containerPadding', 'isDraggable', 'isResizable', 'isBounded', 'useCSSTransforms', 'transformScale', 'preventCollision', 'isDroppable', 'resizeHandles']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(GridLayout, self).__init__(children=children, **args)
