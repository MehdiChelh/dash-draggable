webpackHotUpdatedash_draggable("main",{

/***/ "./src/lib/components/DashboardItemResponsive.react.js":
/*!*************************************************************!*\
  !*** ./src/lib/components/DashboardItemResponsive.react.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DashboardItemResponsive; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants */ "./src/lib/constants.js");
/* harmony import */ var _node_modules_react_grid_layout_css_styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/react-grid-layout/css/styles.css */ "./node_modules/react-grid-layout/css/styles.css");
/* harmony import */ var _node_modules_react_grid_layout_css_styles_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_react_grid_layout_css_styles_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_react_resizable_css_styles_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../node_modules/react-resizable/css/styles.css */ "./node_modules/react-resizable/css/styles.css");
/* harmony import */ var _node_modules_react_resizable_css_styles_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_react_resizable_css_styles_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.css */ "./src/lib/components/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_5__);
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







/**
 * DashboardItemResponsive is a wrapper that is intended to be used with DraggableDashboard.
 * DashboardItemResponsive specify the position and size of the item on the dashboard.
 */

var DashboardItemResponsive = /*#__PURE__*/function (_React$Component) {
  _inherits(DashboardItemResponsive, _React$Component);

  var _super = _createSuper(DashboardItemResponsive);

  function DashboardItemResponsive() {
    _classCallCheck(this, DashboardItemResponsive);

    return _super.apply(this, arguments);
  }

  _createClass(DashboardItemResponsive, [{
    key: "render",
    value: function render() {
      var children = this.props.children;
      return children;
    }
  }]);

  return DashboardItemResponsive;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);


DashboardItemResponsive.defaultProps = {
  x: 0,
  y: 0,
  w: _constants__WEBPACK_IMPORTED_MODULE_2__["NCOLS"],
  h: _constants__WEBPACK_IMPORTED_MODULE_2__["NROWS"],
  __isDashboardItem: true
};
DashboardItemResponsive.propTypes = {
  /**
   * The ID used to identify this component in Dash callbacks.
   */
  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object]),

  /**
   * The child or list of children wrapped by the component.
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node), prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node]),

  /**
   * The position on the x axis in number of columns (by default, the  max is 12).
   */
  x: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object]).isRequired,

  /**
   * The position on the y axis (the unit is 30px, by default)
   */
  y: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object]).isRequired,

  /**
   * The width of the x axis (default is 6).
   */
  w: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object]).isRequired,

  /**
   * The height on the of y axis (default is 4)
   */
  h: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object]).isRequired,

  /**
   * If true, equal to `isDraggable: false, isResizable: false`.
   */
  "static": prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /**
   * If false, will not be draggable. Overrides `static`.
   */
  isDraggable: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /**
   * If false, will not be resizable. Overrides `static`.
   */
  isResizable: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  isBounded: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  maxH: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  maxW: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  minH: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  minW: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  moved: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  resizeHandles: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * This is an internal prop used to identify the component, this property default value is True. 
   * Setting this value to false is equivalent to not using the DashboardItem wrapper.
   */
  __isDashboardItem: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /**
   * Dash-assigned callback that should be called to report property changes
   * to Dash, to make them available for callbacks.
   */
  setProps: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYXNoX2RyYWdnYWJsZS8uL3NyYy9saWIvY29tcG9uZW50cy9EYXNoYm9hcmRJdGVtUmVzcG9uc2l2ZS5yZWFjdC5qcyJdLCJuYW1lcyI6WyJEYXNoYm9hcmRJdGVtUmVzcG9uc2l2ZSIsImNoaWxkcmVuIiwicHJvcHMiLCJSZWFjdCIsIkNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyIsIngiLCJ5IiwidyIsIk5DT0xTIiwiaCIsIk5ST1dTIiwiX19pc0Rhc2hib2FyZEl0ZW0iLCJwcm9wVHlwZXMiLCJpZCIsIlByb3BUeXBlcyIsIm9uZU9mVHlwZSIsInN0cmluZyIsIm9iamVjdCIsImFycmF5T2YiLCJub2RlIiwibnVtYmVyIiwiaXNSZXF1aXJlZCIsImJvb2wiLCJpc0RyYWdnYWJsZSIsImlzUmVzaXphYmxlIiwiaXNCb3VuZGVkIiwibWF4SCIsIm1heFciLCJtaW5IIiwibWluVyIsIm1vdmVkIiwicmVzaXplSGFuZGxlcyIsInNldFByb3BzIiwiZnVuYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBS0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0lBQ3FCQSx1Qjs7Ozs7Ozs7Ozs7Ozs2QkFDUjtBQUFBLFVBQ0VDLFFBREYsR0FDYyxLQUFLQyxLQURuQixDQUNFRCxRQURGO0FBRUwsYUFBT0EsUUFBUDtBQUNIOzs7O0VBSmdERSw0Q0FBSyxDQUFDQyxTOzs7QUFPM0RKLHVCQUF1QixDQUFDSyxZQUF4QixHQUF1QztBQUNuQ0MsR0FBQyxFQUFFLENBRGdDO0FBRW5DQyxHQUFDLEVBQUUsQ0FGZ0M7QUFHbkNDLEdBQUMsRUFBRUMsZ0RBSGdDO0FBSW5DQyxHQUFDLEVBQUVDLGdEQUpnQztBQUtuQ0MsbUJBQWlCLEVBQUU7QUFMZ0IsQ0FBdkM7QUFRQVosdUJBQXVCLENBQUNhLFNBQXhCLEdBQW9DO0FBQ2hDO0FBQ0o7QUFDQTtBQUNJQyxJQUFFLEVBQUVDLGlEQUFTLENBQUNDLFNBQVYsQ0FBb0IsQ0FDcEJELGlEQUFTLENBQUNFLE1BRFUsRUFFcEJGLGlEQUFTLENBQUNHLE1BRlUsQ0FBcEIsQ0FKNEI7O0FBU2hDO0FBQ0o7QUFDQTtBQUNJakIsVUFBUSxFQUFFYyxpREFBUyxDQUFDQyxTQUFWLENBQW9CLENBQzFCRCxpREFBUyxDQUFDSSxPQUFWLENBQWtCSixpREFBUyxDQUFDSyxJQUE1QixDQUQwQixFQUUxQkwsaURBQVMsQ0FBQ0ssSUFGZ0IsQ0FBcEIsQ0Fac0I7O0FBaUJoQztBQUNKO0FBQ0E7QUFDSWQsR0FBQyxFQUFFUyxpREFBUyxDQUFDQyxTQUFWLENBQW9CLENBQ25CRCxpREFBUyxDQUFDTSxNQURTLEVBRW5CTixpREFBUyxDQUFDRyxNQUZTLENBQXBCLEVBR0FJLFVBdkI2Qjs7QUF5QmhDO0FBQ0o7QUFDQTtBQUNJZixHQUFDLEVBQUVRLGlEQUFTLENBQUNDLFNBQVYsQ0FBb0IsQ0FDbkJELGlEQUFTLENBQUNNLE1BRFMsRUFFbkJOLGlEQUFTLENBQUNHLE1BRlMsQ0FBcEIsRUFHQUksVUEvQjZCOztBQWlDaEM7QUFDSjtBQUNBO0FBQ0lkLEdBQUMsRUFBRU8saURBQVMsQ0FBQ0MsU0FBVixDQUFvQixDQUNuQkQsaURBQVMsQ0FBQ00sTUFEUyxFQUVuQk4saURBQVMsQ0FBQ0csTUFGUyxDQUFwQixFQUdBSSxVQXZDNkI7O0FBeUNoQztBQUNKO0FBQ0E7QUFDSVosR0FBQyxFQUFFSyxpREFBUyxDQUFDQyxTQUFWLENBQW9CLENBQ25CRCxpREFBUyxDQUFDTSxNQURTLEVBRW5CTixpREFBUyxDQUFDRyxNQUZTLENBQXBCLEVBR0FJLFVBL0M2Qjs7QUFpRGhDO0FBQ0o7QUFDQTtBQUNJLFlBQVFQLGlEQUFTLENBQUNRLElBcERjOztBQXNEaEM7QUFDSjtBQUNBO0FBQ0lDLGFBQVcsRUFBRVQsaURBQVMsQ0FBQ1EsSUF6RFM7O0FBMERoQztBQUNKO0FBQ0E7QUFDSUUsYUFBVyxFQUFFVixpREFBUyxDQUFDUSxJQTdEUztBQStEaENHLFdBQVMsRUFBRVgsaURBQVMsQ0FBQ1EsSUEvRFc7QUFnRWhDSSxNQUFJLEVBQUVaLGlEQUFTLENBQUNNLE1BaEVnQjtBQWlFaENPLE1BQUksRUFBRWIsaURBQVMsQ0FBQ00sTUFqRWdCO0FBa0VoQ1EsTUFBSSxFQUFFZCxpREFBUyxDQUFDTSxNQWxFZ0I7QUFtRWhDUyxNQUFJLEVBQUVmLGlEQUFTLENBQUNNLE1BbkVnQjtBQW9FaENVLE9BQUssRUFBRWhCLGlEQUFTLENBQUNRLElBcEVlO0FBcUVoQ1MsZUFBYSxFQUFFakIsaURBQVMsQ0FBQ0UsTUFyRU87O0FBdUVoQztBQUNKO0FBQ0E7QUFDQTtBQUNJTCxtQkFBaUIsRUFBRUcsaURBQVMsQ0FBQ1EsSUEzRUc7O0FBNkVoQztBQUNKO0FBQ0E7QUFDQTtBQUNJVSxVQUFRLEVBQUVsQixpREFBUyxDQUFDbUI7QUFqRlksQ0FBcEMsQyIsImZpbGUiOiI4Yjg0N2M1LW1haW4td3BzLWhtci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcblxyXG5pbXBvcnQge1xyXG4gICAgTlJPV1MsXHJcbiAgICBOQ09MUyxcclxufSBmcm9tIFwiLi4vY29uc3RhbnRzXCJcclxuXHJcbmltcG9ydCBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1ncmlkLWxheW91dC9jc3Mvc3R5bGVzLmNzc1wiXHJcbmltcG9ydCBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1yZXNpemFibGUvY3NzL3N0eWxlcy5jc3NcIlxyXG5pbXBvcnQgXCIuL3N0eWxlLmNzc1wiXHJcblxyXG4vKipcclxuICogRGFzaGJvYXJkSXRlbVJlc3BvbnNpdmUgaXMgYSB3cmFwcGVyIHRoYXQgaXMgaW50ZW5kZWQgdG8gYmUgdXNlZCB3aXRoIERyYWdnYWJsZURhc2hib2FyZC5cclxuICogRGFzaGJvYXJkSXRlbVJlc3BvbnNpdmUgc3BlY2lmeSB0aGUgcG9zaXRpb24gYW5kIHNpemUgb2YgdGhlIGl0ZW0gb24gdGhlIGRhc2hib2FyZC5cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERhc2hib2FyZEl0ZW1SZXNwb25zaXZlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7Y2hpbGRyZW59ID0gdGhpcy5wcm9wc1xyXG4gICAgICAgIHJldHVybiBjaGlsZHJlblxyXG4gICAgfVxyXG59XHJcblxyXG5EYXNoYm9hcmRJdGVtUmVzcG9uc2l2ZS5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgICB4OiAwLFxyXG4gICAgeTogMCxcclxuICAgIHc6IE5DT0xTLFxyXG4gICAgaDogTlJPV1MsXHJcbiAgICBfX2lzRGFzaGJvYXJkSXRlbTogdHJ1ZVxyXG59O1xyXG5cclxuRGFzaGJvYXJkSXRlbVJlc3BvbnNpdmUucHJvcFR5cGVzID0ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgSUQgdXNlZCB0byBpZGVudGlmeSB0aGlzIGNvbXBvbmVudCBpbiBEYXNoIGNhbGxiYWNrcy5cclxuICAgICAqL1xyXG4gICAgaWQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xyXG4gICAgICAgIFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICAgICAgUHJvcFR5cGVzLm9iamVjdFxyXG4gICAgXSksXHJcbiAgICBcclxuICAgIC8qKlxyXG4gICAgICogVGhlIGNoaWxkIG9yIGxpc3Qgb2YgY2hpbGRyZW4gd3JhcHBlZCBieSB0aGUgY29tcG9uZW50LlxyXG4gICAgICovXHJcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbXHJcbiAgICAgICAgUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm5vZGUpLFxyXG4gICAgICAgIFByb3BUeXBlcy5ub2RlXHJcbiAgICBdKSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBwb3NpdGlvbiBvbiB0aGUgeCBheGlzIGluIG51bWJlciBvZiBjb2x1bW5zIChieSBkZWZhdWx0LCB0aGUgIG1heCBpcyAxMikuXHJcbiAgICAgKi9cclxuICAgIHg6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xyXG4gICAgICAgIFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICAgICAgUHJvcFR5cGVzLm9iamVjdFxyXG4gICAgXSkuaXNSZXF1aXJlZCxcclxuICAgIFxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgcG9zaXRpb24gb24gdGhlIHkgYXhpcyAodGhlIHVuaXQgaXMgMzBweCwgYnkgZGVmYXVsdClcclxuICAgICAqL1xyXG4gICAgeTogUHJvcFR5cGVzLm9uZU9mVHlwZShbXHJcbiAgICAgICAgUHJvcFR5cGVzLm51bWJlcixcclxuICAgICAgICBQcm9wVHlwZXMub2JqZWN0XHJcbiAgICBdKS5pc1JlcXVpcmVkLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIHdpZHRoIG9mIHRoZSB4IGF4aXMgKGRlZmF1bHQgaXMgNikuXHJcbiAgICAgKi9cclxuICAgIHc6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xyXG4gICAgICAgIFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICAgICAgUHJvcFR5cGVzLm9iamVjdFxyXG4gICAgXSkuaXNSZXF1aXJlZCxcclxuICAgIFxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgaGVpZ2h0IG9uIHRoZSBvZiB5IGF4aXMgKGRlZmF1bHQgaXMgNClcclxuICAgICAqL1xyXG4gICAgaDogUHJvcFR5cGVzLm9uZU9mVHlwZShbXHJcbiAgICAgICAgUHJvcFR5cGVzLm51bWJlcixcclxuICAgICAgICBQcm9wVHlwZXMub2JqZWN0XHJcbiAgICBdKS5pc1JlcXVpcmVkLFxyXG4gICAgXHJcbiAgICAvKipcclxuICAgICAqIElmIHRydWUsIGVxdWFsIHRvIGBpc0RyYWdnYWJsZTogZmFsc2UsIGlzUmVzaXphYmxlOiBmYWxzZWAuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYzogUHJvcFR5cGVzLmJvb2wsXHJcbiAgXHJcbiAgICAvKipcclxuICAgICAqIElmIGZhbHNlLCB3aWxsIG5vdCBiZSBkcmFnZ2FibGUuIE92ZXJyaWRlcyBgc3RhdGljYC5cclxuICAgICAqL1xyXG4gICAgaXNEcmFnZ2FibGU6IFByb3BUeXBlcy5ib29sLFxyXG4gICAgLyoqXHJcbiAgICAgKiBJZiBmYWxzZSwgd2lsbCBub3QgYmUgcmVzaXphYmxlLiBPdmVycmlkZXMgYHN0YXRpY2AuXHJcbiAgICAgKi9cclxuICAgIGlzUmVzaXphYmxlOiBQcm9wVHlwZXMuYm9vbCxcclxuXHJcbiAgICBpc0JvdW5kZWQ6IFByb3BUeXBlcy5ib29sLCAgXHJcbiAgICBtYXhIOiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgbWF4VzogUHJvcFR5cGVzLm51bWJlcixcclxuICAgIG1pbkg6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICBtaW5XOiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgbW92ZWQ6IFByb3BUeXBlcy5ib29sLFxyXG4gICAgcmVzaXplSGFuZGxlczogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIFxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIGlzIGFuIGludGVybmFsIHByb3AgdXNlZCB0byBpZGVudGlmeSB0aGUgY29tcG9uZW50LCB0aGlzIHByb3BlcnR5IGRlZmF1bHQgdmFsdWUgaXMgVHJ1ZS4gXHJcbiAgICAgKiBTZXR0aW5nIHRoaXMgdmFsdWUgdG8gZmFsc2UgaXMgZXF1aXZhbGVudCB0byBub3QgdXNpbmcgdGhlIERhc2hib2FyZEl0ZW0gd3JhcHBlci5cclxuICAgICAqL1xyXG4gICAgX19pc0Rhc2hib2FyZEl0ZW06IFByb3BUeXBlcy5ib29sLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGFzaC1hc3NpZ25lZCBjYWxsYmFjayB0aGF0IHNob3VsZCBiZSBjYWxsZWQgdG8gcmVwb3J0IHByb3BlcnR5IGNoYW5nZXNcclxuICAgICAqIHRvIERhc2gsIHRvIG1ha2UgdGhlbSBhdmFpbGFibGUgZm9yIGNhbGxiYWNrcy5cclxuICAgICAqL1xyXG4gICAgc2V0UHJvcHM6IFByb3BUeXBlcy5mdW5jXHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=