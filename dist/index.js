!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=6)}([function(e,t,n){var r=n(1),i=n(2);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var o={insert:"head",singleton:!1},a=(r(i,o),i.locals?i.locals:{});e.exports=a},function(e,t,n){"use strict";var r,i=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},o=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),a=[];function s(e){for(var t=-1,n=0;n<a.length;n++)if(a[n].identifier===e){t=n;break}return t}function l(e,t){for(var n={},r=[],i=0;i<e.length;i++){var o=e[i],l=t.base?o[0]+t.base:o[0],d=n[l]||0,c="".concat(l," ").concat(d);n[l]=d+1;var p=s(c),f={css:o[1],media:o[2],sourceMap:o[3]};-1!==p?(a[p].references++,a[p].updater(f)):a.push({identifier:c,updater:g(f,t),references:1}),r.push(c)}return r}function d(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var i=n.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var a=o(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var c,p=(c=[],function(e,t){return c[e]=t,c.filter(Boolean).join("\n")});function f(e,t,n,r){var i=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=p(t,i);else{var o=document.createTextNode(i),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(o,a[t]):e.appendChild(o)}}function u(e,t,n){var r=n.css,i=n.media,o=n.sourceMap;if(i?e.setAttribute("media",i):e.removeAttribute("media"),o&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var _=null,m=0;function g(e,t){var n,r,i;if(t.singleton){var o=m++;n=_||(_=d(t)),r=f.bind(null,n,o,!1),i=f.bind(null,n,o,!0)}else n=d(t),r=u.bind(null,n,t),i=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else i()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=i());var n=l(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var i=s(n[r]);a[i].references--}for(var o=l(e,t),d=0;d<n.length;d++){var c=s(n[d]);0===a[c].references&&(a[c].updater(),a.splice(c,1))}n=o}}}},function(e,t,n){var r=n(3),i=n(4),o=n(5);t=r(!1);var a=i(o);t.push([e.i,'@font-face{font-family:"redHatDisplay";src:url('+a+')}*,*::before,*::after{box-sizing:border-box}body{margin:0;padding:0;font-family:"redHatDisplay", Arial}.header{min-height:90px;background-color:#d7d7d7;padding:0 10vw;display:grid;grid-template-columns:1fr auto 1fr;text-align:center}.header__element{display:flex;justify-content:center;align-items:center}.header__element--nav{justify-content:flex-start}.header__element--user{justify-content:flex-end;padding-right:5%}.header__element--user img{cursor:pointer}.header__user-img{margin-right:15px}.header__bag-img{margin-right:3px}.header__ellipse-img{position:relative}.header__img-text{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);font-size:12px;color:#fff;z-index:1}.nav__checkbox{display:none}.nav__ul{padding:0;list-style:none;display:grid;grid-template-columns:repeat(5, 1fr)}.nav__item{padding:5px}.nav__link{color:#151515;text-decoration:none}.nav__link:hover{border-bottom:2px solid #000}.main{background-color:#CCCCCC}.main__img{width:100%}.main__img--big{width:100%}.main__img--mobile{display:none}.slider{background-color:#263a49;display:grid;grid-template-columns:1fr 5fr 1fr}.slider__element{display:flex;justify-content:center;align-items:center}.slider__slides{overflow-x:hidden;display:flex;justify-content:flex-start;align-items:center}.slider__img{margin:50px 15px;cursor:pointer;position:relative}.slider__img div{position:absolute;left:5%;bottom:5%}.slider__img div p{margin:0.3em 0}.slider__arrow{cursor:pointer}.container{max-width:70vw;margin:auto;text-align:center}.bold{font-weight:700}.new__heading{width:100%;text-align:center;font-size:42px;padding:1.6em}.new__grid{margin:auto;display:flex;justify-content:center;align-items:center;flex-wrap:wrap}.new__img{width:100%}.new__item{text-align:left;margin:1em 0.8em;width:15vw}.new__item p{margin:0.5em}.new__price--hover{display:none;cursor:pointer;position:relative}.new__price--hover span{position:absolute;right:0}.new__price--hover span img{margin-right:1em}.new__btn{margin:3em auto 5em auto;padding:1em 2em;font-weight:700;border:2px solid black;background-color:#fff;cursor:pointer}.prod__grid{display:grid;grid-gap:5px;grid-template-columns:2fr 1fr 1fr;grid-template-rows:1fr 1fr;grid-template-areas:"first second third" "first fourth fourth"}.prod__grid .prod__item{position:relative}.prod__grid .prod__item h3{position:absolute;left:5%;top:5%}.prod__grid .prod__item p{position:absolute;left:5%;top:5%;margin-top:3em;cursor:pointer}.prod__grid .prod__item p:hover{border-bottom:2px solid #000}.prod__grid .prod__item img{width:100%;height:100%}.prod__grid .prod__first{grid-area:first}.prod__grid .prod__second{grid-area:second}.prod__grid .prod__third{grid-area:third}.prod__grid .prod__fourth{grid-area:fourth}.newsletter{margin:5em auto}.newsletter h3{font-size:32px}.newsletter p{font-weight:700;margin-bottom:3em}.newsletter__form{width:50%;margin:auto;text-align:center;position:relative}.newsletter__input{margin:auto;padding:10px 10px 10px 5px;display:block;width:100%;border:none;border-bottom:2px solid black}.newsletter__input:focus{outline:none}.newsletter__label{color:#999;font-size:18px;font-weight:normal;position:absolute;pointer-events:none;left:10px;top:10px;transition:0.2s ease all;-moz-transition:0.2s ease all;-webkit-transition:0.2s ease all}.newsletter__input:focus ~ label,.newsletter__input:focus ~ label{top:-20px;font-size:14px;color:black}.newsletter__submit{position:absolute;right:10px;top:10px;border:none;font-weight:700;background-color:#fff;cursor:pointer}.newsletter__spam{left:0px;position:absolute;margin-top:0.6em}.footer{border-top:1px solid #e2dcdc;padding:1em 0}.footer__flex{display:flex;justify-content:space-between;align-items:center}.footer__flex div{flex-basis:33%;display:flex;align-items:center;justify-content:center}.footer__flex div:last-child{justify-content:flex-end}.footer__flex div:first-child{justify-content:flex-start}.footer__flex .settings label{color:#858585}.footer__flex .settings select{border:none}.footer__ul{padding:0;list-style:none;display:flex}.footer__item{padding:0 10px}.footer__link{text-decoration:none;color:#000}@media (max-width: 1200px){.container{max-width:85vw}.new__item{width:18vw}.new__heading{font-size:36px}.prod__grid .prod__item h3{font-size:15px}.prod__grid .prod__item p{font-size:13px}}@media (max-width: 790px){.container{max-width:95vw}.new__item{width:43vw}.new__price--hover{display:block}.new__heading{font-size:32px}.prod__grid{display:block}.prod__grid .prod__item{margin-left:auto;margin-right:auto;width:90vw}.prod__grid .prod__item h3{font-size:20px}.prod__grid .prod__item p{font-size:17px}.newsletter__form{width:90%}.footer__flex{justify-content:flex-start;align-items:center;flex-wrap:wrap}.footer__flex div{margin-left:2em;flex-basis:100%;justify-content:flex-start !important}.footer__flex div li:first-child{padding-left:0}}@media (max-width: 600px){.nav__toggle{display:block;position:relative;top:5%;z-index:1;-webkit-user-select:none;user-select:none}.nav__checkbox{display:block;width:40px;height:32px;position:absolute;top:-7px;left:-5px;cursor:pointer;opacity:0;z-index:2;-webkit-touch-callout:none}.nav span{display:block;width:33px;height:4px;margin-bottom:5px;position:relative;background:#232323;border-radius:3px;z-index:1;transform-origin:4px 0px;transition:transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),opacity 0.55s ease}.nav span:first-child{transform-origin:0% 0%}.nav span:nth-last-child(3){width:25px}.nav span:nth-last-child(2){transform-origin:0% 100%}.nav input:checked ~ span{opacity:1;transform:rotate(45deg) translate(-2px, -1px);background:#232323}.nav input:checked ~ span:nth-last-child(3){opacity:0;transform:rotate(0deg) scale(0.2, 0.2)}.nav input:checked ~ span:nth-last-child(2){transform:rotate(-45deg) translate(0, -1px)}.nav__ul{position:absolute;display:block;width:200px;margin:27px 0 0 -70px;padding:0 0 20px 0;background:#d7d7d7;list-style-type:none;-webkit-font-smoothing:antialiased;transform-origin:0% 0%;transform:translate(-200%, 0)}.nav__item{padding:10px 0;font-size:22px}.nav input:checked ~ ul{transform:none}.main__img--big{display:none}.main__img--mobile{display:block}.container{max-width:100vw}.new__heading{font-size:32px}.new__item{width:40vw}}@media (min-width: 790px){.new__item:hover .new__price--hover{display:block}.new__item:hover .new__price--default{display:none}}\n',""]),e.exports=t},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var i=(a=r,s=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(l," */")),o=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[n].concat(o).concat([i]).join("\n")}var a,s,l;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var i={};if(r)for(var o=0;o<this.length;o++){var a=this[o][0];null!=a&&(i[a]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);r&&i[l[0]]||(n&&(l[2]?l[2]="".concat(n," and ").concat(l[2]):l[2]=n),t.push(l))}},t}},function(e,t,n){"use strict";e.exports=function(e,t){return t||(t={}),"string"!=typeof(e=e&&e.__esModule?e.default:e)?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/e7897cb24d4f6bf9ea08dc6f26883b9d.ttf"},function(e,t,n){"use strict";n.r(t);var r,i,o;n(0);r=document.querySelector(".slider__slides"),i=document.querySelector(".slider__leftArrow"),o=document.querySelector(".slider__rightArrow"),console.log(o),o.onclick=function(){var e=0,t=setInterval((function(){r.scrollLeft+=50,(e+=15)>=100&&window.clearInterval(t)}),25)},i.onclick=function(){var e=0,t=setInterval((function(){r.scrollLeft-=50,(e+=15)>=100&&window.clearInterval(t)}),25)}}]);