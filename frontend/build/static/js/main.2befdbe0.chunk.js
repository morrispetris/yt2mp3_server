(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{113:function(e,t,n){},114:function(e,t,n){},139:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(18),o=n.n(c),s=(n(113),n(114),n(43)),i=n(10),u=n(27),d=n.n(u),l=n(36),j=n(59),p=n.n(j),b=window.location.hostname;function f(e){return h.apply(this,arguments)}function h(){return(h=Object(l.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"/download/request",e.next=3,p.a.post("https://".concat(b).concat("/download/request"),{url:t});case 3:return n=e.sent,e.abrupt("return",n.data.id);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(){return(v=Object(l.a)(d.a.mark((function e(t){var n,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="/downloads/".concat(t,"/status"),e.next=3,p.a.get("https://".concat(b).concat(n));case 3:return a=e.sent,e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(){return O.apply(this,arguments)}function O(){return(O=Object(l.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"/downloads",e.next=3,p.a.get("https://".concat(b).concat("/downloads"));case 3:return t=e.sent,e.abrupt("return",t.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(e){return m.apply(this,arguments)}function m(){return(m=Object(l.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="/downloads/".concat(t,"/delete"),e.next=3,p.a.get("https://".concat(b).concat(n));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var g=n(99),y=n(195),k=n(70),N=n(13),C=n(202),I=n(2);function E(e){var t=e.onClick,n=e.error;return Object(I.jsx)(C.a,{disabled:n,id:"convert-button",color:"primary",onClick:t,variant:"contained",children:"Convert"})}var L=n(198);function U(e){var t=e.setUrl,n=e.onEnter,a=e.error;return Object(I.jsx)("div",{className:"UrlInput",children:Object(I.jsx)(L.a,{className:"UrlTextField",error:a,onKeyDown:function(e){"Enter"===e.key&&n()},id:"url-input",label:"Video URL",onChange:function(e){t(e.target.value)},variant:"outlined",helperText:"Enter some URL (e.g. https://www.youtube.com/watch?v=dQw4w9WgXcQ) "})})}var S=function(e){var t=e.onConvert,n=r.a.useState(""),a=Object(N.a)(n,2),c=a[0],o=a[1],s=function(){t(c)},i=r.a.useMemo((function(){return!function(e){var t;try{t=new URL(e)}catch(n){return!1}return"http:"===t.protocol||"https:"===t.protocol}(c)&&!(""===c)}),[c]);return Object(I.jsxs)("div",{className:"InputView",children:[Object(I.jsx)("p",{className:"InsertText",children:"Please insert url"}),Object(I.jsx)(U,{error:i,setUrl:o,onEnter:s}),Object(I.jsx)(E,{error:i,onClick:s})]})},W=Object(g.a)({palette:{primary:{main:k.a[500]},secondary:{main:k.a[800]}}});var _=function(){function e(){return(e=Object(l.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f(t);case 2:n=e.sent,window.location.href="/view/downloads/".concat(n);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(I.jsx)(y.a,{theme:W,children:Object(I.jsx)("div",{className:"Converter",children:Object(I.jsx)(S,{onConvert:function(t){return e.apply(this,arguments)}})})})},D=n(25),R=n(204),T=n(200),F=n(196),P=n(206),q=n(201),A=n(199),H=n(205),J=n(97),M=n.n(J),Q=n(98),V=n.n(Q);function B(e){var t=r.a.useState([]),n=Object(N.a)(t,2),a=n[0],c=n[1],o=r.a.useState([]),s=Object(N.a)(o,2),i=s[0],u=s[1],j=function(e){return function(){if(i.includes(e)){var t=Object(D.a)(i);t.splice(i.indexOf(e),1),u(t)}else{var n=Object(D.a)(i);n.push(e),u(n)}}},p=function(e){return function(){var t=function(e){return"https://".concat(b,"/downloads/").concat(e)}(e);window.open(t)}},f=function(e){return Object(l.a)(d.a.mark((function t(){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w(e);case 2:x().then((function(e){return c(e)}));case 3:case"end":return t.stop()}}),t)})))};return r.a.useEffect((function(){x().then((function(e){return c(e)}))}),[]),0===a.length?Object(I.jsx)("div",{className:"DownloadsWrapper",children:"No downloads available yet. \ud83e\udd37"}):Object(I.jsx)("div",{className:"DownloadsWrapper",children:Object(I.jsx)(R.a,{sx:{width:"100%",maxWidth:360,bgcolor:"#c1ffebbf"},children:a.map((function(e){return Object(I.jsx)(T.a,{secondaryAction:Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)(H.a,{edge:"end","aria-label":"download",onClick:p(e),children:Object(I.jsx)(M.a,{})}),Object(I.jsx)(H.a,{edge:"end","aria-label":"delete",onClick:f(e),children:Object(I.jsx)(V.a,{})})]}),disablePadding:!0,children:Object(I.jsxs)(F.a,{role:void 0,onClick:j(e),dense:!0,children:[Object(I.jsx)(P.a,{children:Object(I.jsx)(A.a,{edge:"start",checked:i.includes(e),tabIndex:-1,disableRipple:!0,inputProps:{"aria-labelledby":e}})}),Object(I.jsx)(q.a,{id:e,primary:e})]})},e)}))})})}var K=n(197),X=n.p+"static/media/loadcat.1a586006.gif";var z=function(){var e=Object(i.g)().downloadId,t=r.a.useState(null),n=Object(N.a)(t,2),a=n[0],c=n[1];r.a.useEffect((function(){var t=setInterval((function(){e&&function(e){return v.apply(this,arguments)}(e).then((function(e){return c(e)}))}),1e3);return function(){return clearInterval(t)}}),[e]);var o=(null===a||void 0===a?void 0:a.is_playlist)?"".concat(a.info,"  ").concat(a.playlist_index,"/").concat(a.playlist_count):(null===a||void 0===a?void 0:a.info)?"".concat(null===a||void 0===a?void 0:a.info," "):"Loading";return r.a.useEffect((function(){"finished"===(null===a||void 0===a?void 0:a.status)&&(window.location.href="/view/downloads")}),[a]),Object(I.jsxs)(I.Fragment,{children:[Object(I.jsxs)("div",{className:"LoadingWrapper",children:[Object(I.jsx)("img",{src:X,alt:"loading_cat",className:"LoadingCat"}),Object(I.jsx)("div",{className:"LoadingText",children:o||"Loading"})]}),Object(I.jsx)(K.a,{style:{margin:"10%",width:"80%"}})]})};var G=function(){return Object(I.jsxs)("header",{className:"Header",children:[Object(I.jsx)(s.b,{to:"/",children:"Home"}),Object(I.jsx)(s.b,{to:"/view/in_progress",children:"In progress"}),Object(I.jsx)(s.b,{to:"/view/downloads",children:"Downloads"})]})};var Y=function(){return Object(I.jsx)("div",{className:"App",children:Object(I.jsxs)(s.a,{children:[Object(I.jsx)(G,{}),Object(I.jsxs)(i.c,{children:[Object(I.jsx)(i.a,{path:"",element:Object(I.jsx)(_,{})}),Object(I.jsx)(i.a,{path:"/view/downloads",element:Object(I.jsx)(B,{})}),Object(I.jsx)(i.a,{path:"/view/downloads/:downloadId",element:Object(I.jsx)(z,{})})]})]})})};o.a.render(Object(I.jsx)(r.a.StrictMode,{children:Object(I.jsx)(Y,{})}),document.getElementById("root"))}},[[139,1,2]]]);
//# sourceMappingURL=main.2befdbe0.chunk.js.map