"use strict";
((typeof self !== 'undefined' ? self : this)["webpackChunk_nepoche_stats_dapp"] = (typeof self !== 'undefined' ? self : this)["webpackChunk_nepoche_stats_dapp"] || []).push([["src_pages_KeyDetailDrawer_tsx"],{

/***/ "./src/pages/KeyDetailDrawer.tsx":
/*!***************************************!*\
  !*** ./src/pages/KeyDetailDrawer.tsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _nepoche_webb_ui_components_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nepoche/webb-ui-components/components */ "../../libs/webb-ui-components/src/components/index.ts");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "../../node_modules/react-router-dom/node_modules/react-router/dist/index.js");
/* harmony import */ var _containers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../containers */ "./src/containers/index.ts");
/* provided dependency */ var React = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../node_modules/react-refresh/runtime.js */ "../../node_modules/react-refresh/runtime.js");

var _jsxFileName = "/Users/nathanbarnavon/workspace/test/nepoche/webb-frontends/apps/stats-dapp/src/pages/KeyDetailDrawer.tsx",
  _this = undefined,
  _s = __webpack_require__.$Refresh$.signature();



var KeyDetailDrawer = function KeyDetailDrawer() {
  _s();
  var nagivate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useNavigate)();
  return /*#__PURE__*/React.createElement(_nepoche_webb_ui_components_components__WEBPACK_IMPORTED_MODULE_0__.Drawer, {
    defaultOpen: true,
    onOpenChange: function onOpenChange(isOpen) {
      return !isOpen && nagivate('/keys');
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }, /*#__PURE__*/React.createElement(_nepoche_webb_ui_components_components__WEBPACK_IMPORTED_MODULE_0__.DrawerContent, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }, /*#__PURE__*/React.createElement(_containers__WEBPACK_IMPORTED_MODULE_1__.KeyDetail, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  })));
};
_s(KeyDetailDrawer, "u4zbe8uB2x+Tz4nXYYpE6f1mqBo=", false, function () {
  return [react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useNavigate];
});
_c = KeyDetailDrawer;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (KeyDetailDrawer);
var _c;
__webpack_require__.$Refresh$.register(_c, "KeyDetailDrawer");

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
//# sourceMappingURL=src_pages_KeyDetailDrawer_tsx.950f98e3.js.map