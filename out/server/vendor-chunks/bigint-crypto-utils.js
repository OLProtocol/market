'use strict';
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = 'vendor-chunks/bigint-crypto-utils';
exports.ids = ['vendor-chunks/bigint-crypto-utils'];
exports.modules = {
  /***/ '(ssr)/./node_modules/bigint-crypto-utils/dist/index.node.esm.js':
    /*!*****************************************************************!*\
  !*** ./node_modules/bigint-crypto-utils/dist/index.node.esm.js ***!
  \*****************************************************************/
    /***/ (__webpack_module__, __webpack_exports__, __webpack_require__) => {
      eval(
        '__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   abs: () => (/* binding */ t),\n/* harmony export */   bitLength: () => (/* binding */ e),\n/* harmony export */   crt: () => (/* binding */ u),\n/* harmony export */   eGcd: () => (/* binding */ r),\n/* harmony export */   gcd: () => (/* binding */ s),\n/* harmony export */   isProbablyPrime: () => (/* binding */ v),\n/* harmony export */   lcm: () => (/* binding */ a),\n/* harmony export */   max: () => (/* binding */ c),\n/* harmony export */   min: () => (/* binding */ f),\n/* harmony export */   modAdd: () => (/* binding */ g),\n/* harmony export */   modInv: () => (/* binding */ i),\n/* harmony export */   modMultiply: () => (/* binding */ m),\n/* harmony export */   modPow: () => (/* binding */ d),\n/* harmony export */   phi: () => (/* binding */ h),\n/* harmony export */   prime: () => (/* binding */ S),\n/* harmony export */   primeSync: () => (/* binding */ P),\n/* harmony export */   randBetween: () => (/* binding */ I),\n/* harmony export */   randBits: () => (/* binding */ y),\n/* harmony export */   randBitsSync: () => (/* binding */ B),\n/* harmony export */   randBytes: () => (/* binding */ p),\n/* harmony export */   randBytesSync: () => (/* binding */ w),\n/* harmony export */   toZn: () => (/* binding */ o)\n/* harmony export */ });\n/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! url */ "url");\nfunction t(n){return n>=0?n:-n}function e(n){if("number"==typeof n&&(n=BigInt(n)),1n===n)return 1;let t=1;do{t++}while((n>>=1n)>1n);return t}function r(n,t){if("number"==typeof n&&(n=BigInt(n)),"number"==typeof t&&(t=BigInt(t)),n<=0n||t<=0n)throw new RangeError("a and b MUST be > 0");let e=0n,r=1n,o=1n,i=0n;for(;0n!==n;){const u=t/n,s=t%n,a=e-o*u,c=r-i*u;t=n,n=s,e=o,r=i,o=a,i=c}return{g:t,x:e,y:r}}function o(n,t){if("number"==typeof n&&(n=BigInt(n)),"number"==typeof t&&(t=BigInt(t)),t<=0n)throw new RangeError("n must be > 0");const e=n%t;return e<0n?e+t:e}function i(n,t){const e=r(o(n,t),t);if(1n!==e.g)throw new RangeError(`${n.toString()} does not have inverse modulo ${t.toString()}`);return o(e.x,t)}function u(n,t,e){if(n.length!==t.length)throw new RangeError("The remainders and modulos arrays should have the same length");const r=e??t.reduce(((n,t)=>n*t),1n);return t.reduce(((t,e,u)=>{const s=r/e;return o(t+s*i(s,e)%r*n[u]%r,r)}),0n)}function s(n,e){let r="number"==typeof n?BigInt(t(n)):t(n),o="number"==typeof e?BigInt(t(e)):t(e);if(0n===r)return o;if(0n===o)return r;let i=0n;for(;0n===(1n&(r|o));)r>>=1n,o>>=1n,i++;for(;0n===(1n&r);)r>>=1n;do{for(;0n===(1n&o);)o>>=1n;if(r>o){const n=r;r=o,o=n}o-=r}while(0n!==o);return r<<i}function a(n,e){return"number"==typeof n&&(n=BigInt(n)),"number"==typeof e&&(e=BigInt(e)),0n===n&&0n===e?BigInt(0):t(n/s(n,e)*e)}function c(n,t){return n>=t?n:t}function f(n,t){return n>=t?t:n}function g(n,t){const e=BigInt(t);return o(n.map((n=>BigInt(n)%e)).reduce(((n,t)=>n+t%e),0n),e)}function m(n,t){const e=BigInt(t);return o(n.map((n=>BigInt(n)%e)).reduce(((n,t)=>n*t%e),1n),e)}function h(n){return n.map((n=>n[0]**(n[1]-1n)*(n[0]-1n))).reduce(((n,t)=>t*n),1n)}function d(n,e,r,s){if("number"==typeof n&&(n=BigInt(n)),"number"==typeof e&&(e=BigInt(e)),"number"==typeof r&&(r=BigInt(r)),r<=0n)throw new RangeError("n must be > 0");if(1n===r)return 0n;if(n=o(n,r),e<0n)return i(d(n,t(e),r,s),r);if(void 0!==s)return function(n,t,e,r){const o=r.map((n=>n[0]**n[1])),i=r.map((n=>h([n]))),s=i.map(((e,r)=>d(n,t%e,o[r])));return u(s,o,e)}(n,e,r,function(n){const t={};return n.forEach((n=>{if("bigint"==typeof n||"number"==typeof n){const e=String(n);void 0===t[e]?t[e]={p:BigInt(n),k:1n}:t[e].k+=1n}else{const e=String(n[0]);void 0===t[e]?t[e]={p:BigInt(n[0]),k:BigInt(n[1])}:t[e].k+=BigInt(n[1])}})),Object.values(t).map((n=>[n.p,n.k]))}(s));let a=1n;for(;e>0;)e%2n===1n&&(a=a*n%r),e/=2n,n=n**2n%r;return a}function l(n){let t=0n;for(const e of n.values()){t=(t<<8n)+BigInt(e)}return t}var b=await Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(__webpack_require__, /*! crypto */ "crypto", 19));function p(n,t=!1){if(n<1)throw new RangeError("byteLength MUST be > 0");return new Promise((function(e,r){b.randomBytes(n,(function(n,o){null!==n&&r(n),t&&(o[0]=128|o[0]),e(o)}))}))}function w(n,t=!1){if(n<1)throw new RangeError("byteLength MUST be > 0");{const e=b.randomBytes(n);return t&&(e[0]=128|e[0]),e}}function y(n,t=!1){if(n<1)throw new RangeError("bitLength MUST be > 0");const e=Math.ceil(n/8),r=n%8;return new Promise(((n,o)=>{p(e,!1).then((function(e){if(0!==r&&(e[0]=e[0]&2**r-1),t){const n=0!==r?2**(r-1):128;e[0]=e[0]|n}n(e)}))}))}function B(n,t=!1){if(n<1)throw new RangeError("bitLength MUST be > 0");const e=w(Math.ceil(n/8),!1),r=n%8;if(0!==r&&(e[0]=e[0]&2**r-1),t){const n=0!==r?2**(r-1):128;e[0]=e[0]|n}return e}function I(n,t=1n){if(n<=t)throw new RangeError("Arguments MUST be: max > min");const r=n-t,o=e(r);let i;do{i=l(B(o))}while(i>r);return i+t}let _=!1;try{await Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(__webpack_require__, /*! worker_threads */ "worker_threads", 19)),_=!0}catch(o){console.log("[bigint-crypto-utils] WARNING:\\nThis node version doesn\'t support worker_threads. You should enable them in order to greatly speedup the generation of big prime numbers.\\n  · With Node >=11 it is enabled by default (consider upgrading).\\n  · With Node 10, starting with 10.5.0, you can enable worker_threads at runtime executing node --experimental-worker ")}function v(t,e=16,r=!1){if("number"==typeof t&&(t=BigInt(t)),t<0n)throw RangeError("w MUST be >= 0");return new Promise(!r&&_?(r,o)=>{const i=new E.Worker((0,url__WEBPACK_IMPORTED_MODULE_0__.fileURLToPath)("file:///Users/icehugh/workspace/jieziyuan/client/market/node_modules/bigint-crypto-utils/dist/index.node.esm.js"));i.on("message",(n=>{void 0!==n?._bcu?.isPrime&&(i.terminate().catch(o),r(n._bcu.isPrime))})),i.on("error",o);const u={_bcu:{rnd:t,iterations:e,id:0}};i.postMessage(u)}:n=>{n(M(t,e))})}function M(n,t){if(2n===n)return!0;if(0n===(1n&n)||1n===n)return!1;const e=[3n,5n,7n,11n,13n,17n,19n,23n,29n,31n,37n,41n,43n,47n,53n,59n,61n,67n,71n,73n,79n,83n,89n,97n,101n,103n,107n,109n,113n,127n,131n,137n,139n,149n,151n,157n,163n,167n,173n,179n,181n,191n,193n,197n,199n,211n,223n,227n,229n,233n,239n,241n,251n,257n,263n,269n,271n,277n,281n,283n,293n,307n,311n,313n,317n,331n,337n,347n,349n,353n,359n,367n,373n,379n,383n,389n,397n,401n,409n,419n,421n,431n,433n,439n,443n,449n,457n,461n,463n,467n,479n,487n,491n,499n,503n,509n,521n,523n,541n,547n,557n,563n,569n,571n,577n,587n,593n,599n,601n,607n,613n,617n,619n,631n,641n,643n,647n,653n,659n,661n,673n,677n,683n,691n,701n,709n,719n,727n,733n,739n,743n,751n,757n,761n,769n,773n,787n,797n,809n,811n,821n,823n,827n,829n,839n,853n,857n,859n,863n,877n,881n,883n,887n,907n,911n,919n,929n,937n,941n,947n,953n,967n,971n,977n,983n,991n,997n,1009n,1013n,1019n,1021n,1031n,1033n,1039n,1049n,1051n,1061n,1063n,1069n,1087n,1091n,1093n,1097n,1103n,1109n,1117n,1123n,1129n,1151n,1153n,1163n,1171n,1181n,1187n,1193n,1201n,1213n,1217n,1223n,1229n,1231n,1237n,1249n,1259n,1277n,1279n,1283n,1289n,1291n,1297n,1301n,1303n,1307n,1319n,1321n,1327n,1361n,1367n,1373n,1381n,1399n,1409n,1423n,1427n,1429n,1433n,1439n,1447n,1451n,1453n,1459n,1471n,1481n,1483n,1487n,1489n,1493n,1499n,1511n,1523n,1531n,1543n,1549n,1553n,1559n,1567n,1571n,1579n,1583n,1597n];for(let t=0;t<e.length&&e[t]<=n;t++){const r=e[t];if(n===r)return!0;if(n%r===0n)return!1}let r=0n;const o=n-1n;let i=o;for(;i%2n===0n;)i/=2n,++r;const u=o/2n**r;do{let t=d(I(o,2n),u,n);if(1n===t||t===o)continue;let e=1;for(;e<r&&(t=d(t,2n,n),t!==o);){if(1n===t)return!1;e++}if(t!==o)return!1}while(0!=--t);return!0}if(_)try{var E=await Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(__webpack_require__, /*! worker_threads */ "worker_threads", 19));if(!E.isMainThread&&null!==E.parentPort){const n=E.parentPort;n.on("message",(function(t){if(void 0!==t?._bcu?.iterations&&void 0!==t?._bcu?.rnd){const e={_bcu:{isPrime:M(t._bcu.rnd,t._bcu.iterations),value:t._bcu.rnd,id:t._bcu.id}};n.postMessage(e)}}))}}catch(n){}var R=await Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(__webpack_require__, /*! os */ "os", 19));try{var k=await Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(__webpack_require__, /*! worker_threads */ "worker_threads", 19))}catch{}function S(t,e=16){if(t<1)throw new RangeError("bitLength MUST be > 0");if(!_){let n=0n;do{n=l(B(t,!0))}while(!M(n,e));return new Promise((t=>{t(n)}))}return new Promise(((r,o)=>{const i=[],u=(n,o)=>{if(n._bcu.isPrime){for(let n=0;n<i.length;n++)i[n].terminate();for(;i.length>0;)i.pop();r(n._bcu.value)}else{const r=l(B(t,!0));try{const t={_bcu:{rnd:r,iterations:e,id:n._bcu.id}};o.postMessage(t)}catch(n){}}};for(let t=0;t<R.cpus().length-1;t++){const t=new k.Worker((0,url__WEBPACK_IMPORTED_MODULE_0__.fileURLToPath)("file:///Users/icehugh/workspace/jieziyuan/client/market/node_modules/bigint-crypto-utils/dist/index.node.esm.js"));t.on("message",(n=>u(n,t))),i.push(t)}for(let n=0;n<i.length;n++)y(t,!0).then((function(t){const r=l(t);i[n].postMessage({_bcu:{rnd:r,iterations:e,id:n}})})).catch(o)}))}function P(n,t=16){if(n<1)throw new RangeError("bitLength MUST be > 0");let e=0n;do{e=l(B(n,!0))}while(!M(e,t));return e}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } }, 1);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvYmlnaW50LWNyeXB0by11dGlscy9kaXN0L2luZGV4Lm5vZGUuZXNtLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFvQyxjQUFjLGlCQUFpQixjQUFjLHFEQUFxRCxRQUFRLEdBQUcsSUFBSSxtQkFBbUIsU0FBUyxnQkFBZ0IsZ0lBQWdJLHdCQUF3QixLQUFLLE9BQU8sRUFBRSxrQ0FBa0Msd0JBQXdCLE9BQU8sYUFBYSxnQkFBZ0IsbUhBQW1ILFlBQVksa0JBQWtCLGdCQUFnQixvQkFBb0Isb0NBQW9DLGNBQWMsK0JBQStCLGFBQWEsR0FBRyxnQkFBZ0Isa0JBQWtCLDZHQUE2RyxxQ0FBcUMsMkJBQTJCLFlBQVksZ0NBQWdDLE1BQU0sZ0JBQWdCLGtGQUFrRixtQkFBbUIsbUJBQW1CLFNBQVMsS0FBSyxnQkFBZ0IsbUJBQW1CLEtBQUssWUFBWSxRQUFRLEdBQUcsS0FBSyxZQUFZLFFBQVEsUUFBUSxVQUFVLFFBQVEsS0FBSyxjQUFjLFlBQVksZ0JBQWdCLGlIQUFpSCxnQkFBZ0IsZ0JBQWdCLGdCQUFnQixnQkFBZ0IsZ0JBQWdCLGtCQUFrQiw4REFBOEQsZ0JBQWdCLGtCQUFrQiw4REFBOEQsY0FBYyxxRUFBcUUsb0JBQW9CLHFKQUFxSixvQkFBb0IsMkNBQTJDLHVDQUF1QyxvRkFBb0YsZ0JBQWdCLG1CQUFtQixXQUFXLHNCQUFzQiwyQ0FBMkMsa0JBQWtCLG9CQUFvQixpQkFBaUIsWUFBWSxLQUFLLHFCQUFxQixvQkFBb0IsOEJBQThCLHVCQUF1Qix3Q0FBd0MsS0FBSyxTQUFTLEtBQUssSUFBSSxzQ0FBc0MsU0FBUyxjQUFjLFNBQVMsMkJBQTJCLG9CQUFvQixTQUFTLFlBQVksa0hBQWdCLENBQUMsbUJBQW1CLHNEQUFzRCxrQ0FBa0MsK0JBQStCLHVDQUF1QyxHQUFHLEdBQUcsbUJBQW1CLHVEQUF1RCx5QkFBeUIsNkJBQTZCLG1CQUFtQixxREFBcUQsNkJBQTZCLDRCQUE0QiwwQkFBMEIsZ0NBQWdDLDJCQUEyQixZQUFZLEtBQUssR0FBRyxHQUFHLG1CQUFtQixxREFBcUQsbUNBQW1DLGdDQUFnQywyQkFBMkIsWUFBWSxTQUFTLG1CQUFtQiw2REFBNkQsbUJBQW1CLE1BQU0sR0FBRyxVQUFVLFdBQVcsV0FBVyxTQUFTLElBQUksTUFBTSxrSUFBd0IsTUFBTSxTQUFTLG9YQUFvWCx3QkFBd0IsNkVBQTZFLGlDQUFpQyxxQkFBcUIsa0RBQUMsQ0FBQyxpSEFBZSxHQUFHLG9CQUFvQixzRUFBc0UsbUJBQW1CLFNBQVMsTUFBTSwwQkFBMEIsaUJBQWlCLEtBQUssVUFBVSxFQUFFLGdCQUFnQixtQkFBbUIsZ0NBQWdDLG95Q0FBb3lDLFlBQVksb0JBQW9CLEtBQUssYUFBYSxrQkFBa0IscUJBQXFCLFNBQVMsYUFBYSxRQUFRLEtBQUssVUFBVSxXQUFXLGdCQUFnQixHQUFHLHFCQUFxQiwwQkFBMEIsUUFBUSxLQUFLLHlCQUF5QixFQUFFLG1CQUFtQixJQUFJLGtCQUFrQixjQUFjLFNBQVMsU0FBUyxZQUFZLGtJQUF3QixDQUFDLHlDQUF5QyxxQkFBcUIsNEJBQTRCLHdEQUF3RCxTQUFTLE1BQU0sd0VBQXdFLGtCQUFrQixJQUFJLFVBQVUsWUFBWSwwR0FBWSxDQUFDLElBQUksWUFBWSxrSUFBd0IsQ0FBQyxPQUFPLG1CQUFtQixxREFBcUQsT0FBTyxTQUFTLEdBQUcsYUFBYSxlQUFlLHdCQUF3QixLQUFLLEdBQUcsNEJBQTRCLHFCQUFxQixtQkFBbUIsWUFBWSxXQUFXLHFCQUFxQixLQUFLLFdBQVcsU0FBUyxnQkFBZ0IsS0FBSyxtQkFBbUIsSUFBSSxTQUFTLE1BQU0sa0NBQWtDLGlCQUFpQixhQUFhLFlBQVksb0JBQW9CLEtBQUsscUJBQXFCLGtEQUFDLENBQUMsaUhBQWUsR0FBRyxzQ0FBc0MsWUFBWSxXQUFXLDhCQUE4QixhQUFhLGtCQUFrQixNQUFNLHlCQUF5QixFQUFFLFlBQVksR0FBRyxtQkFBbUIscURBQXFELFNBQVMsR0FBRyxhQUFhLGVBQWUsU0FBMFMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LWFwcC10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9iaWdpbnQtY3J5cHRvLXV0aWxzL2Rpc3QvaW5kZXgubm9kZS5lc20uanM/ZDYzYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnR7ZmlsZVVSTFRvUGF0aCBhcyBufWZyb21cInVybFwiO2Z1bmN0aW9uIHQobil7cmV0dXJuIG4+PTA/bjotbn1mdW5jdGlvbiBlKG4pe2lmKFwibnVtYmVyXCI9PXR5cGVvZiBuJiYobj1CaWdJbnQobikpLDFuPT09bilyZXR1cm4gMTtsZXQgdD0xO2Rve3QrK313aGlsZSgobj4+PTFuKT4xbik7cmV0dXJuIHR9ZnVuY3Rpb24gcihuLHQpe2lmKFwibnVtYmVyXCI9PXR5cGVvZiBuJiYobj1CaWdJbnQobikpLFwibnVtYmVyXCI9PXR5cGVvZiB0JiYodD1CaWdJbnQodCkpLG48PTBufHx0PD0wbil0aHJvdyBuZXcgUmFuZ2VFcnJvcihcImEgYW5kIGIgTVVTVCBiZSA+IDBcIik7bGV0IGU9MG4scj0xbixvPTFuLGk9MG47Zm9yKDswbiE9PW47KXtjb25zdCB1PXQvbixzPXQlbixhPWUtbyp1LGM9ci1pKnU7dD1uLG49cyxlPW8scj1pLG89YSxpPWN9cmV0dXJue2c6dCx4OmUseTpyfX1mdW5jdGlvbiBvKG4sdCl7aWYoXCJudW1iZXJcIj09dHlwZW9mIG4mJihuPUJpZ0ludChuKSksXCJudW1iZXJcIj09dHlwZW9mIHQmJih0PUJpZ0ludCh0KSksdDw9MG4pdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJuIG11c3QgYmUgPiAwXCIpO2NvbnN0IGU9biV0O3JldHVybiBlPDBuP2UrdDplfWZ1bmN0aW9uIGkobix0KXtjb25zdCBlPXIobyhuLHQpLHQpO2lmKDFuIT09ZS5nKXRocm93IG5ldyBSYW5nZUVycm9yKGAke24udG9TdHJpbmcoKX0gZG9lcyBub3QgaGF2ZSBpbnZlcnNlIG1vZHVsbyAke3QudG9TdHJpbmcoKX1gKTtyZXR1cm4gbyhlLngsdCl9ZnVuY3Rpb24gdShuLHQsZSl7aWYobi5sZW5ndGghPT10Lmxlbmd0aCl0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIlRoZSByZW1haW5kZXJzIGFuZCBtb2R1bG9zIGFycmF5cyBzaG91bGQgaGF2ZSB0aGUgc2FtZSBsZW5ndGhcIik7Y29uc3Qgcj1lPz90LnJlZHVjZSgoKG4sdCk9Pm4qdCksMW4pO3JldHVybiB0LnJlZHVjZSgoKHQsZSx1KT0+e2NvbnN0IHM9ci9lO3JldHVybiBvKHQrcyppKHMsZSklcipuW3VdJXIscil9KSwwbil9ZnVuY3Rpb24gcyhuLGUpe2xldCByPVwibnVtYmVyXCI9PXR5cGVvZiBuP0JpZ0ludCh0KG4pKTp0KG4pLG89XCJudW1iZXJcIj09dHlwZW9mIGU/QmlnSW50KHQoZSkpOnQoZSk7aWYoMG49PT1yKXJldHVybiBvO2lmKDBuPT09bylyZXR1cm4gcjtsZXQgaT0wbjtmb3IoOzBuPT09KDFuJihyfG8pKTspcj4+PTFuLG8+Pj0xbixpKys7Zm9yKDswbj09PSgxbiZyKTspcj4+PTFuO2Rve2Zvcig7MG49PT0oMW4mbyk7KW8+Pj0xbjtpZihyPm8pe2NvbnN0IG49cjtyPW8sbz1ufW8tPXJ9d2hpbGUoMG4hPT1vKTtyZXR1cm4gcjw8aX1mdW5jdGlvbiBhKG4sZSl7cmV0dXJuXCJudW1iZXJcIj09dHlwZW9mIG4mJihuPUJpZ0ludChuKSksXCJudW1iZXJcIj09dHlwZW9mIGUmJihlPUJpZ0ludChlKSksMG49PT1uJiYwbj09PWU/QmlnSW50KDApOnQobi9zKG4sZSkqZSl9ZnVuY3Rpb24gYyhuLHQpe3JldHVybiBuPj10P246dH1mdW5jdGlvbiBmKG4sdCl7cmV0dXJuIG4+PXQ/dDpufWZ1bmN0aW9uIGcobix0KXtjb25zdCBlPUJpZ0ludCh0KTtyZXR1cm4gbyhuLm1hcCgobj0+QmlnSW50KG4pJWUpKS5yZWR1Y2UoKChuLHQpPT5uK3QlZSksMG4pLGUpfWZ1bmN0aW9uIG0obix0KXtjb25zdCBlPUJpZ0ludCh0KTtyZXR1cm4gbyhuLm1hcCgobj0+QmlnSW50KG4pJWUpKS5yZWR1Y2UoKChuLHQpPT5uKnQlZSksMW4pLGUpfWZ1bmN0aW9uIGgobil7cmV0dXJuIG4ubWFwKChuPT5uWzBdKiooblsxXS0xbikqKG5bMF0tMW4pKSkucmVkdWNlKCgobix0KT0+dCpuKSwxbil9ZnVuY3Rpb24gZChuLGUscixzKXtpZihcIm51bWJlclwiPT10eXBlb2YgbiYmKG49QmlnSW50KG4pKSxcIm51bWJlclwiPT10eXBlb2YgZSYmKGU9QmlnSW50KGUpKSxcIm51bWJlclwiPT10eXBlb2YgciYmKHI9QmlnSW50KHIpKSxyPD0wbil0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIm4gbXVzdCBiZSA+IDBcIik7aWYoMW49PT1yKXJldHVybiAwbjtpZihuPW8obixyKSxlPDBuKXJldHVybiBpKGQobix0KGUpLHIscykscik7aWYodm9pZCAwIT09cylyZXR1cm4gZnVuY3Rpb24obix0LGUscil7Y29uc3Qgbz1yLm1hcCgobj0+blswXSoqblsxXSkpLGk9ci5tYXAoKG49PmgoW25dKSkpLHM9aS5tYXAoKChlLHIpPT5kKG4sdCVlLG9bcl0pKSk7cmV0dXJuIHUocyxvLGUpfShuLGUscixmdW5jdGlvbihuKXtjb25zdCB0PXt9O3JldHVybiBuLmZvckVhY2goKG49PntpZihcImJpZ2ludFwiPT10eXBlb2Ygbnx8XCJudW1iZXJcIj09dHlwZW9mIG4pe2NvbnN0IGU9U3RyaW5nKG4pO3ZvaWQgMD09PXRbZV0/dFtlXT17cDpCaWdJbnQobiksazoxbn06dFtlXS5rKz0xbn1lbHNle2NvbnN0IGU9U3RyaW5nKG5bMF0pO3ZvaWQgMD09PXRbZV0/dFtlXT17cDpCaWdJbnQoblswXSksazpCaWdJbnQoblsxXSl9OnRbZV0uays9QmlnSW50KG5bMV0pfX0pKSxPYmplY3QudmFsdWVzKHQpLm1hcCgobj0+W24ucCxuLmtdKSl9KHMpKTtsZXQgYT0xbjtmb3IoO2U+MDspZSUybj09PTFuJiYoYT1hKm4lciksZS89Mm4sbj1uKioybiVyO3JldHVybiBhfWZ1bmN0aW9uIGwobil7bGV0IHQ9MG47Zm9yKGNvbnN0IGUgb2Ygbi52YWx1ZXMoKSl7dD0odDw8OG4pK0JpZ0ludChlKX1yZXR1cm4gdH12YXIgYj1hd2FpdCBpbXBvcnQoXCJjcnlwdG9cIik7ZnVuY3Rpb24gcChuLHQ9ITEpe2lmKG48MSl0aHJvdyBuZXcgUmFuZ2VFcnJvcihcImJ5dGVMZW5ndGggTVVTVCBiZSA+IDBcIik7cmV0dXJuIG5ldyBQcm9taXNlKChmdW5jdGlvbihlLHIpe2IucmFuZG9tQnl0ZXMobiwoZnVuY3Rpb24obixvKXtudWxsIT09biYmcihuKSx0JiYob1swXT0xMjh8b1swXSksZShvKX0pKX0pKX1mdW5jdGlvbiB3KG4sdD0hMSl7aWYobjwxKXRocm93IG5ldyBSYW5nZUVycm9yKFwiYnl0ZUxlbmd0aCBNVVNUIGJlID4gMFwiKTt7Y29uc3QgZT1iLnJhbmRvbUJ5dGVzKG4pO3JldHVybiB0JiYoZVswXT0xMjh8ZVswXSksZX19ZnVuY3Rpb24geShuLHQ9ITEpe2lmKG48MSl0aHJvdyBuZXcgUmFuZ2VFcnJvcihcImJpdExlbmd0aCBNVVNUIGJlID4gMFwiKTtjb25zdCBlPU1hdGguY2VpbChuLzgpLHI9biU4O3JldHVybiBuZXcgUHJvbWlzZSgoKG4sbyk9PntwKGUsITEpLnRoZW4oKGZ1bmN0aW9uKGUpe2lmKDAhPT1yJiYoZVswXT1lWzBdJjIqKnItMSksdCl7Y29uc3Qgbj0wIT09cj8yKiooci0xKToxMjg7ZVswXT1lWzBdfG59bihlKX0pKX0pKX1mdW5jdGlvbiBCKG4sdD0hMSl7aWYobjwxKXRocm93IG5ldyBSYW5nZUVycm9yKFwiYml0TGVuZ3RoIE1VU1QgYmUgPiAwXCIpO2NvbnN0IGU9dyhNYXRoLmNlaWwobi84KSwhMSkscj1uJTg7aWYoMCE9PXImJihlWzBdPWVbMF0mMioqci0xKSx0KXtjb25zdCBuPTAhPT1yPzIqKihyLTEpOjEyODtlWzBdPWVbMF18bn1yZXR1cm4gZX1mdW5jdGlvbiBJKG4sdD0xbil7aWYobjw9dCl0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIkFyZ3VtZW50cyBNVVNUIGJlOiBtYXggPiBtaW5cIik7Y29uc3Qgcj1uLXQsbz1lKHIpO2xldCBpO2Rve2k9bChCKG8pKX13aGlsZShpPnIpO3JldHVybiBpK3R9bGV0IF89ITE7dHJ5e2F3YWl0IGltcG9ydChcIndvcmtlcl90aHJlYWRzXCIpLF89ITB9Y2F0Y2gobyl7Y29uc29sZS5sb2coXCJbYmlnaW50LWNyeXB0by11dGlsc10gV0FSTklORzpcXG5UaGlzIG5vZGUgdmVyc2lvbiBkb2Vzbid0IHN1cHBvcnQgd29ya2VyX3RocmVhZHMuIFlvdSBzaG91bGQgZW5hYmxlIHRoZW0gaW4gb3JkZXIgdG8gZ3JlYXRseSBzcGVlZHVwIHRoZSBnZW5lcmF0aW9uIG9mIGJpZyBwcmltZSBudW1iZXJzLlxcbiAgwrcgV2l0aCBOb2RlID49MTEgaXQgaXMgZW5hYmxlZCBieSBkZWZhdWx0IChjb25zaWRlciB1cGdyYWRpbmcpLlxcbiAgwrcgV2l0aCBOb2RlIDEwLCBzdGFydGluZyB3aXRoIDEwLjUuMCwgeW91IGNhbiBlbmFibGUgd29ya2VyX3RocmVhZHMgYXQgcnVudGltZSBleGVjdXRpbmcgbm9kZSAtLWV4cGVyaW1lbnRhbC13b3JrZXIgXCIpfWZ1bmN0aW9uIHYodCxlPTE2LHI9ITEpe2lmKFwibnVtYmVyXCI9PXR5cGVvZiB0JiYodD1CaWdJbnQodCkpLHQ8MG4pdGhyb3cgUmFuZ2VFcnJvcihcIncgTVVTVCBiZSA+PSAwXCIpO3JldHVybiBuZXcgUHJvbWlzZSghciYmXz8ocixvKT0+e2NvbnN0IGk9bmV3IEUuV29ya2VyKG4oaW1wb3J0Lm1ldGEudXJsKSk7aS5vbihcIm1lc3NhZ2VcIiwobj0+e3ZvaWQgMCE9PW4/Ll9iY3U/LmlzUHJpbWUmJihpLnRlcm1pbmF0ZSgpLmNhdGNoKG8pLHIobi5fYmN1LmlzUHJpbWUpKX0pKSxpLm9uKFwiZXJyb3JcIixvKTtjb25zdCB1PXtfYmN1OntybmQ6dCxpdGVyYXRpb25zOmUsaWQ6MH19O2kucG9zdE1lc3NhZ2UodSl9Om49PntuKE0odCxlKSl9KX1mdW5jdGlvbiBNKG4sdCl7aWYoMm49PT1uKXJldHVybiEwO2lmKDBuPT09KDFuJm4pfHwxbj09PW4pcmV0dXJuITE7Y29uc3QgZT1bM24sNW4sN24sMTFuLDEzbiwxN24sMTluLDIzbiwyOW4sMzFuLDM3biw0MW4sNDNuLDQ3biw1M24sNTluLDYxbiw2N24sNzFuLDczbiw3OW4sODNuLDg5biw5N24sMTAxbiwxMDNuLDEwN24sMTA5biwxMTNuLDEyN24sMTMxbiwxMzduLDEzOW4sMTQ5biwxNTFuLDE1N24sMTYzbiwxNjduLDE3M24sMTc5biwxODFuLDE5MW4sMTkzbiwxOTduLDE5OW4sMjExbiwyMjNuLDIyN24sMjI5biwyMzNuLDIzOW4sMjQxbiwyNTFuLDI1N24sMjYzbiwyNjluLDI3MW4sMjc3biwyODFuLDI4M24sMjkzbiwzMDduLDMxMW4sMzEzbiwzMTduLDMzMW4sMzM3biwzNDduLDM0OW4sMzUzbiwzNTluLDM2N24sMzczbiwzNzluLDM4M24sMzg5biwzOTduLDQwMW4sNDA5biw0MTluLDQyMW4sNDMxbiw0MzNuLDQzOW4sNDQzbiw0NDluLDQ1N24sNDYxbiw0NjNuLDQ2N24sNDc5biw0ODduLDQ5MW4sNDk5biw1MDNuLDUwOW4sNTIxbiw1MjNuLDU0MW4sNTQ3biw1NTduLDU2M24sNTY5biw1NzFuLDU3N24sNTg3biw1OTNuLDU5OW4sNjAxbiw2MDduLDYxM24sNjE3biw2MTluLDYzMW4sNjQxbiw2NDNuLDY0N24sNjUzbiw2NTluLDY2MW4sNjczbiw2NzduLDY4M24sNjkxbiw3MDFuLDcwOW4sNzE5biw3MjduLDczM24sNzM5biw3NDNuLDc1MW4sNzU3biw3NjFuLDc2OW4sNzczbiw3ODduLDc5N24sODA5biw4MTFuLDgyMW4sODIzbiw4MjduLDgyOW4sODM5biw4NTNuLDg1N24sODU5biw4NjNuLDg3N24sODgxbiw4ODNuLDg4N24sOTA3biw5MTFuLDkxOW4sOTI5biw5MzduLDk0MW4sOTQ3biw5NTNuLDk2N24sOTcxbiw5NzduLDk4M24sOTkxbiw5OTduLDEwMDluLDEwMTNuLDEwMTluLDEwMjFuLDEwMzFuLDEwMzNuLDEwMzluLDEwNDluLDEwNTFuLDEwNjFuLDEwNjNuLDEwNjluLDEwODduLDEwOTFuLDEwOTNuLDEwOTduLDExMDNuLDExMDluLDExMTduLDExMjNuLDExMjluLDExNTFuLDExNTNuLDExNjNuLDExNzFuLDExODFuLDExODduLDExOTNuLDEyMDFuLDEyMTNuLDEyMTduLDEyMjNuLDEyMjluLDEyMzFuLDEyMzduLDEyNDluLDEyNTluLDEyNzduLDEyNzluLDEyODNuLDEyODluLDEyOTFuLDEyOTduLDEzMDFuLDEzMDNuLDEzMDduLDEzMTluLDEzMjFuLDEzMjduLDEzNjFuLDEzNjduLDEzNzNuLDEzODFuLDEzOTluLDE0MDluLDE0MjNuLDE0MjduLDE0MjluLDE0MzNuLDE0MzluLDE0NDduLDE0NTFuLDE0NTNuLDE0NTluLDE0NzFuLDE0ODFuLDE0ODNuLDE0ODduLDE0ODluLDE0OTNuLDE0OTluLDE1MTFuLDE1MjNuLDE1MzFuLDE1NDNuLDE1NDluLDE1NTNuLDE1NTluLDE1NjduLDE1NzFuLDE1NzluLDE1ODNuLDE1OTduXTtmb3IobGV0IHQ9MDt0PGUubGVuZ3RoJiZlW3RdPD1uO3QrKyl7Y29uc3Qgcj1lW3RdO2lmKG49PT1yKXJldHVybiEwO2lmKG4lcj09PTBuKXJldHVybiExfWxldCByPTBuO2NvbnN0IG89bi0xbjtsZXQgaT1vO2Zvcig7aSUybj09PTBuOylpLz0ybiwrK3I7Y29uc3QgdT1vLzJuKipyO2Rve2xldCB0PWQoSShvLDJuKSx1LG4pO2lmKDFuPT09dHx8dD09PW8pY29udGludWU7bGV0IGU9MTtmb3IoO2U8ciYmKHQ9ZCh0LDJuLG4pLHQhPT1vKTspe2lmKDFuPT09dClyZXR1cm4hMTtlKyt9aWYodCE9PW8pcmV0dXJuITF9d2hpbGUoMCE9LS10KTtyZXR1cm4hMH1pZihfKXRyeXt2YXIgRT1hd2FpdCBpbXBvcnQoXCJ3b3JrZXJfdGhyZWFkc1wiKTtpZighRS5pc01haW5UaHJlYWQmJm51bGwhPT1FLnBhcmVudFBvcnQpe2NvbnN0IG49RS5wYXJlbnRQb3J0O24ub24oXCJtZXNzYWdlXCIsKGZ1bmN0aW9uKHQpe2lmKHZvaWQgMCE9PXQ/Ll9iY3U/Lml0ZXJhdGlvbnMmJnZvaWQgMCE9PXQ/Ll9iY3U/LnJuZCl7Y29uc3QgZT17X2JjdTp7aXNQcmltZTpNKHQuX2JjdS5ybmQsdC5fYmN1Lml0ZXJhdGlvbnMpLHZhbHVlOnQuX2JjdS5ybmQsaWQ6dC5fYmN1LmlkfX07bi5wb3N0TWVzc2FnZShlKX19KSl9fWNhdGNoKG4pe312YXIgUj1hd2FpdCBpbXBvcnQoXCJvc1wiKTt0cnl7dmFyIGs9YXdhaXQgaW1wb3J0KFwid29ya2VyX3RocmVhZHNcIil9Y2F0Y2h7fWZ1bmN0aW9uIFModCxlPTE2KXtpZih0PDEpdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJiaXRMZW5ndGggTVVTVCBiZSA+IDBcIik7aWYoIV8pe2xldCBuPTBuO2Rve249bChCKHQsITApKX13aGlsZSghTShuLGUpKTtyZXR1cm4gbmV3IFByb21pc2UoKHQ9Pnt0KG4pfSkpfXJldHVybiBuZXcgUHJvbWlzZSgoKHIsbyk9Pntjb25zdCBpPVtdLHU9KG4sbyk9PntpZihuLl9iY3UuaXNQcmltZSl7Zm9yKGxldCBuPTA7bjxpLmxlbmd0aDtuKyspaVtuXS50ZXJtaW5hdGUoKTtmb3IoO2kubGVuZ3RoPjA7KWkucG9wKCk7cihuLl9iY3UudmFsdWUpfWVsc2V7Y29uc3Qgcj1sKEIodCwhMCkpO3RyeXtjb25zdCB0PXtfYmN1OntybmQ6cixpdGVyYXRpb25zOmUsaWQ6bi5fYmN1LmlkfX07by5wb3N0TWVzc2FnZSh0KX1jYXRjaChuKXt9fX07Zm9yKGxldCB0PTA7dDxSLmNwdXMoKS5sZW5ndGgtMTt0Kyspe2NvbnN0IHQ9bmV3IGsuV29ya2VyKG4oaW1wb3J0Lm1ldGEudXJsKSk7dC5vbihcIm1lc3NhZ2VcIiwobj0+dShuLHQpKSksaS5wdXNoKHQpfWZvcihsZXQgbj0wO248aS5sZW5ndGg7bisrKXkodCwhMCkudGhlbigoZnVuY3Rpb24odCl7Y29uc3Qgcj1sKHQpO2lbbl0ucG9zdE1lc3NhZ2Uoe19iY3U6e3JuZDpyLGl0ZXJhdGlvbnM6ZSxpZDpufX0pfSkpLmNhdGNoKG8pfSkpfWZ1bmN0aW9uIFAobix0PTE2KXtpZihuPDEpdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJiaXRMZW5ndGggTVVTVCBiZSA+IDBcIik7bGV0IGU9MG47ZG97ZT1sKEIobiwhMCkpfXdoaWxlKCFNKGUsdCkpO3JldHVybiBlfWV4cG9ydHt0IGFzIGFicyxlIGFzIGJpdExlbmd0aCx1IGFzIGNydCxyIGFzIGVHY2QscyBhcyBnY2QsdiBhcyBpc1Byb2JhYmx5UHJpbWUsYSBhcyBsY20sYyBhcyBtYXgsZiBhcyBtaW4sZyBhcyBtb2RBZGQsaSBhcyBtb2RJbnYsbSBhcyBtb2RNdWx0aXBseSxkIGFzIG1vZFBvdyxoIGFzIHBoaSxTIGFzIHByaW1lLFAgYXMgcHJpbWVTeW5jLEkgYXMgcmFuZEJldHdlZW4seSBhcyByYW5kQml0cyxCIGFzIHJhbmRCaXRzU3luYyxwIGFzIHJhbmRCeXRlcyx3IGFzIHJhbmRCeXRlc1N5bmMsbyBhcyB0b1pufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/bigint-crypto-utils/dist/index.node.esm.js\n',
      );

      /***/
    },
};
