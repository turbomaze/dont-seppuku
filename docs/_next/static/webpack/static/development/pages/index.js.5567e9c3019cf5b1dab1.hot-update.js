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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/game */ "./components/game.js");
/* harmony import */ var _components_splash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/splash */ "./components/splash.js");
var _jsxFileName = "/home/user/Documents/@javascript/quarantine-game/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var pages = {
  splash: 'splash',
  game: 'game'
};
function Index() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(pages.splash),
      page = _useState[0],
      setPage = _useState[1];

  if (page === pages.splash) {
    return __jsx(_components_splash__WEBPACK_IMPORTED_MODULE_2__["Splash"], {
      onPlayNow: function onPlayNow() {
        return setPage(pages.game);
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 12
      }
    });
  } else if (page === pages.game) {
    return __jsx(_components_game__WEBPACK_IMPORTED_MODULE_1__["Game"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 12
      }
    });
  } else {
    console.error('Unexpected page');
    return __jsx(_components_splash__WEBPACK_IMPORTED_MODULE_2__["Splash"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 12
      }
    });
  }
}

/***/ })

})
//# sourceMappingURL=index.js.5567e9c3019cf5b1dab1.hot-update.js.map