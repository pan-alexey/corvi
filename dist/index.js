!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.corvi=e():t.corvi=e()}(this,(function(){return function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){t.exports=n(1)},function(t,e,n){"use strict";var o,r=this&&this.__extends||(o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var u=i(n(2)),s=i(n(4)),c=new(function(t){function e(){var e=s.default;return t.call(this,e)||this}return r(e,t),e}(u.default));t.exports=c,e.default=c},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(3),r=function(){function t(t){this.version="0.1",this.options={client:this.client},this.client=t}return t.prototype.urlBuilder=function(t){return new o.UrlBuilder(t)},t.prototype.request=function(t){var e=Object.assign({},this.options,t),n=new o.UrlBuilder(e.baseURL);console.log(n),console.log(e.baseURL);var r=Object.assign({},t);return console.log(r),"string"},t}();e.default=r},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=function(t){var e=this;this.url="",this.patterns={protocol:"(?:([^:/?#]+):)",authority:"(?://([^/?#]*))",path:"([^?#]*)",query:"(\\?[^#]*)",hash:"(#.*)",authentication:"(?:([^:]*)(?::([^@]*))?@)",hostname:"([^:]+)",port:"(?::(\\d+))"},this.prototcols={ftp:21,file:0,http:80,https:443,ws:80,wss:443},this.encode=function(t){return t?encodeURIComponent(t).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%2E/gi,"[").replace(/%5D/gi,"]"):t},this.toString=function(){return e.url},t&&(this.baseURL=this.encode(t))};e.UrlBuilder=o},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.default=function(t){var e=function(){};return{promise:new Promise((function(n,o){var r=new XMLHttpRequest,i={ok:!0,status:200,statusText:"string",data:"string",headers:"string",elapsed:0,attemps:0};r.timeout=t.timeout&&t.timeout>0?t.timeout:12e4,r.ontimeout=function(){o(new Error("Client timeout: "+r.timeout+"ms")),e=function(){}},r.onload=function(){e=function(){},i.data=r.responseText,n(i)},e=function(){r.abort()},r.open(t.method,t.url),r.send()})),abort:e}}}])}));