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

/***/ "./components/staking/Authorization.js":
/*!*********************************************!*\
  !*** ./components/staking/Authorization.js ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_Glitch_Desktop_PROYECTOS_PORTAFOLIO_front_end_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_Glitch_Desktop_PROYECTOS_PORTAFOLIO_front_end_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_Glitch_Desktop_PROYECTOS_PORTAFOLIO_front_end_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _context_DappContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context/DappContext */ \"./context/DappContext.js\");\n/* harmony import */ var _styles_stake_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../styles/stake.module.css */ \"./styles/stake.module.css\");\n/* harmony import */ var _styles_stake_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_stake_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var _abi_Future_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../abi/Future.json */ \"./abi/Future.json\");\n/* harmony import */ var _Withdraw__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Withdraw */ \"./components/staking/Withdraw.js\");\n/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-loader-spinner */ \"./node_modules/react-loader-spinner/dist/esm/index.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Authorization() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_context_DappContext__WEBPACK_IMPORTED_MODULE_3__.DappContext), provider = ref.provider, isAuthorized = ref.isAuthorized, isReady = ref.isReady, setIsAuthorized = ref.setIsAuthorized;\n    var FutureAddress = \"0x1fe84fE4e1ae96F9b202188f7a6835dB3D27a264\";\n    var stakingAddress = \"0x6D278724fC4d2580f9f68f074304d52B5e33aCB3\";\n    var ReadyGo = isAuthorized ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_Withdraw__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Glitch\\\\Desktop\\\\PROYECTOS\\\\PORTAFOLIO\\\\front-end\\\\components\\\\staking\\\\Authorization.js\",\n        lineNumber: 17,\n        columnNumber: 35\n    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: (_styles_stake_module_css__WEBPACK_IMPORTED_MODULE_7___default().btnContainer),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n            className: (_styles_stake_module_css__WEBPACK_IMPORTED_MODULE_7___default().btnAuth),\n            onClick: handleClick,\n            children: \"AUTHORIZE\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Glitch\\\\Desktop\\\\PROYECTOS\\\\PORTAFOLIO\\\\front-end\\\\components\\\\staking\\\\Authorization.js\",\n            lineNumber: 17,\n            columnNumber: 89\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Glitch\\\\Desktop\\\\PROYECTOS\\\\PORTAFOLIO\\\\front-end\\\\components\\\\staking\\\\Authorization.js\",\n        lineNumber: 17,\n        columnNumber: 51\n    }, this);\n    function accountWasChanged() {\n        return _accountWasChanged.apply(this, arguments);\n    }\n    function _accountWasChanged() {\n        _accountWasChanged = _asyncToGenerator(C_Users_Glitch_Desktop_PROYECTOS_PORTAFOLIO_front_end_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            return C_Users_Glitch_Desktop_PROYECTOS_PORTAFOLIO_front_end_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        window.location.reload();\n                    case 1:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return _accountWasChanged.apply(this, arguments);\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        window.ethereum.on(\"accountsChanged\", accountWasChanged);\n    }, []);\n    function handleClick() {\n        return _handleClick.apply(this, arguments);\n    }\n    function _handleClick() {\n        _handleClick = _asyncToGenerator(C_Users_Glitch_Desktop_PROYECTOS_PORTAFOLIO_front_end_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var signer_, futureContract, BigNumber;\n            return C_Users_Glitch_Desktop_PROYECTOS_PORTAFOLIO_front_end_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        signer_ = provider.getSigner();\n                        futureContract = new ethers__WEBPACK_IMPORTED_MODULE_8__.ethers.Contract(FutureAddress, _abi_Future_json__WEBPACK_IMPORTED_MODULE_4__.abi, signer_);\n                        BigNumber = ethers__WEBPACK_IMPORTED_MODULE_8__.ethers.utils.parseEther(\"700000.0\");\n                        _ctx.next = 5;\n                        return futureContract.approve(stakingAddress, BigNumber);\n                    case 5:\n                        setIsAuthorized(true);\n                    case 6:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return _handleClick.apply(this, arguments);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: isReady ? ReadyGo : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            className: (_styles_stake_module_css__WEBPACK_IMPORTED_MODULE_7___default().btnContainer),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_loader_spinner__WEBPACK_IMPORTED_MODULE_6__.TailSpin, {\n                color: \"#6495ED\",\n                height: 60,\n                width: 60\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Glitch\\\\Desktop\\\\PROYECTOS\\\\PORTAFOLIO\\\\front-end\\\\components\\\\staking\\\\Authorization.js\",\n                lineNumber: 40,\n                columnNumber: 70\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Glitch\\\\Desktop\\\\PROYECTOS\\\\PORTAFOLIO\\\\front-end\\\\components\\\\staking\\\\Authorization.js\",\n            lineNumber: 40,\n            columnNumber: 31\n        }, this)\n    }, void 0, false);\n}\n_s(Authorization, \"nny3eB/eozvSA7CKxfyx+BSK0dI=\");\n_c = Authorization;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Authorization);\nvar _c;\n$RefreshReg$(_c, \"Authorization\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3N0YWtpbmcvQXV0aG9yaXphdGlvbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQW1EO0FBQ0k7QUFDTDtBQUNuQjtBQUNZO0FBQ1Y7QUFDZTs7QUFFaEQsU0FBU1MsYUFBYSxHQUFHOztJQUV2QixJQUE2RFIsR0FBdUIsR0FBdkJBLGlEQUFVLENBQUNFLDZEQUFXLENBQUMsRUFBNUVPLFFBQVEsR0FBNkNULEdBQXVCLENBQTVFUyxRQUFRLEVBQUVDLFlBQVksR0FBK0JWLEdBQXVCLENBQWxFVSxZQUFZLEVBQUVDLE9BQU8sR0FBc0JYLEdBQXVCLENBQXBEVyxPQUFPLEVBQUVDLGVBQWUsR0FBS1osR0FBdUIsQ0FBM0NZLGVBQWU7SUFFeEQsSUFBTUMsYUFBYSxHQUFHLDRDQUE0QztJQUVsRSxJQUFNQyxjQUFjLEdBQUcsNENBQTRDO0lBRW5FLElBQU1DLE9BQU8sR0FBR0wsWUFBWSxpQkFBSSw4REFBQ0osaURBQVE7Ozs7WUFBRSxpQkFBSyw4REFBQ1UsS0FBRztRQUFDQyxTQUFTLEVBQUVkLDhFQUFtQjtrQkFBRyw0RUFBQ2dCLFFBQU07WUFBQ0YsU0FBUyxFQUFFZCx5RUFBYztZQUFFa0IsT0FBTyxFQUFFQyxXQUFXO3NCQUFHLFdBQVM7Ozs7O2dCQUFTOzs7OztZQUFNO2FBRXpKQyxpQkFBaUI7ZUFBakJBLGtCQUFpQjs7YUFBakJBLGtCQUFpQjtRQUFqQkEsa0JBQWlCLEdBQWhDLHNNQUFrQzs7Ozt3QkFBQ0MsTUFBTSxDQUFDQyxRQUFRLENBQUNDLE1BQU0sRUFBRTs7Ozs7O1NBQUM7ZUFBN0NILGtCQUFpQjs7SUFFaEN0QixnREFBUyxDQUFDLFdBQU07UUFDZHVCLE1BQU0sQ0FBQ0csUUFBUSxDQUFDQyxFQUFFLENBQUMsaUJBQWlCLEVBQUVMLGlCQUFpQixDQUFDLENBQUM7S0FDMUQsRUFBRSxFQUFFLENBQUM7YUFFU0QsV0FBVztlQUFYQSxZQUFXOzthQUFYQSxZQUFXO1FBQVhBLFlBQVcsR0FBMUIsc01BQTRCO2dCQUVwQk8sT0FBTyxFQUVQQyxjQUFjLEVBRWRDLFNBQVM7Ozs7d0JBSlRGLE9BQU8sR0FBR3BCLFFBQVEsQ0FBQ3VCLFNBQVMsRUFBRSxDQUFDO3dCQUUvQkYsY0FBYyxHQUFJLElBQUkxQixtREFBZSxDQUFDUyxhQUFhLEVBQUVSLGlEQUFXLEVBQUV3QixPQUFPLENBQUM7d0JBRTFFRSxTQUFTLEdBQUczQiwyREFBdUIsQ0FBQyxVQUFVLENBQUMsQ0FBQzs7K0JBRWhEMEIsY0FBYyxDQUFDTyxPQUFPLENBQUN2QixjQUFjLEVBQUVpQixTQUFTLENBQUU7O3dCQUV4RG5CLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQzs7Ozs7O1NBRXZCO2VBWmNVLFlBQVc7O0lBYzNCLHFCQUNHO2tCQUFJWCxPQUFPLEdBQUdJLE9BQU8saUJBQUssOERBQUNDLEtBQUc7WUFBQ0MsU0FBUyxFQUFFZCw4RUFBbUI7c0JBQUksNEVBQUNJLDBEQUFRO2dCQUFDK0IsS0FBSyxFQUFDLFNBQVM7Z0JBQUNDLE1BQU0sRUFBRSxFQUFFO2dCQUFFQyxLQUFLLEVBQUUsRUFBRTs7Ozs7b0JBQUk7Ozs7O2dCQUFNO3FCQUFPLENBQ2xJO0NBQ0Y7R0FqQ1FoQyxhQUFhO0FBQWJBLEtBQUFBLGFBQWE7QUFtQ3RCLCtEQUFlQSxhQUFhIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvc3Rha2luZy9BdXRob3JpemF0aW9uLmpzPzcwZDEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtSZWFjdCwgdXNlQ29udGV4dCwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IERhcHBDb250ZXh0IH0gZnJvbSAnLi4vLi4vY29udGV4dC9EYXBwQ29udGV4dCdcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi9zdHlsZXMvc3Rha2UubW9kdWxlLmNzcydcclxuaW1wb3J0IHsgZXRoZXJzIH0gZnJvbSAnZXRoZXJzJ1xyXG5pbXBvcnQgRnV0dXJlSiBmcm9tICcuLi8uLi9hYmkvRnV0dXJlLmpzb24nXHJcbmltcG9ydCBXaXRoZHJhdyBmcm9tICcuL1dpdGhkcmF3J1xyXG5pbXBvcnQgeyBUYWlsU3BpbiB9IGZyb20gICdyZWFjdC1sb2FkZXItc3Bpbm5lcidcclxuXHJcbmZ1bmN0aW9uIEF1dGhvcml6YXRpb24oKSB7XHJcblxyXG4gIGNvbnN0IHsgcHJvdmlkZXIsIGlzQXV0aG9yaXplZCwgaXNSZWFkeSwgc2V0SXNBdXRob3JpemVkIH0gPSB1c2VDb250ZXh0KERhcHBDb250ZXh0KTtcclxuXHJcbiAgY29uc3QgRnV0dXJlQWRkcmVzcyA9ICcweDFmZTg0ZkU0ZTFhZTk2RjliMjAyMTg4ZjdhNjgzNWRCM0QyN2EyNjQnXHJcblxyXG4gIGNvbnN0IHN0YWtpbmdBZGRyZXNzID0gJzB4NkQyNzg3MjRmQzRkMjU4MGY5ZjY4ZjA3NDMwNGQ1MkI1ZTMzYUNCMydcclxuXHJcbiAgY29uc3QgUmVhZHlHbyA9IGlzQXV0aG9yaXplZCA/ICg8V2l0aGRyYXcvPikgOiAoPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5idG5Db250YWluZXJ9ID48YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJ0bkF1dGh9IG9uQ2xpY2s9e2hhbmRsZUNsaWNrfSA+QVVUSE9SSVpFPC9idXR0b24+PC9kaXY+KVxyXG4gIFxyXG4gIGFzeW5jIGZ1bmN0aW9uIGFjY291bnRXYXNDaGFuZ2VkKCl7d2luZG93LmxvY2F0aW9uLnJlbG9hZCgpfVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgd2luZG93LmV0aGVyZXVtLm9uKCdhY2NvdW50c0NoYW5nZWQnLCBhY2NvdW50V2FzQ2hhbmdlZCk7XHJcbiAgfSwgW10pIFxyXG4gIFxyXG4gIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZUNsaWNrKCl7XHJcblxyXG4gICAgY29uc3Qgc2lnbmVyXyA9IHByb3ZpZGVyLmdldFNpZ25lcigpO1xyXG4gICAgXHJcbiAgICBjb25zdCBmdXR1cmVDb250cmFjdCA9ICBuZXcgZXRoZXJzLkNvbnRyYWN0KEZ1dHVyZUFkZHJlc3MsIEZ1dHVyZUouYWJpLCBzaWduZXJfKVxyXG5cclxuICAgIGNvbnN0IEJpZ051bWJlciA9IGV0aGVycy51dGlscy5wYXJzZUV0aGVyKFwiNzAwMDAwLjBcIik7XHJcblxyXG4gICAgYXdhaXQgZnV0dXJlQ29udHJhY3QuYXBwcm92ZShzdGFraW5nQWRkcmVzcywgQmlnTnVtYmVyICk7XHJcbiAgXHJcbiAgICBzZXRJc0F1dGhvcml6ZWQodHJ1ZSk7XHJcbiAgXHJcbiAgfSBcclxuXHJcbiByZXR1cm4gKFxyXG4gICAgPD57IGlzUmVhZHkgPyBSZWFkeUdvIDogKCA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJ0bkNvbnRhaW5lcn0gID48VGFpbFNwaW4gY29sb3I9XCIjNjQ5NUVEXCIgaGVpZ2h0PXs2MH0gd2lkdGg9ezYwfSAvPjwvZGl2PiApIH08Lz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEF1dGhvcml6YXRpb24iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VDb250ZXh0IiwidXNlRWZmZWN0IiwiRGFwcENvbnRleHQiLCJzdHlsZXMiLCJldGhlcnMiLCJGdXR1cmVKIiwiV2l0aGRyYXciLCJUYWlsU3BpbiIsIkF1dGhvcml6YXRpb24iLCJwcm92aWRlciIsImlzQXV0aG9yaXplZCIsImlzUmVhZHkiLCJzZXRJc0F1dGhvcml6ZWQiLCJGdXR1cmVBZGRyZXNzIiwic3Rha2luZ0FkZHJlc3MiLCJSZWFkeUdvIiwiZGl2IiwiY2xhc3NOYW1lIiwiYnRuQ29udGFpbmVyIiwiYnV0dG9uIiwiYnRuQXV0aCIsIm9uQ2xpY2siLCJoYW5kbGVDbGljayIsImFjY291bnRXYXNDaGFuZ2VkIiwid2luZG93IiwibG9jYXRpb24iLCJyZWxvYWQiLCJldGhlcmV1bSIsIm9uIiwic2lnbmVyXyIsImZ1dHVyZUNvbnRyYWN0IiwiQmlnTnVtYmVyIiwiZ2V0U2lnbmVyIiwiQ29udHJhY3QiLCJhYmkiLCJ1dGlscyIsInBhcnNlRXRoZXIiLCJhcHByb3ZlIiwiY29sb3IiLCJoZWlnaHQiLCJ3aWR0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/staking/Authorization.js\n");

/***/ })

});