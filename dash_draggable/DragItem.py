# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class DragItem(Component):
    """A DragItem component.
DragItem is a wrapper that can be used with DraggableDashboard 
to specify the position and size of the wrapped components.

Keyword arguments:
- children (list of a list of or a singular dash component, string or numbers | a list of or a singular dash component, string or number; optional): The child or list of children wrapped by the component.
- id (string; optional): The ID used to identify this component in Dash callbacks.
- x (number; default 0): The position on the x axis in number of columns (by default, the  max is 12).
- y (number; default 0): The position on the y axis (the unit is 30px, by default)
- w (number; default DEFAULT_WIDTH): The width of the x axis (default is 6).
- h (number; default DEFAULT_HEIGHT): The height on the of y axis (default is 4)
- static (boolean; optional): If true, equal to `isDraggable: false, isResizable: false`.
- isDraggable (boolean; optional): If false, will not be draggable. Overrides `static`.
- isResizable (boolean; optional): If false, will not be resizable. Overrides `static`.
- isBounded (boolean; optional)
- maxH (number; optional)
- maxW (number; optional)
- minH (number; optional)
- minW (number; optional)
- moved (boolean; optional)
- resizeHandles (string; optional)
- __isDragItem (boolean; default True): This is an internal prop used to identify the component, this property default value is True. 
Setting this value to false is equivalent to not using the DragItem wrapper."""
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, x=Component.UNDEFINED, y=Component.UNDEFINED, w=Component.UNDEFINED, h=Component.UNDEFINED, static=Component.UNDEFINED, isDraggable=Component.UNDEFINED, isResizable=Component.UNDEFINED, isBounded=Component.UNDEFINED, maxH=Component.UNDEFINED, maxW=Component.UNDEFINED, minH=Component.UNDEFINED, minW=Component.UNDEFINED, moved=Component.UNDEFINED, resizeHandles=Component.UNDEFINED, __isDragItem=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'x', 'y', 'w', 'h', 'static', 'isDraggable', 'isResizable', 'isBounded', 'maxH', 'maxW', 'minH', 'minW', 'moved', 'resizeHandles', '__isDragItem']
        self._type = 'DragItem'
        self._namespace = 'dash_draggable'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'id', 'x', 'y', 'w', 'h', 'static', 'isDraggable', 'isResizable', 'isBounded', 'maxH', 'maxW', 'minH', 'minW', 'moved', 'resizeHandles', '__isDragItem']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(DragItem, self).__init__(children=children, **args)
