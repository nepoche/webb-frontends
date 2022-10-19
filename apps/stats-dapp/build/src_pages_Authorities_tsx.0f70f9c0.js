"use strict";
((typeof self !== 'undefined' ? self : this)["webpackChunk_nepoche_stats_dapp"] = (typeof self !== 'undefined' ? self : this)["webpackChunk_nepoche_stats_dapp"] || []).push([["src_pages_Authorities_tsx"],{

/***/ "./src/pages/Authorities.tsx":
/*!***********************************!*\
  !*** ./src/pages/Authorities.tsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Users_nathanbarnavon_workspace_test_nepoche_webb_frontends_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/@babel/runtime/helpers/slicedToArray.js */ "../../node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _Users_nathanbarnavon_workspace_test_nepoche_webb_frontends_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_nathanbarnavon_workspace_test_nepoche_webb_frontends_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tanstack_react_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @tanstack/react-table */ "../../node_modules/@tanstack/react-table/build/umd/index.production.js");
/* harmony import */ var _tanstack_react_table__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_tanstack_react_table__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _provider_stats_provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../provider/stats-provider */ "./src/provider/stats-provider.tsx");
/* harmony import */ var _nepoche_webb_ui_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nepoche/webb-ui-components */ "../../libs/webb-ui-components/src/index.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "../../node_modules/react-router-dom/dist/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ "../../node_modules/react-router-dom/node_modules/react-router/dist/index.js");
/* harmony import */ var _containers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../containers */ "./src/containers/index.ts");
/* harmony import */ var _provider_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../provider/hooks */ "./src/provider/hooks/index.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils */ "./src/utils/index.ts");
/* provided dependency */ var React = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../node_modules/react-refresh/runtime.js */ "../../node_modules/react-refresh/runtime.js");


var _jsxFileName = "/Users/nathanbarnavon/workspace/test/nepoche/webb-frontends/apps/stats-dapp/src/pages/Authorities.tsx",
  _this = undefined,
  _s = __webpack_require__.$Refresh$.signature();












var columnHelper = (0,_tanstack_react_table__WEBPACK_IMPORTED_MODULE_7__.createColumnHelper)();
var columns = [columnHelper.accessor('stats', {
  header: 'Status',
  cell: function cell(props) {
    return /*#__PURE__*/React.createElement(_nepoche_webb_ui_components__WEBPACK_IMPORTED_MODULE_2__.Chip, {
      color: (0,_utils__WEBPACK_IMPORTED_MODULE_6__.getChipColorByKeyType)(props.getValue()),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 22
      }
    }, props.getValue());
  }
}), columnHelper.accessor('session', {
  header: 'Session'
}), columnHelper.accessor('keyGen', {
  header: 'Keygen'
}), columnHelper.accessor('signature', {
  header: 'Signature'
}), columnHelper.accessor('authoritySet', {
  header: function header() {
    return /*#__PURE__*/React.createElement(_nepoche_webb_ui_components__WEBPACK_IMPORTED_MODULE_2__.Typography, {
      variant: "body1",
      fw: "bold",
      ta: "right",
      className: "!text-inherit",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 7
      }
    }, "Authority Set");
  },
  cell: function cell(props) {
    var authorities = props.getValue();
    if (!authorities.count) {
      return /*#__PURE__*/React.createElement(_nepoche_webb_ui_components__WEBPACK_IMPORTED_MODULE_2__.Typography, {
        variant: "body1",
        ta: "right",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 11
        }
      }, "-");
    }
    return /*#__PURE__*/React.createElement(_nepoche_webb_ui_components__WEBPACK_IMPORTED_MODULE_2__.AvatarGroup, {
      total: authorities.count,
      className: "justify-end",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 9
      }
    }, authorities.firstElements.map(function (au, idx) {
      return /*#__PURE__*/React.createElement(_nepoche_webb_ui_components__WEBPACK_IMPORTED_MODULE_2__.Avatar, {
        sourceVariant: 'address',
        key: "".concat(au).concat(idx),
        value: au,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 13
        }
      });
    }));
  }
})];
var Authorities = function Authorities() {
  _s();
  var _publicKey$start, _publicKey$end;
  var thresholds = (0,_provider_hooks__WEBPACK_IMPORTED_MODULE_5__.useThresholds)();
  var _useMemo = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(function () {
      if (thresholds.val) {
        return thresholds.val;
      }
      return [null, null];
    }, [thresholds]),
    _useMemo2 = _Users_nathanbarnavon_workspace_test_nepoche_webb_frontends_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0___default()(_useMemo, 2),
    threshold = _useMemo2[0],
    upComingThresholds = _useMemo2[1];
  var statsItems = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(function () {
    var _thresholds$val, _threshold$keyGen, _threshold$signature;
    var threshold = (_thresholds$val = thresholds.val) === null || _thresholds$val === void 0 ? void 0 : _thresholds$val[0];
    return [{
      titleProps: {
        title: 'Keygen',
        info: 'Keygen'
      },
      value: (_threshold$keyGen = threshold === null || threshold === void 0 ? void 0 : threshold.keyGen) !== null && _threshold$keyGen !== void 0 ? _threshold$keyGen : 'loading..'
    }, {
      titleProps: {
        title: 'Signature',
        info: 'Signature'
      },
      value: (_threshold$signature = threshold === null || threshold === void 0 ? void 0 : threshold.signature) !== null && _threshold$signature !== void 0 ? _threshold$signature : 'loading..'
    }];
  }, [thresholds]);
  var data = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(function () {
    return upComingThresholds ? Object.values(upComingThresholds) : [];
  }, [upComingThresholds]);
  var table = (0,_tanstack_react_table__WEBPACK_IMPORTED_MODULE_7__.useReactTable)({
    columns: columns,
    data: data,
    getCoreRowModel: (0,_tanstack_react_table__WEBPACK_IMPORTED_MODULE_7__.getCoreRowModel)(),
    filterFns: {
      fuzzy: _nepoche_webb_ui_components__WEBPACK_IMPORTED_MODULE_2__.fuzzyFilter
    }
  });
  var _ref = threshold !== null && threshold !== void 0 ? threshold : {},
    keyGen = _ref.keyGen,
    publicKey = _ref.publicKey,
    signature = _ref.signature;
  var isLoading = thresholds.isLoading || keyGen === undefined || signature === undefined || publicKey === undefined;
  var _useStatsContext = (0,_provider_stats_provider__WEBPACK_IMPORTED_MODULE_1__.useStatsContext)(),
    time = _useStatsContext.time;
  return /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col space-y-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 5
    }
  }, /*#__PURE__*/React.createElement(_nepoche_webb_ui_components__WEBPACK_IMPORTED_MODULE_2__.Card, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 7
    }
  }, /*#__PURE__*/React.createElement(_nepoche_webb_ui_components__WEBPACK_IMPORTED_MODULE_2__.TitleWithInfo, {
    title: "Network Thresholds",
    info: "Network Thresholds",
    variant: "h5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 9
    }
  }), isLoading ? /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-center min-w-full min-h-[235px]",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 11
    }
  }, /*#__PURE__*/React.createElement(_nepoche_webb_ui_components__WEBPACK_IMPORTED_MODULE_2__.Spinner, {
    size: "xl",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 13
    }
  })) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_nepoche_webb_ui_components__WEBPACK_IMPORTED_MODULE_2__.Stats, {
    items: statsItems,
    className: "pb-0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 13
    }
  }), /*#__PURE__*/React.createElement(_nepoche_webb_ui_components__WEBPACK_IMPORTED_MODULE_2__.TimeProgress, {
    startTime: (_publicKey$start = publicKey.start) !== null && _publicKey$start !== void 0 ? _publicKey$start : null,
    endTime: (_publicKey$end = publicKey.end) !== null && _publicKey$end !== void 0 ? _publicKey$end : null,
    now: time,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 13
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 13
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center space-x-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 15
    }
  }, /*#__PURE__*/React.createElement(_nepoche_webb_ui_components__WEBPACK_IMPORTED_MODULE_2__.Chip, {
    color: "green",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 17
    }
  }, publicKey.isCurrent ? 'Current' : 'Next'), /*#__PURE__*/React.createElement(_nepoche_webb_ui_components__WEBPACK_IMPORTED_MODULE_2__.LabelWithValue, {
    label: "session:",
    value: publicKey.session,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 17
    }
  }), /*#__PURE__*/React.createElement(_nepoche_webb_ui_components__WEBPACK_IMPORTED_MODULE_2__.Typography, {
    variant: "body2",
    fw: "semibold",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 17
    }
  }, "/"), /*#__PURE__*/React.createElement(_nepoche_webb_ui_components__WEBPACK_IMPORTED_MODULE_2__.KeyValueWithButton, {
    size: "sm",
    keyValue: publicKey.compressed,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 17
    }
  })), /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Link, {
    to: "history",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 15
    }
  }, /*#__PURE__*/React.createElement(_nepoche_webb_ui_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    variant: "link",
    size: "sm",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 17
    }
  }, "View history"))))), /*#__PURE__*/React.createElement(_nepoche_webb_ui_components__WEBPACK_IMPORTED_MODULE_2__.CardTable, {
    titleProps: {
      title: 'Upcoming Thresholds',
      info: 'Upcoming Thresholds',
      variant: 'h5'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 7
    }
  }, isLoading ? /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-center min-w-full min-h-[235px]",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 11
    }
  }, /*#__PURE__*/React.createElement(_nepoche_webb_ui_components__WEBPACK_IMPORTED_MODULE_2__.Spinner, {
    size: "xl",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 13
    }
  })) : /*#__PURE__*/React.createElement(_nepoche_webb_ui_components__WEBPACK_IMPORTED_MODULE_2__.Table, {
    tableProps: table,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 11
    }
  })), /*#__PURE__*/React.createElement(_containers__WEBPACK_IMPORTED_MODULE_4__.AuthoritiesTable, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 7
    }
  }), /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Outlet, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 7
    }
  }));
};
_s(Authorities, "1yBZxRxwY0Xa/EPSDfBtFdp7qYM=", false, function () {
  return [_provider_hooks__WEBPACK_IMPORTED_MODULE_5__.useThresholds, _tanstack_react_table__WEBPACK_IMPORTED_MODULE_7__.useReactTable, _provider_stats_provider__WEBPACK_IMPORTED_MODULE_1__.useStatsContext];
});
_c = Authorities;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Authorities);
var _c;
__webpack_require__.$Refresh$.register(_c, "Authorities");

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
//# sourceMappingURL=src_pages_Authorities_tsx.0f70f9c0.js.map