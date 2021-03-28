webpackHotUpdatedash_draggable("main",{

/***/ "./src/lib/components/GridLayout.react.js":
/*!************************************************!*\
  !*** ./src/lib/components/GridLayout.react.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GridLayout; });
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










var defaultItemLayout = function defaultItemLayout(item_layout, id, key, ncols) {
  var nb_child_x = Math.floor(_constants__WEBPACK_IMPORTED_MODULE_3__["GRID_COLS"] / ncols);
  var col = key % nb_child_x;
  var row = Math.floor(key / nb_child_x);
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
    // to refactor
    y: item_layout.y ? item_layout.y : defaultChildLayout.y,
    w: item_layout.w ? item_layout.w : defaultChildLayout.w,
    h: item_layout.h ? item_layout.h : defaultChildLayout.h
  });
};
/**
 * GridLayout is a component for building 
 * dashboards with draggable and resizable items.
 * It takes a list of children and display them in
 * div elements that can be moved around the page.
 * The initial size of each element can either be 
 * defined with the layout argument or by wrapping 
 * each element with the DashboardItem component.
 * By default, GridLayout will saved the 
 * position of the elements on client side, when 
 * moved on the page. But you can also save it 
 * on server side by defining a callback with : 
 * `Input("<my-id>", "layout")`.
 */


var GridLayout = /*#__PURE__*/function (_Component) {
  _inherits(GridLayout, _Component);

  var _super = _createSuper(GridLayout);

  function GridLayout() {
    _classCallCheck(this, GridLayout);

    return _super.apply(this, arguments);
  }

  _createClass(GridLayout, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      var _this$props$children = this.props.children,
          children = _this$props$children === void 0 ? [] : _this$props$children;
      var _this$props = this.props,
          id = _this$props.id,
          providedLayout = _this$props.layout,
          clearSavedLayout = _this$props.clearSavedLayout,
          _this$props$ncols = _this$props.ncols,
          ncols = _this$props$ncols === void 0 ? _constants__WEBPACK_IMPORTED_MODULE_3__["NCOLS"] : _this$props$ncols;
      var child_props, child_id, isDashboardItem;
      children = Array.isArray(children) ? children : [children]; // Build layout
      //   client local store [except if specified]
      //   > layout
      //   > element [except if sepcified])

      if (clearSavedLayout) {
        Object(_localStorage__WEBPACK_IMPORTED_MODULE_4__["saveToLs"])("".concat(id, "-layout"), null);
      }

      var savedLayout = Object(_localStorage__WEBPACK_IMPORTED_MODULE_4__["getFromLs"])("".concat(id, "-layout"));
      var layout = children.map(function (child, key) {
        var item_layout;

        if (typeof child === 'string') {
          child_id = key.toString();
        } else {
          child_props = child.props._dashprivate_layout ? child.props._dashprivate_layout.props : child.props;
          isDashboardItem = (child.props._dashprivate_layout ? child.props._dashprivate_layout.type : child.type.name) === 'DashboardItem';
          child_id = isDashboardItem ? child_props.i : child_props.id;
        }

        if (savedLayout) {
          item_layout = savedLayout.find(function (el) {
            return el.i === child_id || el.i === key.toString();
          });
        }

        if (!item_layout && providedLayout) {
          item_layout = providedLayout.find(function (el) {
            return el.i === child_id;
          });
        }

        if (!item_layout && isDashboardItem) {
          var _child_props = child_props,
              _id = _child_props.id,
              x = _child_props.x,
              y = _child_props.y,
              w = _child_props.w,
              h = _child_props.h;
          item_layout = defaultItemLayout({
            i: _id,
            x: x,
            y: y,
            w: w,
            h: h
          }, child_id, key, ncols);
        }

        if (!item_layout) {
          item_layout = defaultItemLayout({}, child_id, key, ncols);
        } // }
        // else {
        //     item_layout = defaultItemLayout({}, null, key, items_by_row)
        // }


        return item_layout;
      });
      this.initialLayout = layout;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props$children2 = this.props.children,
          children = _this$props$children2 === void 0 ? [] : _this$props$children2;
      var _this$props2 = this.props,
          id = _this$props2.id,
          save = _this$props2.save,
          setProps = _this$props2.setProps,
          _this$props2$width = _this$props2.width,
          width = _this$props2$width === void 0 ? _constants__WEBPACK_IMPORTED_MODULE_3__["WIDTH"] : _this$props2$width,
          _this$props2$height = _this$props2.height,
          height = _this$props2$height === void 0 ? _constants__WEBPACK_IMPORTED_MODULE_3__["ROW_HEIGHT"] : _this$props2$height,
          className = _this$props2.className,
          style = _this$props2.style;
      children = Array.isArray(children) ? children : [children];
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_grid_layout__WEBPACK_IMPORTED_MODULE_2___default.a, {
        className: className,
        layout: this.initialLayout,
        cols: _constants__WEBPACK_IMPORTED_MODULE_3__["GRID_COLS"],
        rowHeight: height,
        width: width,
        style: style,
        onLayoutChange: function onLayoutChange(layout) {
          setProps({
            layout: layout
          });

          if (save) {
            Object(_localStorage__WEBPACK_IMPORTED_MODULE_4__["saveToLs"])("".concat(id, "-layout"), layout);
          }
        }
      }, "\"hhyyyyyyy\"", children.map(function (child, key) {
        // Get the id / key of each child
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

  return GridLayout;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);


GridLayout.defaultProps = {
  save: true,
  clearSavedLayout: false,
  children: [],
  className: "",
  style: {}
};
GridLayout.propTypes = {
  /**
   * (string) The ID used to identify this component in Dash callbacks.
   * The id is also used to automatically save the layout on client side.
   */
  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Layout is a list of dictionnary with the format:
   * {x: number, y: number, w: number, h: number}
   * The index into the layout must match the id used on each item component with DashboardItem.
   * If you choose to use custom keys, you can specify that key in the layout
   * array objects like so:
   * {i: string, x: number, y: number, w: number, h: number}
   * The ID used to identify this component in Dash callbacks.
   * The id is also used to automatically save the layout on client side.
   */
  layout: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object),

  /**
   * Children is a list of the elements to drag and resize on the dashboard.
   * It can be a list of dash Components and/or DashboardItem.
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node), prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node]),

  /**
   * (bool) If False, then the layout is not saved in the browser.
   * Default value is True.
   */
  save: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /**
   * (bool) If set to true, then the layout saved in the client browser
   * will be cleared on page load.
   */
  clearSavedLayout: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /**
   * (number) the default number of columns by item.
   * Default value is 6.
   */
  ncols: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,

  /**
   * (number) the default number of row by item.
   * Default value is 8.
   */
  nrows: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,

  /**
   * (number) width (in px).
   * Default value is 1200.
   */
  width: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYXNoX2RyYWdnYWJsZS8uL3NyYy9saWIvY29tcG9uZW50cy9HcmlkTGF5b3V0LnJlYWN0LmpzIl0sIm5hbWVzIjpbImRlZmF1bHRJdGVtTGF5b3V0IiwiaXRlbV9sYXlvdXQiLCJpZCIsImtleSIsIm5jb2xzIiwibmJfY2hpbGRfeCIsIk1hdGgiLCJmbG9vciIsIkdSSURfQ09MUyIsImNvbCIsInJvdyIsImRlZmF1bHRDaGlsZExheW91dCIsImkiLCJ0b1N0cmluZyIsIngiLCJ5IiwidyIsImgiLCJOUk9XUyIsIkdyaWRMYXlvdXQiLCJwcm9wcyIsImNoaWxkcmVuIiwicHJvdmlkZWRMYXlvdXQiLCJsYXlvdXQiLCJjbGVhclNhdmVkTGF5b3V0IiwiTkNPTFMiLCJjaGlsZF9wcm9wcyIsImNoaWxkX2lkIiwiaXNEYXNoYm9hcmRJdGVtIiwiQXJyYXkiLCJpc0FycmF5Iiwic2F2ZVRvTHMiLCJzYXZlZExheW91dCIsImdldEZyb21McyIsIm1hcCIsImNoaWxkIiwiX2Rhc2hwcml2YXRlX2xheW91dCIsInR5cGUiLCJuYW1lIiwiZmluZCIsImVsIiwiaW5pdGlhbExheW91dCIsInNhdmUiLCJzZXRQcm9wcyIsIndpZHRoIiwiV0lEVEgiLCJoZWlnaHQiLCJST1dfSEVJR0hUIiwiY2xhc3NOYW1lIiwic3R5bGUiLCJfa2V5IiwiZSIsInN0b3BQcm9wYWdhdGlvbiIsIkNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImFycmF5T2YiLCJvYmplY3QiLCJvbmVPZlR5cGUiLCJub2RlIiwiYm9vbCIsIm51bWJlciIsIm5yb3dzIiwiZnVuYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFRQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxpQkFBaUIsR0FBRyxTQUFwQkEs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LFdBQVMsRUFBRVEsaURBQVMsQ0FBQ0MsTUFuRUY7O0FBcUVuQjtBQUNKO0FBQ0E7QUFDSVIsT0FBSyxFQUFFTyxpREFBUyxDQUFDRyxNQXhFRTs7QUEwRW5CO0FBQ0o7QUFDQTtBQUNBO0FBQ0loQixVQUFRLEVBQUVhLGlEQUFTLENBQUNTO0FBOUVELENBQXZCLEMiLCJmaWxlIjoiNjg4YjY5My1tYWluLXdwcy1obXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IEdyaWRMYXlvdXR0dCBmcm9tICdyZWFjdC1ncmlkLWxheW91dCc7XHJcblxyXG5pbXBvcnQge1xyXG4gICAgR1JJRF9DT0xTLFxyXG4gICAgTkNPTFMsXHJcbiAgICBOUk9XUyxcclxuICAgIFJPV19IRUlHSFQsXHJcbiAgICBXSURUSCxcclxufSBmcm9tIFwiLi4vY29uc3RhbnRzXCJcclxuXHJcbmltcG9ydCB7c2F2ZVRvTHMsIGdldEZyb21Mc30gZnJvbSBcIi4uL2xvY2FsU3RvcmFnZVwiO1xyXG5pbXBvcnQgXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVhY3QtZ3JpZC1sYXlvdXQvY3NzL3N0eWxlcy5jc3NcIlxyXG5pbXBvcnQgXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVzaXphYmxlL2Nzcy9zdHlsZXMuY3NzXCJcclxuaW1wb3J0IFwiLi9zdHlsZS5jc3NcIlxyXG5cclxuY29uc3QgZGVmYXVsdEl0ZW1MYXlvdXQgPSAoaXRlbV9sYXlvdXQsIGlkLCBrZXksIG5jb2xzKSA9PiB7XHJcbiAgICBcclxuICAgIGNvbnN0IG5iX2NoaWxkX3ggPSBNYXRoLmZsb29yKEdSSURfQ09MUyAvIG5jb2xzKVxyXG4gICAgY29uc3QgY29sID0gKGtleSAlIG5iX2NoaWxkX3gpXHJcbiAgICBjb25zdCByb3cgPSBNYXRoLmZsb29yKGtleSAvIG5iX2NoaWxkX3gpXHJcbiAgICBjb25zdCBkZWZhdWx0Q2hpbGRMYXlvdXQgPSB7XHJcbiAgICAgICAgaTogaWQgfHwga2V5LnRvU3RyaW5nKCksXHJcbiAgICAgICAgeDogY29sICogbmNvbHMsXHJcbiAgICAgICAgeTogcm93LFxyXG4gICAgICAgIHc6IG5jb2xzLFxyXG4gICAgICAgIGg6IE5ST1dTXHJcbiAgICB9XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLmRlZmF1bHRDaGlsZExheW91dCxcclxuICAgICAgICAuLi5pdGVtX2xheW91dCxcclxuICAgICAgICBpOiBpZCB8fCBrZXkudG9TdHJpbmcoKSxcclxuICAgICAgICB4OiBpdGVtX2xheW91dC54ID8gaXRlbV9sYXlvdXQueCA6IGRlZmF1bHRDaGlsZExheW91dC54LCAgLy8gdG8gcmVmYWN0b3JcclxuICAgICAgICB5OiBpdGVtX2xheW91dC55ID8gaXRlbV9sYXlvdXQueSA6IGRlZmF1bHRDaGlsZExheW91dC55LFxyXG4gICAgICAgIHc6IGl0ZW1fbGF5b3V0LncgPyBpdGVtX2xheW91dC53IDogZGVmYXVsdENoaWxkTGF5b3V0LncsXHJcbiAgICAgICAgaDogaXRlbV9sYXlvdXQuaCA/IGl0ZW1fbGF5b3V0LmggOiBkZWZhdWx0Q2hpbGRMYXlvdXQuaCxcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEdyaWRMYXlvdXQgaXMgYSBjb21wb25lbnQgZm9yIGJ1aWxkaW5nIFxyXG4gKiBkYXNoYm9hcmRzIHdpdGggZHJhZ2dhYmxlIGFuZCByZXNpemFibGUgaXRlbXMuXHJcbiAqIEl0IHRha2VzIGEgbGlzdCBvZiBjaGlsZHJlbiBhbmQgZGlzcGxheSB0aGVtIGluXHJcbiAqIGRpdiBlbGVtZW50cyB0aGF0IGNhbiBiZSBtb3ZlZCBhcm91bmQgdGhlIHBhZ2UuXHJcbiAqIFRoZSBpbml0aWFsIHNpemUgb2YgZWFjaCBlbGVtZW50IGNhbiBlaXRoZXIgYmUgXHJcbiAqIGRlZmluZWQgd2l0aCB0aGUgbGF5b3V0IGFyZ3VtZW50IG9yIGJ5IHdyYXBwaW5nIFxyXG4gKiBlYWNoIGVsZW1lbnQgd2l0aCB0aGUgRGFzaGJvYXJkSXRlbSBjb21wb25lbnQuXHJcbiAqIEJ5IGRlZmF1bHQsIEdyaWRMYXlvdXQgd2lsbCBzYXZlZCB0aGUgXHJcbiAqIHBvc2l0aW9uIG9mIHRoZSBlbGVtZW50cyBvbiBjbGllbnQgc2lkZSwgd2hlbiBcclxuICogbW92ZWQgb24gdGhlIHBhZ2UuIEJ1dCB5b3UgY2FuIGFsc28gc2F2ZSBpdCBcclxuICogb24gc2VydmVyIHNpZGUgYnkgZGVmaW5pbmcgYSBjYWxsYmFjayB3aXRoIDogXHJcbiAqIGBJbnB1dChcIjxteS1pZD5cIiwgXCJsYXlvdXRcIilgLlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR3JpZExheW91dCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb21wb25lbnRXaWxsTW91bnQoKSB7XHJcbiAgICAgICAgbGV0IHtjaGlsZHJlbj1bXX0gPSB0aGlzLnByb3BzXHJcbiAgICAgICAgY29uc3Qge1xyXG4gICAgICAgICAgICBpZCxcclxuICAgICAgICAgICAgbGF5b3V0OiBwcm92aWRlZExheW91dCxcclxuICAgICAgICAgICAgY2xlYXJTYXZlZExheW91dCxcclxuICAgICAgICAgICAgbmNvbHMgPSBOQ09MUyxcclxuICAgICAgICB9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBsZXQgY2hpbGRfcHJvcHMsIGNoaWxkX2lkLCBpc0Rhc2hib2FyZEl0ZW07XHJcbiAgICAgICAgY2hpbGRyZW4gPSBBcnJheS5pc0FycmF5KGNoaWxkcmVuKSA/IGNoaWxkcmVuIDogW2NoaWxkcmVuXVxyXG4gICAgICAgIC8vIEJ1aWxkIGxheW91dFxyXG4gICAgICAgIC8vICAgY2xpZW50IGxvY2FsIHN0b3JlIFtleGNlcHQgaWYgc3BlY2lmaWVkXVxyXG4gICAgICAgIC8vICAgPiBsYXlvdXRcclxuICAgICAgICAvLyAgID4gZWxlbWVudCBbZXhjZXB0IGlmIHNlcGNpZmllZF0pXHJcbiAgICAgICAgaWYgKGNsZWFyU2F2ZWRMYXlvdXQpIHtcclxuICAgICAgICAgICAgc2F2ZVRvTHMoYCR7aWR9LWxheW91dGAsIG51bGwpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHNhdmVkTGF5b3V0ID0gZ2V0RnJvbUxzKGAke2lkfS1sYXlvdXRgKVxyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGxheW91dCA9IGNoaWxkcmVuLm1hcCgoY2hpbGQsIGtleSkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgaXRlbV9sYXlvdXQ7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNoaWxkID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgICAgICAgY2hpbGRfaWQgPSBrZXkudG9TdHJpbmcoKVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGNoaWxkX3Byb3BzID0gY2hpbGQucHJvcHMuX2Rhc2hwcml2YXRlX2xheW91dFxyXG4gICAgICAgICAgICAgICAgPyBjaGlsZC5wcm9wcy5fZGFzaHByaXZhdGVfbGF5b3V0LnByb3BzXHJcbiAgICAgICAgICAgICAgICA6IGNoaWxkLnByb3BzO1xyXG5cclxuICAgICAgICAgICAgICAgIGlzRGFzaGJvYXJkSXRlbSA9IChjaGlsZC5wcm9wcy5fZGFzaHByaXZhdGVfbGF5b3V0XHJcbiAgICAgICAgICAgICAgICAgICAgPyBjaGlsZC5wcm9wcy5fZGFzaHByaXZhdGVfbGF5b3V0LnR5cGVcclxuICAgICAgICAgICAgICAgICAgICA6IGNoaWxkLnR5cGUubmFtZSkgPT09ICdEYXNoYm9hcmRJdGVtJztcclxuXHJcbiAgICAgICAgICAgICAgICBjaGlsZF9pZCA9XHJcbiAgICAgICAgICAgICAgICAgICAgaXNEYXNoYm9hcmRJdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gY2hpbGRfcHJvcHMuaVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IGNoaWxkX3Byb3BzLmlkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYgKHNhdmVkTGF5b3V0KSB7XHJcbiAgICAgICAgICAgICAgICBpdGVtX2xheW91dCA9IHNhdmVkTGF5b3V0LmZpbmQoXHJcbiAgICAgICAgICAgICAgICAgICAgKGVsKSA9PiBlbC5pID09PSBjaGlsZF9pZCB8fCBlbC5pID09PSBrZXkudG9TdHJpbmcoKVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIWl0ZW1fbGF5b3V0ICYmIHByb3ZpZGVkTGF5b3V0KXtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaXRlbV9sYXlvdXQgPSBwcm92aWRlZExheW91dC5maW5kKGVsID0+IGVsLmkgPT09IGNoaWxkX2lkKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghaXRlbV9sYXlvdXQgJiYgaXNEYXNoYm9hcmRJdGVtKXtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHtpZCwgeCwgeSwgdywgaH0gPSBjaGlsZF9wcm9wc1xyXG4gICAgICAgICAgICAgICAgaXRlbV9sYXlvdXQgPSBkZWZhdWx0SXRlbUxheW91dCh7aTppZCwgeCwgeSwgdywgaH0sIGNoaWxkX2lkLCBrZXksIG5jb2xzKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghaXRlbV9sYXlvdXQpe1xyXG4gICAgICAgICAgICAgICAgaXRlbV9sYXlvdXQgPSBkZWZhdWx0SXRlbUxheW91dCh7fSwgY2hpbGRfaWQsIGtleSwgbmNvbHMpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAvLyBlbHNlIHtcclxuICAgICAgICAgICAgLy8gICAgIGl0ZW1fbGF5b3V0ID0gZGVmYXVsdEl0ZW1MYXlvdXQoe30sIG51bGwsIGtleSwgaXRlbXNfYnlfcm93KVxyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgIHJldHVybiBpdGVtX2xheW91dFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5pbml0aWFsTGF5b3V0ID0gbGF5b3V0XHJcbiAgICB9XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgbGV0IHtjaGlsZHJlbj1bXX0gPSB0aGlzLnByb3BzXHJcbiAgICAgICAgY29uc3Qge1xyXG4gICAgICAgICAgICBpZCxcclxuICAgICAgICAgICAgc2F2ZSxcclxuICAgICAgICAgICAgc2V0UHJvcHMsXHJcbiAgICAgICAgICAgIHdpZHRoID0gV0lEVEgsXHJcbiAgICAgICAgICAgIGhlaWdodCA9IFJPV19IRUlHSFQsXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZSxcclxuICAgICAgICAgICAgc3R5bGUsXHJcbiAgICAgICAgfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIGNoaWxkcmVuID0gQXJyYXkuaXNBcnJheShjaGlsZHJlbikgPyBjaGlsZHJlbiA6IFtjaGlsZHJlbl07XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPEdyaWRMYXlvdXR0dFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XHJcbiAgICAgICAgICAgICAgICBsYXlvdXQ9e3RoaXMuaW5pdGlhbExheW91dH1cclxuICAgICAgICAgICAgICAgIGNvbHM9e0dSSURfQ09MU31cclxuICAgICAgICAgICAgICAgIHJvd0hlaWdodD17aGVpZ2h0fVxyXG4gICAgICAgICAgICAgICAgd2lkdGg9e3dpZHRofVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3N0eWxlfVxyXG4gICAgICAgICAgICAgICAgb25MYXlvdXRDaGFuZ2U9eyhsYXlvdXQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRQcm9wcyh7bGF5b3V0fSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNhdmUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2F2ZVRvTHMoYCR7aWR9LWxheW91dGAsIGxheW91dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgXCJoaHl5eXl5eXlcIlxyXG4gICAgICAgICAgICAgICAge2NoaWxkcmVuLm1hcCgoY2hpbGQsIGtleSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIEdldCB0aGUgaWQgLyBrZXkgb2YgZWFjaCBjaGlsZFxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBfa2V5O1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjaGlsZC5wcm9wcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjaGlsZF9wcm9wcyA9IGNoaWxkLnByb3BzLl9kYXNocHJpdmF0ZV9sYXlvdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gY2hpbGQucHJvcHMuX2Rhc2hwcml2YXRlX2xheW91dC5wcm9wc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBjaGlsZC5wcm9wcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaXNEYXNoYm9hcmRJdGVtID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjaGlsZC5wcm9wcy5fZGFzaHByaXZhdGVfbGF5b3V0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBjaGlsZC5wcm9wcy5fZGFzaHByaXZhdGVfbGF5b3V0LnR5cGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGNoaWxkLnR5cGUubmFtZSkgPT09ICdEYXNoYm9hcmRJdGVtJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgX2tleSA9IGlzRGFzaGJvYXJkSXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBjaGlsZF9wcm9wcy5pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGNoaWxkX3Byb3BzLmlkIHx8IGtleS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9rZXkgPSBrZXkudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtfa2V5fSBjbGFzc05hbWU9XCJpdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtLXRvcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpdGVtLXRvcC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW0tdG9wLXJpZ2h0XCI+Li4uPC9kaXY+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTWF5YmUgd2UgY291bGQgYWRkIGEgbWVudSB0byBjaGFuZ2UgdGhlIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcGVydGllcyBvZiB0aGUgaXRlbS5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChzdGF0aWMsIGRyYWdnYWJsZSwgcmVzaXplYWJsZSwgLi4uKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpdGVtLWNvbnRlbnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VEb3duPXsoZSkgPT4gZS5zdG9wUHJvcGFnYXRpb24oKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2hpbGR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICA8L0dyaWRMYXlvdXR0dD5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5HcmlkTGF5b3V0LmRlZmF1bHRQcm9wcyA9IHtcclxuICAgIHNhdmU6IHRydWUsXHJcbiAgICBjbGVhclNhdmVkTGF5b3V0OiBmYWxzZSxcclxuICAgIGNoaWxkcmVuOiBbXSxcclxuICAgIGNsYXNzTmFtZTogXCJcIixcclxuICAgIHN0eWxlOiB7fSxcclxufTtcclxuXHJcbkdyaWRMYXlvdXQucHJvcFR5cGVzID0ge1xyXG4gICAgLyoqXHJcbiAgICAgKiAoc3RyaW5nKSBUaGUgSUQgdXNlZCB0byBpZGVudGlmeSB0aGlzIGNvbXBvbmVudCBpbiBEYXNoIGNhbGxiYWNrcy5cclxuICAgICAqIFRoZSBpZCBpcyBhbHNvIHVzZWQgdG8gYXV0b21hdGljYWxseSBzYXZlIHRoZSBsYXlvdXQgb24gY2xpZW50IHNpZGUuXHJcbiAgICAgKi9cclxuICAgIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogTGF5b3V0IGlzIGEgbGlzdCBvZiBkaWN0aW9ubmFyeSB3aXRoIHRoZSBmb3JtYXQ6XHJcbiAgICAgKiB7eDogbnVtYmVyLCB5OiBudW1iZXIsIHc6IG51bWJlciwgaDogbnVtYmVyfVxyXG4gICAgICogVGhlIGluZGV4IGludG8gdGhlIGxheW91dCBtdXN0IG1hdGNoIHRoZSBpZCB1c2VkIG9uIGVhY2ggaXRlbSBjb21wb25lbnQgd2l0aCBEYXNoYm9hcmRJdGVtLlxyXG4gICAgICogSWYgeW91IGNob29zZSB0byB1c2UgY3VzdG9tIGtleXMsIHlvdSBjYW4gc3BlY2lmeSB0aGF0IGtleSBpbiB0aGUgbGF5b3V0XHJcbiAgICAgKiBhcnJheSBvYmplY3RzIGxpa2Ugc286XHJcbiAgICAgKiB7aTogc3RyaW5nLCB4OiBudW1iZXIsIHk6IG51bWJlciwgdzogbnVtYmVyLCBoOiBudW1iZXJ9XHJcbiAgICAgKiBUaGUgSUQgdXNlZCB0byBpZGVudGlmeSB0aGlzIGNvbXBvbmVudCBpbiBEYXNoIGNhbGxiYWNrcy5cclxuICAgICAqIFRoZSBpZCBpcyBhbHNvIHVzZWQgdG8gYXV0b21hdGljYWxseSBzYXZlIHRoZSBsYXlvdXQgb24gY2xpZW50IHNpZGUuXHJcbiAgICAgKi8gICAgXHJcbiAgICBsYXlvdXQ6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vYmplY3QpLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2hpbGRyZW4gaXMgYSBsaXN0IG9mIHRoZSBlbGVtZW50cyB0byBkcmFnIGFuZCByZXNpemUgb24gdGhlIGRhc2hib2FyZC5cclxuICAgICAqIEl0IGNhbiBiZSBhIGxpc3Qgb2YgZGFzaCBDb21wb25lbnRzIGFuZC9vciBEYXNoYm9hcmRJdGVtLlxyXG4gICAgICovXHJcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbXHJcbiAgICAgICAgUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm5vZGUpLFxyXG4gICAgICAgIFByb3BUeXBlcy5ub2RlXHJcbiAgICBdKSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIChib29sKSBJZiBGYWxzZSwgdGhlbiB0aGUgbGF5b3V0IGlzIG5vdCBzYXZlZCBpbiB0aGUgYnJvd3Nlci5cclxuICAgICAqIERlZmF1bHQgdmFsdWUgaXMgVHJ1ZS5cclxuICAgICAqL1xyXG4gICAgc2F2ZTogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICBcclxuICAgIC8qKlxyXG4gICAgICogKGJvb2wpIElmIHNldCB0byB0cnVlLCB0aGVuIHRoZSBsYXlvdXQgc2F2ZWQgaW4gdGhlIGNsaWVudCBicm93c2VyXHJcbiAgICAgKiB3aWxsIGJlIGNsZWFyZWQgb24gcGFnZSBsb2FkLlxyXG4gICAgICovXHJcbiAgICBjbGVhclNhdmVkTGF5b3V0OiBQcm9wVHlwZXMuYm9vbCxcclxuXHJcbiAgICAvKipcclxuICAgICAqIChudW1iZXIpIHRoZSBkZWZhdWx0IG51bWJlciBvZiBjb2x1bW5zIGJ5IGl0ZW0uXHJcbiAgICAgKiBEZWZhdWx0IHZhbHVlIGlzIDYuXHJcbiAgICAgKi9cclxuICAgIG5jb2xzOiBQcm9wVHlwZXMubnVtYmVyLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogKG51bWJlcikgdGhlIGRlZmF1bHQgbnVtYmVyIG9mIHJvdyBieSBpdGVtLlxyXG4gICAgICogRGVmYXVsdCB2YWx1ZSBpcyA4LlxyXG4gICAgICovXHJcbiAgICBucm93czogUHJvcFR5cGVzLm51bWJlcixcclxuICAgIFxyXG4gICAgLyoqXHJcbiAgICAgKiAobnVtYmVyKSB3aWR0aCAoaW4gcHgpLlxyXG4gICAgICogRGVmYXVsdCB2YWx1ZSBpcyAxMjAwLlxyXG4gICAgICovXHJcbiAgICB3aWR0aDogUHJvcFR5cGVzLm51bWJlcixcclxuXHJcbiAgICAvKipcclxuICAgICAqIChudW1iZXIpIGhlaWdodCBvZiBhIHJvdyAoaW4gcHgpLlxyXG4gICAgICogRGVmYXVsdCB2YWx1ZSBpcyAzMC5cclxuICAgICAqL1xyXG4gICAgaGVpZ2h0OiBQcm9wVHlwZXMubnVtYmVyLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogKHN0cmluZykgY2xhc3MgcGFzc2VkIHRvIHRoZSByZWFjdC1ncmlkLWxheW91dCBjb21wb25lbnQgXHJcbiAgICAgKi9cclxuICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuXHJcbiAgICAvKipcclxuICAgICAqIChkaWN0KSBjc3Mgc3R5bGUgcGFzc2VkIHRvIHRoZSByZWFjdC1ncmlkLWxheW91dCBjb21wb25lbnRcclxuICAgICAqL1xyXG4gICAgc3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEYXNoLWFzc2lnbmVkIGNhbGxiYWNrIHRoYXQgc2hvdWxkIGJlIGNhbGxlZCB0byByZXBvcnQgcHJvcGVydHkgY2hhbmdlc1xyXG4gICAgICogdG8gRGFzaCwgdG8gbWFrZSB0aGVtIGF2YWlsYWJsZSBmb3IgY2FsbGJhY2tzLlxyXG4gICAgICovXHJcbiAgICBzZXRQcm9wczogUHJvcFR5cGVzLmZ1bmNcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==