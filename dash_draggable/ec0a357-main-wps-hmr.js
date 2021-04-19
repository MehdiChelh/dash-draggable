webpackHotUpdatedash_draggable("main",{

/***/ "./src/lib/components/ResponsiveGridLayout.react.js":
/*!**********************************************************!*\
  !*** ./src/lib/components/ResponsiveGridLayout.react.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ResponsiveGridLayout; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_grid_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-grid-layout */ "./node_modules/react-grid-layout/index.js");
/* harmony import */ var react_grid_layout__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_grid_layout__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants */ "./src/lib/constants.js");
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../localStorage */ "./src/lib/localStorage.js");
/* harmony import */ var _node_modules_react_grid_layout_css_styles_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../node_modules/react-grid-layout/css/styles.css */ "./node_modules/react-grid-layout/css/styles.css");
/* harmony import */ var _node_modules_react_grid_layout_css_styles_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_react_grid_layout_css_styles_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_react_resizable_css_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../node_modules/react-resizable/css/styles.css */ "./node_modules/react-resizable/css/styles.css");
/* harmony import */ var _node_modules_react_resizable_css_styles_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_node_modules_react_resizable_css_styles_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./style.css */ "./src/lib/components/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_7__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









var ResponsiveReactGridLayout = Object(react_grid_layout__WEBPACK_IMPORTED_MODULE_2__["WidthProvider"])(react_grid_layout__WEBPACK_IMPORTED_MODULE_2__["Responsive"]);

var defaultItemLayout = function defaultItemLayout(item_layout, id, key, ncols, max_cols) {
  var nb_items_x = Math.floor(max_cols / ncols);
  var col = key % nb_items_x;
  var row = Math.floor(key / nb_items_x);
  var defaultChildLayout = {
    i: id || key.toString(),
    x: col * ncols,
    y: row,
    w: ncols,
    h: _constants__WEBPACK_IMPORTED_MODULE_3__["NROWS"]
  };
  return _objectSpread(_objectSpread(_objectSpread({}, defaultChildLayout), item_layout), {}, {
    i: id || key.toString(),
    x: item_layout.x ? item_layout.x : defaultChildLayout.x,
    y: item_layout.y ? item_layout.y : defaultChildLayout.y,
    w: item_layout.w ? item_layout.w : defaultChildLayout.w,
    h: item_layout.h ? item_layout.h : defaultChildLayout.h
  });
};
/**
 * DraggableDashboard is a component for building
 * dashboards with draggable and resizable items.
 * It takes a list of children and display them in
 * div elements that can be moved around the page.
 * The initial size of each element can either be
 * defined with the layout argument or by wrapping
 * each element with the DashboardItem component.
 * By default, DraggableDashboard will saved the
 * position of the elements on client side, when
 * moved on the page. But you can also save it
 * on server side by defining a callback with :
 * `Input("<my-id>", "layout")`.
 */


var ResponsiveGridLayout = /*#__PURE__*/function (_Component) {
  _inherits(ResponsiveGridLayout, _Component);

  var _super = _createSuper(ResponsiveGridLayout);

  function ResponsiveGridLayout() {
    _classCallCheck(this, ResponsiveGridLayout);

    return _super.apply(this, arguments);
  }

  _createClass(ResponsiveGridLayout, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      var _this$props$children = this.props.children,
          children = _this$props$children === void 0 ? [] : _this$props$children;
      var _this$props = this.props,
          id = _this$props.id,
          providedLayouts = _this$props.layouts,
          clearSavedLayout = _this$props.clearSavedLayout,
          _this$props$ncols = _this$props.ncols,
          ncols = _this$props$ncols === void 0 ? _constants__WEBPACK_IMPORTED_MODULE_3__["NCOLS_RESPONSIVE"] : _this$props$ncols,
          _this$props$breakpoin = _this$props.breakpoints,
          breakpoints = _this$props$breakpoin === void 0 ? _constants__WEBPACK_IMPORTED_MODULE_3__["BREAKPOINTS"] : _this$props$breakpoin,
          _this$props$gridCols = _this$props.gridCols,
          gridCols = _this$props$gridCols === void 0 ? _constants__WEBPACK_IMPORTED_MODULE_3__["GRID_COLS_RESPONSIVE"] : _this$props$gridCols;
      var layouts = {};
      var child_props, child_id, isDashboardItem;
      children = Array.isArray(children) ? children : [children]; // Build layout
      //   Priority to client local store [except if specified]
      //   Then layout
      //   And then DashboardItem [except if sepcified])

      if (clearSavedLayout) {
        Object(_localStorage__WEBPACK_IMPORTED_MODULE_4__["saveToLs"])("".concat(id, "-layouts"), null);
      }

      var savedLayout = Object(_localStorage__WEBPACK_IMPORTED_MODULE_4__["getFromLs"])("".concat(id, "-layouts"));
      console.log({
        savedLayout: savedLayout
      });

      for (var bkp in breakpoints) {
        // eslint-disable-next-line no-loop-func
        var layout = children.map(function (child, key) {
          var item_layout; // Get the child id and props
          // Depending on wether it is a string, a classic React component, or a DashboardItem

          if (typeof child === 'string') {
            child_id = key.toString();
          } else {
            child_props = child.props._dashprivate_layout ? child.props._dashprivate_layout.props : child.props;
            isDashboardItem = (child.props._dashprivate_layout ? child.props._dashprivate_layout.type : child.type.name) === 'DashboardItem';
            child_id = isDashboardItem ? child_props.i : child_props.id;
          } // Define the layout for the specific item x breakpoint


          if (savedLayout && savedLayout[bkp]) {
            item_layout = savedLayout[bkp].find(function (el) {
              return el.i === child_id || el.i === key.toString();
            });
          }

          if (!item_layout && providedLayouts && providedLayouts[bkp]) {
            item_layout = providedLayouts[bkp].find(function (el) {
              return el.i === child_id;
            });
          }

          if (!item_layout && isDashboardItem) {
            var _child_props = child_props,
                _child_props$id = _child_props.id,
                _id = _child_props$id === void 0 ? {} : _child_props$id,
                _child_props$x = _child_props.x,
                x = _child_props$x === void 0 ? {} : _child_props$x,
                _child_props$y = _child_props.y,
                y = _child_props$y === void 0 ? {} : _child_props$y,
                _child_props$w = _child_props.w,
                w = _child_props$w === void 0 ? {} : _child_props$w,
                _child_props$h = _child_props.h,
                h = _child_props$h === void 0 ? {} : _child_props$h;

            var item_provided_layout = {
              i: typeof _id === 'string' ? _id : _id[bkp],
              x: typeof x === 'number' ? x : x[bkp],
              y: typeof y === 'number' ? y : y[bkp],
              w: typeof w === 'number' ? w : w[bkp],
              h: typeof h === 'number' ? h : h[bkp]
            };
            item_layout = defaultItemLayout(item_provided_layout, child_id, key, ncols[bkp], gridCols[bkp]);
          }

          if (!item_layout) {
            item_layout = defaultItemLayout({}, child_id, key, ncols[bkp], gridCols[bkp]);
          }

          return item_layout;
        });
        layouts[bkp] = layout;
      }

      console.log(layouts);
      this.layouts = layouts;
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props$children2 = this.props.children,
          children = _this$props$children2 === void 0 ? [] : _this$props$children2;
      var _this$props2 = this.props,
          id = _this$props2.id,
          save = _this$props2.save,
          setProps = _this$props2.setProps,
          _this$props2$breakpoi = _this$props2.breakpoints,
          breakpoints = _this$props2$breakpoi === void 0 ? _constants__WEBPACK_IMPORTED_MODULE_3__["BREAKPOINTS"] : _this$props2$breakpoi,
          _this$props2$gridCols = _this$props2.gridCols,
          gridCols = _this$props2$gridCols === void 0 ? _constants__WEBPACK_IMPORTED_MODULE_3__["GRID_COLS_RESPONSIVE"] : _this$props2$gridCols,
          _this$props2$height = _this$props2.height,
          height = _this$props2$height === void 0 ? _constants__WEBPACK_IMPORTED_MODULE_3__["ROW_HEIGHT"] : _this$props2$height,
          className = _this$props2.className,
          style = _this$props2.style;
      children = Array.isArray(children) ? children : [children];
      console.log({
        layout: this.layouts
      });
      console.log({
        gridCols: gridCols
      });
      console.log({
        className: className
      });
      console.log({
        style: style
      });
      console.log({
        height: height
      });
      console.log({
        breakpoints: breakpoints
      });
      console.log({
        props: this.props
      });
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ResponsiveReactGridLayout, _extends({
        className: className,
        style: style,
        layouts: this.layouts,
        cols: gridCols,
        breakpoints: breakpoints,
        rowHeight: height,
        onLayoutChange: function onLayoutChange(current_layout, all_layouts) {
          _this.layouts = all_layouts;
          console.log({
            layoutchange: {
              all_layouts: all_layouts,
              current_layout: current_layout
            }
          });
          setProps({
            current_layout: current_layout,
            layouts: all_layouts
          });

          if (save) {
            Object(_localStorage__WEBPACK_IMPORTED_MODULE_4__["saveToLs"])("".concat(id, "-layouts"), all_layouts);
          }
        }
      }, this.props), children.map(function (child, key) {
        var _key;

        if (child.props) {
          var child_props = child.props._dashprivate_layout ? child.props._dashprivate_layout.props : child.props;
          var isDashboardItem = (child.props._dashprivate_layout ? child.props._dashprivate_layout.type : child.type.name) === 'DashboardItem';
          _key = isDashboardItem ? child_props.i : child_props.id || key.toString();
        } else {
          _key = key.toString();
        }

        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          key: _key,
          className: "item"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "item-top"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: "item-top-content"
        }, "...")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "item-content",
          onMouseDown: function onMouseDown(e) {
            return e.stopPropagation();
          }
        }, child));
      }));
    }
  }]);

  return ResponsiveGridLayout;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);


ResponsiveGridLayout.defaultProps = {
  save: true,
  clearSavedLayout: false,
  children: [],
  style: {},
  className: '',
  // Other props defined by react-grid-layout
  autoSize: true,
  // A CSS selector for tags that will not be draggable.
  draggableCancel: '',
  // A CSS selector for tags that will act as the draggable handle.
  draggableHandle: '',
  // If true, the layout will compact vertically
  verticalCompact: true,
  // Compaction type.
  compactType: 'vertical',
  // Margin between items [x, y] in px.
  margin: [10, 10],
  // Padding inside the container [x, y] in px
  containerPadding: [10, 10],
  // Flags
  isDraggable: true,
  isResizable: true,
  isBounded: false,
  useCSSTransforms: true,
  transformScale: 1,
  preventCollision: false,
  isDroppable: false,
  resizeHandles: ['se']
};
ResponsiveGridLayout.propTypes = {
  /**
   * (string) The ID used to identify this component in Dash callbacks.
   * The id is also used to automatically save the layout on client side.
   */
  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Layout is a list(python)/vector(R) of dictionnary(Python)/list(R) with the format:
   * {x: number, y: number, w: number, h: number}
   * The index into the layout must match the id used on each item component with DashboardItem.
   * If you choose to use custom keys, you can specify that key in the layout
   * array objects like so:
   * {i: string, x: number, y: number, w: number, h: number}
   * The ID used to identify this component in Dash callbacks.
   * The id is also used to automatically save the layout on client side.
   */
  layouts: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,

  /**
   * ({breakpoint: number}) The breakpoints for the responsive layout.
   * For each screen size (breakpoint) we can define a different layout.
   * (see also 'layouts' and 'gridCols' arguments)
   * Default value is {lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0}
   */
  breakpoints: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,

  /**
   * ({breakpoint: number}) the number of columns in the grid layout.
   * Default value is {lg: 12, md: 10, sm: 6, xs: 4, xxs: 2}.
   */
  gridCols: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  // margin: PropTypes.oneOfType([
  //     PropTypes.object,
  //     PropTypes.arrayOf(PropTypes.object),
  // ]),
  // containerPadding: PropTypes.oneOfType([
  //     PropTypes.object,
  //     PropTypes.arrayOf(PropTypes.object),
  // ]),

  /**
   * Children is a list of the items (dash Components and/or
   * DashboardItem) to diplay on the layout.
   * By default all the items can be dragged and resized.
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node), prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node]),

  /**
   * (bool) If True, then the layout is automatically saved on client browser.
   * Default value is True
   */
  save: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /**
   * (bool) If set to true, the position of elements saved on client side
   * will be cleared on the next page load.
   */
  clearSavedLayout: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /**
   * ({breakpoint: number}) the default number of columns by item.
   * Default value is {lg: 6, md: 5, sm: 3, xs: 4, xxs: 2}.
   */
  ncols: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,

  /**
   * (number) the default number of row by item.
   * Default value is 8.
   */
  nrows: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,

  /**
   * (number) height of a row (in px).
   * Default value is 30.
   */
  height: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,

  /**
   * (string) class passed to the react-grid-layout component
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * (dict) css style passed to the react-grid-layout component
   */
  style: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  // Other props defined by react-grid-layout
  // If true, the container height swells and contracts to fit contents
  autoSize: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  // A CSS selector for tags that will not be draggable.
  // For example: draggableCancel:'.MyNonDraggableAreaClassName'
  // If you forget the leading . it will not work.
  draggableCancel: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  // A CSS selector for tags that will act as the draggable handle.
  // For example: draggableHandle:'.MyDragHandleClassName'
  // If you forget the leading . it will not work.
  draggableHandle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  // If true, the layout will compact vertically
  verticalCompact: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  // Compaction type.
  compactType: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['vertical', 'horizontal']),
  // Margin between items [x, y] in px.
  margin: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number), prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object]),
  // Padding inside the container [x, y] in px
  containerPadding: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number), prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object]),
  //
  // Flags
  //
  isDraggable: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  isResizable: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  isBounded: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  // Uses CSS3 translate() instead of position top/left.
  // This makes about 6x faster paint performance
  useCSSTransforms: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  // If parent DOM node of ResponsiveReactGridLayout or ReactGridLayout has "transform: scale(n)" css property,
  // we should set scale coefficient to avoid render artefacts while dragging.
  transformScale: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  // If true, grid items won't change position when being
  // dragged over.
  preventCollision: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  // If true, droppable elements (with `draggable={true}` attribute)
  // can be dropped on the grid. It triggers "onDrop" callback
  // with position and event object as parameters.
  // It can be useful for dropping an element in a specific position
  //
  // NOTE: In case of using Firefox you should add
  // `onDragStart={e => e.dataTransfer.setData('text/plain', '')}` attribute
  // along with `draggable={true}` otherwise this feature will work incorrect.
  // onDragStart attribute is required for Firefox for a dragging initialization
  // @see https://bugzilla.mozilla.org/show_bug.cgi?id=568313
  isDroppable: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  // Defines which resize handles should be rendered
  // Allows for any combination of:
  // 's' - South handle (bottom-center)
  // 'w' - West handle (left-center)
  // 'e' - East handle (right-center)
  // 'n' - North handle (top-center)
  // 'sw' - Southwest handle (bottom-left)
  // 'nw' - Northwest handle (top-left)
  // 'se' - Southeast handle (bottom-right)
  // 'ne' - Northeast handle (top-right)
  resizeHandles: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['s', 'w', 'e', 'n', 'sw', 'nw', 'se', 'ne'])),

  /**
   * Dash-assigned callback that should be called to report property changes
   * to Dash, to make them available for callbacks.
   */
  setProps: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYXNoX2RyYWdnYWJsZS8uL3NyYy9saWIvY29tcG9uZW50cy9SZXNwb25zaXZlR3JpZExheW91dC5yZWFjdC5qcyJdLCJuYW1lcyI6WyJSZXNwb25zaXZlUmVhY3RHcmlkTGF5b3V0Iiwid2lkdGhQcm92aWRlciIsIlJlc3BvbnNpdmUiLCJkZWZhdWx0SXRlbUxheW91dCIsIml0ZW1fbGF5b3V0IiwiaWQiLCJrZXkiLCJuY29scyIsIm1heF9jb2xzIiwibmJfaXRlbXNfeCIsIk1hdGgiLCJmbG9vciIsImNvbCIsInJvdyIsImRlZmF1bHRDaGlsZExheW91dCIsImkiLCJ0b1N0cmluZyIsIngiLCJ5IiwidyIsImgiLCJOUk9XUyIsIlJlc3BvbnNpdmVHcmlkTGF5b3V0IiwicHJvcHMiLCJjaGlsZHJlbiIsInByb3ZpZGVkTGF5b3V0cyIsImxheW91dHMiLCJjbGVhclNhdmVkTGF5b3V0IiwiTkNPTFNfUkVTUE9OU0lWRSIsImJyZWFrcG9pbnRzIiwiQlJFQUtQT0lOVFMiLCJncmlkQ29scyIsIkdSSURfQ09MU19SRVNQT05TSVZFIiwiY2hpbGRfcHJvcHMiLCJjaGlsZF9pZCIsImlzRGFzaGJvYXJkSXRlbSIsIkFycmF5IiwiaXNBcnJheSIsInNhdmVUb0xzIiwic2F2ZWRMYXlvdXQiLCJnZXRGcm9tTHMiLCJjb25zb2xlIiwibG9nIiwiYmtwIiwibGF5b3V0IiwibWFwIiwiY2hpbGQiLCJfZGFzaHByaXZhdGVfbGF5b3V0IiwidHlwZSIsIm5hbWUiLCJmaW5kIiwiZWwiLCJpdGVtX3Byb3ZpZGVkX2xheW91dCIsInNhdmUiLCJzZXRQcm9wcyIsImhlaWdodCIsIlJPV19IRUlHSFQiLCJjbGFzc05hbWUiLCJzdHlsZSIsImN1cnJlbnRfbGF5b3V0IiwiYWxsX2xheW91dHMiLCJsYXlvdXRjaGFuZ2UiLCJfa2V5IiwiZSIsInN0b3BQcm9wYWdhdGlvbiIsIkNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyIsImF1dG9TaXplIiwiZHJhZ2dhYmxlQ2FuY2VsIiwiZHJhZ2dhYmxlSGFuZGxlIiwidmVydGljYWxDb21wYWN0IiwiY29tcGFjdFR5cGUiLCJtYXJnaW4iLCJjb250YWluZXJQYWRkaW5nIiwiaXNEcmFnZ2FibGUiLCJpc1Jlc2l6YWJsZSIsImlzQm91bmRlZCIsInVzZUNTU1RyYW5zZm9ybXMiLCJ0cmFuc2Zvcm1TY2FsZSIsInByZXZlbnRDb2xsaXNpb24iLCJpc0Ryb3BwYWJsZSIsInJlc2l6ZUhhbmRsZXMiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJvYmplY3QiLCJvbmVPZlR5cGUiLCJhcnJheU9mIiwibm9kZSIsImJvb2wiLCJudW1iZXIiLCJucm93cyIsIm9uZU9mIiwiZnVuYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEseUJBQXlCLEdBQUdDLHVFQUFhLENBQUNDLDREQUFELENBQS9DOztBQUVBLElBQU1DLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsQ0FBQ0MsV0FBRCxFQUFjQyxFQUFkLEVBQWtCQyxHQUFsQixFQUF1QkMsS0FBdkIsRUFBOEJDLFFBQTlCLEVBQTJDO0FBQ2pFLE1BQU1DLFVBQVUsR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdILFFBQVEsR0FBR0QsS0FBdEIsQ0FBbkI7QUFDQSxNQUFNSyxHQUFHLEdBQUdOLEdBQUcsR0FBR0csVUFBbEI7QUFDQSxNQUFNSSxHQUFHLEdBQUdILElBQUksQ0FBQ0MsS0FBTCxDQUFXTCxHQUFHLEdBQUdHLFVBQWpCLENBQVo7QUFDQSxNQUFNSyxrQkFBa0IsR0FBRztBQUN2QkMsS0FBQyxFQUFFVixFQUFFLElBQUlDLEdBQUcsQ0FBQ1UsUUFBSixFQURjO0FBRXZCQyxLQUFDLEVBQUVMLEdBQUcsR0FBR0wsS0FGYztBQUd2QlcsS0FBQyxFQUFFTCxHQUhvQjtBQUl2Qk0sS0FBQyxF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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0FULGFBQVcsRUFBRUcsaURBQVMsQ0FBQ00sSUF2Sk07QUF3SjdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0FSLGVBQWEsRUFBRUUsaURBQVMsQ0FBQ0ksT0FBVixDQUNYSixpREFBUyxDQUFDUyxLQUFWLENBQWdCLENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBVyxHQUFYLEVBQWdCLEdBQWhCLEVBQXFCLElBQXJCLEVBQTJCLElBQTNCLEVBQWlDLElBQWpDLEVBQXVDLElBQXZDLENBQWhCLENBRFcsQ0FsS2M7O0FBc0s3QjtBQUNKO0FBQ0E7QUFDQTtBQUNJdEMsVUFBUSxFQUFFNkIsaURBQVMsQ0FBQ1U7QUExS1MsQ0FBakMsQyIsImZpbGUiOiJlYzBhMzU3LW1haW4td3BzLWhtci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQge1Jlc3BvbnNpdmUsIFdpZHRoUHJvdmlkZXIgYXMgd2lkdGhQcm92aWRlcn0gZnJvbSAncmVhY3QtZ3JpZC1sYXlvdXQnO1xyXG5cclxuaW1wb3J0IHtcclxuICAgIE5ST1dTLFxyXG4gICAgUk9XX0hFSUdIVCxcclxuICAgIEJSRUFLUE9JTlRTLFxyXG4gICAgR1JJRF9DT0xTX1JFU1BPTlNJVkUsXHJcbiAgICBOQ09MU19SRVNQT05TSVZFLFxyXG59IGZyb20gJy4uL2NvbnN0YW50cyc7XHJcblxyXG5pbXBvcnQge3NhdmVUb0xzLCBnZXRGcm9tTHN9IGZyb20gJy4uL2xvY2FsU3RvcmFnZSc7XHJcbmltcG9ydCAnLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3JlYWN0LWdyaWQtbGF5b3V0L2Nzcy9zdHlsZXMuY3NzJztcclxuaW1wb3J0ICcuLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVzaXphYmxlL2Nzcy9zdHlsZXMuY3NzJztcclxuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcblxyXG5jb25zdCBSZXNwb25zaXZlUmVhY3RHcmlkTGF5b3V0ID0gd2lkdGhQcm92aWRlcihSZXNwb25zaXZlKTtcclxuXHJcbmNvbnN0IGRlZmF1bHRJdGVtTGF5b3V0ID0gKGl0ZW1fbGF5b3V0LCBpZCwga2V5LCBuY29scywgbWF4X2NvbHMpID0+IHtcclxuICAgIGNvbnN0IG5iX2l0ZW1zX3ggPSBNYXRoLmZsb29yKG1heF9jb2xzIC8gbmNvbHMpO1xyXG4gICAgY29uc3QgY29sID0ga2V5ICUgbmJfaXRlbXNfeDtcclxuICAgIGNvbnN0IHJvdyA9IE1hdGguZmxvb3Ioa2V5IC8gbmJfaXRlbXNfeCk7XHJcbiAgICBjb25zdCBkZWZhdWx0Q2hpbGRMYXlvdXQgPSB7XHJcbiAgICAgICAgaTogaWQgfHwga2V5LnRvU3RyaW5nKCksXHJcbiAgICAgICAgeDogY29sICogbmNvbHMsXHJcbiAgICAgICAgeTogcm93LFxyXG4gICAgICAgIHc6IG5jb2xzLFxyXG4gICAgICAgIGg6IE5ST1dTLFxyXG4gICAgfTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uZGVmYXVsdENoaWxkTGF5b3V0LFxyXG4gICAgICAgIC4uLml0ZW1fbGF5b3V0LFxyXG4gICAgICAgIGk6IGlkIHx8IGtleS50b1N0cmluZygpLFxyXG4gICAgICAgIHg6IGl0ZW1fbGF5b3V0LnggPyBpdGVtX2xheW91dC54IDogZGVmYXVsdENoaWxkTGF5b3V0LngsXHJcbiAgICAgICAgeTogaXRlbV9sYXlvdXQueSA/IGl0ZW1fbGF5b3V0LnkgOiBkZWZhdWx0Q2hpbGRMYXlvdXQueSxcclxuICAgICAgICB3OiBpdGVtX2xheW91dC53ID8gaXRlbV9sYXlvdXQudyA6IGRlZmF1bHRDaGlsZExheW91dC53LFxyXG4gICAgICAgIGg6IGl0ZW1fbGF5b3V0LmggPyBpdGVtX2xheW91dC5oIDogZGVmYXVsdENoaWxkTGF5b3V0LmgsXHJcbiAgICB9O1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIERyYWdnYWJsZURhc2hib2FyZCBpcyBhIGNvbXBvbmVudCBmb3IgYnVpbGRpbmdcclxuICogZGFzaGJvYXJkcyB3aXRoIGRyYWdnYWJsZSBhbmQgcmVzaXphYmxlIGl0ZW1zLlxyXG4gKiBJdCB0YWtlcyBhIGxpc3Qgb2YgY2hpbGRyZW4gYW5kIGRpc3BsYXkgdGhlbSBpblxyXG4gKiBkaXYgZWxlbWVudHMgdGhhdCBjYW4gYmUgbW92ZWQgYXJvdW5kIHRoZSBwYWdlLlxyXG4gKiBUaGUgaW5pdGlhbCBzaXplIG9mIGVhY2ggZWxlbWVudCBjYW4gZWl0aGVyIGJlXHJcbiAqIGRlZmluZWQgd2l0aCB0aGUgbGF5b3V0IGFyZ3VtZW50IG9yIGJ5IHdyYXBwaW5nXHJcbiAqIGVhY2ggZWxlbWVudCB3aXRoIHRoZSBEYXNoYm9hcmRJdGVtIGNvbXBvbmVudC5cclxuICogQnkgZGVmYXVsdCwgRHJhZ2dhYmxlRGFzaGJvYXJkIHdpbGwgc2F2ZWQgdGhlXHJcbiAqIHBvc2l0aW9uIG9mIHRoZSBlbGVtZW50cyBvbiBjbGllbnQgc2lkZSwgd2hlblxyXG4gKiBtb3ZlZCBvbiB0aGUgcGFnZS4gQnV0IHlvdSBjYW4gYWxzbyBzYXZlIGl0XHJcbiAqIG9uIHNlcnZlciBzaWRlIGJ5IGRlZmluaW5nIGEgY2FsbGJhY2sgd2l0aCA6XHJcbiAqIGBJbnB1dChcIjxteS1pZD5cIiwgXCJsYXlvdXRcIilgLlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVzcG9uc2l2ZUdyaWRMYXlvdXQgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29tcG9uZW50V2lsbE1vdW50KCkge1xyXG4gICAgICAgIGxldCB7Y2hpbGRyZW4gPSBbXX0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIGNvbnN0IHtcclxuICAgICAgICAgICAgaWQsXHJcbiAgICAgICAgICAgIGxheW91dHM6IHByb3ZpZGVkTGF5b3V0cyxcclxuICAgICAgICAgICAgY2xlYXJTYXZlZExheW91dCxcclxuICAgICAgICAgICAgbmNvbHMgPSBOQ09MU19SRVNQT05TSVZFLFxyXG4gICAgICAgICAgICBicmVha3BvaW50cyA9IEJSRUFLUE9JTlRTLFxyXG4gICAgICAgICAgICBncmlkQ29scyA9IEdSSURfQ09MU19SRVNQT05TSVZFLFxyXG4gICAgICAgIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIGNvbnN0IGxheW91dHMgPSB7fTtcclxuICAgICAgICBsZXQgY2hpbGRfcHJvcHMsIGNoaWxkX2lkLCBpc0Rhc2hib2FyZEl0ZW07XHJcblxyXG4gICAgICAgIGNoaWxkcmVuID0gQXJyYXkuaXNBcnJheShjaGlsZHJlbikgPyBjaGlsZHJlbiA6IFtjaGlsZHJlbl07XHJcblxyXG4gICAgICAgIC8vIEJ1aWxkIGxheW91dFxyXG4gICAgICAgIC8vICAgUHJpb3JpdHkgdG8gY2xpZW50IGxvY2FsIHN0b3JlIFtleGNlcHQgaWYgc3BlY2lmaWVkXVxyXG4gICAgICAgIC8vICAgVGhlbiBsYXlvdXRcclxuICAgICAgICAvLyAgIEFuZCB0aGVuIERhc2hib2FyZEl0ZW0gW2V4Y2VwdCBpZiBzZXBjaWZpZWRdKVxyXG4gICAgICAgIGlmIChjbGVhclNhdmVkTGF5b3V0KSB7XHJcbiAgICAgICAgICAgIHNhdmVUb0xzKGAke2lkfS1sYXlvdXRzYCwgbnVsbCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHNhdmVkTGF5b3V0ID0gZ2V0RnJvbUxzKGAke2lkfS1sYXlvdXRzYCk7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKHtzYXZlZExheW91dH0pO1xyXG4gICAgICAgIGZvciAodmFyIGJrcCBpbiBicmVha3BvaW50cykge1xyXG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbG9vcC1mdW5jXHJcbiAgICAgICAgICAgIGNvbnN0IGxheW91dCA9IGNoaWxkcmVuLm1hcCgoY2hpbGQsIGtleSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IGl0ZW1fbGF5b3V0O1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIEdldCB0aGUgY2hpbGQgaWQgYW5kIHByb3BzXHJcbiAgICAgICAgICAgICAgICAvLyBEZXBlbmRpbmcgb24gd2V0aGVyIGl0IGlzIGEgc3RyaW5nLCBhIGNsYXNzaWMgUmVhY3QgY29tcG9uZW50LCBvciBhIERhc2hib2FyZEl0ZW1cclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgY2hpbGQgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRfaWQgPSBrZXkudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRfcHJvcHMgPSBjaGlsZC5wcm9wcy5fZGFzaHByaXZhdGVfbGF5b3V0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gY2hpbGQucHJvcHMuX2Rhc2hwcml2YXRlX2xheW91dC5wcm9wc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IGNoaWxkLnByb3BzO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpc0Rhc2hib2FyZEl0ZW0gPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoY2hpbGQucHJvcHMuX2Rhc2hwcml2YXRlX2xheW91dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBjaGlsZC5wcm9wcy5fZGFzaHByaXZhdGVfbGF5b3V0LnR5cGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogY2hpbGQudHlwZS5uYW1lKSA9PT0gJ0Rhc2hib2FyZEl0ZW0nO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjaGlsZF9pZCA9IGlzRGFzaGJvYXJkSXRlbSA/IGNoaWxkX3Byb3BzLmkgOiBjaGlsZF9wcm9wcy5pZDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIERlZmluZSB0aGUgbGF5b3V0IGZvciB0aGUgc3BlY2lmaWMgaXRlbSB4IGJyZWFrcG9pbnRcclxuICAgICAgICAgICAgICAgIGlmIChzYXZlZExheW91dCAmJiBzYXZlZExheW91dFtia3BdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbV9sYXlvdXQgPSBzYXZlZExheW91dFtia3BdLmZpbmQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChlbCkgPT4gZWwuaSA9PT0gY2hpbGRfaWQgfHwgZWwuaSA9PT0ga2V5LnRvU3RyaW5nKClcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKCFpdGVtX2xheW91dCAmJiBwcm92aWRlZExheW91dHMgJiYgcHJvdmlkZWRMYXlvdXRzW2JrcF0pIHtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtX2xheW91dCA9IHByb3ZpZGVkTGF5b3V0c1tia3BdLmZpbmQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChlbCkgPT4gZWwuaSA9PT0gY2hpbGRfaWRcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKCFpdGVtX2xheW91dCAmJiBpc0Rhc2hib2FyZEl0ZW0pIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkID0ge30sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHggPSB7fSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeSA9IHt9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3ID0ge30sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGggPSB7fSxcclxuICAgICAgICAgICAgICAgICAgICB9ID0gY2hpbGRfcHJvcHM7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW1fcHJvdmlkZWRfbGF5b3V0ID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpOiB0eXBlb2YgaWQgPT09ICdzdHJpbmcnID8gaWQgOiBpZFtia3BdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB4OiB0eXBlb2YgeCA9PT0gJ251bWJlcicgPyB4IDogeFtia3BdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB5OiB0eXBlb2YgeSA9PT0gJ251bWJlcicgPyB5IDogeVtia3BdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3OiB0eXBlb2YgdyA9PT0gJ251bWJlcicgPyB3IDogd1tia3BdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoOiB0eXBlb2YgaCA9PT0gJ251bWJlcicgPyBoIDogaFtia3BdLFxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1fbGF5b3V0ID0gZGVmYXVsdEl0ZW1MYXlvdXQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1fcHJvdmlkZWRfbGF5b3V0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGlsZF9pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuY29sc1tia3BdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBncmlkQ29sc1tia3BdXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICghaXRlbV9sYXlvdXQpIHtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtX2xheW91dCA9IGRlZmF1bHRJdGVtTGF5b3V0KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7fSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRfaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmNvbHNbYmtwXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZENvbHNbYmtwXVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW1fbGF5b3V0O1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgbGF5b3V0c1tia3BdID0gbGF5b3V0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyhsYXlvdXRzKTtcclxuICAgICAgICB0aGlzLmxheW91dHMgPSBsYXlvdXRzO1xyXG4gICAgfVxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGxldCB7Y2hpbGRyZW4gPSBbXX0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIGNvbnN0IHtcclxuICAgICAgICAgICAgaWQsXHJcbiAgICAgICAgICAgIHNhdmUsXHJcbiAgICAgICAgICAgIHNldFByb3BzLFxyXG4gICAgICAgICAgICBicmVha3BvaW50cyA9IEJSRUFLUE9JTlRTLFxyXG4gICAgICAgICAgICBncmlkQ29scyA9IEdSSURfQ09MU19SRVNQT05TSVZFLFxyXG4gICAgICAgICAgICBoZWlnaHQgPSBST1dfSEVJR0hULFxyXG4gICAgICAgICAgICBjbGFzc05hbWUsXHJcbiAgICAgICAgICAgIHN0eWxlLFxyXG4gICAgICAgIH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICBjaGlsZHJlbiA9IEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pID8gY2hpbGRyZW4gOiBbY2hpbGRyZW5dO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyh7bGF5b3V0OiB0aGlzLmxheW91dHN9KTtcclxuICAgICAgICBjb25zb2xlLmxvZyh7Z3JpZENvbHN9KTtcclxuICAgICAgICBjb25zb2xlLmxvZyh7Y2xhc3NOYW1lfSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coe3N0eWxlfSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coe2hlaWdodH0pO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHticmVha3BvaW50c30pO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHtwcm9wczogdGhpcy5wcm9wc30pO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxSZXNwb25zaXZlUmVhY3RHcmlkTGF5b3V0XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cclxuICAgICAgICAgICAgICAgIHN0eWxlPXtzdHlsZX1cclxuICAgICAgICAgICAgICAgIGxheW91dHM9e3RoaXMubGF5b3V0c31cclxuICAgICAgICAgICAgICAgIGNvbHM9e2dyaWRDb2xzfVxyXG4gICAgICAgICAgICAgICAgYnJlYWtwb2ludHM9e2JyZWFrcG9pbnRzfVxyXG4gICAgICAgICAgICAgICAgcm93SGVpZ2h0PXtoZWlnaHR9XHJcbiAgICAgICAgICAgICAgICBvbkxheW91dENoYW5nZT17KGN1cnJlbnRfbGF5b3V0LCBhbGxfbGF5b3V0cykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGF5b3V0cyA9IGFsbF9sYXlvdXRzO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh7bGF5b3V0Y2hhbmdlOiB7YWxsX2xheW91dHMsIGN1cnJlbnRfbGF5b3V0fX0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFByb3BzKHtjdXJyZW50X2xheW91dCwgbGF5b3V0czogYWxsX2xheW91dHN9KTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc2F2ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzYXZlVG9McyhgJHtpZH0tbGF5b3V0c2AsIGFsbF9sYXlvdXRzKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgey4uLnRoaXMucHJvcHN9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtjaGlsZHJlbi5tYXAoKGNoaWxkLCBrZXkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgX2tleTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY2hpbGQucHJvcHMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY2hpbGRfcHJvcHMgPSBjaGlsZC5wcm9wcy5fZGFzaHByaXZhdGVfbGF5b3V0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGNoaWxkLnByb3BzLl9kYXNocHJpdmF0ZV9sYXlvdXQucHJvcHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogY2hpbGQucHJvcHM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGlzRGFzaGJvYXJkSXRlbSA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2hpbGQucHJvcHMuX2Rhc2hwcml2YXRlX2xheW91dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gY2hpbGQucHJvcHMuX2Rhc2hwcml2YXRlX2xheW91dC50eXBlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBjaGlsZC50eXBlLm5hbWUpID09PSAnRGFzaGJvYXJkSXRlbSc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9rZXkgPSBpc0Rhc2hib2FyZEl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gY2hpbGRfcHJvcHMuaVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBjaGlsZF9wcm9wcy5pZCB8fCBrZXkudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfa2V5ID0ga2V5LnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17X2tleX0gY2xhc3NOYW1lPVwiaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbS10b3BcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaXRlbS10b3AtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtLXRvcC1yaWdodFwiPi4uLjwvZGl2PiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1heWJlIHdlIGNvdWxkIGFkZCBhIG1lbnUgdG8gY2hhbmdlIHRoZSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BlcnRpZXMgb2YgdGhlIGl0ZW0uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoc3RhdGljLCBkcmFnZ2FibGUsIHJlc2l6ZWFibGUsIC4uLilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaXRlbS1jb250ZW50XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlRG93bj17KGUpID0+IGUuc3RvcFByb3BhZ2F0aW9uKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NoaWxkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgPC9SZXNwb25zaXZlUmVhY3RHcmlkTGF5b3V0PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcblJlc3BvbnNpdmVHcmlkTGF5b3V0LmRlZmF1bHRQcm9wcyA9IHtcclxuICAgIHNhdmU6IHRydWUsXHJcbiAgICBjbGVhclNhdmVkTGF5b3V0OiBmYWxzZSxcclxuICAgIGNoaWxkcmVuOiBbXSxcclxuICAgIHN0eWxlOiB7fSxcclxuICAgIGNsYXNzTmFtZTogJycsXHJcblxyXG4gICAgLy8gT3RoZXIgcHJvcHMgZGVmaW5lZCBieSByZWFjdC1ncmlkLWxheW91dFxyXG4gICAgYXV0b1NpemU6IHRydWUsXHJcbiAgICAvLyBBIENTUyBzZWxlY3RvciBmb3IgdGFncyB0aGF0IHdpbGwgbm90IGJlIGRyYWdnYWJsZS5cclxuICAgIGRyYWdnYWJsZUNhbmNlbDogJycsXHJcbiAgICAvLyBBIENTUyBzZWxlY3RvciBmb3IgdGFncyB0aGF0IHdpbGwgYWN0IGFzIHRoZSBkcmFnZ2FibGUgaGFuZGxlLlxyXG4gICAgZHJhZ2dhYmxlSGFuZGxlOiAnJyxcclxuICAgIC8vIElmIHRydWUsIHRoZSBsYXlvdXQgd2lsbCBjb21wYWN0IHZlcnRpY2FsbHlcclxuICAgIHZlcnRpY2FsQ29tcGFjdDogdHJ1ZSxcclxuICAgIC8vIENvbXBhY3Rpb24gdHlwZS5cclxuICAgIGNvbXBhY3RUeXBlOiAndmVydGljYWwnLFxyXG4gICAgLy8gTWFyZ2luIGJldHdlZW4gaXRlbXMgW3gsIHldIGluIHB4LlxyXG4gICAgbWFyZ2luOiBbMTAsIDEwXSxcclxuICAgIC8vIFBhZGRpbmcgaW5zaWRlIHRoZSBjb250YWluZXIgW3gsIHldIGluIHB4XHJcbiAgICBjb250YWluZXJQYWRkaW5nOiBbMTAsIDEwXSxcclxuICAgIC8vIEZsYWdzXHJcbiAgICBpc0RyYWdnYWJsZTogdHJ1ZSxcclxuICAgIGlzUmVzaXphYmxlOiB0cnVlLFxyXG4gICAgaXNCb3VuZGVkOiBmYWxzZSxcclxuICAgIHVzZUNTU1RyYW5zZm9ybXM6IHRydWUsXHJcbiAgICB0cmFuc2Zvcm1TY2FsZTogMSxcclxuICAgIHByZXZlbnRDb2xsaXNpb246IGZhbHNlLFxyXG4gICAgaXNEcm9wcGFibGU6IGZhbHNlLFxyXG4gICAgcmVzaXplSGFuZGxlczogWydzZSddLFxyXG59O1xyXG5cclxuUmVzcG9uc2l2ZUdyaWRMYXlvdXQucHJvcFR5cGVzID0ge1xyXG4gICAgLyoqXHJcbiAgICAgKiAoc3RyaW5nKSBUaGUgSUQgdXNlZCB0byBpZGVudGlmeSB0aGlzIGNvbXBvbmVudCBpbiBEYXNoIGNhbGxiYWNrcy5cclxuICAgICAqIFRoZSBpZCBpcyBhbHNvIHVzZWQgdG8gYXV0b21hdGljYWxseSBzYXZlIHRoZSBsYXlvdXQgb24gY2xpZW50IHNpZGUuXHJcbiAgICAgKi9cclxuICAgIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogTGF5b3V0IGlzIGEgbGlzdChweXRob24pL3ZlY3RvcihSKSBvZiBkaWN0aW9ubmFyeShQeXRob24pL2xpc3QoUikgd2l0aCB0aGUgZm9ybWF0OlxyXG4gICAgICoge3g6IG51bWJlciwgeTogbnVtYmVyLCB3OiBudW1iZXIsIGg6IG51bWJlcn1cclxuICAgICAqIFRoZSBpbmRleCBpbnRvIHRoZSBsYXlvdXQgbXVzdCBtYXRjaCB0aGUgaWQgdXNlZCBvbiBlYWNoIGl0ZW0gY29tcG9uZW50IHdpdGggRGFzaGJvYXJkSXRlbS5cclxuICAgICAqIElmIHlvdSBjaG9vc2UgdG8gdXNlIGN1c3RvbSBrZXlzLCB5b3UgY2FuIHNwZWNpZnkgdGhhdCBrZXkgaW4gdGhlIGxheW91dFxyXG4gICAgICogYXJyYXkgb2JqZWN0cyBsaWtlIHNvOlxyXG4gICAgICoge2k6IHN0cmluZywgeDogbnVtYmVyLCB5OiBudW1iZXIsIHc6IG51bWJlciwgaDogbnVtYmVyfVxyXG4gICAgICogVGhlIElEIHVzZWQgdG8gaWRlbnRpZnkgdGhpcyBjb21wb25lbnQgaW4gRGFzaCBjYWxsYmFja3MuXHJcbiAgICAgKiBUaGUgaWQgaXMgYWxzbyB1c2VkIHRvIGF1dG9tYXRpY2FsbHkgc2F2ZSB0aGUgbGF5b3V0IG9uIGNsaWVudCBzaWRlLlxyXG4gICAgICovXHJcbiAgICBsYXlvdXRzOiBQcm9wVHlwZXMub2JqZWN0LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogKHticmVha3BvaW50OiBudW1iZXJ9KSBUaGUgYnJlYWtwb2ludHMgZm9yIHRoZSByZXNwb25zaXZlIGxheW91dC5cclxuICAgICAqIEZvciBlYWNoIHNjcmVlbiBzaXplIChicmVha3BvaW50KSB3ZSBjYW4gZGVmaW5lIGEgZGlmZmVyZW50IGxheW91dC5cclxuICAgICAqIChzZWUgYWxzbyAnbGF5b3V0cycgYW5kICdncmlkQ29scycgYXJndW1lbnRzKVxyXG4gICAgICogRGVmYXVsdCB2YWx1ZSBpcyB7bGc6IDEyMDAsIG1kOiA5OTYsIHNtOiA3NjgsIHhzOiA0ODAsIHh4czogMH1cclxuICAgICAqL1xyXG4gICAgYnJlYWtwb2ludHM6IFByb3BUeXBlcy5vYmplY3QsXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiAoe2JyZWFrcG9pbnQ6IG51bWJlcn0pIHRoZSBudW1iZXIgb2YgY29sdW1ucyBpbiB0aGUgZ3JpZCBsYXlvdXQuXHJcbiAgICAgKiBEZWZhdWx0IHZhbHVlIGlzIHtsZzogMTIsIG1kOiAxMCwgc206IDYsIHhzOiA0LCB4eHM6IDJ9LlxyXG4gICAgICovXHJcbiAgICBncmlkQ29sczogUHJvcFR5cGVzLm9iamVjdCxcclxuXHJcbiAgICAvLyBtYXJnaW46IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xyXG4gICAgLy8gICAgIFByb3BUeXBlcy5vYmplY3QsXHJcbiAgICAvLyAgICAgUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9iamVjdCksXHJcbiAgICAvLyBdKSxcclxuICAgIC8vIGNvbnRhaW5lclBhZGRpbmc6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xyXG4gICAgLy8gICAgIFByb3BUeXBlcy5vYmplY3QsXHJcbiAgICAvLyAgICAgUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9iamVjdCksXHJcbiAgICAvLyBdKSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIENoaWxkcmVuIGlzIGEgbGlzdCBvZiB0aGUgaXRlbXMgKGRhc2ggQ29tcG9uZW50cyBhbmQvb3JcclxuICAgICAqIERhc2hib2FyZEl0ZW0pIHRvIGRpcGxheSBvbiB0aGUgbGF5b3V0LlxyXG4gICAgICogQnkgZGVmYXVsdCBhbGwgdGhlIGl0ZW1zIGNhbiBiZSBkcmFnZ2VkIGFuZCByZXNpemVkLlxyXG4gICAgICovXHJcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbXHJcbiAgICAgICAgUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm5vZGUpLFxyXG4gICAgICAgIFByb3BUeXBlcy5ub2RlLFxyXG4gICAgXSksXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiAoYm9vbCkgSWYgVHJ1ZSwgdGhlbiB0aGUgbGF5b3V0IGlzIGF1dG9tYXRpY2FsbHkgc2F2ZWQgb24gY2xpZW50IGJyb3dzZXIuXHJcbiAgICAgKiBEZWZhdWx0IHZhbHVlIGlzIFRydWVcclxuICAgICAqL1xyXG4gICAgc2F2ZTogUHJvcFR5cGVzLmJvb2wsXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiAoYm9vbCkgSWYgc2V0IHRvIHRydWUsIHRoZSBwb3NpdGlvbiBvZiBlbGVtZW50cyBzYXZlZCBvbiBjbGllbnQgc2lkZVxyXG4gICAgICogd2lsbCBiZSBjbGVhcmVkIG9uIHRoZSBuZXh0IHBhZ2UgbG9hZC5cclxuICAgICAqL1xyXG4gICAgY2xlYXJTYXZlZExheW91dDogUHJvcFR5cGVzLmJvb2wsXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiAoe2JyZWFrcG9pbnQ6IG51bWJlcn0pIHRoZSBkZWZhdWx0IG51bWJlciBvZiBjb2x1bW5zIGJ5IGl0ZW0uXHJcbiAgICAgKiBEZWZhdWx0IHZhbHVlIGlzIHtsZzogNiwgbWQ6IDUsIHNtOiAzLCB4czogNCwgeHhzOiAyfS5cclxuICAgICAqL1xyXG4gICAgbmNvbHM6IFByb3BUeXBlcy5udW1iZXIsXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiAobnVtYmVyKSB0aGUgZGVmYXVsdCBudW1iZXIgb2Ygcm93IGJ5IGl0ZW0uXHJcbiAgICAgKiBEZWZhdWx0IHZhbHVlIGlzIDguXHJcbiAgICAgKi9cclxuICAgIG5yb3dzOiBQcm9wVHlwZXMubnVtYmVyLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogKG51bWJlcikgaGVpZ2h0IG9mIGEgcm93IChpbiBweCkuXHJcbiAgICAgKiBEZWZhdWx0IHZhbHVlIGlzIDMwLlxyXG4gICAgICovXHJcbiAgICBoZWlnaHQ6IFByb3BUeXBlcy5udW1iZXIsXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiAoc3RyaW5nKSBjbGFzcyBwYXNzZWQgdG8gdGhlIHJlYWN0LWdyaWQtbGF5b3V0IGNvbXBvbmVudFxyXG4gICAgICovXHJcbiAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiAoZGljdCkgY3NzIHN0eWxlIHBhc3NlZCB0byB0aGUgcmVhY3QtZ3JpZC1sYXlvdXQgY29tcG9uZW50XHJcbiAgICAgKi9cclxuICAgIHN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxyXG5cclxuICAgIC8vIE90aGVyIHByb3BzIGRlZmluZWQgYnkgcmVhY3QtZ3JpZC1sYXlvdXRcclxuICAgIC8vIElmIHRydWUsIHRoZSBjb250YWluZXIgaGVpZ2h0IHN3ZWxscyBhbmQgY29udHJhY3RzIHRvIGZpdCBjb250ZW50c1xyXG4gICAgYXV0b1NpemU6IFByb3BUeXBlcy5ib29sLFxyXG5cclxuICAgIC8vIEEgQ1NTIHNlbGVjdG9yIGZvciB0YWdzIHRoYXQgd2lsbCBub3QgYmUgZHJhZ2dhYmxlLlxyXG4gICAgLy8gRm9yIGV4YW1wbGU6IGRyYWdnYWJsZUNhbmNlbDonLk15Tm9uRHJhZ2dhYmxlQXJlYUNsYXNzTmFtZSdcclxuICAgIC8vIElmIHlvdSBmb3JnZXQgdGhlIGxlYWRpbmcgLiBpdCB3aWxsIG5vdCB3b3JrLlxyXG4gICAgZHJhZ2dhYmxlQ2FuY2VsOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG5cclxuICAgIC8vIEEgQ1NTIHNlbGVjdG9yIGZvciB0YWdzIHRoYXQgd2lsbCBhY3QgYXMgdGhlIGRyYWdnYWJsZSBoYW5kbGUuXHJcbiAgICAvLyBGb3IgZXhhbXBsZTogZHJhZ2dhYmxlSGFuZGxlOicuTXlEcmFnSGFuZGxlQ2xhc3NOYW1lJ1xyXG4gICAgLy8gSWYgeW91IGZvcmdldCB0aGUgbGVhZGluZyAuIGl0IHdpbGwgbm90IHdvcmsuXHJcbiAgICBkcmFnZ2FibGVIYW5kbGU6IFByb3BUeXBlcy5zdHJpbmcsXHJcblxyXG4gICAgLy8gSWYgdHJ1ZSwgdGhlIGxheW91dCB3aWxsIGNvbXBhY3QgdmVydGljYWxseVxyXG4gICAgdmVydGljYWxDb21wYWN0OiBQcm9wVHlwZXMuYm9vbCxcclxuXHJcbiAgICAvLyBDb21wYWN0aW9uIHR5cGUuXHJcbiAgICBjb21wYWN0VHlwZTogUHJvcFR5cGVzLm9uZU9mKFsndmVydGljYWwnLCAnaG9yaXpvbnRhbCddKSxcclxuXHJcbiAgICAvLyBNYXJnaW4gYmV0d2VlbiBpdGVtcyBbeCwgeV0gaW4gcHguXHJcbiAgICBtYXJnaW46IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xyXG4gICAgICAgIFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5udW1iZXIpLFxyXG4gICAgICAgIFByb3BUeXBlcy5vYmplY3QsXHJcbiAgICBdKSxcclxuXHJcbiAgICAvLyBQYWRkaW5nIGluc2lkZSB0aGUgY29udGFpbmVyIFt4LCB5XSBpbiBweFxyXG4gICAgY29udGFpbmVyUGFkZGluZzogUHJvcFR5cGVzLm9uZU9mVHlwZShbXHJcbiAgICAgICAgUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm51bWJlciksXHJcbiAgICAgICAgUHJvcFR5cGVzLm9iamVjdCxcclxuICAgIF0pLFxyXG5cclxuICAgIC8vXHJcbiAgICAvLyBGbGFnc1xyXG4gICAgLy9cclxuICAgIGlzRHJhZ2dhYmxlOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgIGlzUmVzaXphYmxlOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgIGlzQm91bmRlZDogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICAvLyBVc2VzIENTUzMgdHJhbnNsYXRlKCkgaW5zdGVhZCBvZiBwb3NpdGlvbiB0b3AvbGVmdC5cclxuICAgIC8vIFRoaXMgbWFrZXMgYWJvdXQgNnggZmFzdGVyIHBhaW50IHBlcmZvcm1hbmNlXHJcbiAgICB1c2VDU1NUcmFuc2Zvcm1zOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgIC8vIElmIHBhcmVudCBET00gbm9kZSBvZiBSZXNwb25zaXZlUmVhY3RHcmlkTGF5b3V0IG9yIFJlYWN0R3JpZExheW91dCBoYXMgXCJ0cmFuc2Zvcm06IHNjYWxlKG4pXCIgY3NzIHByb3BlcnR5LFxyXG4gICAgLy8gd2Ugc2hvdWxkIHNldCBzY2FsZSBjb2VmZmljaWVudCB0byBhdm9pZCByZW5kZXIgYXJ0ZWZhY3RzIHdoaWxlIGRyYWdnaW5nLlxyXG4gICAgdHJhbnNmb3JtU2NhbGU6IFByb3BUeXBlcy5udW1iZXIsXHJcblxyXG4gICAgLy8gSWYgdHJ1ZSwgZ3JpZCBpdGVtcyB3b24ndCBjaGFuZ2UgcG9zaXRpb24gd2hlbiBiZWluZ1xyXG4gICAgLy8gZHJhZ2dlZCBvdmVyLlxyXG4gICAgcHJldmVudENvbGxpc2lvbjogUHJvcFR5cGVzLmJvb2wsXHJcblxyXG4gICAgLy8gSWYgdHJ1ZSwgZHJvcHBhYmxlIGVsZW1lbnRzICh3aXRoIGBkcmFnZ2FibGU9e3RydWV9YCBhdHRyaWJ1dGUpXHJcbiAgICAvLyBjYW4gYmUgZHJvcHBlZCBvbiB0aGUgZ3JpZC4gSXQgdHJpZ2dlcnMgXCJvbkRyb3BcIiBjYWxsYmFja1xyXG4gICAgLy8gd2l0aCBwb3NpdGlvbiBhbmQgZXZlbnQgb2JqZWN0IGFzIHBhcmFtZXRlcnMuXHJcbiAgICAvLyBJdCBjYW4gYmUgdXNlZnVsIGZvciBkcm9wcGluZyBhbiBlbGVtZW50IGluIGEgc3BlY2lmaWMgcG9zaXRpb25cclxuICAgIC8vXHJcbiAgICAvLyBOT1RFOiBJbiBjYXNlIG9mIHVzaW5nIEZpcmVmb3ggeW91IHNob3VsZCBhZGRcclxuICAgIC8vIGBvbkRyYWdTdGFydD17ZSA9PiBlLmRhdGFUcmFuc2Zlci5zZXREYXRhKCd0ZXh0L3BsYWluJywgJycpfWAgYXR0cmlidXRlXHJcbiAgICAvLyBhbG9uZyB3aXRoIGBkcmFnZ2FibGU9e3RydWV9YCBvdGhlcndpc2UgdGhpcyBmZWF0dXJlIHdpbGwgd29yayBpbmNvcnJlY3QuXHJcbiAgICAvLyBvbkRyYWdTdGFydCBhdHRyaWJ1dGUgaXMgcmVxdWlyZWQgZm9yIEZpcmVmb3ggZm9yIGEgZHJhZ2dpbmcgaW5pdGlhbGl6YXRpb25cclxuICAgIC8vIEBzZWUgaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9NTY4MzEzXHJcbiAgICBpc0Ryb3BwYWJsZTogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICAvLyBEZWZpbmVzIHdoaWNoIHJlc2l6ZSBoYW5kbGVzIHNob3VsZCBiZSByZW5kZXJlZFxyXG4gICAgLy8gQWxsb3dzIGZvciBhbnkgY29tYmluYXRpb24gb2Y6XHJcbiAgICAvLyAncycgLSBTb3V0aCBoYW5kbGUgKGJvdHRvbS1jZW50ZXIpXHJcbiAgICAvLyAndycgLSBXZXN0IGhhbmRsZSAobGVmdC1jZW50ZXIpXHJcbiAgICAvLyAnZScgLSBFYXN0IGhhbmRsZSAocmlnaHQtY2VudGVyKVxyXG4gICAgLy8gJ24nIC0gTm9ydGggaGFuZGxlICh0b3AtY2VudGVyKVxyXG4gICAgLy8gJ3N3JyAtIFNvdXRod2VzdCBoYW5kbGUgKGJvdHRvbS1sZWZ0KVxyXG4gICAgLy8gJ253JyAtIE5vcnRod2VzdCBoYW5kbGUgKHRvcC1sZWZ0KVxyXG4gICAgLy8gJ3NlJyAtIFNvdXRoZWFzdCBoYW5kbGUgKGJvdHRvbS1yaWdodClcclxuICAgIC8vICduZScgLSBOb3J0aGVhc3QgaGFuZGxlICh0b3AtcmlnaHQpXHJcbiAgICByZXNpemVIYW5kbGVzOiBQcm9wVHlwZXMuYXJyYXlPZihcclxuICAgICAgICBQcm9wVHlwZXMub25lT2YoWydzJywgJ3cnLCAnZScsICduJywgJ3N3JywgJ253JywgJ3NlJywgJ25lJ10pXHJcbiAgICApLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGFzaC1hc3NpZ25lZCBjYWxsYmFjayB0aGF0IHNob3VsZCBiZSBjYWxsZWQgdG8gcmVwb3J0IHByb3BlcnR5IGNoYW5nZXNcclxuICAgICAqIHRvIERhc2gsIHRvIG1ha2UgdGhlbSBhdmFpbGFibGUgZm9yIGNhbGxiYWNrcy5cclxuICAgICAqL1xyXG4gICAgc2V0UHJvcHM6IFByb3BUeXBlcy5mdW5jLFxyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9