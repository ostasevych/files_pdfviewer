/*! For license information please see files_pdfviewer-main.js.LICENSE.txt */
(()=>{var t={9753:(t,e,r)=>{"use strict";r(9070),e.nu=void 0,r(9601),r(4916),r(5306),r(1539),r(9714),r(2772);var n=function(t,e,r){var n,o=Object.assign({escape:!0},r||{});return"/"!==t.charAt(0)&&(t="/"+t),n=(n=e||{})||{},t.replace(/{([^{}]*)}/g,(function(t,e){var r=n[e];return o.escape?"string"==typeof r||"number"==typeof r?encodeURIComponent(r.toString()):encodeURIComponent(t):"string"==typeof r||"number"==typeof r?r.toString():t}))};e.nu=function(t,e,r){var o,a,c,u=Object.assign({noRewrite:!1},r||{});return!0!==(null===(o=window)||void 0===o||null===(a=o.OC)||void 0===a||null===(c=a.config)||void 0===c?void 0:c.modRewriteWorking)||u.noRewrite?i()+"/index.php"+n(t,e,r):i()+n(t,e,r)};var o=function(t,e,r){var n,o,a,c=-1!==(null===(n=window)||void 0===n||null===(o=n.OC)||void 0===o||null===(a=o.coreApps)||void 0===a?void 0:a.indexOf(t)),u=i();if("php"!==r.substring(r.length-3)||c)if("php"===r.substring(r.length-3)||c)u+="settings"!==t&&"core"!==t&&"search"!==t||"ajax"!==e?"/":"/index.php/",c||(u+="apps/"),""!==t&&(u+=t+="/"),e&&(u+=e+"/"),u+=r;else{var s,l,f;u=null===(s=window)||void 0===s||null===(l=s.OC)||void 0===l||null===(f=l.appswebroots)||void 0===f?void 0:f[t],e&&(u+="/"+e+"/"),"/"!==u.substring(u.length-1)&&(u+="/"),u+=r}else u+="/index.php/apps/"+t,"index.php"!==r&&(u+="/",e&&(u+=encodeURI(e+"/")),u+=r);return u};var i=function(){var t,e;return(null===(t=window)||void 0===t||null===(e=t.OC)||void 0===e?void 0:e.webroot)||""}},1530:(t,e,r)=>{"use strict";var n=r(8710).charAt;t.exports=function(t,e,r){return e+(r?n(t,e).length:1)}},9670:(t,e,r)=>{var n=r(111);t.exports=function(t){if(!n(t))throw TypeError(String(t)+" is not an object");return t}},1318:(t,e,r)=>{var n=r(5656),o=r(7466),i=r(1400),a=function(t){return function(e,r,a){var c,u=n(e),s=o(u.length),l=i(a,s);if(t&&r!=r){for(;s>l;)if((c=u[l++])!=c)return!0}else for(;s>l;l++)if((t||l in u)&&u[l]===r)return t||l||0;return!t&&-1}};t.exports={includes:a(!0),indexOf:a(!1)}},9341:(t,e,r)=>{"use strict";var n=r(7293);t.exports=function(t,e){var r=[][t];return!!r&&n((function(){r.call(null,e||function(){throw 1},1)}))}},4326:t=>{var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},648:(t,e,r)=>{var n=r(1694),o=r(4326),i=r(5112)("toStringTag"),a="Arguments"==o(function(){return arguments}());t.exports=n?o:function(t){var e,r,n;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),i))?r:a?o(e):"Object"==(n=o(e))&&"function"==typeof e.callee?"Arguments":n}},9920:(t,e,r)=>{var n=r(6656),o=r(3887),i=r(1236),a=r(3070);t.exports=function(t,e){for(var r=o(e),c=a.f,u=i.f,s=0;s<r.length;s++){var l=r[s];n(t,l)||c(t,l,u(e,l))}}},8880:(t,e,r)=>{var n=r(9781),o=r(3070),i=r(9114);t.exports=n?function(t,e,r){return o.f(t,e,i(1,r))}:function(t,e,r){return t[e]=r,t}},9114:t=>{t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},9781:(t,e,r)=>{var n=r(7293);t.exports=!n((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},317:(t,e,r)=>{var n=r(7854),o=r(111),i=n.document,a=o(i)&&o(i.createElement);t.exports=function(t){return a?i.createElement(t):{}}},8113:(t,e,r)=>{var n=r(5005);t.exports=n("navigator","userAgent")||""},7392:(t,e,r)=>{var n,o,i=r(7854),a=r(8113),c=i.process,u=c&&c.versions,s=u&&u.v8;s?o=(n=s.split("."))[0]<4?1:n[0]+n[1]:a&&(!(n=a.match(/Edge\/(\d+)/))||n[1]>=74)&&(n=a.match(/Chrome\/(\d+)/))&&(o=n[1]),t.exports=o&&+o},748:t=>{t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},2109:(t,e,r)=>{var n=r(7854),o=r(1236).f,i=r(8880),a=r(1320),c=r(3505),u=r(9920),s=r(4705);t.exports=function(t,e){var r,l,f,p,v,h=t.target,d=t.global,g=t.stat;if(r=d?n:g?n[h]||c(h,{}):(n[h]||{}).prototype)for(l in e){if(p=e[l],f=t.noTargetGet?(v=o(r,l))&&v.value:r[l],!s(d?l:h+(g?".":"#")+l,t.forced)&&void 0!==f){if(typeof p==typeof f)continue;u(p,f)}(t.sham||f&&f.sham)&&i(p,"sham",!0),a(r,l,p,t)}}},7293:t=>{t.exports=function(t){try{return!!t()}catch(t){return!0}}},7007:(t,e,r)=>{"use strict";r(4916);var n=r(1320),o=r(2261),i=r(7293),a=r(5112),c=r(8880),u=a("species"),s=RegExp.prototype,l=!i((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),f="$0"==="a".replace(/./,"$0"),p=a("replace"),v=!!/./[p]&&""===/./[p]("a","$0"),h=!i((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var r="ab".split(t);return 2!==r.length||"a"!==r[0]||"b"!==r[1]}));t.exports=function(t,e,r,p){var d=a(t),g=!i((function(){var e={};return e[d]=function(){return 7},7!=""[t](e)})),y=g&&!i((function(){var e=!1,r=/a/;return"split"===t&&((r={}).constructor={},r.constructor[u]=function(){return r},r.flags="",r[d]=/./[d]),r.exec=function(){return e=!0,null},r[d](""),!e}));if(!g||!y||"replace"===t&&(!l||!f||v)||"split"===t&&!h){var m=/./[d],x=r(d,""[t],(function(t,e,r,n,i){var a=e.exec;return a===o||a===s.exec?g&&!i?{done:!0,value:m.call(e,r,n)}:{done:!0,value:t.call(r,e,n)}:{done:!1}}),{REPLACE_KEEPS_$0:f,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:v}),b=x[0],w=x[1];n(String.prototype,t,b),n(s,d,2==e?function(t,e){return w.call(t,this,e)}:function(t){return w.call(t,this)})}p&&c(s[d],"sham",!0)}},5005:(t,e,r)=>{var n=r(857),o=r(7854),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,e){return arguments.length<2?i(n[t])||i(o[t]):n[t]&&n[t][e]||o[t]&&o[t][e]}},647:(t,e,r)=>{var n=r(7908),o=Math.floor,i="".replace,a=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,c=/\$([$&'`]|\d{1,2})/g;t.exports=function(t,e,r,u,s,l){var f=r+t.length,p=u.length,v=c;return void 0!==s&&(s=n(s),v=a),i.call(l,v,(function(n,i){var a;switch(i.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,r);case"'":return e.slice(f);case"<":a=s[i.slice(1,-1)];break;default:var c=+i;if(0===c)return n;if(c>p){var l=o(c/10);return 0===l?n:l<=p?void 0===u[l-1]?i.charAt(1):u[l-1]+i.charAt(1):n}a=u[c-1]}return void 0===a?"":a}))}},7854:(t,e,r)=>{var n=function(t){return t&&t.Math==Math&&t};t.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof r.g&&r.g)||function(){return this}()||Function("return this")()},6656:(t,e,r)=>{var n=r(7908),o={}.hasOwnProperty;t.exports=Object.hasOwn||function(t,e){return o.call(n(t),e)}},3501:t=>{t.exports={}},4664:(t,e,r)=>{var n=r(9781),o=r(7293),i=r(317);t.exports=!n&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},8361:(t,e,r)=>{var n=r(7293),o=r(4326),i="".split;t.exports=n((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},2788:(t,e,r)=>{var n=r(5465),o=Function.toString;"function"!=typeof n.inspectSource&&(n.inspectSource=function(t){return o.call(t)}),t.exports=n.inspectSource},9909:(t,e,r)=>{var n,o,i,a=r(8536),c=r(7854),u=r(111),s=r(8880),l=r(6656),f=r(5465),p=r(6200),v=r(3501),h="Object already initialized",d=c.WeakMap;if(a||f.state){var g=f.state||(f.state=new d),y=g.get,m=g.has,x=g.set;n=function(t,e){if(m.call(g,t))throw new TypeError(h);return e.facade=t,x.call(g,t,e),e},o=function(t){return y.call(g,t)||{}},i=function(t){return m.call(g,t)}}else{var b=p("state");v[b]=!0,n=function(t,e){if(l(t,b))throw new TypeError(h);return e.facade=t,s(t,b,e),e},o=function(t){return l(t,b)?t[b]:{}},i=function(t){return l(t,b)}}t.exports={set:n,get:o,has:i,enforce:function(t){return i(t)?o(t):n(t,{})},getterFor:function(t){return function(e){var r;if(!u(e)||(r=o(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return r}}}},4705:(t,e,r)=>{var n=r(7293),o=/#|\.prototype\./,i=function(t,e){var r=c[a(t)];return r==s||r!=u&&("function"==typeof e?n(e):!!e)},a=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},c=i.data={},u=i.NATIVE="N",s=i.POLYFILL="P";t.exports=i},111:t=>{t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},1913:t=>{t.exports=!1},133:(t,e,r)=>{var n=r(7392),o=r(7293);t.exports=!!Object.getOwnPropertySymbols&&!o((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&n&&n<41}))},8536:(t,e,r)=>{var n=r(7854),o=r(2788),i=n.WeakMap;t.exports="function"==typeof i&&/native code/.test(o(i))},1574:(t,e,r)=>{"use strict";var n=r(9781),o=r(7293),i=r(1956),a=r(5181),c=r(5296),u=r(7908),s=r(8361),l=Object.assign,f=Object.defineProperty;t.exports=!l||o((function(){if(n&&1!==l({b:1},l(f({},"a",{enumerable:!0,get:function(){f(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0;var t={},e={},r=Symbol(),o="abcdefghijklmnopqrst";return t[r]=7,o.split("").forEach((function(t){e[t]=t})),7!=l({},t)[r]||i(l({},e)).join("")!=o}))?function(t,e){for(var r=u(t),o=arguments.length,l=1,f=a.f,p=c.f;o>l;)for(var v,h=s(arguments[l++]),d=f?i(h).concat(f(h)):i(h),g=d.length,y=0;g>y;)v=d[y++],n&&!p.call(h,v)||(r[v]=h[v]);return r}:l},3070:(t,e,r)=>{var n=r(9781),o=r(4664),i=r(9670),a=r(7593),c=Object.defineProperty;e.f=n?c:function(t,e,r){if(i(t),e=a(e,!0),i(r),o)try{return c(t,e,r)}catch(t){}if("get"in r||"set"in r)throw TypeError("Accessors not supported");return"value"in r&&(t[e]=r.value),t}},1236:(t,e,r)=>{var n=r(9781),o=r(5296),i=r(9114),a=r(5656),c=r(7593),u=r(6656),s=r(4664),l=Object.getOwnPropertyDescriptor;e.f=n?l:function(t,e){if(t=a(t),e=c(e,!0),s)try{return l(t,e)}catch(t){}if(u(t,e))return i(!o.f.call(t,e),t[e])}},8006:(t,e,r)=>{var n=r(6324),o=r(748).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return n(t,o)}},5181:(t,e)=>{e.f=Object.getOwnPropertySymbols},6324:(t,e,r)=>{var n=r(6656),o=r(5656),i=r(1318).indexOf,a=r(3501);t.exports=function(t,e){var r,c=o(t),u=0,s=[];for(r in c)!n(a,r)&&n(c,r)&&s.push(r);for(;e.length>u;)n(c,r=e[u++])&&(~i(s,r)||s.push(r));return s}},1956:(t,e,r)=>{var n=r(6324),o=r(748);t.exports=Object.keys||function(t){return n(t,o)}},5296:(t,e)=>{"use strict";var r={}.propertyIsEnumerable,n=Object.getOwnPropertyDescriptor,o=n&&!r.call({1:2},1);e.f=o?function(t){var e=n(this,t);return!!e&&e.enumerable}:r},288:(t,e,r)=>{"use strict";var n=r(1694),o=r(648);t.exports=n?{}.toString:function(){return"[object "+o(this)+"]"}},3887:(t,e,r)=>{var n=r(5005),o=r(8006),i=r(5181),a=r(9670);t.exports=n("Reflect","ownKeys")||function(t){var e=o.f(a(t)),r=i.f;return r?e.concat(r(t)):e}},857:(t,e,r)=>{var n=r(7854);t.exports=n},1320:(t,e,r)=>{var n=r(7854),o=r(8880),i=r(6656),a=r(3505),c=r(2788),u=r(9909),s=u.get,l=u.enforce,f=String(String).split("String");(t.exports=function(t,e,r,c){var u,s=!!c&&!!c.unsafe,p=!!c&&!!c.enumerable,v=!!c&&!!c.noTargetGet;"function"==typeof r&&("string"!=typeof e||i(r,"name")||o(r,"name",e),(u=l(r)).source||(u.source=f.join("string"==typeof e?e:""))),t!==n?(s?!v&&t[e]&&(p=!0):delete t[e],p?t[e]=r:o(t,e,r)):p?t[e]=r:a(e,r)})(Function.prototype,"toString",(function(){return"function"==typeof this&&s(this).source||c(this)}))},7651:(t,e,r)=>{var n=r(4326),o=r(2261);t.exports=function(t,e){var r=t.exec;if("function"==typeof r){var i=r.call(t,e);if("object"!=typeof i)throw TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==n(t))throw TypeError("RegExp#exec called on incompatible receiver");return o.call(t,e)}},2261:(t,e,r)=>{"use strict";var n,o,i=r(7066),a=r(2999),c=r(2309),u=RegExp.prototype.exec,s=c("native-string-replace",String.prototype.replace),l=u,f=(n=/a/,o=/b*/g,u.call(n,"a"),u.call(o,"a"),0!==n.lastIndex||0!==o.lastIndex),p=a.UNSUPPORTED_Y||a.BROKEN_CARET,v=void 0!==/()??/.exec("")[1];(f||v||p)&&(l=function(t){var e,r,n,o,a=this,c=p&&a.sticky,l=i.call(a),h=a.source,d=0,g=t;return c&&(-1===(l=l.replace("y","")).indexOf("g")&&(l+="g"),g=String(t).slice(a.lastIndex),a.lastIndex>0&&(!a.multiline||a.multiline&&"\n"!==t[a.lastIndex-1])&&(h="(?: "+h+")",g=" "+g,d++),r=new RegExp("^(?:"+h+")",l)),v&&(r=new RegExp("^"+h+"$(?!\\s)",l)),f&&(e=a.lastIndex),n=u.call(c?r:a,g),c?n?(n.input=n.input.slice(d),n[0]=n[0].slice(d),n.index=a.lastIndex,a.lastIndex+=n[0].length):a.lastIndex=0:f&&n&&(a.lastIndex=a.global?n.index+n[0].length:e),v&&n&&n.length>1&&s.call(n[0],r,(function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(n[o]=void 0)})),n}),t.exports=l},7066:(t,e,r)=>{"use strict";var n=r(9670);t.exports=function(){var t=n(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},2999:(t,e,r)=>{"use strict";var n=r(7293);function o(t,e){return RegExp(t,e)}e.UNSUPPORTED_Y=n((function(){var t=o("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=n((function(){var t=o("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},4488:t=>{t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},3505:(t,e,r)=>{var n=r(7854),o=r(8880);t.exports=function(t,e){try{o(n,t,e)}catch(r){n[t]=e}return e}},6200:(t,e,r)=>{var n=r(2309),o=r(9711),i=n("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},5465:(t,e,r)=>{var n=r(7854),o=r(3505),i="__core-js_shared__",a=n[i]||o(i,{});t.exports=a},2309:(t,e,r)=>{var n=r(1913),o=r(5465);(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.14.0",mode:n?"pure":"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})},8710:(t,e,r)=>{var n=r(9958),o=r(4488),i=function(t){return function(e,r){var i,a,c=String(o(e)),u=n(r),s=c.length;return u<0||u>=s?t?"":void 0:(i=c.charCodeAt(u))<55296||i>56319||u+1===s||(a=c.charCodeAt(u+1))<56320||a>57343?t?c.charAt(u):i:t?c.slice(u,u+2):a-56320+(i-55296<<10)+65536}};t.exports={codeAt:i(!1),charAt:i(!0)}},1400:(t,e,r)=>{var n=r(9958),o=Math.max,i=Math.min;t.exports=function(t,e){var r=n(t);return r<0?o(r+e,0):i(r,e)}},5656:(t,e,r)=>{var n=r(8361),o=r(4488);t.exports=function(t){return n(o(t))}},9958:t=>{var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},7466:(t,e,r)=>{var n=r(9958),o=Math.min;t.exports=function(t){return t>0?o(n(t),9007199254740991):0}},7908:(t,e,r)=>{var n=r(4488);t.exports=function(t){return Object(n(t))}},7593:(t,e,r)=>{var n=r(111);t.exports=function(t,e){if(!n(t))return t;var r,o;if(e&&"function"==typeof(r=t.toString)&&!n(o=r.call(t)))return o;if("function"==typeof(r=t.valueOf)&&!n(o=r.call(t)))return o;if(!e&&"function"==typeof(r=t.toString)&&!n(o=r.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},1694:(t,e,r)=>{var n={};n[r(5112)("toStringTag")]="z",t.exports="[object z]"===String(n)},9711:t=>{var e=0,r=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++e+r).toString(36)}},3307:(t,e,r)=>{var n=r(133);t.exports=n&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},5112:(t,e,r)=>{var n=r(7854),o=r(2309),i=r(6656),a=r(9711),c=r(133),u=r(3307),s=o("wks"),l=n.Symbol,f=u?l:l&&l.withoutSetter||a;t.exports=function(t){return i(s,t)&&(c||"string"==typeof s[t])||(c&&i(l,t)?s[t]=l[t]:s[t]=f("Symbol."+t)),s[t]}},2772:(t,e,r)=>{"use strict";var n=r(2109),o=r(1318).indexOf,i=r(9341),a=[].indexOf,c=!!a&&1/[1].indexOf(1,-0)<0,u=i("indexOf");n({target:"Array",proto:!0,forced:c||!u},{indexOf:function(t){return c?a.apply(this,arguments)||0:o(this,t,arguments.length>1?arguments[1]:void 0)}})},9601:(t,e,r)=>{var n=r(2109),o=r(1574);n({target:"Object",stat:!0,forced:Object.assign!==o},{assign:o})},9070:(t,e,r)=>{var n=r(2109),o=r(9781);n({target:"Object",stat:!0,forced:!o,sham:!o},{defineProperty:r(3070).f})},1539:(t,e,r)=>{var n=r(1694),o=r(1320),i=r(288);n||o(Object.prototype,"toString",i,{unsafe:!0})},4916:(t,e,r)=>{"use strict";var n=r(2109),o=r(2261);n({target:"RegExp",proto:!0,forced:/./.exec!==o},{exec:o})},9714:(t,e,r)=>{"use strict";var n=r(1320),o=r(9670),i=r(7293),a=r(7066),c="toString",u=RegExp.prototype,s=u[c],l=i((function(){return"/a/b"!=s.call({source:"a",flags:"b"})})),f=s.name!=c;(l||f)&&n(RegExp.prototype,c,(function(){var t=o(this),e=String(t.source),r=t.flags;return"/"+e+"/"+String(void 0===r&&t instanceof RegExp&&!("flags"in u)?a.call(t):r)}),{unsafe:!0})},5306:(t,e,r)=>{"use strict";var n=r(7007),o=r(9670),i=r(7466),a=r(9958),c=r(4488),u=r(1530),s=r(647),l=r(7651),f=Math.max,p=Math.min;n("replace",2,(function(t,e,r,n){var v=n.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,h=n.REPLACE_KEEPS_$0,d=v?"$":"$0";return[function(r,n){var o=c(this),i=null==r?void 0:r[t];return void 0!==i?i.call(r,o,n):e.call(String(o),r,n)},function(t,n){if(!v&&h||"string"==typeof n&&-1===n.indexOf(d)){var c=r(e,t,this,n);if(c.done)return c.value}var g=o(t),y=String(this),m="function"==typeof n;m||(n=String(n));var x=g.global;if(x){var b=g.unicode;g.lastIndex=0}for(var w=[];;){var E=l(g,y);if(null===E)break;if(w.push(E),!x)break;""===String(E[0])&&(g.lastIndex=u(y,i(g.lastIndex),b))}for(var S,O="",j=0,_=0;_<w.length;_++){E=w[_];for(var A=String(E[0]),C=f(p(a(E.index),y.length),0),T=[],P=1;P<E.length;P++)T.push(void 0===(S=E[P])?S:String(S));var R=E.groups;if(m){var L=[A].concat(T,C,y);void 0!==R&&L.push(R);var I=String(n.apply(void 0,L))}else I=s(A,y,C,T,R,n);C>=j&&(O+=y.slice(j,C)+I,j=C+A.length)}return O+y.slice(j)}]}))},241:(t,e,r)=>{"use strict";r.d(e,{Z:()=>c});var n=r(7537),o=r.n(n),i=r(3645),a=r.n(i)()(o());a.push([t.id,"iframe[data-v-14db9cc4]{position:absolute;top:0;width:100%;height:calc(100vh - var(--header-height))}","",{version:3,sources:["webpack://./src/views/PDFView.vue"],names:[],mappings:"AAoDA,wBACC,iBAAA,CACA,KAAA,CACA,UAAA,CACA,yCAAA",sourcesContent:["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\niframe {\n\tposition: absolute;\n\ttop: 0;\n\twidth: 100%;\n\theight: calc(100vh - var(--header-height));\n}\n\n"],sourceRoot:""}]);const c=a},3645:t=>{"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var r="",n=void 0!==e[5];return e[4]&&(r+="@supports (".concat(e[4],") {")),e[2]&&(r+="@media ".concat(e[2]," {")),n&&(r+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),r+=t(e),n&&(r+="}"),e[2]&&(r+="}"),e[4]&&(r+="}"),r})).join("")},e.i=function(t,r,n,o,i){"string"==typeof t&&(t=[[null,t,void 0]]);var a={};if(n)for(var c=0;c<this.length;c++){var u=this[c][0];null!=u&&(a[u]=!0)}for(var s=0;s<t.length;s++){var l=[].concat(t[s]);n&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),r&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=r):l[2]=r),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},7537:t=>{"use strict";t.exports=function(t){var e=t[1],r=t[3];if(!r)return e;if("function"==typeof btoa){var n=btoa(unescape(encodeURIComponent(JSON.stringify(r)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(n),i="/*# ".concat(o," */"),a=r.sources.map((function(t){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(t," */")}));return[e].concat(a).concat([i]).join("\n")}return[e].join("\n")}},3379:t=>{"use strict";var e=[];function r(t){for(var r=-1,n=0;n<e.length;n++)if(e[n].identifier===t){r=n;break}return r}function n(t,n){for(var i={},a=[],c=0;c<t.length;c++){var u=t[c],s=n.base?u[0]+n.base:u[0],l=i[s]||0,f="".concat(s," ").concat(l);i[s]=l+1;var p=r(f),v={css:u[1],media:u[2],sourceMap:u[3],supports:u[4],layer:u[5]};if(-1!==p)e[p].references++,e[p].updater(v);else{var h=o(v,n);n.byIndex=c,e.splice(c,0,{identifier:f,updater:h,references:1})}a.push(f)}return a}function o(t,e){var r=e.domAPI(e);r.update(t);return function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;r.update(t=e)}else r.remove()}}t.exports=function(t,o){var i=n(t=t||[],o=o||{});return function(t){t=t||[];for(var a=0;a<i.length;a++){var c=r(i[a]);e[c].references--}for(var u=n(t,o),s=0;s<i.length;s++){var l=r(i[s]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}i=u}}},569:t=>{"use strict";var e={};t.exports=function(t,r){var n=function(t){if(void 0===e[t]){var r=document.querySelector(t);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(t){r=null}e[t]=r}return e[t]}(t);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(r)}},9216:t=>{"use strict";t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},3565:(t,e,r)=>{"use strict";t.exports=function(t){var e=r.nc;e&&t.setAttribute("nonce",e)}},7795:t=>{"use strict";t.exports=function(t){var e=t.insertStyleElement(t);return{update:function(r){!function(t,e,r){var n="";r.supports&&(n+="@supports (".concat(r.supports,") {")),r.media&&(n+="@media ".concat(r.media," {"));var o=void 0!==r.layer;o&&(n+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),n+=r.css,o&&(n+="}"),r.media&&(n+="}"),r.supports&&(n+="}");var i=r.sourceMap;i&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(n,t,e.options)}(e,t,r)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},4589:t=>{"use strict";t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var i=e[n]={id:n,exports:{}};return t[n](i,i.exports,r),i.exports}r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r.nc=void 0,(()=>{"use strict";var t=r(9753),e=document.getElementById("hideDownload");function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}function o(){o=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,i=Object.defineProperty||function(t,e,r){t[e]=r.value},a="function"==typeof Symbol?Symbol:{},c=a.iterator||"@@iterator",u=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,r){return t[e]=r}}function f(t,e,r,n){var o=e&&e.prototype instanceof h?e:h,a=Object.create(o.prototype),c=new A(n||[]);return i(a,"_invoke",{value:S(t,r,c)}),a}function p(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=f;var v={};function h(){}function d(){}function g(){}var y={};l(y,c,(function(){return this}));var m=Object.getPrototypeOf,x=m&&m(m(C([])));x&&x!==e&&r.call(x,c)&&(y=x);var b=g.prototype=h.prototype=Object.create(y);function w(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){function o(i,a,c,u){var s=p(t[i],t,a);if("throw"!==s.type){var l=s.arg,f=l.value;return f&&"object"==n(f)&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){o("next",t,c,u)}),(function(t){o("throw",t,c,u)})):e.resolve(f).then((function(t){l.value=t,c(l)}),(function(t){return o("throw",t,c,u)}))}u(s.arg)}var a;i(this,"_invoke",{value:function(t,r){function n(){return new e((function(e,n){o(t,r,e,n)}))}return a=a?a.then(n,n):n()}})}function S(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return T()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=O(a,r);if(c){if(c===v)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=p(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===v)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}function O(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,O(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),v;var o=p(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,v;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,v):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function _(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function A(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function C(t){if(t){var e=t[c];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:T}}function T(){return{value:void 0,done:!0}}return d.prototype=g,i(b,"constructor",{value:g,configurable:!0}),i(g,"constructor",{value:d,configurable:!0}),d.displayName=l(g,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,l(t,s,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},w(E.prototype),l(E.prototype,u,(function(){return this})),t.AsyncIterator=E,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new E(f(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},w(b),l(b,s,"Generator"),l(b,c,(function(){return this})),l(b,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=C,A.prototype={constructor:A,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(_),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),u=r.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),_(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;_(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:C(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),v}},t}function i(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}const a={name:"PDFView",computed:{iframeSrc:function(){var r;return(0,t.nu)("/apps/files_pdfviewer/?file={file}&canDownload={canDownload}",{canDownload:!e||e&&"true"!==e.value?1:0,file:null!==(r=this.source)&&void 0!==r?r:this.davPath})}},mounted:function(){var t,e=this;return(t=o().mark((function t(){return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.doneLoading(),e.$nextTick((function(){this.$el.focus()}));case 2:case"end":return t.stop()}}),t)})),function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function c(t){i(a,n,o,c,u,"next",t)}function u(t){i(a,n,o,c,u,"throw",t)}c(void 0)}))})()}};var c=r(3379),u=r.n(c),s=r(7795),l=r.n(s),f=r(569),p=r.n(f),v=r(3565),h=r.n(v),d=r(9216),g=r.n(d),y=r(4589),m=r.n(y),x=r(241),b={};b.styleTagTransform=m(),b.setAttributes=h(),b.insert=p().bind(null,"head"),b.domAPI=l(),b.insertStyleElement=g();u()(x.Z,b);x.Z&&x.Z.locals&&x.Z.locals;var w=function(t,e,r,n,o,i,a,c){var u,s="function"==typeof t?t.options:t;if(e&&(s.render=e,s.staticRenderFns=r,s._compiled=!0),n&&(s.functional=!0),i&&(s._scopeId="data-v-"+i),a?(u=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},s._ssrRegister=u):o&&(u=c?function(){o.call(this,(s.functional?this.parent:this).$root.$options.shadowRoot)}:o),u)if(s.functional){s._injectStyles=u;var l=s.render;s.render=function(t,e){return u.call(e),l(t,e)}}else{var f=s.beforeCreate;s.beforeCreate=f?[].concat(f,u):[u]}return{exports:t,options:s}}(a,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("iframe",{attrs:{src:t.iframeSrc}})}),[],!1,null,"14db9cc4",null);const E=w.exports;OCA.Viewer.registerHandler({id:"pdf",mimes:["application/pdf","application/illustrator"],component:E})})()})();
//# sourceMappingURL=files_pdfviewer-main.js.map?v=c20156d0b3e0c21eaa37