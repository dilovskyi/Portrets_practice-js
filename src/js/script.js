!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=58)}([function(t,e,n){(function(e){var n=function(t){return t&&t.Math==Math&&t};t.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof e&&e)||function(){return this}()||Function("return this")()}).call(this,n(30))},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e,n){var r=n(4),o=n(19),i=n(15);t.exports=r?function(t,e,n){return o.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){var r=n(1);t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},function(t,e){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,n){var r=n(6);t.exports=function(t){if(!r(t))throw TypeError(String(t)+" is not an object");return t}},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e,n){var r=n(32),o=n(5);t.exports=function(t){return r(o(t))}},function(t,e,n){var r=n(0),o=n(3);t.exports=function(t,e){try{o(r,t,e)}catch(n){r[t]=e}return e}},function(t,e,n){var r=n(0),o=n(10),i=r["__core-js_shared__"]||o("__core-js_shared__",{});t.exports=i},function(t,e,n){"use strict";var r,o,i=n(49),c=n(50),a=RegExp.prototype.exec,u=String.prototype.replace,l=a,s=(r=/a/,o=/b*/g,a.call(r,"a"),a.call(o,"a"),0!==r.lastIndex||0!==o.lastIndex),f=c.UNSUPPORTED_Y||c.BROKEN_CARET,p=void 0!==/()??/.exec("")[1];(s||p||f)&&(l=function(t){var e,n,r,o,c=this,l=f&&c.sticky,d=i.call(c),v=c.source,g=0,h=t;return l&&(-1===(d=d.replace("y","")).indexOf("g")&&(d+="g"),h=String(t).slice(c.lastIndex),c.lastIndex>0&&(!c.multiline||c.multiline&&"\n"!==t[c.lastIndex-1])&&(v="(?: "+v+")",h=" "+h,g++),n=new RegExp("^(?:"+v+")",d)),p&&(n=new RegExp("^"+v+"$(?!\\s)",d)),s&&(e=c.lastIndex),r=a.call(l?n:c,h),l?r?(r.input=r.input.slice(g),r[0]=r[0].slice(g),r.index=c.lastIndex,c.lastIndex+=r[0].length):c.lastIndex=0:s&&r&&(c.lastIndex=c.global?r.index+r[0].length:e),p&&r&&r.length>1&&u.call(r[0],n,(function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(r[o]=void 0)})),r}),t.exports=l},function(t,e,n){"use strict";var r=n(27),o=n(7),i=n(25),c=n(8),a=n(5),u=n(53),l=n(55),s=n(57),f=Math.max,p=Math.min;r("replace",2,(function(t,e,n,r){var d=r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,v=r.REPLACE_KEEPS_$0,g=d?"$":"$0";return[function(n,r){var o=a(this),i=null==n?void 0:n[t];return void 0!==i?i.call(n,o,r):e.call(String(o),n,r)},function(t,r){if(!d&&v||"string"==typeof r&&-1===r.indexOf(g)){var a=n(e,t,this,r);if(a.done)return a.value}var h=o(t),y=String(this),m="function"==typeof r;m||(r=String(r));var x=h.global;if(x){var b=h.unicode;h.lastIndex=0}for(var E=[];;){var S=s(h,y);if(null===S)break;if(E.push(S),!x)break;""===String(S[0])&&(h.lastIndex=u(y,i(h.lastIndex),b))}for(var _,w="",L=0,O=0;O<E.length;O++){S=E[O];for(var I=String(S[0]),R=f(p(c(S.index),y.length),0),P=[],j=1;j<S.length;j++)P.push(void 0===(_=S[j])?_:String(_));var A=S.groups;if(m){var T=[I].concat(P,R,y);void 0!==A&&T.push(A);var k=String(r.apply(void 0,T))}else k=l(I,y,R,P,A,r);R>=L&&(w+=y.slice(L,R)+k,L=R+I.length)}return w+y.slice(L)}]}))},function(t,e,n){var r=n(4),o=n(31),i=n(15),c=n(9),a=n(17),u=n(2),l=n(18),s=Object.getOwnPropertyDescriptor;e.f=r?s:function(t,e){if(t=c(t),e=a(e,!0),l)try{return s(t,e)}catch(t){}if(u(t,e))return i(!o.f.call(t,e),t[e])}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e,n){var r=n(6);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,e,n){var r=n(4),o=n(1),i=n(33);t.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},function(t,e,n){var r=n(4),o=n(18),i=n(7),c=n(17),a=Object.defineProperty;e.f=r?a:function(t,e,n){if(i(t),e=c(e,!0),i(n),o)try{return a(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},function(t,e,n){var r=n(0),o=n(3),i=n(2),c=n(10),a=n(21),u=n(34),l=u.get,s=u.enforce,f=String(String).split("String");(t.exports=function(t,e,n,a){var u,l=!!a&&!!a.unsafe,p=!!a&&!!a.enumerable,d=!!a&&!!a.noTargetGet;"function"==typeof n&&("string"!=typeof e||i(n,"name")||o(n,"name",e),(u=s(n)).source||(u.source=f.join("string"==typeof e?e:""))),t!==r?(l?!d&&t[e]&&(p=!0):delete t[e],p?t[e]=n:o(t,e,n)):p?t[e]=n:c(e,n)})(Function.prototype,"toString",(function(){return"function"==typeof this&&l(this).source||a(this)}))},function(t,e,n){var r=n(11),o=Function.toString;"function"!=typeof r.inspectSource&&(r.inspectSource=function(t){return o.call(t)}),t.exports=r.inspectSource},function(t,e,n){var r=n(37),o=n(11);(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.8.3",mode:r?"pure":"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++n+r).toString(36)}},function(t,e){t.exports={}},function(t,e,n){var r=n(8),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,e,n){var r=n(1);t.exports=!!Object.getOwnPropertySymbols&&!r((function(){return!String(Symbol())}))},function(t,e,n){"use strict";n(28);var r=n(20),o=n(1),i=n(51),c=n(12),a=n(3),u=i("species"),l=!o((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),s="$0"==="a".replace(/./,"$0"),f=i("replace"),p=!!/./[f]&&""===/./[f]("a","$0"),d=!o((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));t.exports=function(t,e,n,f){var v=i(t),g=!o((function(){var e={};return e[v]=function(){return 7},7!=""[t](e)})),h=g&&!o((function(){var e=!1,n=/a/;return"split"===t&&((n={}).constructor={},n.constructor[u]=function(){return n},n.flags="",n[v]=/./[v]),n.exec=function(){return e=!0,null},n[v](""),!e}));if(!g||!h||"replace"===t&&(!l||!s||p)||"split"===t&&!d){var y=/./[v],m=n(v,""[t],(function(t,e,n,r,o){return e.exec===c?g&&!o?{done:!0,value:y.call(e,n,r)}:{done:!0,value:t.call(n,e,r)}:{done:!1}}),{REPLACE_KEEPS_$0:s,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:p}),x=m[0],b=m[1];r(String.prototype,t,x),r(RegExp.prototype,v,2==e?function(t,e){return b.call(t,this,e)}:function(t){return b.call(t,this)})}f&&a(RegExp.prototype[v],"sham",!0)}},function(t,e,n){"use strict";var r=n(29),o=n(12);r({target:"RegExp",proto:!0,forced:/./.exec!==o},{exec:o})},function(t,e,n){var r=n(0),o=n(14).f,i=n(3),c=n(20),a=n(10),u=n(38),l=n(48);t.exports=function(t,e){var n,s,f,p,d,v=t.target,g=t.global,h=t.stat;if(n=g?r:h?r[v]||a(v,{}):(r[v]||{}).prototype)for(s in e){if(p=e[s],f=t.noTargetGet?(d=o(n,s))&&d.value:n[s],!l(g?s:v+(h?".":"#")+s,t.forced)&&void 0!==f){if(typeof p==typeof f)continue;u(p,f)}(t.sham||f&&f.sham)&&i(p,"sham",!0),c(n,s,p,t)}}},function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){"use strict";var r={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!r.call({1:2},1);e.f=i?function(t){var e=o(this,t);return!!e&&e.enumerable}:r},function(t,e,n){var r=n(1),o=n(16),i="".split;t.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},function(t,e,n){var r=n(0),o=n(6),i=r.document,c=o(i)&&o(i.createElement);t.exports=function(t){return c?i.createElement(t):{}}},function(t,e,n){var r,o,i,c=n(35),a=n(0),u=n(6),l=n(3),s=n(2),f=n(11),p=n(36),d=n(24),v=a.WeakMap;if(c){var g=f.state||(f.state=new v),h=g.get,y=g.has,m=g.set;r=function(t,e){return e.facade=t,m.call(g,t,e),e},o=function(t){return h.call(g,t)||{}},i=function(t){return y.call(g,t)}}else{var x=p("state");d[x]=!0,r=function(t,e){return e.facade=t,l(t,x,e),e},o=function(t){return s(t,x)?t[x]:{}},i=function(t){return s(t,x)}}t.exports={set:r,get:o,has:i,enforce:function(t){return i(t)?o(t):r(t,{})},getterFor:function(t){return function(e){var n;if(!u(e)||(n=o(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return n}}}},function(t,e,n){var r=n(0),o=n(21),i=r.WeakMap;t.exports="function"==typeof i&&/native code/.test(o(i))},function(t,e,n){var r=n(22),o=n(23),i=r("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},function(t,e){t.exports=!1},function(t,e,n){var r=n(2),o=n(39),i=n(14),c=n(19);t.exports=function(t,e){for(var n=o(e),a=c.f,u=i.f,l=0;l<n.length;l++){var s=n[l];r(t,s)||a(t,s,u(e,s))}}},function(t,e,n){var r=n(40),o=n(42),i=n(47),c=n(7);t.exports=r("Reflect","ownKeys")||function(t){var e=o.f(c(t)),n=i.f;return n?e.concat(n(t)):e}},function(t,e,n){var r=n(41),o=n(0),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,e){return arguments.length<2?i(r[t])||i(o[t]):r[t]&&r[t][e]||o[t]&&o[t][e]}},function(t,e,n){var r=n(0);t.exports=r},function(t,e,n){var r=n(43),o=n(46).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},function(t,e,n){var r=n(2),o=n(9),i=n(44).indexOf,c=n(24);t.exports=function(t,e){var n,a=o(t),u=0,l=[];for(n in a)!r(c,n)&&r(a,n)&&l.push(n);for(;e.length>u;)r(a,n=e[u++])&&(~i(l,n)||l.push(n));return l}},function(t,e,n){var r=n(9),o=n(25),i=n(45),c=function(t){return function(e,n,c){var a,u=r(e),l=o(u.length),s=i(c,l);if(t&&n!=n){for(;l>s;)if((a=u[s++])!=a)return!0}else for(;l>s;s++)if((t||s in u)&&u[s]===n)return t||s||0;return!t&&-1}};t.exports={includes:c(!0),indexOf:c(!1)}},function(t,e,n){var r=n(8),o=Math.max,i=Math.min;t.exports=function(t,e){var n=r(t);return n<0?o(n+e,0):i(n,e)}},function(t,e){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e,n){var r=n(1),o=/#|\.prototype\./,i=function(t,e){var n=a[c(t)];return n==l||n!=u&&("function"==typeof e?r(e):!!e)},c=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},a=i.data={},u=i.NATIVE="N",l=i.POLYFILL="P";t.exports=i},function(t,e,n){"use strict";var r=n(7);t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},function(t,e,n){"use strict";var r=n(1);function o(t,e){return RegExp(t,e)}e.UNSUPPORTED_Y=r((function(){var t=o("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=r((function(){var t=o("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},function(t,e,n){var r=n(0),o=n(22),i=n(2),c=n(23),a=n(26),u=n(52),l=o("wks"),s=r.Symbol,f=u?s:s&&s.withoutSetter||c;t.exports=function(t){return i(l,t)||(a&&i(s,t)?l[t]=s[t]:l[t]=f("Symbol."+t)),l[t]}},function(t,e,n){var r=n(26);t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},function(t,e,n){"use strict";var r=n(54).charAt;t.exports=function(t,e,n){return e+(n?r(t,e).length:1)}},function(t,e,n){var r=n(8),o=n(5),i=function(t){return function(e,n){var i,c,a=String(o(e)),u=r(n),l=a.length;return u<0||u>=l?t?"":void 0:(i=a.charCodeAt(u))<55296||i>56319||u+1===l||(c=a.charCodeAt(u+1))<56320||c>57343?t?a.charAt(u):i:t?a.slice(u,u+2):c-56320+(i-55296<<10)+65536}};t.exports={codeAt:i(!1),charAt:i(!0)}},function(t,e,n){var r=n(56),o=Math.floor,i="".replace,c=/\$([$&'`]|\d\d?|<[^>]*>)/g,a=/\$([$&'`]|\d\d?)/g;t.exports=function(t,e,n,u,l,s){var f=n+t.length,p=u.length,d=a;return void 0!==l&&(l=r(l),d=c),i.call(s,d,(function(r,i){var c;switch(i.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,n);case"'":return e.slice(f);case"<":c=l[i.slice(1,-1)];break;default:var a=+i;if(0===a)return r;if(a>p){var s=o(a/10);return 0===s?r:s<=p?void 0===u[s-1]?i.charAt(1):u[s-1]+i.charAt(1):r}c=u[a-1]}return void 0===c?"":c}))}},function(t,e,n){var r=n(5);t.exports=function(t){return Object(r(t))}},function(t,e,n){var r=n(16),o=n(12);t.exports=function(t,e){var n=t.exec;if("function"==typeof n){var i=n.call(t,e);if("object"!=typeof i)throw TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==r(t))throw TypeError("RegExp#exec called on incompatible receiver");return o.call(t,e)}},function(t,e,n){"use strict";n.r(e);var r=()=>{let t=function(){const t=document.createElement("div");t.style.width="100%",t.style.height="100%",t.style.overflowY="scroll",t.style.visibility="hidden",t.style.backgroundColor="red",document.body.append(t);const e=t.offsetWidth-t.clientWidth;return t.remove(),e}(),e=!1;function n(n,r,o,i=!1){const c=document.querySelectorAll(n),a=document.querySelector(r),u=document.querySelector(o),l=document.querySelectorAll("[data-modal]");function s(){l.forEach(t=>{t.style.display="none"})}c.forEach(n=>{n.addEventListener("click",r=>{e=!0,r.target&&r.preventDefault(),i&&n.remove(),s(),a.style.display="block",document.body.style.overflow="hidden",document.body.style.marginRight=t+"px"})}),u.addEventListener("click",()=>{a.style.display="none",document.body.style.overflow="unset",s(),document.style.marginRight="0px"}),a.addEventListener("click",t=>{t.target===a&&(a.style.display="none",document.body.style.overflow="unset",s(),document.body.style.marginRight="0px")})}var r;n(".button-design",".popup-design",".popup-design .popup-close"),n(".button-consultation",".popup-consultation",".popup-consultation .popup-close"),n(".fixed-gift",".popup-gift",".popup-gift .popup-close",!0),r=".fixed-gift",window.addEventListener("scroll",()=>{!e&&window.pageYOffset+document.documentElement.clientHeight>=document.documentElement.scrollHeight&&document.querySelector(r).click()})};var o=(t,e,n,r)=>{const o=document.querySelectorAll(t);let i=1,c=!1;const a=t=>{t>o.length&&(i=1),t<1&&(i=o.length),o.forEach(t=>{t.classList.add("animated"),t.style.display="none"}),o[i-1].style.display="block"},u=t=>{a(i+=t)},l=()=>{c="vertical"==e?setInterval(()=>{u(1),o[i-1].classList.add("slideInDown")},1e10):setInterval(()=>{u(1),o[i-1].classList.add("slideInRight"),o[i-1].classList.remove("slideInLeft")},1e10)};try{const t=document.querySelector(r),e=document.querySelector(n);t.addEventListener("click",()=>{u(1),o[i-1].classList.remove("slideInLeft"),o[i-1].classList.add("slideInRight")}),e.addEventListener("click",()=>{u(-1),o[i-1].classList.add("slideInLeft"),o[i-1].classList.remove("slideInRight")})}catch(t){}o[0].parentNode.addEventListener("mouseover",()=>{clearInterval(c)}),o[0].parentNode.addEventListener("mouseleave",()=>{l()}),a(i),l()};var i=()=>{const t=document.querySelectorAll("form"),e=document.querySelectorAll("input"),n=document.querySelectorAll("[name=upload]"),r="Загрузка...",o="Спасибо! Скоро мы с Вами свяжемся",i="Что-то пошло не так...",c="assets/img/spinner.gif",a="assets/img/ok.png",u="assets/img/fail.png",l="assets/server.php",s="assets/questions.php";n.forEach(t=>{t.addEventListener("input",()=>{let e=t.files[0].name.split(".");e[0].length>8&&(e[0]=e[0].slice(0,7)+"..."),t.previousElementSibling.textContent=e[0]+"."+e[e.length-1]})}),t.forEach(t=>{t.addEventListener("submit",f=>{f.preventDefault();let p=document.createElement("div");p.classList.add("status"),t.parentNode.append(p),t.classList.add("animated","fadeOutUp"),setTimeout(()=>{t.style.display="none"},400);let d=document.createElement("img");d.setAttribute("src",c),d.classList.add("animated","fadeInUp"),p.append(d);let v=document.createElement("div");v.textContent=r,p.append(v);const g=new FormData(t);let h=null;h=t.closest(".popup-design")||t.classList.contains("calc_form")?l:s,(async(t,e)=>{console.log(e.entries());const n=await fetch(t,{method:"POST",body:e});return await n.text()})(h,g).then(t=>{console.log(t)}).then(()=>{d.setAttribute("src",a),v.textContent=o}).catch(()=>{v.textContent=i,d.setAttribute("src",u)}).finally(()=>{e.forEach(t=>{t.value=""}),n.forEach(t=>{t.previousElementSibling.textContent="Файл не выбран"}),setTimeout(()=>{p.remove(),t.style.display="block",t.classList.remove("fadeOutUp"),t.classList.add("fadeInUp")},5e3)})})})};n(13);var c=t=>{function e(t){let e=0,n=this.value.replace(/\D/g,"");const r="+7 (___) __ __ ___".replace(/\D/g,"");n.length<=r.length&&(n=r),this.value="+7 (___) __ __ ___".replace(/./g,(function(t){return/[_\d]/.test(t)&&e<n.length?(console.log(n),n.charAt(e++)):e>=n.length?"":t})),"blur"==t.type&&(2==this.value.length?this.value="":((t,e)=>{if(e.focus(),e.setSelectionRange)e.setSelectionRange(t,t);else if(e.createTextRange){let n=e.createTextRange();n.collapse(!0),n.moveStart("charecter",t),n.moveEnd("charecter",t),n.select()}})(this.value.length,this))}document.querySelectorAll(t).forEach(t=>{t.addEventListener("input",e),t.addEventListener("focus",e),t.addEventListener("blur",e)})};var a=t=>{document.querySelectorAll(t).forEach(t=>{t.addEventListener("input",t=>{t.target.value=t.target.value.replace(/[A-Za-z]/g,"")})})};var u=(t,e)=>{const n=document.querySelector(t);n.addEventListener("click",()=>{(async t=>{const e=await fetch(t);if(!e.ok)throw new Error(`Could not fetch ${t}, status ${e.text}`);return await e.json()})("http://localhost:3000/styles").then(t=>{r(t).catch(t=>{console.log(t)})}),n.remove()});const r=t=>{t.forEach(({src:t,title:n,link:r})=>{const o=document.createElement("div");o.classList.add("col-sm-3","col-sm-offset-0","col-xs-10","col-xs-offset-1","animated","fadeUp"),o.innerHTML=`\n        <div class=styles-block>\n          <img src=${t} alt>\n          <h4>${n}</h4>\n          <a href="${r}">Подробнее</a>\n        </div>\n      `,document.querySelector(e).appendChild(o)})}};window.addEventListener("DOMContentLoaded",()=>{r(),o(".feedback-slider-item","horizontal",".main-prev-btn",".main-next-btn"),o(".main-slider-item","vertical"),i(),c("[name=phone]"),a("[name=name]"),a("[name=message]"),u(".button-styles","#styles .row")})}]);
