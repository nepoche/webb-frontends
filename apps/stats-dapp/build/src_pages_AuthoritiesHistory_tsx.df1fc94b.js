"use strict";
((typeof self !== 'undefined' ? self : this)["webpackChunk_nepoche_stats_dapp"] = (typeof self !== 'undefined' ? self : this)["webpackChunk_nepoche_stats_dapp"] || []).push([["src_pages_AuthoritiesHistory_tsx"],{

/***/ "./src/pages/AuthoritiesHistory.tsx":
/*!******************************************!*\
  !*** ./src/pages/AuthoritiesHistory.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Users_nathanbarnavon_workspace_test_nepoche_webb_frontends_node_modules_babel_runtime_helpers_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/@babel/runtime/helpers/toConsumableArray.js */ "../../node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _Users_nathanbarnavon_workspace_test_nepoche_webb_frontends_node_modules_babel_runtime_helpers_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_nathanbarnavon_workspace_test_nepoche_webb_frontends_node_modules_babel_runtime_helpers_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_nathanbarnavon_workspace_test_nepoche_webb_frontends_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/@babel/runtime/helpers/slicedToArray.js */ "../../node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _Users_nathanbarnavon_workspace_test_nepoche_webb_frontends_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_nathanbarnavon_workspace_test_nepoche_webb_frontends_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_nathanbarnavon_workspace_test_nepoche_webb_frontends_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/@babel/runtime/helpers/defineProperty.js */ "../../node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _Users_nathanbarnavon_workspace_test_nepoche_webb_frontends_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_nathanbarnavon_workspace_test_nepoche_webb_frontends_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ngneat_falso__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngneat/falso */ "./node_modules/@ngneat/falso/index.esm.js");
/* harmony import */ var _nepoche_webb_ui_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nepoche/webb-ui-components */ "../../libs/webb-ui-components/src/index.ts");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! chart.js */ "../../node_modules/chart.js/dist/chart.mjs");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ "../../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-chartjs-2 */ "../../node_modules/react-chartjs-2/dist/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ "../../node_modules/react-router-dom/dist/index.js");
/* harmony import */ var tailwindcss_resolveConfig__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tailwindcss/resolveConfig */ "../../node_modules/tailwindcss/resolveConfig.js");
/* harmony import */ var tailwindcss_resolveConfig__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(tailwindcss_resolveConfig__WEBPACK_IMPORTED_MODULE_7__);
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../node_modules/react-refresh/runtime.js */ "../../node_modules/react-refresh/runtime.js");




var _jsxFileName = "/Users/nathanbarnavon/workspace/test/nepoche/webb-frontends/apps/stats-dapp/src/pages/AuthoritiesHistory.tsx",
  _fullConfig$theme,
  _this = undefined,
  _s = __webpack_require__.$Refresh$.signature();












var tailwindConfig = {
  "mode": "jit",
  "content": ["/Users/nathanbarnavon/workspace/test/nepoche/webb-frontends/apps/stats-dapp/src/pages/{src,pages,components}/**/*!(*.stories|*.spec).{ts,tsx,html}", "/Users/nathanbarnavon/workspace/test/nepoche/webb-frontends/libs/react-environment/src/**/!(*.stories|*.spec).{tsx,jsx,js,html}", "/Users/nathanbarnavon/workspace/test/nepoche/webb-frontends/libs/ui-hooks/src/**/!(*.stories|*.spec).{tsx,jsx,js,html}", "/Users/nathanbarnavon/workspace/test/nepoche/webb-frontends/libs/dapp-types/src/**/!(*.stories|*.spec).{tsx,jsx,js,html}", "/Users/nathanbarnavon/workspace/test/nepoche/webb-frontends/libs/webb-ui-components/src/**/!(*.stories|*.spec).{tsx,jsx,js,html}", "/Users/nathanbarnavon/workspace/test/nepoche/webb-frontends/libs/ui-components/src/**/!(*.stories|*.spec).{tsx,jsx,js,html}", "/Users/nathanbarnavon/workspace/test/nepoche/webb-frontends/libs/styled-components-theme/src/**/!(*.stories|*.spec).{tsx,jsx,js,html}", "/Users/nathanbarnavon/workspace/test/nepoche/webb-frontends/libs/responsive-utils/src/**/!(*.stories|*.spec).{tsx,jsx,js,html}"],
  "darkMode": "class",
  "theme": {
    "extend": {
      "colors": {
        "mono": {
          "0": "#fff",
          "20": "#F7F8F7",
          "40": "#E2E5EB",
          "60": "#D3D8E2",
          "80": "#C2C8D4",
          "100": "#9CA0B0",
          "120": "#6C7180",
          "140": "#4E5463",
          "160": "#3A3E53",
          "170": "#2E3244",
          "180": "#2B2F40",
          "190": "#252836",
          "200": "#1F1D2B"
        },
        "purple": {
          "0": "#F6F4FF",
          "10": "#F6F4FF",
          "20": "#D5CDFF",
          "30": "#E7E2FF",
          "40": "#B5A9F2",
          "50": "#C6BBFA",
          "60": "#9F90EA",
          "70": "#624FBE",
          "80": "#7968D0",
          "90": "#624FBE",
          "100": "#4B3AA4",
          "110": "#37268D",
          "120": "#2E284D",
          "DEFAULT": "#9F90EA"
        },
        "blue": {
          "0": "#ECF4FF",
          "10": "#D5E6FF",
          "20": "#B8D6FF",
          "30": "#9BC5FC",
          "40": "#81B3F7",
          "50": "#67A0EE",
          "60": "#4e8cdf",
          "70": "#3D7BCE",
          "80": "#2864B5",
          "90": "#1C529A",
          "100": "#0F4285",
          "110": "#153A69",
          "120": "#252D39",
          "DEFAULT": "#4e8cdf"
        },
        "green": {
          "0": "#E5FFE7",
          "10": "#C7FFCC",
          "20": "#ACF1B3",
          "30": "#85DC8E",
          "40": "#6CCA76",
          "50": "#4CB457",
          "60": "#3B9E46",
          "70": "#288E32",
          "80": "#038311",
          "90": "#00710C",
          "100": "#01550A",
          "110": "#0F4214",
          "120": "#0F3413",
          "DEFAULT": "#038311"
        },
        "yellow": {
          "0": "#FFF5D8",
          "10": "#FFF2CA",
          "20": "#FFEAA6",
          "30": "#FFE07C",
          "40": "#F8D567",
          "50": "#F9CE46",
          "60": "#F4C328",
          "70": "#F4C328",
          "80": "#D2A618",
          "90": "#AF8C1E",
          "100": "#8D721A",
          "110": "#634F11",
          "120": "#3F3517",
          "DEFAULT": "#F4C328"
        },
        "red": {
          "0": "#FFEDE4",
          "10": "#FFCEB7",
          "20": "#FFB18B",
          "30": "#FF874D",
          "40": "#FC6015",
          "50": "#EF570D",
          "60": "#DD4800",
          "70": "#C64A17",
          "80": "#B6400F",
          "90": "#A0370B",
          "100": "#892F0A",
          "110": "#622910",
          "120": "#422417",
          "DEFAULT": "#DD4800"
        }
      },
      "keyframes": {
        "scale-in": {
          "0%": {
            "opacity": 0,
            "transform": "scale(0)"
          },
          "100%": {
            "opacity": 1,
            "transform": "scale(1)"
          }
        },
        "slide-down": {
          "0%": {
            "opacity": 0,
            "transform": "translateY(-10px)"
          },
          "100%": {
            "opacity": 1,
            "transform": "translateY(0)"
          }
        },
        "slide-up": {
          "0%": {
            "opacity": 0,
            "transform": "translateY(10px)"
          },
          "100%": {
            "opacity": 1,
            "transform": "translateY(0)"
          }
        },
        "slide-up-fade": {
          "0%": {
            "opacity": 0,
            "transform": "translateY(2px)"
          },
          "100%": {
            "opacity": 1,
            "transform": "translateY(0)"
          }
        },
        "slide-right-fade": {
          "0%": {
            "opacity": 0,
            "transform": "translateX(-2px)"
          },
          "100%": {
            "opacity": 1,
            "transform": "translateX(0)"
          }
        },
        "slide-down-fade": {
          "0%": {
            "opacity": 0,
            "transform": "translateY(-2px)"
          },
          "100%": {
            "opacity": 1,
            "transform": "translateY(0)"
          }
        },
        "slide-left-fade": {
          "0%": {
            "opacity": 0,
            "transform": "translateX(2px)"
          },
          "100%": {
            "opacity": 1,
            "transform": "translateX(0)"
          }
        },
        "enter-from-right": {
          "0%": {
            "transform": "translateX(200px)",
            "opacity": 0
          },
          "100%": {
            "transform": "translateX(0)",
            "opacity": 1
          }
        },
        "enter-from-left": {
          "0%": {
            "transform": "translateX(-200px)",
            "opacity": 0
          },
          "100%": {
            "transform": "translateX(0)",
            "opacity": 1
          }
        },
        "exit-to-right": {
          "0%": {
            "transform": "translateX(0)",
            "opacity": 1
          },
          "100%": {
            "transform": "translateX(200px)",
            "opacity": 0
          }
        },
        "exit-to-left": {
          "0%": {
            "transform": "translateX(0)",
            "opacity": 1
          },
          "100%": {
            "transform": "translateX(-200px)",
            "opacity": 0
          }
        },
        "scale-in-content": {
          "0%": {
            "transform": "rotateX(-30deg) scale(0.9)",
            "opacity": 0
          },
          "100%": {
            "transform": "rotateX(0deg) scale(1)",
            "opacity": 1
          }
        },
        "scale-out-content": {
          "0%": {
            "transform": "rotateX(0deg) scale(1)",
            "opacity": 1
          },
          "100%": {
            "transform": "rotateX(-10deg) scale(0.95)",
            "opacity": 0
          }
        },
        "fade-in": {
          "0%": {
            "opacity": 0
          },
          "100%": {
            "opacity": 1
          }
        },
        "fade-out": {
          "0%": {
            "opacity": 1
          },
          "100%": {
            "opacity": 0
          }
        },
        "toast-hide": {
          "0%": {
            "opacity": 1
          },
          "100%": {
            "opacity": 0
          }
        },
        "toast-slide-in-right": {
          "0%": {
            "transform": "translateX(calc(100% + 1rem))"
          },
          "100%": {
            "transform": "translateX(0)"
          }
        },
        "toast-slide-in-bottom": {
          "0%": {
            "transform": "translateY(calc(100% + 1rem))"
          },
          "100%": {
            "transform": "translateY(0)"
          }
        },
        "toast-swipe-out": {
          "0%": {
            "transform": "translateX(var(--radix-toast-swipe-end-x))"
          },
          "100%": {
            "transform": "translateX(calc(100% + 1rem))"
          }
        },
        "drawer-content-right-slide-in": {
          "from": {
            "transform": "translate3d(100%,0,0)"
          },
          "to": {
            "transform": "translate3d(0,0,0)"
          }
        },
        "drawer-content-right-slide-out": {
          "from": {
            "transform": "translate3d(0,0,0)"
          },
          "to": {
            "transform": "translate3d(100%,0,0)"
          }
        }
      },
      "animation": {
        "scale-in": "scale-in 0.2s ease-in-out",
        "slide-down": "slide-down 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
        "slide-up": "slide-up 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
        "slide-up-fade": "slide-up-fade 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        "slide-right-fade": "slide-right-fade 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        "slide-down-fade": "slide-down-fade 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        "slide-left-fade": "slide-left-fade 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        "enter-from-right": "enter-from-right 0.25s ease",
        "enter-from-left": "enter-from-left 0.25s ease",
        "exit-to-right": "exit-to-right 0.25s ease",
        "exit-to-left": "exit-to-left 0.25s ease",
        "scale-in-content": "scale-in-content 0.2s ease",
        "scale-out-content": "scale-out-content 0.2s ease",
        "fade-in": "fade-in 0.2s ease",
        "fade-out": "fade-out 0.2s ease",
        "toast-hide": "toast-hide 100ms ease-in forwards",
        "toast-slide-in-right": "toast-slide-in-right 150ms cubic-bezier(0.16, 1, 0.3, 1)",
        "toast-slide-in-bottom": "toast-slide-in-bottom 150ms cubic-bezier(0.16, 1, 0.3, 1)",
        "toast-swipe-out": "toast-swipe-out 100ms ease-out forwards",
        "drawer-overlay-open": "fade-in 150ms cubic-bezier(0.22, 1, 0.36, 1)",
        "drawer-overlay-close": "fade-out 150ms cubic-bezier(0.22, 1, 0.36, 1)",
        "drawer-content-right-open": "drawer-content-right-slide-in 150ms cubic-bezier(0.22, 1, 0.36, 1)",
        "drawer-content-right-close": "drawer-content-right-slide-out 150ms cubic-bezier(0.22, 1, 0.36, 1)"
      }
    }
  },
  "variants": {
    "extends": {}
  },
  "plugins": [function (options) {
    return {
      __options: options,
      handler: pluginFunction(options),
      config: configFunction(options)
    };
  }, {
    "handler": function handler(_ref) {
      var addUtilities = _ref.addUtilities,
        addVariant = _ref.addVariant,
        e = _ref.e;
      options = options ? options : {
        variantPrefix: "radix"
      };
      var variantPrefix = options.variantPrefix === "" || typeof options.variantPrefix === "boolean" && options.variantPrefix === false ? "" : "".concat(options.variantPrefix, "-");
      var transformOrigins = ["context-menu", "dropdown-menu", "hover-card", "popover", "tooltip"];
      transformOrigins.forEach(function (transformOrigin) {
        addUtilities(_Users_nathanbarnavon_workspace_test_nepoche_webb_frontends_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()({}, ".origin-".concat(variantPrefix).concat(transformOrigin), {
          "transform-origin": "var(--radix-".concat(transformOrigin, "-content-transform-origin)")
        }));
      });
      dataAttributes.forEach(function (attributeValue) {
        var variantName = "".concat(variantPrefix).concat(attributeValue);
        var selector = "data-".concat(attributeValue);
        addVariant("".concat(variantName), function (_ref2) {
          var modifySelectors = _ref2.modifySelectors,
            separator = _ref2.separator;
          modifySelectors(function (_ref3) {
            var className = _ref3.className;
            return ".".concat(e("".concat(variantName).concat(separator).concat(className)), "[").concat(selector, "]");
          });
        });
        addVariant("group-".concat(variantName), function (_ref4) {
          var modifySelectors = _ref4.modifySelectors,
            separator = _ref4.separator;
          modifySelectors(function (_ref5) {
            var className = _ref5.className;
            return ".group[".concat(selector, "] .").concat(e("group-".concat(variantName).concat(separator).concat(className)));
          });
        });
        addVariant("peer-".concat(variantName), function (_ref6) {
          var modifySelectors = _ref6.modifySelectors,
            separator = _ref6.separator;
          modifySelectors(function (_ref7) {
            var className = _ref7.className;
            return ".peer[".concat(selector, "] ~ .").concat(e("peer-".concat(variantName).concat(separator).concat(className)));
          });
        });
      });
      Object.keys(namedDataAttributes).forEach(function (attributeName) {
        namedDataAttributes[attributeName].forEach(function (attributeValue) {
          var variantName = "".concat(variantPrefix).concat(attributeName, "-").concat(attributeValue);
          var selector = "data-".concat(attributeName, "=\"").concat(attributeValue, "\"");
          addVariant("".concat(variantName), function (_ref8) {
            var modifySelectors = _ref8.modifySelectors,
              separator = _ref8.separator;
            modifySelectors(function (_ref9) {
              var className = _ref9.className;
              return ".".concat(e("".concat(variantName).concat(separator).concat(className)), "[").concat(selector, "]");
            });
          });
          addVariant("group-".concat(variantName), function (_ref10) {
            var modifySelectors = _ref10.modifySelectors,
              separator = _ref10.separator;
            modifySelectors(function (_ref11) {
              var className = _ref11.className;
              return ".group[".concat(selector, "] .").concat(e("group-".concat(variantName).concat(separator).concat(className)));
            });
          });
          addVariant("peer-".concat(variantName), function (_ref12) {
            var modifySelectors = _ref12.modifySelectors,
              separator = _ref12.separator;
            modifySelectors(function (_ref13) {
              var className = _ref13.className;
              return ".peer[".concat(selector, "] ~ .").concat(e("peer-".concat(variantName).concat(separator).concat(className)));
            });
          });
        });
      });
      var dimensionAttributes = ["accordion-content", "collapsible-content", "navigation-menu-viewport"];
      dimensionAttributes.forEach(function (component) {
        addUtilities(_Users_nathanbarnavon_workspace_test_nepoche_webb_frontends_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()({}, ".w-".concat(variantPrefix).concat(component), {
          width: "var(--radix-".concat(component, "-width)")
        }));
        addUtilities(_Users_nathanbarnavon_workspace_test_nepoche_webb_frontends_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()({}, ".h-".concat(variantPrefix).concat(component), {
          height: "var(--radix-".concat(component, "-height)")
        }));
      });
      var tooltipAttributes = ["toast-swipe-end", "toast-swipe-move"];
      tooltipAttributes.forEach(function (component) {
        addUtilities(_Users_nathanbarnavon_workspace_test_nepoche_webb_frontends_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()({}, ".translate-x-".concat(variantPrefix).concat(component, "-x"), {
          transform: "translateX(var(--radix-".concat(component, "-x))")
        }));
        addUtilities(_Users_nathanbarnavon_workspace_test_nepoche_webb_frontends_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()({}, ".translate-y-".concat(variantPrefix).concat(component, "-y"), {
          transform: "translateY(var(--radix-".concat(component, "-y))")
        }));
      });
    },
    "config": {}
  }, {
    "__options": {
      "nocompatible": true
    },
    "handler": function handler(tailwind) {
      var areRoundedVariantsSpecified = function areRoundedVariantsSpecified() {
        if (tailwind.config('variants.scrollbar', []).includes('rounded')) {
          /* eslint-disable-next-line no-console */console.log('DEPRECATION: adding rounded classes via the variants array is deprecated. Use nocompatible mode instead (i.e. when adding the plugin, use `scrollbarPlugin({ nocompatible: true })`)');
          return true;
        }
        return false;
      };
      var themeColors = flattenColorPalette["default"](tailwind.theme('colors'));
      var colors = Object.fromEntries(Object.entries(themeColors).map(function (_ref14) {
        var _ref15 = _Users_nathanbarnavon_workspace_test_nepoche_webb_frontends_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1___default()(_ref14, 2),
          k = _ref15[0],
          v = _ref15[1];
        return [k, toColorValue["default"](v)];
      }));
      tailwind.addBase(BASE_STYLES);
      tailwind.addUtilities(SCROLLBAR_SIZE_UTILITIES);
      COMPONENTS.forEach(function (component) {
        tailwind.matchUtilities(_Users_nathanbarnavon_workspace_test_nepoche_webb_frontends_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()({}, "scrollbar-".concat(component), function scrollbar(value) {
          return _Users_nathanbarnavon_workspace_test_nepoche_webb_frontends_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()({}, "--scrollbar-".concat(component), "".concat(value, " !important"));
        }), {
          values: colors,
          type: 'color'
        });
      });
      if (options.nocompatible || areRoundedVariantsSpecified()) {
        COMPONENTS.forEach(function (component) {
          tailwind.matchUtilities(_Users_nathanbarnavon_workspace_test_nepoche_webb_frontends_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()({}, "scrollbar-".concat(component, "-rounded"), function scrollbarRounded(value) {
            return _Users_nathanbarnavon_workspace_test_nepoche_webb_frontends_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()({}, "&::-webkit-scrollbar-".concat(component), {
              'border-radius': value
            });
          }), {
            values: tailwind.theme('borderRadius')
          });
        });
      }
      var variantOverrides = [!flagEnabled(tailwind.config(), 'hoverOnlyWhenSupported') ? {
        variant: 'hover',
        defaultFormat: '&:hover',
        scrollbarFormat: '&'
      } : {
        variant: 'hover',
        defaultFormat: '@media (hover: hover) and (pointer: fine) { &:hover }',
        scrollbarFormat: '@media (hover: hover) and (pointer: fine) { & }'
      }].concat([{
        variant: 'active',
        defaultFormat: '&:active',
        scrollbarFormat: '&'
      }]);
      variantOverrides.forEach(function (_ref18) {
        var variant = _ref18.variant,
          defaultFormat = _ref18.defaultFormat,
          scrollbarFormat = _ref18.scrollbarFormat;
        tailwind.addVariant(variant, function (_ref19) {
          var container = _ref19.container;
          var suffix = "-".concat(variant);
          var found = false;
          container.walkRules(function (rule) {
            rule.walkDecls(/^--scrollbar-/, function (decl) {
              found = true;
              if (!decl.prop.endsWith(suffix)) {
                /* eslint-disable-next-line no-param-reassign */decl.prop += suffix;
              }
            });
          });
          return found ? scrollbarFormat : defaultFormat;
        });
      });
    },
    "config": {}
  }]
};
var fullConfig = tailwindcss_resolveConfig__WEBPACK_IMPORTED_MODULE_7___default()(tailwindConfig);
var webbColors = (_fullConfig$theme = fullConfig.theme) === null || _fullConfig$theme === void 0 ? void 0 : _fullConfig$theme.colors;
chart_js__WEBPACK_IMPORTED_MODULE_4__.Chart.register(chart_js__WEBPACK_IMPORTED_MODULE_4__.CategoryScale, chart_js__WEBPACK_IMPORTED_MODULE_4__.LinearScale, chart_js__WEBPACK_IMPORTED_MODULE_4__.BarElement, chart_js__WEBPACK_IMPORTED_MODULE_4__.Title, chart_js__WEBPACK_IMPORTED_MODULE_4__.Tooltip, chart_js__WEBPACK_IMPORTED_MODULE_4__.Legend);
var labels = (0,_nepoche_webb_ui_components__WEBPACK_IMPORTED_MODULE_3__.range)(3453, 3465);
var keygenThreshold = (0,_ngneat_falso__WEBPACK_IMPORTED_MODULE_8__.randNumber)({
  min: 2,
  max: 10
});
var signatureThreshold = (0,_ngneat_falso__WEBPACK_IMPORTED_MODULE_8__.randNumber)({
  min: 2,
  max: 10
});
var data = {
  labels: labels,
  datasets: [{
    label: 'Keygen Threshold',
    data: labels.map(function () {
      keygenThreshold += 8;
      return keygenThreshold;
    }),
    backgroundColor: webbColors.purple['100']
  }, {
    label: 'Signature Threshold',
    data: labels.map(function () {
      signatureThreshold += 10;
      return signatureThreshold;
    }),
    backgroundColor: webbColors.purple['60']
  }]
};
var AuthoritiesHistory = function AuthoritiesHistory() {
  _s();
  var historyOpts = (0,react__WEBPACK_IMPORTED_MODULE_6__.useMemo)(function () {
    return ['lastest session', 'all time'];
  }, []);
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(0),
    _useState2 = _Users_nathanbarnavon_workspace_test_nepoche_webb_frontends_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1___default()(_useState, 2),
    selectedIdx = _useState2[0],
    setSelectedIdx = _useState2[1];
  var _useDarkMode = (0,_nepoche_webb_ui_components__WEBPACK_IMPORTED_MODULE_3__.useDarkMode)(),
    _useDarkMode2 = _Users_nathanbarnavon_workspace_test_nepoche_webb_frontends_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1___default()(_useDarkMode, 2),
    isDarkMode = _useDarkMode2[0],
    _ = _useDarkMode2[1];
  var menuOptions = (0,react__WEBPACK_IMPORTED_MODULE_6__.useMemo)(function () {
    return historyOpts.reduce(function (acc, cur) {
      return [].concat(_Users_nathanbarnavon_workspace_test_nepoche_webb_frontends_node_modules_babel_runtime_helpers_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0___default()(acc), [{
        value: cur
      }]);
    }, []);
  }, [historyOpts]);
  var onChange = (0,react__WEBPACK_IMPORTED_MODULE_6__.useCallback)(function (nextVal) {
    setSelectedIdx(historyOpts.indexOf(nextVal));
  }, [historyOpts]);
  var options = (0,react__WEBPACK_IMPORTED_MODULE_6__.useMemo)(function () {
    return {
      scales: {
        x: {
          stacked: !!selectedIdx,
          grid: {
            display: false,
            borderColor: webbColors.mono['80']
          },
          ticks: {
            color: isDarkMode ? webbColors.mono['60'] : webbColors.mono['200']
          }
        },
        y: {
          stacked: !!selectedIdx,
          grid: {
            display: false,
            borderColor: webbColors.mono['80']
          },
          ticks: {
            color: isDarkMode ? webbColors.mono['60'] : webbColors.mono['200']
          }
        }
      },
      responsive: true,
      plugins: {
        legend: {
          display: false,
          position: 'bottom'
        },
        title: {
          display: false,
          position: 'bottom',
          text: 'Session'
        }
      }
    };
  }, [isDarkMode, selectedIdx]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("div", {
    className: "flex flex-col p-8 space-y-4 rounded-lg bg-mono-0 dark:bg-mono-180",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Link, {
    to: "/authorities",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_nepoche_webb_ui_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
    variant: "utility",
    size: "sm",
    leftIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_nepoche_webb_ui_components__WEBPACK_IMPORTED_MODULE_3__.ArrowLeft, {
      className: "!fill-current",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 55
      }
    }),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 9
    }
  }, "Back")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("div", {
    className: "flex flex-col space-y-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("div", {
    className: "flex items-center justify-between px-8",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_nepoche_webb_ui_components__WEBPACK_IMPORTED_MODULE_3__.TitleWithInfo, {
    title: "Network Thresholds History",
    info: "Network Thresholds History",
    variant: "h5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 11
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_nepoche_webb_ui_components__WEBPACK_IMPORTED_MODULE_3__.DropdownMenu, {
    menuOptions: menuOptions,
    size: "sm",
    value: menuOptions[selectedIdx].value,
    onChange: onChange,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 11
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("div", {
    className: "px-4 pt-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(react_chartjs_2__WEBPACK_IMPORTED_MODULE_10__.Bar, {
    options: options,
    data: data,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 11
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_nepoche_webb_ui_components__WEBPACK_IMPORTED_MODULE_3__.TitleWithInfo, {
    title: selectedIdx ? 'Month' : 'Session',
    info: selectedIdx ? 'Month' : 'Session',
    className: "justify-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("div", {
    className: "flex items-center justify-center space-x-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(Legend, {
    bgColorClsx: "bg-purple-100",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 11
    }
  }, selectedIdx ? 'Avarage ' : '', "Keygen Threshold"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(Legend, {
    bgColorClsx: "bg-purple",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 11
    }
  }, selectedIdx ? 'Avarage ' : '', "Signature Threshold"))));
};

/***********************
 * Internal components *
 ***********************/
_s(AuthoritiesHistory, "01W/SUVmY9VSUGsiS46tWvNTmoM=", false, function () {
  return [_nepoche_webb_ui_components__WEBPACK_IMPORTED_MODULE_3__.useDarkMode];
});
_c = AuthoritiesHistory;
var Legend = function Legend(_ref20) {
  var bgColorClsx = _ref20.bgColorClsx,
    children = _ref20.children;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("div", {
    className: "flex items-center space-x-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_5___default()('w-1 h-1', bgColorClsx),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_nepoche_webb_ui_components__WEBPACK_IMPORTED_MODULE_3__.Typography, {
    variant: "body3",
    component: "span",
    className: "inline-block",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 7
    }
  }, children));
};
_c2 = Legend;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AuthoritiesHistory);
var _c, _c2;
__webpack_require__.$Refresh$.register(_c, "AuthoritiesHistory");
__webpack_require__.$Refresh$.register(_c2, "Legend");

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
//# sourceMappingURL=src_pages_AuthoritiesHistory_tsx.df1fc94b.js.map