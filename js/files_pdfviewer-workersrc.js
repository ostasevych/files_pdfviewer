/*! For license information please see files_pdfviewer-workersrc.js.LICENSE.txt */
(()=>{var e={8583:(e,t,r)=>{"use strict";var n=r(7418);function o(e,t){if(e===t)return 0;for(var r=e.length,n=t.length,o=0,i=Math.min(r,n);o<i;++o)if(e[o]!==t[o]){r=e[o],n=t[o];break}return r<n?-1:n<r?1:0}function i(e){return r.g.Buffer&&"function"==typeof r.g.Buffer.isBuffer?r.g.Buffer.isBuffer(e):!(null==e||!e._isBuffer)}var u=r(69),c=Object.prototype.hasOwnProperty,a=Array.prototype.slice,s="foo"===function(){}.name;function f(e){return Object.prototype.toString.call(e)}function l(e){return!i(e)&&("function"==typeof r.g.ArrayBuffer&&("function"==typeof ArrayBuffer.isView?ArrayBuffer.isView(e):!!e&&(e instanceof DataView||!!(e.buffer&&e.buffer instanceof ArrayBuffer))))}var p=e.exports=m,y=/\s*function\s+([^\(\s]*)\s*/;function g(e){if(u.isFunction(e)){if(s)return e.name;var t=e.toString().match(y);return t&&t[1]}}function d(e,t){return"string"==typeof e?e.length<t?e:e.slice(0,t):e}function h(e){if(s||!u.isFunction(e))return u.inspect(e);var t=g(e);return"[Function"+(t?": "+t:"")+"]"}function b(e,t,r,n,o){throw new p.AssertionError({message:r,actual:e,expected:t,operator:n,stackStartFunction:o})}function m(e,t){e||b(e,!0,t,"==",p.ok)}function v(e,t,r,n){if(e===t)return!0;if(i(e)&&i(t))return 0===o(e,t);if(u.isDate(e)&&u.isDate(t))return e.getTime()===t.getTime();if(u.isRegExp(e)&&u.isRegExp(t))return e.source===t.source&&e.global===t.global&&e.multiline===t.multiline&&e.lastIndex===t.lastIndex&&e.ignoreCase===t.ignoreCase;if(null!==e&&"object"==typeof e||null!==t&&"object"==typeof t){if(l(e)&&l(t)&&f(e)===f(t)&&!(e instanceof Float32Array||e instanceof Float64Array))return 0===o(new Uint8Array(e.buffer),new Uint8Array(t.buffer));if(i(e)!==i(t))return!1;var c=(n=n||{actual:[],expected:[]}).actual.indexOf(e);return-1!==c&&c===n.expected.indexOf(t)||(n.actual.push(e),n.expected.push(t),function(e,t,r,n){if(null==e||null==t)return!1;if(u.isPrimitive(e)||u.isPrimitive(t))return e===t;if(r&&Object.getPrototypeOf(e)!==Object.getPrototypeOf(t))return!1;var o=w(e),i=w(t);if(o&&!i||!o&&i)return!1;if(o)return v(e=a.call(e),t=a.call(t),r);var c,s,f=E(e),l=E(t);if(f.length!==l.length)return!1;for(f.sort(),l.sort(),s=f.length-1;s>=0;s--)if(f[s]!==l[s])return!1;for(s=f.length-1;s>=0;s--)if(!v(e[c=f[s]],t[c],r,n))return!1;return!0}(e,t,r,n))}return r?e===t:e==t}function w(e){return"[object Arguments]"==Object.prototype.toString.call(e)}function O(e,t){if(!e||!t)return!1;if("[object RegExp]"==Object.prototype.toString.call(t))return t.test(e);try{if(e instanceof t)return!0}catch(e){}return!Error.isPrototypeOf(t)&&!0===t.call({},e)}function j(e,t,r,n){var o;if("function"!=typeof t)throw new TypeError('"block" argument must be a function');"string"==typeof r&&(n=r,r=null),o=function(e){var t;try{e()}catch(e){t=e}return t}(t),n=(r&&r.name?" ("+r.name+").":".")+(n?" "+n:"."),e&&!o&&b(o,r,"Missing expected exception"+n);var i="string"==typeof n,c=!e&&o&&!r;if((!e&&u.isError(o)&&i&&O(o,r)||c)&&b(o,r,"Got unwanted exception"+n),e&&o&&r&&!O(o,r)||!e&&o)throw o}p.AssertionError=function(e){var t;this.name="AssertionError",this.actual=e.actual,this.expected=e.expected,this.operator=e.operator,e.message?(this.message=e.message,this.generatedMessage=!1):(this.message=d(h((t=this).actual),128)+" "+t.operator+" "+d(h(t.expected),128),this.generatedMessage=!0);var r=e.stackStartFunction||b;if(Error.captureStackTrace)Error.captureStackTrace(this,r);else{var n=new Error;if(n.stack){var o=n.stack,i=g(r),u=o.indexOf("\n"+i);if(u>=0){var c=o.indexOf("\n",u+1);o=o.substring(c+1)}this.stack=o}}},u.inherits(p.AssertionError,Error),p.fail=b,p.ok=m,p.equal=function(e,t,r){e!=t&&b(e,t,r,"==",p.equal)},p.notEqual=function(e,t,r){e==t&&b(e,t,r,"!=",p.notEqual)},p.deepEqual=function(e,t,r){v(e,t,!1)||b(e,t,r,"deepEqual",p.deepEqual)},p.deepStrictEqual=function(e,t,r){v(e,t,!0)||b(e,t,r,"deepStrictEqual",p.deepStrictEqual)},p.notDeepEqual=function(e,t,r){v(e,t,!1)&&b(e,t,r,"notDeepEqual",p.notDeepEqual)},p.notDeepStrictEqual=function e(t,r,n){v(t,r,!0)&&b(t,r,n,"notDeepStrictEqual",e)},p.strictEqual=function(e,t,r){e!==t&&b(e,t,r,"===",p.strictEqual)},p.notStrictEqual=function(e,t,r){e===t&&b(e,t,r,"!==",p.notStrictEqual)},p.throws=function(e,t,r){j(!0,e,t,r)},p.doesNotThrow=function(e,t,r){j(!1,e,t,r)},p.ifError=function(e){if(e)throw e},p.strict=n((function e(t,r){t||b(t,!0,r,"==",e)}),p,{equal:p.strictEqual,deepEqual:p.deepStrictEqual,notEqual:p.notStrictEqual,notDeepEqual:p.notDeepStrictEqual}),p.strict.strict=p.strict;var E=Object.keys||function(e){var t=[];for(var r in e)c.call(e,r)&&t.push(r);return t}},6076:e=>{"function"==typeof Object.create?e.exports=function(e,t){e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})}:e.exports=function(e,t){e.super_=t;var r=function(){};r.prototype=t.prototype,e.prototype=new r,e.prototype.constructor=e}},2014:e=>{e.exports=function(e){return e&&"object"==typeof e&&"function"==typeof e.copy&&"function"==typeof e.fill&&"function"==typeof e.readUInt8}},69:(e,t,r)=>{var n=r(4155),o=r(5108),i=/%[sdj%]/g;t.format=function(e){if(!m(e)){for(var t=[],r=0;r<arguments.length;r++)t.push(a(arguments[r]));return t.join(" ")}r=1;for(var n=arguments,o=n.length,u=String(e).replace(i,(function(e){if("%%"===e)return"%";if(r>=o)return e;switch(e){case"%s":return String(n[r++]);case"%d":return Number(n[r++]);case"%j":try{return JSON.stringify(n[r++])}catch(e){return"[Circular]"}default:return e}})),c=n[r];r<o;c=n[++r])h(c)||!O(c)?u+=" "+c:u+=" "+a(c);return u},t.deprecate=function(e,i){if(v(r.g.process))return function(){return t.deprecate(e,i).apply(this,arguments)};if(!0===n.noDeprecation)return e;var u=!1;return function(){if(!u){if(n.throwDeprecation)throw new Error(i);n.traceDeprecation?o.trace(i):o.error(i),u=!0}return e.apply(this,arguments)}};var u,c={};function a(e,r){var n={seen:[],stylize:f};return arguments.length>=3&&(n.depth=arguments[2]),arguments.length>=4&&(n.colors=arguments[3]),d(r)?n.showHidden=r:r&&t._extend(n,r),v(n.showHidden)&&(n.showHidden=!1),v(n.depth)&&(n.depth=2),v(n.colors)&&(n.colors=!1),v(n.customInspect)&&(n.customInspect=!0),n.colors&&(n.stylize=s),l(n,e,n.depth)}function s(e,t){var r=a.styles[t];return r?"["+a.colors[r][0]+"m"+e+"["+a.colors[r][1]+"m":e}function f(e,t){return e}function l(e,r,n){if(e.customInspect&&r&&x(r.inspect)&&r.inspect!==t.inspect&&(!r.constructor||r.constructor.prototype!==r)){var o=r.inspect(n,e);return m(o)||(o=l(e,o,n)),o}var i=function(e,t){if(v(t))return e.stylize("undefined","undefined");if(m(t)){var r="'"+JSON.stringify(t).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return e.stylize(r,"string")}if(b(t))return e.stylize(""+t,"number");if(d(t))return e.stylize(""+t,"boolean");if(h(t))return e.stylize("null","null")}(e,r);if(i)return i;var u=Object.keys(r),c=function(e){var t={};return e.forEach((function(e,r){t[e]=!0})),t}(u);if(e.showHidden&&(u=Object.getOwnPropertyNames(r)),E(r)&&(u.indexOf("message")>=0||u.indexOf("description")>=0))return p(r);if(0===u.length){if(x(r)){var a=r.name?": "+r.name:"";return e.stylize("[Function"+a+"]","special")}if(w(r))return e.stylize(RegExp.prototype.toString.call(r),"regexp");if(j(r))return e.stylize(Date.prototype.toString.call(r),"date");if(E(r))return p(r)}var s,f="",O=!1,S=["{","}"];(g(r)&&(O=!0,S=["[","]"]),x(r))&&(f=" [Function"+(r.name?": "+r.name:"")+"]");return w(r)&&(f=" "+RegExp.prototype.toString.call(r)),j(r)&&(f=" "+Date.prototype.toUTCString.call(r)),E(r)&&(f=" "+p(r)),0!==u.length||O&&0!=r.length?n<0?w(r)?e.stylize(RegExp.prototype.toString.call(r),"regexp"):e.stylize("[Object]","special"):(e.seen.push(r),s=O?function(e,t,r,n,o){for(var i=[],u=0,c=t.length;u<c;++u)T(t,String(u))?i.push(y(e,t,r,n,String(u),!0)):i.push("");return o.forEach((function(o){o.match(/^\d+$/)||i.push(y(e,t,r,n,o,!0))})),i}(e,r,n,c,u):u.map((function(t){return y(e,r,n,c,t,O)})),e.seen.pop(),function(e,t,r){if(e.reduce((function(e,t){return t.indexOf("\n")>=0&&0,e+t.replace(/\u001b\[\d\d?m/g,"").length+1}),0)>60)return r[0]+(""===t?"":t+"\n ")+" "+e.join(",\n  ")+" "+r[1];return r[0]+t+" "+e.join(", ")+" "+r[1]}(s,f,S)):S[0]+f+S[1]}function p(e){return"["+Error.prototype.toString.call(e)+"]"}function y(e,t,r,n,o,i){var u,c,a;if((a=Object.getOwnPropertyDescriptor(t,o)||{value:t[o]}).get?c=a.set?e.stylize("[Getter/Setter]","special"):e.stylize("[Getter]","special"):a.set&&(c=e.stylize("[Setter]","special")),T(n,o)||(u="["+o+"]"),c||(e.seen.indexOf(a.value)<0?(c=h(r)?l(e,a.value,null):l(e,a.value,r-1)).indexOf("\n")>-1&&(c=i?c.split("\n").map((function(e){return"  "+e})).join("\n").substr(2):"\n"+c.split("\n").map((function(e){return"   "+e})).join("\n")):c=e.stylize("[Circular]","special")),v(u)){if(i&&o.match(/^\d+$/))return c;(u=JSON.stringify(""+o)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(u=u.substr(1,u.length-2),u=e.stylize(u,"name")):(u=u.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),u=e.stylize(u,"string"))}return u+": "+c}function g(e){return Array.isArray(e)}function d(e){return"boolean"==typeof e}function h(e){return null===e}function b(e){return"number"==typeof e}function m(e){return"string"==typeof e}function v(e){return void 0===e}function w(e){return O(e)&&"[object RegExp]"===S(e)}function O(e){return"object"==typeof e&&null!==e}function j(e){return O(e)&&"[object Date]"===S(e)}function E(e){return O(e)&&("[object Error]"===S(e)||e instanceof Error)}function x(e){return"function"==typeof e}function S(e){return Object.prototype.toString.call(e)}function D(e){return e<10?"0"+e.toString(10):e.toString(10)}t.debuglog=function(e){if(v(u)&&(u=n.env.NODE_DEBUG||""),e=e.toUpperCase(),!c[e])if(new RegExp("\\b"+e+"\\b","i").test(u)){var r=n.pid;c[e]=function(){var n=t.format.apply(t,arguments);o.error("%s %d: %s",e,r,n)}}else c[e]=function(){};return c[e]},t.inspect=a,a.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},a.styles={special:"cyan",number:"yellow",boolean:"yellow",undefined:"grey",null:"bold",string:"green",date:"magenta",regexp:"red"},t.isArray=g,t.isBoolean=d,t.isNull=h,t.isNullOrUndefined=function(e){return null==e},t.isNumber=b,t.isString=m,t.isSymbol=function(e){return"symbol"==typeof e},t.isUndefined=v,t.isRegExp=w,t.isObject=O,t.isDate=j,t.isError=E,t.isFunction=x,t.isPrimitive=function(e){return null===e||"boolean"==typeof e||"number"==typeof e||"string"==typeof e||"symbol"==typeof e||void 0===e},t.isBuffer=r(2014);var P=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function A(){var e=new Date,t=[D(e.getHours()),D(e.getMinutes()),D(e.getSeconds())].join(":");return[e.getDate(),P[e.getMonth()],t].join(" ")}function T(e,t){return Object.prototype.hasOwnProperty.call(e,t)}t.log=function(){o.log("%s - %s",A(),t.format.apply(t,arguments))},t.inherits=r(6076),t._extend=function(e,t){if(!t||!O(t))return e;for(var r=Object.keys(t),n=r.length;n--;)e[r[n]]=t[r[n]];return e}},6485:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;const r=document.getElementById("hideDownload");t.default=()=>!r||r&&"true"!==r.value},4030:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){if(window.location!==window.parent.location)return;window.location.href="/"}},5108:(e,t,r)=>{var n=r(9539),o=r(8583);function i(){return(new Date).getTime()}var u,c=Array.prototype.slice,a={};u=void 0!==r.g&&r.g.console?r.g.console:"undefined"!=typeof window&&window.console?window.console:{};for(var s=[[function(){},"log"],[function(){u.log.apply(u,arguments)},"info"],[function(){u.log.apply(u,arguments)},"warn"],[function(){u.warn.apply(u,arguments)},"error"],[function(e){a[e]=i()},"time"],[function(e){var t=a[e];if(!t)throw new Error("No such label: "+e);delete a[e];var r=i()-t;u.log(e+": "+r+"ms")},"timeEnd"],[function(){var e=new Error;e.name="Trace",e.message=n.format.apply(null,arguments),u.error(e.stack)},"trace"],[function(e){u.log(n.inspect(e)+"\n")},"dir"],[function(e){if(!e){var t=c.call(arguments,1);o.ok(!1,n.format.apply(null,t))}},"assert"]],f=0;f<s.length;f++){var l=s[f],p=l[0],y=l[1];u[y]||(u[y]=p)}e.exports=u},7418:e=>{"use strict";var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}()?Object.assign:function(e,i){for(var u,c,a=o(e),s=1;s<arguments.length;s++){for(var f in u=Object(arguments[s]))r.call(u,f)&&(a[f]=u[f]);if(t){c=t(u);for(var l=0;l<c.length;l++)n.call(u,c[l])&&(a[c[l]]=u[c[l]])}}return a}},4155:e=>{var t,r,n=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function u(e){if(t===setTimeout)return setTimeout(e,0);if((t===o||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:o}catch(e){t=o}try{r="function"==typeof clearTimeout?clearTimeout:i}catch(e){r=i}}();var c,a=[],s=!1,f=-1;function l(){s&&c&&(s=!1,c.length?a=c.concat(a):f=-1,a.length&&p())}function p(){if(!s){var e=u(l);s=!0;for(var t=a.length;t;){for(c=a,a=[];++f<t;)c&&c[f].run();f=-1,t=a.length}c=null,s=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===i||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function y(e,t){this.fun=e,this.array=t}function g(){}n.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];a.push(new y(e,t)),1!==a.length||s||u(p)},y.prototype.run=function(){this.fun.apply(null,this.array)},n.title="browser",n.browser=!0,n.env={},n.argv=[],n.version="",n.versions={},n.on=g,n.addListener=g,n.once=g,n.off=g,n.removeListener=g,n.removeAllListeners=g,n.emit=g,n.prependListener=g,n.prependOnceListener=g,n.listeners=function(e){return[]},n.binding=function(e){throw new Error("process.binding is not supported")},n.cwd=function(){return"/"},n.chdir=function(e){throw new Error("process.chdir is not supported")},n.umask=function(){return 0}},1496:e=>{"function"==typeof Object.create?e.exports=function(e,t){e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})}:e.exports=function(e,t){e.super_=t;var r=function(){};r.prototype=t.prototype,e.prototype=new r,e.prototype.constructor=e}},384:e=>{e.exports=function(e){return e&&"object"==typeof e&&"function"==typeof e.copy&&"function"==typeof e.fill&&"function"==typeof e.readUInt8}},9539:(e,t,r)=>{var n=r(4155),o=r(5108),i=Object.getOwnPropertyDescriptors||function(e){for(var t=Object.keys(e),r={},n=0;n<t.length;n++)r[t[n]]=Object.getOwnPropertyDescriptor(e,t[n]);return r},u=/%[sdj%]/g;t.format=function(e){if(!v(e)){for(var t=[],r=0;r<arguments.length;r++)t.push(s(arguments[r]));return t.join(" ")}r=1;for(var n=arguments,o=n.length,i=String(e).replace(u,(function(e){if("%%"===e)return"%";if(r>=o)return e;switch(e){case"%s":return String(n[r++]);case"%d":return Number(n[r++]);case"%j":try{return JSON.stringify(n[r++])}catch(e){return"[Circular]"}default:return e}})),c=n[r];r<o;c=n[++r])b(c)||!j(c)?i+=" "+c:i+=" "+s(c);return i},t.deprecate=function(e,r){if(void 0!==n&&!0===n.noDeprecation)return e;if(void 0===n)return function(){return t.deprecate(e,r).apply(this,arguments)};var i=!1;return function(){if(!i){if(n.throwDeprecation)throw new Error(r);n.traceDeprecation?o.trace(r):o.error(r),i=!0}return e.apply(this,arguments)}};var c,a={};function s(e,r){var n={seen:[],stylize:l};return arguments.length>=3&&(n.depth=arguments[2]),arguments.length>=4&&(n.colors=arguments[3]),h(r)?n.showHidden=r:r&&t._extend(n,r),w(n.showHidden)&&(n.showHidden=!1),w(n.depth)&&(n.depth=2),w(n.colors)&&(n.colors=!1),w(n.customInspect)&&(n.customInspect=!0),n.colors&&(n.stylize=f),p(n,e,n.depth)}function f(e,t){var r=s.styles[t];return r?"["+s.colors[r][0]+"m"+e+"["+s.colors[r][1]+"m":e}function l(e,t){return e}function p(e,r,n){if(e.customInspect&&r&&S(r.inspect)&&r.inspect!==t.inspect&&(!r.constructor||r.constructor.prototype!==r)){var o=r.inspect(n,e);return v(o)||(o=p(e,o,n)),o}var i=function(e,t){if(w(t))return e.stylize("undefined","undefined");if(v(t)){var r="'"+JSON.stringify(t).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return e.stylize(r,"string")}if(m(t))return e.stylize(""+t,"number");if(h(t))return e.stylize(""+t,"boolean");if(b(t))return e.stylize("null","null")}(e,r);if(i)return i;var u=Object.keys(r),c=function(e){var t={};return e.forEach((function(e,r){t[e]=!0})),t}(u);if(e.showHidden&&(u=Object.getOwnPropertyNames(r)),x(r)&&(u.indexOf("message")>=0||u.indexOf("description")>=0))return y(r);if(0===u.length){if(S(r)){var a=r.name?": "+r.name:"";return e.stylize("[Function"+a+"]","special")}if(O(r))return e.stylize(RegExp.prototype.toString.call(r),"regexp");if(E(r))return e.stylize(Date.prototype.toString.call(r),"date");if(x(r))return y(r)}var s,f="",l=!1,j=["{","}"];(d(r)&&(l=!0,j=["[","]"]),S(r))&&(f=" [Function"+(r.name?": "+r.name:"")+"]");return O(r)&&(f=" "+RegExp.prototype.toString.call(r)),E(r)&&(f=" "+Date.prototype.toUTCString.call(r)),x(r)&&(f=" "+y(r)),0!==u.length||l&&0!=r.length?n<0?O(r)?e.stylize(RegExp.prototype.toString.call(r),"regexp"):e.stylize("[Object]","special"):(e.seen.push(r),s=l?function(e,t,r,n,o){for(var i=[],u=0,c=t.length;u<c;++u)z(t,String(u))?i.push(g(e,t,r,n,String(u),!0)):i.push("");return o.forEach((function(o){o.match(/^\d+$/)||i.push(g(e,t,r,n,o,!0))})),i}(e,r,n,c,u):u.map((function(t){return g(e,r,n,c,t,l)})),e.seen.pop(),function(e,t,r){if(e.reduce((function(e,t){return t.indexOf("\n")>=0&&0,e+t.replace(/\u001b\[\d\d?m/g,"").length+1}),0)>60)return r[0]+(""===t?"":t+"\n ")+" "+e.join(",\n  ")+" "+r[1];return r[0]+t+" "+e.join(", ")+" "+r[1]}(s,f,j)):j[0]+f+j[1]}function y(e){return"["+Error.prototype.toString.call(e)+"]"}function g(e,t,r,n,o,i){var u,c,a;if((a=Object.getOwnPropertyDescriptor(t,o)||{value:t[o]}).get?c=a.set?e.stylize("[Getter/Setter]","special"):e.stylize("[Getter]","special"):a.set&&(c=e.stylize("[Setter]","special")),z(n,o)||(u="["+o+"]"),c||(e.seen.indexOf(a.value)<0?(c=b(r)?p(e,a.value,null):p(e,a.value,r-1)).indexOf("\n")>-1&&(c=i?c.split("\n").map((function(e){return"  "+e})).join("\n").substr(2):"\n"+c.split("\n").map((function(e){return"   "+e})).join("\n")):c=e.stylize("[Circular]","special")),w(u)){if(i&&o.match(/^\d+$/))return c;(u=JSON.stringify(""+o)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(u=u.substr(1,u.length-2),u=e.stylize(u,"name")):(u=u.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),u=e.stylize(u,"string"))}return u+": "+c}function d(e){return Array.isArray(e)}function h(e){return"boolean"==typeof e}function b(e){return null===e}function m(e){return"number"==typeof e}function v(e){return"string"==typeof e}function w(e){return void 0===e}function O(e){return j(e)&&"[object RegExp]"===D(e)}function j(e){return"object"==typeof e&&null!==e}function E(e){return j(e)&&"[object Date]"===D(e)}function x(e){return j(e)&&("[object Error]"===D(e)||e instanceof Error)}function S(e){return"function"==typeof e}function D(e){return Object.prototype.toString.call(e)}function P(e){return e<10?"0"+e.toString(10):e.toString(10)}t.debuglog=function(e){if(w(c)&&(c=n.env.NODE_DEBUG||""),e=e.toUpperCase(),!a[e])if(new RegExp("\\b"+e+"\\b","i").test(c)){var r=n.pid;a[e]=function(){var n=t.format.apply(t,arguments);o.error("%s %d: %s",e,r,n)}}else a[e]=function(){};return a[e]},t.inspect=s,s.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},s.styles={special:"cyan",number:"yellow",boolean:"yellow",undefined:"grey",null:"bold",string:"green",date:"magenta",regexp:"red"},t.isArray=d,t.isBoolean=h,t.isNull=b,t.isNullOrUndefined=function(e){return null==e},t.isNumber=m,t.isString=v,t.isSymbol=function(e){return"symbol"==typeof e},t.isUndefined=w,t.isRegExp=O,t.isObject=j,t.isDate=E,t.isError=x,t.isFunction=S,t.isPrimitive=function(e){return null===e||"boolean"==typeof e||"number"==typeof e||"string"==typeof e||"symbol"==typeof e||void 0===e},t.isBuffer=r(384);var A=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function T(){var e=new Date,t=[P(e.getHours()),P(e.getMinutes()),P(e.getSeconds())].join(":");return[e.getDate(),A[e.getMonth()],t].join(" ")}function z(e,t){return Object.prototype.hasOwnProperty.call(e,t)}t.log=function(){o.log("%s - %s",T(),t.format.apply(t,arguments))},t.inherits=r(1496),t._extend=function(e,t){if(!t||!j(t))return e;for(var r=Object.keys(t),n=r.length;n--;)e[r[n]]=t[r[n]];return e};var F="undefined"!=typeof Symbol?Symbol("util.promisify.custom"):void 0;function k(e,t){if(!e){var r=new Error("Promise was rejected with a falsy value");r.reason=e,e=r}return t(e)}t.promisify=function(e){if("function"!=typeof e)throw new TypeError('The "original" argument must be of type Function');if(F&&e[F]){var t;if("function"!=typeof(t=e[F]))throw new TypeError('The "util.promisify.custom" argument must be of type Function');return Object.defineProperty(t,F,{value:t,enumerable:!1,writable:!1,configurable:!0}),t}function t(){for(var t,r,n=new Promise((function(e,n){t=e,r=n})),o=[],i=0;i<arguments.length;i++)o.push(arguments[i]);o.push((function(e,n){e?r(e):t(n)}));try{e.apply(this,o)}catch(e){r(e)}return n}return Object.setPrototypeOf(t,Object.getPrototypeOf(e)),F&&Object.defineProperty(t,F,{value:t,enumerable:!1,writable:!1,configurable:!0}),Object.defineProperties(t,i(e))},t.promisify.custom=F,t.callbackify=function(e){if("function"!=typeof e)throw new TypeError('The "original" argument must be of type Function');function t(){for(var t=[],r=0;r<arguments.length;r++)t.push(arguments[r]);var o=t.pop();if("function"!=typeof o)throw new TypeError("The last argument must be of type Function");var i=this,u=function(){return o.apply(i,arguments)};e.apply(this,t).then((function(e){n.nextTick(u,null,e)}),(function(e){n.nextTick(k,e,u)}))}return Object.setPrototypeOf(t,Object.getPrototypeOf(e)),Object.defineProperties(t,i(e)),t}}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var i=t[n]={exports:{}};return e[n](i,i.exports,r),i.exports}r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{"use strict";var e=r(5108),t=n(r(6485));function n(e){return e&&e.__esModule?e:{default:e}}(0,n(r(4030)).default)(),document.addEventListener("DOMContentLoaded",(function(){if(PDFViewerApplicationOptions.set("disablePreferences",!0),PDFViewerApplicationOptions.set("externalLinkTarget",pdfjsLib.LinkTarget.BLANK),PDFViewerApplicationOptions.set("isEvalSupported",!1),PDFViewerApplicationOptions.set("workerSrc",document.getElementsByTagName("head")[0].getAttribute("data-workersrc")),PDFViewerApplicationOptions.set("cMapUrl",document.getElementsByTagName("head")[0].getAttribute("data-cmapurl")),e.debug("Initialized files_pdfviewer",PDFViewerApplicationOptions.getAll()),PDFViewerApplication.download=function(){function t(e){let t=0;const r=e.length;for(;t<r&&""===e[t].trim();)t++;return"data:"===e.substr(t,5).toLowerCase()}const r=decodeURIComponent(window.location.search.substr(6));this.downloadManager.downloadUrl(r,function(r){const n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"document.pdf";if(t(r))return e.warn('getPDFFileNameFromURL: ignoring "data:" URL for performance reasons.'),n;const o=/^(?:(?:[^:]+:)?\/\/[^/]+)?([^?#]*)(\?[^#]*)?(#.*)?$/,i=/[^/?#=]+\.pdf\b(?!.*\.pdf\b)/i,u=o.exec(r);let c=i.exec(u[1])||i.exec(u[2])||i.exec(u[3]);if(c&&(c=c[0],-1!==c.indexOf("%")))try{c=i.exec(decodeURIComponent(c))[0]}catch(t){e.debug(t)}return c||n}(r))},!(0,t.default)()){PDFViewerApplication.download=function(){};const t=document.getElementById("toolbarViewerRight").querySelector("button.download");t&&(t.style.display="none"),delete PDFViewerApplication.supportsPrinting,PDFViewerApplication.supportsPrinting=!1,PDFViewerApplication.beforePrint=function(){},document.getElementById("viewer").classList.add("disabledTextSelection"),e.debug("Files_PDFViewer, download and print disabled")}}),!0)})()})();
//# sourceMappingURL=files_pdfviewer-workersrc.js.map?v=ce5ed7e131aba81d89bd