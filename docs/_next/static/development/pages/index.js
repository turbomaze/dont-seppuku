(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static/development/pages/index.js"],{

/***/ "./components/game.js":
/*!****************************!*\
  !*** ./components/game.js ***!
  \****************************/
/*! exports provided: Game */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Game", function() { return Game; });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui */ "./components/ui.js");
/* harmony import */ var _config_default__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config/default */ "./config/default.js");

var _jsxFileName = "/home/user/Documents/@javascript/quarantine-game/components/game.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



var assets = _config_default__WEBPACK_IMPORTED_MODULE_3__["assets"],
    getCost = _config_default__WEBPACK_IMPORTED_MODULE_3__["getCost"],
    initialCosts = _config_default__WEBPACK_IMPORTED_MODULE_3__["initialCosts"],
    initialPrices = _config_default__WEBPACK_IMPORTED_MODULE_3__["initialPrices"],
    productionRates = _config_default__WEBPACK_IMPORTED_MODULE_3__["productionRates"],
    tickLengthMs = _config_default__WEBPACK_IMPORTED_MODULE_3__["tickLengthMs"],
    upgrades = _config_default__WEBPACK_IMPORTED_MODULE_3__["upgrades"];
function Game() {
  // state
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(_config_default__WEBPACK_IMPORTED_MODULE_3__["initialCash"]),
      cash = _useState[0],
      setCash = _useState[1];

  var _useBuyable = useBuyable(initialCosts[upgrades[assets.masks].employees], cash, setCash),
      _useBuyable2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useBuyable, 2),
      employees = _useBuyable2[0],
      buyEmployee = _useBuyable2[1];

  var _useBidAsk = useBidAsk(initialPrices[assets.masks]),
      _useBidAsk2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useBidAsk, 2),
      maskPrice = _useBidAsk2[0],
      setMaskBidAsk = _useBidAsk2[1];

  var _useTradable = useTradable(0, maskPrice, cash, setCash),
      _useTradable2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useTradable, 4),
      masks = _useTradable2[0],
      setMasks = _useTradable2[1],
      buyMasks = _useTradable2[2],
      sellMasks = _useTradable2[3]; // computed values


  var employeeCost = getCost(initialCosts[upgrades[assets.masks].employees], employees);
  var maskRate = productionRates[upgrades[assets.masks].employees] * employees;
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var interval = setInterval(function () {
      // compute new asset amounts
      setMasks(masks + maskRate); // randomly modify the prices

      if (Math.random() < 0.5) {
        var halfSpread = 0.01;
        var midPrice = (maskPrice.bid + maskPrice.ask) / 2;
        var multiplier = 1 - halfSpread + 2 * halfSpread * Math.random(); // martingale

        var newMidPrice = multiplier * midPrice;
        setMaskBidAsk({
          bid: newMidPrice * (1 - halfSpread),
          ask: newMidPrice * (1 + halfSpread)
        });
      }
    }, tickLengthMs);
    return function () {
      return clearInterval(interval);
    };
  });
  return __jsx(_ui__WEBPACK_IMPORTED_MODULE_2__["Horizontal"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 5
    }
  }, __jsx(Wallet, {
    cash: cash,
    masks: masks,
    maskRate: maskRate,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }
  }), __jsx(_ui__WEBPACK_IMPORTED_MODULE_2__["Vertical"], {
    flex: 5,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }
  }, __jsx(_ui__WEBPACK_IMPORTED_MODULE_2__["Horizontal"], {
    flex: 1,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 9
    }
  }, __jsx(Trading, {
    bid: maskPrice.bid,
    ask: maskPrice.ask,
    buy: buyMasks,
    sell: sellMasks,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 11
    }
  }), __jsx(Orderbook, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 11
    }
  })), __jsx(_ui__WEBPACK_IMPORTED_MODULE_2__["Horizontal"], {
    flex: 2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 9
    }
  }, __jsx("div", {
    style: {
      background: '#dcdbda',
      flex: 1
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 11
    }
  }, __jsx("div", {
    style: {
      padding: '16px'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 13
    }
  }, __jsx("b", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 46
    }
  }, "Mask production")), __jsx(ItemWithAmount, {
    onClick: guard(buyEmployee),
    label: "Employees",
    amount: employees,
    price: employeeCost,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 13
    }
  })), __jsx("div", {
    style: {
      background: '#cccbca',
      flex: 1
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 11
    }
  }, __jsx("div", {
    style: {
      padding: '16px'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 13
    }
  }, __jsx("b", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 46
    }
  }, "TODO production"))), __jsx("div", {
    style: {
      background: '#bcbbba',
      flex: 1
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 11
    }
  }, __jsx("div", {
    style: {
      padding: '16px'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 13
    }
  }, __jsx("b", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 46
    }
  }, "TODO production"))))));
}

function useBuyable(initialCost, cash, setCash) {
  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      quantity = _useState2[0],
      setQuantity = _useState2[1];

  function buy() {
    var cost = getCost(initialCost, quantity);

    if (cost > cash) {
      throw new Error('Insufficient cash balance');
    }

    setCash(cash - cost);
    setQuantity(quantity + 1);
  }

  return [quantity, buy];
}

function useBidAsk(_ref) {
  var initialBid = _ref.bid,
      initialAsk = _ref.ask;

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(initialBid),
      bid = _useState3[0],
      setBid = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(initialAsk),
      ask = _useState4[0],
      setAsk = _useState4[1];

  function setBidAsk(_ref2) {
    var newBid = _ref2.bid,
        newAsk = _ref2.ask;
    setBid(newBid);
    setAsk(newAsk);
  }

  return [{
    bid: bid,
    ask: ask
  }, setBidAsk];
}

function useTradable(initialAmount, _ref3, cash, setCash) {
  var bid = _ref3.bid,
      ask = _ref3.ask;

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(initialAmount),
      amount = _useState5[0],
      setAmount = _useState5[1];

  function buy(quantity) {
    var cost = ask * quantity;

    if (cost > cash) {
      throw new Error('Insufficient cash balance');
    }

    setCash(cash - cost);
    setAmount(amount + quantity);
  }

  function sell(quantity) {
    if (quantity > amount) {
      throw new Error('Insufficient asset quantity');
    }

    var quoteQuantity = bid * quantity;
    setAmount(amount - quantity);
    setCash(cash + quoteQuantity);
  }

  return [amount, setAmount, buy, sell];
}

function Wallet(_ref4) {
  var cash = _ref4.cash,
      masks = _ref4.masks,
      maskRate = _ref4.maskRate;
  return __jsx(_ui__WEBPACK_IMPORTED_MODULE_2__["Vertical"], {
    flex: 2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 10
    }
  }, __jsx("div", {
    style: {
      background: '#fcfbfa',
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      boxSizing: 'border-box'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 5
    }
  }, __jsx(AssetWithRate, {
    label: "Cash",
    amount: formatMoney(cash),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 7
    }
  }), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 7
    }
  }), __jsx(AssetWithRate, {
    label: "Masks",
    amount: format(masks),
    rate: format(maskRate),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 7
    }
  })), __jsx("div", {
    style: {
      background: '#ecebea',
      flex: 2
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 5
    }
  }));
}

function Trading(_ref5) {
  var bid = _ref5.bid,
      ask = _ref5.ask,
      buy = _ref5.buy,
      sell = _ref5.sell;

  var _useNumericInput = useNumericInput(0),
      _useNumericInput2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useNumericInput, 3),
      buyAmount = _useNumericInput2[0],
      buyAmountString = _useNumericInput2[1],
      setBuyAmount = _useNumericInput2[2];

  var _useNumericInput3 = useNumericInput(0),
      _useNumericInput4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useNumericInput3, 3),
      sellAmount = _useNumericInput4[0],
      sellAmountString = _useNumericInput4[1],
      setSellAmount = _useNumericInput4[2];

  return __jsx("div", {
    style: {
      boxSizing: 'border-box',
      background: '#acabaa',
      flex: 1
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 10
    }
  }, __jsx("div", {
    style: {
      padding: '16px'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 5
    }
  }, __jsx("b", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 38
    }
  }, "Trade")), __jsx(AssetWithRate, {
    label: "Buy masks @",
    amount: formatMoney(ask),
    suffix: "/mask",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 5
    }
  }), __jsx(_ui__WEBPACK_IMPORTED_MODULE_2__["Horizontal"], {
    padding: "0 16px",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 5
    }
  }, __jsx(_ui__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    placeholder: "Amount",
    value: buyAmountString,
    onChange: setBuyAmount,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 7
    }
  }), "\xA0", __jsx(_ui__WEBPACK_IMPORTED_MODULE_2__["GameButton"], {
    onClick: function onClick() {
      return guard(buy)(buyAmount);
    },
    flex: 1,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 7
    }
  }, "Buy")), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 5
    }
  }), __jsx(AssetWithRate, {
    label: "Sell masks @",
    amount: formatMoney(bid),
    suffix: "/mask",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 5
    }
  }), __jsx(_ui__WEBPACK_IMPORTED_MODULE_2__["Horizontal"], {
    padding: "0 16px",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 5
    }
  }, __jsx(_ui__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    placeholder: "Amount",
    value: sellAmountString,
    onChange: setSellAmount,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 7
    }
  }), "\xA0", __jsx(_ui__WEBPACK_IMPORTED_MODULE_2__["GameButton"], {
    onClick: function onClick() {
      return guard(sell)(sellAmount);
    },
    flex: 1,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 7
    }
  }, "Sell")));
}

function useNumericInput(initialValue) {
  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(initialValue),
      value = _useState6[0],
      setValue = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(initialValue),
      valueString = _useState7[0],
      setValueString = _useState7[1];

  function set(event) {
    if (isNaN(event.target.value)) {
      return;
    }

    setValue(parseFloat(event.target.value));
    setValueString(event.target.value);
  }

  return [value, valueString, set];
}

function Orderbook() {
  return __jsx("div", {
    style: {
      boxSizing: 'border-box',
      background: '#121212',
      flex: 1
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 10
    }
  }, __jsx("div", {
    style: {
      color: 'white',
      padding: '16px'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199,
      columnNumber: 5
    }
  }, "(TODO) Orderbook"));
}

function AssetWithRate(_ref6) {
  var label = _ref6.label,
      amount = _ref6.amount,
      rate = _ref6.rate,
      suffix = _ref6.suffix;
  return __jsx(_ui__WEBPACK_IMPORTED_MODULE_2__["Horizontal"], {
    wide: true,
    spaced: true,
    padding: "16px",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205,
      columnNumber: 5
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206,
      columnNumber: 7
    }
  }, label), __jsx(_ui__WEBPACK_IMPORTED_MODULE_2__["Vertical"], {
    right: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 7
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208,
      columnNumber: 9
    }
  }, amount, suffix), rate === undefined ? null : __jsx("div", {
    style: {
      fontSize: '16px',
      lineHeight: '32px'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 38
    }
  }, rate, " per second")));
}

function ItemWithAmount(_ref7) {
  var onClick = _ref7.onClick,
      label = _ref7.label,
      amount = _ref7.amount,
      price = _ref7.price;
  return __jsx("div", {
    onClick: onClick,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217,
      columnNumber: 5
    }
  }, __jsx(_ui__WEBPACK_IMPORTED_MODULE_2__["Horizontal"], {
    wide: true,
    spaced: true,
    padding: "16px",
    middle: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218,
      columnNumber: 7
    }
  }, __jsx(_ui__WEBPACK_IMPORTED_MODULE_2__["Vertical"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219,
      columnNumber: 9
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220,
      columnNumber: 11
    }
  }, label), __jsx("div", {
    style: {
      fontSize: '16px',
      lineHeight: '32px'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221,
      columnNumber: 11
    }
  }, "Cost: ", formatMoney(price))), __jsx("div", {
    style: {
      fontSize: '32px',
      lineHeight: '32px'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223,
      columnNumber: 9
    }
  }, amount)));
}

function guard(f) {
  return function () {
    try {
      f.apply(void 0, arguments);
    } catch (err) {
      return alert(err.message);
    }
  };
}

function alert() {
  if (true) {
    var _window;

    (_window = window).alert.apply(_window, arguments);
  }
}

function format(x) {
  return x.toFixed(2).toLocaleString();
}

function formatMoney(x) {
  return "$".concat(x.toFixed(2).toLocaleString());
}

/***/ }),

/***/ "./components/splash.js":
/*!******************************!*\
  !*** ./components/splash.js ***!
  \******************************/
/*! exports provided: Splash */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Splash", function() { return Splash; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui */ "./components/ui.js");
var _jsxFileName = "/home/user/Documents/@javascript/quarantine-game/components/splash.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function Splash(_ref) {
  var onPlayNow = _ref.onPlayNow;
  return __jsx("div", {
    className: "jsx-1751646433",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, __jsx(Slants, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "jsx-1751646433" + " " + "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }, __jsx("h1", {
    className: "jsx-1751646433",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 11
    }
  }, "DONT SEPPUKU"), __jsx("div", {
    className: "jsx-1751646433" + " " + "actions",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 11
    }
  }, __jsx(_ui__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    onClick: onPlayNow,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }
  }, "Play now")))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1751646433",
    __self: this
  }, ".container.jsx-1751646433{margin-top:-48px;-webkit-transform:skewY(4deg);-ms-transform:skewY(4deg);transform:skewY(4deg);}h1.jsx-1751646433{font-family:'Nosifer',sans-serif;font-size:64px;-webkit-transform:skewY(-4deg);-ms-transform:skewY(-4deg);transform:skewY(-4deg);}.actions.jsx-1751646433{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3VzZXIvRG9jdW1lbnRzL0BqYXZhc2NyaXB0L3F1YXJhbnRpbmUtZ2FtZS9jb21wb25lbnRzL3NwbGFzaC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFha0IsQUFHMEIsQUFJaUIsQUFLckIsaUJBUlMsZ0JBSVAsZUFDUSwwQkFJQSxxQkFSekIsa0NBS0EsNENBSUEiLCJmaWxlIjoiL2hvbWUvdXNlci9Eb2N1bWVudHMvQGphdmFzY3JpcHQvcXVhcmFudGluZS1nYW1lL2NvbXBvbmVudHMvc3BsYXNoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnLi91aSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBTcGxhc2ggKHsgb25QbGF5Tm93IH0pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPFNsYW50cz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICA8aDE+RE9OVCBTRVBQVUtVPC9oMT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjdGlvbnNcIj5cbiAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17b25QbGF5Tm93fT5QbGF5IG5vdzwvQnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvU2xhbnRzPlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgIG1hcmdpbi10b3A6IC00OHB4O1xuICAgICAgICB0cmFuc2Zvcm06IHNrZXdZKDRkZWcpO1xuICAgICAgfVxuICAgICAgaDEge1xuICAgICAgICBmb250LWZhbWlseTogJ05vc2lmZXInLCBzYW5zLXNlcmlmO1xuICAgICAgICBmb250LXNpemU6IDY0cHg7XG4gICAgICAgIHRyYW5zZm9ybTogc2tld1koLTRkZWcpO1xuICAgICAgfVxuICAgICAgLmFjdGlvbnMge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZnVuY3Rpb24gU2xhbnRzICh7IGNoaWxkcmVuIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbGFudC0wXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2xhbnQtMVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2xhbnQtMlwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbGFudC0zXCI+XG4gICAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAuc2xhbnQtMCB7XG4gICAgICAgIGhlaWdodDogOTguMjU0NSU7XG4gICAgICAgIGJhY2tncm91bmQ6ICM1ODIyMzM7XG4gICAgICAgIHRyYW5zZm9ybTogc2tld1koLTFkZWcpO1xuICAgICAgfVxuICAgICAgLnNsYW50LTEge1xuICAgICAgICBoZWlnaHQ6IDk4LjI1NDUlO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjNzEzMDQ1O1xuICAgICAgICB0cmFuc2Zvcm06IHNrZXdZKC0xZGVnKTtcbiAgICAgIH1cbiAgICAgIC5zbGFudC0yIHtcbiAgICAgICAgaGVpZ2h0OiA5OC4yNTQ1JTtcbiAgICAgICAgYmFja2dyb3VuZDogI2M5NGU0ZTtcbiAgICAgICAgdHJhbnNmb3JtOiBza2V3WSgtMWRlZyk7XG4gICAgICB9XG4gICAgICAuc2xhbnQtMyB7XG4gICAgICAgIGhlaWdodDogOTguMjU0NSU7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmY2ZiZmE7XG4gICAgICAgIHRyYW5zZm9ybTogc2tld1koLTFkZWcpO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdfQ== */\n/*@ sourceURL=/home/user/Documents/@javascript/quarantine-game/components/splash.js */"));
}

function Slants(_ref2) {
  var children = _ref2.children;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    className: "jsx-971851819" + " " + "slant-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "jsx-971851819" + " " + "slant-1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-971851819" + " " + "slant-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "jsx-971851819" + " " + "slant-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }
  }, children)))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "971851819",
    __self: this
  }, ".slant-0.jsx-971851819{height:98.2545%;background:#582233;-webkit-transform:skewY(-1deg);-ms-transform:skewY(-1deg);transform:skewY(-1deg);}.slant-1.jsx-971851819{height:98.2545%;background:#713045;-webkit-transform:skewY(-1deg);-ms-transform:skewY(-1deg);transform:skewY(-1deg);}.slant-2.jsx-971851819{height:98.2545%;background:#c94e4e;-webkit-transform:skewY(-1deg);-ms-transform:skewY(-1deg);transform:skewY(-1deg);}.slant-3.jsx-971851819{height:98.2545%;background:#fcfbfa;-webkit-transform:skewY(-1deg);-ms-transform:skewY(-1deg);transform:skewY(-1deg);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3VzZXIvRG9jdW1lbnRzL0BqYXZhc2NyaXB0L3F1YXJhbnRpbmUtZ2FtZS9jb21wb25lbnRzL3NwbGFzaC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2Q2tCLEFBR3lCLEFBS0EsQUFLQSxBQUtBLGdCQWRHLEFBS0EsQUFLQSxBQUtBLG1CQWRJLEFBS0EsQUFLQSxBQUtBLGlGQWR6QixBQUtBLEFBS0EsQUFLZSwwRUFDTSw2RkFDSSxtR0FDekIiLCJmaWxlIjoiL2hvbWUvdXNlci9Eb2N1bWVudHMvQGphdmFzY3JpcHQvcXVhcmFudGluZS1nYW1lL2NvbXBvbmVudHMvc3BsYXNoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnLi91aSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBTcGxhc2ggKHsgb25QbGF5Tm93IH0pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPFNsYW50cz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICA8aDE+RE9OVCBTRVBQVUtVPC9oMT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjdGlvbnNcIj5cbiAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17b25QbGF5Tm93fT5QbGF5IG5vdzwvQnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvU2xhbnRzPlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgIG1hcmdpbi10b3A6IC00OHB4O1xuICAgICAgICB0cmFuc2Zvcm06IHNrZXdZKDRkZWcpO1xuICAgICAgfVxuICAgICAgaDEge1xuICAgICAgICBmb250LWZhbWlseTogJ05vc2lmZXInLCBzYW5zLXNlcmlmO1xuICAgICAgICBmb250LXNpemU6IDY0cHg7XG4gICAgICAgIHRyYW5zZm9ybTogc2tld1koLTRkZWcpO1xuICAgICAgfVxuICAgICAgLmFjdGlvbnMge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZnVuY3Rpb24gU2xhbnRzICh7IGNoaWxkcmVuIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbGFudC0wXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2xhbnQtMVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2xhbnQtMlwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbGFudC0zXCI+XG4gICAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAuc2xhbnQtMCB7XG4gICAgICAgIGhlaWdodDogOTguMjU0NSU7XG4gICAgICAgIGJhY2tncm91bmQ6ICM1ODIyMzM7XG4gICAgICAgIHRyYW5zZm9ybTogc2tld1koLTFkZWcpO1xuICAgICAgfVxuICAgICAgLnNsYW50LTEge1xuICAgICAgICBoZWlnaHQ6IDk4LjI1NDUlO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjNzEzMDQ1O1xuICAgICAgICB0cmFuc2Zvcm06IHNrZXdZKC0xZGVnKTtcbiAgICAgIH1cbiAgICAgIC5zbGFudC0yIHtcbiAgICAgICAgaGVpZ2h0OiA5OC4yNTQ1JTtcbiAgICAgICAgYmFja2dyb3VuZDogI2M5NGU0ZTtcbiAgICAgICAgdHJhbnNmb3JtOiBza2V3WSgtMWRlZyk7XG4gICAgICB9XG4gICAgICAuc2xhbnQtMyB7XG4gICAgICAgIGhlaWdodDogOTguMjU0NSU7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmY2ZiZmE7XG4gICAgICAgIHRyYW5zZm9ybTogc2tld1koLTFkZWcpO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdfQ== */\n/*@ sourceURL=/home/user/Documents/@javascript/quarantine-game/components/splash.js */"));
}

/***/ }),

/***/ "./components/ui.js":
/*!**************************!*\
  !*** ./components/ui.js ***!
  \**************************/
/*! exports provided: Button, GameButton, Input, Horizontal, Vertical */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameButton", function() { return GameButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return Input; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Horizontal", function() { return Horizontal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Vertical", function() { return Vertical; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/user/Documents/@javascript/quarantine-game/components/ui.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
function Button(_ref) {
  var onClick = _ref.onClick,
      flex = _ref.flex,
      children = _ref.children;
  return __jsx("div", {
    onClick: onClick,
    style: {
      flex: flex
    },
    className: "jsx-1353918059",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3,
      columnNumber: 5
    }
  }, children, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1353918059",
    __self: this
  }, "div.jsx-1353918059{background:#efefef;border-radius:4px;border:1px solid #1c002e;box-shadow:2px 2px 4px 0px rgba(0,0,0,0.3);cursor:pointer;font-size:24px;line-height:24px;padding:12px 40px;text-align:center;-webkit-transition:0.1s;transition:0.1s;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}div.jsx-1353918059:hover{background:#430d27;color:#efefef;box-shadow:4px 4px 4px 0px rgba(0,0,0,0.3);-webkit-transition:0.1s;transition:0.1s;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3VzZXIvRG9jdW1lbnRzL0BqYXZhc2NyaXB0L3F1YXJhbnRpbmUtZ2FtZS9jb21wb25lbnRzL3VpLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlrQixBQUc0QixBQWNBLG1CQWJELEFBY0osY0FDZ0MsSUFkckIseUJBQ3FCLGNBYzlCLDZCQWJELFdBY2pCLElBYmlCLGVBQ0UsaUJBQ0Msa0JBQ0Esa0JBQ0Ysd0NBQ0MscUZBQ25CIiwiZmlsZSI6Ii9ob21lL3VzZXIvRG9jdW1lbnRzL0BqYXZhc2NyaXB0L3F1YXJhbnRpbmUtZ2FtZS9jb21wb25lbnRzL3VpLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIEJ1dHRvbiAoeyBvbkNsaWNrLCBmbGV4LCBjaGlsZHJlbiB9KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBvbkNsaWNrPXtvbkNsaWNrfSBzdHlsZT17e2ZsZXh9fT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIGRpdiB7XG4gICAgICAgIGJhY2tncm91bmQ6ICNlZmVmZWY7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzFjMDAyZTtcbiAgICAgICAgYm94LXNoYWRvdzogMnB4IDJweCA0cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgICAgICBwYWRkaW5nOiAxMnB4IDQwcHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgdHJhbnNpdGlvbjogMC4xcztcbiAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICB9XG5cbiAgICAgIGRpdjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQ6ICM0MzBkMjc7IFxuICAgICAgICBjb2xvcjogI2VmZWZlZjtcbiAgICAgICAgYm94LXNoYWRvdzogNHB4IDRweCA0cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgICAgICAgdHJhbnNpdGlvbjogMC4xcztcbiAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEdhbWVCdXR0b24gKHsgb25DbGljaywgZmxleCwgY2hpbGRyZW4gfSkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgb25DbGljaz17b25DbGlja30gc3R5bGU9e3tmbGV4fX0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICBkaXYge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZWZlZmVmO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMxYzAwMmU7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICAgICAgICBwYWRkaW5nOiAwIDE2cHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgdHJhbnNpdGlvbjogMC4xcztcbiAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICB9XG5cbiAgICAgIGRpdjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQ6ICM0MzBkMjc7IFxuICAgICAgICBjb2xvcjogI2VmZWZlZjtcbiAgICAgICAgYm94LXNoYWRvdzogMnB4IDJweCA0cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgICAgICAgdHJhbnNpdGlvbjogMC4xcztcbiAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIElucHV0ICh7IHBsYWNlaG9sZGVyLCB2YWx1ZSwgb25DaGFuZ2UgfSkge1xuICByZXR1cm4gKFxuICAgIDxpbnB1dCBvbkNoYW5nZT17b25DaGFuZ2V9IHZhbHVlPXt2YWx1ZX0gc3R5bGU9e3tcbiAgICAgIGJvcmRlcjogJ25vbmUnLFxuICAgICAgYm9yZGVyUmFkaXVzOiAnMnB4JyxcbiAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgZm9udEZhbWlseTogJ1xcJ09wZW4gU2Fuc1xcJywgc2Fucy1zZXJpZicsXG4gICAgICBmb250U2l6ZTogJzIwcHgnLFxuICAgICAgaGVpZ2h0OiAnNDBweCcsXG4gICAgICBsaW5lSGVpZ2h0OiAnNDBweCcsXG4gICAgICBvdXRsaW5lOiAnbm9uZScsXG4gICAgICBwYWRkaW5nOiAnMCAxNnB4JyxcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgfX0gcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfSAvPlxuICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gSG9yaXpvbnRhbCh7IGNoaWxkcmVuLCBmbGV4LCBzcGFjZWQsIHdpZGUsIHBhZGRpbmcsIG1pZGRsZSB9KSB7XG4gIGNvbnN0IHN0eWxlcyA9IHsgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsIGRpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ3JvdycsIGZsZXgsIHBhZGRpbmcgfTtcbiAgaWYgKHNwYWNlZCkgc3R5bGVzLmp1c3RpZnlDb250ZW50ID0gJ3NwYWNlLWJldHdlZW4nO1xuICBpZiAod2lkZSkgc3R5bGVzLndpZHRoID0gJzEwMCUnO1xuICBpZiAobWlkZGxlKSBzdHlsZXMuYWxpZ25JdGVtcyA9ICdjZW50ZXInO1xuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3N0eWxlc30+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBWZXJ0aWNhbCh7IGNoaWxkcmVuLCBmbGV4LCBzcGFjZWQsIHJpZ2h0LCBwYWRkaW5nIH0pIHtcbiAgY29uc3Qgc3R5bGVzID0geyBib3hTaXppbmc6ICdib3JkZXItYm94JywgZGlzcGxheTogJ2ZsZXgnLCBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJywgZmxleCwgcGFkZGluZyB9O1xuICBpZiAoc3BhY2VkKSBzdHlsZXMuanVzdGlmeUNvbnRlbnQgPSAnc3BhY2UtYmV0d2Vlbic7XG4gIGlmIChyaWdodCkgc3R5bGVzLnRleHRBbGlnbiA9ICdyaWdodCc7XG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17c3R5bGVzfT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdfQ== */\n/*@ sourceURL=/home/user/Documents/@javascript/quarantine-game/components/ui.js */"));
}
function GameButton(_ref2) {
  var onClick = _ref2.onClick,
      flex = _ref2.flex,
      children = _ref2.children;
  return __jsx("div", {
    onClick: onClick,
    style: {
      flex: flex
    },
    className: "jsx-1403181729",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 5
    }
  }, children, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1403181729",
    __self: this
  }, "div.jsx-1403181729{background:#efefef;border-radius:2px;border:1px solid #1c002e;box-sizing:border-box;cursor:pointer;font-size:20px;height:40px;line-height:40px;padding:0 16px;text-align:center;-webkit-transition:0.1s;transition:0.1s;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}div.jsx-1403181729:hover{background:#430d27;color:#efefef;box-shadow:2px 2px 4px 0px rgba(0,0,0,0.3);-webkit-transition:0.1s;transition:0.1s;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3VzZXIvRG9jdW1lbnRzL0BqYXZhc2NyaXB0L3F1YXJhbnRpbmUtZ2FtZS9jb21wb25lbnRzL3VpLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtDa0IsQUFHNEIsQUFlQSxtQkFkRCxBQWVKLGNBQ2dDLElBZnJCLHlCQUNILGNBZU4sUUFkRCxlQUNBLGVBQ0gsRUFhZCxVQVptQixpQkFDRixlQUNHLGtCQUNGLHdDQUNDLHFGQUNuQiIsImZpbGUiOiIvaG9tZS91c2VyL0RvY3VtZW50cy9AamF2YXNjcmlwdC9xdWFyYW50aW5lLWdhbWUvY29tcG9uZW50cy91aS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBCdXR0b24gKHsgb25DbGljaywgZmxleCwgY2hpbGRyZW4gfSkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgb25DbGljaz17b25DbGlja30gc3R5bGU9e3tmbGV4fX0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICBkaXYge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZWZlZmVmO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMxYzAwMmU7XG4gICAgICAgIGJveC1zaGFkb3c6IDJweCAycHggNHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICAgICAgcGFkZGluZzogMTJweCA0MHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHRyYW5zaXRpb246IDAuMXM7XG4gICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgICAgfVxuXG4gICAgICBkaXY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjNDMwZDI3OyBcbiAgICAgICAgY29sb3I6ICNlZmVmZWY7XG4gICAgICAgIGJveC1zaGFkb3c6IDRweCA0cHggNHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gICAgICAgIHRyYW5zaXRpb246IDAuMXM7XG4gICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBHYW1lQnV0dG9uICh7IG9uQ2xpY2ssIGZsZXgsIGNoaWxkcmVuIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IG9uQ2xpY2s9e29uQ2xpY2t9IHN0eWxlPXt7ZmxleH19PlxuICAgICAge2NoaWxkcmVufVxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgZGl2IHtcbiAgICAgICAgYmFja2dyb3VuZDogI2VmZWZlZjtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMWMwMDJlO1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogNDBweDtcbiAgICAgICAgcGFkZGluZzogMCAxNnB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHRyYW5zaXRpb246IDAuMXM7XG4gICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgICAgfVxuXG4gICAgICBkaXY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjNDMwZDI3OyBcbiAgICAgICAgY29sb3I6ICNlZmVmZWY7XG4gICAgICAgIGJveC1zaGFkb3c6IDJweCAycHggNHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gICAgICAgIHRyYW5zaXRpb246IDAuMXM7XG4gICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBJbnB1dCAoeyBwbGFjZWhvbGRlciwgdmFsdWUsIG9uQ2hhbmdlIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8aW5wdXQgb25DaGFuZ2U9e29uQ2hhbmdlfSB2YWx1ZT17dmFsdWV9IHN0eWxlPXt7XG4gICAgICBib3JkZXI6ICdub25lJyxcbiAgICAgIGJvcmRlclJhZGl1czogJzJweCcsXG4gICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgIGZvbnRGYW1pbHk6ICdcXCdPcGVuIFNhbnNcXCcsIHNhbnMtc2VyaWYnLFxuICAgICAgZm9udFNpemU6ICcyMHB4JyxcbiAgICAgIGhlaWdodDogJzQwcHgnLFxuICAgICAgbGluZUhlaWdodDogJzQwcHgnLFxuICAgICAgb3V0bGluZTogJ25vbmUnLFxuICAgICAgcGFkZGluZzogJzAgMTZweCcsXG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgIH19IHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn0gLz5cbiAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEhvcml6b250YWwoeyBjaGlsZHJlbiwgZmxleCwgc3BhY2VkLCB3aWRlLCBwYWRkaW5nLCBtaWRkbGUgfSkge1xuICBjb25zdCBzdHlsZXMgPSB7IGJveFNpemluZzogJ2JvcmRlci1ib3gnLCBkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdyb3cnLCBmbGV4LCBwYWRkaW5nIH07XG4gIGlmIChzcGFjZWQpIHN0eWxlcy5qdXN0aWZ5Q29udGVudCA9ICdzcGFjZS1iZXR3ZWVuJztcbiAgaWYgKHdpZGUpIHN0eWxlcy53aWR0aCA9ICcxMDAlJztcbiAgaWYgKG1pZGRsZSkgc3R5bGVzLmFsaWduSXRlbXMgPSAnY2VudGVyJztcbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXtzdHlsZXN9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gVmVydGljYWwoeyBjaGlsZHJlbiwgZmxleCwgc3BhY2VkLCByaWdodCwgcGFkZGluZyB9KSB7XG4gIGNvbnN0IHN0eWxlcyA9IHsgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsIGRpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsIGZsZXgsIHBhZGRpbmcgfTtcbiAgaWYgKHNwYWNlZCkgc3R5bGVzLmp1c3RpZnlDb250ZW50ID0gJ3NwYWNlLWJldHdlZW4nO1xuICBpZiAocmlnaHQpIHN0eWxlcy50ZXh0QWxpZ24gPSAncmlnaHQnO1xuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3N0eWxlc30+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXX0= */\n/*@ sourceURL=/home/user/Documents/@javascript/quarantine-game/components/ui.js */"));
}
function Input(_ref3) {
  var placeholder = _ref3.placeholder,
      value = _ref3.value,
      onChange = _ref3.onChange;
  return __jsx("input", {
    onChange: onChange,
    value: value,
    style: {
      border: 'none',
      borderRadius: '2px',
      boxSizing: 'border-box',
      fontFamily: '\'Open Sans\', sans-serif',
      fontSize: '20px',
      height: '40px',
      lineHeight: '40px',
      outline: 'none',
      padding: '0 16px',
      width: '100%'
    },
    placeholder: placeholder,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 5
    }
  });
}
function Horizontal(_ref4) {
  var children = _ref4.children,
      flex = _ref4.flex,
      spaced = _ref4.spaced,
      wide = _ref4.wide,
      padding = _ref4.padding,
      middle = _ref4.middle;
  var styles = {
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'row',
    flex: flex,
    padding: padding
  };
  if (spaced) styles.justifyContent = 'space-between';
  if (wide) styles.width = '100%';
  if (middle) styles.alignItems = 'center';
  return __jsx("div", {
    style: styles,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 5
    }
  }, children);
}
function Vertical(_ref5) {
  var children = _ref5.children,
      flex = _ref5.flex,
      spaced = _ref5.spaced,
      right = _ref5.right,
      padding = _ref5.padding;
  var styles = {
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    flex: flex,
    padding: padding
  };
  if (spaced) styles.justifyContent = 'space-between';
  if (right) styles.textAlign = 'right';
  return __jsx("div", {
    style: styles,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 5
    }
  }, children);
}

/***/ }),

/***/ "./config/default.js":
/*!***************************!*\
  !*** ./config/default.js ***!
  \***************************/
/*! exports provided: tickLengthMs, initialCash, assets, initialPrices, upgrades, initialCosts, productionRates, getCost */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tickLengthMs", function() { return tickLengthMs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialCash", function() { return initialCash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assets", function() { return assets; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialPrices", function() { return initialPrices; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "upgrades", function() { return upgrades; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialCosts", function() { return initialCosts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "productionRates", function() { return productionRates; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCost", function() { return getCost; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");

var tickLengthMs = 100;
var initialCash = 10;
var assets = {
  masks: 'masks'
};
var initialPrices = Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, assets.masks, {
  bid: 0.99,
  ask: 1.01
});
var upgrades = Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, assets.masks, {
  employees: 'masks-employees'
});
var initialCosts = Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, upgrades[assets.masks].employees, 10);
var productionRates = Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, upgrades[assets.masks].employees, 0.05);
function getCost(initialCost, amount) {
  var multiplier = 1 + 0.1 * Math.pow(amount, 3);
  return Math.floor(initialCost * multiplier);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithHoles; });
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArrayLimit; });
function _iterableToArrayLimit(arr, i) {
  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableRest; });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _slicedToArray; });
/* harmony import */ var _arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _nonIterableRest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js");



function _slicedToArray(arr, i) {
  return Object(_arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__["default"])(arr, i) || Object(_nonIterableRest__WEBPACK_IMPORTED_MODULE_2__["default"])();
}

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=%2Fhome%2Fuser%2FDocuments%2F%40javascript%2Fquarantine-game%2Fpages%2Findex.js!./":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=%2Fhome%2Fuser%2FDocuments%2F%40javascript%2Fquarantine-game%2Fpages%2Findex.js ***!
  \********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P=window.__NEXT_P||[]).push(["/", function() {
      var mod = __webpack_require__(/*! ./pages/index.js */ "./pages/index.js")
      if(true) {
        module.hot.accept(/*! ./pages/index.js */ "./pages/index.js", function() {
          if(!next.router.components["/"]) return
          var updatedPage = __webpack_require__(/*! ./pages/index.js */ "./pages/index.js")
          next.router.update("/", updatedPage)
        })
      }
      return mod
    }]);
  

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_c2e10d183b950a67d9e7 ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_c2e10d183b950a67d9e7 */ "dll-reference dll_c2e10d183b950a67d9e7"))("./node_modules/react/index.js");

/***/ }),

/***/ "./node_modules/string-hash/index.js":
/*!*******************************************!*\
  !*** ./node_modules/string-hash/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function hash(str) {
  var hash = 5381,
      i    = str.length;

  while(i) {
    hash = (hash * 33) ^ str.charCodeAt(--i);
  }

  /* JavaScript does bitwise operations (like XOR, above) on 32-bit signed
   * integers. Since we want the results to be always positive, convert the
   * signed int to an unsigned by doing an unsigned bitshift. */
  return hash >>> 0;
}

module.exports = hash;


/***/ }),

/***/ "./node_modules/styled-jsx/dist/lib/stylesheet.js":
/*!********************************************************!*\
  !*** ./node_modules/styled-jsx/dist/lib/stylesheet.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

exports.__esModule = true;
exports["default"] = void 0;

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
Based on Glamor's sheet
https://github.com/threepointone/glamor/blob/667b480d31b3721a905021b26e1290ce92ca2879/src/sheet.js
*/
var isProd = typeof process !== 'undefined' && process.env && "development" === 'production';

var isString = function isString(o) {
  return Object.prototype.toString.call(o) === '[object String]';
};

var StyleSheet =
/*#__PURE__*/
function () {
  function StyleSheet(_temp) {
    var _ref = _temp === void 0 ? {} : _temp,
        _ref$name = _ref.name,
        name = _ref$name === void 0 ? 'stylesheet' : _ref$name,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? isProd : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;

    invariant(isString(name), '`name` must be a string');
    this._name = name;
    this._deletedRulePlaceholder = "#" + name + "-deleted-rule____{}";
    invariant(typeof optimizeForSpeed === 'boolean', '`optimizeForSpeed` must be a boolean');
    this._optimizeForSpeed = optimizeForSpeed;
    this._isBrowser = isBrowser;
    this._serverSheet = undefined;
    this._tags = [];
    this._injected = false;
    this._rulesCount = 0;
    var node = this._isBrowser && document.querySelector('meta[property="csp-nonce"]');
    this._nonce = node ? node.getAttribute('content') : null;
  }

  var _proto = StyleSheet.prototype;

  _proto.setOptimizeForSpeed = function setOptimizeForSpeed(bool) {
    invariant(typeof bool === 'boolean', '`setOptimizeForSpeed` accepts a boolean');
    invariant(this._rulesCount === 0, 'optimizeForSpeed cannot be when rules have already been inserted');
    this.flush();
    this._optimizeForSpeed = bool;
    this.inject();
  };

  _proto.isOptimizeForSpeed = function isOptimizeForSpeed() {
    return this._optimizeForSpeed;
  };

  _proto.inject = function inject() {
    var _this = this;

    invariant(!this._injected, 'sheet already injected');
    this._injected = true;

    if (this._isBrowser && this._optimizeForSpeed) {
      this._tags[0] = this.makeStyleTag(this._name);
      this._optimizeForSpeed = 'insertRule' in this.getSheet();

      if (!this._optimizeForSpeed) {
        if (!isProd) {
          console.warn('StyleSheet: optimizeForSpeed mode not supported falling back to standard mode.');
        }

        this.flush();
        this._injected = true;
      }

      return;
    }

    this._serverSheet = {
      cssRules: [],
      insertRule: function insertRule(rule, index) {
        if (typeof index === 'number') {
          _this._serverSheet.cssRules[index] = {
            cssText: rule
          };
        } else {
          _this._serverSheet.cssRules.push({
            cssText: rule
          });
        }

        return index;
      },
      deleteRule: function deleteRule(index) {
        _this._serverSheet.cssRules[index] = null;
      }
    };
  };

  _proto.getSheetForTag = function getSheetForTag(tag) {
    if (tag.sheet) {
      return tag.sheet;
    } // this weirdness brought to you by firefox


    for (var i = 0; i < document.styleSheets.length; i++) {
      if (document.styleSheets[i].ownerNode === tag) {
        return document.styleSheets[i];
      }
    }
  };

  _proto.getSheet = function getSheet() {
    return this.getSheetForTag(this._tags[this._tags.length - 1]);
  };

  _proto.insertRule = function insertRule(rule, index) {
    invariant(isString(rule), '`insertRule` accepts only strings');

    if (!this._isBrowser) {
      if (typeof index !== 'number') {
        index = this._serverSheet.cssRules.length;
      }

      this._serverSheet.insertRule(rule, index);

      return this._rulesCount++;
    }

    if (this._optimizeForSpeed) {
      var sheet = this.getSheet();

      if (typeof index !== 'number') {
        index = sheet.cssRules.length;
      } // this weirdness for perf, and chrome's weird bug
      // https://stackoverflow.com/questions/20007992/chrome-suddenly-stopped-accepting-insertrule


      try {
        sheet.insertRule(rule, index);
      } catch (error) {
        if (!isProd) {
          console.warn("StyleSheet: illegal rule: \n\n" + rule + "\n\nSee https://stackoverflow.com/q/20007992 for more info");
        }

        return -1;
      }
    } else {
      var insertionPoint = this._tags[index];

      this._tags.push(this.makeStyleTag(this._name, rule, insertionPoint));
    }

    return this._rulesCount++;
  };

  _proto.replaceRule = function replaceRule(index, rule) {
    if (this._optimizeForSpeed || !this._isBrowser) {
      var sheet = this._isBrowser ? this.getSheet() : this._serverSheet;

      if (!rule.trim()) {
        rule = this._deletedRulePlaceholder;
      }

      if (!sheet.cssRules[index]) {
        // @TBD Should we throw an error?
        return index;
      }

      sheet.deleteRule(index);

      try {
        sheet.insertRule(rule, index);
      } catch (error) {
        if (!isProd) {
          console.warn("StyleSheet: illegal rule: \n\n" + rule + "\n\nSee https://stackoverflow.com/q/20007992 for more info");
        } // In order to preserve the indices we insert a deleteRulePlaceholder


        sheet.insertRule(this._deletedRulePlaceholder, index);
      }
    } else {
      var tag = this._tags[index];
      invariant(tag, "old rule at index `" + index + "` not found");
      tag.textContent = rule;
    }

    return index;
  };

  _proto.deleteRule = function deleteRule(index) {
    if (!this._isBrowser) {
      this._serverSheet.deleteRule(index);

      return;
    }

    if (this._optimizeForSpeed) {
      this.replaceRule(index, '');
    } else {
      var tag = this._tags[index];
      invariant(tag, "rule at index `" + index + "` not found");
      tag.parentNode.removeChild(tag);
      this._tags[index] = null;
    }
  };

  _proto.flush = function flush() {
    this._injected = false;
    this._rulesCount = 0;

    if (this._isBrowser) {
      this._tags.forEach(function (tag) {
        return tag && tag.parentNode.removeChild(tag);
      });

      this._tags = [];
    } else {
      // simpler on server
      this._serverSheet.cssRules = [];
    }
  };

  _proto.cssRules = function cssRules() {
    var _this2 = this;

    if (!this._isBrowser) {
      return this._serverSheet.cssRules;
    }

    return this._tags.reduce(function (rules, tag) {
      if (tag) {
        rules = rules.concat(Array.prototype.map.call(_this2.getSheetForTag(tag).cssRules, function (rule) {
          return rule.cssText === _this2._deletedRulePlaceholder ? null : rule;
        }));
      } else {
        rules.push(null);
      }

      return rules;
    }, []);
  };

  _proto.makeStyleTag = function makeStyleTag(name, cssString, relativeToTag) {
    if (cssString) {
      invariant(isString(cssString), 'makeStyleTag acceps only strings as second parameter');
    }

    var tag = document.createElement('style');
    if (this._nonce) tag.setAttribute('nonce', this._nonce);
    tag.type = 'text/css';
    tag.setAttribute("data-" + name, '');

    if (cssString) {
      tag.appendChild(document.createTextNode(cssString));
    }

    var head = document.head || document.getElementsByTagName('head')[0];

    if (relativeToTag) {
      head.insertBefore(tag, relativeToTag);
    } else {
      head.appendChild(tag);
    }

    return tag;
  };

  _createClass(StyleSheet, [{
    key: "length",
    get: function get() {
      return this._rulesCount;
    }
  }]);

  return StyleSheet;
}();

exports["default"] = StyleSheet;

function invariant(condition, message) {
  if (!condition) {
    throw new Error("StyleSheet: " + message + ".");
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/styled-jsx/dist/style.js":
/*!***********************************************!*\
  !*** ./node_modules/styled-jsx/dist/style.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.flush = flush;
exports["default"] = void 0;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _stylesheetRegistry = _interopRequireDefault(__webpack_require__(/*! ./stylesheet-registry */ "./node_modules/styled-jsx/dist/stylesheet-registry.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var styleSheetRegistry = new _stylesheetRegistry["default"]();

var JSXStyle =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(JSXStyle, _Component);

  function JSXStyle(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.prevProps = {};
    return _this;
  }

  JSXStyle.dynamic = function dynamic(info) {
    return info.map(function (tagInfo) {
      var baseId = tagInfo[0];
      var props = tagInfo[1];
      return styleSheetRegistry.computeId(baseId, props);
    }).join(' ');
  } // probably faster than PureComponent (shallowEqual)
  ;

  var _proto = JSXStyle.prototype;

  _proto.shouldComponentUpdate = function shouldComponentUpdate(otherProps) {
    return this.props.id !== otherProps.id || // We do this check because `dynamic` is an array of strings or undefined.
    // These are the computed values for dynamic styles.
    String(this.props.dynamic) !== String(otherProps.dynamic);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    styleSheetRegistry.remove(this.props);
  };

  _proto.render = function render() {
    // This is a workaround to make the side effect async safe in the "render" phase.
    // See https://github.com/zeit/styled-jsx/pull/484
    if (this.shouldComponentUpdate(this.prevProps)) {
      // Updates
      if (this.prevProps.id) {
        styleSheetRegistry.remove(this.prevProps);
      }

      styleSheetRegistry.add(this.props);
      this.prevProps = this.props;
    }

    return null;
  };

  return JSXStyle;
}(_react.Component);

exports["default"] = JSXStyle;

function flush() {
  var cssRules = styleSheetRegistry.cssRules();
  styleSheetRegistry.flush();
  return cssRules;
}

/***/ }),

/***/ "./node_modules/styled-jsx/dist/stylesheet-registry.js":
/*!*************************************************************!*\
  !*** ./node_modules/styled-jsx/dist/stylesheet-registry.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _stringHash = _interopRequireDefault(__webpack_require__(/*! string-hash */ "./node_modules/string-hash/index.js"));

var _stylesheet = _interopRequireDefault(__webpack_require__(/*! ./lib/stylesheet */ "./node_modules/styled-jsx/dist/lib/stylesheet.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var sanitize = function sanitize(rule) {
  return rule.replace(/\/style/gi, '\\/style');
};

var StyleSheetRegistry =
/*#__PURE__*/
function () {
  function StyleSheetRegistry(_temp) {
    var _ref = _temp === void 0 ? {} : _temp,
        _ref$styleSheet = _ref.styleSheet,
        styleSheet = _ref$styleSheet === void 0 ? null : _ref$styleSheet,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? false : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;

    this._sheet = styleSheet || new _stylesheet["default"]({
      name: 'styled-jsx',
      optimizeForSpeed: optimizeForSpeed
    });

    this._sheet.inject();

    if (styleSheet && typeof optimizeForSpeed === 'boolean') {
      this._sheet.setOptimizeForSpeed(optimizeForSpeed);

      this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
    }

    this._isBrowser = isBrowser;
    this._fromServer = undefined;
    this._indices = {};
    this._instancesCounts = {};
    this.computeId = this.createComputeId();
    this.computeSelector = this.createComputeSelector();
  }

  var _proto = StyleSheetRegistry.prototype;

  _proto.add = function add(props) {
    var _this = this;

    if (undefined === this._optimizeForSpeed) {
      this._optimizeForSpeed = Array.isArray(props.children);

      this._sheet.setOptimizeForSpeed(this._optimizeForSpeed);

      this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
    }

    if (this._isBrowser && !this._fromServer) {
      this._fromServer = this.selectFromServer();
      this._instancesCounts = Object.keys(this._fromServer).reduce(function (acc, tagName) {
        acc[tagName] = 0;
        return acc;
      }, {});
    }

    var _this$getIdAndRules = this.getIdAndRules(props),
        styleId = _this$getIdAndRules.styleId,
        rules = _this$getIdAndRules.rules; // Deduping: just increase the instances count.


    if (styleId in this._instancesCounts) {
      this._instancesCounts[styleId] += 1;
      return;
    }

    var indices = rules.map(function (rule) {
      return _this._sheet.insertRule(rule);
    }) // Filter out invalid rules
    .filter(function (index) {
      return index !== -1;
    });
    this._indices[styleId] = indices;
    this._instancesCounts[styleId] = 1;
  };

  _proto.remove = function remove(props) {
    var _this2 = this;

    var _this$getIdAndRules2 = this.getIdAndRules(props),
        styleId = _this$getIdAndRules2.styleId;

    invariant(styleId in this._instancesCounts, "styleId: `" + styleId + "` not found");
    this._instancesCounts[styleId] -= 1;

    if (this._instancesCounts[styleId] < 1) {
      var tagFromServer = this._fromServer && this._fromServer[styleId];

      if (tagFromServer) {
        tagFromServer.parentNode.removeChild(tagFromServer);
        delete this._fromServer[styleId];
      } else {
        this._indices[styleId].forEach(function (index) {
          return _this2._sheet.deleteRule(index);
        });

        delete this._indices[styleId];
      }

      delete this._instancesCounts[styleId];
    }
  };

  _proto.update = function update(props, nextProps) {
    this.add(nextProps);
    this.remove(props);
  };

  _proto.flush = function flush() {
    this._sheet.flush();

    this._sheet.inject();

    this._fromServer = undefined;
    this._indices = {};
    this._instancesCounts = {};
    this.computeId = this.createComputeId();
    this.computeSelector = this.createComputeSelector();
  };

  _proto.cssRules = function cssRules() {
    var _this3 = this;

    var fromServer = this._fromServer ? Object.keys(this._fromServer).map(function (styleId) {
      return [styleId, _this3._fromServer[styleId]];
    }) : [];

    var cssRules = this._sheet.cssRules();

    return fromServer.concat(Object.keys(this._indices).map(function (styleId) {
      return [styleId, _this3._indices[styleId].map(function (index) {
        return cssRules[index].cssText;
      }).join(_this3._optimizeForSpeed ? '' : '\n')];
    }) // filter out empty rules
    .filter(function (rule) {
      return Boolean(rule[1]);
    }));
  }
  /**
   * createComputeId
   *
   * Creates a function to compute and memoize a jsx id from a basedId and optionally props.
   */
  ;

  _proto.createComputeId = function createComputeId() {
    var cache = {};
    return function (baseId, props) {
      if (!props) {
        return "jsx-" + baseId;
      }

      var propsToString = String(props);
      var key = baseId + propsToString; // return `jsx-${hashString(`${baseId}-${propsToString}`)}`

      if (!cache[key]) {
        cache[key] = "jsx-" + (0, _stringHash["default"])(baseId + "-" + propsToString);
      }

      return cache[key];
    };
  }
  /**
   * createComputeSelector
   *
   * Creates a function to compute and memoize dynamic selectors.
   */
  ;

  _proto.createComputeSelector = function createComputeSelector(selectoPlaceholderRegexp) {
    if (selectoPlaceholderRegexp === void 0) {
      selectoPlaceholderRegexp = /__jsx-style-dynamic-selector/g;
    }

    var cache = {};
    return function (id, css) {
      // Sanitize SSR-ed CSS.
      // Client side code doesn't need to be sanitized since we use
      // document.createTextNode (dev) and the CSSOM api sheet.insertRule (prod).
      if (!this._isBrowser) {
        css = sanitize(css);
      }

      var idcss = id + css;

      if (!cache[idcss]) {
        cache[idcss] = css.replace(selectoPlaceholderRegexp, id);
      }

      return cache[idcss];
    };
  };

  _proto.getIdAndRules = function getIdAndRules(props) {
    var _this4 = this;

    var css = props.children,
        dynamic = props.dynamic,
        id = props.id;

    if (dynamic) {
      var styleId = this.computeId(id, dynamic);
      return {
        styleId: styleId,
        rules: Array.isArray(css) ? css.map(function (rule) {
          return _this4.computeSelector(styleId, rule);
        }) : [this.computeSelector(styleId, css)]
      };
    }

    return {
      styleId: this.computeId(id),
      rules: Array.isArray(css) ? css : [css]
    };
  }
  /**
   * selectFromServer
   *
   * Collects style tags from the document with id __jsx-XXX
   */
  ;

  _proto.selectFromServer = function selectFromServer() {
    var elements = Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]'));
    return elements.reduce(function (acc, element) {
      var id = element.id.slice(2);
      acc[id] = element;
      return acc;
    }, {});
  };

  return StyleSheetRegistry;
}();

exports["default"] = StyleSheetRegistry;

function invariant(condition, message) {
  if (!condition) {
    throw new Error("StyleSheetRegistry: " + message + ".");
  }
}

/***/ }),

/***/ "./node_modules/styled-jsx/style.js":
/*!******************************************!*\
  !*** ./node_modules/styled-jsx/style.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/style */ "./node_modules/styled-jsx/dist/style.js")


/***/ }),

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
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(pages.game),
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
    return __jsx(_components_splash__WEBPACK_IMPORTED_MODULE_2__["Splash"], {
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
    return __jsx(_components_game__WEBPACK_IMPORTED_MODULE_1__["Game"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 12
      }
    });
  }

  return content;
}

/***/ }),

/***/ 2:
/*!************************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2F&absolutePagePath=%2Fhome%2Fuser%2FDocuments%2F%40javascript%2Fquarantine-game%2Fpages%2Findex.js ***!
  \************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2F&absolutePagePath=%2Fhome%2Fuser%2FDocuments%2F%40javascript%2Fquarantine-game%2Fpages%2Findex.js! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=%2Fhome%2Fuser%2FDocuments%2F%40javascript%2Fquarantine-game%2Fpages%2Findex.js!./");


/***/ }),

/***/ "dll-reference dll_c2e10d183b950a67d9e7":
/*!*******************************************!*\
  !*** external "dll_c2e10d183b950a67d9e7" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_c2e10d183b950a67d9e7;

/***/ })

},[[2,"static/runtime/webpack.js"]]]);
//# sourceMappingURL=index.js.map