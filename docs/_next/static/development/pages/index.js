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
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ui */ "./components/ui.js");
/* harmony import */ var _config_default__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config/default */ "./config/default.js");


var _jsxFileName = "/home/user/Documents/@javascript/quarantine-game/components/game.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;



var assets = _config_default__WEBPACK_IMPORTED_MODULE_5__["assets"],
    getCost = _config_default__WEBPACK_IMPORTED_MODULE_5__["getCost"],
    initialPrices = _config_default__WEBPACK_IMPORTED_MODULE_5__["initialPrices"],
    tickLengthMs = _config_default__WEBPACK_IMPORTED_MODULE_5__["tickLengthMs"],
    upgrades = _config_default__WEBPACK_IMPORTED_MODULE_5__["upgrades"],
    upgradeSpecs = _config_default__WEBPACK_IMPORTED_MODULE_5__["upgradeSpecs"];
function Game() {
  var _buyables;

  // state
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(_config_default__WEBPACK_IMPORTED_MODULE_5__["initialCash"]),
      cash = _useState[0],
      setCash = _useState[1];

  var _useBidAsk = useBidAsk(initialPrices[assets.masks]),
      _useBidAsk2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useBidAsk, 2),
      maskPrice = _useBidAsk2[0],
      setMaskBidAsk = _useBidAsk2[1];

  var _useTradable = useTradable(0, maskPrice, cash, setCash),
      _useTradable2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useTradable, 4),
      masks = _useTradable2[0],
      setMasks = _useTradable2[1],
      buyMasks = _useTradable2[2],
      sellMasks = _useTradable2[3];

  var buyables = (_buyables = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_buyables, upgrades[assets.masks].employees, useBuyable(upgradeSpecs[upgrades[assets.masks].employees].initialCost, cash, setCash)), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_buyables, upgrades[assets.masks].sewing, useBuyable(upgradeSpecs[upgrades[assets.masks].sewing].initialCost, cash, setCash)), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_buyables, upgrades[assets.masks].conveyor, useBuyable(upgradeSpecs[upgrades[assets.masks].conveyor].initialCost, cash, setCash)), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_buyables, upgrades[assets.masks].printer, useBuyable(upgradeSpecs[upgrades[assets.masks].printer].initialCost, cash, setCash)), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_buyables, upgrades[assets.masks].factory, useBuyable(upgradeSpecs[upgrades[assets.masks].factory].initialCost, cash, setCash)), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_buyables, upgrades[assets.masks].fullAutomation, useBuyable(upgradeSpecs[upgrades[assets.masks].fullAutomation].initialCost, cash, setCash)), _buyables); // computed

  var maskRate = Object.values(upgrades[assets.masks]).reduce(function (total, key) {
    var amount = buyables[key][0];
    return total + amount * upgradeSpecs[key].productionRate;
  }, 0);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    var interval = setInterval(function () {
      // compute new asset amounts
      setMasks(masks + maskRate); // randomly modify the prices

      if (Math.random() < 0.5) {
        var halfSpread = 0.01;
        var volatility = 0.02;
        var midPrice = (maskPrice.bid + maskPrice.ask) / 2;
        var multiplier = 1 - volatility + 2 * volatility * Math.random(); // martingale

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
  return __jsx(_ui__WEBPACK_IMPORTED_MODULE_4__["Horizontal"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 5
    }
  }, __jsx(Wallet, {
    cash: cash,
    masks: masks,
    maskRate: maskRate,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 7
    }
  }), __jsx(_ui__WEBPACK_IMPORTED_MODULE_4__["Vertical"], {
    flex: 5,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 7
    }
  }, __jsx(_ui__WEBPACK_IMPORTED_MODULE_4__["Horizontal"], {
    flex: 1,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
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
      lineNumber: 85,
      columnNumber: 11
    }
  }), __jsx(Orderbook, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 11
    }
  })), __jsx(_ui__WEBPACK_IMPORTED_MODULE_4__["Horizontal"], {
    flex: 2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
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
      lineNumber: 91,
      columnNumber: 11
    }
  }, __jsx("div", {
    style: {
      padding: '16px'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 13
    }
  }, __jsx("b", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 46
    }
  }, "Mask production")), [upgrades[assets.masks].employees, upgrades[assets.masks].sewing, upgrades[assets.masks].conveyor, upgrades[assets.masks].printer, upgrades[assets.masks].factory, upgrades[assets.masks].fullAutomation].map(makeBuyable(buyables))), __jsx("div", {
    style: {
      background: '#cccbca',
      flex: 1
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 11
    }
  }, __jsx("div", {
    style: {
      padding: '16px'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 13
    }
  }, __jsx("b", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
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
      lineNumber: 110,
      columnNumber: 11
    }
  }, __jsx("div", {
    style: {
      padding: '16px'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 13
    }
  }, __jsx("b", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 46
    }
  }, "TODO production"))))));
}

function makeBuyable(items) {
  return function BuyableItem(key) {
    var _items$key = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(items[key], 2),
        currentAmount = _items$key[0],
        buyFunction = _items$key[1];

    var _upgradeSpecs$key = upgradeSpecs[key],
        label = _upgradeSpecs$key.label,
        initialCost = _upgradeSpecs$key.initialCost;
    var cost = getCost(initialCost, currentAmount);
    return __jsx(ItemWithAmount, {
      onClick: guard(buyFunction),
      label: label,
      amount: currentAmount,
      price: cost,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 12
      }
    });
  };
}

function useBuyable(initialCost, cash, setCash) {
  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
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

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(initialBid),
      bid = _useState3[0],
      setBid = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(initialAsk),
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

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(initialAmount),
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
  return __jsx(_ui__WEBPACK_IMPORTED_MODULE_4__["Vertical"], {
    flex: 2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
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
      lineNumber: 188,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "jsx-2153152808",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 7
    }
  }, __jsx("h1", {
    className: "jsx-2153152808",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 9
    }
  }, "DONT SEPPUKU"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "2153152808",
    __self: this
  }, "h1.jsx-2153152808{border:8px solid;font-family:'Nosifer',sans-serif;font-size:24px;margin:16px 8px;padding:12px 8px 8px;text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3VzZXIvRG9jdW1lbnRzL0BqYXZhc2NyaXB0L3F1YXJhbnRpbmUtZ2FtZS9jb21wb25lbnRzL2dhbWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb01vQixBQUc0QixpQkFDaUIsaUNBQ25CLGVBQ0MsZ0JBQ0sscUJBQ0gsa0JBQ3BCIiwiZmlsZSI6Ii9ob21lL3VzZXIvRG9jdW1lbnRzL0BqYXZhc2NyaXB0L3F1YXJhbnRpbmUtZ2FtZS9jb21wb25lbnRzL2dhbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgR2FtZUJ1dHRvbiwgSW5wdXQsIEhvcml6b250YWwsIFZlcnRpY2FsIH0gZnJvbSAnLi91aSc7XG5pbXBvcnQgKiBhcyBjb25maWcgIGZyb20gJy4uL2NvbmZpZy9kZWZhdWx0JztcblxuY29uc3Qge1xuICBhc3NldHMsXG4gIGdldENvc3QsXG4gIGluaXRpYWxQcmljZXMsXG4gIHRpY2tMZW5ndGhNcyxcbiAgdXBncmFkZXMsXG4gIHVwZ3JhZGVTcGVjcyxcbn0gPSBjb25maWc7XG5cbmV4cG9ydCBmdW5jdGlvbiBHYW1lICgpIHtcbiAgLy8gc3RhdGVcbiAgY29uc3QgW2Nhc2gsIHNldENhc2hdID0gdXNlU3RhdGUoY29uZmlnLmluaXRpYWxDYXNoKTtcbiAgY29uc3QgW21hc2tQcmljZSwgc2V0TWFza0JpZEFza10gPSB1c2VCaWRBc2soaW5pdGlhbFByaWNlc1thc3NldHMubWFza3NdKTtcbiAgY29uc3QgW21hc2tzLCBzZXRNYXNrcywgYnV5TWFza3MsIHNlbGxNYXNrc10gPSB1c2VUcmFkYWJsZSgwLCBtYXNrUHJpY2UsIGNhc2gsIHNldENhc2gpO1xuICBjb25zdCBidXlhYmxlcyA9IHtcbiAgICBbdXBncmFkZXNbYXNzZXRzLm1hc2tzXS5lbXBsb3llZXNdOiB1c2VCdXlhYmxlKFxuICAgICAgdXBncmFkZVNwZWNzW3VwZ3JhZGVzW2Fzc2V0cy5tYXNrc10uZW1wbG95ZWVzXS5pbml0aWFsQ29zdCxcbiAgICAgIGNhc2gsXG4gICAgICBzZXRDYXNoXG4gICAgKSxcbiAgICBbdXBncmFkZXNbYXNzZXRzLm1hc2tzXS5zZXdpbmddOiB1c2VCdXlhYmxlKFxuICAgICAgdXBncmFkZVNwZWNzW3VwZ3JhZGVzW2Fzc2V0cy5tYXNrc10uc2V3aW5nXS5pbml0aWFsQ29zdCxcbiAgICAgIGNhc2gsXG4gICAgICBzZXRDYXNoXG4gICAgKSxcbiAgICBbdXBncmFkZXNbYXNzZXRzLm1hc2tzXS5jb252ZXlvcl06IHVzZUJ1eWFibGUoXG4gICAgICB1cGdyYWRlU3BlY3NbdXBncmFkZXNbYXNzZXRzLm1hc2tzXS5jb252ZXlvcl0uaW5pdGlhbENvc3QsXG4gICAgICBjYXNoLFxuICAgICAgc2V0Q2FzaFxuICAgICksXG4gICAgW3VwZ3JhZGVzW2Fzc2V0cy5tYXNrc10ucHJpbnRlcl06IHVzZUJ1eWFibGUoXG4gICAgICB1cGdyYWRlU3BlY3NbdXBncmFkZXNbYXNzZXRzLm1hc2tzXS5wcmludGVyXS5pbml0aWFsQ29zdCxcbiAgICAgIGNhc2gsXG4gICAgICBzZXRDYXNoXG4gICAgKSxcbiAgICBbdXBncmFkZXNbYXNzZXRzLm1hc2tzXS5mYWN0b3J5XTogdXNlQnV5YWJsZShcbiAgICAgIHVwZ3JhZGVTcGVjc1t1cGdyYWRlc1thc3NldHMubWFza3NdLmZhY3RvcnldLmluaXRpYWxDb3N0LFxuICAgICAgY2FzaCxcbiAgICAgIHNldENhc2hcbiAgICApLFxuICAgIFt1cGdyYWRlc1thc3NldHMubWFza3NdLmZ1bGxBdXRvbWF0aW9uXTogdXNlQnV5YWJsZShcbiAgICAgIHVwZ3JhZGVTcGVjc1t1cGdyYWRlc1thc3NldHMubWFza3NdLmZ1bGxBdXRvbWF0aW9uXS5pbml0aWFsQ29zdCxcbiAgICAgIGNhc2gsXG4gICAgICBzZXRDYXNoXG4gICAgKSxcbiAgfTtcblxuICAvLyBjb21wdXRlZFxuICBjb25zdCBtYXNrUmF0ZSA9IE9iamVjdC52YWx1ZXModXBncmFkZXNbYXNzZXRzLm1hc2tzXSkucmVkdWNlKCh0b3RhbCwga2V5KSA9PiB7XG4gICAgY29uc3QgYW1vdW50ID0gYnV5YWJsZXNba2V5XVswXTtcbiAgICByZXR1cm4gdG90YWwgKyBhbW91bnQgKiB1cGdyYWRlU3BlY3Nba2V5XS5wcm9kdWN0aW9uUmF0ZTtcbiAgfSwgMCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIC8vIGNvbXB1dGUgbmV3IGFzc2V0IGFtb3VudHNcbiAgICAgIHNldE1hc2tzKG1hc2tzICsgbWFza1JhdGUpO1xuXG4gICAgICAvLyByYW5kb21seSBtb2RpZnkgdGhlIHByaWNlc1xuICAgICAgaWYgKE1hdGgucmFuZG9tKCkgPCAwLjUpIHtcbiAgICAgICAgY29uc3QgaGFsZlNwcmVhZCA9IDAuMDE7XG4gICAgICAgIGNvbnN0IHZvbGF0aWxpdHkgPSAwLjAyO1xuICAgICAgICBjb25zdCBtaWRQcmljZSA9IChtYXNrUHJpY2UuYmlkICsgbWFza1ByaWNlLmFzaykgLyAyO1xuICAgICAgICBjb25zdCBtdWx0aXBsaWVyID0gKDEgLSB2b2xhdGlsaXR5KSArIDIgKiB2b2xhdGlsaXR5ICogTWF0aC5yYW5kb20oKTsgLy8gbWFydGluZ2FsZVxuICAgICAgICBjb25zdCBuZXdNaWRQcmljZSA9IG11bHRpcGxpZXIgKiBtaWRQcmljZTtcbiAgICAgICAgc2V0TWFza0JpZEFzayh7XG4gICAgICAgICAgYmlkOiBuZXdNaWRQcmljZSAqICgxIC0gaGFsZlNwcmVhZCksXG4gICAgICAgICAgYXNrOiBuZXdNaWRQcmljZSAqICgxICsgaGFsZlNwcmVhZCksXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sIHRpY2tMZW5ndGhNcyk7XG4gICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICB9KTtcblxuICByZXR1cm4gKFxuICAgIDxIb3Jpem9udGFsPlxuICAgICAgPFdhbGxldCBjYXNoPXtjYXNofSBtYXNrcz17bWFza3N9IG1hc2tSYXRlPXttYXNrUmF0ZX0gLz5cblxuICAgICAgPFZlcnRpY2FsIGZsZXg9ezV9PlxuICAgICAgICA8SG9yaXpvbnRhbCBmbGV4PXsxfT5cbiAgICAgICAgICA8VHJhZGluZyBiaWQ9e21hc2tQcmljZS5iaWR9IGFzaz17bWFza1ByaWNlLmFza30gYnV5PXtidXlNYXNrc30gc2VsbD17c2VsbE1hc2tzfSAvPlxuXG4gICAgICAgICAgPE9yZGVyYm9vayAvPlxuICAgICAgICA8L0hvcml6b250YWw+XG5cbiAgICAgICAgPEhvcml6b250YWwgZmxleD17Mn0+XG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBiYWNrZ3JvdW5kOiAnI2RjZGJkYScsIGZsZXg6IDEgfX0+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmc6ICcxNnB4JyB9fT48Yj5NYXNrIHByb2R1Y3Rpb248L2I+PC9kaXY+XG5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIHVwZ3JhZGVzW2Fzc2V0cy5tYXNrc10uZW1wbG95ZWVzLFxuICAgICAgICAgICAgICAgIHVwZ3JhZGVzW2Fzc2V0cy5tYXNrc10uc2V3aW5nLFxuICAgICAgICAgICAgICAgIHVwZ3JhZGVzW2Fzc2V0cy5tYXNrc10uY29udmV5b3IsXG4gICAgICAgICAgICAgICAgdXBncmFkZXNbYXNzZXRzLm1hc2tzXS5wcmludGVyLFxuICAgICAgICAgICAgICAgIHVwZ3JhZGVzW2Fzc2V0cy5tYXNrc10uZmFjdG9yeSxcbiAgICAgICAgICAgICAgICB1cGdyYWRlc1thc3NldHMubWFza3NdLmZ1bGxBdXRvbWF0aW9uLFxuICAgICAgICAgICAgICBdLm1hcChtYWtlQnV5YWJsZShidXlhYmxlcykpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGJhY2tncm91bmQ6ICcjY2NjYmNhJywgZmxleDogMSB9fT5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogJzE2cHgnIH19PjxiPlRPRE8gcHJvZHVjdGlvbjwvYj48L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgYmFja2dyb3VuZDogJyNiY2JiYmEnLCBmbGV4OiAxIH19PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiAnMTZweCcgfX0+PGI+VE9ETyBwcm9kdWN0aW9uPC9iPjwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0hvcml6b250YWw+XG4gICAgICA8L1ZlcnRpY2FsPlxuICAgIDwvSG9yaXpvbnRhbD5cbiAgKTtcbn1cblxuZnVuY3Rpb24gbWFrZUJ1eWFibGUoaXRlbXMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIEJ1eWFibGVJdGVtKGtleSkge1xuICAgIGNvbnN0IFtjdXJyZW50QW1vdW50LCBidXlGdW5jdGlvbl0gPSBpdGVtc1trZXldO1xuICAgIGNvbnN0IHsgbGFiZWwsIGluaXRpYWxDb3N0IH0gPSB1cGdyYWRlU3BlY3Nba2V5XTtcbiAgICBjb25zdCBjb3N0ID0gZ2V0Q29zdChpbml0aWFsQ29zdCwgY3VycmVudEFtb3VudCk7XG4gICAgcmV0dXJuIDxJdGVtV2l0aEFtb3VudFxuICAgICAgb25DbGljaz17Z3VhcmQoYnV5RnVuY3Rpb24pfVxuICAgICAgbGFiZWw9e2xhYmVsfVxuICAgICAgYW1vdW50PXtjdXJyZW50QW1vdW50fVxuICAgICAgcHJpY2U9e2Nvc3R9IC8+O1xuICB9O1xufVxuXG5mdW5jdGlvbiB1c2VCdXlhYmxlKGluaXRpYWxDb3N0LCBjYXNoLCBzZXRDYXNoKSB7XG4gIGNvbnN0IFtxdWFudGl0eSwgc2V0UXVhbnRpdHldID0gdXNlU3RhdGUoMCk7XG5cbiAgZnVuY3Rpb24gYnV5KCkge1xuICAgIGNvbnN0IGNvc3QgPSBnZXRDb3N0KGluaXRpYWxDb3N0LCBxdWFudGl0eSk7XG4gICAgaWYgKGNvc3QgPiBjYXNoKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0luc3VmZmljaWVudCBjYXNoIGJhbGFuY2UnKTtcbiAgICB9XG5cbiAgICBzZXRDYXNoKGNhc2ggLSBjb3N0KTtcbiAgICBzZXRRdWFudGl0eShxdWFudGl0eSArIDEpO1xuICB9XG5cbiAgcmV0dXJuIFtxdWFudGl0eSwgYnV5XTtcbn1cblxuZnVuY3Rpb24gdXNlQmlkQXNrKHsgYmlkOiBpbml0aWFsQmlkLCBhc2s6IGluaXRpYWxBc2sgfSkge1xuICBjb25zdCBbYmlkLCBzZXRCaWRdID0gdXNlU3RhdGUoaW5pdGlhbEJpZCk7XG4gIGNvbnN0IFthc2ssIHNldEFza10gPSB1c2VTdGF0ZShpbml0aWFsQXNrKTtcblxuICBmdW5jdGlvbiBzZXRCaWRBc2soeyBiaWQ6IG5ld0JpZCwgYXNrOiBuZXdBc2sgfSkge1xuICAgIHNldEJpZChuZXdCaWQpO1xuICAgIHNldEFzayhuZXdBc2spO1xuICB9XG5cbiAgcmV0dXJuIFt7IGJpZCwgYXNrIH0sIHNldEJpZEFza107XG59XG5cbmZ1bmN0aW9uIHVzZVRyYWRhYmxlKGluaXRpYWxBbW91bnQsIHsgYmlkLCBhc2sgfSwgY2FzaCwgc2V0Q2FzaCkge1xuICBjb25zdCBbYW1vdW50LCBzZXRBbW91bnRdID0gdXNlU3RhdGUoaW5pdGlhbEFtb3VudCk7XG5cbiAgZnVuY3Rpb24gYnV5KHF1YW50aXR5KSB7XG4gICAgY29uc3QgY29zdCA9IGFzayAqIHF1YW50aXR5O1xuICAgIGlmIChjb3N0ID4gY2FzaCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnN1ZmZpY2llbnQgY2FzaCBiYWxhbmNlJyk7XG4gICAgfVxuXG4gICAgc2V0Q2FzaChjYXNoIC0gY29zdCk7XG4gICAgc2V0QW1vdW50KGFtb3VudCArIHF1YW50aXR5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNlbGwocXVhbnRpdHkpIHtcbiAgICBpZiAocXVhbnRpdHkgPiBhbW91bnQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignSW5zdWZmaWNpZW50IGFzc2V0IHF1YW50aXR5Jyk7XG4gICAgfVxuXG4gICAgY29uc3QgcXVvdGVRdWFudGl0eSA9IGJpZCAqIHF1YW50aXR5O1xuICAgIHNldEFtb3VudChhbW91bnQgLSBxdWFudGl0eSk7XG4gICAgc2V0Q2FzaChjYXNoICsgcXVvdGVRdWFudGl0eSk7XG4gIH1cblxuICByZXR1cm4gW2Ftb3VudCwgc2V0QW1vdW50LCBidXksIHNlbGxdO1xufVxuXG5mdW5jdGlvbiBXYWxsZXQoeyBjYXNoLCBtYXNrcywgbWFza1JhdGUgfSkge1xuICByZXR1cm4gPFZlcnRpY2FsIGZsZXg9ezJ9PlxuICAgIDxkaXYgc3R5bGU9e3tcbiAgICAgIGJhY2tncm91bmQ6ICcjZmNmYmZhJyxcbiAgICAgIGZsZXg6IDEsXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgIH19PlxuICAgICAgPGRpdj5cbiAgICAgICAgPGgxPkRPTlQgU0VQUFVLVTwvaDE+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgaDEge1xuICAgICAgICAgIGJvcmRlcjogOHB4IHNvbGlkO1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnTm9zaWZlcicsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICAgIG1hcmdpbjogMTZweCA4cHg7XG4gICAgICAgICAgcGFkZGluZzogMTJweCA4cHggOHB4O1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxBc3NldFdpdGhSYXRlIGxhYmVsPSdDYXNoJyBhbW91bnQ9e2Zvcm1hdE1vbmV5KGNhc2gpfSAvPlxuICAgICAgPGJyIC8+XG4gICAgICA8QXNzZXRXaXRoUmF0ZSBsYWJlbD0nTWFza3MnIGFtb3VudD17Zm9ybWF0KG1hc2tzKX0gcmF0ZT17Zm9ybWF0KG1hc2tSYXRlKX0gLz5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IHN0eWxlPXt7IGJhY2tncm91bmQ6ICcjZWNlYmVhJywgZmxleDogMiB9fT48L2Rpdj5cbiAgPC9WZXJ0aWNhbD47XG59XG5cbmZ1bmN0aW9uIFRyYWRpbmcoeyBiaWQsIGFzaywgYnV5LCBzZWxsIH0pIHtcbiAgY29uc3QgW2J1eUFtb3VudCwgYnV5QW1vdW50U3RyaW5nLCBzZXRCdXlBbW91bnRdID0gdXNlTnVtZXJpY0lucHV0KDApO1xuICBjb25zdCBbc2VsbEFtb3VudCwgc2VsbEFtb3VudFN0cmluZywgc2V0U2VsbEFtb3VudF0gPSB1c2VOdW1lcmljSW5wdXQoMCk7XG5cbiAgcmV0dXJuIDxkaXYgc3R5bGU9e3sgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsIGJhY2tncm91bmQ6ICcjYWNhYmFhJywgZmxleDogMSB9fT5cbiAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmc6ICcxNnB4JyB9fT48Yj5UcmFkZTwvYj48L2Rpdj5cblxuICAgIDxBc3NldFdpdGhSYXRlIGxhYmVsPSdCdXkgbWFza3MgQCcgYW1vdW50PXtmb3JtYXRNb25leShhc2spfSBzdWZmaXg9Jy9tYXNrJyAvPlxuXG4gICAgPEhvcml6b250YWwgcGFkZGluZz0nMCAxNnB4Jz5cbiAgICAgIDxJbnB1dCBwbGFjZWhvbGRlcj0nQW1vdW50JyB2YWx1ZT17YnV5QW1vdW50U3RyaW5nfSBvbkNoYW5nZT17c2V0QnV5QW1vdW50fSAvPlxuICAgICAgJm5ic3A7XG4gICAgICA8R2FtZUJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBndWFyZChidXkpKGJ1eUFtb3VudCl9IGZsZXg9ezF9PkJ1eTwvR2FtZUJ1dHRvbj5cbiAgICA8L0hvcml6b250YWw+XG5cbiAgICA8YnIgLz5cblxuICAgIDxBc3NldFdpdGhSYXRlIGxhYmVsPSdTZWxsIG1hc2tzIEAnIGFtb3VudD17Zm9ybWF0TW9uZXkoYmlkKX0gc3VmZml4PScvbWFzaycgLz5cblxuICAgIDxIb3Jpem9udGFsIHBhZGRpbmc9JzAgMTZweCc+XG4gICAgICA8SW5wdXQgcGxhY2Vob2xkZXI9J0Ftb3VudCcgdmFsdWU9e3NlbGxBbW91bnRTdHJpbmd9IG9uQ2hhbmdlPXtzZXRTZWxsQW1vdW50fSAvPlxuICAgICAgJm5ic3A7XG4gICAgICA8R2FtZUJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBndWFyZChzZWxsKShzZWxsQW1vdW50KX0gZmxleD17MX0+U2VsbDwvR2FtZUJ1dHRvbj5cbiAgICA8L0hvcml6b250YWw+XG4gIDwvZGl2Pjtcbn1cblxuZnVuY3Rpb24gdXNlTnVtZXJpY0lucHV0KGluaXRpYWxWYWx1ZSkge1xuICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKGluaXRpYWxWYWx1ZSk7XG4gIGNvbnN0IFt2YWx1ZVN0cmluZywgc2V0VmFsdWVTdHJpbmddID0gdXNlU3RhdGUoaW5pdGlhbFZhbHVlKTtcbiAgZnVuY3Rpb24gc2V0KGV2ZW50KSB7XG4gICAgaWYgKGlzTmFOKGV2ZW50LnRhcmdldC52YWx1ZSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBzZXRWYWx1ZShwYXJzZUZsb2F0KGV2ZW50LnRhcmdldC52YWx1ZSkpO1xuICAgIHNldFZhbHVlU3RyaW5nKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gIH1cbiAgcmV0dXJuIFt2YWx1ZSwgdmFsdWVTdHJpbmcsIHNldF07XG59XG5cbmZ1bmN0aW9uIE9yZGVyYm9vaygpIHtcbiAgcmV0dXJuIDxkaXYgc3R5bGU9e3sgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsIGJhY2tncm91bmQ6ICcjMTIxMjEyJywgZmxleDogMSB9fT5cbiAgICA8ZGl2IHN0eWxlPXt7Y29sb3I6J3doaXRlJywgcGFkZGluZzogJzE2cHgnfX0+KFRPRE8pIE9yZGVyYm9vazwvZGl2PlxuICA8L2Rpdj47XG59XG5cbmZ1bmN0aW9uIEFzc2V0V2l0aFJhdGUoeyBsYWJlbCwgYW1vdW50LCByYXRlLCBzdWZmaXggfSkge1xuICBjb25zdCBwZXJTZWNvbmRSYXRlID0gcmF0ZSAqICgxMDAwIC8gdGlja0xlbmd0aE1zKTtcbiAgcmV0dXJuIChcbiAgICA8SG9yaXpvbnRhbCB3aWRlIHNwYWNlZCBwYWRkaW5nPSc4cHggMTZweCc+XG4gICAgICA8ZGl2PntsYWJlbH08L2Rpdj5cbiAgICAgIDxWZXJ0aWNhbCByaWdodD5cbiAgICAgICAgPGRpdj57YW1vdW50fXtzdWZmaXh9PC9kaXY+XG4gICAgICAgIHtyYXRlICE9PSB1bmRlZmluZWQgPyAoXG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBmb250U2l6ZTogJzE2cHgnLCBsaW5lSGVpZ2h0OiAnMzJweCcgfX0+e3BlclNlY29uZFJhdGV9IHBlciBzZWNvbmQ8L2Rpdj5cbiAgICAgICAgKSA6IG51bGx9XG4gICAgICA8L1ZlcnRpY2FsPlxuICAgIDwvSG9yaXpvbnRhbD5cbiAgKTtcbn1cblxuZnVuY3Rpb24gSXRlbVdpdGhBbW91bnQoeyBvbkNsaWNrLCBsYWJlbCwgYW1vdW50LCBwcmljZSB9KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBvbkNsaWNrPXtvbkNsaWNrfT5cbiAgICAgIDxIb3Jpem9udGFsIHdpZGUgc3BhY2VkIHBhZGRpbmc9JzhweCAxNnB4JyBtaWRkbGU+XG4gICAgICAgIDxWZXJ0aWNhbD5cbiAgICAgICAgICA8ZGl2PntsYWJlbH08L2Rpdj5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRTaXplOiAnMTZweCcsIGxpbmVIZWlnaHQ6ICczMnB4JyB9fT5Db3N0OiB7Zm9ybWF0TW9uZXkocHJpY2UpfTwvZGl2PlxuICAgICAgICA8L1ZlcnRpY2FsPlxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRTaXplOiAnMzJweCcsIGxpbmVIZWlnaHQ6ICczMnB4JyB9fT57YW1vdW50fTwvZGl2PlxuICAgICAgPC9Ib3Jpem9udGFsPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5mdW5jdGlvbiBndWFyZChmKSB7XG4gIHJldHVybiAoLi4uYXJncykgPT4ge1xuICAgIHRyeSB7XG4gICAgICBmKC4uLmFyZ3MpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIGFsZXJ0KGVyci5tZXNzYWdlKTtcbiAgICB9XG4gIH07XG59XG5cbmZ1bmN0aW9uIGFsZXJ0KCkge1xuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB3aW5kb3cuYWxlcnQoLi4uYXJndW1lbnRzKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBmb3JtYXQoeCkge1xuICByZXR1cm4geC50b0ZpeGVkKDIpLnRvTG9jYWxlU3RyaW5nKCk7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdE1vbmV5KHgpIHtcbiAgY29uc3Qgb3B0aW9ucyA9IHsgbWluaW11bUZyYWN0aW9uRGlnaXRzOiAyLCBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDIgfTtcbiAgcmV0dXJuIGAkJHt4LnRvTG9jYWxlU3RyaW5nKHVuZGVmaW5lZCwgb3B0aW9ucyl9YDtcbn1cbiJdfQ== */\n/*@ sourceURL=/home/user/Documents/@javascript/quarantine-game/components/game.js */")), __jsx(AssetWithRate, {
    label: "Cash",
    amount: formatMoney(cash),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208,
      columnNumber: 7
    }
  }), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 7
    }
  }), __jsx(AssetWithRate, {
    label: "Masks",
    amount: format(masks),
    rate: format(maskRate),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
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
      lineNumber: 212,
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
      _useNumericInput2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useNumericInput, 3),
      buyAmount = _useNumericInput2[0],
      buyAmountString = _useNumericInput2[1],
      setBuyAmount = _useNumericInput2[2];

  var _useNumericInput3 = useNumericInput(0),
      _useNumericInput4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useNumericInput3, 3),
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
      lineNumber: 220,
      columnNumber: 10
    }
  }, __jsx("div", {
    style: {
      padding: '16px'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221,
      columnNumber: 5
    }
  }, __jsx("b", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221,
      columnNumber: 38
    }
  }, "Trade")), __jsx(AssetWithRate, {
    label: "Buy masks @",
    amount: formatMoney(ask),
    suffix: "/mask",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223,
      columnNumber: 5
    }
  }), __jsx(_ui__WEBPACK_IMPORTED_MODULE_4__["Horizontal"], {
    padding: "0 16px",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225,
      columnNumber: 5
    }
  }, __jsx(_ui__WEBPACK_IMPORTED_MODULE_4__["Input"], {
    placeholder: "Amount",
    value: buyAmountString,
    onChange: setBuyAmount,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226,
      columnNumber: 7
    }
  }), "\xA0", __jsx(_ui__WEBPACK_IMPORTED_MODULE_4__["GameButton"], {
    onClick: function onClick() {
      return guard(buy)(buyAmount);
    },
    flex: 1,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228,
      columnNumber: 7
    }
  }, "Buy")), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231,
      columnNumber: 5
    }
  }), __jsx(AssetWithRate, {
    label: "Sell masks @",
    amount: formatMoney(bid),
    suffix: "/mask",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233,
      columnNumber: 5
    }
  }), __jsx(_ui__WEBPACK_IMPORTED_MODULE_4__["Horizontal"], {
    padding: "0 16px",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235,
      columnNumber: 5
    }
  }, __jsx(_ui__WEBPACK_IMPORTED_MODULE_4__["Input"], {
    placeholder: "Amount",
    value: sellAmountString,
    onChange: setSellAmount,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236,
      columnNumber: 7
    }
  }), "\xA0", __jsx(_ui__WEBPACK_IMPORTED_MODULE_4__["GameButton"], {
    onClick: function onClick() {
      return guard(sell)(sellAmount);
    },
    flex: 1,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238,
      columnNumber: 7
    }
  }, "Sell")));
}

function useNumericInput(initialValue) {
  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(initialValue),
      value = _useState6[0],
      setValue = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(initialValue),
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
      lineNumber: 258,
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
      lineNumber: 259,
      columnNumber: 5
    }
  }, "(TODO) Orderbook"));
}

function AssetWithRate(_ref6) {
  var label = _ref6.label,
      amount = _ref6.amount,
      rate = _ref6.rate,
      suffix = _ref6.suffix;
  var perSecondRate = rate * (1000 / tickLengthMs);
  return __jsx(_ui__WEBPACK_IMPORTED_MODULE_4__["Horizontal"], {
    wide: true,
    spaced: true,
    padding: "8px 16px",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266,
      columnNumber: 5
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 267,
      columnNumber: 7
    }
  }, label), __jsx(_ui__WEBPACK_IMPORTED_MODULE_4__["Vertical"], {
    right: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 268,
      columnNumber: 7
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 269,
      columnNumber: 9
    }
  }, amount, suffix), rate !== undefined ? __jsx("div", {
    style: {
      fontSize: '16px',
      lineHeight: '32px'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 271,
      columnNumber: 11
    }
  }, perSecondRate, " per second") : null));
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
      lineNumber: 280,
      columnNumber: 5
    }
  }, __jsx(_ui__WEBPACK_IMPORTED_MODULE_4__["Horizontal"], {
    wide: true,
    spaced: true,
    padding: "8px 16px",
    middle: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 281,
      columnNumber: 7
    }
  }, __jsx(_ui__WEBPACK_IMPORTED_MODULE_4__["Vertical"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 282,
      columnNumber: 9
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 283,
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
      lineNumber: 284,
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
      lineNumber: 286,
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
  var options = {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  };
  return "$".concat(x.toLocaleString(undefined, options));
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
    className: "jsx-3664469675",
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
    className: "jsx-3664469675" + " " + "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }, __jsx("h1", {
    className: "jsx-3664469675",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 11
    }
  }, "DONT SEPPUKU"), __jsx("h6", {
    style: {
      textAlign: 'center'
    },
    className: "jsx-3664469675",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 11
    }
  }, "(WIP) an incremental idle game with trading"), __jsx("div", {
    style: {
      marginTop: '16px'
    },
    className: "jsx-3664469675" + " " + "actions",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 11
    }
  }, __jsx(_ui__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    onClick: onPlayNow,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }
  }, "Play now")))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3664469675",
    __self: this
  }, ".container.jsx-3664469675{margin-top:-48px;-webkit-transform:skewY(4deg);-ms-transform:skewY(4deg);transform:skewY(4deg);}h1.jsx-3664469675{font-family:'Nosifer',sans-serif;font-size:64px;-webkit-transform:skewY(-4deg);-ms-transform:skewY(-4deg);transform:skewY(-4deg);margin-bottom:64px;}.actions.jsx-3664469675{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3VzZXIvRG9jdW1lbnRzL0BqYXZhc2NyaXB0L3F1YXJhbnRpbmUtZ2FtZS9jb21wb25lbnRzL3NwbGFzaC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnQmtCLEFBRzBCLEFBSWlCLEFBTXJCLGlCQVRTLGdCQUlQLGVBQ1EsMEJBS0EscUJBVHpCLGtDQUtxQixtQkFDckIseUJBSUEiLCJmaWxlIjoiL2hvbWUvdXNlci9Eb2N1bWVudHMvQGphdmFzY3JpcHQvcXVhcmFudGluZS1nYW1lL2NvbXBvbmVudHMvc3BsYXNoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnLi91aSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBTcGxhc2ggKHsgb25QbGF5Tm93IH0pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPFNsYW50cz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICA8aDE+RE9OVCBTRVBQVUtVPC9oMT5cblxuICAgICAgICAgIDxoNiBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInIH19PihXSVApIGFuIGluY3JlbWVudGFsIGlkbGUgZ2FtZSB3aXRoIHRyYWRpbmc8L2g2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3Rpb25zXCIgc3R5bGU9e3sgbWFyZ2luVG9wOiAnMTZweCcgfX0+XG4gICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e29uUGxheU5vd30+UGxheSBub3c8L0J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L1NsYW50cz5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5jb250YWluZXIge1xuICAgICAgICBtYXJnaW4tdG9wOiAtNDhweDtcbiAgICAgICAgdHJhbnNmb3JtOiBza2V3WSg0ZGVnKTtcbiAgICAgIH1cbiAgICAgIGgxIHtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdOb3NpZmVyJywgc2Fucy1zZXJpZjtcbiAgICAgICAgZm9udC1zaXplOiA2NHB4O1xuICAgICAgICB0cmFuc2Zvcm06IHNrZXdZKC00ZGVnKTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNjRweDtcbiAgICAgIH1cbiAgICAgIC5hY3Rpb25zIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmZ1bmN0aW9uIFNsYW50cyAoeyBjaGlsZHJlbiB9KSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2xhbnQtMFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsYW50LTFcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsYW50LTJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2xhbnQtM1wiPlxuICAgICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgLnNsYW50LTAge1xuICAgICAgICBoZWlnaHQ6IDk4LjI1NDUlO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjNTgyMjMzO1xuICAgICAgICB0cmFuc2Zvcm06IHNrZXdZKC0xZGVnKTtcbiAgICAgIH1cbiAgICAgIC5zbGFudC0xIHtcbiAgICAgICAgaGVpZ2h0OiA5OC4yNTQ1JTtcbiAgICAgICAgYmFja2dyb3VuZDogIzcxMzA0NTtcbiAgICAgICAgdHJhbnNmb3JtOiBza2V3WSgtMWRlZyk7XG4gICAgICB9XG4gICAgICAuc2xhbnQtMiB7XG4gICAgICAgIGhlaWdodDogOTguMjU0NSU7XG4gICAgICAgIGJhY2tncm91bmQ6ICNjOTRlNGU7XG4gICAgICAgIHRyYW5zZm9ybTogc2tld1koLTFkZWcpO1xuICAgICAgfVxuICAgICAgLnNsYW50LTMge1xuICAgICAgICBoZWlnaHQ6IDk4LjI1NDUlO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZmNmYmZhO1xuICAgICAgICB0cmFuc2Zvcm06IHNrZXdZKC0xZGVnKTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC8+XG4gICk7XG59XG4iXX0= */\n/*@ sourceURL=/home/user/Documents/@javascript/quarantine-game/components/splash.js */"));
}

function Slants(_ref2) {
  var children = _ref2.children;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    className: "jsx-971851819" + " " + "slant-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "jsx-971851819" + " " + "slant-1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-971851819" + " " + "slant-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "jsx-971851819" + " " + "slant-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }
  }, children)))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "971851819",
    __self: this
  }, ".slant-0.jsx-971851819{height:98.2545%;background:#582233;-webkit-transform:skewY(-1deg);-ms-transform:skewY(-1deg);transform:skewY(-1deg);}.slant-1.jsx-971851819{height:98.2545%;background:#713045;-webkit-transform:skewY(-1deg);-ms-transform:skewY(-1deg);transform:skewY(-1deg);}.slant-2.jsx-971851819{height:98.2545%;background:#c94e4e;-webkit-transform:skewY(-1deg);-ms-transform:skewY(-1deg);transform:skewY(-1deg);}.slant-3.jsx-971851819{height:98.2545%;background:#fcfbfa;-webkit-transform:skewY(-1deg);-ms-transform:skewY(-1deg);transform:skewY(-1deg);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3VzZXIvRG9jdW1lbnRzL0BqYXZhc2NyaXB0L3F1YXJhbnRpbmUtZ2FtZS9jb21wb25lbnRzL3NwbGFzaC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpRGtCLEFBR3lCLEFBS0EsQUFLQSxBQUtBLGdCQWRHLEFBS0EsQUFLQSxBQUtBLG1CQWRJLEFBS0EsQUFLQSxBQUtBLGlGQWR6QixBQUtBLEFBS0EsQUFLZSwwRUFDTSw2RkFDSSxtR0FDekIiLCJmaWxlIjoiL2hvbWUvdXNlci9Eb2N1bWVudHMvQGphdmFzY3JpcHQvcXVhcmFudGluZS1nYW1lL2NvbXBvbmVudHMvc3BsYXNoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnLi91aSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBTcGxhc2ggKHsgb25QbGF5Tm93IH0pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPFNsYW50cz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICA8aDE+RE9OVCBTRVBQVUtVPC9oMT5cblxuICAgICAgICAgIDxoNiBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInIH19PihXSVApIGFuIGluY3JlbWVudGFsIGlkbGUgZ2FtZSB3aXRoIHRyYWRpbmc8L2g2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3Rpb25zXCIgc3R5bGU9e3sgbWFyZ2luVG9wOiAnMTZweCcgfX0+XG4gICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e29uUGxheU5vd30+UGxheSBub3c8L0J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L1NsYW50cz5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5jb250YWluZXIge1xuICAgICAgICBtYXJnaW4tdG9wOiAtNDhweDtcbiAgICAgICAgdHJhbnNmb3JtOiBza2V3WSg0ZGVnKTtcbiAgICAgIH1cbiAgICAgIGgxIHtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdOb3NpZmVyJywgc2Fucy1zZXJpZjtcbiAgICAgICAgZm9udC1zaXplOiA2NHB4O1xuICAgICAgICB0cmFuc2Zvcm06IHNrZXdZKC00ZGVnKTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNjRweDtcbiAgICAgIH1cbiAgICAgIC5hY3Rpb25zIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmZ1bmN0aW9uIFNsYW50cyAoeyBjaGlsZHJlbiB9KSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2xhbnQtMFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsYW50LTFcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsYW50LTJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2xhbnQtM1wiPlxuICAgICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgLnNsYW50LTAge1xuICAgICAgICBoZWlnaHQ6IDk4LjI1NDUlO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjNTgyMjMzO1xuICAgICAgICB0cmFuc2Zvcm06IHNrZXdZKC0xZGVnKTtcbiAgICAgIH1cbiAgICAgIC5zbGFudC0xIHtcbiAgICAgICAgaGVpZ2h0OiA5OC4yNTQ1JTtcbiAgICAgICAgYmFja2dyb3VuZDogIzcxMzA0NTtcbiAgICAgICAgdHJhbnNmb3JtOiBza2V3WSgtMWRlZyk7XG4gICAgICB9XG4gICAgICAuc2xhbnQtMiB7XG4gICAgICAgIGhlaWdodDogOTguMjU0NSU7XG4gICAgICAgIGJhY2tncm91bmQ6ICNjOTRlNGU7XG4gICAgICAgIHRyYW5zZm9ybTogc2tld1koLTFkZWcpO1xuICAgICAgfVxuICAgICAgLnNsYW50LTMge1xuICAgICAgICBoZWlnaHQ6IDk4LjI1NDUlO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZmNmYmZhO1xuICAgICAgICB0cmFuc2Zvcm06IHNrZXdZKC0xZGVnKTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC8+XG4gICk7XG59XG4iXX0= */\n/*@ sourceURL=/home/user/Documents/@javascript/quarantine-game/components/splash.js */"));
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
/*! exports provided: tickLengthMs, initialCash, assets, initialPrices, upgrades, upgradeSpecs, getCost */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tickLengthMs", function() { return tickLengthMs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialCash", function() { return initialCash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assets", function() { return assets; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialPrices", function() { return initialPrices; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "upgrades", function() { return upgrades; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "upgradeSpecs", function() { return upgradeSpecs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCost", function() { return getCost; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");


var _upgradeSpecs;

var tickLengthMs = 100;
var initialCash = 15;
var assets = {
  masks: 'masks'
};
var initialPrices = Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, assets.masks, {
  bid: 0.99,
  ask: 1.01
});
var upgrades = Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, assets.masks, {
  employees: 'masks-employees',
  sewing: 'masks-sewing-machines',
  conveyor: 'masks-conveyor',
  printer: 'masks-printer',
  factory: 'masks-factory',
  fullAutomation: 'masks-full-automation'
});
var upgradeSpecs = (_upgradeSpecs = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_upgradeSpecs, upgrades[assets.masks].employees, {
  label: 'Employees',
  initialCost: 10,
  productionRate: 0.05
}), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_upgradeSpecs, upgrades[assets.masks].sewing, {
  label: 'Sewing machines',
  initialCost: 250,
  productionRate: 1
}), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_upgradeSpecs, upgrades[assets.masks].conveyor, {
  label: 'Conveyor belt',
  initialCost: 1800,
  productionRate: 10
}), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_upgradeSpecs, upgrades[assets.masks].printer, {
  label: '3D printers',
  initialCost: 9001,
  productionRate: 109
}), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_upgradeSpecs, upgrades[assets.masks].factory, {
  label: 'Factory',
  initialCost: 220000,
  productionRate: 1200
}), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_upgradeSpecs, upgrades[assets.masks].fullAutomation, {
  label: 'Full automation',
  initialCost: 12500000,
  productionRate: 49999
}), _upgradeSpecs);
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