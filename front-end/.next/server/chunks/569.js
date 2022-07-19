exports.id = 569;
exports.ids = [569];
exports.modules = {

/***/ 3357:
/***/ ((module) => {

// Exports
module.exports = {
	"btnContainer": "Connect_btnContainer__ULtwd",
	"btn1": "Connect_btn1__e42lt"
};


/***/ }),

/***/ 6658:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/coin-img.3fa927e7.png","height":5000,"width":5000,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAv0lEQVR42mMAASuXeCYGNNA5dw8TiqRnVFWooXXYHlXtgD2mDumhILHGyZsgitzDS0OtPBL/q2i5/7dyTf9f1r3sf9vcbaFw43TNQ4A6Pf/rW0T/yG2c82Pq+hP/i9sX74Er0DKM3OMeWvq/rGfFj+6lB37kN8/7H5TSjFBg71sU2jRry/8p647/z6iZ9d89rOx/QHItxIqGyVvADmmduzU0p37OnoDE+j0BSTVgSX39dIgjK7pWY3hTRzcNLAYAb5pK1Uk9voYAAAAASUVORK5CYII="});

/***/ }),

/***/ 691:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context_DappContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1793);
/* harmony import */ var _styles_Connect_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3357);
/* harmony import */ var _styles_Connect_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_Connect_module_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1982);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ethers__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _abi_Future_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7428);
/* harmony import */ var _metamask_detect_provider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3427);
/* harmony import */ var _metamask_detect_provider__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_metamask_detect_provider__WEBPACK_IMPORTED_MODULE_5__);







function Connect() {
    const { setIsConnected , setAccount , setSigner , setProvider , setIsAuthorized , setIsReady  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_DappContext__WEBPACK_IMPORTED_MODULE_2__/* .DappContext */ .S);
    const FutureAddress = "0x1fe84fE4e1ae96F9b202188f7a6835dB3D27a264";
    const stakingAddress = "0x6D278724fC4d2580f9f68f074304d52B5e33aCB3";
    async function handleClick() {
        const provider = await _metamask_detect_provider__WEBPACK_IMPORTED_MODULE_5___default()();
        if (provider == window.ethereum) {
            const newProvider = new ethers__WEBPACK_IMPORTED_MODULE_3__.ethers.providers.Web3Provider(window.ethereum);
            await window.ethereum.request({
                method: "wallet_switchEthereumChain",
                params: [
                    {
                        chainId: "0x5"
                    }
                ]
            });
            await newProvider.send("eth_requestAccounts", []);
            const signer_ = newProvider.getSigner();
            const address = await signer_.getAddress();
            setAccount(address);
            setSigner(signer_);
            setProvider(newProvider);
            setIsConnected(true);
            //For Staking
            const userAddress = signer_.getAddress();
            const futureContract = new ethers__WEBPACK_IMPORTED_MODULE_3__.ethers.Contract(FutureAddress, _abi_Future_json__WEBPACK_IMPORTED_MODULE_4__/* .abi */ .M, newProvider);
            const _allowance = await futureContract.allowance(userAddress, stakingAddress);
            const allowanceNumber = _allowance.div(1e9).div(1e9).toNumber();
            if (0 < allowanceNumber) {
                setIsAuthorized(true);
                setIsReady(true);
            } else {
                setIsReady(true);
            }
        } else {
            setIsConnected(false);
        }
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_styles_Connect_module_css__WEBPACK_IMPORTED_MODULE_6___default().btnContainer),
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
            className: (_styles_Connect_module_css__WEBPACK_IMPORTED_MODULE_6___default().btn1),
            onClick: handleClick,
            children: "CONNECT"
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Connect);


/***/ })

};
;