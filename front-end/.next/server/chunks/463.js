"use strict";
exports.id = 463;
exports.ids = [463];
exports.modules = {

/***/ 5463:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "S": () => (/* binding */ DappContext),
  "x": () => (/* binding */ DappProvider)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
;// CONCATENATED MODULE: ./abi/PhotoArt.json
const PhotoArt_namespaceObject = JSON.parse('{"M":[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeMint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]}');
// EXTERNAL MODULE: external "ethers"
var external_ethers_ = __webpack_require__(1982);
// EXTERNAL MODULE: ./abi/StakingFT.json
var StakingFT = __webpack_require__(7191);
// EXTERNAL MODULE: ./abi/Future.json
var Future = __webpack_require__(7428);
;// CONCATENATED MODULE: ./context/DappContext.js







const DappContext = /*#__PURE__*/ (0,external_react_.createContext)();
const DappProvider = ({ children  })=>{
    const { 0: isConnected , 1: setIsConnected  } = (0,external_react_.useState)(false);
    const { 0: account , 1: setAccount  } = (0,external_react_.useState)("0x0");
    const { 0: signer , 1: setSigner  } = (0,external_react_.useState)({});
    const { 0: number , 1: setNumber  } = (0,external_react_.useState)(1);
    const { 0: provider , 1: setProvider  } = (0,external_react_.useState)({});
    // NFT Gallery:
    var baseURI = "https://gateway.pinata.cloud/ipfs/";
    const PhotoArtAddress = "0xD0E2124F296e3967532D5340e91474733C6dBE2a";
    const { 0: imageURI0 , 1: setImageURI0  } = (0,external_react_.useState)("");
    const { 0: imageURI1 , 1: setImageURI1  } = (0,external_react_.useState)("");
    const { 0: imageURI2 , 1: setImageURI2  } = (0,external_react_.useState)("");
    const imageURI = [
        imageURI0,
        imageURI1,
        imageURI2
    ];
    const setImageURI = [
        setImageURI0,
        setImageURI1,
        setImageURI2
    ];
    async function callGallery(id) {
        const _provider = new external_ethers_.ethers.providers.Web3Provider(window.ethereum);
        const photoArtContract = new external_ethers_.ethers.Contract(PhotoArtAddress, PhotoArt_namespaceObject.M, _provider);
        const metaData = await photoArtContract.tokenURI(id);
        const metaDataURI = metaData.replace("ipfs://", baseURI);
        external_axios_default().get(metaDataURI).then(function(response) {
            setImageURI[id](response.data.image.replace("ipfs://", baseURI));
        }).catch(function(error) {
            setTimeout(function() {
                window.location.reload();
            }, 100);
            console.log(error);
        });
    }
    // For Authorization for Staking:
    const { 0: isAuthorized , 1: setIsAuthorized  } = (0,external_react_.useState)(false);
    // to wait to check is it's authorized and avoid shoing up the Auth button:
    const { 0: isReady , 1: setIsReady  } = (0,external_react_.useState)(false);
    //Staking Call:
    const stakingAddress = "0x6D278724fC4d2580f9f68f074304d52B5e33aCB3";
    const { 0: staked , 1: setStaked  } = (0,external_react_.useState)("");
    const { 0: reward , 1: setReward  } = (0,external_react_.useState)("");
    const { 0: totalSupply , 1: setTotalSupply  } = (0,external_react_.useState)("");
    async function stakingCall() {
        const _provider = new external_ethers_.ethers.providers.Web3Provider(window.ethereum);
        const signer_ = _provider.getSigner();
        const stakingContract = new external_ethers_.ethers.Contract(stakingAddress, StakingFT/* abi */.M, signer_);
        const userAddress_ = signer_.getAddress();
        const rewardBN = await stakingContract.earned(userAddress_);
        const reward_ = rewardBN.div(1e9).div(1e9).toNumber();
        setReward(reward_.toString());
        const totalSupplyBN = await stakingContract._totalSupply();
        const totalSupply_ = totalSupplyBN.div(1e9).div(1e9).toNumber();
        setTotalSupply(totalSupply_.toString());
        const stakedBN = await stakingContract._balances(userAddress_);
        const staked_ = stakedBN.div(1e9).div(1e9).toNumber();
        setStaked(staked_.toString());
    }
    //Staking Aouthorized? :
    async function authCall() {
        const newProvider = new external_ethers_.ethers.providers.Web3Provider(window.ethereum);
        const signer_ = newProvider.getSigner();
        const userAddress = signer_.getAddress();
        const futureContract = new external_ethers_.ethers.Contract(futureAddress, Future/* abi */.M, newProvider);
        const _allowance = await futureContract.allowance(userAddress, stakingAddress);
        const allowanceNumber = _allowance.div(1e9).div(1e9).toNumber();
        if (0 < allowanceNumber) {
            setIsAuthorized(true);
            setIsReady(true);
        } else {
            setIsReady(true);
        }
    }
    //Future Call
    const { 0: FTbalance , 1: setFTBalance  } = (0,external_react_.useState)("");
    const futureAddress = "0x1fe84fE4e1ae96F9b202188f7a6835dB3D27a264";
    async function futureCall() {
        const _provider = new external_ethers_.ethers.providers.Web3Provider(window.ethereum);
        const signer_ = _provider.getSigner();
        const futureContract = new external_ethers_.ethers.Contract(futureAddress, Future/* abi */.M, signer_);
        const userAddress_ = signer_.getAddress();
        const FTbalanceBN = await futureContract.balanceOf(userAddress_);
        const FTbalance_ = FTbalanceBN.div(1e9).div(1e9).toNumber();
        setFTBalance(FTbalance_);
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(DappContext.Provider, {
        value: {
            authCall,
            FTbalance,
            futureCall,
            stakingCall,
            staked,
            reward,
            totalSupply,
            isReady,
            setIsReady,
            isAuthorized,
            setIsAuthorized,
            isConnected,
            setIsConnected,
            account,
            setAccount,
            number,
            setNumber,
            signer,
            setSigner,
            provider,
            setProvider,
            callGallery,
            imageURI
        },
        children: [
            " ",
            children,
            " "
        ]
    });
};


/***/ }),

/***/ 7428:
/***/ ((module) => {

module.exports = JSON.parse('{"M":[{"inputs":[{"internalType":"uint256","name":"maxSupply_","type":"uint256"},{"internalType":"uint256","name":"maxAddress_","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burnFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"maxAddress","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"minted","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]}');

/***/ }),

/***/ 7191:
/***/ ((module) => {

module.exports = JSON.parse('{"M":[{"inputs":[{"internalType":"address","name":"_stakingToken","type":"address"},{"internalType":"address","name":"_rewardsToken","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"_balances","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"earned","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"lastUpdateTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rewardPerToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rewardPerTokenStored","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rewardRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"rewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rewardsToken","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"stake","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"stakingToken","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"userRewardPerTokenPaid","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]}');

/***/ })

};
;