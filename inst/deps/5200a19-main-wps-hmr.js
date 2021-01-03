webpackHotUpdatedash_draggable("main",{

/***/ "./src/demo/App.js":
/*!*************************!*\
  !*** ./src/demo/App.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib */ "./src/lib/index.js");
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

/* eslint no-magic-numbers: 0 */



var App = /*#__PURE__*/function (_Component) {
  _inherits(App, _Component);

  var _super = _createSuper(App);

  function App() {
    var _this;

    _classCallCheck(this, App);

    _this = _super.call(this);
    _this.state = {
      value: ''
    };
    _this.setProps = _this.setProps.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(App, [{
    key: "setProps",
    value: function setProps(newProps) {
      this.setState(newProps);
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Not Responsive"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_1__["DraggableDashboard"], _extends({
        setProps: this.setProps,
        clearLayoutOnClient: true,
        layout: [{
          i: 'first-item',
          w: 5,
          h: 9,
          x: 1,
          y: 1
        } // {i: 'second-item', w: 4, h: 7, x: 1, y: 1},
        ]
      }, this.state), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_1__["DashboardItem"], {
        setProps: this.setProps,
        id: "second-item",
        w: 4,
        h: 3
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "0. Enim sint id adipisicing ullamco sit.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "first-item"
      }, "1. Enim sint id adipisicing ullamco sit."), "2. Enim sint id adipisicing ullamco sit.", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "3. Enim sint id adipisicing ullamco sit."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "4. Do ipsum mollit ut fugiat culpa non do reprehenderit nostrud do aliqua commodo quis fugiat. Ullamco eiusmod quis dolor culpa reprehenderit. Qui commodo fugiat nostrud eu duis aliquip in nulla aliquip. Non cillum nulla labore magna consectetur consequat mollit fugiat. Consequat deserunt occaecat aute Lorem quis laboris ullamco culpa ex quis laboris ea dolore. Do ipsum mollit ut fugiat culpa non do reprehenderit nostrud do aliqua commodo quis fugiat. Ullamco eiusmod quis dolor culpa reprehenderit. Qui commodo fugiat nostrud eu duis aliquip in nulla aliquip. Non cillum nulla labore magna consectetur consequat mollit fugiat. Consequat deserunt occaecat aute Lorem quis laboris ullamco culpa ex quis laboris ea dolore.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          width: '100%',
          height: '1px',
          backgroundColor: 'gray'
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Responsive"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_1__["DraggableDashboardResponsive"], _extends({
        setProps: this.setProps,
        clearLayoutOnClient: true,
        layouts: {
          lg: [{
            i: 'first-item',
            w: 5,
            h: 9,
            x: 1,
            y: 1
          } // {i: 'second-item', w: 4, h: 7, x: 1, y: 1}
          ]
        }
      }, this.state), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_1__["DashboardItemResponsive"], {
        setProps: this.setProps,
        id: "second-item",
        w: 100,
        h: {
          lg: 1,
          md: 2,
          sm: 3
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "0. Enim sint id adipisicing ullamco sit.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "first-item"
      }, "1. Enim sint id adipisicing ullamco sit."), "2. Enim sint id adipisicing ullamco sit.", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "3. Enim sint id adipisicing ullamco sit."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "4. Do ipsum mollit ut fugiat culpa non do reprehenderit nostrud do aliqua commodo quis fugiat. Ullamco eiusmod quis dolor culpa reprehenderit. Qui commodo fugiat nostrud eu duis aliquip in nulla aliquip. Non cillum nulla labore magna consectetur consequat mollit fugiat. Consequat deserunt occaecat aute Lorem quis laboris ullamco culpa ex quis laboris ea dolore. Do ipsum mollit ut fugiat culpa non do reprehenderit nostrud do aliqua commodo quis fugiat. Ullamco eiusmod quis dolor culpa reprehenderit. Qui commodo fugiat nostrud eu duis aliquip in nulla aliquip. Non cillum nulla labore magna consectetur consequat mollit fugiat. Consequat deserunt occaecat aute Lorem quis laboris ullamco culpa ex quis laboris ea dolore.")));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYXNoX2RyYWdnYWJsZS8uL3NyYy9kZW1vL0FwcC5qcyJdLCJuYW1lcyI6WyJBcHAiLCJzdGF0ZSIsInZhbHVlIiwic2V0UHJvcHMiLCJiaW5kIiwibmV3UHJvcHMiLCJzZXRTdGF0ZSIsImkiLCJ3IiwiaCIsIngiLCJ5Iiwid2lkdGgiLCJoZWlnaHQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJsZyIsIm1kIiwic20iLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBOztJQU9NQSxHOzs7OztBQUNGLGlCQUFjO0FBQUE7O0FBQUE7O0FBQ1Y7QUFDQSxVQUFLQyxLQUFMLEdBQWE7QUFDVEMsV0FBSyxFQUFFO0FBREUsS0FBYjtBQUdBLFVBQUtDLFFBQUwsR0FBZ0IsTUFBS0EsUUFBTCxDQUFjQyxJQUFkLCtCQUFoQjtBQUxVO0FBTWI7Ozs7NkJBRVFDLFEsRUFBVTtBQUNmLFdBQUtDLFFBQUwsQ0FBY0QsUUFBZDtBQUNIOzs7NkJBRVE7QUFDTCwwQkFDSSxxRkFDSSx3RkFESixlQUVJLDJEQUFDLHVEQUFEO0FBQ0ksZ0JBQVEsRUFBRSxLQUFLRixRQURuQjtBQUVJLDJCQUFtQixFQUFFLElBRnpCO0FBR0ksY0FBTSxFQUFFLENBQ0o7QUFBQ0ksV0FBQyxFQUFFLFlBQUo7QUFBa0JDLFdBQUMsRUFBRSxDQUFyQjtBQUF3QkMsV0FBQyxFQUFFLENBQTNCO0FBQThCQyxXQUFDLEVBQUUsQ0FBakM7QUFBb0NDLFdBQUMsRUFBRTtBQUF2QyxTQURJLENBRUo7QUFGSTtBQUhaLFNBT1EsS0FBS1YsS0FQYixnQkFTSSwyREFBQyxrREFBRDtBQUNJLGdCQUFRLEVBQUUsS0FBS0UsUUFEbkI7QUFFSSxVQUFFLEVBQUMsYUFGUDtBQUdJLFNBQUMsRUFBRSxDQUhQO0FBSUksU0FBQyxFQUFFO0FBSlAsc0JBTUksbUhBTkosQ0FUSixlQWlCSTtBQUFLLFVBQUUsRUFBQztBQUFSLG9EQWpCSiwyREFxQkksbUhBckJKLGVBc0JJLCt4QkF0QkosQ0FGSixlQTBDSTtBQUNJLGFBQUssRUFBRTtBQUNIUyxlQUFLLEVBQUUsTUFESjtBQUVIQyxnQkFBTSxFQUFFLEtBRkw7QUFHSEMseUJBQWUsRUFBRTtBQUhkO0FBRFgsUUExQ0osZUFpREksb0ZBakRKLGVBa0RJLDJEQUFDLGlFQUFEO0FBQ0ksZ0JBQVEsRUFBRSxLQUFLWCxRQURuQjtBQUVJLDJCQUFtQixFQUFFLElBRnpCO0FBR0ksZUFBTyxFQUFFO0FBQ0xZLFlBQUUsRUFBRSxDQUNBO0FBQUNSLGFBQUMsRUFBRSxZQUFKO0FBQWtCQyxhQUFDLEVBQUUsQ0FBckI7QUFBd0JDLGFBQUMsRUFBRSxDQUEzQjtBQUE4QkMsYUFBQyxFQUFFLENBQWpDO0FBQW9DQyxhQUFDLEVBQUU7QUFBdkMsV0FEQSxDQUVBO0FBRkE7QUFEQztBQUhiLFNBU1EsS0FBS1YsS0FUYixnQkFXSSwyREFBQyw0REFBRDtBQUNJLGdCQUFRLEVBQUUsS0FBS0UsUUFEbkI7QUFFSSxVQUFFLEVBQUMsYUFGUDtBQUdJLFNBQUMsRUFBRSxHQUhQO0FBSUksU0FBQyxFQUFFO0FBQUNZLFlBQUUsRUFBRSxDQUFMO0FBQVFDLFlBQUUsRUFBRSxDQUFaO0FBQWVDLFlBQUUsRUFBRTtBQUFuQjtBQUpQLHNCQU1JLG1IQU5KLENBWEosZUFtQkk7QUFBSyxVQUFFLEVBQUM7QUFBUixvREFuQkosMkRBdUJJLG1IQXZCSixlQXdCSSwreEJBeEJKLENBbERKLENBREo7QUE4Rkg7Ozs7RUE1R2FDLCtDOztBQStHSGxCLGtFQUFmLEUiLCJmaWxlIjoiNTIwMGExOS1tYWluLXdwcy1obXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQgbm8tbWFnaWMtbnVtYmVyczogMCAqL1xyXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCB7XHJcbiAgICBEcmFnZ2FibGVEYXNoYm9hcmQsXHJcbiAgICBEcmFnZ2FibGVEYXNoYm9hcmRSZXNwb25zaXZlLFxyXG4gICAgRGFzaGJvYXJkSXRlbSxcclxuICAgIERhc2hib2FyZEl0ZW1SZXNwb25zaXZlXHJcbn0gZnJvbSAnLi4vbGliJztcclxuXHJcbmNsYXNzIEFwcCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIHZhbHVlOiAnJyxcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuc2V0UHJvcHMgPSB0aGlzLnNldFByb3BzLmJpbmQodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0UHJvcHMobmV3UHJvcHMpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKG5ld1Byb3BzKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxoMT5Ob3QgUmVzcG9uc2l2ZTwvaDE+XHJcbiAgICAgICAgICAgICAgICA8RHJhZ2dhYmxlRGFzaGJvYXJkXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0UHJvcHM9e3RoaXMuc2V0UHJvcHN9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJMYXlvdXRPbkNsaWVudD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICBsYXlvdXQ9e1tcclxuICAgICAgICAgICAgICAgICAgICAgICAge2k6ICdmaXJzdC1pdGVtJywgdzogNSwgaDogOSwgeDogMSwgeTogMX0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHtpOiAnc2Vjb25kLWl0ZW0nLCB3OiA0LCBoOiA3LCB4OiAxLCB5OiAxfSxcclxuICAgICAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgICAgICAgIHsuLi50aGlzLnN0YXRlfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxEYXNoYm9hcmRJdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFByb3BzPXt0aGlzLnNldFByb3BzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cInNlY29uZC1pdGVtXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdz17NH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaD17M31cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+MC4gRW5pbSBzaW50IGlkIGFkaXBpc2ljaW5nIHVsbGFtY28gc2l0LjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRGFzaGJvYXJkSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiZmlyc3QtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAxLiBFbmltIHNpbnQgaWQgYWRpcGlzaWNpbmcgdWxsYW1jbyBzaXQuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgMi4gRW5pbSBzaW50IGlkIGFkaXBpc2ljaW5nIHVsbGFtY28gc2l0LlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+My4gRW5pbSBzaW50IGlkIGFkaXBpc2ljaW5nIHVsbGFtY28gc2l0LjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDQuIERvIGlwc3VtIG1vbGxpdCB1dCBmdWdpYXQgY3VscGEgbm9uIGRvIHJlcHJlaGVuZGVyaXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9zdHJ1ZCBkbyBhbGlxdWEgY29tbW9kbyBxdWlzIGZ1Z2lhdC4gVWxsYW1jbyBlaXVzbW9kXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1aXMgZG9sb3IgY3VscGEgcmVwcmVoZW5kZXJpdC4gUXVpIGNvbW1vZG8gZnVnaWF0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vc3RydWQgZXUgZHVpcyBhbGlxdWlwIGluIG51bGxhIGFsaXF1aXAuIE5vbiBjaWxsdW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbnVsbGEgbGFib3JlIG1hZ25hIGNvbnNlY3RldHVyIGNvbnNlcXVhdCBtb2xsaXQgZnVnaWF0LlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBDb25zZXF1YXQgZGVzZXJ1bnQgb2NjYWVjYXQgYXV0ZSBMb3JlbSBxdWlzIGxhYm9yaXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgdWxsYW1jbyBjdWxwYSBleCBxdWlzIGxhYm9yaXMgZWEgZG9sb3JlLiBEbyBpcHN1bSBtb2xsaXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXQgZnVnaWF0IGN1bHBhIG5vbiBkbyByZXByZWhlbmRlcml0IG5vc3RydWQgZG8gYWxpcXVhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbW1vZG8gcXVpcyBmdWdpYXQuIFVsbGFtY28gZWl1c21vZCBxdWlzIGRvbG9yIGN1bHBhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcHJlaGVuZGVyaXQuIFF1aSBjb21tb2RvIGZ1Z2lhdCBub3N0cnVkIGV1IGR1aXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpcXVpcCBpbiBudWxsYSBhbGlxdWlwLiBOb24gY2lsbHVtIG51bGxhIGxhYm9yZSBtYWduYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zZWN0ZXR1ciBjb25zZXF1YXQgbW9sbGl0IGZ1Z2lhdC4gQ29uc2VxdWF0IGRlc2VydW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9jY2FlY2F0IGF1dGUgTG9yZW0gcXVpcyBsYWJvcmlzIHVsbGFtY28gY3VscGEgZXggcXVpc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJvcmlzIGVhIGRvbG9yZS5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvRHJhZ2dhYmxlRGFzaGJvYXJkPlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICcxcHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdncmF5JyxcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGgxPlJlc3BvbnNpdmU8L2gxPlxyXG4gICAgICAgICAgICAgICAgPERyYWdnYWJsZURhc2hib2FyZFJlc3BvbnNpdmVcclxuICAgICAgICAgICAgICAgICAgICBzZXRQcm9wcz17dGhpcy5zZXRQcm9wc31cclxuICAgICAgICAgICAgICAgICAgICBjbGVhckxheW91dE9uQ2xpZW50PXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgIGxheW91dHM9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGc6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpOiAnZmlyc3QtaXRlbScsIHc6IDUsIGg6IDksIHg6IDEsIHk6IDF9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8ge2k6ICdzZWNvbmQtaXRlbScsIHc6IDQsIGg6IDcsIHg6IDEsIHk6IDF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICB7Li4udGhpcy5zdGF0ZX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8RGFzaGJvYXJkSXRlbVJlc3BvbnNpdmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0UHJvcHM9e3RoaXMuc2V0UHJvcHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwic2Vjb25kLWl0ZW1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3PXsxMDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGg9e3tsZzogMSwgbWQ6IDIsIHNtOiAzfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+MC4gRW5pbSBzaW50IGlkIGFkaXBpc2ljaW5nIHVsbGFtY28gc2l0LjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRGFzaGJvYXJkSXRlbVJlc3BvbnNpdmU+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cImZpcnN0LWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgMS4gRW5pbSBzaW50IGlkIGFkaXBpc2ljaW5nIHVsbGFtY28gc2l0LlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDIuIEVuaW0gc2ludCBpZCBhZGlwaXNpY2luZyB1bGxhbWNvIHNpdC5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PjMuIEVuaW0gc2ludCBpZCBhZGlwaXNpY2luZyB1bGxhbWNvIHNpdC48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA0LiBEbyBpcHN1bSBtb2xsaXQgdXQgZnVnaWF0IGN1bHBhIG5vbiBkbyByZXByZWhlbmRlcml0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vc3RydWQgZG8gYWxpcXVhIGNvbW1vZG8gcXVpcyBmdWdpYXQuIFVsbGFtY28gZWl1c21vZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBxdWlzIGRvbG9yIGN1bHBhIHJlcHJlaGVuZGVyaXQuIFF1aSBjb21tb2RvIGZ1Z2lhdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBub3N0cnVkIGV1IGR1aXMgYWxpcXVpcCBpbiBudWxsYSBhbGlxdWlwLiBOb24gY2lsbHVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG51bGxhIGxhYm9yZSBtYWduYSBjb25zZWN0ZXR1ciBjb25zZXF1YXQgbW9sbGl0IGZ1Z2lhdC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQ29uc2VxdWF0IGRlc2VydW50IG9jY2FlY2F0IGF1dGUgTG9yZW0gcXVpcyBsYWJvcmlzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVsbGFtY28gY3VscGEgZXggcXVpcyBsYWJvcmlzIGVhIGRvbG9yZS4gRG8gaXBzdW0gbW9sbGl0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHV0IGZ1Z2lhdCBjdWxwYSBub24gZG8gcmVwcmVoZW5kZXJpdCBub3N0cnVkIGRvIGFsaXF1YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21tb2RvIHF1aXMgZnVnaWF0LiBVbGxhbWNvIGVpdXNtb2QgcXVpcyBkb2xvciBjdWxwYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXByZWhlbmRlcml0LiBRdWkgY29tbW9kbyBmdWdpYXQgbm9zdHJ1ZCBldSBkdWlzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaXF1aXAgaW4gbnVsbGEgYWxpcXVpcC4gTm9uIGNpbGx1bSBudWxsYSBsYWJvcmUgbWFnbmFcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc2VjdGV0dXIgY29uc2VxdWF0IG1vbGxpdCBmdWdpYXQuIENvbnNlcXVhdCBkZXNlcnVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvY2NhZWNhdCBhdXRlIExvcmVtIHF1aXMgbGFib3JpcyB1bGxhbWNvIGN1bHBhIGV4IHF1aXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFib3JpcyBlYSBkb2xvcmUuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L0RyYWdnYWJsZURhc2hib2FyZFJlc3BvbnNpdmU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==