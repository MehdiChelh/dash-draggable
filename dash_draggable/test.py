# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class test(Component):
    """A test component.
A reactive, fluid grid layout with draggable, resizable components.

Keyword arguments:
"""
    @_explicitize_args
    def __init__(self, autoSize=Component.UNDEFINED, cols=Component.UNDEFINED, className=Component.UNDEFINED, style=Component.UNDEFINED, draggableHandle=Component.UNDEFINED, draggableCancel=Component.UNDEFINED, containerPadding=Component.UNDEFINED, rowHeight=Component.UNDEFINED, maxRows=Component.UNDEFINED, layout=Component.UNDEFINED, margin=Component.UNDEFINED, isBounded=Component.UNDEFINED, isDraggable=Component.UNDEFINED, isResizable=Component.UNDEFINED, isDroppable=Component.UNDEFINED, useCSSTransforms=Component.UNDEFINED, transformScale=Component.UNDEFINED, verticalCompact=Component.UNDEFINED, compactType=Component.UNDEFINED, preventCollision=Component.UNDEFINED, droppingItem=Component.UNDEFINED, resizeHandles=Component.UNDEFINED, onLayoutChange=Component.UNDEFINED, onDragStart=Component.UNDEFINED, onDrag=Component.UNDEFINED, onDragStop=Component.UNDEFINED, onResizeStart=Component.UNDEFINED, onResize=Component.UNDEFINED, onResizeStop=Component.UNDEFINED, onDrop=Component.UNDEFINED, **kwargs):
        self._prop_names = []
        self._type = 'test'
        self._namespace = 'dash_draggable'
        self._valid_wildcard_attributes =            []
        self.available_properties = []
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(test, self).__init__(**args)
