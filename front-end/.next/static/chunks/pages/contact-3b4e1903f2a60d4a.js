(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[335],{8105:function(e,A,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/contact",function(){return t(4148)}])},6110:function(e,A){"use strict";A.Z={src:"/_next/static/media/bg-3.8b5501a0.jpg",height:1080,width:1920,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABwEBAAAAAAAAAAAAAAAAAAAABP/aAAwDAQACEAMQAAAAk4WL/8QAGhAAAQUBAAAAAAAAAAAAAAAAAgABBBETIf/aAAgBAQABPwCA469G1//EABcRAAMBAAAAAAAAAAAAAAAAAAABAyL/2gAIAQIBAT8Ai8H/xAAWEQEBAQAAAAAAAAAAAAAAAAABAwD/2gAIAQMBAT8AuDTf/9k="}},5642:function(e,A,t){"use strict";var n=t(5893),s=(t(7294),t(6110)),a=t(5675),i=t.n(a),r=t(4477),o=t.n(r);A.Z=function(){return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("div",{className:o().container,children:(0,n.jsx)(i(),{src:s.Z,layout:"fill",objectFit:"cover",quality:100,alt:"background"})})})}},4148:function(e,A,t){"use strict";t.r(A),t.d(A,{default:function(){return x}});var n=t(5893),s=t(9008),a=t.n(s),i=t(7294),r=t(5642),o=t(5400),c=t.n(o);const l={_origin:"https://api.emailjs.com"},m=(e,A,t)=>{if(!e)throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!A)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!t)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class u{constructor(e){this.status=e.status,this.text=e.responseText}}const d=(e,A,t={})=>new Promise(((n,s)=>{const a=new XMLHttpRequest;a.addEventListener("load",(({target:e})=>{const A=new u(e);200===A.status||"OK"===A.text?n(A):s(A)})),a.addEventListener("error",(({target:e})=>{s(new u(e))})),a.open("POST",l._origin+e,!0),Object.keys(t).forEach((e=>{a.setRequestHeader(e,t[e])})),a.send(A)}));var h=(e,A,t,n)=>{const s=n||l._userID,a=(e=>{let A;if(A="string"===typeof e?document.querySelector(e):e,!A||"FORM"!==A.nodeName)throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return A})(t);m(s,e,A);const i=new FormData(a);return i.append("lib_version","3.6.2"),i.append("service_id",e),i.append("template_id",A),i.append("user_id",s),d("/api/v1.0/email/send-form",i)},g=t(5675),f=t.n(g),_={src:"/_next/static/media/linkedin-icon.c52ec82d.png",height:50,width:50,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAbElEQVR42jXIsQ1BURhA4W+AaxWt0IoVNJLnkvcq8V6EsIcNLCHRWUGloTGAEVx/JHJymo+ksrKwVJvpUSne8a8grZejP9R0bjbRxFTRsHMxMnDSd7VlHzAMuBs7O5AVj+jjqZiTZJ21RitLX7LPI8f9FwdqAAAAAElFTkSuQmCC"},p=function(){var e=(0,i.useRef)();return(0,n.jsx)("div",{children:(0,n.jsxs)("form",{className:c().form,ref:e,onSubmit:function(A){A.preventDefault(),h("service_59dt0oc","template_wi7rniv",e.current,"VJvlZ5JVm5KqB7YEd").then((function(e){console.log(e.text)}),(function(e){console.log(e.text)})),A.target.reset()},children:[(0,n.jsx)("label",{htmlFor:"usuario",className:c().h2,children:"Name:"}),(0,n.jsx)("input",{placeholder:"Name...",className:c().usuario,name:"usuario",type:"text"}),(0,n.jsx)("label",{htmlFor:"email",className:c().h2,children:"E-mail:"}),(0,n.jsx)("input",{placeholder:"E-mail...",className:c().gmail,name:"email",type:"email"}),(0,n.jsx)("label",{htmlFor:"message",className:c().h2,children:"Message:"}),(0,n.jsx)("textarea",{placeholder:"Write your message...",className:c().message,name:"message"}),(0,n.jsx)("button",{type:"submit",className:c().btn,children:"Send"}),(0,n.jsx)("div",{className:c().linkedin,children:(0,n.jsx)("a",{href:"https://www.linkedin.com/in/brian-galdo/",target:"_blank",rel:"noreferrer",children:(0,n.jsx)(f(),{src:_,width:40,height:40,alt:"linkedin"})})})]})})};var x=function(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a(),{children:(0,n.jsx)("title",{children:"Web3 | Contact"})}),(0,n.jsx)(p,{}),(0,n.jsx)(r.Z,{})]})}},4477:function(e){e.exports={container:"BgSecond_container__wwa34"}},5400:function(e){e.exports={form:"form_form___uKw5",usuario:"form_usuario__1FnUZ",gmail:"form_gmail__FkWNi",message:"form_message__gMhWO",h2:"form_h2__MMTuA",btn:"form_btn__6nJoN",linkedin:"form_linkedin__iMJNw"}}},function(e){e.O(0,[774,888,179],(function(){return A=8105,e(e.s=A);var A}));var A=e.O();_N_E=A}]);