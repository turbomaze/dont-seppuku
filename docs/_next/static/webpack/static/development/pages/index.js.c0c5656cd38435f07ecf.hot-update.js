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
    id: "3199554091",
    __self: this
  }, "html,body,body>div:first-child,div#__next,div#__next>div{margin:0;padding:0;height:100%;}body{background:#430d27;color:#1c002e;font-family:'Open Sans',sans-serif;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3VzZXIvRG9jdW1lbnRzL0BqYXZhc2NyaXB0L3F1YXJhbnRpbmUtZ2FtZS9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyQnVCLEFBR2tCLEFBTVUsU0FMVCxVQUNFLEFBS0UsWUFKaEIsRUFLc0MsbUNBQ3RDIiwiZmlsZSI6Ii9ob21lL3VzZXIvRG9jdW1lbnRzL0BqYXZhc2NyaXB0L3F1YXJhbnRpbmUtZ2FtZS9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgR2FtZSB9IGZyb20gJy4uL2NvbXBvbmVudHMvZ2FtZSc7XG5pbXBvcnQgeyBTcGxhc2ggfSBmcm9tICcuLi9jb21wb25lbnRzL3NwbGFzaCc7XG5cbmNvbnN0IHBhZ2VzID0geyBzcGxhc2g6ICdzcGxhc2gnLCBnYW1lOiAnZ2FtZScgfTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXggKCkge1xuICBjb25zdCBbcGFnZSwgc2V0UGFnZV0gPSB1c2VTdGF0ZShwYWdlcy5zcGxhc2gpO1xuXG4gIGxldCBjb250ZW50ID0gPGRpdj5Vbmtub3duIFVJIGVycm9yPC9kaXY+O1xuICBpZiAocGFnZSA9PT0gcGFnZXMuc3BsYXNoKSB7XG4gICAgcmV0dXJuIDxTcGxhc2ggb25QbGF5Tm93PXsoKSA9PiBzZXRQYWdlKHBhZ2VzLmdhbWUpfSAvPjtcbiAgfSBlbHNlIGlmIChwYWdlID09PSBwYWdlcy5nYW1lKSB7XG4gICAgcmV0dXJuIDxHYW1lIC8+O1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge2NvbnRlbnR9XG5cbiAgICAgIDxHbG9iYWxTdHlsZXMgLz5cbiAgICA8Lz5cbiAgKTtcbn1cblxuZnVuY3Rpb24gR2xvYmFsU3R5bGVzICgpIHtcbiAgcmV0dXJuIChcbiAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgaHRtbCwgYm9keSwgYm9keSA+IGRpdjpmaXJzdC1jaGlsZCwgZGl2I19fbmV4dCwgZGl2I19fbmV4dCA+IGRpdiB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgfVxuXG4gICAgICBib2R5IHtcbiAgICAgICAgYmFja2dyb3VuZDogIzQzMGQyNztcbiAgICAgICAgY29sb3I6ICMxYzAwMmU7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gICk7XG59XG5cbiJdfQ== */\n/*@ sourceURL=/home/user/Documents/@javascript/quarantine-game/pages/index.js */");
}

/***/ })

})
//# sourceMappingURL=index.js.c0c5656cd38435f07ecf.hot-update.js.map