"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/stake",{

/***/ "./pages/stake.js":
/*!************************!*\
  !*** ./pages/stake.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _context_DappContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/DappContext */ \"./context/DappContext.js\");\n/* harmony import */ var _components_BG_image_Bgimg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/BG-image/Bgimg */ \"./components/BG-image/Bgimg.js\");\n/* harmony import */ var _components_staking_Authorization__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/staking/Authorization */ \"./components/staking/Authorization.js\");\n/* harmony import */ var _components_Connect__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Connect */ \"./components/Connect.js\");\n/* harmony import */ var _styles_stake_module_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../styles/stake.module.css */ \"./styles/stake.module.css\");\n/* harmony import */ var _styles_stake_module_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_styles_stake_module_css__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _public_coin_img_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../public/coin-img.png */ \"./public/coin-img.png\");\n/* harmony import */ var _components_staking_GetReward__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/staking/GetReward */ \"./components/staking/GetReward.js\");\n/* harmony import */ var _components_staking_Staking__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/staking/Staking */ \"./components/staking/Staking.js\");\n/* harmony import */ var react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-copy-to-clipboard */ \"./node_modules/react-copy-to-clipboard/lib/index.js\");\n/* harmony import */ var react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-hot-toast */ \"./node_modules/react-hot-toast/dist/react-hot-toast.esm.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction stake() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_context_DappContext__WEBPACK_IMPORTED_MODULE_3__.DappContext), isConnected = ref.isConnected, isAuthorized = ref.isAuthorized, authCall = ref.authCall;\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (isConnected) {\n            authCall();\n        }\n    }, []);\n    var copy = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_11__.CopyToClipboard, {\n        text: \"0x97F7BB30AFD27b0cc116491c71378678aC9cafC4\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            className: (_styles_stake_module_css__WEBPACK_IMPORTED_MODULE_12___default().copy),\n            onClick: function() {\n                return react_hot_toast__WEBPACK_IMPORTED_MODULE_13__.toast.success(\"Address Copied!\", {\n                    style: {\n                        fontSize: \"12px\"\n                    }\n                });\n            },\n            children: \"Reward Address\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Glitch\\\\Desktop\\\\PROYECTOS\\\\PORTAFOLIO\\\\front-end\\\\pages\\\\stake.js\",\n            lineNumber: 29,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Glitch\\\\Desktop\\\\PROYECTOS\\\\PORTAFOLIO\\\\front-end\\\\pages\\\\stake.js\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"Web3 | Stake\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Glitch\\\\Desktop\\\\PROYECTOS\\\\PORTAFOLIO\\\\front-end\\\\pages\\\\stake.js\",\n                    lineNumber: 37,\n                    columnNumber: 7\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Glitch\\\\Desktop\\\\PROYECTOS\\\\PORTAFOLIO\\\\front-end\\\\pages\\\\stake.js\",\n                lineNumber: 36,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: (_styles_stake_module_css__WEBPACK_IMPORTED_MODULE_12___default().h1),\n                children: \"Invest in your Future\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Glitch\\\\Desktop\\\\PROYECTOS\\\\PORTAFOLIO\\\\front-end\\\\pages\\\\stake.js\",\n                lineNumber: 40,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"To avoid overflow, please withdraw the staked tokens after testing, thank you!\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Glitch\\\\Desktop\\\\PROYECTOS\\\\PORTAFOLIO\\\\front-end\\\\pages\\\\stake.js\",\n                lineNumber: 42,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_stake_module_css__WEBPACK_IMPORTED_MODULE_12___default().container),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: isAuthorized ? (_styles_stake_module_css__WEBPACK_IMPORTED_MODULE_12___default().card) : (_styles_stake_module_css__WEBPACK_IMPORTED_MODULE_12___default().cardNone),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_staking_Staking__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Glitch\\\\Desktop\\\\PROYECTOS\\\\PORTAFOLIO\\\\front-end\\\\pages\\\\stake.js\",\n                            lineNumber: 47,\n                            columnNumber: 9\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Glitch\\\\Desktop\\\\PROYECTOS\\\\PORTAFOLIO\\\\front-end\\\\pages\\\\stake.js\",\n                        lineNumber: 46,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: isAuthorized ? (_styles_stake_module_css__WEBPACK_IMPORTED_MODULE_12___default().card) : (_styles_stake_module_css__WEBPACK_IMPORTED_MODULE_12___default().cardStart),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: isAuthorized ? (_styles_stake_module_css__WEBPACK_IMPORTED_MODULE_12___default().coinNone) : (_styles_stake_module_css__WEBPACK_IMPORTED_MODULE_12___default().coin),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_7___default()), {\n                                    src: _public_coin_img_png__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n                                    height: 160,\n                                    width: 160,\n                                    quality: 100\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Glitch\\\\Desktop\\\\PROYECTOS\\\\PORTAFOLIO\\\\front-end\\\\pages\\\\stake.js\",\n                                    lineNumber: 53,\n                                    columnNumber: 11\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Glitch\\\\Desktop\\\\PROYECTOS\\\\PORTAFOLIO\\\\front-end\\\\pages\\\\stake.js\",\n                                lineNumber: 52,\n                                columnNumber: 9\n                            }, this),\n                            isConnected ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_staking_Authorization__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Glitch\\\\Desktop\\\\PROYECTOS\\\\PORTAFOLIO\\\\front-end\\\\pages\\\\stake.js\",\n                                lineNumber: 56,\n                                columnNumber: 26\n                            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Connect__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Glitch\\\\Desktop\\\\PROYECTOS\\\\PORTAFOLIO\\\\front-end\\\\pages\\\\stake.js\",\n                                lineNumber: 56,\n                                columnNumber: 47\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Glitch\\\\Desktop\\\\PROYECTOS\\\\PORTAFOLIO\\\\front-end\\\\pages\\\\stake.js\",\n                        lineNumber: 50,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: isAuthorized ? (_styles_stake_module_css__WEBPACK_IMPORTED_MODULE_12___default().card) : (_styles_stake_module_css__WEBPACK_IMPORTED_MODULE_12___default().cardNone),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_staking_GetReward__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Glitch\\\\Desktop\\\\PROYECTOS\\\\PORTAFOLIO\\\\front-end\\\\pages\\\\stake.js\",\n                            lineNumber: 61,\n                            columnNumber: 9\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Glitch\\\\Desktop\\\\PROYECTOS\\\\PORTAFOLIO\\\\front-end\\\\pages\\\\stake.js\",\n                        lineNumber: 60,\n                        columnNumber: 7\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Glitch\\\\Desktop\\\\PROYECTOS\\\\PORTAFOLIO\\\\front-end\\\\pages\\\\stake.js\",\n                lineNumber: 44,\n                columnNumber: 5\n            }, this),\n            isConnected ? copy : null,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_hot_toast__WEBPACK_IMPORTED_MODULE_13__.Toaster, {\n                containerStyle: {\n                    top: 940\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Glitch\\\\Desktop\\\\PROYECTOS\\\\PORTAFOLIO\\\\front-end\\\\pages\\\\stake.js\",\n                lineNumber: 66,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_BG_image_Bgimg__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Glitch\\\\Desktop\\\\PROYECTOS\\\\PORTAFOLIO\\\\front-end\\\\pages\\\\stake.js\",\n                lineNumber: 68,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(stake, \"0p3HCzgxW6TTOoWweeCh/TIJDVY=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (stake);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zdGFrZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUE0QjtBQUN3QjtBQUNBO0FBQ0o7QUFDZTtBQUNwQjtBQUNJO0FBQ2pCO0FBQ1c7QUFDYztBQUNKO0FBQ007QUFDVDs7QUFFaEQsU0FBU2dCLEtBQUssR0FBRzs7SUFFZixJQUFnRGQsR0FBdUIsR0FBdkJBLGlEQUFVLENBQUNFLDZEQUFXLENBQUMsRUFBL0RhLFdBQVcsR0FBNkJmLEdBQXVCLENBQS9EZSxXQUFXLEVBQUVDLFlBQVksR0FBZWhCLEdBQXVCLENBQWxEZ0IsWUFBWSxFQUFFQyxRQUFRLEdBQUtqQixHQUF1QixDQUFwQ2lCLFFBQVE7SUFFM0NoQixnREFBUyxDQUFDLFdBQU07UUFFZCxJQUFHYyxXQUFXLEVBQUM7WUFDYkUsUUFBUSxFQUFFO1NBQ1g7S0FFRixFQUFFLEVBQUUsQ0FBQztJQUVOLElBQU1DLElBQUksaUJBQ1IsOERBQUNQLHFFQUFlO1FBQUNRLElBQUksRUFBQyw0Q0FBNEM7a0JBQ2hFLDRFQUFDQyxRQUFNO1lBQUNDLFNBQVMsRUFBRWYsdUVBQVc7WUFBRWdCLE9BQU8sRUFBRzt1QkFBS1YsMkRBQWEsQ0FBQyxpQkFBaUIsRUFBRTtvQkFBRVksS0FBSyxFQUFFO3dCQUFFQyxRQUFRLEVBQUcsTUFBTTtxQkFBRTtpQkFBRSxDQUFFO2FBQUE7c0JBQUssZ0JBQWM7Ozs7O2dCQUFTOzs7OztZQUM5SDtJQUlwQixxQkFDRTs7MEJBQ0EsOERBQUMzQixrREFBSTswQkFDSCw0RUFBQzRCLE9BQUs7OEJBQUMsY0FBWTs7Ozs7d0JBQVE7Ozs7O29CQUN0QjswQkFFUCw4REFBQ0MsSUFBRTtnQkFBQ04sU0FBUyxFQUFFZixxRUFBUzswQkFBRyx1QkFBcUI7Ozs7O29CQUFLOzBCQUVyRCw4REFBQ3NCLEdBQUM7MEJBQUMsZ0ZBQThFOzs7OztvQkFBSTswQkFFckYsOERBQUNDLEtBQUc7Z0JBQUNSLFNBQVMsRUFBRWYsNEVBQWdCOztrQ0FFOUIsOERBQUN1QixLQUFHO3dCQUFDUixTQUFTLEVBQUdMLFlBQVksR0FBR1YsdUVBQVcsR0FBRUEsMkVBQWU7a0NBQzFELDRFQUFDSSxvRUFBTzs7OztnQ0FBRTs7Ozs7NEJBQ047a0NBRU4sOERBQUNtQixLQUFHO3dCQUFDUixTQUFTLEVBQUdMLFlBQVksR0FBR1YsdUVBQVcsR0FBRUEsNEVBQWdCOzswQ0FFM0QsOERBQUN1QixLQUFHO2dDQUFDUixTQUFTLEVBQUVMLFlBQVksR0FBR1YsMkVBQWUsR0FBSUEsdUVBQVc7MENBQzNELDRFQUFDQyxtREFBSztvQ0FBQzRCLEdBQUcsRUFBRTNCLDREQUFJO29DQUFFNEIsTUFBTSxFQUFFLEdBQUc7b0NBQUVDLEtBQUssRUFBRSxHQUFHO29DQUFFQyxPQUFPLEVBQUUsR0FBRzs7Ozs7d0NBQUk7Ozs7O29DQUN2RDs0QkFFSnZCLFdBQVcsaUJBQUksOERBQUNYLHlFQUFhOzs7O29DQUFFLGlCQUFLLDhEQUFDQywyREFBTzs7OztvQ0FBRTs7Ozs7OzRCQUU1QztrQ0FFTiw4REFBQ3dCLEtBQUc7d0JBQUNSLFNBQVMsRUFBR0wsWUFBWSxHQUFHVix1RUFBVyxHQUFFQSwyRUFBZTtrQ0FDMUQsNEVBQUNHLHFFQUFTOzs7O2dDQUFFOzs7Ozs0QkFDUjs7Ozs7O29CQUVGO1lBQ0pNLFdBQVcsR0FBR0csSUFBSSxHQUFHLElBQUk7MEJBQzNCLDhEQUFDTCxxREFBTztnQkFBQzBCLGNBQWMsRUFBRTtvQkFBQ0MsR0FBRyxFQUFFLEdBQUc7aUJBQUU7Ozs7O29CQUFJOzBCQUV4Qyw4REFBQ3JDLGtFQUFLOzs7O29CQUFFOztvQkFDTCxDQUNKO0NBQ0Y7R0F4RFFXLEtBQUs7QUEwRGQsK0RBQWVBLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc3Rha2UuanM/YTM1MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCB7IFJlYWN0LCB1c2VDb250ZXh0LCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgRGFwcENvbnRleHQgfSBmcm9tICcuLi9jb250ZXh0L0RhcHBDb250ZXh0J1xyXG5pbXBvcnQgQmdpbWcgZnJvbSAnLi4vY29tcG9uZW50cy9CRy1pbWFnZS9CZ2ltZydcclxuaW1wb3J0IEF1dGhvcml6YXRpb24gZnJvbSAnLi4vY29tcG9uZW50cy9zdGFraW5nL0F1dGhvcml6YXRpb24nXHJcbmltcG9ydCBDb25uZWN0IGZyb20gJy4uL2NvbXBvbmVudHMvQ29ubmVjdCdcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvc3Rha2UubW9kdWxlLmNzcydcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXHJcbmltcG9ydCBjb2luIGZyb20gJy4uL3B1YmxpYy9jb2luLWltZy5wbmcnXHJcbmltcG9ydCBHZXRSZXdhcmQgZnJvbSAnLi4vY29tcG9uZW50cy9zdGFraW5nL0dldFJld2FyZCdcclxuaW1wb3J0IFN0YWtpbmcgZnJvbSAnLi4vY29tcG9uZW50cy9zdGFraW5nL1N0YWtpbmcnXHJcbmltcG9ydCB7IENvcHlUb0NsaXBib2FyZCB9IGZyb20gJ3JlYWN0LWNvcHktdG8tY2xpcGJvYXJkJ1xyXG5pbXBvcnQgeyB0b2FzdCwgVG9hc3RlciB9IGZyb20gJ3JlYWN0LWhvdC10b2FzdCdcclxuXHJcbmZ1bmN0aW9uIHN0YWtlKCkge1xyXG5cclxuICBjb25zdCB7IGlzQ29ubmVjdGVkLCBpc0F1dGhvcml6ZWQsIGF1dGhDYWxsIH0gPSB1c2VDb250ZXh0KERhcHBDb250ZXh0KTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuXHJcbiAgICBpZihpc0Nvbm5lY3RlZCl7XHJcbiAgICAgIGF1dGhDYWxsKClcclxuICAgIH1cclxuXHJcbiAgfSwgW10pXHJcblxyXG4gIGNvbnN0IGNvcHkgPSAoXHJcbiAgICA8Q29weVRvQ2xpcGJvYXJkIHRleHQ9JzB4OTdGN0JCMzBBRkQyN2IwY2MxMTY0OTFjNzEzNzg2NzhhQzljYWZDNCcgPlxyXG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmNvcHl9IG9uQ2xpY2s9eyAoKT0+IHRvYXN0LnN1Y2Nlc3MoXCJBZGRyZXNzIENvcGllZCFcIiwgeyBzdHlsZTogeyBmb250U2l6ZSA6ICcxMnB4JyB9IH0gKSAgfSA+UmV3YXJkIEFkZHJlc3M8L2J1dHRvbj5cclxuICAgIDwvQ29weVRvQ2xpcGJvYXJkPlxyXG4gICAgKVxyXG4gIFxyXG4gIFxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgPEhlYWQ+XHJcbiAgICAgIDx0aXRsZT5XZWIzIHwgU3Rha2U8L3RpdGxlPlxyXG4gICAgPC9IZWFkPlxyXG5cclxuICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy5oMX0gPkludmVzdCBpbiB5b3VyIEZ1dHVyZTwvaDE+XHJcblxyXG4gICAgPHA+VG8gYXZvaWQgb3ZlcmZsb3csIHBsZWFzZSB3aXRoZHJhdyB0aGUgc3Rha2VkIHRva2VucyBhZnRlciB0ZXN0aW5nLCB0aGFuayB5b3UhPC9wPlxyXG5cclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXsgaXNBdXRob3JpemVkID8gc3R5bGVzLmNhcmQ6IHN0eWxlcy5jYXJkTm9uZSB9PlxyXG4gICAgICAgIDxTdGFraW5nLz5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17IGlzQXV0aG9yaXplZCA/IHN0eWxlcy5jYXJkOiBzdHlsZXMuY2FyZFN0YXJ0IH0+XHJcbiAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2lzQXV0aG9yaXplZCA/IHN0eWxlcy5jb2luTm9uZSAgOiBzdHlsZXMuY29pbiB9ID5cclxuICAgICAgICAgIDxJbWFnZSBzcmM9e2NvaW59IGhlaWdodD17MTYwfSB3aWR0aD17MTYwfSBxdWFsaXR5PXsxMDB9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIHsgaXNDb25uZWN0ZWQgPyAoPEF1dGhvcml6YXRpb24vPikgOiAoPENvbm5lY3QvPikgfVxyXG4gICAgICAgICAgXHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9eyBpc0F1dGhvcml6ZWQgPyBzdHlsZXMuY2FyZDogc3R5bGVzLmNhcmROb25lIH0+XHJcbiAgICAgICAgPEdldFJld2FyZC8+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgIDwvZGl2PlxyXG4gICAgeyBpc0Nvbm5lY3RlZCA/IGNvcHkgOiBudWxsfVxyXG4gICAgPFRvYXN0ZXIgY29udGFpbmVyU3R5bGU9e3t0b3A6IDk0MCB9fSAvPlxyXG5cclxuICAgIDxCZ2ltZy8+XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHN0YWtlIl0sIm5hbWVzIjpbIkhlYWQiLCJSZWFjdCIsInVzZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJEYXBwQ29udGV4dCIsIkJnaW1nIiwiQXV0aG9yaXphdGlvbiIsIkNvbm5lY3QiLCJzdHlsZXMiLCJJbWFnZSIsImNvaW4iLCJHZXRSZXdhcmQiLCJTdGFraW5nIiwiQ29weVRvQ2xpcGJvYXJkIiwidG9hc3QiLCJUb2FzdGVyIiwic3Rha2UiLCJpc0Nvbm5lY3RlZCIsImlzQXV0aG9yaXplZCIsImF1dGhDYWxsIiwiY29weSIsInRleHQiLCJidXR0b24iLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwic3VjY2VzcyIsInN0eWxlIiwiZm9udFNpemUiLCJ0aXRsZSIsImgxIiwicCIsImRpdiIsImNvbnRhaW5lciIsImNhcmQiLCJjYXJkTm9uZSIsImNhcmRTdGFydCIsImNvaW5Ob25lIiwic3JjIiwiaGVpZ2h0Iiwid2lkdGgiLCJxdWFsaXR5IiwiY29udGFpbmVyU3R5bGUiLCJ0b3AiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/stake.js\n");

/***/ })

});