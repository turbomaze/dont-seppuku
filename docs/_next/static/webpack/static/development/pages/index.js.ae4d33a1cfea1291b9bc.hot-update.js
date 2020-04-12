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
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(pages.splash),
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

  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 5
    }
  }, content, __jsx(GlobalStyles, {
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
    id: "3140780928",
    __self: this
  }, "html,body,body>div:first-child,div#__next,div#__next>div{margin:0;padding:0;height:100%;}*{margin:0;padding:0;}body{background:#430d27;color:#1c002e;font-family:'Open Sans',sans-serif;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3VzZXIvRG9jdW1lbnRzL0BqYXZhc2NyaXB0L3F1YXJhbnRpbmUtZ2FtZS9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyQnVCLEFBR2tCLEFBTUEsQUFLVSxTQVZULEFBTUEsVUFMRSxBQU1kLEFBSWdCLFlBVGhCLEVBVXNDLG1DQUN0QyIsImZpbGUiOiIvaG9tZS91c2VyL0RvY3VtZW50cy9AamF2YXNjcmlwdC9xdWFyYW50aW5lLWdhbWUvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEdhbWUgfSBmcm9tICcuLi9jb21wb25lbnRzL2dhbWUnO1xuaW1wb3J0IHsgU3BsYXNoIH0gZnJvbSAnLi4vY29tcG9uZW50cy9zcGxhc2gnO1xuXG5jb25zdCBwYWdlcyA9IHsgc3BsYXNoOiAnc3BsYXNoJywgZ2FtZTogJ2dhbWUnIH07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4ICgpIHtcbiAgY29uc3QgW3BhZ2UsIHNldFBhZ2VdID0gdXNlU3RhdGUocGFnZXMuc3BsYXNoKTtcblxuICBsZXQgY29udGVudCA9IDxkaXY+VW5rbm93biBVSSBlcnJvcjwvZGl2PjtcbiAgaWYgKHBhZ2UgPT09IHBhZ2VzLnNwbGFzaCkge1xuICAgIHJldHVybiA8U3BsYXNoIG9uUGxheU5vdz17KCkgPT4gc2V0UGFnZShwYWdlcy5nYW1lKX0gLz47XG4gIH0gZWxzZSBpZiAocGFnZSA9PT0gcGFnZXMuZ2FtZSkge1xuICAgIHJldHVybiA8R2FtZSAvPjtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIHtjb250ZW50fVxuXG4gICAgICA8R2xvYmFsU3R5bGVzIC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmZ1bmN0aW9uIEdsb2JhbFN0eWxlcyAoKSB7XG4gIHJldHVybiAoXG4gICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgIGh0bWwsIGJvZHksIGJvZHkgPiBkaXY6Zmlyc3QtY2hpbGQsIGRpdiNfX25leHQsIGRpdiNfX25leHQgPiBkaXYge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIH1cblxuICAgICAgKiB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgIH1cblxuICAgICAgYm9keSB7XG4gICAgICAgIGJhY2tncm91bmQ6ICM0MzBkMjc7XG4gICAgICAgIGNvbG9yOiAjMWMwMDJlO1xuICAgICAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICApO1xufVxuXG4iXX0= */\n/*@ sourceURL=/home/user/Documents/@javascript/quarantine-game/pages/index.js */");
}

/***/ })

})
//# sourceMappingURL=index.js.ae4d33a1cfea1291b9bc.hot-update.js.map