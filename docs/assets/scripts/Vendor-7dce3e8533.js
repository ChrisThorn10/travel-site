!function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=9)}([,function(e,t,n){"use strict";e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},,,,,,,,function(e,t,n){"use strict";n(10),n(11),n(12)},function(e,t,n){"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};!function(e,t,n){function i(e,t){return(void 0===e?"undefined":r(e))===t}function s(e,t){return!!~(""+e).indexOf(t)}function o(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):y?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function a(e,n,r,i){var s,a,c,l,u="modernizr",f=o("div"),d=function(){var e=t.body;return e||((e=o(y?"svg":"body")).fake=!0),e}();if(parseInt(r,10))for(;r--;)(c=o("div")).id=i?i[r]:u+(r+1),f.appendChild(c);return s=o("style"),s.type="text/css",s.id="s"+u,(d.fake?d:f).appendChild(s),d.appendChild(f),s.styleSheet?s.styleSheet.cssText=e:s.appendChild(t.createTextNode(e)),f.id=u,d.fake&&(d.style.background="",d.style.overflow="hidden",l=A.style.overflow,A.style.overflow="hidden",A.appendChild(d)),a=n(f,e),d.fake?(d.parentNode.removeChild(d),A.style.overflow=l,A.offsetHeight):f.parentNode.removeChild(f),!!a}function c(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function l(t,r){var i=t.length;if("CSS"in e&&"supports"in e.CSS){for(;i--;)if(e.CSS.supports(c(t[i]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var s=[];i--;)s.push("("+c(t[i])+":"+r+")");return s=s.join(" or "),a("@supports ("+s+") { #modernizr { position: absolute; } }",function(t){return"absolute"==function(t,n,r){var i;if("getComputedStyle"in e){i=getComputedStyle.call(e,t,n);var s=e.console;null!==i?r&&(i=i.getPropertyValue(r)):s&&s[s.error?"error":"log"].call(s,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}else i=!n&&t.currentStyle&&t.currentStyle[r];return i}(t,null,"position")})}return n}function u(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function f(e,t){return function(){return e.apply(t,arguments)}}function d(e,t,r,a,c){var d=e.charAt(0).toUpperCase()+e.slice(1),p=(e+" "+b.join(d+" ")+d).split(" ");return i(t,"string")||i(t,"undefined")?function(e,t,r,a){function c(){d&&(delete w.style,delete w.modElem)}if(a=!i(a,"undefined")&&a,!i(r,"undefined")){var f=l(e,r);if(!i(f,"undefined"))return f}for(var d,p,m,h,g,v=["modernizr","tspan","samp"];!w.style&&v.length;)d=!0,w.modElem=o(v.shift()),w.style=w.modElem.style;for(m=e.length,p=0;p<m;p++)if(h=e[p],g=w.style[h],s(h,"-")&&(h=u(h)),w.style[h]!==n){if(a||i(r,"undefined"))return c(),"pfx"!=t||h;try{w.style[h]=r}catch(e){}if(w.style[h]!=g)return c(),"pfx"!=t||h}return c(),!1}(p,t,a,c):(p=(e+" "+S.join(d+" ")+d).split(" "),function(e,t,n){var r;for(var s in e)if(e[s]in t)return!1===n?e[s]:(r=t[e[s]],i(r,"function")?f(r,n||t):r);return!1}(p,t,r))}function p(e,t,r){return d(e,n,n,t,r)}var m=[],h={_version:"3.5.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){m.push({name:e,fn:t,options:n})},addAsyncTest:function(e){m.push({name:null,fn:e})}},g=function(){};g.prototype=h,g=new g;var v=[],A=t.documentElement,y="svg"===A.nodeName.toLowerCase(),b=h._config.usePrefixes?"Moz O ms Webkit".split(" "):[];h._cssomPrefixes=b;var z={elem:o("modernizr")};g._q.push(function(){delete z.elem});var w={style:z.elem.style};g._q.unshift(function(){delete w.style});var S=h._config.usePrefixes?"Moz O ms Webkit".toLowerCase().split(" "):[];h._domPrefixes=S,h.testAllProps=d,h.testAllProps=p,g.addTest("flexbox",p("flexBasis","1px",!0)),g.addTest("svg",!!t.createElementNS&&!!t.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect),function(){var e,t,n,r,s,o;for(var a in m)if(m.hasOwnProperty(a)){if(e=[],(t=m[a]).name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(r=i(t.fn,"function")?t.fn():t.fn,s=0;s<e.length;s++)1===(o=e[s].split(".")).length?g[o[0]]=r:(!g[o[0]]||g[o[0]]instanceof Boolean||(g[o[0]]=new Boolean(g[o[0]])),g[o[0]][o[1]]=r),v.push((r?"":"no-")+o.join("-"))}}(),function(e){var t=A.className,n=g._config.classPrefix||"";if(y&&(t=t.baseVal),g._config.enableJSClass){var r=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(r,"$1"+n+"js$2")}g._config.enableClasses&&(t+=" "+n+e.join(" "+n),y?A.className.baseVal=t:A.className=t)}(v),delete h.addTest,delete h.addAsyncTest;for(var C=0;C<g._q.length;C++)g._q[C]();e.Modernizr=g}(window,document)},function(e,t,n){"use strict";(function(e){var t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};!function(n,r){var i=function(e,t){if(!t.getElementsByClassName)return;var n,r,i=t.documentElement,s=e.Date,o=e.HTMLPictureElement,a=e.addEventListener,c=e.setTimeout,l=e.requestAnimationFrame||c,u=e.requestIdleCallback,f=/^picture$/i,d=["load","error","lazyincluded","_lazyloaded"],p={},m=Array.prototype.forEach,h=function(e,t){return p[t]||(p[t]=new RegExp("(\\s|^)"+t+"(\\s|$)")),p[t].test(e.getAttribute("class")||"")&&p[t]},g=function(e,t){h(e,t)||e.setAttribute("class",(e.getAttribute("class")||"").trim()+" "+t)},v=function(e,t){var n;(n=h(e,t))&&e.setAttribute("class",(e.getAttribute("class")||"").replace(n," "))},A=function e(t,n,r){var i=r?"addEventListener":"removeEventListener";r&&e(t,n),d.forEach(function(e){t[i](e,n)})},y=function(e,r,i,s,o){var a=t.createEvent("CustomEvent");return i||(i={}),i.instance=n,a.initCustomEvent(r,!s,!o,i),e.dispatchEvent(a),a},b=function(t,n){var i;!o&&(i=e.picturefill||r.pf)?i({reevaluate:!0,elements:[t]}):n&&n.src&&(t.src=n.src)},z=function(e,t){return(getComputedStyle(e,null)||{})[t]},w=function(e,t,n){for(n=n||e.offsetWidth;n<r.minSize&&t&&!e._lazysizesWidth;)n=t.offsetWidth,t=t.parentNode;return n},S=function(){var e,n,r=[],i=[],s=r,o=function(){var t=s;for(s=r.length?i:r,e=!0,n=!1;t.length;)t.shift()();e=!1},a=function(r,i){e&&!i?r.apply(this,arguments):(s.push(r),n||(n=!0,(t.hidden?c:l)(o)))};return a._lsFlush=o,a}(),C=function(e,t){return t?function(){S(e)}:function(){var t=this,n=arguments;S(function(){e.apply(t,n)})}},E=function(e){var t,n=0,r=666,i=function(){t=!1,n=s.now(),e()},o=u?function(){u(i,{timeout:r}),666!==r&&(r=666)}:C(function(){c(i)},!0);return function(e){var i;(e=!0===e)&&(r=44),t||(t=!0,(i=125-(s.now()-n))<0&&(i=0),e||i<9&&u?o():c(o,i))}},x=function(e){var t,n,r=function(){t=null,e()},i=function e(){var t=s.now()-n;t<99?c(e,99-t):(u||r)(r)};return function(){n=s.now(),t||(t=c(i,99))}},T=function(){var o,l,u,d,p,w,T,P,L,R,_,N,k,B,W=/^img$/i,$=/^iframe$/i,D="onscroll"in e&&!/glebot/.test(navigator.userAgent),O=0,I=0,U=-1,j=function e(t){I--,t&&t.target&&A(t.target,e),(!t||I<0||!t.target)&&(I=0)},F=function(e,n){var r,s=e,o="hidden"==z(t.body,"visibility")||"hidden"!=z(e,"visibility");for(P-=n,_+=n,L-=n,R+=n;o&&(s=s.offsetParent)&&s!=t.body&&s!=i;)(o=(z(s,"opacity")||1)>0)&&"visible"!=z(s,"overflow")&&(r=s.getBoundingClientRect(),o=R>r.left&&L<r.right&&_>r.top-1&&P<r.bottom+1);return o},H=function(){var e,s,a,c,u,f,p,m,h,g=n.elements;if((d=r.loadMode)&&I<8&&(e=g.length)){s=0,U++,null==k&&("expand"in r||(r.expand=i.clientHeight>500&&i.clientWidth>500?500:370),N=r.expand,k=N*r.expFactor),O<k&&I<1&&U>2&&d>2&&!t.hidden?(O=k,U=0):O=d>1&&U>1&&I<6?N:0;for(;s<e;s++)if(g[s]&&!g[s]._lazyRace)if(D)if((m=g[s].getAttribute("data-expand"))&&(f=1*m)||(f=O),h!==f&&(w=innerWidth+f*B,T=innerHeight+f,p=-1*f,h=f),a=g[s].getBoundingClientRect(),(_=a.bottom)>=p&&(P=a.top)<=T&&(R=a.right)>=p*B&&(L=a.left)<=w&&(_||R||L||P)&&(r.loadHidden||"hidden"!=z(g[s],"visibility"))&&(l&&I<3&&!m&&(d<3||U<4)||F(g[s],f))){if(X(g[s]),u=!0,I>9)break}else!u&&l&&!c&&I<4&&U<4&&d>2&&(o[0]||r.preloadAfterLoad)&&(o[0]||!m&&(_||R||L||P||"auto"!=g[s].getAttribute(r.sizesAttr)))&&(c=o[0]||g[s]);else X(g[s]);c&&!u&&X(c)}},q=E(H),Q=function(e){g(e.target,r.loadedClass),v(e.target,r.loadingClass),A(e.target,V),y(e.target,"lazyloaded")},G=C(Q),V=function(e){G({target:e.target})},J=function(e){var t,n=e.getAttribute(r.srcsetAttr);(t=r.customMedia[e.getAttribute("data-media")||e.getAttribute("media")])&&e.setAttribute("media",t),n&&e.setAttribute("srcset",n)},K=C(function(e,t,n,i,s){var o,a,l,d,p,h;(p=y(e,"lazybeforeunveil",t)).defaultPrevented||(i&&(n?g(e,r.autosizesClass):e.setAttribute("sizes",i)),a=e.getAttribute(r.srcsetAttr),o=e.getAttribute(r.srcAttr),s&&(l=e.parentNode,d=l&&f.test(l.nodeName||"")),h=t.firesLoad||"src"in e&&(a||o||d),p={target:e},h&&(A(e,j,!0),clearTimeout(u),u=c(j,2500),g(e,r.loadingClass),A(e,V,!0)),d&&m.call(l.getElementsByTagName("source"),J),a?e.setAttribute("srcset",a):o&&!d&&($.test(e.nodeName)?function(e,t){try{e.contentWindow.location.replace(t)}catch(n){e.src=t}}(e,o):e.src=o),s&&(a||d)&&b(e,{src:o})),e._lazyRace&&delete e._lazyRace,v(e,r.lazyClass),S(function(){(!h||e.complete&&e.naturalWidth>1)&&(h?j(p):I--,Q(p))},!0)}),X=function(e){var t,n=W.test(e.nodeName),i=n&&(e.getAttribute(r.sizesAttr)||e.getAttribute("sizes")),s="auto"==i;(!s&&l||!n||!e.getAttribute("src")&&!e.srcset||e.complete||h(e,r.errorClass))&&(t=y(e,"lazyunveilread").detail,s&&M.updateElem(e,!0,e.offsetWidth),e._lazyRace=!0,I++,K(e,t,s,i,n))},Z=function e(){if(!l)if(s.now()-p<999)c(e,999);else{var t=x(function(){r.loadMode=3,q()});l=!0,r.loadMode=3,q(),a("scroll",function(){3==r.loadMode&&(r.loadMode=2),t()},!0)}};return{_:function(){p=s.now(),n.elements=t.getElementsByClassName(r.lazyClass),o=t.getElementsByClassName(r.lazyClass+" "+r.preloadClass),B=r.hFac,a("scroll",q,!0),a("resize",q,!0),e.MutationObserver?new MutationObserver(q).observe(i,{childList:!0,subtree:!0,attributes:!0}):(i.addEventListener("DOMNodeInserted",q,!0),i.addEventListener("DOMAttrModified",q,!0),setInterval(q,999)),a("hashchange",q,!0),["focus","mouseover","click","load","transitionend","animationend","webkitAnimationEnd"].forEach(function(e){t.addEventListener(e,q,!0)}),/d$|^c/.test(t.readyState)?Z():(a("load",Z),t.addEventListener("DOMContentLoaded",q),c(Z,2e4)),n.elements.length?(H(),S._lsFlush()):q()},checkElems:q,unveil:X}}(),M=function(){var e,n=C(function(e,t,n,r){var i,s,o;if(e._lazysizesWidth=r,r+="px",e.setAttribute("sizes",r),f.test(t.nodeName||""))for(i=t.getElementsByTagName("source"),s=0,o=i.length;s<o;s++)i[s].setAttribute("sizes",r);n.detail.dataAttr||b(e,n.detail)}),i=function(e,t,r){var i,s=e.parentNode;s&&(r=w(e,s,r),(i=y(e,"lazybeforesizes",{width:r,dataAttr:!!t})).defaultPrevented||(r=i.detail.width)&&r!==e._lazysizesWidth&&n(e,s,i,r))},s=x(function(){var t,n=e.length;if(n)for(t=0;t<n;t++)i(e[t])});return{_:function(){e=t.getElementsByClassName(r.autosizesClass),a("resize",s)},checkElems:s,updateElem:i}}(),P=function e(){e.i||(e.i=!0,M._(),T._())};return function(){var t,n={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:!0};r=e.lazySizesConfig||e.lazysizesConfig||{};for(t in n)t in r||(r[t]=n[t]);e.lazySizesConfig=r,c(function(){r.init&&P()})}(),n={cfg:r,autoSizer:M,loader:T,init:P,uP:b,aC:g,rC:v,hC:h,fire:y,gW:w,rAF:S}}(n,n.document);n.lazySizes=i,"object"==t(e)&&e.exports&&(e.exports=i)}(window)}).call(t,n(1)(e))},function(e,t,n){"use strict";(function(e){var r,i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};!function(e){var t=navigator.userAgent;e.HTMLPictureElement&&/ecko/.test(t)&&t.match(/rv\:(\d+)/)&&RegExp.$1<45&&addEventListener("resize",function(){var t,n=document.createElement("source"),r=function(e){var t,r,i=e.parentNode;"PICTURE"===i.nodeName.toUpperCase()?(t=n.cloneNode(),i.insertBefore(t,i.firstElementChild),setTimeout(function(){i.removeChild(t)})):(!e._pfLastSize||e.offsetWidth>e._pfLastSize)&&(e._pfLastSize=e.offsetWidth,r=e.sizes,e.sizes+=",100vw",setTimeout(function(){e.sizes=r}))},i=function(){var e,t=document.querySelectorAll("picture > img, img[srcset][sizes]");for(e=0;e<t.length;e++)r(t[e])},s=function(){clearTimeout(t),t=setTimeout(i,99)},o=e.matchMedia&&matchMedia("(orientation: landscape)"),a=function(){s(),o&&o.addListener&&o.addListener(s)};return n.srcset="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",/^[c|i]|d$/.test(document.readyState||"")?a():document.addEventListener("DOMContentLoaded",a),s}())}(window),function(s,o,a){function c(e){return" "===e||"\t"===e||"\n"===e||"\f"===e||"\r"===e}function l(e,t,n,r){var i,s,o;return"saveData"===C.algorithm?e>2.7?o=n+1:(s=(t-n)*(i=Math.pow(e-.6,1.5)),r&&(s+=.1*i),o=e+s):o=n>1?Math.sqrt(e*t):e,o>n}function u(e,t){return e.res-t.res}function f(e,t){var n,r,i;if(e&&t)for(i=h.parseSet(t),e=h.makeUrl(e),n=0;n<i.length;n++)if(e===h.makeUrl(i[n].url)){r=i[n];break}return r}o.createElement("picture");var d,p,m,h={},g=!1,v=function(){},A=o.createElement("img"),y=A.getAttribute,b=A.setAttribute,z=A.removeAttribute,w=o.documentElement,S={},C={algorithm:""},E=navigator.userAgent,x=/rident/.test(E)||/ecko/.test(E)&&E.match(/rv\:(\d+)/)&&RegExp.$1>35,T="currentSrc",M=/\s+\+?\d+(e\d+)?w/,P=/(\([^)]+\))?\s*(.+)/,L=s.picturefillCFG,R="font-size:100%!important;",_=!0,N={},k={},B=s.devicePixelRatio,W={px:1,in:96},$=o.createElement("a"),D=!1,O=/^[ \t\n\r\u000c]+/,I=/^[, \t\n\r\u000c]+/,U=/^[^ \t\n\r\u000c]+/,j=/[,]+$/,F=/^\d+$/,H=/^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/,q=function(e,t,n,r){e.addEventListener?e.addEventListener(t,n,r||!1):e.attachEvent&&e.attachEvent("on"+t,n)},Q=function(e){var t={};return function(n){return n in t||(t[n]=e(n)),t[n]}},G=function(){var e=/^([\d\.]+)(em|vw|px)$/,t=Q(function(e){return"return "+function(){for(var e=arguments,t=0,n=e[0];++t in e;)n=n.replace(e[t],e[++t]);return n}((e||"").toLowerCase(),/\band\b/g,"&&",/,/g,"||",/min-([a-z-\s]+):/g,"e.$1>=",/max-([a-z-\s]+):/g,"e.$1<=",/calc([^)]+)/g,"($1)",/(\d+[\.]*[\d]*)([a-z]+)/g,"($1 * e.$2)",/^(?!(e.[a-z]|[0-9\.&=|><\+\-\*\(\)\/])).*/gi,"")+";"});return function(n,r){var i;if(!(n in N))if(N[n]=!1,r&&(i=n.match(e)))N[n]=i[1]*W[i[2]];else try{N[n]=new Function("e",t(n))(W)}catch(e){}return N[n]}}(),V=function(e,t){return e.w?(e.cWidth=h.calcListLength(t||"100vw"),e.res=e.w/e.cWidth):e.res=e.d,e},J=function(e){if(g){var t,n,r,i=e||{};if(i.elements&&1===i.elements.nodeType&&("IMG"===i.elements.nodeName.toUpperCase()?i.elements=[i.elements]:(i.context=i.elements,i.elements=null)),t=i.elements||h.qsa(i.context||o,i.reevaluate||i.reselect?h.sel:h.selShort),r=t.length){for(h.setupRun(i),D=!0,n=0;n<r;n++)h.fillImg(t[n],i);h.teardownRun(i)}}};s.console&&console.warn,T in A||(T="src"),S["image/jpeg"]=!0,S["image/gif"]=!0,S["image/png"]=!0,S["image/svg+xml"]=o.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1"),h.ns=("pf"+(new Date).getTime()).substr(0,9),h.supSrcset="srcset"in A,h.supSizes="sizes"in A,h.supPicture=!!s.HTMLPictureElement,h.supSrcset&&h.supPicture&&!h.supSizes&&function(e){A.srcset="data:,a",e.src="data:,a",h.supSrcset=A.complete===e.complete,h.supPicture=h.supSrcset&&h.supPicture}(o.createElement("img")),h.supSrcset&&!h.supSizes?function(){var e="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",t=o.createElement("img"),n=function(){2===t.width&&(h.supSizes=!0),p=h.supSrcset&&!h.supSizes,g=!0,setTimeout(J)};t.onload=n,t.onerror=n,t.setAttribute("sizes","9px"),t.srcset=e+" 1w,data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw== 9w",t.src=e}():g=!0,h.selShort="picture>img,img[srcset]",h.sel=h.selShort,h.cfg=C,h.DPR=B||1,h.u=W,h.types=S,h.setSize=v,h.makeUrl=Q(function(e){return $.href=e,$.href}),h.qsa=function(e,t){return"querySelector"in e?e.querySelectorAll(t):[]},h.matchesMedia=function(){return s.matchMedia&&(matchMedia("(min-width: 0.1em)")||{}).matches?h.matchesMedia=function(e){return!e||matchMedia(e).matches}:h.matchesMedia=h.mMQ,h.matchesMedia.apply(this,arguments)},h.mMQ=function(e){return!e||G(e)},h.calcLength=function(e){var t=G(e,!0)||!1;return t<0&&(t=!1),t},h.supportsType=function(e){return!e||S[e]},h.parseSize=Q(function(e){var t=(e||"").match(P);return{media:t&&t[1],length:t&&t[2]}}),h.parseSet=function(e){return e.cands||(e.cands=function(e,t){function n(t){var n,r=t.exec(e.substring(d));if(r)return n=r[0],d+=n.length,n}function r(){var e,n,r,i,a,c,l,u,f,d=!1,m={};for(i=0;i<o.length;i++)c=(a=o[i])[a.length-1],l=a.substring(0,a.length-1),u=parseInt(l,10),f=parseFloat(l),F.test(l)&&"w"===c?((e||n)&&(d=!0),0===u?d=!0:e=u):H.test(l)&&"x"===c?((e||n||r)&&(d=!0),f<0?d=!0:n=f):F.test(l)&&"h"===c?((r||n)&&(d=!0),0===u?d=!0:r=u):d=!0;d||(m.url=s,e&&(m.w=e),n&&(m.d=n),r&&(m.h=r),r||n||e||(m.d=1),1===m.d&&(t.has1x=!0),m.set=t,p.push(m))}function i(){for(n(O),a="",l="in descriptor";;){if(u=e.charAt(d),"in descriptor"===l)if(c(u))a&&(o.push(a),a="",l="after descriptor");else{if(","===u)return d+=1,a&&o.push(a),void r();if("("===u)a+=u,l="in parens";else{if(""===u)return a&&o.push(a),void r();a+=u}}else if("in parens"===l)if(")"===u)a+=u,l="in descriptor";else{if(""===u)return o.push(a),void r();a+=u}else if("after descriptor"===l)if(c(u));else{if(""===u)return void r();l="in descriptor",d-=1}d+=1}}for(var s,o,a,l,u,f=e.length,d=0,p=[];;){if(n(I),d>=f)return p;s=n(U),o=[],","===s.slice(-1)?(s=s.replace(j,""),r()):i()}}(e.srcset,e)),e.cands},h.getEmValue=function(){var e;if(!d&&(e=o.body)){var t=o.createElement("div"),n=w.style.cssText,r=e.style.cssText;t.style.cssText="position:absolute;left:0;visibility:hidden;display:block;padding:0;border:none;font-size:1em;width:1em;overflow:hidden;clip:rect(0px, 0px, 0px, 0px)",w.style.cssText=R,e.style.cssText=R,e.appendChild(t),d=t.offsetWidth,e.removeChild(t),d=parseFloat(d,10),w.style.cssText=n,e.style.cssText=r}return d||16},h.calcListLength=function(e){if(!(e in k)||C.uT){var t=h.calcLength(function(e){function t(e){return!!(l.test(e)&&parseFloat(e)>=0)||!!u.test(e)||"0"===e||"-0"===e||"+0"===e}var n,r,i,s,o,a,l=/^(?:[+-]?[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?(?:ch|cm|em|ex|in|mm|pc|pt|px|rem|vh|vmin|vmax|vw)$/i,u=/^calc\((?:[0-9a-z \.\+\-\*\/\(\)]+)\)$/i;for(i=(r=function(e){function t(){i&&(s.push(i),i="")}function n(){s[0]&&(o.push(s),s=[])}for(var r,i="",s=[],o=[],a=0,l=0,u=!1;;){if(""===(r=e.charAt(l)))return t(),n(),o;if(u){if("*"===r&&"/"===e[l+1]){u=!1,l+=2,t();continue}l+=1}else{if(c(r)){if(e.charAt(l-1)&&c(e.charAt(l-1))||!i){l+=1;continue}if(0===a){t(),l+=1;continue}r=" "}else if("("===r)a+=1;else if(")"===r)a-=1;else{if(","===r){t(),n(),l+=1;continue}if("/"===r&&"*"===e.charAt(l+1)){u=!0,l+=2;continue}}i+=r,l+=1}}}(e)).length,n=0;n<i;n++)if(s=r[n],o=s[s.length-1],t(o)){if(a=o,s.pop(),0===s.length)return a;if(s=s.join(" "),h.matchesMedia(s))return a}return"100vw"}(e));k[e]=t||W.width}return k[e]},h.setRes=function(e){var t;if(e)for(var n=0,r=(t=h.parseSet(e)).length;n<r;n++)V(t[n],e.sizes);return t},h.setRes.res=V,h.applySetCandidate=function(e,t){if(e.length){var n,r,i,s,o,a,c,d,p,m=t[h.ns],g=h.DPR;if(a=m.curSrc||t[T],(c=m.curCan||function(e,t,n){var r;return!n&&t&&(n=(n=e[h.ns].sets)&&n[n.length-1]),(r=f(t,n))&&(t=h.makeUrl(t),e[h.ns].curSrc=t,e[h.ns].curCan=r,r.res||V(r,r.set.sizes)),r}(t,a,e[0].set))&&c.set===e[0].set&&((p=x&&!t.complete&&c.res-.1>g)||(c.cached=!0,c.res>=g&&(o=c))),!o)for(e.sort(u),o=e[(s=e.length)-1],r=0;r<s;r++)if((n=e[r]).res>=g){o=e[i=r-1]&&(p||a!==h.makeUrl(n.url))&&l(e[i].res,n.res,g,e[i].cached)?e[i]:n;break}o&&(d=h.makeUrl(o.url),m.curSrc=d,m.curCan=o,d!==a&&h.setSrc(t,o),h.setSize(t))}},h.setSrc=function(e,t){var n;e.src=t.url,"image/svg+xml"===t.set.type&&(n=e.style.width,e.style.width=e.offsetWidth+1+"px",e.offsetWidth+1&&(e.style.width=n))},h.getSet=function(e){var t,n,r,i=!1,s=e[h.ns].sets;for(t=0;t<s.length&&!i;t++)if((n=s[t]).srcset&&h.matchesMedia(n.media)&&(r=h.supportsType(n.type))){"pending"===r&&(n=r),i=n;break}return i},h.parseSets=function(e,t,n){var r,i,s,o,a=t&&"PICTURE"===t.nodeName.toUpperCase(),c=e[h.ns];(void 0===c.src||n.src)&&(c.src=y.call(e,"src"),c.src?b.call(e,"data-pfsrc",c.src):z.call(e,"data-pfsrc")),(void 0===c.srcset||n.srcset||!h.supSrcset||e.srcset)&&(r=y.call(e,"srcset"),c.srcset=r,o=!0),c.sets=[],a&&(c.pic=!0,function(e,t){var n,r,i,s,o=e.getElementsByTagName("source");for(n=0,r=o.length;n<r;n++)(i=o[n])[h.ns]=!0,(s=i.getAttribute("srcset"))&&t.push({srcset:s,media:i.getAttribute("media"),type:i.getAttribute("type"),sizes:i.getAttribute("sizes")})}(t,c.sets)),c.srcset?(i={srcset:c.srcset,sizes:y.call(e,"sizes")},c.sets.push(i),(s=(p||c.src)&&M.test(c.srcset||""))||!c.src||f(c.src,i)||i.has1x||(i.srcset+=", "+c.src,i.cands.push({url:c.src,d:1,set:i}))):c.src&&c.sets.push({srcset:c.src,sizes:null}),c.curCan=null,c.curSrc=void 0,c.supported=!(a||i&&!h.supSrcset||s&&!h.supSizes),o&&h.supSrcset&&!c.supported&&(r?(b.call(e,"data-pfsrcset",r),e.srcset=""):z.call(e,"data-pfsrcset")),c.supported&&!c.srcset&&(!c.src&&e.src||e.src!==h.makeUrl(c.src))&&(null===c.src?e.removeAttribute("src"):e.src=c.src),c.parsed=!0},h.fillImg=function(e,t){var n,r=t.reselect||t.reevaluate;e[h.ns]||(e[h.ns]={}),n=e[h.ns],(r||n.evaled!==m)&&(n.parsed&&!t.reevaluate||h.parseSets(e,e.parentNode,t),n.supported?n.evaled=m:function(e){var t,n=h.getSet(e),r=!1;"pending"!==n&&(r=m,n&&(t=h.setRes(n),h.applySetCandidate(t,e))),e[h.ns].evaled=r}(e))},h.setupRun=function(){D&&!_&&B===s.devicePixelRatio||(_=!1,B=s.devicePixelRatio,N={},k={},h.DPR=B||1,W.width=Math.max(s.innerWidth||0,w.clientWidth),W.height=Math.max(s.innerHeight||0,w.clientHeight),W.vw=W.width/100,W.vh=W.height/100,m=[W.height,W.width,B].join("-"),W.em=h.getEmValue(),W.rem=W.em)},h.supPicture?(J=v,h.fillImg=v):function(){var e,t=s.attachEvent?/d$|^c/:/d$|^c|^i/,n=function n(){var i=o.readyState||"";r=setTimeout(n,"loading"===i?200:999),o.body&&(h.fillImgs(),(e=e||t.test(i))&&clearTimeout(r))},r=setTimeout(n,o.body?9:99),i=w.clientHeight;q(s,"resize",function(e,t){var n,r,i=function i(){var s=new Date-r;s<t?n=setTimeout(i,t-s):(n=null,e())};return function(){r=new Date,n||(n=setTimeout(i,t))}}(function(){_=Math.max(s.innerWidth||0,w.clientWidth)!==W.width||w.clientHeight!==i,i=w.clientHeight,_&&h.fillImgs()},99)),q(o,"readystatechange",n)}(),h.picturefill=J,h.fillImgs=J,h.teardownRun=v,J._=h,s.picturefillCFG={pf:h,push:function(e){var t=e.shift();"function"==typeof h[t]?h[t].apply(h,e):(C[t]=e[0],D&&h.fillImgs({reselect:!0}))}};for(;L&&L.length;)s.picturefillCFG.push(L.shift());s.picturefill=J,"object"===i(e)&&"object"===i(e.exports)?e.exports=J:void 0!==(r=function(){return J}.call(t,n,t,e))&&(e.exports=r),h.supPicture||(S["image/webp"]=function(e,t){var n=new s.Image;return n.onerror=function(){S[e]=!1,J()},n.onload=function(){S[e]=1===n.width,J()},n.src=t,"pending"}("image/webp","data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA=="))}(window,document)}).call(t,n(1)(e))}]);