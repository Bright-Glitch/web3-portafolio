(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[56],{8156:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/token",function(){return e(9307)}])},6110:function(n,t){"use strict";t.Z={src:"/_next/static/media/bg-3.8b5501a0.jpg",height:1080,width:1920,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABwEBAAAAAAAAAAAAAAAAAAAABP/aAAwDAQACEAMQAAAAk4WL/8QAGhAAAQUBAAAAAAAAAAAAAAAAAgABBBETIf/aAAgBAQABPwCA469G1//EABcRAAMBAAAAAAAAAAAAAAAAAAABAyL/2gAIAQIBAT8Ai8H/xAAWEQEBAQAAAAAAAAAAAAAAAAABAwD/2gAIAQMBAT8AuDTf/9k="}},6658:function(n,t){"use strict";t.Z={src:"/_next/static/media/coin-img.3fa927e7.png",height:5e3,width:5e3,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAv0lEQVR42mMAASuXeCYGNNA5dw8TiqRnVFWooXXYHlXtgD2mDumhILHGyZsgitzDS0OtPBL/q2i5/7dyTf9f1r3sf9vcbaFw43TNQ4A6Pf/rW0T/yG2c82Pq+hP/i9sX74Er0DKM3OMeWvq/rGfFj+6lB37kN8/7H5TSjFBg71sU2jRry/8p647/z6iZ9d89rOx/QHItxIqGyVvADmmduzU0p37OnoDE+j0BSTVgSX39dIgjK7pWY3hTRzcNLAYAb5pK1Uk9voYAAAAASUVORK5CYII="}},5642:function(n,t,e){"use strict";var A=e(5893),i=(e(7294),e(6110)),r=e(5675),s=e.n(r),a=e(4477),c=e.n(a);t.Z=function(){return(0,A.jsx)(A.Fragment,{children:(0,A.jsx)("div",{className:c().container,children:(0,A.jsx)(s(),{src:i.Z,layout:"fill",objectFit:"cover",quality:100,alt:"background"})})})}},691:function(n,t,e){"use strict";var A=e(7568),i=e(4051),r=e.n(i),s=e(5893),a=e(7294),c=e(1793),o=e(2432),u=e.n(o),l=e(715),d=e(6076),h=e(7428),f=e(2003),g=e.n(f);t.Z=function(){var n=(0,a.useContext)(c.S),t=n.setIsConnected,e=n.setAccount,i=n.setSigner,o=n.setProvider,f=n.setIsAuthorized,m=n.setIsReady,x="0x1fe84fE4e1ae96F9b202188f7a6835dB3D27a264",_="0x6D278724fC4d2580f9f68f074304d52B5e33aCB3";function w(){return(w=(0,A.Z)(r().mark((function n(){var A,s,a,c,u,w;return r().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,g()();case 2:if(n.sent!=window.ethereum){n.next=26;break}return A=new l.Q(window.ethereum),n.next=7,window.ethereum.request({method:"wallet_switchEthereumChain",params:[{chainId:"0x5"}]});case 7:return n.next=9,A.send("eth_requestAccounts",[]);case 9:return s=A.getSigner(),n.next=12,s.getAddress();case 12:return a=n.sent,e(a),i(s),o(A),t(!0),c=s.getAddress(),u=new d.CH(x,h.M,A),n.next=21,u.allowance(c,_);case 21:w=n.sent,0<w.div(1e9).div(1e9).toNumber()?(f(!0),m(!0)):m(!0),n.next=27;break;case 26:t(!1);case 27:case"end":return n.stop()}}),n)})))).apply(this,arguments)}return(0,s.jsx)("div",{className:u().btnContainer,children:(0,s.jsx)("button",{className:u().btn1,onClick:function(){return w.apply(this,arguments)},children:"CONNECT"})})}},9307:function(n,t,e){"use strict";e.r(t),e.d(t,{default:function(){return S}});var A=e(5893),i=e(9008),r=e.n(i),s=e(7294),a=e(1793),c=e(3347),o=e.n(c),u=e(5675),l=e.n(u),d=e(6658),h=e(7568),f=e(4051),g=e.n(f),m=e(7428),x=e(6076),_=e(5553),w=e(715);var p=function(){var n="0x1fe84fE4e1ae96F9b202188f7a6835dB3D27a264",t=(0,s.useContext)(a.S).account;function e(){return i.apply(this,arguments)}function i(){return(i=(0,h.Z)(g().mark((function n(){return g().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:window.location.reload();case 1:case"end":return n.stop()}}),n)})))).apply(this,arguments)}(0,s.useEffect)((function(){window.ethereum.on("accountsChanged",e)}),[]);var r=(0,s.useContext)(a.S).number,c=_.fi("".concat(r,".0"));function u(){return(u=(0,h.Z)(g().mark((function e(){var A,i,r,s;return g().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return A=new w.Q(window.ethereum),i=A.getSigner(),r=new x.CH(n,m.M,i),e.next=5,r.mint(t,c);case 5:s=e.sent,console.log(s),A.once(s.hash,(function(n){console.log("Hash emited",n)}));case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function l(){return(l=(0,h.Z)(g().mark((function t(){var e,A,i,r;return g().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=new w.Q(window.ethereum),A=e.getSigner(),i=new x.CH(n,m.M,A),t.next=5,i.burn(c);case 5:r=t.sent,console.log(r);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)("button",{className:o().btn1,onClick:function(){return u.apply(this,arguments)},children:"MINT"}),(0,A.jsx)("button",{className:o().btn2,onClick:function(){return l.apply(this,arguments)},children:"BURN"})]})},C=e(691),b={src:"/_next/static/media/right.0ff99ffa.png",height:256,width:256,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAOUlEQVR42mMAAkYGEGAGETCuEoMikGSBCDABsSLDIQYVqCooJcOwFyzEhBDYAxGAaTkI1YJpKIa1AD6YBLNtueraAAAAAElFTkSuQmCC"},B={src:"/_next/static/media/left.228a9fcf.png",height:256,width:256,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAPUlEQVR42mOAAmYwyQjjsgCxPBAChWCyKgwHGBSANBMQgbl7GGQgXCQBmEkwLQcZFMHSMEOBXCUgyYhhLQA49wSp5cHC2wAAAABJRU5ErkJggg=="};var j=function(){var n=(0,s.useContext)(a.S),t=n.number,e=n.setNumber;return(0,A.jsxs)("div",{className:o().counter,children:[(0,A.jsx)("button",{className:o().arrows,onClick:function(){e(t-1>1?t-1:1)},children:(0,A.jsx)(l(),{src:B,height:37,width:37,quality:100,alt:"arrow"})}),(0,A.jsx)("div",{className:o().numbers,children:(0,A.jsxs)("h1",{children:[" ",t," "]})}),(0,A.jsx)("button",{className:o().arrows,onClick:function(){e(t+1<=15?t+1:15)},children:(0,A.jsx)(l(),{src:b,height:37,width:37,quality:100,alt:"arrow"})})]})},E={src:"/_next/static/media/info-1.9037039e.png",height:512,width:512,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAARElEQVR42jXIoRGAMBAAsIyCAd9XHAoPRyspE/T3XwDVyEBITZMKhG7qCglWGxhUsFtAnXE6ZgxwuUESXtMnIAyPKgU/tfMKZdi24gwAAAAASUVORK5CYII="},v=e(8735);var N=function(){var n=(0,s.useContext)(a.S).isConnected,t=(0,A.jsxs)("div",{className:o().info,"data-tip":!0,"data-for":"infoTooltop",children:[(0,A.jsx)(l(),{src:E,height:27,width:27,quality:100,alt:"info-icon"}),(0,A.jsxs)(v.Z,{id:"infoTooltop",place:"right",type:"info",effect:"solid",className:o().toolTip,children:["Token Name: Future ",(0,A.jsx)("br",{}),"Mint: Only 15 Token per Address ",(0,A.jsx)("br",{}),"Burn: Unlimited ",(0,A.jsx)("br",{}),"Max. Supply: 700,000"]})]});return(0,A.jsx)(A.Fragment,{children:(0,A.jsxs)("div",{className:n?o().card:o().cardStart,children:[(0,A.jsxs)("div",{className:o().container,children:[(0,A.jsx)("div",{className:o().coin,children:(0,A.jsx)(l(),{src:d.Z,alt:"Token",height:160,width:160,quality:100})}),(0,A.jsx)("div",{className:o().btnContainer,children:n?(0,A.jsx)(p,{}):(0,A.jsx)(C.Z,{})}),n?(0,A.jsx)(j,{}):null]}),n?t:null]})})},y=e(4855),Q=e(4931),I=e(5642);var S=function(){var n=(0,s.useContext)(a.S).isConnected,t=(0,A.jsx)("p",{className:o().p,children:"Chain: Goerli"}),e=(0,A.jsx)(y.CopyToClipboard,{text:"0x1fe84fE4e1ae96F9b202188f7a6835dB3D27a264",children:(0,A.jsx)("button",{className:o().copy,onClick:function(){return Q.Am.success("Address Copied!",{style:{fontSize:"12px"}})},children:"Token Address"})});return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(r(),{children:(0,A.jsx)("title",{children:"Web3 | Token"})}),(0,A.jsx)("h1",{className:o().h1,children:"Mint your Future"}),(0,A.jsx)(N,{}),n?t:null,n?e:null,(0,A.jsx)(Q.x7,{containerStyle:{top:820}}),(0,A.jsx)(I.Z,{})]})}},4477:function(n){n.exports={container:"BgSecond_container__wwa34"}},2432:function(n){n.exports={btnContainer:"Connect_btnContainer__ULtwd",btn1:"Connect_btn1__e42lt"}},3347:function(n){n.exports={h1:"mint_h1__97Mai",card:"mint_card__157C_",cardStart:"mint_cardStart__ZBM_j",coin:"mint_coin__23uCo",container:"mint_container__qYihl",btnContainer:"mint_btnContainer__nnE7s",btn1:"mint_btn1__G4ZT1",btn2:"mint_btn2__hIamv",numbers:"mint_numbers__zjI1a",arrows:"mint_arrows__F8ylt",counter:"mint_counter__NHs0e",visible:"mint_visible__CvUUq",p:"mint_p__OG__9",copy:"mint_copy__PQ_m0",toast:"mint_toast__PBK0W",info:"mint_info__zcVDv",toolTip:"mint_toolTip__QE6Ma"}}},function(n){n.O(0,[349,735,774,888,179],(function(){return t=8156,n(n.s=t);var t}));var t=n.O();_N_E=t}]);