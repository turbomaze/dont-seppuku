webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/game */ "./components/game.js");
/* harmony import */ var _components_splash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/splash */ "./components/splash.js");
var _jsxFileName = "/home/user/Documents/@javascript/quarantine-game/pages/index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



var pages = {
  splash: 'splash',
  game: 'game'
};
function Index() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(pages.game),
      page = _useState[0],
      setPage = _useState[1];

  var content = __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 17
    }
  }, "Unknown UI error");

  if (page === pages.splash) {
    return __jsx(_components_splash__WEBPACK_IMPORTED_MODULE_3__["Splash"], {
      onPlayNow: function onPlayNow() {
        return setPage(pages.game);
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 12
      }
    });
  } else if (page === pages.game) {
    return __jsx(_components_game__WEBPACK_IMPORTED_MODULE_2__["Game"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 12
      }
    });
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, content, __jsx(GlobalStyles, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }));
}

function GlobalStyles() {
  return __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2997498894",
    __self: this
  }, "html,body,body>div:first-child,div#__next,div#__next>div{margin:0;padding:0;height:100%;overflow:hidden;}body{background:#430d27;color:#1c002e;font-family:'Open Sans',sans-serif;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3VzZXIvRG9jdW1lbnRzL0BqYXZhc2NyaXB0L3F1YXJhbnRpbmUtZ2FtZS9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyQnVCLEFBR2tCLEFBT1UsU0FOVCxVQUNFLEFBTUUsWUFMRSxFQU1vQixjQUx0QyxxQkFNQSIsImZpbGUiOiIvaG9tZS91c2VyL0RvY3VtZW50cy9AamF2YXNjcmlwdC9xdWFyYW50aW5lLWdhbWUvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEdhbWUgfSBmcm9tICcuLi9jb21wb25lbnRzL2dhbWUnO1xuaW1wb3J0IHsgU3BsYXNoIH0gZnJvbSAnLi4vY29tcG9uZW50cy9zcGxhc2gnO1xuXG5jb25zdCBwYWdlcyA9IHsgc3BsYXNoOiAnc3BsYXNoJywgZ2FtZTogJ2dhbWUnIH07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4ICgpIHtcbiAgY29uc3QgW3BhZ2UsIHNldFBhZ2VdID0gdXNlU3RhdGUocGFnZXMuZ2FtZSk7XG5cbiAgbGV0IGNvbnRlbnQgPSA8ZGl2PlVua25vd24gVUkgZXJyb3I8L2Rpdj47XG4gIGlmIChwYWdlID09PSBwYWdlcy5zcGxhc2gpIHtcbiAgICByZXR1cm4gPFNwbGFzaCBvblBsYXlOb3c9eygpID0+IHNldFBhZ2UocGFnZXMuZ2FtZSl9IC8+O1xuICB9IGVsc2UgaWYgKHBhZ2UgPT09IHBhZ2VzLmdhbWUpIHtcbiAgICByZXR1cm4gPEdhbWUgLz47XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7Y29udGVudH1cblxuICAgICAgPEdsb2JhbFN0eWxlcyAvPlxuICAgIDwvPlxuICApO1xufVxuXG5mdW5jdGlvbiBHbG9iYWxTdHlsZXMgKCkge1xuICByZXR1cm4gKFxuICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICBodG1sLCBib2R5LCBib2R5ID4gZGl2OmZpcnN0LWNoaWxkLCBkaXYjX19uZXh0LCBkaXYjX19uZXh0ID4gZGl2IHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICB9XG5cbiAgICAgIGJvZHkge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjNDMwZDI3O1xuICAgICAgICBjb2xvcjogIzFjMDAyZTtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgKTtcbn1cblxuIl19 */\n/*@ sourceURL=/home/user/Documents/@javascript/quarantine-game/pages/index.js */");
}

/***/ })

})
//# sourceMappingURL=index.js.e73b6bf7d5ea2287a384.hot-update.js.map