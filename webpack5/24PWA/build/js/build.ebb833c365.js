(()=>{var r={5089:(r,t,e)=>{var n=e(2086),o=e(930),i=e(9268),u=n.TypeError;r.exports=function(r){if(o(r))return r;throw u(i(r)+" is not a function")}},6112:(r,t,e)=>{var n=e(2086),o=e(8759),i=n.String,u=n.TypeError;r.exports=function(r){if(o(r))return r;throw u(i(r)+" is not an object")}},6198:(r,t,e)=>{var n=e(4088),o=e(7740),i=e(2871),u=function(r){return function(t,e,u){var a,c=n(t),s=i(c),f=o(u,s);if(r&&e!=e){for(;s>f;)if((a=c[f++])!=a)return!0}else for(;s>f;f++)if((r||f in c)&&c[f]===e)return r||f||0;return!r&&-1}};r.exports={includes:u(!0),indexOf:u(!1)}},2802:(r,t,e)=>{"use strict";var n=e(3677);r.exports=function(r,t){var e=[][r];return!!e&&n((function(){e.call(null,t||function(){throw 1},1)}))}},8758:(r,t,e)=>{var n=e(2086),o=e(5089),i=e(3060),u=e(5974),a=e(2871),c=n.TypeError,s=function(r){return function(t,e,n,s){o(e);var f=i(t),p=u(f),v=a(f),l=r?v-1:0,g=r?-1:1;if(n<2)for(;;){if(l in p){s=p[l],l+=g;break}if(l+=g,r?l<0:v<=l)throw c("Reduce of empty array with no initial value")}for(;r?l>=0:v>l;l+=g)l in p&&(s=e(s,p[l],l,f));return s}};r.exports={left:s(!1),right:s(!0)}},2306:(r,t,e)=>{var n=e(8240),o=n({}.toString),i=n("".slice);r.exports=function(r){return i(o(r),8,-1)}},375:(r,t,e)=>{var n=e(2086),o=e(2371),i=e(930),u=e(2306),a=e(211)("toStringTag"),c=n.Object,s="Arguments"==u(function(){return arguments}());r.exports=o?u:function(r){var t,e,n;return void 0===r?"Undefined":null===r?"Null":"string"==typeof(e=function(r,t){try{return r[t]}catch(r){}}(t=c(r),a))?e:s?u(t):"Object"==(n=u(t))&&i(t.callee)?"Arguments":n}},8474:(r,t,e)=>{var n=e(9606),o=e(6095),i=e(4399),u=e(7826);r.exports=function(r,t,e){for(var a=o(t),c=u.f,s=i.f,f=0;f<a.length;f++){var p=a[f];n(r,p)||e&&n(e,p)||c(r,p,s(t,p))}}},2585:(r,t,e)=>{var n=e(5283),o=e(7826),i=e(5736);r.exports=n?function(r,t,e){return o.f(r,t,i(1,e))}:function(r,t,e){return r[t]=e,r}},5736:r=>{r.exports=function(r,t){return{enumerable:!(1&r),configurable:!(2&r),writable:!(4&r),value:t}}},5283:(r,t,e)=>{var n=e(3677);r.exports=!n((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},821:(r,t,e)=>{var n=e(2086),o=e(8759),i=n.document,u=o(i)&&o(i.createElement);r.exports=function(r){return u?i.createElement(r):{}}},1801:(r,t,e)=>{var n=e(2306),o=e(2086);r.exports="process"==n(o.process)},4999:(r,t,e)=>{var n=e(563);r.exports=n("navigator","userAgent")||""},1448:(r,t,e)=>{var n,o,i=e(2086),u=e(4999),a=i.process,c=i.Deno,s=a&&a.versions||c&&c.version,f=s&&s.v8;f&&(o=(n=f.split("."))[0]>0&&n[0]<4?1:+(n[0]+n[1])),!o&&u&&(!(n=u.match(/Edge\/(\d+)/))||n[1]>=74)&&(n=u.match(/Chrome\/(\d+)/))&&(o=+n[1]),r.exports=o},8684:r=>{r.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},1695:(r,t,e)=>{var n=e(2086),o=e(4399).f,i=e(2585),u=e(1007),a=e(3648),c=e(8474),s=e(7189);r.exports=function(r,t){var e,f,p,v,l,g=r.target,y=r.global,h=r.stat;if(e=y?n:h?n[g]||a(g,{}):(n[g]||{}).prototype)for(f in t){if(v=t[f],p=r.noTargetGet?(l=o(e,f))&&l.value:e[f],!s(y?f:g+(h?".":"#")+f,r.forced)&&void 0!==p){if(typeof v==typeof p)continue;c(v,p)}(r.sham||p&&p.sham)&&i(v,"sham",!0),u(e,f,v,r)}}},3677:r=>{r.exports=function(r){try{return!!r()}catch(r){return!0}}},9413:r=>{var t=Function.prototype.call;r.exports=t.bind?t.bind(t):function(){return t.apply(t,arguments)}},4398:(r,t,e)=>{var n=e(5283),o=e(9606),i=Function.prototype,u=n&&Object.getOwnPropertyDescriptor,a=o(i,"name"),c=a&&"something"===function(){}.name,s=a&&(!n||n&&u(i,"name").configurable);r.exports={EXISTS:a,PROPER:c,CONFIGURABLE:s}},8240:r=>{var t=Function.prototype,e=t.bind,n=t.call,o=e&&e.bind(n);r.exports=e?function(r){return r&&o(n,r)}:function(r){return r&&function(){return n.apply(r,arguments)}}},563:(r,t,e)=>{var n=e(2086),o=e(930),i=function(r){return o(r)?r:void 0};r.exports=function(r,t){return arguments.length<2?i(n[r]):n[r]&&n[r][t]}},2964:(r,t,e)=>{var n=e(5089);r.exports=function(r,t){var e=r[t];return null==e?void 0:n(e)}},2086:(r,t,e)=>{var n=function(r){return r&&r.Math==Math&&r};r.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof e.g&&e.g)||function(){return this}()||Function("return this")()},9606:(r,t,e)=>{var n=e(8240),o=e(3060),i=n({}.hasOwnProperty);r.exports=Object.hasOwn||function(r,t){return i(o(r),t)}},7153:r=>{r.exports={}},6761:(r,t,e)=>{var n=e(5283),o=e(3677),i=e(821);r.exports=!n&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},5974:(r,t,e)=>{var n=e(2086),o=e(8240),i=e(3677),u=e(2306),a=n.Object,c=o("".split);r.exports=i((function(){return!a("z").propertyIsEnumerable(0)}))?function(r){return"String"==u(r)?c(r,""):a(r)}:a},9277:(r,t,e)=>{var n=e(8240),o=e(930),i=e(4489),u=n(Function.toString);o(i.inspectSource)||(i.inspectSource=function(r){return u(r)}),r.exports=i.inspectSource},3278:(r,t,e)=>{var n,o,i,u=e(9316),a=e(2086),c=e(8240),s=e(8759),f=e(2585),p=e(9606),v=e(4489),l=e(8944),g=e(7153),y="Object already initialized",h=a.TypeError,b=a.WeakMap;if(u||v.state){var x=v.state||(v.state=new b),d=c(x.get),m=c(x.has),w=c(x.set);n=function(r,t){if(m(x,r))throw new h(y);return t.facade=r,w(x,r,t),t},o=function(r){return d(x,r)||{}},i=function(r){return m(x,r)}}else{var S=l("state");g[S]=!0,n=function(r,t){if(p(r,S))throw new h(y);return t.facade=r,f(r,S,t),t},o=function(r){return p(r,S)?r[S]:{}},i=function(r){return p(r,S)}}r.exports={set:n,get:o,has:i,enforce:function(r){return i(r)?o(r):n(r,{})},getterFor:function(r){return function(t){var e;if(!s(t)||(e=o(t)).type!==r)throw h("Incompatible receiver, "+r+" required");return e}}}},930:r=>{r.exports=function(r){return"function"==typeof r}},7189:(r,t,e)=>{var n=e(3677),o=e(930),i=/#|\.prototype\./,u=function(r,t){var e=c[a(r)];return e==f||e!=s&&(o(t)?n(t):!!t)},a=u.normalize=function(r){return String(r).replace(i,".").toLowerCase()},c=u.data={},s=u.NATIVE="N",f=u.POLYFILL="P";r.exports=u},8759:(r,t,e)=>{var n=e(930);r.exports=function(r){return"object"==typeof r?null!==r:n(r)}},3296:r=>{r.exports=!1},2071:(r,t,e)=>{var n=e(2086),o=e(563),i=e(930),u=e(5516),a=e(1876),c=n.Object;r.exports=a?function(r){return"symbol"==typeof r}:function(r){var t=o("Symbol");return i(t)&&u(t.prototype,c(r))}},2871:(r,t,e)=>{var n=e(4005);r.exports=function(r){return n(r.length)}},3193:(r,t,e)=>{var n=e(1448),o=e(3677);r.exports=!!Object.getOwnPropertySymbols&&!o((function(){var r=Symbol();return!String(r)||!(Object(r)instanceof Symbol)||!Symbol.sham&&n&&n<41}))},9316:(r,t,e)=>{var n=e(2086),o=e(930),i=e(9277),u=n.WeakMap;r.exports=o(u)&&/native code/.test(i(u))},7826:(r,t,e)=>{var n=e(2086),o=e(5283),i=e(6761),u=e(6112),a=e(2258),c=n.TypeError,s=Object.defineProperty;t.f=o?s:function(r,t,e){if(u(r),t=a(t),u(e),i)try{return s(r,t,e)}catch(r){}if("get"in e||"set"in e)throw c("Accessors not supported");return"value"in e&&(r[t]=e.value),r}},4399:(r,t,e)=>{var n=e(5283),o=e(9413),i=e(7446),u=e(5736),a=e(4088),c=e(2258),s=e(9606),f=e(6761),p=Object.getOwnPropertyDescriptor;t.f=n?p:function(r,t){if(r=a(r),t=c(t),f)try{return p(r,t)}catch(r){}if(s(r,t))return u(!o(i.f,r,t),r[t])}},62:(r,t,e)=>{var n=e(1352),o=e(8684).concat("length","prototype");t.f=Object.getOwnPropertyNames||function(r){return n(r,o)}},6952:(r,t)=>{t.f=Object.getOwnPropertySymbols},5516:(r,t,e)=>{var n=e(8240);r.exports=n({}.isPrototypeOf)},1352:(r,t,e)=>{var n=e(8240),o=e(9606),i=e(4088),u=e(6198).indexOf,a=e(7153),c=n([].push);r.exports=function(r,t){var e,n=i(r),s=0,f=[];for(e in n)!o(a,e)&&o(n,e)&&c(f,e);for(;t.length>s;)o(n,e=t[s++])&&(~u(f,e)||c(f,e));return f}},7446:(r,t)=>{"use strict";var e={}.propertyIsEnumerable,n=Object.getOwnPropertyDescriptor,o=n&&!e.call({1:2},1);t.f=o?function(r){var t=n(this,r);return!!t&&t.enumerable}:e},999:(r,t,e)=>{"use strict";var n=e(2371),o=e(375);r.exports=n?{}.toString:function(){return"[object "+o(this)+"]"}},7999:(r,t,e)=>{var n=e(2086),o=e(9413),i=e(930),u=e(8759),a=n.TypeError;r.exports=function(r,t){var e,n;if("string"===t&&i(e=r.toString)&&!u(n=o(e,r)))return n;if(i(e=r.valueOf)&&!u(n=o(e,r)))return n;if("string"!==t&&i(e=r.toString)&&!u(n=o(e,r)))return n;throw a("Can't convert object to primitive value")}},6095:(r,t,e)=>{var n=e(563),o=e(8240),i=e(62),u=e(6952),a=e(6112),c=o([].concat);r.exports=n("Reflect","ownKeys")||function(r){var t=i.f(a(r)),e=u.f;return e?c(t,e(r)):t}},1007:(r,t,e)=>{var n=e(2086),o=e(930),i=e(9606),u=e(2585),a=e(3648),c=e(9277),s=e(3278),f=e(4398).CONFIGURABLE,p=s.get,v=s.enforce,l=String(String).split("String");(r.exports=function(r,t,e,c){var s,p=!!c&&!!c.unsafe,g=!!c&&!!c.enumerable,y=!!c&&!!c.noTargetGet,h=c&&void 0!==c.name?c.name:t;o(e)&&("Symbol("===String(h).slice(0,7)&&(h="["+String(h).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),(!i(e,"name")||f&&e.name!==h)&&u(e,"name",h),(s=v(e)).source||(s.source=l.join("string"==typeof h?h:""))),r!==n?(p?!y&&r[t]&&(g=!0):delete r[t],g?r[t]=e:u(r,t,e)):g?r[t]=e:a(t,e)})(Function.prototype,"toString",(function(){return o(this)&&p(this).source||c(this)}))},9586:(r,t,e)=>{var n=e(2086).TypeError;r.exports=function(r){if(null==r)throw n("Can't call method on "+r);return r}},3648:(r,t,e)=>{var n=e(2086),o=Object.defineProperty;r.exports=function(r,t){try{o(n,r,{value:t,configurable:!0,writable:!0})}catch(e){n[r]=t}return t}},8944:(r,t,e)=>{var n=e(9197),o=e(5422),i=n("keys");r.exports=function(r){return i[r]||(i[r]=o(r))}},4489:(r,t,e)=>{var n=e(2086),o=e(3648),i="__core-js_shared__",u=n[i]||o(i,{});r.exports=u},9197:(r,t,e)=>{var n=e(3296),o=e(4489);(r.exports=function(r,t){return o[r]||(o[r]=void 0!==t?t:{})})("versions",[]).push({version:"3.20.0",mode:n?"pure":"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})},7740:(r,t,e)=>{var n=e(9502),o=Math.max,i=Math.min;r.exports=function(r,t){var e=n(r);return e<0?o(e+t,0):i(e,t)}},4088:(r,t,e)=>{var n=e(5974),o=e(9586);r.exports=function(r){return n(o(r))}},9502:r=>{var t=Math.ceil,e=Math.floor;r.exports=function(r){var n=+r;return n!=n||0===n?0:(n>0?e:t)(n)}},4005:(r,t,e)=>{var n=e(9502),o=Math.min;r.exports=function(r){return r>0?o(n(r),9007199254740991):0}},3060:(r,t,e)=>{var n=e(2086),o=e(9586),i=n.Object;r.exports=function(r){return i(o(r))}},1288:(r,t,e)=>{var n=e(2086),o=e(9413),i=e(8759),u=e(2071),a=e(2964),c=e(7999),s=e(211),f=n.TypeError,p=s("toPrimitive");r.exports=function(r,t){if(!i(r)||u(r))return r;var e,n=a(r,p);if(n){if(void 0===t&&(t="default"),e=o(n,r,t),!i(e)||u(e))return e;throw f("Can't convert object to primitive value")}return void 0===t&&(t="number"),c(r,t)}},2258:(r,t,e)=>{var n=e(1288),o=e(2071);r.exports=function(r){var t=n(r,"string");return o(t)?t:t+""}},2371:(r,t,e)=>{var n={};n[e(211)("toStringTag")]="z",r.exports="[object z]"===String(n)},9268:(r,t,e)=>{var n=e(2086).String;r.exports=function(r){try{return n(r)}catch(r){return"Object"}}},5422:(r,t,e)=>{var n=e(8240),o=0,i=Math.random(),u=n(1..toString);r.exports=function(r){return"Symbol("+(void 0===r?"":r)+")_"+u(++o+i,36)}},1876:(r,t,e)=>{var n=e(3193);r.exports=n&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},211:(r,t,e)=>{var n=e(2086),o=e(9197),i=e(9606),u=e(5422),a=e(3193),c=e(1876),s=o("wks"),f=n.Symbol,p=f&&f.for,v=c?f:f&&f.withoutSetter||u;r.exports=function(r){if(!i(s,r)||!a&&"string"!=typeof s[r]){var t="Symbol."+r;a&&i(f,r)?s[r]=f[r]:s[r]=c&&p?p(t):v(t)}return s[r]}},3902:(r,t,e)=>{"use strict";var n=e(1695),o=e(8758).left,i=e(2802),u=e(1448),a=e(1801);n({target:"Array",proto:!0,forced:!i("reduce")||!a&&u>79&&u<83},{reduce:function(r){var t=arguments.length;return o(this,r,t,t>1?arguments[1]:void 0)}})},3238:(r,t,e)=>{var n=e(2371),o=e(1007),i=e(999);n||o(Object.prototype,"toString",i,{unsafe:!0})}},t={};function e(n){var o=t[n];if(void 0!==o)return o.exports;var i=t[n]={exports:{}};return r[n](i,i.exports,e),i.exports}e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(r){if("object"==typeof window)return window}}(),(()=>{"use strict";e(3902),e(3238),console.log(6),function(){for(var r=arguments.length,t=new Array(r),e=0;e<r;e++)t[e]=arguments[e];t.reduce(((r,t)=>r+t),0)}(console.log(1,2,3,4)),"serviceWorker"in navigator&&window.addEventListener("load",(()=>{navigator.serviceWorker.register("/service-worker.js").then((()=>{console.log("sw注册成功")})).catch((()=>{console.log("sw注册失败")}))}))})()})();
//# sourceMappingURL=build.ebb833c365.js.map