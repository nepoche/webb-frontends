"use strict";
((typeof self !== 'undefined' ? self : this)["webpackChunk_nepoche_stats_dapp"] = (typeof self !== 'undefined' ? self : this)["webpackChunk_nepoche_stats_dapp"] || []).push([["src_pages_Proposals_tsx"],{

/***/ "./src/pages/Proposals.tsx":
/*!*********************************!*\
  !*** ./src/pages/Proposals.tsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Users_nathanbarnavon_workspace_test_nepoche_webb_frontends_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/@babel/runtime/helpers/defineProperty.js */ "../../node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _Users_nathanbarnavon_workspace_test_nepoche_webb_frontends_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_nathanbarnavon_workspace_test_nepoche_webb_frontends_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_nathanbarnavon_workspace_test_nepoche_webb_frontends_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/@babel/runtime/helpers/slicedToArray.js */ "../../node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _Users_nathanbarnavon_workspace_test_nepoche_webb_frontends_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_nathanbarnavon_workspace_test_nepoche_webb_frontends_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tanstack_react_table__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @tanstack/react-table */ "../../node_modules/@tanstack/react-table/build/umd/index.production.js");
/* harmony import */ var _tanstack_react_table__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_tanstack_react_table__WEBPACK_IMPORTED_MODULE_12__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@nepoche/stats-dapp/provider/stats-provider'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _nepoche_webb_ui_components_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nepoche/webb-ui-components/components */ "../../libs/webb-ui-components/src/components/index.ts");
/* harmony import */ var _nepoche_webb_ui_components_components_Filter_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nepoche/webb-ui-components/components/Filter/utils */ "../../libs/webb-ui-components/src/components/Filter/utils.ts");
/* harmony import */ var _nepoche_webb_ui_components_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nepoche/webb-ui-components/icons */ "../../libs/webb-ui-components/src/icons/index.ts");
/* harmony import */ var _nepoche_webb_ui_components_typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nepoche/webb-ui-components/typography */ "../../libs/webb-ui-components/src/typography/index.ts");
/* harmony import */ var _nepoche_webb_ui_components_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nepoche/webb-ui-components/utils */ "../../libs/webb-ui-components/src/utils/index.ts");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! chart.js */ "../../node_modules/chart.js/dist/chart.mjs");
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ethers */ "../../node_modules/@ethersproject/bignumber/lib.esm/bignumber.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-router-dom */ "../../node_modules/react-router-dom/dist/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-router-dom */ "../../node_modules/react-router-dom/node_modules/react-router/dist/index.js");
/* harmony import */ var _containers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../containers */ "./src/containers/index.ts");
/* harmony import */ var _provider_hooks__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../provider/hooks */ "./src/provider/hooks/index.ts");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../node_modules/react-refresh/runtime.js */ "../../node_modules/react-refresh/runtime.js");



var _jsxFileName = "/Users/nathanbarnavon/workspace/test/nepoche/webb-frontends/apps/stats-dapp/src/pages/Proposals.tsx",
  _this = undefined,
  _s = __webpack_require__.$Refresh$.signature();













var columnHelper = (0,_tanstack_react_table__WEBPACK_IMPORTED_MODULE_12__.createColumnHelper)();
var columns = [columnHelper.accessor('height', {
  header: 'Height',
  cell: function cell(props) {
    return ethers__WEBPACK_IMPORTED_MODULE_13__.BigNumber.from(props.getValue()).div(1000).toBigInt().toLocaleString();
  }
}), columnHelper.accessor('type', {
  header: 'Type'
}), columnHelper.accessor('txHash', {
  header: 'Tx Hash',
  cell: function cell(props) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default().createElement("div", {
      className: "flex items-center space-x-1",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default().createElement(_nepoche_webb_ui_components_components__WEBPACK_IMPORTED_MODULE_3__.LabelWithValue, {
      labelVariant: "body3",
      label: "tx hash:",
      isHiddenLabel: true,
      value: (0,_nepoche_webb_ui_components_utils__WEBPACK_IMPORTED_MODULE_7__.shortenHex)(props.getValue(), 3),
      valueTooltip: props.getValue(),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default().createElement("a", {
      href: "#",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default().createElement(_nepoche_webb_ui_components_icons__WEBPACK_IMPORTED_MODULE_5__.ExternalLinkLine, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 11
      }
    })));
  }
}), columnHelper.accessor('chain', {
  header: 'Chain',
  cell: function cell() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default().createElement(_nepoche_webb_ui_components_icons__WEBPACK_IMPORTED_MODULE_5__.TokenIcon, {
      name: "eth",
      size: "lg",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 17
      }
    });
  }
}), columnHelper.accessor('id', {
  header: '',
  cell: function cell(props) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default().createElement(_nepoche_webb_ui_components_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
      variant: "link",
      size: "sm",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_14__.Link, {
      to: "drawer/".concat(props.getValue()),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 9
      }
    }, "Details"));
  }
})];
chart_js__WEBPACK_IMPORTED_MODULE_8__.Chart.register(chart_js__WEBPACK_IMPORTED_MODULE_8__.ArcElement, chart_js__WEBPACK_IMPORTED_MODULE_8__.Legend);
var Proposals = function Proposals() {
  _s();
  var _useStatsContext = Object(function webpackMissingModule() { var e = new Error("Cannot find module '@nepoche/stats-dapp/provider/stats-provider'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(),
    blockTime = _useStatsContext.blockTime,
    _useStatsContext$meta = _useStatsContext.metaData,
    activeSession = _useStatsContext$meta.activeSession,
    lastProcessBlock = _useStatsContext$meta.lastProcessBlock;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)('Day'),
    _useState2 = _Users_nathanbarnavon_workspace_test_nepoche_webb_frontends_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1___default()(_useState, 2),
    timeRange = _useState2[0],
    setTimeRange = _useState2[1];
  var range = (0,react__WEBPACK_IMPORTED_MODULE_9__.useMemo)(function () {
    var rangeTimeSec = undefined;
    switch (timeRange) {
      case 'Day':
        rangeTimeSec = 24 * 60 * 60;
        break;
      case 'Week':
        rangeTimeSec = 24 * 60 * 60 * 7;
        break;
      case 'Year':
        rangeTimeSec = 24 * 60 * 60 * 365;
        break;
      case 'All Time':
        rangeTimeSec = undefined;
    }
    if (!rangeTimeSec) {
      return {
        start: 0,
        end: Number(lastProcessBlock)
      };
    }
    var end = Number(lastProcessBlock);
    var start = Math.floor(Math.max(Number(lastProcessBlock) - rangeTimeSec / blockTime, 0));
    return {
      end: end,
      start: start
    };
  }, [timeRange, lastProcessBlock, blockTime]);
  var overview = (0,_provider_hooks__WEBPACK_IMPORTED_MODULE_11__.useProposalsOverview)(activeSession, range);
  var data = (0,react__WEBPACK_IMPORTED_MODULE_9__.useMemo)(function () {
    if (overview.val) {
      return overview.val.openProposals.length > 5 ? overview.val.openProposals.slice(0, 5) : overview.val.openProposals;
    }
    return [];
  }, [overview]);
  var statsMap = (0,react__WEBPACK_IMPORTED_MODULE_9__.useMemo)(function () {
    var _ref2;
    if (overview.val) {
      var _ref;
      var _overview$val$stats = overview.val.stats,
        accepted = _overview$val$stats.accepted,
        open = _overview$val$stats.open,
        rejected = _overview$val$stats.rejected,
        signed = _overview$val$stats.signed;
      return _ref = {}, _Users_nathanbarnavon_workspace_test_nepoche_webb_frontends_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(_ref, _provider_hooks__WEBPACK_IMPORTED_MODULE_11__.ProposalStatus.Signed, signed), _Users_nathanbarnavon_workspace_test_nepoche_webb_frontends_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(_ref, _provider_hooks__WEBPACK_IMPORTED_MODULE_11__.ProposalStatus.Rejected, rejected), _Users_nathanbarnavon_workspace_test_nepoche_webb_frontends_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(_ref, _provider_hooks__WEBPACK_IMPORTED_MODULE_11__.ProposalStatus.Open, open), _Users_nathanbarnavon_workspace_test_nepoche_webb_frontends_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(_ref, _provider_hooks__WEBPACK_IMPORTED_MODULE_11__.ProposalStatus.Accepted, accepted), _Users_nathanbarnavon_workspace_test_nepoche_webb_frontends_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(_ref, _provider_hooks__WEBPACK_IMPORTED_MODULE_11__.ProposalStatus.FailedToExecute, 0), _Users_nathanbarnavon_workspace_test_nepoche_webb_frontends_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(_ref, _provider_hooks__WEBPACK_IMPORTED_MODULE_11__.ProposalStatus.Executed, 0), _Users_nathanbarnavon_workspace_test_nepoche_webb_frontends_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(_ref, _provider_hooks__WEBPACK_IMPORTED_MODULE_11__.ProposalStatus.Removed, 0), _ref;
    }
    return _ref2 = {}, _Users_nathanbarnavon_workspace_test_nepoche_webb_frontends_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(_ref2, _provider_hooks__WEBPACK_IMPORTED_MODULE_11__.ProposalStatus.Signed, 0), _Users_nathanbarnavon_workspace_test_nepoche_webb_frontends_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(_ref2, _provider_hooks__WEBPACK_IMPORTED_MODULE_11__.ProposalStatus.Rejected, 0), _Users_nathanbarnavon_workspace_test_nepoche_webb_frontends_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(_ref2, _provider_hooks__WEBPACK_IMPORTED_MODULE_11__.ProposalStatus.Open, 0), _Users_nathanbarnavon_workspace_test_nepoche_webb_frontends_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(_ref2, _provider_hooks__WEBPACK_IMPORTED_MODULE_11__.ProposalStatus.Accepted, 0), _Users_nathanbarnavon_workspace_test_nepoche_webb_frontends_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(_ref2, _provider_hooks__WEBPACK_IMPORTED_MODULE_11__.ProposalStatus.FailedToExecute, 0), _Users_nathanbarnavon_workspace_test_nepoche_webb_frontends_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(_ref2, _provider_hooks__WEBPACK_IMPORTED_MODULE_11__.ProposalStatus.Executed, 0), _Users_nathanbarnavon_workspace_test_nepoche_webb_frontends_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(_ref2, _provider_hooks__WEBPACK_IMPORTED_MODULE_11__.ProposalStatus.Removed, 0), _ref2;
  }, [overview]);
  var statsItems = (0,react__WEBPACK_IMPORTED_MODULE_9__.useMemo)(function () {
    var proposalsThreshold = overview.val ? overview.val.thresholds.proposal : 'NaN';
    var proposers = overview.val ? overview.val.thresholds.proposers : 'NaN';
    return [{
      titleProps: {
        title: 'Proposal Threshold',
        info: 'Proposal Threshold'
      },
      value: proposalsThreshold
    }, {
      titleProps: {
        title: 'Proposers',
        info: 'Proposers'
      },
      value: proposers
    }];
  }, [overview]);
  var table = (0,_tanstack_react_table__WEBPACK_IMPORTED_MODULE_12__.useReactTable)({
    columns: columns,
    data: data,
    getCoreRowModel: (0,_tanstack_react_table__WEBPACK_IMPORTED_MODULE_12__.getCoreRowModel)(),
    filterFns: {
      fuzzy: _nepoche_webb_ui_components_components_Filter_utils__WEBPACK_IMPORTED_MODULE_4__.fuzzyFilter
    }
  });
  var noOpenProposals = (0,react__WEBPACK_IMPORTED_MODULE_9__.useMemo)(function () {
    return data.length === 0;
  }, [data]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default().createElement("div", {
    className: "flex flex-col space-y-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default().createElement(_nepoche_webb_ui_components_components__WEBPACK_IMPORTED_MODULE_3__.Card, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default().createElement(_nepoche_webb_ui_components_components__WEBPACK_IMPORTED_MODULE_3__.TitleWithInfo, {
    title: "Proposals Status",
    variant: "h5",
    info: "Proposals Status",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default().createElement(_nepoche_webb_ui_components_components__WEBPACK_IMPORTED_MODULE_3__.Stats, {
    items: statsItems,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 9
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default().createElement("div", {
    className: "flex space-x-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default().createElement(_containers__WEBPACK_IMPORTED_MODULE_10__.DonutChartContainer, {
    timeRange: timeRange,
    setTimeRange: setTimeRange,
    isLoading: overview.isLoading,
    statsMap: statsMap,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default().createElement(_nepoche_webb_ui_components_components__WEBPACK_IMPORTED_MODULE_3__.CardTable, {
    titleProps: {
      title: 'Open Proposals'
    },
    className: "flex flex-col grow",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 9
    }
  }, noOpenProposals ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default().createElement("div", {
    className: "flex items-center justify-center min-w-full grow",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default().createElement(_nepoche_webb_ui_components_typography__WEBPACK_IMPORTED_MODULE_6__.Typography, {
    ta: 'center',
    variant: 'h4',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 15
    }
  }, "No open proposals")) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default().createElement(_nepoche_webb_ui_components_components__WEBPACK_IMPORTED_MODULE_3__.Table, {
    tableProps: table,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199,
      columnNumber: 13
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default().createElement(_containers__WEBPACK_IMPORTED_MODULE_10__.ProposalsTable, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_15__.Outlet, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 7
    }
  }));
};
_s(Proposals, "SiCKo2lrRf6ain0ZFO0nd7hOKnI=", false, function () {
  return [Object(function webpackMissingModule() { var e = new Error("Cannot find module '@nepoche/stats-dapp/provider/stats-provider'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), _provider_hooks__WEBPACK_IMPORTED_MODULE_11__.useProposalsOverview, _tanstack_react_table__WEBPACK_IMPORTED_MODULE_12__.useReactTable];
});
_c = Proposals;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Proposals);
var _c;
__webpack_require__.$Refresh$.register(_c, "Proposals");

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
//# sourceMappingURL=src_pages_Proposals_tsx.fc4b5b31.js.map