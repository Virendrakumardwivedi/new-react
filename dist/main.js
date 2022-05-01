(()=>{"use strict";
var e,n,r,t,o,a,i,s,c,u,l,p,d,f,h={126:(e,n,r)=>{r.d(n,{Z:()=>s});
var t=r(81),o=r.n(t),a=r(645),i=r.n(a)()(o());i.push([e.id,"#navbar{\r\n    margin: auto;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    border: 1px solid blue;\r\n    align-items: center;\r\n    border-radius:5px;\r\n\r\n}\r\n#options{\r\n    display: flex;\r\n    gap: 20px;\r\n}\r\na{\r\n    text-decoration: none;\r\n    font-size: 20px;\r\n    font-weight: bold;\r\n    color: green;\r\n}",""]);const s=i},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var r="",t=void 0!==n[5];return n[4]&&(r+="@supports (".concat(n[4],") {")),n[2]&&(r+="@media ".concat(n[2]," {")),t&&(r+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),r+=e(n),t&&(r+="}"),n[2]&&(r+="}"),n[4]&&(r+="}"),r})).join("")},n.i=function(e,r,t,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(t)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var u=0;u<e.length;u++){var l=[].concat(e[u]);t&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),r&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=r):l[2]=r),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),n.push(l))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function r(e){for(var r=-1,t=0;t<n.length;t++)if(n[t].identifier===e){r=t;break}return r}function t(e,t){for(var a={},i=[],s=0;s<e.length;s++){var c=e[s],u=t.base?c[0]+t.base:c[0],l=a[u]||0,p="".concat(u," ").concat(l);a[u]=l+1;var d=r(p),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==d)n[d].references++,n[d].updater(f);else{var h=o(f,t);t.byIndex=s,n.splice(s,0,{identifier:p,updater:h,references:1})}i.push(p)}return i}function o(e,n){var r=n.domAPI(n);return r.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;r.update(e=n)}else r.remove()}}e.exports=function(e,o){var a=t(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var s=r(a[i]);n[s].references--}for(var c=t(e,o),u=0;u<a.length;u++){var l=r(a[u]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}a=c}}},569:e=>{var n={};e.exports=function(e,r){var t=function(e){if(void 0===n[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}n[e]=r}return n[e]}(e);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(r)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,r)=>{e.exports=function(e){var n=r.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(r){!function(e,n,r){var t="";r.supports&&(t+="@supports (".concat(r.supports,") {")),r.media&&(t+="@media ".concat(r.media," {"));var o=void 0!==r.layer;o&&(t+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),t+=r.css,o&&(t+="}"),r.media&&(t+="}"),r.supports&&(t+="}");var a=r.sourceMap;a&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(t,e,n.options)}(n,e,r)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},v={};function m(e){var n=v[e];if(void 0!==n)return n.exports;var r=v[e]={id:e,exports:{}};return h[e](r,r.exports,m),r.exports}m.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return m.d(n,{a:n}),n},m.d=(e,n)=>{for(var r in n)m.o(n,r)&&!m.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},m.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),e=m(379),n=m.n(e),r=m(795),t=m.n(r),o=m(569),a=m.n(o),i=m(565),s=m.n(i),c=m(216),u=m.n(c),l=m(589),p=m.n(l),d=m(126),(f={}).styleTagTransform=p(),f.setAttributes=s(),f.insert=a().bind(null,"head"),f.domAPI=t(),f.insertStyleElement=u(),n()(d.Z,f),d.Z&&d.Z.locals&&d.Z.locals,document.getElementById("navbar").innerHTML='\n    <h3>\n    <a href="/">Home</a>\n</h3>\n<div id="options">\n    <h3>\n        <a href="/jewelery.html">jewelery</a>\n    </h3>\n    <h3>\n        <a href="/electronics.html">Electronics</a>\n    </h3>\n    <h3>\n        <a href="login.html">Log In</a>\n    </h3>\n    <h3>\n        <a href="signup.html">Sign Up</a>\n    </h3>\n</div>\n'})();