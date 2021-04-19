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
  className: ''
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

  /**
   * Dash-assigned callback that should be called to report property changes
   * to Dash, to make them available for callbacks.
   */
  setProps: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYXNoX2RyYWdnYWJsZS8uL3NyYy9saWIvY29tcG9uZW50cy9SZXNwb25zaXZlR3JpZExheW91dC5yZWFjdC5qcyJdLCJuYW1lcyI6WyJSZXNwb25zaXZlUmVhY3RHcmlkTGF5b3V0Iiwid2lkdGhQcm92aWRlciIsIlJlc3BvbnNpdmUiLCJkZWZhdWx0SXRlbUxheW91dCIsIml0ZW1fbGF5b3V0IiwiaWQiLCJrZXkiLCJuY29scyIsIm1heF9jb2xzIiwibmJfaXRlbXNfeCIsIk1hdGgiLCJmbG9vciIsImNvbCIsInJvdyIsImRlZmF1bHRDaGlsZExheW91dCIsImkiLCJ0b1N0cmluZyIsIngiLCJ5IiwidyIsImgiLCJOUk9XUyIsIlJlc3BvbnNpdmVHcmlkTGF5b3V0IiwicHJvcHMiLCJjaGlsZHJlbiIsInByb3ZpZGVkTGF5b3V0cyIsImxheW91dHMiLCJjbGVhclNhdmVkTGF5b3V0IiwiTkNPTFNfUkVTUE9OU0lWRSIsImJyZWFrcG9pbnRzIiwiQlJFQUtQT0lOVFMiLCJncmlkQ29scyIsIkdSSURfQ09MU19SRVNQT05TSVZFIiwiY2hpbGRfcHJvcHMiLCJjaGlsZF9pZCIsImlzRGFzaGJvYXJkSXRlbSIsIkFycmF5IiwiaXNBcnJheSIsInNhdmVUb0xzIiwic2F2ZWRMYXlvdXQiLCJnZXRGcm9tTHMiLCJjb25zb2xlIiwibG9nIiwiYmtwIiwibGF5b3V0IiwibWFwIiwiY2hpbGQiLCJfZGFzaHByaXZhdGVfbGF5b3V0IiwidHlwZSIsIm5hbWUiLCJmaW5kIiwiZWwiLCJpdGVtX3Byb3ZpZGVkX2xheW91dCIsInNhdmUiLCJzZXRQcm9wcyIsImhlaWdodCIsIlJPV19IRUlHSFQiLCJjbGFzc05hbWUiLCJzdHlsZSIsImN1cnJlbnRfbGF5b3V0IiwiYWxsX2xheW91dHMiLCJsYXlvdXRjaGFuZ2UiLCJfa2V5IiwiZSIsInN0b3BQcm9wYWdhdGlvbiIsIkNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsIm9iamVjdCIsIm9uZU9mVHlwZSIsImFycmF5T2YiLCJub2RlIiwiYm9vbCIsIm51bWJlciIsIm5yb3dzIiwiZnVuYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEseUJBQXlCLEdBQUdDLHVFQUFhLENBQUNDLDREQUFELENBQS9DOztBQUVBLElBQU1DLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsQ0FBQ0MsV0FBRCxFQUFjQyxFQUFkLEVBQWtCQyxHQUFsQixFQUF1QkMsS0FBdkIsRUFBOEJDLFFBQTlCLEVBQTJDO0FBQ2pFLE1BQU1DLFVBQVUsR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdILFFBQVEsR0FBR0QsS0FBdEIsQ0FBbkI7QUFDQSxNQUFNSyxHQUFHLEdBQUdOLEdBQUcsR0FBR0csVUFBbEI7QUFDQSxNQUFNSSxHQUFHLEdBQUdILElBQUksQ0FBQ0MsS0FBTCxDQUFXTCxHQUFHLEdBQUdHLFVBQWpCLENBQVo7QUFDQSxNQUFNSyxrQkFBa0IsR0FBRztBQUN2QkMsS0FBQyxFQUFFVixFQUFFLElBQUlDLEdBQUcsQ0FBQ1UsUUFBSixFQURjO0FBRXZCQyxLQUFDLEVBQUVMLEdBQUcsR0FBR0wsS0FGYztBQUd2QlcsS0FBQyxFQUFFTCxHQUhvQjtBQUl2Qk0sS0FBQyxFQUFFWixLQUpvQjtBQUt2QmEsS0FBQyxFQUFFQyxnREFBS0E7QUFMZSxHQUEzQjtBQU9BLHVEQUNPUCxrQkFEUCxHQUVPVixXQUZQO0FBR0lXLEtBQUMsRUFBRVYsRUFBRSxJQUFJQyxHQUFHLENBQUNVLFFBQUosRUFIYjtBQUlJQyxLQUFDLEVBQUViLFdBQVcsQ0FBQ2EsQ0FBWixHQUFnQmIsV0FBVyxDQUFDYSxDQUE1QixHQUFnQ0gsa0JBQWtCLENBQUNHLENBSjFEO0FBS0lDLEtBQUMsRUFBRWQsV0FBVyxDQUFDYyxDQUFa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T0FBSyxFQUFFUixpREFBUyxDQUFDTyxNQTFFWTs7QUE0RTdCO0FBQ0o7QUFDQTtBQUNBO0FBQ0lwQixRQUFNLEVBQUVhLGlEQUFTLENBQUNPLE1BaEZXOztBQWtGN0I7QUFDSjtBQUNBO0FBQ0lsQixXQUFTLEVBQUVXLGlEQUFTLENBQUNDLE1BckZROztBQXVGN0I7QUFDSjtBQUNBO0FBQ0lYLE9BQUssRUFBRVUsaURBQVMsQ0FBQ0UsTUExRlk7O0FBNEY3QjtBQUNKO0FBQ0E7QUFDQTtBQUNJaEIsVUFBUSxFQUFFYyxpREFBUyxDQUFDUztBQWhHUyxDQUFqQyxDIiwiZmlsZSI6ImRmNWJiNWYtbWFpbi13cHMtaG1yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7UmVzcG9uc2l2ZSwgV2lkdGhQcm92aWRlciBhcyB3aWR0aFByb3ZpZGVyfSBmcm9tICdyZWFjdC1ncmlkLWxheW91dCc7XHJcblxyXG5pbXBvcnQge1xyXG4gICAgTlJPV1MsXHJcbiAgICBST1dfSEVJR0hULFxyXG4gICAgQlJFQUtQT0lOVFMsXHJcbiAgICBHUklEX0NPTFNfUkVTUE9OU0lWRSxcclxuICAgIE5DT0xTX1JFU1BPTlNJVkUsXHJcbn0gZnJvbSAnLi4vY29uc3RhbnRzJztcclxuXHJcbmltcG9ydCB7c2F2ZVRvTHMsIGdldEZyb21Mc30gZnJvbSAnLi4vbG9jYWxTdG9yYWdlJztcclxuaW1wb3J0ICcuLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVhY3QtZ3JpZC1sYXlvdXQvY3NzL3N0eWxlcy5jc3MnO1xyXG5pbXBvcnQgJy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1yZXNpemFibGUvY3NzL3N0eWxlcy5jc3MnO1xyXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuXHJcbmNvbnN0IFJlc3BvbnNpdmVSZWFjdEdyaWRMYXlvdXQgPSB3aWR0aFByb3ZpZGVyKFJlc3BvbnNpdmUpO1xyXG5cclxuY29uc3QgZGVmYXVsdEl0ZW1MYXlvdXQgPSAoaXRlbV9sYXlvdXQsIGlkLCBrZXksIG5jb2xzLCBtYXhfY29scykgPT4ge1xyXG4gICAgY29uc3QgbmJfaXRlbXNfeCA9IE1hdGguZmxvb3IobWF4X2NvbHMgLyBuY29scyk7XHJcbiAgICBjb25zdCBjb2wgPSBrZXkgJSBuYl9pdGVtc194O1xyXG4gICAgY29uc3Qgcm93ID0gTWF0aC5mbG9vcihrZXkgLyBuYl9pdGVtc194KTtcclxuICAgIGNvbnN0IGRlZmF1bHRDaGlsZExheW91dCA9IHtcclxuICAgICAgICBpOiBpZCB8fCBrZXkudG9TdHJpbmcoKSxcclxuICAgICAgICB4OiBjb2wgKiBuY29scyxcclxuICAgICAgICB5OiByb3csXHJcbiAgICAgICAgdzogbmNvbHMsXHJcbiAgICAgICAgaDogTlJPV1MsXHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5kZWZhdWx0Q2hpbGRMYXlvdXQsXHJcbiAgICAgICAgLi4uaXRlbV9sYXlvdXQsXHJcbiAgICAgICAgaTogaWQgfHwga2V5LnRvU3RyaW5nKCksXHJcbiAgICAgICAgeDogaXRlbV9sYXlvdXQueCA/IGl0ZW1fbGF5b3V0LnggOiBkZWZhdWx0Q2hpbGRMYXlvdXQueCxcclxuICAgICAgICB5OiBpdGVtX2xheW91dC55ID8gaXRlbV9sYXlvdXQueSA6IGRlZmF1bHRDaGlsZExheW91dC55LFxyXG4gICAgICAgIHc6IGl0ZW1fbGF5b3V0LncgPyBpdGVtX2xheW91dC53IDogZGVmYXVsdENoaWxkTGF5b3V0LncsXHJcbiAgICAgICAgaDogaXRlbV9sYXlvdXQuaCA/IGl0ZW1fbGF5b3V0LmggOiBkZWZhdWx0Q2hpbGRMYXlvdXQuaCxcclxuICAgIH07XHJcbn07XHJcblxyXG4vKipcclxuICogRHJhZ2dhYmxlRGFzaGJvYXJkIGlzIGEgY29tcG9uZW50IGZvciBidWlsZGluZ1xyXG4gKiBkYXNoYm9hcmRzIHdpdGggZHJhZ2dhYmxlIGFuZCByZXNpemFibGUgaXRlbXMuXHJcbiAqIEl0IHRha2VzIGEgbGlzdCBvZiBjaGlsZHJlbiBhbmQgZGlzcGxheSB0aGVtIGluXHJcbiAqIGRpdiBlbGVtZW50cyB0aGF0IGNhbiBiZSBtb3ZlZCBhcm91bmQgdGhlIHBhZ2UuXHJcbiAqIFRoZSBpbml0aWFsIHNpemUgb2YgZWFjaCBlbGVtZW50IGNhbiBlaXRoZXIgYmVcclxuICogZGVmaW5lZCB3aXRoIHRoZSBsYXlvdXQgYXJndW1lbnQgb3IgYnkgd3JhcHBpbmdcclxuICogZWFjaCBlbGVtZW50IHdpdGggdGhlIERhc2hib2FyZEl0ZW0gY29tcG9uZW50LlxyXG4gKiBCeSBkZWZhdWx0LCBEcmFnZ2FibGVEYXNoYm9hcmQgd2lsbCBzYXZlZCB0aGVcclxuICogcG9zaXRpb24gb2YgdGhlIGVsZW1lbnRzIG9uIGNsaWVudCBzaWRlLCB3aGVuXHJcbiAqIG1vdmVkIG9uIHRoZSBwYWdlLiBCdXQgeW91IGNhbiBhbHNvIHNhdmUgaXRcclxuICogb24gc2VydmVyIHNpZGUgYnkgZGVmaW5pbmcgYSBjYWxsYmFjayB3aXRoIDpcclxuICogYElucHV0KFwiPG15LWlkPlwiLCBcImxheW91dFwiKWAuXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXNwb25zaXZlR3JpZExheW91dCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb21wb25lbnRXaWxsTW91bnQoKSB7XHJcbiAgICAgICAgbGV0IHtjaGlsZHJlbiA9IFtdfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgY29uc3Qge1xyXG4gICAgICAgICAgICBpZCxcclxuICAgICAgICAgICAgbGF5b3V0czogcHJvdmlkZWRMYXlvdXRzLFxyXG4gICAgICAgICAgICBjbGVhclNhdmVkTGF5b3V0LFxyXG4gICAgICAgICAgICBuY29scyA9IE5DT0xTX1JFU1BPTlNJVkUsXHJcbiAgICAgICAgICAgIGJyZWFrcG9pbnRzID0gQlJFQUtQT0lOVFMsXHJcbiAgICAgICAgICAgIGdyaWRDb2xzID0gR1JJRF9DT0xTX1JFU1BPTlNJVkUsXHJcbiAgICAgICAgfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgY29uc3QgbGF5b3V0cyA9IHt9O1xyXG4gICAgICAgIGxldCBjaGlsZF9wcm9wcywgY2hpbGRfaWQsIGlzRGFzaGJvYXJkSXRlbTtcclxuXHJcbiAgICAgICAgY2hpbGRyZW4gPSBBcnJheS5pc0FycmF5KGNoaWxkcmVuKSA/IGNoaWxkcmVuIDogW2NoaWxkcmVuXTtcclxuXHJcbiAgICAgICAgLy8gQnVpbGQgbGF5b3V0XHJcbiAgICAgICAgLy8gICBQcmlvcml0eSB0byBjbGllbnQgbG9jYWwgc3RvcmUgW2V4Y2VwdCBpZiBzcGVjaWZpZWRdXHJcbiAgICAgICAgLy8gICBUaGVuIGxheW91dFxyXG4gICAgICAgIC8vICAgQW5kIHRoZW4gRGFzaGJvYXJkSXRlbSBbZXhjZXB0IGlmIHNlcGNpZmllZF0pXHJcbiAgICAgICAgaWYgKGNsZWFyU2F2ZWRMYXlvdXQpIHtcclxuICAgICAgICAgICAgc2F2ZVRvTHMoYCR7aWR9LWxheW91dHNgLCBudWxsKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3Qgc2F2ZWRMYXlvdXQgPSBnZXRGcm9tTHMoYCR7aWR9LWxheW91dHNgKTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coe3NhdmVkTGF5b3V0fSk7XHJcbiAgICAgICAgZm9yICh2YXIgYmtwIGluIGJyZWFrcG9pbnRzKSB7XHJcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1sb29wLWZ1bmNcclxuICAgICAgICAgICAgY29uc3QgbGF5b3V0ID0gY2hpbGRyZW4ubWFwKChjaGlsZCwga2V5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgaXRlbV9sYXlvdXQ7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gR2V0IHRoZSBjaGlsZCBpZCBhbmQgcHJvcHNcclxuICAgICAgICAgICAgICAgIC8vIERlcGVuZGluZyBvbiB3ZXRoZXIgaXQgaXMgYSBzdHJpbmcsIGEgY2xhc3NpYyBSZWFjdCBjb21wb25lbnQsIG9yIGEgRGFzaGJvYXJkSXRlbVxyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjaGlsZCA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgICAgICAgICAgICBjaGlsZF9pZCA9IGtleS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjaGlsZF9wcm9wcyA9IGNoaWxkLnByb3BzLl9kYXNocHJpdmF0ZV9sYXlvdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyBjaGlsZC5wcm9wcy5fZGFzaHByaXZhdGVfbGF5b3V0LnByb3BzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogY2hpbGQucHJvcHM7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlzRGFzaGJvYXJkSXRlbSA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChjaGlsZC5wcm9wcy5fZGFzaHByaXZhdGVfbGF5b3V0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGNoaWxkLnByb3BzLl9kYXNocHJpdmF0ZV9sYXlvdXQudHlwZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBjaGlsZC50eXBlLm5hbWUpID09PSAnRGFzaGJvYXJkSXRlbSc7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkX2lkID0gaXNEYXNoYm9hcmRJdGVtID8gY2hpbGRfcHJvcHMuaSA6IGNoaWxkX3Byb3BzLmlkO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gRGVmaW5lIHRoZSBsYXlvdXQgZm9yIHRoZSBzcGVjaWZpYyBpdGVtIHggYnJlYWtwb2ludFxyXG4gICAgICAgICAgICAgICAgaWYgKHNhdmVkTGF5b3V0ICYmIHNhdmVkTGF5b3V0W2JrcF0pIHtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtX2xheW91dCA9IHNhdmVkTGF5b3V0W2JrcF0uZmluZChcclxuICAgICAgICAgICAgICAgICAgICAgICAgKGVsKSA9PiBlbC5pID09PSBjaGlsZF9pZCB8fCBlbC5pID09PSBrZXkudG9TdHJpbmcoKVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoIWl0ZW1fbGF5b3V0ICYmIHByb3ZpZGVkTGF5b3V0cyAmJiBwcm92aWRlZExheW91dHNbYmtwXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1fbGF5b3V0ID0gcHJvdmlkZWRMYXlvdXRzW2JrcF0uZmluZChcclxuICAgICAgICAgICAgICAgICAgICAgICAgKGVsKSA9PiBlbC5pID09PSBjaGlsZF9pZFxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoIWl0ZW1fbGF5b3V0ICYmIGlzRGFzaGJvYXJkSXRlbSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQgPSB7fSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeCA9IHt9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB5ID0ge30sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHcgPSB7fSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaCA9IHt9LFxyXG4gICAgICAgICAgICAgICAgICAgIH0gPSBjaGlsZF9wcm9wcztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaXRlbV9wcm92aWRlZF9sYXlvdXQgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGk6IHR5cGVvZiBpZCA9PT0gJ3N0cmluZycgPyBpZCA6IGlkW2JrcF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHg6IHR5cGVvZiB4ID09PSAnbnVtYmVyJyA/IHggOiB4W2JrcF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHk6IHR5cGVvZiB5ID09PSAnbnVtYmVyJyA/IHkgOiB5W2JrcF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHc6IHR5cGVvZiB3ID09PSAnbnVtYmVyJyA/IHcgOiB3W2JrcF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGg6IHR5cGVvZiBoID09PSAnbnVtYmVyJyA/IGggOiBoW2JrcF0sXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbV9sYXlvdXQgPSBkZWZhdWx0SXRlbUxheW91dChcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbV9wcm92aWRlZF9sYXlvdXQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkX2lkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5jb2xzW2JrcF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyaWRDb2xzW2JrcF1cclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKCFpdGVtX2xheW91dCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1fbGF5b3V0ID0gZGVmYXVsdEl0ZW1MYXlvdXQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGlsZF9pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuY29sc1tia3BdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBncmlkQ29sc1tia3BdXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaXRlbV9sYXlvdXQ7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBsYXlvdXRzW2JrcF0gPSBsYXlvdXQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGxheW91dHMpO1xyXG4gICAgICAgIHRoaXMubGF5b3V0cyA9IGxheW91dHM7XHJcbiAgICB9XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgbGV0IHtjaGlsZHJlbiA9IFtdfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgY29uc3Qge1xyXG4gICAgICAgICAgICBpZCxcclxuICAgICAgICAgICAgc2F2ZSxcclxuICAgICAgICAgICAgc2V0UHJvcHMsXHJcbiAgICAgICAgICAgIGJyZWFrcG9pbnRzID0gQlJFQUtQT0lOVFMsXHJcbiAgICAgICAgICAgIGdyaWRDb2xzID0gR1JJRF9DT0xTX1JFU1BPTlNJVkUsXHJcbiAgICAgICAgICAgIGhlaWdodCA9IFJPV19IRUlHSFQsXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZSxcclxuICAgICAgICAgICAgc3R5bGUsXHJcbiAgICAgICAgfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIGNoaWxkcmVuID0gQXJyYXkuaXNBcnJheShjaGlsZHJlbikgPyBjaGlsZHJlbiA6IFtjaGlsZHJlbl07XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKHtsYXlvdXQ6IHRoaXMubGF5b3V0c30pO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHtncmlkQ29sc30pO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHtjbGFzc05hbWV9KTtcclxuICAgICAgICBjb25zb2xlLmxvZyh7c3R5bGV9KTtcclxuICAgICAgICBjb25zb2xlLmxvZyh7aGVpZ2h0fSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coe2JyZWFrcG9pbnRzfSk7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPFJlc3BvbnNpdmVSZWFjdEdyaWRMYXlvdXRcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3N0eWxlfVxyXG4gICAgICAgICAgICAgICAgbGF5b3V0cz17dGhpcy5sYXlvdXRzfVxyXG4gICAgICAgICAgICAgICAgY29scz17Z3JpZENvbHN9XHJcbiAgICAgICAgICAgICAgICBicmVha3BvaW50cz17YnJlYWtwb2ludHN9XHJcbiAgICAgICAgICAgICAgICByb3dIZWlnaHQ9e2hlaWdodH1cclxuICAgICAgICAgICAgICAgIG9uTGF5b3V0Q2hhbmdlPXsoY3VycmVudF9sYXlvdXQsIGFsbF9sYXlvdXRzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXlvdXRzID0gYWxsX2xheW91dHM7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHtsYXlvdXRjaGFuZ2U6IHthbGxfbGF5b3V0cywgY3VycmVudF9sYXlvdXR9fSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0UHJvcHMoe2N1cnJlbnRfbGF5b3V0LCBsYXlvdXRzOiBhbGxfbGF5b3V0c30pO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzYXZlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNhdmVUb0xzKGAke2lkfS1sYXlvdXRzYCwgYWxsX2xheW91dHMpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICB7Li4udGhpcy5wcm9wc31cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge2NoaWxkcmVuLm1hcCgoY2hpbGQsIGtleSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBfa2V5O1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjaGlsZC5wcm9wcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjaGlsZF9wcm9wcyA9IGNoaWxkLnByb3BzLl9kYXNocHJpdmF0ZV9sYXlvdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gY2hpbGQucHJvcHMuX2Rhc2hwcml2YXRlX2xheW91dC5wcm9wc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBjaGlsZC5wcm9wcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaXNEYXNoYm9hcmRJdGVtID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjaGlsZC5wcm9wcy5fZGFzaHByaXZhdGVfbGF5b3V0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBjaGlsZC5wcm9wcy5fZGFzaHByaXZhdGVfbGF5b3V0LnR5cGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGNoaWxkLnR5cGUubmFtZSkgPT09ICdEYXNoYm9hcmRJdGVtJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgX2tleSA9IGlzRGFzaGJvYXJkSXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBjaGlsZF9wcm9wcy5pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGNoaWxkX3Byb3BzLmlkIHx8IGtleS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9rZXkgPSBrZXkudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtfa2V5fSBjbGFzc05hbWU9XCJpdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtLXRvcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpdGVtLXRvcC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW0tdG9wLXJpZ2h0XCI+Li4uPC9kaXY+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTWF5YmUgd2UgY291bGQgYWRkIGEgbWVudSB0byBjaGFuZ2UgdGhlIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcGVydGllcyBvZiB0aGUgaXRlbS5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChzdGF0aWMsIGRyYWdnYWJsZSwgcmVzaXplYWJsZSwgLi4uKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpdGVtLWNvbnRlbnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VEb3duPXsoZSkgPT4gZS5zdG9wUHJvcGFnYXRpb24oKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2hpbGR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICA8L1Jlc3BvbnNpdmVSZWFjdEdyaWRMYXlvdXQ+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuUmVzcG9uc2l2ZUdyaWRMYXlvdXQuZGVmYXVsdFByb3BzID0ge1xyXG4gICAgc2F2ZTogdHJ1ZSxcclxuICAgIGNsZWFyU2F2ZWRMYXlvdXQ6IGZhbHNlLFxyXG4gICAgY2hpbGRyZW46IFtdLFxyXG4gICAgc3R5bGU6IHt9LFxyXG4gICAgY2xhc3NOYW1lOiAnJyxcclxufTtcclxuXHJcblJlc3BvbnNpdmVHcmlkTGF5b3V0LnByb3BUeXBlcyA9IHtcclxuICAgIC8qKlxyXG4gICAgICogKHN0cmluZykgVGhlIElEIHVzZWQgdG8gaWRlbnRpZnkgdGhpcyBjb21wb25lbnQgaW4gRGFzaCBjYWxsYmFja3MuXHJcbiAgICAgKiBUaGUgaWQgaXMgYWxzbyB1c2VkIHRvIGF1dG9tYXRpY2FsbHkgc2F2ZSB0aGUgbGF5b3V0IG9uIGNsaWVudCBzaWRlLlxyXG4gICAgICovXHJcbiAgICBpZDogUHJvcFR5cGVzLnN0cmluZyxcclxuXHJcbiAgICAvKipcclxuICAgICAqIExheW91dCBpcyBhIGxpc3QocHl0aG9uKS92ZWN0b3IoUikgb2YgZGljdGlvbm5hcnkoUHl0aG9uKS9saXN0KFIpIHdpdGggdGhlIGZvcm1hdDpcclxuICAgICAqIHt4OiBudW1iZXIsIHk6IG51bWJlciwgdzogbnVtYmVyLCBoOiBudW1iZXJ9XHJcbiAgICAgKiBUaGUgaW5kZXggaW50byB0aGUgbGF5b3V0IG11c3QgbWF0Y2ggdGhlIGlkIHVzZWQgb24gZWFjaCBpdGVtIGNvbXBvbmVudCB3aXRoIERhc2hib2FyZEl0ZW0uXHJcbiAgICAgKiBJZiB5b3UgY2hvb3NlIHRvIHVzZSBjdXN0b20ga2V5cywgeW91IGNhbiBzcGVjaWZ5IHRoYXQga2V5IGluIHRoZSBsYXlvdXRcclxuICAgICAqIGFycmF5IG9iamVjdHMgbGlrZSBzbzpcclxuICAgICAqIHtpOiBzdHJpbmcsIHg6IG51bWJlciwgeTogbnVtYmVyLCB3OiBudW1iZXIsIGg6IG51bWJlcn1cclxuICAgICAqIFRoZSBJRCB1c2VkIHRvIGlkZW50aWZ5IHRoaXMgY29tcG9uZW50IGluIERhc2ggY2FsbGJhY2tzLlxyXG4gICAgICogVGhlIGlkIGlzIGFsc28gdXNlZCB0byBhdXRvbWF0aWNhbGx5IHNhdmUgdGhlIGxheW91dCBvbiBjbGllbnQgc2lkZS5cclxuICAgICAqL1xyXG4gICAgbGF5b3V0czogUHJvcFR5cGVzLm9iamVjdCxcclxuXHJcbiAgICAvKipcclxuICAgICAqICh7YnJlYWtwb2ludDogbnVtYmVyfSkgVGhlIGJyZWFrcG9pbnRzIGZvciB0aGUgcmVzcG9uc2l2ZSBsYXlvdXQuXHJcbiAgICAgKiBGb3IgZWFjaCBzY3JlZW4gc2l6ZSAoYnJlYWtwb2ludCkgd2UgY2FuIGRlZmluZSBhIGRpZmZlcmVudCBsYXlvdXQuXHJcbiAgICAgKiAoc2VlIGFsc28gJ2xheW91dHMnIGFuZCAnZ3JpZENvbHMnIGFyZ3VtZW50cylcclxuICAgICAqIERlZmF1bHQgdmFsdWUgaXMge2xnOiAxMjAwLCBtZDogOTk2LCBzbTogNzY4LCB4czogNDgwLCB4eHM6IDB9XHJcbiAgICAgKi9cclxuICAgIGJyZWFrcG9pbnRzOiBQcm9wVHlwZXMub2JqZWN0LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogKHticmVha3BvaW50OiBudW1iZXJ9KSB0aGUgbnVtYmVyIG9mIGNvbHVtbnMgaW4gdGhlIGdyaWQgbGF5b3V0LlxyXG4gICAgICogRGVmYXVsdCB2YWx1ZSBpcyB7bGc6IDEyLCBtZDogMTAsIHNtOiA2LCB4czogNCwgeHhzOiAyfS5cclxuICAgICAqL1xyXG4gICAgZ3JpZENvbHM6IFByb3BUeXBlcy5vYmplY3QsXHJcblxyXG4gICAgLy8gbWFyZ2luOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcclxuICAgIC8vICAgICBQcm9wVHlwZXMub2JqZWN0LFxyXG4gICAgLy8gICAgIFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vYmplY3QpLFxyXG4gICAgLy8gXSksXHJcbiAgICAvLyBjb250YWluZXJQYWRkaW5nOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcclxuICAgIC8vICAgICBQcm9wVHlwZXMub2JqZWN0LFxyXG4gICAgLy8gICAgIFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vYmplY3QpLFxyXG4gICAgLy8gXSksXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDaGlsZHJlbiBpcyBhIGxpc3Qgb2YgdGhlIGl0ZW1zIChkYXNoIENvbXBvbmVudHMgYW5kL29yXHJcbiAgICAgKiBEYXNoYm9hcmRJdGVtKSB0byBkaXBsYXkgb24gdGhlIGxheW91dC5cclxuICAgICAqIEJ5IGRlZmF1bHQgYWxsIHRoZSBpdGVtcyBjYW4gYmUgZHJhZ2dlZCBhbmQgcmVzaXplZC5cclxuICAgICAqL1xyXG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xyXG4gICAgICAgIFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5ub2RlKSxcclxuICAgICAgICBQcm9wVHlwZXMubm9kZSxcclxuICAgIF0pLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogKGJvb2wpIElmIFRydWUsIHRoZW4gdGhlIGxheW91dCBpcyBhdXRvbWF0aWNhbGx5IHNhdmVkIG9uIGNsaWVudCBicm93c2VyLlxyXG4gICAgICogRGVmYXVsdCB2YWx1ZSBpcyBUcnVlXHJcbiAgICAgKi9cclxuICAgIHNhdmU6IFByb3BUeXBlcy5ib29sLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogKGJvb2wpIElmIHNldCB0byB0cnVlLCB0aGUgcG9zaXRpb24gb2YgZWxlbWVudHMgc2F2ZWQgb24gY2xpZW50IHNpZGVcclxuICAgICAqIHdpbGwgYmUgY2xlYXJlZCBvbiB0aGUgbmV4dCBwYWdlIGxvYWQuXHJcbiAgICAgKi9cclxuICAgIGNsZWFyU2F2ZWRMYXlvdXQ6IFByb3BUeXBlcy5ib29sLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogKHticmVha3BvaW50OiBudW1iZXJ9KSB0aGUgZGVmYXVsdCBudW1iZXIgb2YgY29sdW1ucyBieSBpdGVtLlxyXG4gICAgICogRGVmYXVsdCB2YWx1ZSBpcyB7bGc6IDYsIG1kOiA1LCBzbTogMywgeHM6IDQsIHh4czogMn0uXHJcbiAgICAgKi9cclxuICAgIG5jb2xzOiBQcm9wVHlwZXMubnVtYmVyLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogKG51bWJlcikgdGhlIGRlZmF1bHQgbnVtYmVyIG9mIHJvdyBieSBpdGVtLlxyXG4gICAgICogRGVmYXVsdCB2YWx1ZSBpcyA4LlxyXG4gICAgICovXHJcbiAgICBucm93czogUHJvcFR5cGVzLm51bWJlcixcclxuXHJcbiAgICAvKipcclxuICAgICAqIChudW1iZXIpIGhlaWdodCBvZiBhIHJvdyAoaW4gcHgpLlxyXG4gICAgICogRGVmYXVsdCB2YWx1ZSBpcyAzMC5cclxuICAgICAqL1xyXG4gICAgaGVpZ2h0OiBQcm9wVHlwZXMubnVtYmVyLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogKHN0cmluZykgY2xhc3MgcGFzc2VkIHRvIHRoZSByZWFjdC1ncmlkLWxheW91dCBjb21wb25lbnRcclxuICAgICAqL1xyXG4gICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogKGRpY3QpIGNzcyBzdHlsZSBwYXNzZWQgdG8gdGhlIHJlYWN0LWdyaWQtbGF5b3V0IGNvbXBvbmVudFxyXG4gICAgICovXHJcbiAgICBzdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcclxuXHJcbiAgICAvKipcclxuICAgICAqIERhc2gtYXNzaWduZWQgY2FsbGJhY2sgdGhhdCBzaG91bGQgYmUgY2FsbGVkIHRvIHJlcG9ydCBwcm9wZXJ0eSBjaGFuZ2VzXHJcbiAgICAgKiB0byBEYXNoLCB0byBtYWtlIHRoZW0gYXZhaWxhYmxlIGZvciBjYWxsYmFja3MuXHJcbiAgICAgKi9cclxuICAgIHNldFByb3BzOiBQcm9wVHlwZXMuZnVuYyxcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==