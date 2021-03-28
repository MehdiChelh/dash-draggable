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
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ResponsiveReactGridLayout, {
        className: className,
        style: style,
        layouts: this.layouts,
        cols: gridCols,
        breakpoints: breakpoints,
        rowHeight: height,
        onLayoutChange: function onLayoutChange(current_layout, all_layouts) {
          _this.layouts = all_layouts;
          setProps({
            current_layout: current_layout,
            all_layout: all_layouts
          });

          if (save) {
            Object(_localStorage__WEBPACK_IMPORTED_MODULE_4__["saveToLs"])("".concat(id, "-layouts"), all_layouts);
          }
        }
      }, children.map(function (child, key) {
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
  className: ""
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
   * (bool) If set to true, then the layout saved in the client browser
   * will be cleared in the next page load.
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYXNoX2RyYWdnYWJsZS8uL3NyYy9saWIvY29tcG9uZW50cy9SZXNwb25zaXZlR3JpZExheW91dC5yZWFjdC5qcyJdLCJuYW1lcyI6WyJSZXNwb25zaXZlUmVhY3RHcmlkTGF5b3V0Iiwid2lkdGhQcm92aWRlciIsIlJlc3BvbnNpdmUiLCJkZWZhdWx0SXRlbUxheW91dCIsIml0ZW1fbGF5b3V0IiwiaWQiLCJrZXkiLCJuY29scyIsIm1heF9jb2xzIiwibmJfaXRlbXNfeCIsIk1hdGgiLCJmbG9vciIsImNvbCIsInJvdyIsImRlZmF1bHRDaGlsZExheW91dCIsImkiLCJ0b1N0cmluZyIsIngiLCJ5IiwidyIsImgiLCJOUk9XUyIsIlJlc3BvbnNpdmVHcmlkTGF5b3V0IiwicHJvcHMiLCJjaGlsZHJlbiIsInByb3ZpZGVkTGF5b3V0cyIsImxheW91dHMiLCJjbGVhclNhdmVkTGF5b3V0IiwiTkNPTFNfUkVTUE9OU0lWRSIsImJyZWFrcG9pbnRzIiwiQlJFQUtQT0lOVFMiLCJncmlkQ29scyIsIkdSSURfQ09MU19SRVNQT05TSVZFIiwiY2hpbGRfcHJvcHMiLCJjaGlsZF9pZCIsImlzRGFzaGJvYXJkSXRlbSIsIkFycmF5IiwiaXNBcnJheSIsInNhdmVUb0xzIiwic2F2ZWRMYXlvdXQiLCJnZXRGcm9tTHMiLCJia3AiLCJsYXlvdXQiLCJtYXAiLCJjaGlsZCIsIl9kYXNocHJpdmF0ZV9sYXlvdXQiLCJ0eXBlIiwibmFtZSIsImZpbmQiLCJlbCIsIml0ZW1fcHJvdmlkZWRfbGF5b3V0Iiwic2F2ZSIsInNldFByb3BzIiwiaGVpZ2h0IiwiUk9XX0hFSUdIVCIsImNsYXNzTmFtZSIsInN0eWxlIiwiY3VycmVudF9sYXlvdXQiLCJhbGxfbGF5b3V0cyIsImFsbF9sYXlvdXQiLCJfa2V5IiwiZSIsInN0b3BQcm9wYWdhdGlvbiIsIkNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsIm9iamVj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RTBDLGlEQUFTLENBQUNHLFNBQVYsQ0FBb0IsQ0FDMUJILGlEQUFTLENBQUNJLE9BQVYsQ0FBa0JKLGlEQUFTLENBQUNLLElBQTVCLENBRDBCLEVBRTFCTCxpREFBUyxDQUFDSyxJQUZnQixDQUFwQixDQS9DbUI7O0FBb0Q3QjtBQUNKO0FBQ0E7QUFDQTtBQUNJcEIsTUFBSSxFQUFFZSxpREFBUyxDQUFDTSxJQXhEYTs7QUEwRDdCO0FBQ0o7QUFDQTtBQUNBO0FBQ0k3QyxrQkFBZ0IsRUFBRXVDLGlEQUFTLENBQUNNLElBOURDOztBQWdFN0I7QUFDSjtBQUNBO0FBQ0E7QUFDSWpFLE9BQUssRUFBRTJELGlEQUFTLENBQUNPLE1BcEVZOztBQXNFN0I7QUFDSjtBQUNBO0FBQ0E7QUFDSUMsT0FBSyxFQUFFUixpREFBUyxDQUFDTyxNQTFFWTs7QUE0RTdCO0FBQ0o7QUFDQTtBQUNBO0FBQ0lwQixRQUFNLEVBQUVhLGlEQUFTLENBQUNPLE1BaEZXOztBQWtGN0I7QUFDSjtBQUNBO0FBQ0lsQixXQUFTLEVBQUVXLGlEQUFTLENBQUNDLE1BckZROztBQXVGN0I7QUFDSjtBQUNBO0FBQ0lYLE9BQUssRUFBRVUsaURBQVMsQ0FBQ0UsTUExRlk7O0FBNEY3QjtBQUNKO0FBQ0E7QUFDQTtBQUNJaEIsVUFBUSxFQUFFYyxpREFBUyxDQUFDUztBQWhHUyxDQUFqQyxDIiwiZmlsZSI6IjZiNzI1MWEtbWFpbi13cHMtaG1yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7UmVzcG9uc2l2ZSwgV2lkdGhQcm92aWRlciBhcyB3aWR0aFByb3ZpZGVyfSBmcm9tICdyZWFjdC1ncmlkLWxheW91dCc7XHJcblxyXG5pbXBvcnQge1xyXG4gICAgTlJPV1MsXHJcbiAgICBST1dfSEVJR0hULFxyXG4gICAgQlJFQUtQT0lOVFMsXHJcbiAgICBHUklEX0NPTFNfUkVTUE9OU0lWRSxcclxuICAgIE5DT0xTX1JFU1BPTlNJVkUsXHJcbn0gZnJvbSAnLi4vY29uc3RhbnRzJztcclxuXHJcbmltcG9ydCB7c2F2ZVRvTHMsIGdldEZyb21Mc30gZnJvbSAnLi4vbG9jYWxTdG9yYWdlJztcclxuaW1wb3J0ICcuLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVhY3QtZ3JpZC1sYXlvdXQvY3NzL3N0eWxlcy5jc3MnO1xyXG5pbXBvcnQgJy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1yZXNpemFibGUvY3NzL3N0eWxlcy5jc3MnO1xyXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuXHJcbmNvbnN0IFJlc3BvbnNpdmVSZWFjdEdyaWRMYXlvdXQgPSB3aWR0aFByb3ZpZGVyKFJlc3BvbnNpdmUpO1xyXG5cclxuY29uc3QgZGVmYXVsdEl0ZW1MYXlvdXQgPSAoaXRlbV9sYXlvdXQsIGlkLCBrZXksIG5jb2xzLCBtYXhfY29scykgPT4ge1xyXG4gICAgY29uc3QgbmJfaXRlbXNfeCA9IE1hdGguZmxvb3IobWF4X2NvbHMgLyBuY29scyk7XHJcbiAgICBjb25zdCBjb2wgPSBrZXkgJSBuYl9pdGVtc194O1xyXG4gICAgY29uc3Qgcm93ID0gTWF0aC5mbG9vcihrZXkgLyBuYl9pdGVtc194KTtcclxuICAgIGNvbnN0IGRlZmF1bHRDaGlsZExheW91dCA9IHtcclxuICAgICAgICBpOiBpZCB8fCBrZXkudG9TdHJpbmcoKSxcclxuICAgICAgICB4OiBjb2wgKiBuY29scyxcclxuICAgICAgICB5OiByb3csXHJcbiAgICAgICAgdzogbmNvbHMsXHJcbiAgICAgICAgaDogTlJPV1MsXHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5kZWZhdWx0Q2hpbGRMYXlvdXQsXHJcbiAgICAgICAgLi4uaXRlbV9sYXlvdXQsXHJcbiAgICAgICAgaTogaWQgfHwga2V5LnRvU3RyaW5nKCksXHJcbiAgICAgICAgeDogaXRlbV9sYXlvdXQueCA/IGl0ZW1fbGF5b3V0LnggOiBkZWZhdWx0Q2hpbGRMYXlvdXQueCxcclxuICAgICAgICB5OiBpdGVtX2xheW91dC55ID8gaXRlbV9sYXlvdXQueSA6IGRlZmF1bHRDaGlsZExheW91dC55LFxyXG4gICAgICAgIHc6IGl0ZW1fbGF5b3V0LncgPyBpdGVtX2xheW91dC53IDogZGVmYXVsdENoaWxkTGF5b3V0LncsXHJcbiAgICAgICAgaDogaXRlbV9sYXlvdXQuaCA/IGl0ZW1fbGF5b3V0LmggOiBkZWZhdWx0Q2hpbGRMYXlvdXQuaCxcclxuICAgIH07XHJcbn07XHJcblxyXG4vKipcclxuICogRHJhZ2dhYmxlRGFzaGJvYXJkIGlzIGEgY29tcG9uZW50IGZvciBidWlsZGluZ1xyXG4gKiBkYXNoYm9hcmRzIHdpdGggZHJhZ2dhYmxlIGFuZCByZXNpemFibGUgaXRlbXMuXHJcbiAqIEl0IHRha2VzIGEgbGlzdCBvZiBjaGlsZHJlbiBhbmQgZGlzcGxheSB0aGVtIGluXHJcbiAqIGRpdiBlbGVtZW50cyB0aGF0IGNhbiBiZSBtb3ZlZCBhcm91bmQgdGhlIHBhZ2UuXHJcbiAqIFRoZSBpbml0aWFsIHNpemUgb2YgZWFjaCBlbGVtZW50IGNhbiBlaXRoZXIgYmVcclxuICogZGVmaW5lZCB3aXRoIHRoZSBsYXlvdXQgYXJndW1lbnQgb3IgYnkgd3JhcHBpbmdcclxuICogZWFjaCBlbGVtZW50IHdpdGggdGhlIERhc2hib2FyZEl0ZW0gY29tcG9uZW50LlxyXG4gKiBCeSBkZWZhdWx0LCBEcmFnZ2FibGVEYXNoYm9hcmQgd2lsbCBzYXZlZCB0aGVcclxuICogcG9zaXRpb24gb2YgdGhlIGVsZW1lbnRzIG9uIGNsaWVudCBzaWRlLCB3aGVuXHJcbiAqIG1vdmVkIG9uIHRoZSBwYWdlLiBCdXQgeW91IGNhbiBhbHNvIHNhdmUgaXRcclxuICogb24gc2VydmVyIHNpZGUgYnkgZGVmaW5pbmcgYSBjYWxsYmFjayB3aXRoIDpcclxuICogYElucHV0KFwiPG15LWlkPlwiLCBcImxheW91dFwiKWAuXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXNwb25zaXZlR3JpZExheW91dCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb21wb25lbnRXaWxsTW91bnQoKSB7XHJcbiAgICAgICAgbGV0IHtjaGlsZHJlbiA9IFtdfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgY29uc3Qge1xyXG4gICAgICAgICAgICBpZCxcclxuICAgICAgICAgICAgbGF5b3V0czogcHJvdmlkZWRMYXlvdXRzLFxyXG4gICAgICAgICAgICBjbGVhclNhdmVkTGF5b3V0LFxyXG4gICAgICAgICAgICBuY29scyA9IE5DT0xTX1JFU1BPTlNJVkUsXHJcbiAgICAgICAgICAgIGJyZWFrcG9pbnRzID0gQlJFQUtQT0lOVFMsXHJcbiAgICAgICAgICAgIGdyaWRDb2xzID0gR1JJRF9DT0xTX1JFU1BPTlNJVkUsXHJcbiAgICAgICAgfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgY29uc3QgbGF5b3V0cyA9IHt9O1xyXG4gICAgICAgIGxldCBjaGlsZF9wcm9wcywgY2hpbGRfaWQsIGlzRGFzaGJvYXJkSXRlbTtcclxuXHJcbiAgICAgICAgY2hpbGRyZW4gPSBBcnJheS5pc0FycmF5KGNoaWxkcmVuKSA/IGNoaWxkcmVuIDogW2NoaWxkcmVuXTtcclxuXHJcbiAgICAgICAgLy8gQnVpbGQgbGF5b3V0XHJcbiAgICAgICAgLy8gICBQcmlvcml0eSB0byBjbGllbnQgbG9jYWwgc3RvcmUgW2V4Y2VwdCBpZiBzcGVjaWZpZWRdXHJcbiAgICAgICAgLy8gICBUaGVuIGxheW91dFxyXG4gICAgICAgIC8vICAgQW5kIHRoZW4gRGFzaGJvYXJkSXRlbSBbZXhjZXB0IGlmIHNlcGNpZmllZF0pXHJcbiAgICAgICAgaWYgKGNsZWFyU2F2ZWRMYXlvdXQpIHtcclxuICAgICAgICAgICAgc2F2ZVRvTHMoYCR7aWR9LWxheW91dHNgLCBudWxsKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3Qgc2F2ZWRMYXlvdXQgPSBnZXRGcm9tTHMoYCR7aWR9LWxheW91dHNgKTtcclxuXHJcbiAgICAgICAgZm9yICh2YXIgYmtwIGluIGJyZWFrcG9pbnRzKSB7XHJcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1sb29wLWZ1bmNcclxuICAgICAgICAgICAgY29uc3QgbGF5b3V0ID0gY2hpbGRyZW4ubWFwKChjaGlsZCwga2V5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgaXRlbV9sYXlvdXQ7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gR2V0IHRoZSBjaGlsZCBpZCBhbmQgcHJvcHNcclxuICAgICAgICAgICAgICAgIC8vIERlcGVuZGluZyBvbiB3ZXRoZXIgaXQgaXMgYSBzdHJpbmcsIGEgY2xhc3NpYyBSZWFjdCBjb21wb25lbnQsIG9yIGEgRGFzaGJvYXJkSXRlbVxyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjaGlsZCA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgICAgICAgICAgICBjaGlsZF9pZCA9IGtleS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjaGlsZF9wcm9wcyA9IGNoaWxkLnByb3BzLl9kYXNocHJpdmF0ZV9sYXlvdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyBjaGlsZC5wcm9wcy5fZGFzaHByaXZhdGVfbGF5b3V0LnByb3BzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogY2hpbGQucHJvcHM7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlzRGFzaGJvYXJkSXRlbSA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChjaGlsZC5wcm9wcy5fZGFzaHByaXZhdGVfbGF5b3V0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGNoaWxkLnByb3BzLl9kYXNocHJpdmF0ZV9sYXlvdXQudHlwZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBjaGlsZC50eXBlLm5hbWUpID09PSAnRGFzaGJvYXJkSXRlbSc7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkX2lkID0gaXNEYXNoYm9hcmRJdGVtID8gY2hpbGRfcHJvcHMuaSA6IGNoaWxkX3Byb3BzLmlkO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gRGVmaW5lIHRoZSBsYXlvdXQgZm9yIHRoZSBzcGVjaWZpYyBpdGVtIHggYnJlYWtwb2ludFxyXG4gICAgICAgICAgICAgICAgaWYgKHNhdmVkTGF5b3V0ICYmIHNhdmVkTGF5b3V0W2JrcF0pIHtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtX2xheW91dCA9IHNhdmVkTGF5b3V0W2JrcF0uZmluZChcclxuICAgICAgICAgICAgICAgICAgICAgICAgKGVsKSA9PiBlbC5pID09PSBjaGlsZF9pZCB8fCBlbC5pID09PSBrZXkudG9TdHJpbmcoKVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoIWl0ZW1fbGF5b3V0ICYmIHByb3ZpZGVkTGF5b3V0cyAmJiBwcm92aWRlZExheW91dHNbYmtwXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1fbGF5b3V0ID0gcHJvdmlkZWRMYXlvdXRzW2JrcF0uZmluZChcclxuICAgICAgICAgICAgICAgICAgICAgICAgKGVsKSA9PiBlbC5pID09PSBjaGlsZF9pZFxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoIWl0ZW1fbGF5b3V0ICYmIGlzRGFzaGJvYXJkSXRlbSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQgPSB7fSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeCA9IHt9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB5ID0ge30sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHcgPSB7fSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaCA9IHt9LFxyXG4gICAgICAgICAgICAgICAgICAgIH0gPSBjaGlsZF9wcm9wcztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaXRlbV9wcm92aWRlZF9sYXlvdXQgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGk6IHR5cGVvZiBpZCA9PT0gJ3N0cmluZycgPyBpZCA6IGlkW2JrcF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHg6IHR5cGVvZiB4ID09PSAnbnVtYmVyJyA/IHggOiB4W2JrcF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHk6IHR5cGVvZiB5ID09PSAnbnVtYmVyJyA/IHkgOiB5W2JrcF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHc6IHR5cGVvZiB3ID09PSAnbnVtYmVyJyA/IHcgOiB3W2JrcF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGg6IHR5cGVvZiBoID09PSAnbnVtYmVyJyA/IGggOiBoW2JrcF0sXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbV9sYXlvdXQgPSBkZWZhdWx0SXRlbUxheW91dChcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbV9wcm92aWRlZF9sYXlvdXQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkX2lkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5jb2xzW2JrcF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyaWRDb2xzW2JrcF1cclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKCFpdGVtX2xheW91dCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1fbGF5b3V0ID0gZGVmYXVsdEl0ZW1MYXlvdXQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGlsZF9pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuY29sc1tia3BdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBncmlkQ29sc1tia3BdXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaXRlbV9sYXlvdXQ7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBsYXlvdXRzW2JrcF0gPSBsYXlvdXQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubGF5b3V0cyA9IGxheW91dHM7XHJcbiAgICB9XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgbGV0IHtjaGlsZHJlbiA9IFtdfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgY29uc3Qge1xyXG4gICAgICAgICAgICBpZCxcclxuICAgICAgICAgICAgc2F2ZSxcclxuICAgICAgICAgICAgc2V0UHJvcHMsXHJcbiAgICAgICAgICAgIGJyZWFrcG9pbnRzID0gQlJFQUtQT0lOVFMsXHJcbiAgICAgICAgICAgIGdyaWRDb2xzID0gR1JJRF9DT0xTX1JFU1BPTlNJVkUsXHJcbiAgICAgICAgICAgIGhlaWdodD1ST1dfSEVJR0hULFxyXG4gICAgICAgICAgICBjbGFzc05hbWUsXHJcbiAgICAgICAgICAgIHN0eWxlLFxyXG4gICAgICAgIH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICBjaGlsZHJlbiA9IEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pID8gY2hpbGRyZW4gOiBbY2hpbGRyZW5dO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8UmVzcG9uc2l2ZVJlYWN0R3JpZExheW91dFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17c3R5bGV9XHJcbiAgICAgICAgICAgICAgICBsYXlvdXRzPXt0aGlzLmxheW91dHN9XHJcbiAgICAgICAgICAgICAgICBjb2xzPXtncmlkQ29sc31cclxuICAgICAgICAgICAgICAgIGJyZWFrcG9pbnRzPXticmVha3BvaW50c31cclxuICAgICAgICAgICAgICAgIHJvd0hlaWdodD17aGVpZ2h0fVxyXG4gICAgICAgICAgICAgICAgb25MYXlvdXRDaGFuZ2U9eyhjdXJyZW50X2xheW91dCwgYWxsX2xheW91dHMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxheW91dHMgPSBhbGxfbGF5b3V0cztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0UHJvcHMoe2N1cnJlbnRfbGF5b3V0LCBhbGxfbGF5b3V0OiBhbGxfbGF5b3V0c30pO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzYXZlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNhdmVUb0xzKGAke2lkfS1sYXlvdXRzYCwgYWxsX2xheW91dHMpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtjaGlsZHJlbi5tYXAoKGNoaWxkLCBrZXkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgX2tleTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY2hpbGQucHJvcHMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY2hpbGRfcHJvcHMgPSBjaGlsZC5wcm9wcy5fZGFzaHByaXZhdGVfbGF5b3V0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGNoaWxkLnByb3BzLl9kYXNocHJpdmF0ZV9sYXlvdXQucHJvcHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogY2hpbGQucHJvcHM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGlzRGFzaGJvYXJkSXRlbSA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2hpbGQucHJvcHMuX2Rhc2hwcml2YXRlX2xheW91dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gY2hpbGQucHJvcHMuX2Rhc2hwcml2YXRlX2xheW91dC50eXBlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBjaGlsZC50eXBlLm5hbWUpID09PSAnRGFzaGJvYXJkSXRlbSc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9rZXkgPSBpc0Rhc2hib2FyZEl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gY2hpbGRfcHJvcHMuaVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBjaGlsZF9wcm9wcy5pZCB8fCBrZXkudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfa2V5ID0ga2V5LnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17X2tleX0gY2xhc3NOYW1lPVwiaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbS10b3BcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaXRlbS10b3AtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtLXRvcC1yaWdodFwiPi4uLjwvZGl2PiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1heWJlIHdlIGNvdWxkIGFkZCBhIG1lbnUgdG8gY2hhbmdlIHRoZSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BlcnRpZXMgb2YgdGhlIGl0ZW0uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoc3RhdGljLCBkcmFnZ2FibGUsIHJlc2l6ZWFibGUsIC4uLilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaXRlbS1jb250ZW50XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlRG93bj17KGUpID0+IGUuc3RvcFByb3BhZ2F0aW9uKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NoaWxkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgPC9SZXNwb25zaXZlUmVhY3RHcmlkTGF5b3V0PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcblJlc3BvbnNpdmVHcmlkTGF5b3V0LmRlZmF1bHRQcm9wcyA9IHtcclxuICAgIHNhdmU6IHRydWUsXHJcbiAgICBjbGVhclNhdmVkTGF5b3V0OiBmYWxzZSxcclxuICAgIGNoaWxkcmVuOiBbXSxcclxuICAgIHN0eWxlOiB7fSxcclxuICAgIGNsYXNzTmFtZTogXCJcIixcclxufTtcclxuXHJcblJlc3BvbnNpdmVHcmlkTGF5b3V0LnByb3BUeXBlcyA9IHtcclxuICAgIC8qKlxyXG4gICAgICogKHN0cmluZykgVGhlIElEIHVzZWQgdG8gaWRlbnRpZnkgdGhpcyBjb21wb25lbnQgaW4gRGFzaCBjYWxsYmFja3MuXHJcbiAgICAgKiBUaGUgaWQgaXMgYWxzbyB1c2VkIHRvIGF1dG9tYXRpY2FsbHkgc2F2ZSB0aGUgbGF5b3V0IG9uIGNsaWVudCBzaWRlLlxyXG4gICAgICovXHJcbiAgICBpZDogUHJvcFR5cGVzLnN0cmluZyxcclxuXHJcbiAgICAvKipcclxuICAgICAqIExheW91dCBpcyBhIGxpc3QocHl0aG9uKS92ZWN0b3IoUikgb2YgZGljdGlvbm5hcnkoUHl0aG9uKS9saXN0KFIpIHdpdGggdGhlIGZvcm1hdDpcclxuICAgICAqIHt4OiBudW1iZXIsIHk6IG51bWJlciwgdzogbnVtYmVyLCBoOiBudW1iZXJ9XHJcbiAgICAgKiBUaGUgaW5kZXggaW50byB0aGUgbGF5b3V0IG11c3QgbWF0Y2ggdGhlIGlkIHVzZWQgb24gZWFjaCBpdGVtIGNvbXBvbmVudCB3aXRoIERhc2hib2FyZEl0ZW0uXHJcbiAgICAgKiBJZiB5b3UgY2hvb3NlIHRvIHVzZSBjdXN0b20ga2V5cywgeW91IGNhbiBzcGVjaWZ5IHRoYXQga2V5IGluIHRoZSBsYXlvdXRcclxuICAgICAqIGFycmF5IG9iamVjdHMgbGlrZSBzbzpcclxuICAgICAqIHtpOiBzdHJpbmcsIHg6IG51bWJlciwgeTogbnVtYmVyLCB3OiBudW1iZXIsIGg6IG51bWJlcn1cclxuICAgICAqIFRoZSBJRCB1c2VkIHRvIGlkZW50aWZ5IHRoaXMgY29tcG9uZW50IGluIERhc2ggY2FsbGJhY2tzLlxyXG4gICAgICogVGhlIGlkIGlzIGFsc28gdXNlZCB0byBhdXRvbWF0aWNhbGx5IHNhdmUgdGhlIGxheW91dCBvbiBjbGllbnQgc2lkZS5cclxuICAgICAqL1xyXG4gICAgbGF5b3V0czogUHJvcFR5cGVzLm9iamVjdCxcclxuXHJcbiAgICAvKipcclxuICAgICAqICh7YnJlYWtwb2ludDogbnVtYmVyfSkgVGhlIGJyZWFrcG9pbnRzIGZvciB0aGUgcmVzcG9uc2l2ZSBsYXlvdXQuXHJcbiAgICAgKiBGb3IgZWFjaCBzY3JlZW4gc2l6ZSAoYnJlYWtwb2ludCkgd2UgY2FuIGRlZmluZSBhIGRpZmZlcmVudCBsYXlvdXQuXHJcbiAgICAgKiAoc2VlIGFsc28gJ2xheW91dHMnIGFuZCAnZ3JpZENvbHMnIGFyZ3VtZW50cylcclxuICAgICAqIERlZmF1bHQgdmFsdWUgaXMge2xnOiAxMjAwLCBtZDogOTk2LCBzbTogNzY4LCB4czogNDgwLCB4eHM6IDB9XHJcbiAgICAgKi9cclxuICAgIGJyZWFrcG9pbnRzOiBQcm9wVHlwZXMub2JqZWN0LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogKHticmVha3BvaW50OiBudW1iZXJ9KSB0aGUgbnVtYmVyIG9mIGNvbHVtbnMgaW4gdGhlIGdyaWQgbGF5b3V0LlxyXG4gICAgICogRGVmYXVsdCB2YWx1ZSBpcyB7bGc6IDEyLCBtZDogMTAsIHNtOiA2LCB4czogNCwgeHhzOiAyfS5cclxuICAgICAqL1xyXG4gICAgZ3JpZENvbHM6IFByb3BUeXBlcy5vYmplY3QsXHJcblxyXG4gICAgLy8gbWFyZ2luOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcclxuICAgIC8vICAgICBQcm9wVHlwZXMub2JqZWN0LFxyXG4gICAgLy8gICAgIFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vYmplY3QpLFxyXG4gICAgLy8gXSksXHJcbiAgICAvLyBjb250YWluZXJQYWRkaW5nOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcclxuICAgIC8vICAgICBQcm9wVHlwZXMub2JqZWN0LFxyXG4gICAgLy8gICAgIFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vYmplY3QpLFxyXG4gICAgLy8gXSksXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDaGlsZHJlbiBpcyBhIGxpc3Qgb2YgdGhlIGl0ZW1zIChkYXNoIENvbXBvbmVudHMgYW5kL29yIFxyXG4gICAgICogRGFzaGJvYXJkSXRlbSkgdG8gZGlwbGF5IG9uIHRoZSBsYXlvdXQuXHJcbiAgICAgKiBCeSBkZWZhdWx0IGFsbCB0aGUgaXRlbXMgY2FuIGJlIGRyYWdnZWQgYW5kIHJlc2l6ZWQuXHJcbiAgICAgKi9cclxuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcclxuICAgICAgICBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMubm9kZSksXHJcbiAgICAgICAgUHJvcFR5cGVzLm5vZGUsXHJcbiAgICBdKSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIChib29sKSBJZiBUcnVlLCB0aGVuIHRoZSBsYXlvdXQgaXMgYXV0b21hdGljYWxseSBzYXZlZCBvbiBjbGllbnQgYnJvd3Nlci5cclxuICAgICAqIERlZmF1bHQgdmFsdWUgaXMgVHJ1ZVxyXG4gICAgICovXHJcbiAgICBzYXZlOiBQcm9wVHlwZXMuYm9vbCxcclxuXHJcbiAgICAvKipcclxuICAgICAqIChib29sKSBJZiBzZXQgdG8gdHJ1ZSwgdGhlbiB0aGUgbGF5b3V0IHNhdmVkIGluIHRoZSBjbGllbnQgYnJvd3NlclxyXG4gICAgICogd2lsbCBiZSBjbGVhcmVkIGluIHRoZSBuZXh0IHBhZ2UgbG9hZC5cclxuICAgICAqL1xyXG4gICAgY2xlYXJTYXZlZExheW91dDogUHJvcFR5cGVzLmJvb2wsXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiAoe2JyZWFrcG9pbnQ6IG51bWJlcn0pIHRoZSBkZWZhdWx0IG51bWJlciBvZiBjb2x1bW5zIGJ5IGl0ZW0uXHJcbiAgICAgKiBEZWZhdWx0IHZhbHVlIGlzIHtsZzogNiwgbWQ6IDUsIHNtOiAzLCB4czogNCwgeHhzOiAyfS5cclxuICAgICAqL1xyXG4gICAgbmNvbHM6IFByb3BUeXBlcy5udW1iZXIsXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiAobnVtYmVyKSB0aGUgZGVmYXVsdCBudW1iZXIgb2Ygcm93IGJ5IGl0ZW0uXHJcbiAgICAgKiBEZWZhdWx0IHZhbHVlIGlzIDguXHJcbiAgICAgKi9cclxuICAgIG5yb3dzOiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgXHJcbiAgICAvKipcclxuICAgICAqIChudW1iZXIpIGhlaWdodCBvZiBhIHJvdyAoaW4gcHgpLlxyXG4gICAgICogRGVmYXVsdCB2YWx1ZSBpcyAzMC5cclxuICAgICAqL1xyXG4gICAgaGVpZ2h0OiBQcm9wVHlwZXMubnVtYmVyLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogKHN0cmluZykgY2xhc3MgcGFzc2VkIHRvIHRoZSByZWFjdC1ncmlkLWxheW91dCBjb21wb25lbnQgXHJcbiAgICAgKi9cclxuICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuXHJcbiAgICAvKipcclxuICAgICAqIChkaWN0KSBjc3Mgc3R5bGUgcGFzc2VkIHRvIHRoZSByZWFjdC1ncmlkLWxheW91dCBjb21wb25lbnRcclxuICAgICAqL1xyXG4gICAgc3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEYXNoLWFzc2lnbmVkIGNhbGxiYWNrIHRoYXQgc2hvdWxkIGJlIGNhbGxlZCB0byByZXBvcnQgcHJvcGVydHkgY2hhbmdlc1xyXG4gICAgICogdG8gRGFzaCwgdG8gbWFrZSB0aGVtIGF2YWlsYWJsZSBmb3IgY2FsbGJhY2tzLlxyXG4gICAgICovXHJcbiAgICBzZXRQcm9wczogUHJvcFR5cGVzLmZ1bmMsXHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=