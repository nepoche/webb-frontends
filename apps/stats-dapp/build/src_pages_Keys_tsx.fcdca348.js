"use strict";
((typeof self !== 'undefined' ? self : this)["webpackChunk_nepoche_stats_dapp"] = (typeof self !== 'undefined' ? self : this)["webpackChunk_nepoche_stats_dapp"] || []).push([["src_pages_Keys_tsx"],{

/***/ "./src/pages/Keys.tsx":
/*!****************************!*\
  !*** ./src/pages/Keys.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@nepoche/stats-dapp/provider/stats-provider'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _nepoche_webb_ui_components_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nepoche/webb-ui-components/icons */ "../../libs/webb-ui-components/src/icons/index.ts");
/* harmony import */ var _nepoche_webb_ui_components_typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nepoche/webb-ui-components/typography */ "../../libs/webb-ui-components/src/typography/index.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "../../node_modules/react-router-dom/node_modules/react-router/dist/index.js");
/* harmony import */ var _containers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../containers */ "./src/containers/index.ts");
/* harmony import */ var _provider_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../provider/hooks */ "./src/provider/hooks/index.ts");
/* provided dependency */ var React = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../node_modules/react-refresh/runtime.js */ "../../node_modules/react-refresh/runtime.js");

var _jsxFileName = "/Users/nathanbarnavon/workspace/test/nepoche/webb-frontends/apps/stats-dapp/src/pages/Keys.tsx",
  _this = undefined,
  _s = __webpack_require__.$Refresh$.signature();







var Keys = function Keys() {
  _s();
  var _useActiveKeys = (0,_provider_hooks__WEBPACK_IMPORTED_MODULE_5__.useActiveKeys)(),
    error = _useActiveKeys.error,
    isFailed = _useActiveKeys.isFailed,
    isLoading = _useActiveKeys.isLoading,
    data = _useActiveKeys.val;
  var _useMemo = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(function () {
      return {
        currentKey: data ? data[0] : null,
        nextKey: data ? data[1] : null
      };
    }, [data]),
    currentKey = _useMemo.currentKey,
    nextKey = _useMemo.nextKey;
  var _useStatsContext = Object(function webpackMissingModule() { var e = new Error("Cannot find module '@nepoche/stats-dapp/provider/stats-provider'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(),
    time = _useStatsContext.time;
  if (isLoading || currentKey === null || nextKey === null) {
    return /*#__PURE__*/React.createElement("div", {
      className: "flex items-center justify-center min-h-screen",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 7
      }
    }, /*#__PURE__*/React.createElement(_nepoche_webb_ui_components_icons__WEBPACK_IMPORTED_MODULE_1__.Spinner, {
      size: "xl",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }
    }), ";");
  }
  if (isFailed) {
    return /*#__PURE__*/React.createElement("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 7
      }
    }, /*#__PURE__*/React.createElement(_nepoche_webb_ui_components_typography__WEBPACK_IMPORTED_MODULE_2__.Typography, {
      variant: "body1",
      className: "text-red-100 dark:text-red-10",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }
    }, error !== null && error !== void 0 ? error : 'Unexpected error'));
  }
  return /*#__PURE__*/React.createElement("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 5
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex space-x-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }
  }, /*#__PURE__*/React.createElement(_containers__WEBPACK_IMPORTED_MODULE_4__.KeyStatusCardContainer, {
    now: time,
    keyType: "current",
    data: currentKey,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  }), /*#__PURE__*/React.createElement(_containers__WEBPACK_IMPORTED_MODULE_4__.KeyStatusCardContainer, {
    now: time,
    keyType: "next",
    data: nextKey,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "mt-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }
  }, /*#__PURE__*/React.createElement(_containers__WEBPACK_IMPORTED_MODULE_4__.KeygenTable, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 9
    }
  })), /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Outlet, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }
  }));
};
_s(Keys, "LQQ0GjunX0JvVZN7eH2Skp3YiKk=", false, function () {
  return [_provider_hooks__WEBPACK_IMPORTED_MODULE_5__.useActiveKeys, Object(function webpackMissingModule() { var e = new Error("Cannot find module '@nepoche/stats-dapp/provider/stats-provider'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())];
});
_c = Keys;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Keys);
var _c;
__webpack_require__.$Refresh$.register(_c, "Keys");

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (false) {}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ })

}]);
//# sourceMappingURL=src_pages_Keys_tsx.fcdca348.js.map