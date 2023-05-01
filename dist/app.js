(()=>{"use strict";var e={466:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(81),a=n.n(r),i=n(645),s=n.n(i)()(a());s.push([e.id,".key{\r\n  min-width: fit-content;\r\n  height: 40px;\r\n  flex-basis: 40px;\r\n}\r\n.key_semiwide{\r\n  flex-basis: 53px;\r\n}\r\n.key__shell{\r\n  background-color: #bebebe;\r\n  box-sizing: border-box;\r\n  display: flex;\r\n  padding: 3px 5px;\r\n  border-radius: 5px;\r\n}\r\n.key__shell_type_spec{\r\n  background-color: #405857;\r\n}\r\n.key__shell_type_letter{\r\n  background-color: #4ca5a1;\r\n}\r\n.key__shell_type_punct{\r\n  display: flex;\r\n  flex-direction: column-reverse;\r\n  background-color: #70be9a;\r\n}\r\n.key__shell_stretch{\r\n  flex-grow: 1;\r\n}\r\n.key__desc{\r\n  box-sizing: border-box;\r\n  width: 100%;\r\n  height: 100%;\r\n  display: block;\r\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\r\n  font-size: 16px;\r\n  font-weight: 700;\r\n  text-align: center;\r\n  color: #192222;\r\n  cursor: default;\r\n}\r\n\r\n.key__desc_type_spec{\r\n  letter-spacing: -0.05rem;\r\n  line-height: 34px;\r\n  color: #ebe7d1;\r\n}\r\n.key__desc_type_letter-main{\r\n  font-size: 20px;\r\n  text-align: center;\r\n  line-height: 34px;\r\n}\r\n.key__desc_type_letter-alt{\r\n  display: none;\r\n}\r\n.key__desc_type_punct-main{\r\n  text-align: left;\r\n  line-height: 15px;\r\n}\r\n.key__desc_type_punct-alt{\r\n  font-size: 10px;\r\n  text-align: left;\r\n  line-height: 15px;\r\n}\r\n/* hover, focus and active */\r\n.key__shell{\r\n  transition: 0.1s cubic-bezier(0.65, 0.05, 0.36, 1);\r\n  transform: translateY(0);\r\n  box-shadow: 0 3px 3px rgba(19, 32, 27, 0.8)\r\n}\r\n\r\n.key__shell:active, .key__shell_active{\r\n  transform: translateY(2px);\r\n  box-shadow: 0 1px 4px rgba(19, 32, 27, 0.8);\r\n}\r\n\r\n.key__shell_type_spec:active, .key__shell_type_spec.key__shell_active{\r\n  background-color: #a00f0f;\r\n}\r\n.key__shell_type_letter:active, .key__shell_type_letter.key__shell_active{\r\n  background-color: #c8ff2f;\r\n}\r\n.key__shell_type_punct:active, .key__shell_type_punct.key__shell_active{\r\n  background-color: #e4d449;\r\n}\r\n\r\n",""]);const l=s},580:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(81),a=n.n(r),i=n(645),s=n.n(i)()(a());s.push([e.id,"@media (max-width: 767.98px){\n  .key{\n    grid-column: span 1;\n    height: 35px;\n  }\n  .key__shell{\n    padding: 0;\n    border: none;\n    border-radius: 3px;\n  }\n  .key__shell_media_span2{\n    grid-column: span 2;\n  }\n  .key__desc{\n    font-size: 14px;\n  }\n\n  .key__desc_type_spec{\n    letter-spacing: -0.08rem;\n    line-height: 35px;\n  }\n  .key__desc_type_letter-main, .key__desc_type_punct-main{\n    font-size: 18px;\n    text-align: center;\n    line-height: 35px;\n  }\n  .key__desc_type_letter-alt, .key__desc_type_punct-alt{\n    display: none;\n  }\n  /* hover, focus and active */\n  .key__shell{\n    box-shadow: 0 2px 2px rgba(19, 32, 27, 0.8)\n  }\n  .key__shell:active, .key__shell_active{\n    transform: translateY(1px);\n    box-shadow: 0 2px 2px rgba(19, 32, 27, 0.8);\n  }\n}\n@media (max-width: 574.98px) {\n  .key{\n    height: 30px;\n  }\n  .key__shell{\n    border: solid 1px #344747;\n    border-radius: 0;\n  }\n  .key__desc{\n    font-size: 11px;\n  }\n\n  .key__desc_type_spec{\n    letter-spacing: -0.08rem;\n    line-height: 30px;\n  }\n  .key__desc_type_letter-main, .key__desc_type_punct-main{\n    font-size: 16px;\n    line-height: 30px;\n  }\n  /* hover, focus and active */\n  .key__shell{\n    box-shadow: none;\n  }\n  .key__shell:active, .key__shell_active{\n    transform: none;\n    box-shadow: none;\n  }\n}",""]);const l=s},637:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(81),a=n.n(r),i=n(645),s=n.n(i)()(a());s.push([e.id,".keyboard{\r\n  box-sizing: border-box;\r\n  padding: 15px;\r\n}\r\n.keyboard__shell{\r\n  max-width: 800px;\r\n  min-width: fit-content;\r\n  min-height: fit-content;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 10px;\r\n  background-color: #c5ded5;\r\n  border: solid #6a7772 2px;\r\n  border-radius: 20px;\r\n}\r\n.keyboard__row{\r\n  display: flex;\r\n  flex-direction: row;\r\n  gap: 10px;\r\n}",""]);const l=s},83:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(81),a=n.n(r),i=n(645),s=n.n(i)()(a());s.push([e.id,"@media (max-width: 767.98px){\r\n  .keyboard{\r\n    width: fit-content;\r\n    padding: 5px;\r\n  }\r\n  .keyboard__shell{\r\n    gap: 2px;\r\n    background-color: #7f8887;\r\n    border: solid #4b5050 2px;\r\n    border-radius: 5px;\r\n  }\r\n  .keyboard__row{\r\n    display: grid;\r\n    grid-template-columns: repeat(15, 35px);\r\n    gap: 2px;\r\n  }\r\n  .keyboard__row:last-child{\r\n    grid-template-columns: repeat(3, 35px) 1fr repeat(5, 35px);\r\n  }\r\n}\r\n@media (max-width: 574.98px) {\r\n  .keyboard{\r\n    padding: 2px;\r\n  }\r\n  .keyboard__shell{\r\n    gap: 0;\r\n    border-radius: 2px;\r\n  }\r\n  .keyboard__row{\r\n    grid-template-columns: repeat(15, 30px);\r\n    gap: 0;\r\n  }\r\n  .keyboard__row:last-child{\r\n    grid-template-columns: repeat(3, 30px) 1fr repeat(5, 30px);\r\n  }\r\n}\r\n\r\n",""]);const l=s},775:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(81),a=n.n(r),i=n(645),s=n.n(i)()(a());s.push([e.id,".textarea{\n  box-sizing: border-box;\n  padding: 20px;\n  font-family: 'Times New Roman', Times, serif;\n  font-size: 20px;\n  text-align: justify;\n  line-height: 110%;\n}",""]);const l=s},555:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(81),a=n.n(r),i=n(645),s=n.n(i)()(a());s.push([e.id,"@media (max-width: 767.98px) {\n  .textarea{\n    padding: 15px;\n    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\n    font-size: 18px;\n    text-align: justify;\n    line-height: 110%;\n  }\n}\n@media (max-width: 574.98px) {\n  .textarea{\n    padding: 10px;\n    font-size: 16px;\n    text-align: justify;\n    line-height: 120%;\n  }\n}",""]);const l=s},24:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(81),a=n.n(r),i=n(645),s=n.n(i)()(a());s.push([e.id,'/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\r\n\r\n/* Document\r\n   ========================================================================== */\r\n\r\n/**\r\n * 1. Correct the line height in all browsers.\r\n * 2. Prevent adjustments of font size after orientation changes in iOS.\r\n */\r\n\r\nhtml {\r\n  line-height: 1.15; /* 1 */\r\n  -webkit-text-size-adjust: 100%; /* 2 */\r\n}\r\n\r\n/* Sections\r\n   ========================================================================== */\r\n\r\n/**\r\n * Remove the margin in all browsers.\r\n */\r\n\r\nbody {\r\n  margin: 0;\r\n}\r\n\r\n/**\r\n * Render the `main` element consistently in IE.\r\n */\r\n\r\nmain {\r\n  display: block;\r\n}\r\n\r\n/**\r\n * Correct the font size and margin on `h1` elements within `section` and\r\n * `article` contexts in Chrome, Firefox, and Safari.\r\n */\r\n\r\nh1 {\r\n  font-size: 2em;\r\n  margin: 0;\r\n}\r\n\r\n/* Grouping content\r\n   ========================================================================== */\r\n\r\n/**\r\n * 1. Add the correct box sizing in Firefox.\r\n * 2. Show the overflow in Edge and IE.\r\n */\r\n\r\nhr {\r\n  box-sizing: content-box; /* 1 */\r\n  height: 0; /* 1 */\r\n  overflow: visible; /* 2 */\r\n}\r\n\r\n/**\r\n * 1. Correct the inheritance and scaling of font size in all browsers.\r\n * 2. Correct the odd `em` font sizing in all browsers.\r\n */\r\n\r\npre {\r\n  font-family: monospace, monospace; /* 1 */\r\n  font-size: 1em; /* 2 */\r\n}\r\n\r\n/* Text-level semantics\r\n   ========================================================================== */\r\n\r\n/**\r\n * Remove the gray background on active links in IE 10.\r\n */\r\n\r\na {\r\n  background-color: transparent;\r\n}\r\n\r\n/**\r\n * 1. Remove the bottom border in Chrome 57-\r\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\r\n */\r\n\r\nabbr[title] {\r\n  border-bottom: none; /* 1 */\r\n  text-decoration: underline; /* 2 */\r\n  text-decoration: underline dotted; /* 2 */\r\n}\r\n\r\n/**\r\n * Add the correct font weight in Chrome, Edge, and Safari.\r\n */\r\n\r\nb,\r\nstrong {\r\n  font-weight: bolder;\r\n}\r\n\r\n/**\r\n * 1. Correct the inheritance and scaling of font size in all browsers.\r\n * 2. Correct the odd `em` font sizing in all browsers.\r\n */\r\n\r\ncode,\r\nkbd,\r\nsamp {\r\n  font-family: monospace, monospace; /* 1 */\r\n  font-size: 1em; /* 2 */\r\n}\r\n\r\n/**\r\n * Add the correct font size in all browsers.\r\n */\r\n\r\nsmall {\r\n  font-size: 80%;\r\n}\r\n\r\n/**\r\n * Prevent `sub` and `sup` elements from affecting the line height in\r\n * all browsers.\r\n */\r\n\r\nsub,\r\nsup {\r\n  font-size: 75%;\r\n  line-height: 0;\r\n  position: relative;\r\n  vertical-align: baseline;\r\n}\r\n\r\nsub {\r\n  bottom: -0.25em;\r\n}\r\n\r\nsup {\r\n  top: -0.5em;\r\n}\r\n\r\n/* Embedded content\r\n   ========================================================================== */\r\n\r\n/**\r\n * Remove the border on images inside links in IE 10.\r\n */\r\n\r\nimg {\r\n  border-style: none;\r\n}\r\n\r\n/* Forms\r\n   ========================================================================== */\r\n\r\n/**\r\n * 1. Change the font styles in all browsers.\r\n * 2. Remove the margin in Firefox and Safari.\r\n */\r\n\r\nbutton,\r\ninput,\r\noptgroup,\r\nselect,\r\ntextarea {\r\n  font-family: inherit; /* 1 */\r\n  font-size: 100%; /* 1 */\r\n  line-height: 1.15; /* 1 */\r\n  margin: 0; /* 2 */\r\n}\r\n\r\n/**\r\n * Show the overflow in IE.\r\n * 1. Show the overflow in Edge.\r\n */\r\n\r\nbutton,\r\ninput { /* 1 */\r\n  overflow: visible;\r\n}\r\n\r\n/**\r\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\r\n * 1. Remove the inheritance of text transform in Firefox.\r\n */\r\n\r\nbutton,\r\nselect { /* 1 */\r\n  text-transform: none;\r\n}\r\n\r\n/**\r\n * Correct the inability to style clickable types in iOS and Safari.\r\n */\r\n\r\nbutton,\r\n[type="button"],\r\n[type="reset"],\r\n[type="submit"] {\r\n  -webkit-appearance: button;\r\n}\r\n\r\n/**\r\n * Remove the inner border and padding in Firefox.\r\n */\r\n\r\nbutton::-moz-focus-inner,\r\n[type="button"]::-moz-focus-inner,\r\n[type="reset"]::-moz-focus-inner,\r\n[type="submit"]::-moz-focus-inner {\r\n  border-style: none;\r\n  padding: 0;\r\n}\r\n\r\n/**\r\n * Restore the focus styles unset by the previous rule.\r\n */\r\n\r\nbutton:-moz-focusring,\r\n[type="button"]:-moz-focusring,\r\n[type="reset"]:-moz-focusring,\r\n[type="submit"]:-moz-focusring {\r\n  outline: 1px dotted ButtonText;\r\n}\r\n\r\n/**\r\n * Correct the padding in Firefox.\r\n */\r\n\r\nfieldset {\r\n  padding: 0.35em 0.75em 0.625em;\r\n}\r\n\r\n/**\r\n * 1. Correct the text wrapping in Edge and IE.\r\n * 2. Correct the color inheritance from `fieldset` elements in IE.\r\n * 3. Remove the padding so developers are not caught out when they zero out\r\n *    `fieldset` elements in all browsers.\r\n */\r\n\r\nlegend {\r\n  box-sizing: border-box; /* 1 */\r\n  color: inherit; /* 2 */\r\n  display: table; /* 1 */\r\n  max-width: 100%; /* 1 */\r\n  padding: 0; /* 3 */\r\n  white-space: normal; /* 1 */\r\n}\r\n\r\n/**\r\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\r\n */\r\n\r\nprogress {\r\n  vertical-align: baseline;\r\n}\r\n\r\n/**\r\n * Remove the default vertical scrollbar in IE 10+.\r\n */\r\n\r\ntextarea {\r\n  overflow: auto;\r\n}\r\n\r\n/**\r\n * 1. Add the correct box sizing in IE 10.\r\n * 2. Remove the padding in IE 10.\r\n */\r\n\r\n[type="checkbox"],\r\n[type="radio"] {\r\n  box-sizing: border-box; /* 1 */\r\n  padding: 0; /* 2 */\r\n}\r\n\r\n/**\r\n * Correct the cursor style of increment and decrement buttons in Chrome.\r\n */\r\n\r\n[type="number"]::-webkit-inner-spin-button,\r\n[type="number"]::-webkit-outer-spin-button {\r\n  height: auto;\r\n}\r\n\r\n/**\r\n * 1. Correct the odd appearance in Chrome and Safari.\r\n * 2. Correct the outline style in Safari.\r\n */\r\n\r\n[type="search"] {\r\n  -webkit-appearance: textfield; /* 1 */\r\n  outline-offset: -2px; /* 2 */\r\n}\r\n\r\n/**\r\n * Remove the inner padding in Chrome and Safari on macOS.\r\n */\r\n\r\n[type="search"]::-webkit-search-decoration {\r\n  -webkit-appearance: none;\r\n}\r\n\r\n/**\r\n * 1. Correct the inability to style clickable types in iOS and Safari.\r\n * 2. Change font properties to `inherit` in Safari.\r\n */\r\n\r\n::-webkit-file-upload-button {\r\n  -webkit-appearance: button; /* 1 */\r\n  font: inherit; /* 2 */\r\n}\r\n\r\n/* Interactive\r\n   ========================================================================== */\r\n\r\n/*\r\n * Add the correct display in Edge, IE 10+, and Firefox.\r\n */\r\n\r\ndetails {\r\n  display: block;\r\n}\r\n\r\n/*\r\n * Add the correct display in all browsers.\r\n */\r\n\r\nsummary {\r\n  display: list-item;\r\n}\r\n\r\n/* Misc\r\n   ========================================================================== */\r\n\r\n/**\r\n * Add the correct display in IE 10+.\r\n */\r\n\r\ntemplate {\r\n  display: none;\r\n}\r\n\r\n/**\r\n * Add the correct display in IE 10.\r\n */\r\n\r\n[hidden] {\r\n  display: none;\r\n}\r\n',""]);const l=s},28:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(81),a=n.n(r),i=n(645),s=n.n(i)()(a());s.push([e.id,".wrap{\n  max-width: 900px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 20px;\n  padding: 20px 10px;\n  margin: 0 auto;\n}\n.wrap__title{\n\n}\n.wrap__p{\n  margin: 0.3em;\n}\n.wrap__textarea, .wrap__keyboard{\n  width: 100%;\n}",""]);const l=s},714:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(81),a=n.n(r),i=n(645),s=n.n(i)()(a());s.push([e.id,"@media (max-width: 768px){\n  .wrap{\n    height: 100%;\n    max-width: 850px;\n    padding: 10px 10px;\n  }\n  .wrap__textarea {\n    width: 100%;\n  }\n  .wrap__keyboard {\n    position: fixed;\n    bottom: 0;\n  }\n}",""]);const l=s},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,a,i){"string"==typeof e&&(e=[[null,e,void 0]]);var s={};if(r)for(var l=0;l<this.length;l++){var o=this[l][0];null!=o&&(s[o]=!0)}for(var c=0;c<e.length;c++){var y=[].concat(e[c]);r&&s[y[0]]||(void 0!==i&&(void 0===y[5]||(y[1]="@layer".concat(y[5].length>0?" ".concat(y[5]):""," {").concat(y[1],"}")),y[5]=i),n&&(y[2]?(y[1]="@media ".concat(y[2]," {").concat(y[1],"}"),y[2]=n):y[2]=n),a&&(y[4]?(y[1]="@supports (".concat(y[4],") {").concat(y[1],"}"),y[4]=a):y[4]="".concat(a)),t.push(y))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var i={},s=[],l=0;l<e.length;l++){var o=e[l],c=r.base?o[0]+r.base:o[0],y=i[c]||0,p="".concat(c," ").concat(y);i[c]=y+1;var d=n(p),h={css:o[1],media:o[2],sourceMap:o[3],supports:o[4],layer:o[5]};if(-1!==d)t[d].references++,t[d].updater(h);else{var m=a(h,r);r.byIndex=l,t.splice(l,0,{identifier:p,updater:m,references:1})}s.push(p)}return s}function a(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,a){var i=r(e=e||[],a=a||{});return function(e){e=e||[];for(var s=0;s<i.length;s++){var l=n(i[s]);t[l].references--}for(var o=r(e,a),c=0;c<i.length;c++){var y=n(i[c]);0===t[y].references&&(t[y].updater(),t.splice(y,1))}i=o}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,a&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var i=t[r]={id:r,exports:{}};return e[r](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{var e=n(379),t=n.n(e),r=n(795),a=n.n(r),i=n(569),s=n.n(i),l=n(565),o=n.n(l),c=n(216),y=n.n(c),p=n(589),d=n.n(p),h=n(24),m={};m.styleTagTransform=d(),m.setAttributes=o(),m.insert=s().bind(null,"head"),m.domAPI=a(),m.insertStyleElement=y(),t()(h.Z,m),h.Z&&h.Z.locals&&h.Z.locals;var k=n(28),u={};u.styleTagTransform=d(),u.setAttributes=o(),u.insert=s().bind(null,"head"),u.domAPI=a(),u.insertStyleElement=y(),t()(k.Z,u),k.Z&&k.Z.locals&&k.Z.locals;var g=n(714),f={};f.styleTagTransform=d(),f.setAttributes=o(),f.insert=s().bind(null,"head"),f.domAPI=a(),f.insertStyleElement=y(),t()(g.Z,f),g.Z&&g.Z.locals&&g.Z.locals;var _=n(775),b={};b.styleTagTransform=d(),b.setAttributes=o(),b.insert=s().bind(null,"head"),b.domAPI=a(),b.insertStyleElement=y(),t()(_.Z,b),_.Z&&_.Z.locals&&_.Z.locals;var x=n(555),C={};function v({tagName:e,className:t,events:n,textContent:r}){const a=document.createElement(e||"div");return t&&(a.className=t),r&&(a.textContent=r),n&&n.forEach((e=>{a.addEventListener(e.event,e.handler)})),a}C.styleTagTransform=d(),C.setAttributes=o(),C.insert=s().bind(null,"head"),C.domAPI=a(),C.insertStyleElement=y(),t()(x.Z,C),x.Z&&x.Z.locals&&x.Z.locals;var T=n(637),w={};w.styleTagTransform=d(),w.setAttributes=o(),w.insert=s().bind(null,"head"),w.domAPI=a(),w.insertStyleElement=y(),t()(T.Z,w),T.Z&&T.Z.locals&&T.Z.locals;var S=n(83),E={};E.styleTagTransform=d(),E.setAttributes=o(),E.insert=s().bind(null,"head"),E.domAPI=a(),E.insertStyleElement=y(),t()(S.Z,E),S.Z&&S.Z.locals&&S.Z.locals;var V=n(466),I={};I.styleTagTransform=d(),I.setAttributes=o(),I.insert=s().bind(null,"head"),I.domAPI=a(),I.insertStyleElement=y(),t()(V.Z,I),V.Z&&V.Z.locals&&V.Z.locals;var L=n(580),A={};A.styleTagTransform=d(),A.setAttributes=o(),A.insert=s().bind(null,"head"),A.domAPI=a(),A.insertStyleElement=y(),t()(L.Z,A),L.Z&&L.Z.locals&&L.Z.locals;const K={BLOCK:"key",WIDE:"key_semiwide",SHELL:"key__shell",SHELL_ACTIVE:"key__shell_active",SHELL_STRETCH:"key__shell_stretch",SHELL_M_SP2:"key__shell_media_span2",SH:{spec:"key__shell_type_spec",letter:"key__shell_type_letter",punct:"key__shell_type_punct"},DESCRIPT:"key__desc",DESC:{spec:"key__desc_type_spec",letterMain:"key__desc_type_letter-main",letterAlt:"key__desc_type_letter-alt",punctMain:"key__desc_type_punct-main",punctAlt:"key__desc_type_punct-alt"}};class N{static{N.array=[],N.languages=["en"],N.lang=0,N.flags={alt:!1,caps:!1,ctrl:!1,shift:!1},N.pendedKeys=[],N.typerInt=new class{constructor(){this.target=null,this.selection={start:0,end:0,get length(){return this.end-this.start}}}getSelection(){this.target.selectionStart||"0"===this.target.selectionStart?(this.selection.start=this.target.selectionStart,this.selection.end=this.target.selectionEnd):(this.selection.start=0,this.selection.end=0)}resetSelection(){this.selection.start=this.target.textContent.length,this.selection.end=this.target.textContent.length}typer({command:e,value:t}){if(!this.target)throw new Error("no target");switch(e){case"typing":{const e=this.target.textContent;this.target.textContent=e.slice(0,this.selection.start)+t+e.slice(this.selection.end),this.selection.start+=1,this.selection.end=this.selection.start;break}case"backspace":{const e=this.target.textContent;this.selection.length>0?this.target.textContent=e.slice(0,this.selection.start)+e.slice(this.selection.end):this.selection.start>0&&(this.target.textContent=e.slice(0,this.selection.start-1)+e.slice(this.selection.end),this.selection.start-=1),this.selection.end=this.selection.start;break}case"delete":{const e=this.target.textContent;this.selection.length>0?this.target.textContent=e.slice(0,this.selection.start)+e.slice(this.selection.end):this.selection.start<this.target.textContent.length&&(this.target.textContent=e.slice(0,this.selection.start)+e.slice(this.selection.end+1)),this.selection.end=this.selection.start;break}case"left":this.selection.length>0?this.selection.end=this.selection.start:this.selection.start>0&&(this.selection.start-=1,this.selection.end=this.selection.start);break;case"right":this.selection.length>0?this.selection.start=this.selection.end:this.selection.start>0&&(this.selection.start+=1,this.selection.end=this.selection.start)}this.target.focus(),this.target.setSelectionRange(this.selection.start,this.selection.end)}}}constructor(e){if(!(e instanceof Object))throw new Error("wrong keymap item");this.keyType="spec"===e.keyType?"spec":e.keyVal[0].type,this.keyId=e.keyCode,this.keyValues=e.keyVal,this.keyActive=!1,this.char="",this.options=e.options,this.shellElement=v({tagName:"div",className:[K.BLOCK,K.SHELL,K.SH[this.keyType]].join(" "),events:[{event:"mousedown",handler:this.click.bind(this)}]}),"spec"===this.keyType?(this.descName=v({tagName:"span",className:[K.DESCRIPT,K.DESC.spec].join(" ")}),this.shellElement.append(this.descName)):(this.descMain=v({tagName:"span",className:K.DESCRIPT}),this.descAlt=v({tagName:"span",className:K.DESCRIPT}),this.shellElement.append(this.descMain,this.descAlt)),this.setShellStyle(!0),this.setChar(),N.array.push(this)}setShellStyle(e){(e||"spec"!==this.keyType&&this.keyType!==this.keyValues[N.lang].type)&&("spec"===this.keyType?(this.shellElement.className=[K.BLOCK,K.SHELL,K.SH.spec].join(" "),this.descName.className=[K.DESCRIPT,K.DESC.spec].join(" ")):(this.keyType=this.keyValues[N.lang].type,this.shellElement.className=[K.BLOCK,K.SHELL,K.SH[this.keyType]].join(" "),this.descMain.className=[K.DESCRIPT,K.DESC[`${this.keyType}Main`]].join(" "),this.descAlt.className=[K.DESCRIPT,K.DESC[`${this.keyType}Alt`]].join(" "))),this.options&&(this.options.includes("stretch")&&this.shellElement.classList.add(K.SHELL_STRETCH),this.options.includes("semiwide")&&this.shellElement.classList.add(K.WIDE),this.options.includes("span2")&&this.shellElement.classList.add(K.SHELL_M_SP2),this.options.includes("span-auto")&&this.shellElement.classList.add(K.SHELL_M_SPAUTO))}setChar(e){if("spec"===this.keyType)this.descName.textContent=this.keyValues;else{let t=!1;e&&(t="letter"===this.keyType?N.flags.caps===!N.flags.shift:N.flags.shift),this.char=this.keyValues[N.lang][t?"alt":"main"],this.descMain.textContent=this.keyValues[N.lang][t?"alt":"main"],this.descAlt.textContent=this.keyValues[N.lang][t?"main":"alt"]}}setActiveState(e){e?(this.shellElement.classList.add(K.SHELL_ACTIVE),this.keyActive=!0):(this.shellElement.classList.remove(K.SHELL_ACTIVE),this.keyActive=!1)}toggleActiveState(){this.setActiveState(!this.keyActive)}click(e){e.preventDefault(),this.options&&(this.options.includes("sticky")||this.options.includes("semisticky"))&&(this.toggleActiveState(),this.options.includes("semisticky")&&(N.pendedKeys.includes(this)?N.pendedKeys.splice(N.pendedKeys.indexOf(this),1):N.pendedKeys.push(this)),"spec"===this.keyType&&(this.keyActive?N.setFlag(this,!0):(N.setFlag(this,!1),N.pendedKeys.length>0&&N.setFlagFromPended()),this.caserCheck())),this.typer()}press(){this.options&&this.options.includes("sticky")?"CapsLock"===this.keyId&&this.toggleActiveState():this.setActiveState(!0),"spec"===this.keyType&&(this.options&&this.options.includes("sticky")?this.keyActive?N.setFlag(this,!0):(N.setFlag(this,!1),N.pendedKeys.length>0&&N.setFlagFromPended()):N.setFlag(this,!0),this.caserCheck()),this.typer()}relese(){"CapsLock"!==this.keyId?this.setActiveState(!1):this.options&&this.options.includes("semisticky")&&N.pendedKeys.includes(this)&&N.pendedKeys.splice(N.pendedKeys.indexOf(this),1),"spec"!==this.keyType||this.options&&this.options.includes("sticky")||(N.setFlag(this,!1),N.pendedKeys.length>0&&N.setFlagFromPended()),"spec"===this.keyType&&this.caserCheck()}typer(){if("spec"===this.keyType){switch(this.keyId){case"Space":N.typerInt.typer({command:"typing",value:" "});break;case"Enter":N.typerInt.typer({command:"typing",value:"\n"});break;case"Tab":N.typerInt.typer({command:"typing",value:"\t"});break;case"Backspace":N.typerInt.typer({command:"backspace",value:""});break;case"Delete":N.typerInt.typer({command:"delete",value:""});break;case"ArrowLeft":N.typerInt.typer({command:"left",value:""});break;case"ArrowRight":N.typerInt.typer({command:"right",value:""})}"AltLeft"!==this.keyId&&"AltRight"!==this.keyId&&"ControlLeft"!==this.keyId&&"ControlRight"!==this.keyId||!N.flags.alt||!N.flags.ctrl||N.flags.shift||(N.nextGlobalLang(),N.resetPended(),N.setGlobalShellStyle(),N.setGlobalChar())}else this.options&&(this.options.includes("sticky")||this.options.includes("semisticky"))||(N.typerInt.typer({command:"typing",value:this.char,flags:N.flags}),N.resetPended())}caserCheck(){"ShiftLeft"!==this.keyId&&"ShiftRight"!==this.keyId&&"CapsLock"!==this.keyId||N.setGlobalChar(!0)}static setGlobalShellStyle(e){N.array.forEach((t=>{t.setShellStyle(e)}))}static setGlobalChar(e){N.array.forEach((t=>{t.setChar(e)}))}static nextGlobalLang(){N.lang=(N.lang+1)%N.languages.length,localStorage.setItem("lang",N.languages[N.lang])}static resetPended(){for(let e=0;e<N.pendedKeys.length;e+=1)N.pendedKeys[e].setActiveState(!1),N.setFlag(N.pendedKeys[e],!1);N.setGlobalChar(!0),N.pendedKeys=[]}static setFlag(e,t){switch(e.keyId){case"AltLeft":case"AltRight":N.flags.alt=t;break;case"CapsLock":N.flags.caps=t;break;case"ControlLeft":case"ControlRight":N.flags.ctrl=t;break;case"ShiftLeft":case"ShiftRight":N.flags.shift=t}}static setFlagFromPended(){N.pendedKeys.forEach((e=>N.setFlag(e,!0)))}}const Z=N,z=[[{keyCode:"Backquote",keyType:"char",keyVal:[{type:"punct",main:"`",alt:"~"},{type:"letter",main:"ё",alt:"Ё"}]},{keyCode:"Digit1",keyType:"char",keyVal:[{type:"punct",main:"1",alt:"!"},{type:"punct",main:"1",alt:"!"}]},{keyCode:"Digit2",keyType:"char",keyVal:[{type:"punct",main:"2",alt:"@"},{type:"punct",main:"2",alt:'"'}]},{keyCode:"Digit3",keyType:"char",keyVal:[{type:"punct",main:"3",alt:"#"},{type:"punct",main:"3",alt:"№"}]},{keyCode:"Digit4",keyType:"char",keyVal:[{type:"punct",main:"4",alt:"$"},{type:"punct",main:"4",alt:";"}]},{keyCode:"Digit5",keyType:"char",keyVal:[{type:"punct",main:"5",alt:"%"},{type:"punct",main:"5",alt:"%"}]},{keyCode:"Digit6",keyType:"char",keyVal:[{type:"punct",main:"6",alt:"^"},{type:"punct",main:"6",alt:":"}]},{keyCode:"Digit7",keyType:"char",keyVal:[{type:"punct",main:"7",alt:"&"},{type:"punct",main:"7",alt:"?"}]},{keyCode:"Digit8",keyType:"char",keyVal:[{type:"punct",main:"8",alt:"*"},{type:"punct",main:"8",alt:"*"}]},{keyCode:"Digit9",keyType:"char",keyVal:[{type:"punct",main:"9",alt:"("},{type:"punct",main:"9",alt:"("}]},{keyCode:"Digit0",keyType:"char",keyVal:[{type:"punct",main:"0",alt:")"},{type:"punct",main:"0",alt:")"}]},{keyCode:"Minus",keyType:"char",keyVal:[{type:"punct",main:"-",alt:"_"},{type:"punct",main:"-",alt:"_"}]},{keyCode:"Equal",keyType:"char",keyVal:[{type:"punct",main:"=",alt:"+"},{type:"punct",main:"=",alt:"+"}]},{keyCode:"Backspace",keyType:"spec",keyVal:"Backspace",options:["stretch","span2"]}],[{keyCode:"Tab",keyType:"spec",keyVal:"Tab",options:["stretch","semiwide"]},{keyCode:"KeyQ",keyType:"char",keyVal:[{type:"letter",main:"q",alt:"Q"},{type:"letter",main:"й",alt:"Й"}]},{keyCode:"KeyW",keyType:"char",keyVal:[{type:"letter",main:"w",alt:"W"},{type:"letter",main:"ц",alt:"Ц"}]},{keyCode:"KeyE",keyType:"char",keyVal:[{type:"letter",main:"e",alt:"E"},{type:"letter",main:"у",alt:"У"}]},{keyCode:"KeyR",keyType:"char",keyVal:[{type:"letter",main:"r",alt:"R"},{type:"letter",main:"к",alt:"К"}]},{keyCode:"KeyT",keyType:"char",keyVal:[{type:"letter",main:"t",alt:"T"},{type:"letter",main:"е",alt:"Е"}]},{keyCode:"KeyY",keyType:"char",keyVal:[{type:"letter",main:"y",alt:"Y"},{type:"letter",main:"н",alt:"Н"}]},{keyCode:"KeyU",keyType:"char",keyVal:[{type:"letter",main:"u",alt:"U"},{type:"letter",main:"г",alt:"Г"}]},{keyCode:"KeyI",keyType:"char",keyVal:[{type:"letter",main:"i",alt:"I"},{type:"letter",main:"ш",alt:"Ш"}]},{keyCode:"KeyO",keyType:"char",keyVal:[{type:"letter",main:"o",alt:"O"},{type:"letter",main:"щ",alt:"Щ"}]},{keyCode:"KeyP",keyType:"char",keyVal:[{type:"letter",main:"p",alt:"P"},{type:"letter",main:"з",alt:"З"}]},{keyCode:"BracketLeft",keyType:"char",keyVal:[{type:"punct",main:"[",alt:"{"},{type:"letter",main:"х",alt:"Х"}]},{keyCode:"BracketRight",keyType:"char",keyVal:[{type:"punct",main:"]",alt:"}"},{type:"letter",main:"ъ",alt:"Ъ"}]},{keyCode:"Backslash",keyType:"char",keyVal:[{type:"punct",main:"\\",alt:"|"},{type:"punct",main:"\\",alt:"/"}]},{keyCode:"Delete",keyType:"spec",keyVal:"Del"}],[{keyCode:"CapsLock",keyType:"spec",keyVal:"CapsLock",options:["stretch","sticky","span2"]},{keyCode:"KeyA",keyType:"char",keyVal:[{type:"letter",main:"a",alt:"A"},{type:"letter",main:"ф",alt:"Ф"}]},{keyCode:"KeyS",keyType:"char",keyVal:[{type:"letter",main:"s",alt:"S"},{type:"letter",main:"ы",alt:"Ы"}]},{keyCode:"KeyD",keyType:"char",keyVal:[{type:"letter",main:"d",alt:"D"},{type:"letter",main:"в",alt:"В"}]},{keyCode:"KeyF",keyType:"char",keyVal:[{type:"letter",main:"f",alt:"F"},{type:"letter",main:"а",alt:"А"}]},{keyCode:"KeyG",keyType:"char",keyVal:[{type:"letter",main:"g",alt:"G"},{type:"letter",main:"п",alt:"П"}]},{keyCode:"KeyH",keyType:"char",keyVal:[{type:"letter",main:"h",alt:"H"},{type:"letter",main:"р",alt:"Р"}]},{keyCode:"KeyJ",keyType:"char",keyVal:[{type:"letter",main:"j",alt:"J"},{type:"letter",main:"о",alt:"О"}]},{keyCode:"KeyK",keyType:"char",keyVal:[{type:"letter",main:"k",alt:"K"},{type:"letter",main:"л",alt:"Л"}]},{keyCode:"KeyL",keyType:"char",keyVal:[{type:"letter",main:"l",alt:"L"},{type:"letter",main:"д",alt:"Д"}]},{keyCode:"Semicolon",keyType:"char",keyVal:[{type:"punct",main:";",alt:":"},{type:"letter",main:"ж",alt:"Ж"}]},{keyCode:"Quote",keyType:"char",keyVal:[{type:"punct",main:"'",alt:'"'},{type:"letter",main:"э",alt:"Э"}]},{keyCode:"Enter",keyType:"spec",keyVal:"Enter",options:["stretch","span2"]}],[{keyCode:"ShiftLeft",keyType:"spec",keyVal:"Shift",options:["stretch","semisticky","span2"]},{keyCode:"KeyZ",keyType:"char",keyVal:[{type:"letter",main:"z",alt:"Z"},{type:"letter",main:"я",alt:"Я"}]},{keyCode:"KeyX",keyType:"char",keyVal:[{type:"letter",main:"x",alt:"X"},{type:"letter",main:"ч",alt:"Ч"}]},{keyCode:"KeyC",keyType:"char",keyVal:[{type:"letter",main:"c",alt:"C"},{type:"letter",main:"с",alt:"С"}]},{keyCode:"KeyV",keyType:"char",keyVal:[{type:"letter",main:"v",alt:"V"},{type:"letter",main:"м",alt:"М"}]},{keyCode:"KeyB",keyType:"char",keyVal:[{type:"letter",main:"b",alt:"B"},{type:"letter",main:"и",alt:"И"}]},{keyCode:"KeyN",keyType:"char",keyVal:[{type:"letter",main:"n",alt:"N"},{type:"letter",main:"т",alt:"Т"}]},{keyCode:"KeyM",keyType:"char",keyVal:[{type:"letter",main:"m",alt:"M"},{type:"letter",main:"ь",alt:"Ь"}]},{keyCode:"Comma",keyType:"char",keyVal:[{type:"punct",main:",",alt:"<"},{type:"letter",main:"б",alt:"Б"}]},{keyCode:"Period",keyType:"char",keyVal:[{type:"punct",main:".",alt:">"},{type:"letter",main:"ю",alt:"Ю"}]},{keyCode:"Slash",keyType:"char",keyVal:[{type:"punct",main:"/",alt:"?"},{type:"punct",main:".",alt:","}]},{keyCode:"ArrowUp",keyType:"spec",keyVal:"↑"},{keyCode:"ShiftRight",keyType:"spec",keyVal:"Shift",options:["stretch","semisticky","span2"]}],[{keyCode:"ControlLeft",keyType:"spec",keyVal:"Ctrl",options:["semiwide","semisticky"]},{keyCode:"MetaLeft",keyType:"spec",keyVal:"Win",options:["semiwide"]},{keyCode:"AltLeft",keyType:"spec",keyVal:"Alt",options:["semiwide","semisticky"]},{keyCode:"Space",keyType:"spec",keyVal:"",options:["stretch"]},{keyCode:"AltRight",keyType:"spec",keyVal:"Alt",options:["semiwide","semisticky"]},{keyCode:"ArrowLeft",keyType:"spec",keyVal:"←"},{keyCode:"ArrowDown",keyType:"spec",keyVal:"↓"},{keyCode:"ArrowRight",keyType:"spec",keyVal:"→"},{keyCode:"ControlRight",keyType:"spec",keyVal:"Ctrl",options:["semiwide","semisticky"]}]],R=["en","ru"],D={BLOCK:"keyboard",SHELL:"keyboard__shell",ROW:"keyboard__row"},P="wrap__p",F=function(){const e=v({tagName:"textarea",className:"textarea"});return e.rows=8,e}();F.classList.add("wrap__textarea"),F.textContent="Minim sunt eiusmod mollit dolore occaecat nulla ut id laboris veniam id. Eu culpa eiusmod ullamco cillum velit non dolor aliquip sit deserunt id est reprehenderit. Cillum esse tempor sint exercitation nisi exercitation est laboris.";const M=function(e){const t=new class{constructor(){this.keys={},document.addEventListener("keydown",this.outerKeydown.bind(this)),document.addEventListener("keyup",this.outerKeyup.bind(this))}bound(e){this.keys[e.keyId]=e}outerKeydown(e){this.keys[e.code]&&(e.preventDefault(),this.keys[e.code].press())}outerKeyup(e){this.keys[e.code]&&(e.preventDefault(),this.keys[e.code].relese())}},n=v({tagName:"div",className:[D.BLOCK,D.SHELL].join(" ")});z.forEach((e=>{const r=v({tagName:"div",className:D.ROW});e.forEach((e=>{const n=new Z(e);r.append(n.shellElement),t.bound(n)})),n.append(r)})),Z.typerInt.target=e,e.addEventListener("click",Z.typerInt.getSelection.bind(Z.typerInt)),e.addEventListener("blur",Z.typerInt.resetSelection.bind(Z.typerInt)),Z.typerInt.resetSelection();const r=localStorage.getItem("lang")?localStorage.getItem("lang"):"en";return Z.languages=R,Z.lang=R.indexOf(r),Z.setGlobalShellStyle(),Z.setGlobalChar(),n}(F);M.classList.add("wrap__keyboard");const O=v({}),H=v({tagName:"p",className:P,textContent:"Lenguage change: Ctrl + Alt"}),j=v({tagName:"p",className:P,textContent:"CapsLock is sticky. Alt, Ctrl and Shift are mouse-sticky"}),B=v({tagName:"p",className:P,textContent:"Use mouse, keys ← and → for navigation"}),G=v({tagName:"p",className:P,textContent:"Use Backspace and Del for deletions"}),U=v({tagName:"hr"}),W=v({tagName:"p",className:P,textContent:"Two adaptive styles are implemented"}),q=v({tagName:"p",className:P,textContent:"Designed and developed by "}),Y=v({tagName:"a",textContent:"nduchin"});Y.href="https://github.com/nduchin",Y.target="_blank",q.append(Y),O.append(H,j,B,G,U,W,q),document.body.className="wrap",document.body.append(v({tagName:"h1",className:"wrap__title",textContent:"Virtual Keyboard"}),F,M,O)})()})();