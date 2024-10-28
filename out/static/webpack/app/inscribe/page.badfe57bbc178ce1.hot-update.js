'use strict';
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self['webpackHotUpdate_N_E']('app/inscribe/page', {
  /***/ '(app-pages-browser)/./lib/utils/index.ts':
    /*!****************************!*\
  !*** ./lib/utils/index.ts ***!
  \****************************/
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      eval(
        __webpack_require__.ts(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   btcToSats: function() { return /* reexport safe */ _btc__WEBPACK_IMPORTED_MODULE_0__.btcToSats; },\n/* harmony export */   buildBatchSellOrder: function() { return /* reexport safe */ _order__WEBPACK_IMPORTED_MODULE_1__.buildBatchSellOrder; },\n/* harmony export */   buildBuyOrder: function() { return /* reexport safe */ _order__WEBPACK_IMPORTED_MODULE_1__.buildBuyOrder; },\n/* harmony export */   buildBuyThirdOrder: function() { return /* reexport safe */ _order__WEBPACK_IMPORTED_MODULE_1__.buildBuyThirdOrder; },\n/* harmony export */   buildDummyUtxos: function() { return /* reexport safe */ _order__WEBPACK_IMPORTED_MODULE_1__.buildDummyUtxos; },\n/* harmony export */   buildTransferPsbt: function() { return /* reexport safe */ _order__WEBPACK_IMPORTED_MODULE_1__.buildTransferPsbt; },\n/* harmony export */   calcBuyOrderFee: function() { return /* reexport safe */ _order__WEBPACK_IMPORTED_MODULE_1__.calcBuyOrderFee; },\n/* harmony export */   calcPsbtVirtualSize: function() { return /* reexport safe */ _btc__WEBPACK_IMPORTED_MODULE_0__.calcPsbtVirtualSize; },\n/* harmony export */   calcPsbtVsizeByUtxos: function() { return /* reexport safe */ _btc__WEBPACK_IMPORTED_MODULE_0__.calcPsbtVsizeByUtxos; },\n/* harmony export */   calcTimeBetweenBlocks: function() { return /* binding */ calcTimeBetweenBlocks; },\n/* harmony export */   calcUtxosVirtualGas: function() { return /* reexport safe */ _btc__WEBPACK_IMPORTED_MODULE_0__.calcUtxosVirtualGas; },\n/* harmony export */   cn: function() { return /* binding */ cn; },\n/* harmony export */   generateBuyInputsAndOutputs: function() { return /* reexport safe */ _order__WEBPACK_IMPORTED_MODULE_1__.generateBuyInputsAndOutputs; },\n/* harmony export */   generateMempoolUrl: function() { return /* reexport safe */ _url__WEBPACK_IMPORTED_MODULE_2__.generateMempoolUrl; },\n/* harmony export */   generateOrdUrl: function() { return /* reexport safe */ _url__WEBPACK_IMPORTED_MODULE_2__.generateOrdUrl; },\n/* harmony export */   generateSeed: function() { return /* binding */ generateSeed; },\n/* harmony export */   generateSeedByUtxos: function() { return /* binding */ generateSeedByUtxos; },\n/* harmony export */   generateTransferPsbt: function() { return /* reexport safe */ _order__WEBPACK_IMPORTED_MODULE_1__.generateTransferPsbt; },\n/* harmony export */   getLabelForAssets: function() { return /* binding */ getLabelForAssets; },\n/* harmony export */   getTickLabel: function() { return /* binding */ getTickLabel; },\n/* harmony export */   getTimeByHeight: function() { return /* binding */ getTimeByHeight; },\n/* harmony export */   hideStr: function() { return /* binding */ hideStr; },\n/* harmony export */   parseUtxo: function() { return /* reexport safe */ _btc__WEBPACK_IMPORTED_MODULE_0__.parseUtxo; },\n/* harmony export */   removeObjectEmptyValue: function() { return /* binding */ removeObjectEmptyValue; },\n/* harmony export */   resolveMempoolTxLink: function() { return /* reexport safe */ _url__WEBPACK_IMPORTED_MODULE_2__.resolveMempoolTxLink; },\n/* harmony export */   safeOutputValue: function() { return /* reexport safe */ _btc__WEBPACK_IMPORTED_MODULE_0__.safeOutputValue; },\n/* harmony export */   satsToBitcoin: function() { return /* reexport safe */ _btc__WEBPACK_IMPORTED_MODULE_0__.satsToBitcoin; },\n/* harmony export */   selectAmountRangesByUtxos: function() { return /* binding */ selectAmountRangesByUtxos; },\n/* harmony export */   signAndPushPsbt: function() { return /* reexport safe */ _btc__WEBPACK_IMPORTED_MODULE_0__.signAndPushPsbt; },\n/* harmony export */   sleep: function() { return /* binding */ sleep; },\n/* harmony export */   splitBatchSignedPsbt: function() { return /* reexport safe */ _order__WEBPACK_IMPORTED_MODULE_1__.splitBatchSignedPsbt; },\n/* harmony export */   thousandSeparator: function() { return /* binding */ thousandSeparator; }\n/* harmony export */ });\n/* harmony import */ var _btc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./btc */ "(app-pages-browser)/./lib/utils/btc.ts");\n/* harmony import */ var _order__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./order */ "(app-pages-browser)/./lib/utils/order.ts");\n/* harmony import */ var _url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./url */ "(app-pages-browser)/./lib/utils/url.ts");\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/api */ "(app-pages-browser)/./api/index.ts");\n/* harmony import */ var _barrel_optimize_names_add_format_date_fns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=add,format!=!date-fns */ "(app-pages-browser)/./node_modules/date-fns/add.mjs");\n/* harmony import */ var _barrel_optimize_names_add_format_date_fns__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=add,format!=!date-fns */ "(app-pages-browser)/./node_modules/date-fns/format.mjs");\n/* harmony import */ var radash__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! radash */ "(app-pages-browser)/./node_modules/radash/dist/esm/array.mjs");\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! crypto */ "(app-pages-browser)/./node_modules/next/dist/compiled/crypto-browserify/index.js");\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! clsx */ "(app-pages-browser)/./node_modules/clsx/dist/clsx.mjs");\n/* harmony import */ var tailwind_merge__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tailwind-merge */ "(app-pages-browser)/./node_modules/tailwind-merge/dist/lib/tw-merge.mjs");\n\n\n\n\n\n\n\n\n\nfunction cn() {\n    for(var _len = arguments.length, inputs = new Array(_len), _key = 0; _key < _len; _key++){\n        inputs[_key] = arguments[_key];\n    }\n    return (0,tailwind_merge__WEBPACK_IMPORTED_MODULE_6__.twMerge)((0,clsx__WEBPACK_IMPORTED_MODULE_5__.clsx)(inputs));\n}\nconst getLabelForAssets = (assets_name, assets_type)=>{\n    var _assetsMap_assets_type;\n    const assetsMap = {\n        ns: {\n            un: "Pure Name"\n        }\n    };\n    return ((_assetsMap_assets_type = assetsMap[assets_type]) === null || _assetsMap_assets_type === void 0 ? void 0 : _assetsMap_assets_type[assets_name]) || assets_name;\n};\nconst getTickLabel = (tick, type)=>{\n    if (tick === undefined) return undefined;\n    const tickMap = {\n        // n: \'Name\',\n        // o: \'Ordinals NFT\',// 要求暂不显示\n        // e: \'Rare\',\n        btc: "PN-btc"\n    };\n    if (type === "n" && tick === "") {\n        return "Pure Name";\n    }\n    return tickMap[tick] || tick;\n};\nconst sleep = (ms)=>new Promise((resolve)=>setTimeout(resolve, ms));\nconst hideStr = function(str) {\n    let num = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 10, placeholder = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "*****";\n    if (typeof str === "string" && str) {\n        return "".concat(str === null || str === void 0 ? void 0 : str.substring(0, num)).concat(placeholder).concat(str === null || str === void 0 ? void 0 : str.substring((str === null || str === void 0 ? void 0 : str.length) - num));\n    }\n    return "";\n};\nconst removeObjectEmptyValue = (obj)=>{\n    const _obj = {\n        ...obj\n    };\n    Object.keys(_obj).forEach((key)=>{\n        if (_obj[key] === "" || _obj[key] === undefined || _obj[key] === null || _obj[key] === "null" || _obj[key] === "undefined" || _obj[key] === "NaN" || isNaN(_obj[key]) && typeof _obj[key] === "number") {\n            delete _obj[key];\n        }\n    });\n    return _obj;\n};\nfunction thousandSeparator(num) {\n    var _num_toString;\n    return num === null || num === void 0 ? void 0 : (_num_toString = num.toString()) === null || _num_toString === void 0 ? void 0 : _num_toString.replace(/\\B(?=(\\d{3})+(?!\\d))/g, ",");\n}\nconst getTimeByHeight = async (height, network)=>{\n    const key = "height-time-".concat(height);\n    const lcoalCache = sessionStorage.getItem(key);\n    if (lcoalCache) {\n        return +lcoalCache;\n    }\n    const { info } = await _api__WEBPACK_IMPORTED_MODULE_3__.ordx.getHeightInfo({\n        height,\n        network\n    });\n    const timestamp = (info === null || info === void 0 ? void 0 : info.timestamp) || 0;\n    const time = timestamp * 1000;\n    if (time) {\n        sessionStorage.setItem(key, time.toString());\n    }\n    return time;\n};\nconst calcTimeBetweenBlocks = async (param)=>{\n    let { height, start, end, network } = param;\n    try {\n        const now = +new Date();\n        let startTime = now;\n        let endTime = now;\n        if (start && start < height) {\n            startTime = await getTimeByHeight(start, network);\n        // console.log(\'startTime\', startTime);\n        } else {\n            const startDis = start - height;\n            startTime = (0,_barrel_optimize_names_add_format_date_fns__WEBPACK_IMPORTED_MODULE_7__.add)(now, {\n                minutes: startDis * 10\n            });\n        }\n        if (end && end < height) {\n            endTime = await getTimeByHeight(end, network);\n        } else {\n            const endDis = Math.ceil(end - height);\n            endTime = (0,_barrel_optimize_names_add_format_date_fns__WEBPACK_IMPORTED_MODULE_7__.add)(now, {\n                minutes: endDis * 10\n            });\n        }\n        // console.log(\'startTime\', startTime, \'endTime\', endTime);\n        return {\n            start: (0,_barrel_optimize_names_add_format_date_fns__WEBPACK_IMPORTED_MODULE_8__.format)(new Date(startTime), "yyyy-MM-dd HH:mm"),\n            end: (0,_barrel_optimize_names_add_format_date_fns__WEBPACK_IMPORTED_MODULE_8__.format)(new Date(endTime), "yyyy-MM-dd HH:mm")\n        };\n    } catch (error) {\n        console.log(error);\n        return {\n            start: undefined,\n            end: undefined\n        };\n    }\n};\nconst generateSeed = (ranges)=>{\n    const jsonString = JSON.stringify(ranges);\n    try {\n        const bytes = new TextEncoder().encode(jsonString);\n        const hash = crypto__WEBPACK_IMPORTED_MODULE_4___default().createHash("sha256");\n        hash.update(bytes);\n        const hashResult = hash.digest("hex").slice(0, 16);\n        return hashResult;\n    } catch (error) {\n        console.error("json.Marshal failed. " + error);\n        return "0";\n    }\n};\nconst selectAmountRangesByUtxos = (utxos, amount)=>{\n    const sats = (0,radash__WEBPACK_IMPORTED_MODULE_9__.flat)(utxos.map((v)=>v.sats));\n    const ranges = [];\n    let totalSize = 0;\n    for(let i = 0; i < sats.length; i++){\n        const item = sats[i];\n        const { size, start } = item;\n        totalSize += size;\n        if (totalSize > amount) {\n            const dis = totalSize - amount;\n            ranges.push({\n                start,\n                size: size - dis\n            });\n        } else {\n            ranges.push({\n                start,\n                size\n            });\n        }\n    }\n    return ranges;\n};\nconst generateSeedByUtxos = (utxos, amount)=>{\n    console.log(utxos, amount);\n    amount = Math.max(amount, 546);\n    return generateSeed(selectAmountRangesByUtxos(utxos, amount));\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we\'re in a\n        // browser context before continuing.\n        if (typeof self !== \'undefined\' &&\n            // AMP / No-JS mode does not inject these helpers:\n            \'$RefreshHelpers$\' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we\'ll check if it\'s\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we\'ll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it\'s possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2xpYi91dGlscy9pbmRleC50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXNCO0FBQ0U7QUFDRjtBQUNPO0FBQ1U7QUFDVDtBQUNGO0FBRWlCO0FBQ0o7QUFFbEMsU0FBU087SUFBRztRQUFHQyxPQUFILHVCQUF1Qjs7SUFDeEMsT0FBT0YsdURBQU9BLENBQUNELDBDQUFJQSxDQUFDRztBQUN0QjtBQUVPLE1BQU1DLG9CQUFvQixDQUFDQyxhQUFxQkM7UUFNOUNDO0lBTFAsTUFBTUEsWUFBWTtRQUNoQkMsSUFBSTtZQUNGQyxJQUFJO1FBQ047SUFDRjtJQUNBLE9BQU9GLEVBQUFBLHlCQUFBQSxTQUFTLENBQUNELFlBQVksY0FBdEJDLDZDQUFBQSxzQkFBd0IsQ0FBQ0YsWUFBWSxLQUFJQTtBQUNsRCxFQUFFO0FBQ0ssTUFBTUssZUFBZSxDQUFDQyxNQUFlQztJQUMxQyxJQUFJRCxTQUFTRSxXQUFXLE9BQU9BO0lBQy9CLE1BQU1DLFVBQVU7UUFDZCxhQUFhO1FBQ2IsOEJBQThCO1FBQzlCLGFBQWE7UUFDYkMsS0FBSztJQUNQO0lBQ0EsSUFBSUgsU0FBUyxPQUFPRCxTQUFTLElBQUk7UUFDL0IsT0FBTztJQUNUO0lBQ0EsT0FBT0csT0FBTyxDQUFDSCxLQUFLLElBQUlBO0FBQzFCLEVBQUU7QUFFSyxNQUFNSyxRQUFRLENBQUNDLEtBQ3BCLElBQUlDLFFBQVEsQ0FBQ0MsVUFBWUMsV0FBV0QsU0FBU0YsS0FBSztBQUU3QyxNQUFNSSxVQUFVLFNBQ3JCQztRQUNBQyx1RUFBYyxJQUNkQywrRUFBYztJQUVkLElBQUksT0FBT0YsUUFBUSxZQUFZQSxLQUFLO1FBQ2xDLE9BQU8sR0FBNEJFLE9BQXpCRixnQkFBQUEsMEJBQUFBLElBQUtHLFNBQVMsQ0FBQyxHQUFHRixhQUFPQyxhQUVqQyxPQUYrQ0YsZ0JBQUFBLDBCQUFBQSxJQUFLRyxTQUFTLENBQzdESCxD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QWlCLENBQUM7UUFDL0J5RSxLQUFLRSxNQUFNLENBQUNMO1FBQ1osTUFBTU0sYUFBYUgsS0FBS0ksTUFBTSxDQUFDLE9BQU9DLEtBQUssQ0FBQyxHQUFHO1FBQy9DLE9BQU9GO0lBQ1QsRUFBRSxPQUFPZCxPQUFPO1FBQ2RDLFFBQVFELEtBQUssQ0FBQywwQkFBMEJBO1FBQ3hDLE9BQU87SUFDVDtBQUNGLEVBQUU7QUFDSyxNQUFNaUIsNEJBQTRCLENBQUNDLE9BQWNDO0lBQ3RELE1BQU1DLE9BQWNuRiw0Q0FBSUEsQ0FBQ2lGLE1BQU1HLEdBQUcsQ0FBQyxDQUFDQyxJQUFNQSxFQUFFRixJQUFJO0lBQ2hELE1BQU1oQixTQUFnQixFQUFFO0lBQ3hCLElBQUltQixZQUFZO0lBQ2hCLElBQUssSUFBSUMsSUFBSSxHQUFHQSxJQUFJSixLQUFLdkQsTUFBTSxFQUFFMkQsSUFBSztRQUNwQyxNQUFNQyxPQUFPTCxJQUFJLENBQUNJLEVBQUU7UUFDcEIsTUFBTSxFQUFFRSxJQUFJLEVBQUVyQyxLQUFLLEVBQUUsR0FBR29DO1FBQ3hCRixhQUFhRztRQUViLElBQUlILFlBQVlKLFFBQVE7WUFDdEIsTUFBTVEsTUFBTUosWUFBWUo7WUFDeEJmLE9BQU93QixJQUFJLENBQUM7Z0JBQ1Z2QztnQkFDQXFDLE1BQU1BLE9BQU9DO1lBQ2Y7UUFDRixPQUFPO1lBQ0x2QixPQUFPd0IsSUFBSSxDQUFDO2dCQUNWdkM7Z0JBQ0FxQztZQUNGO1FBQ0Y7SUFDRjtJQUNBLE9BQU90QjtBQUNULEVBQUU7QUFDSyxNQUFNeUIsc0JBQXNCLENBQUNYLE9BQWNDO0lBQ2hEbEIsUUFBUUMsR0FBRyxDQUFDZ0IsT0FBT0M7SUFDbkJBLFNBQVNyQixLQUFLZ0MsR0FBRyxDQUFDWCxRQUFRO0lBQzFCLE9BQU9oQixhQUFhYywwQkFBMEJDLE9BQU9DO0FBQ3ZELEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL3V0aWxzL2luZGV4LnRzPzE1OWIiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0ICogZnJvbSAnLi9idGMnO1xuZXhwb3J0ICogZnJvbSAnLi9vcmRlcic7XG5leHBvcnQgKiBmcm9tICcuL3VybCc7XG5pbXBvcnQgeyBvcmR4IH0gZnJvbSAnQC9hcGknO1xuaW1wb3J0IHsgYWRkLCBmb3JtYXQgfSBmcm9tICdkYXRlLWZucyc7XG5pbXBvcnQgeyBmbGF0IH0gZnJvbSAncmFkYXNoJztcbmltcG9ydCBjcnlwdG8gZnJvbSAnY3J5cHRvJztcblxuaW1wb3J0IHsgY2xzeCwgdHlwZSBDbGFzc1ZhbHVlIH0gZnJvbSAnY2xzeCc7XG5pbXBvcnQgeyB0d01lcmdlIH0gZnJvbSAndGFpbHdpbmQtbWVyZ2UnO1xuXG5leHBvcnQgZnVuY3Rpb24gY24oLi4uaW5wdXRzOiBDbGFzc1ZhbHVlW10pIHtcbiAgcmV0dXJuIHR3TWVyZ2UoY2xzeChpbnB1dHMpKTtcbn1cblxuZXhwb3J0IGNvbnN0IGdldExhYmVsRm9yQXNzZXRzID0gKGFzc2V0c19uYW1lOiBzdHJpbmcsIGFzc2V0c190eXBlOiBzdHJpbmcpID0+IHtcbiAgY29uc3QgYXNzZXRzTWFwID0ge1xuICAgIG5zOiB7XG4gICAgICB1bjogJ1B1cmUgTmFtZScsXG4gICAgfSxcbiAgfTtcbiAgcmV0dXJuIGFzc2V0c01hcFthc3NldHNfdHlwZV0/Llthc3NldHNfbmFtZV0gfHwgYXNzZXRzX25hbWU7XG59O1xuZXhwb3J0IGNvbnN0IGdldFRpY2tMYWJlbCA9ICh0aWNrPzogc3RyaW5nLCB0eXBlPzogc3RyaW5nKSA9PiB7XG4gIGlmICh0aWNrID09PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWQ7XG4gIGNvbnN0IHRpY2tNYXAgPSB7XG4gICAgLy8gbjogJ05hbWUnLFxuICAgIC8vIG86ICdPcmRpbmFscyBORlQnLC8vIOimgeaxguaaguS4jeaYvuekulxuICAgIC8vIGU6ICdSYXJlJyxcbiAgICBidGM6ICdQTi1idGMnLFxuICB9O1xuICBpZiAodHlwZSA9PT0gJ24nICYmIHRpY2sgPT09ICcnKSB7XG4gICAgcmV0dXJuICdQdXJlIE5hbWUnO1xuICB9XG4gIHJldHVybiB0aWNrTWFwW3RpY2tdIHx8IHRpY2s7XG59O1xuXG5leHBvcnQgY29uc3Qgc2xlZXAgPSAobXM6IG51bWJlcikgPT5cbiAgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgbXMpKTtcblxuZXhwb3J0IGNvbnN0IGhpZGVTdHIgPSAoXG4gIHN0cj86IHN0cmluZyxcbiAgbnVtOiBudW1iZXIgPSAxMCxcbiAgcGxhY2Vob2xkZXIgPSAnKioqKionLFxuKSA9PiB7XG4gIGlmICh0eXBlb2Ygc3RyID09PSAnc3RyaW5nJyAmJiBzdHIpIHtcbiAgICByZXR1cm4gYCR7c3RyPy5zdWJzdHJpbmcoMCwgbnVtKX0ke3BsYWNlaG9sZGVyfSR7c3RyPy5zdWJzdHJpbmcoXG4gICAgICBzdHI/Lmxlbmd0aCAtIG51bSxcbiAgICApfWA7XG4gIH1cbiAgcmV0dXJuICcnO1xufTtcbmV4cG9ydCBjb25zdCByZW1vdmVPYmplY3RFbXB0eVZhbHVlID0gKG9iajogYW55KSA9PiB7XG4gIGNvbnN0IF9vYmogPSB7IC4uLm9iaiB9O1xuICBPYmplY3Qua2V5cyhfb2JqKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICBpZiAoXG4gICAgICBfb2JqW2tleV0gPT09ICcnIHx8XG4gICAgICBfb2JqW2tleV0gPT09IHVuZGVmaW5lZCB8fFxuICAgICAgX29ialtrZXldID09PSBudWxsIHx8XG4gICAgICBfb2JqW2tleV0gPT09ICdudWxsJyB8fFxuICAgICAgX29ialtrZXldID09PSAndW5kZWZpbmVkJyB8fFxuICAgICAgX29ialtrZXldID09PSAnTmFOJyB8fFxuICAgICAgKGlzTmFOKF9vYmpba2V5XSkgJiYgdHlwZW9mIF9vYmpba2V5XSA9PT0gJ251bWJlcicpXG4gICAgKSB7XG4gICAgICBkZWxldGUgX29ialtrZXldO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBfb2JqO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHRob3VzYW5kU2VwYXJhdG9yKG51bTogbnVtYmVyKSB7XG4gIHJldHVybiBudW0/LnRvU3RyaW5nKCk/LnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJyk7XG59XG5cbmV4cG9ydCBjb25zdCBnZXRUaW1lQnlIZWlnaHQgPSBhc3luYyAoaGVpZ2h0OiBudW1iZXIsIG5ldHdvcms6IHN0cmluZykgPT4ge1xuICBjb25zdCBrZXkgPSBgaGVpZ2h0LXRpbWUtJHtoZWlnaHR9YDtcbiAgY29uc3QgbGNvYWxDYWNoZSA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oa2V5KTtcbiAgaWYgKGxjb2FsQ2FjaGUpIHtcbiAgICByZXR1cm4gK2xjb2FsQ2FjaGU7XG4gIH1cbiAgY29uc3QgeyBpbmZvIH0gPSBhd2FpdCBvcmR4LmdldEhlaWdodEluZm8oeyBoZWlnaHQsIG5ldHdvcmsgfSk7XG4gIGNvbnN0IHRpbWVzdGFtcCA9IGluZm8/LnRpbWVzdGFtcCB8fCAwO1xuICBjb25zdCB0aW1lID0gdGltZXN0YW1wICogMTAwMDtcbiAgaWYgKHRpbWUpIHtcbiAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKGtleSwgdGltZS50b1N0cmluZygpKTtcbiAgfVxuICByZXR1cm4gdGltZTtcbn07XG5cbmV4cG9ydCBjb25zdCBjYWxjVGltZUJldHdlZW5CbG9ja3MgPSBhc3luYyAoe1xuICBoZWlnaHQsXG4gIHN0YXJ0LFxuICBlbmQsXG4gIG5ldHdvcmssXG59OiBhbnkpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBub3cgPSArbmV3IERhdGUoKTtcbiAgICBsZXQgc3RhcnRUaW1lOiBhbnkgPSBub3c7XG4gICAgbGV0IGVuZFRpbWU6IGFueSA9IG5vdztcbiAgICBpZiAoc3RhcnQgJiYgc3RhcnQgPCBoZWlnaHQpIHtcbiAgICAgIHN0YXJ0VGltZSA9IGF3YWl0IGdldFRpbWVCeUhlaWdodChzdGFydCwgbmV0d29yayk7XG4gICAgICAvLyBjb25zb2xlLmxvZygnc3RhcnRUaW1lJywgc3RhcnRUaW1lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgc3RhcnREaXMgPSBzdGFydCAtIGhlaWdodDtcbiAgICAgIHN0YXJ0VGltZSA9IGFkZChub3csIHsgbWludXRlczogc3RhcnREaXMgKiAxMCB9KTtcbiAgICB9XG5cbiAgICBpZiAoZW5kICYmIGVuZCA8IGhlaWdodCkge1xuICAgICAgZW5kVGltZSA9IGF3YWl0IGdldFRpbWVCeUhlaWdodChlbmQsIG5ldHdvcmspO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBlbmREaXMgPSBNYXRoLmNlaWwoZW5kIC0gaGVpZ2h0KTtcbiAgICAgIGVuZFRpbWUgPSBhZGQobm93LCB7IG1pbnV0ZXM6IGVuZERpcyAqIDEwIH0pO1xuICAgIH1cbiAgICAvLyBjb25zb2xlLmxvZygnc3RhcnRUaW1lJywgc3RhcnRUaW1lLCAnZW5kVGltZScsIGVuZFRpbWUpO1xuICAgIHJldHVybiB7XG4gICAgICBzdGFydDogZm9ybWF0KG5ldyBEYXRlKHN0YXJ0VGltZSksICd5eXl5LU1NLWRkIEhIOm1tJyksXG4gICAgICBlbmQ6IGZvcm1hdChuZXcgRGF0ZShlbmRUaW1lKSwgJ3l5eXktTU0tZGQgSEg6bW0nKSxcbiAgICB9O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICByZXR1cm4ge1xuICAgICAgc3RhcnQ6IHVuZGVmaW5lZCxcbiAgICAgIGVuZDogdW5kZWZpbmVkLFxuICAgIH07XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBnZW5lcmF0ZVNlZWQgPSAocmFuZ2VzKSA9PiB7XG4gIGNvbnN0IGpzb25TdHJpbmcgPSBKU09OLnN0cmluZ2lmeShyYW5nZXMpO1xuICB0cnkge1xuICAgIGNvbnN0IGJ5dGVzID0gbmV3IFRleHRFbmNvZGVyKCkuZW5jb2RlKGpzb25TdHJpbmcpO1xuICAgIGNvbnN0IGhhc2ggPSBjcnlwdG8uY3JlYXRlSGFzaCgnc2hhMjU2Jyk7XG4gICAgaGFzaC51cGRhdGUoYnl0ZXMpO1xuICAgIGNvbnN0IGhhc2hSZXN1bHQgPSBoYXNoLmRpZ2VzdCgnaGV4Jykuc2xpY2UoMCwgMTYpO1xuICAgIHJldHVybiBoYXNoUmVzdWx0O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ2pzb24uTWFyc2hhbCBmYWlsZWQuICcgKyBlcnJvcik7XG4gICAgcmV0dXJuICcwJztcbiAgfVxufTtcbmV4cG9ydCBjb25zdCBzZWxlY3RBbW91bnRSYW5nZXNCeVV0eG9zID0gKHV0eG9zOiBhbnlbXSwgYW1vdW50KSA9PiB7XG4gIGNvbnN0IHNhdHM6IGFueVtdID0gZmxhdCh1dHhvcy5tYXAoKHYpID0+IHYuc2F0cykpO1xuICBjb25zdCByYW5nZXM6IGFueVtdID0gW107XG4gIGxldCB0b3RhbFNpemUgPSAwO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHNhdHMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBpdGVtID0gc2F0c1tpXTtcbiAgICBjb25zdCB7IHNpemUsIHN0YXJ0IH0gPSBpdGVtO1xuICAgIHRvdGFsU2l6ZSArPSBzaXplO1xuXG4gICAgaWYgKHRvdGFsU2l6ZSA+IGFtb3VudCkge1xuICAgICAgY29uc3QgZGlzID0gdG90YWxTaXplIC0gYW1vdW50O1xuICAgICAgcmFuZ2VzLnB1c2goe1xuICAgICAgICBzdGFydCxcbiAgICAgICAgc2l6ZTogc2l6ZSAtIGRpcyxcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICByYW5nZXMucHVzaCh7XG4gICAgICAgIHN0YXJ0LFxuICAgICAgICBzaXplLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByYW5nZXM7XG59O1xuZXhwb3J0IGNvbnN0IGdlbmVyYXRlU2VlZEJ5VXR4b3MgPSAodXR4b3M6IGFueVtdLCBhbW91bnQpID0+IHtcbiAgY29uc29sZS5sb2codXR4b3MsIGFtb3VudCk7XG4gIGFtb3VudCA9IE1hdGgubWF4KGFtb3VudCwgNTQ2KTtcbiAgcmV0dXJuIGdlbmVyYXRlU2VlZChzZWxlY3RBbW91bnRSYW5nZXNCeVV0eG9zKHV0eG9zLCBhbW91bnQpKTtcbn07XG4iXSwibmFtZXMiOlsib3JkeCIsImFkZCIsImZvcm1hdCIsImZsYXQiLCJjcnlwdG8iLCJjbHN4IiwidHdNZXJnZSIsImNuIiwiaW5wdXRzIiwiZ2V0TGFiZWxGb3JBc3NldHMiLCJhc3NldHNfbmFtZSIsImFzc2V0c190eXBlIiwiYXNzZXRzTWFwIiwibnMiLCJ1biIsImdldFRpY2tMYWJlbCIsInRpY2siLCJ0eXBlIiwidW5kZWZpbmVkIiwidGlja01hcCIsImJ0YyIsInNsZWVwIiwibXMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInNldFRpbWVvdXQiLCJoaWRlU3RyIiwic3RyIiwibnVtIiwicGxhY2Vob2xkZXIiLCJzdWJzdHJpbmciLCJsZW5ndGgiLCJyZW1vdmVPYmplY3RFbXB0eVZhbHVlIiwib2JqIiwiX29iaiIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwia2V5IiwiaXNOYU4iLCJ0aG91c2FuZFNlcGFyYXRvciIsInRvU3RyaW5nIiwicmVwbGFjZSIsImdldFRpbWVCeUhlaWdodCIsImhlaWdodCIsIm5ldHdvcmsiLCJsY29hbENhY2hlIiwic2Vzc2lvblN0b3JhZ2UiLCJnZXRJdGVtIiwiaW5mbyIsImdldEhlaWdodEluZm8iLCJ0aW1lc3RhbXAiLCJ0aW1lIiwic2V0SXRlbSIsImNhbGNUaW1lQmV0d2VlbkJsb2NrcyIsInN0YXJ0IiwiZW5kIiwibm93IiwiRGF0ZSIsInN0YXJ0VGltZSIsImVuZFRpbWUiLCJzdGFydERpcyIsIm1pbnV0ZXMiLCJlbmREaXMiLCJNYXRoIiwiY2VpbCIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImdlbmVyYXRlU2VlZCIsInJhbmdlcyIsImpzb25TdHJpbmciLCJKU09OIiwic3RyaW5naWZ5IiwiYnl0ZXMiLCJUZXh0RW5jb2RlciIsImVuY29kZSIsImhhc2giLCJjcmVhdGVIYXNoIiwidXBkYXRlIiwiaGFzaFJlc3VsdCIsImRpZ2VzdCIsInNsaWNlIiwic2VsZWN0QW1vdW50UmFuZ2VzQnlVdHhvcyIsInV0eG9zIiwiYW1vdW50Iiwic2F0cyIsIm1hcCIsInYiLCJ0b3RhbFNpemUiLCJpIiwiaXRlbSIsInNpemUiLCJkaXMiLCJwdXNoIiwiZ2VuZXJhdGVTZWVkQnlVdHhvcyIsIm1heCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./lib/utils/index.ts\n',
        ),
      );

      /***/
    },
});
