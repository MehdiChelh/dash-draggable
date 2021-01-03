webpackHotUpdatedash_draggable("main",{

/***/ "./src/lib/components/DashDraggable.react.js":
/*!***************************************************!*\
  !*** ./src/lib/components/DashDraggable.react.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DashDraggable; });
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
  var col_width = Math.floor(_constants__WEBPACK_IMPORTED_MODULE_3__["MAX_COLS"] / ncols);
  var col = key % ncols;
  var row = Math.floor(key / ncols);
  var defaultChildLayout = {
    i: id || key.toString(),
    x: col * col_width,
    y: row,
    w: col_width,
    h: _constants__WEBPACK_IMPORTED_MODULE_3__["DEFAULT_HEIGHT"]
  };
  return _objectSpread(_objectSpread(_objectSpread({}, defaultChildLayout), item_layout), {}, {
    i: id || key.toString()
  });
};
/**
 * ExampleComponent is an example component.
 * It takes a property, `label`, and
 * displays it.
 * It renders an input with the property `value`
 * which is editable by the user.
 */


var DashDraggable = /*#__PURE__*/function (_Component) {
  _inherits(DashDraggable, _Component);

  var _super = _createSuper(DashDraggable);

  function DashDraggable() {
    _classCallCheck(this, DashDraggable);

    return _super.apply(this, arguments);
  }

  _createClass(DashDraggable, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      var _this$props = this.props,
          layout = _this$props.layout,
          children = _this$props.children,
          ncols = _this$props.ncols;
      var _this$props2 = this.props,
          id = _this$props2.id,
          clearLayoutOnClient = _this$props2.clearLayoutOnClient;
      ncols = ncols ? ncols : _constants__WEBPACK_IMPORTED_MODULE_3__["DEFAULT_NCOLS"];
      children = children ? children : [];
      children = Array.isArray(children) ? children : [children]; // Build layout
      //   client local store [except if specified]
      //   > layout
      //   > element [except if sepcified])

      if (clearLayoutOnClient) {
        Object(_localStorage__WEBPACK_IMPORTED_MODULE_4__["saveToLs"])("".concat(id, "-layout"), null);
      }

      var savedLayout = Object(_localStorage__WEBPACK_IMPORTED_MODULE_4__["getFromLs"])("".concat(id, "-layout"));
      layout = children.map(function (child, key) {
        var item_layout;
        console.log({
          id: id
        });
        console.log({
          layout: layout
        });
        console.log({
          child: child
        });

        if (child.props) {
          if (savedLayout) {
            item_layout = savedLayout.find(function (el) {
              return el.i === child.props.id || el.i === key.toString();
            });
          }

          if (!item_layout && layout) {
            item_layout = layout.find(function (el) {
              return el.i === child.props.id;
            });
          }

          if (!item_layout && child.props.__isDragItem) {
            var _child$props = child.props,
                _id = _child$props.id,
                x = _child$props.x,
                y = _child$props.y,
                w = _child$props.w,
                h = _child$props.h;
            item_layout = defaultItemLayout({
              i: _id,
              x: x,
              y: y,
              w: w,
              h: h
            }, child.props.id, key, ncols);
          }

          if (!item_layout) {
            item_layout = defaultItemLayout({}, child.props.id, key, ncols);
          }
        } else {
          item_layout = defaultItemLayout({}, null, key, ncols);
        }

        return item_layout;
      });
      this.initialLayout = layout;
    }
  }, {
    key: "render",
    value: function render() {
      var children = this.props.children;
      var _this$props3 = this.props,
          id = _this$props3.id,
          saveToClient = _this$props3.saveToClient,
          setProps = _this$props3.setProps;
      children = children ? children : [];
      children = Array.isArray(children) ? children : [children];
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_grid_layout__WEBPACK_IMPORTED_MODULE_2___default.a, {
        className: "layout",
        layout: this.initialLayout,
        cols: _constants__WEBPACK_IMPORTED_MODULE_3__["MAX_COLS"],
        rowHeight: _constants__WEBPACK_IMPORTED_MODULE_3__["DEFAULT_ROW_HEIGHT"],
        width: 1200,
        onLayoutChange: function onLayoutChange(layout) {
          setProps({
            layout: layout
          });

          if (saveToClient) {
            Object(_localStorage__WEBPACK_IMPORTED_MODULE_4__["saveToLs"])("".concat(id, "-layout"), layout);
          }
        }
      }, children.map(function (el, key) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          key: el.props ? el.props.id || key.toString() : key.toString(),
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
        }, el));
      }));
    }
  }]);

  return DashDraggable;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);


DashDraggable.defaultProps = {
  saveToClient: true,
  clearLayoutOnClient: false,
  children: []
};
DashDraggable.propTypes = {
  /**
   * The ID used to identify this component in Dash callbacks.
   */
  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * A label that will be printed when this component is rendered.
   */
  // label: PropTypes.string.isRequired,

  /**
   * The value displayed in the input.
   */
  value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  layout: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object),
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node), prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node]),
  saveToClient: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  clearLayoutOnClient: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  ncols: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  nrows: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,

  /**
   * Dash-assigned callback that should be called to report property changes
   * to Dash, to make them available for callbacks.
   */
  setProps: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYXNoX2RyYWdnYWJsZS8uL3NyYy9saWIvY29tcG9uZW50cy9EYXNoRHJhZ2dhYmxlLnJlYWN0LmpzIl0sIm5hbWVzIjpbImRlZmF1bHRJdGVtTGF5b3V0IiwiaXRlbV9sYXlvdXQiLCJpZCIsImtleSIsIm5jb2xzIiwiY29sX3dpZHRoIiwiTWF0aCIsImZsb29yIiwiTUFYX0NPTFMiLCJjb2wiLCJyb3ciLCJkZWZhdWx0Q2hpbGRMYXlvdXQiLCJpIiwidG9TdHJpbmciLCJ4IiwieSIsInciLCJoIiwiREVGQVVMVF9IRUlHSFQiLCJEYXNoRHJhZ2dhYmxlIiwicHJvcHMiLCJsYXlvdXQiLCJjaGlsZHJlbiIsImNsZWFyTGF5b3V0T25DbGllbnQiLCJERUZBVUxUX05DT0xTIiwiQXJyYXkiLCJpc0FycmF5Iiwic2F2ZVRvTHMiLCJzYXZlZExheW91dCIsImdldEZyb21McyIsIm1hcCIsImNoaWxkIiwiY29uc29sZSIsImxvZyIsImZpbmQiLCJlbCIsIl9faXNEcmFnSXRlbSIsImluaXRpYWxMYXlvdXQiLCJzYXZlVG9DbGllbnQiLCJzZXRQcm9wcyIsIkRFRkFVTFRfUk9XX0hFSUdIVCIsImUiLCJzdG9wUHJvcGFnYXRpb24iLCJDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJ2YWx1ZSIsImFycmF5T2YiLCJvYmplY3QiLCJvbmVPZlR5cGUiLCJub2RlIiwiYm9vbCIsIm51bWJlciIsIm5yb3dzIiwiZnVuYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFPQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLENBQUNDLFdBQUQsRUFBY0MsRUFBZCxFQUFrQkMsR0FBbEIsRUFBdUJDLEtBQXZCLEVBQWlDO0FBRXZELE1B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QUFRLEVBQUU7QUFIZSxDQUE3QjtBQU1BSCxhQUFhLENBQUMwQixTQUFkLEdBQTBCO0FBQ3RCO0FBQ0o7QUFDQTtBQUNJM0MsSUFBRSxFQUFFNEMsaURBQVMsQ0FBQ0MsTUFKUTs7QUFNdEI7QUFDSjtBQUNBO0FBQ0k7O0FBRUE7QUFDSjtBQUNBO0FBQ0lDLE9BQUssRUFBRUYsaURBQVMsQ0FBQ0MsTUFkSztBQWdCdEIxQixRQUFNLEVBQUV5QixpREFBUyxDQUFDRyxPQUFWLENBQWtCSCxpREFBUyxDQUFDSSxNQUE1QixDQWhCYztBQWtCdEI1QixVQUFRLEVBQUV3QixpREFBUyxDQUFDSyxTQUFWLENBQW9CLENBQzFCTCxpREFBUyxDQUFDRyxPQUFWLENBQWtCSCxpREFBUyxDQUFDTSxJQUE1QixDQUQwQixFQUUxQk4saURBQVMsQ0FBQ00sSUFGZ0IsQ0FBcEIsQ0FsQlk7QUF1QnRCZCxjQUFZLEVBQUVRLGlEQUFTLENBQUNPLElBdkJGO0FBd0J0QjlCLHFCQUFtQixFQUFFdUIsaURBQVMsQ0FBQ08sSUF4QlQ7QUEwQnRCakQsT0FBSyxFQUFFMEMsaURBQVMsQ0FBQ1EsTUExQks7QUEyQnRCQyxPQUFLLEVBQUVULGlEQUFTLENBQUNRLE1BM0JLOztBQTZCdEI7QUFDSjtBQUNBO0FBQ0E7QUFDSWYsVUFBUSxFQUFFTyxpREFBUyxDQUFDVTtBQWpDRSxDQUExQixDIiwiZmlsZSI6IjI4ZTc1YTUtbWFpbi13cHMtaG1yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBHcmlkTGF5b3V0IGZyb20gJ3JlYWN0LWdyaWQtbGF5b3V0JztcclxuXHJcbmltcG9ydCB7XHJcbiAgICBERUZBVUxUX05DT0xTLFxyXG4gICAgTUFYX0NPTFMsXHJcbiAgICBERUZBVUxUX0hFSUdIVCxcclxuICAgIERFRkFVTFRfUk9XX0hFSUdIVFxyXG59IGZyb20gXCIuLi9jb25zdGFudHNcIlxyXG5cclxuaW1wb3J0IHtzYXZlVG9McywgZ2V0RnJvbUxzfSBmcm9tIFwiLi4vbG9jYWxTdG9yYWdlXCI7XHJcbmltcG9ydCBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1ncmlkLWxheW91dC9jc3Mvc3R5bGVzLmNzc1wiXHJcbmltcG9ydCBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1yZXNpemFibGUvY3NzL3N0eWxlcy5jc3NcIlxyXG5pbXBvcnQgXCIuL3N0eWxlLmNzc1wiXHJcblxyXG5jb25zdCBkZWZhdWx0SXRlbUxheW91dCA9IChpdGVtX2xheW91dCwgaWQsIGtleSwgbmNvbHMpID0+IHtcclxuICAgIFxyXG4gICAgY29uc3QgY29sX3dpZHRoID0gTWF0aC5mbG9vcihNQVhfQ09MUyAvIG5jb2xzKVxyXG4gICAgY29uc3QgY29sID0gKGtleSAlIG5jb2xzKVxyXG4gICAgY29uc3Qgcm93ID0gTWF0aC5mbG9vcihrZXkgLyBuY29scylcclxuICAgIGNvbnN0IGRlZmF1bHRDaGlsZExheW91dCA9IHtcclxuICAgICAgICBpOiBpZCB8fCBrZXkudG9TdHJpbmcoKSxcclxuICAgICAgICB4OiBjb2wgKiBjb2xfd2lkdGgsXHJcbiAgICAgICAgeTogcm93LFxyXG4gICAgICAgIHc6IGNvbF93aWR0aCxcclxuICAgICAgICBoOiBERUZBVUxUX0hFSUdIVFxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5kZWZhdWx0Q2hpbGRMYXlvdXQsXHJcbiAgICAgICAgLi4uaXRlbV9sYXlvdXQsXHJcbiAgICAgICAgaTogaWQgfHwga2V5LnRvU3RyaW5nKCksXHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBFeGFtcGxlQ29tcG9uZW50IGlzIGFuIGV4YW1wbGUgY29tcG9uZW50LlxyXG4gKiBJdCB0YWtlcyBhIHByb3BlcnR5LCBgbGFiZWxgLCBhbmRcclxuICogZGlzcGxheXMgaXQuXHJcbiAqIEl0IHJlbmRlcnMgYW4gaW5wdXQgd2l0aCB0aGUgcHJvcGVydHkgYHZhbHVlYFxyXG4gKiB3aGljaCBpcyBlZGl0YWJsZSBieSB0aGUgdXNlci5cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERhc2hEcmFnZ2FibGUgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29tcG9uZW50V2lsbE1vdW50KCkge1xyXG4gICAgICAgIGxldCB7bGF5b3V0LCBjaGlsZHJlbiwgbmNvbHN9ID0gdGhpcy5wcm9wc1xyXG4gICAgICAgIGNvbnN0IHtpZCwgY2xlYXJMYXlvdXRPbkNsaWVudH0gPSB0aGlzLnByb3BzXHJcbiAgICAgICAgbmNvbHMgPSBuY29scyA/IG5jb2xzIDogREVGQVVMVF9OQ09MU1xyXG4gICAgICAgIGNoaWxkcmVuID0gY2hpbGRyZW4gPyBjaGlsZHJlbiA6IFtdXHJcbiAgICAgICAgY2hpbGRyZW4gPSBBcnJheS5pc0FycmF5KGNoaWxkcmVuKSA/IGNoaWxkcmVuIDogW2NoaWxkcmVuXVxyXG4gICAgICAgIC8vIEJ1aWxkIGxheW91dFxyXG4gICAgICAgIC8vICAgY2xpZW50IGxvY2FsIHN0b3JlIFtleGNlcHQgaWYgc3BlY2lmaWVkXVxyXG4gICAgICAgIC8vICAgPiBsYXlvdXRcclxuICAgICAgICAvLyAgID4gZWxlbWVudCBbZXhjZXB0IGlmIHNlcGNpZmllZF0pXHJcbiAgICAgICAgaWYgKGNsZWFyTGF5b3V0T25DbGllbnQpIHtcclxuICAgICAgICAgICAgc2F2ZVRvTHMoYCR7aWR9LWxheW91dGAsIG51bGwpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHNhdmVkTGF5b3V0ID0gZ2V0RnJvbUxzKGAke2lkfS1sYXlvdXRgKVxyXG4gICAgICAgIFxyXG4gICAgICAgIGxheW91dCA9IGNoaWxkcmVuLm1hcCgoY2hpbGQsIGtleSkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgaXRlbV9sYXlvdXQ7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHtpZH0pXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHtsYXlvdXR9KVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh7Y2hpbGR9KVxyXG4gICAgICAgICAgICBpZiAoY2hpbGQucHJvcHMpe1xyXG4gICAgICAgICAgICAgICAgaWYgKHNhdmVkTGF5b3V0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbV9sYXlvdXQgPSBzYXZlZExheW91dC5maW5kKGVsID0+IChlbC5pID09PSBjaGlsZC5wcm9wcy5pZCkgfHwgKGVsLmkgPT09IGtleS50b1N0cmluZygpKSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICghaXRlbV9sYXlvdXQgJiYgbGF5b3V0KXtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtX2xheW91dCA9IGxheW91dC5maW5kKGVsID0+IGVsLmkgPT09IGNoaWxkLnByb3BzLmlkKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKCFpdGVtX2xheW91dCAmJiBjaGlsZC5wcm9wcy5fX2lzRHJhZ0l0ZW0pe1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHtpZCwgeCwgeSwgdywgaH0gPSBjaGlsZC5wcm9wc1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1fbGF5b3V0ID0gZGVmYXVsdEl0ZW1MYXlvdXQoe2k6aWQsIHgsIHksIHcsIGh9LCBjaGlsZC5wcm9wcy5pZCwga2V5LCBuY29scylcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICghaXRlbV9sYXlvdXQpe1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1fbGF5b3V0ID0gZGVmYXVsdEl0ZW1MYXlvdXQoe30sIGNoaWxkLnByb3BzLmlkLCBrZXksIG5jb2xzKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaXRlbV9sYXlvdXQgPSBkZWZhdWx0SXRlbUxheW91dCh7fSwgbnVsbCwga2V5LCBuY29scylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gaXRlbV9sYXlvdXRcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMuaW5pdGlhbExheW91dCA9IGxheW91dFxyXG4gICAgfVxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGxldCB7Y2hpbGRyZW59ID0gdGhpcy5wcm9wc1xyXG4gICAgICAgIGNvbnN0IHtpZCwgc2F2ZVRvQ2xpZW50LCBzZXRQcm9wc30gPSB0aGlzLnByb3BzXHJcblxyXG4gICAgICAgIGNoaWxkcmVuID0gY2hpbGRyZW4gPyBjaGlsZHJlbiA6IFtdXHJcbiAgICAgICAgY2hpbGRyZW4gPSBBcnJheS5pc0FycmF5KGNoaWxkcmVuKSA/IGNoaWxkcmVuIDogW2NoaWxkcmVuXVxyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxHcmlkTGF5b3V0XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImxheW91dFwiXHJcbiAgICAgICAgICAgIGxheW91dD17dGhpcy5pbml0aWFsTGF5b3V0fVxyXG4gICAgICAgICAgICBjb2xzPXtNQVhfQ09MU31cclxuICAgICAgICAgICAgcm93SGVpZ2h0PXtERUZBVUxUX1JPV19IRUlHSFR9XHJcbiAgICAgICAgICAgIHdpZHRoPXsxMjAwfVxyXG4gICAgICAgICAgICBvbkxheW91dENoYW5nZT17KGxheW91dCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0UHJvcHMoe2xheW91dH0pXHJcbiAgICAgICAgICAgICAgICBpZihzYXZlVG9DbGllbnQpe1xyXG4gICAgICAgICAgICAgICAgICAgIHNhdmVUb0xzKGAke2lkfS1sYXlvdXRgLCBsYXlvdXQpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAge2NoaWxkcmVuLm1hcCgoZWwsIGtleSkgPT4gXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17ZWwucHJvcHMgPyBlbC5wcm9wcy5pZCB8fCBrZXkudG9TdHJpbmcoKSA6IGtleS50b1N0cmluZygpfVxyXG4gICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbS10b3BcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaXRlbS10b3AtY29udGVudFwiPi4uLjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwiaXRlbS10b3AtcmlnaHRcIj4uLi48L2Rpdj4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+fVxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbS1jb250ZW50XCIgb25Nb3VzZURvd249eyBlID0+IGUuc3RvcFByb3BhZ2F0aW9uKCkgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2VsfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvR3JpZExheW91dD5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbkRhc2hEcmFnZ2FibGUuZGVmYXVsdFByb3BzID0ge1xyXG4gICAgc2F2ZVRvQ2xpZW50OiB0cnVlLFxyXG4gICAgY2xlYXJMYXlvdXRPbkNsaWVudDogZmFsc2UsXHJcbiAgICBjaGlsZHJlbjogW11cclxufTtcclxuXHJcbkRhc2hEcmFnZ2FibGUucHJvcFR5cGVzID0ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgSUQgdXNlZCB0byBpZGVudGlmeSB0aGlzIGNvbXBvbmVudCBpbiBEYXNoIGNhbGxiYWNrcy5cclxuICAgICAqL1xyXG4gICAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGxhYmVsIHRoYXQgd2lsbCBiZSBwcmludGVkIHdoZW4gdGhpcyBjb21wb25lbnQgaXMgcmVuZGVyZWQuXHJcbiAgICAgKi9cclxuICAgIC8vIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgdmFsdWUgZGlzcGxheWVkIGluIHRoZSBpbnB1dC5cclxuICAgICAqL1xyXG4gICAgdmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcblxyXG4gICAgbGF5b3V0OiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub2JqZWN0KSxcclxuXHJcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbXHJcbiAgICAgICAgUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm5vZGUpLFxyXG4gICAgICAgIFByb3BUeXBlcy5ub2RlXHJcbiAgICBdKSxcclxuXHJcbiAgICBzYXZlVG9DbGllbnQ6IFByb3BUeXBlcy5ib29sLFxyXG4gICAgY2xlYXJMYXlvdXRPbkNsaWVudDogUHJvcFR5cGVzLmJvb2wsXHJcblxyXG4gICAgbmNvbHM6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICBucm93czogUHJvcFR5cGVzLm51bWJlcixcclxuXHJcbiAgICAvKipcclxuICAgICAqIERhc2gtYXNzaWduZWQgY2FsbGJhY2sgdGhhdCBzaG91bGQgYmUgY2FsbGVkIHRvIHJlcG9ydCBwcm9wZXJ0eSBjaGFuZ2VzXHJcbiAgICAgKiB0byBEYXNoLCB0byBtYWtlIHRoZW0gYXZhaWxhYmxlIGZvciBjYWxsYmFja3MuXHJcbiAgICAgKi9cclxuICAgIHNldFByb3BzOiBQcm9wVHlwZXMuZnVuY1xyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9