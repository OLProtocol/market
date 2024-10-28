'use strict';
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self['webpackHotUpdate_N_E']('app/account/page', {
  /***/ '(app-pages-browser)/./lib/wallet/utils.ts':
    /*!*****************************!*\
  !*** ./lib/wallet/utils.ts ***!
  \*****************************/
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      eval(
        __webpack_require__.ts(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addresToScriptPublicKey: function() { return /* binding */ addresToScriptPublicKey; },\n/* harmony export */   buildTransaction: function() { return /* binding */ buildTransaction; },\n/* harmony export */   calcNetworkFee: function() { return /* binding */ calcNetworkFee; },\n/* harmony export */   generateTransaction: function() { return /* binding */ generateTransaction; },\n/* harmony export */   isTaprootAddress: function() { return /* binding */ isTaprootAddress; }\n/* harmony export */ });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "(app-pages-browser)/./lib/wallet/index.ts");\n/* harmony import */ var _utxo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utxo */ "(app-pages-browser)/./lib/wallet/utxo.ts");\n/* harmony import */ var _cmdcode_tapscript__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @cmdcode/tapscript */ "(app-pages-browser)/./node_modules/@cmdcode/tapscript/dist/module.mjs");\n/* harmony import */ var bitcoinjs_lib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bitcoinjs-lib */ "(app-pages-browser)/./node_modules/bitcoinjs-lib/src/index.js");\n\n\n\n\nfunction addresToScriptPublicKey(address) {\n    var _Script_fmt_toAsm;\n    const scriptPublicKey = (_Script_fmt_toAsm = _cmdcode_tapscript__WEBPACK_IMPORTED_MODULE_2__.Script.fmt.toAsm(_cmdcode_tapscript__WEBPACK_IMPORTED_MODULE_2__.Address.toScriptPubKey(address))) === null || _Script_fmt_toAsm === void 0 ? void 0 : _Script_fmt_toAsm[0];\n    return scriptPublicKey;\n}\nfunction isTaprootAddress(address) {\n    let network = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "mainnet";\n    try {\n        // 通过 bitcoinjs-lib 检查\n        const decoded = bitcoinjs_lib__WEBPACK_IMPORTED_MODULE_3__.address.fromBech32(address);\n        const isBech32m = decoded.prefix === "bc" && network !== "testnet" || decoded.prefix === "tb" && network === "testnet";\n        const isVersion1 = decoded.version === 1;\n        console.log(isBech32m);\n        console.log(isVersion1);\n        return isBech32m && isVersion1;\n    } catch (e) {\n        console.error(e);\n        return false;\n    }\n}\nasync function calcNetworkFee(param) {\n    let { utxos, outputs, feeRate, network, address, publicKey, suitable = true } = param;\n    const btcUtxos = (0,_utxo__WEBPACK_IMPORTED_MODULE_1__.convertUtxosToBtcUtxos)({\n        utxos,\n        address,\n        publicKey\n    });\n    const tx = new ___WEBPACK_IMPORTED_MODULE_0__.Transaction({\n        address,\n        network: network == "testnet" ? ___WEBPACK_IMPORTED_MODULE_0__.NetworkType.TESTNET : ___WEBPACK_IMPORTED_MODULE_0__.NetworkType.MAINNET,\n        feeRate\n    });\n    tx.setEnableRBF(true);\n    outputs.forEach((v)=>{\n        tx.addOutput(v.address, v.value, v.script);\n    });\n    console.log(btcUtxos);\n    await tx.addSufficientUtxosForFee(btcUtxos, {\n        suitable\n    });\n    const fee = await tx.calNetworkFee();\n    return fee;\n}\nasync function buildTransaction(param) {\n    let { utxos, outputs, feeRate, network, address, publicKey, suitable = true } = param;\n    const btcUtxos = (0,_utxo__WEBPACK_IMPORTED_MODULE_1__.convertUtxosToBtcUtxos)({\n        utxos,\n        address,\n        publicKey\n    });\n    const tx = new ___WEBPACK_IMPORTED_MODULE_0__.Transaction({\n        address,\n        network: network == "testnet" ? ___WEBPACK_IMPORTED_MODULE_0__.NetworkType.TESTNET : ___WEBPACK_IMPORTED_MODULE_0__.NetworkType.MAINNET,\n        feeRate\n    });\n    console.log(outputs);\n    tx.setEnableRBF(true);\n    outputs.forEach((v)=>{\n        tx.addOutput(v.address, v.value, v.script);\n    });\n    await tx.addSufficientUtxosForFee(btcUtxos, {\n        suitable\n    });\n    const psbt = tx.toPsbt();\n    return psbt;\n}\nasync function generateTransaction(param) {\n    let { utxos, outputs, feeRate, network, address, publicKey, suitable = true } = param;\n    const btcUtxos = (0,_utxo__WEBPACK_IMPORTED_MODULE_1__.convertUtxosToBtcUtxos)({\n        utxos,\n        address,\n        publicKey\n    });\n    const tx = new ___WEBPACK_IMPORTED_MODULE_0__.Transaction({\n        address,\n        network: network == "testnet" ? ___WEBPACK_IMPORTED_MODULE_0__.NetworkType.TESTNET : ___WEBPACK_IMPORTED_MODULE_0__.NetworkType.MAINNET,\n        feeRate\n    });\n    console.log(btcUtxos);\n    tx.setEnableRBF(true);\n    outputs.forEach((v)=>{\n        tx.addOutput(v.address, v.value, v.script);\n    });\n    await tx.addSufficientUtxosForFee(btcUtxos, {\n        suitable\n    });\n    return tx;\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we\'re in a\n        // browser context before continuing.\n        if (typeof self !== \'undefined\' &&\n            // AMP / No-JS mode does not inject these helpers:\n            \'$RefreshHelpers$\' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we\'ll check if it\'s\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we\'ll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it\'s possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2xpYi93YWxsZXQvdXRpbHMudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQTZDO0FBTTdCO0FBQ3FDO0FBQ1o7QUFFbEMsU0FBU00sd0JBQXdCQyxPQUFlO1FBQzdCSDtJQUF4QixNQUFNSSxtQkFBa0JKLG9CQUFBQSxzREFBTUEsQ0FBQ0ssR0FBRyxDQUFDQyxLQUFLLENBQ3RDUCx1REFBT0EsQ0FBQ1EsY0FBYyxDQUFDSix1QkFEREgsd0NBQUFBLGlCQUVyQixDQUFDLEVBQUU7SUFDTixPQUFPSTtBQUNUO0FBRU8sU0FBU0ksaUJBQWlCTCxPQUFPO1FBQUVNLFVBQUFBLGlFQUFVO0lBQ2xELElBQUk7UUFDRixzQkFBc0I7UUFDdEIsTUFBTUMsVUFBVVQsa0RBQWUsQ0FBQ1UsVUFBVSxDQUFDUjtRQUMzQyxNQUFNUyxZQUNKLFFBQVNDLE1BQU0sS0FBSyxRQUFRSixZQUFZLGFBQ3ZDQyxRQUFRRyxNQUFNLEtBQUssUUFBUUosWUFBWTtRQUMxQyxNQUFNSyxhQUFhSixRQUFRSyxPQUFPLEtBQUs7UUFFdkNDLFFBQVFDLEdBQUcsQ0FBQ0w7UUFDWkksUUFBUUMsR0FBRyxDQUFDSDtRQUNaLE9BQU9GLGFBQWFFO0lBQ3RCLEVBQUUsT0FBT0ksR0FBRztRQUNWRixRQUFRRyxLQUFLLENBQUNEO1FBQ2QsT0FBTztJQUNUO0FBQ0Y7QUFFTyxlQUFlRSxlQUFlLEtBZ0JwQztRQWhCb0MsRUFDbkNDLEtBQUssRUFDTEMsT0FBTyxFQUNQQyxPQUFPLEVBQ1BkLE9BQU8sRUFDUE4sT0FBTyxFQUNQcUIsU0FBUyxFQUNUQyxXQUFXLElBQUksRUFTaEIsR0FoQm9DO0lBaUJuQyxNQUFNQyxXQUFXNUIsNkRBQXNCQSxDQUFDO1FBQ3RDdUI7UUFDQWxCO1FBQ0FxQjtJQUNGO0lBQ0EsTUFBTUcsS0FBSyxJQUFJL0IsMENBQVdBLENBQUM7UUFDekJPO1FBQ0FNLFNBQVNBLFdBQVcsWUFBWVosMENBQVdBLENBQUMrQixPQUFPLEdBQUcvQiwwQ0FBV0EsQ0FBQ2dDLE9BQU87UUFDekVOO0lBQ0Y7SUFDQUksR0FBR0csWUFBWSxDQUFDO0lBRWhCUixRQUFRUyxPQUFPLENBQUMsQ0FBQ0M7UUFDZkwsR0FBR00sU0FBUyxDQUFDRCxFQUFFN0IsT0FBTyxFQUFFNkIsRUFBRUUsS0FBSyxFQUFFRixFQUFFRyxNQUFNO0lBQzNDO0lBQ0FuQixRQUFRQyxHQUFHLENBQUNTO0lBQ1osTUFBTUMsR0FBR1Msd0JBQXdCLENBQUNWLFVBQVU7UUFDMUNEO0lBQ0Y7SUFDQSxNQUFNWSxNQUFNLE1BQU1WLEdBQUdXLGFBQWE7SUFDbEMsT0FBT0Q7QUFDVDtBQUVPLGVBQWVFLGlCQUFpQixLQWdCdEM7UUFoQnNDLEVBQ3JDbEIsS0FBSyxFQUNMQyxPQUFPLEVBQ1BDLE9BQU8sRUFDUGQsT0FBTyxFQUNQTixPQUFPLEVBQ1BxQixTQUFTLEVBQ1RDLFdBQVcsSUFBSSxFQVNoQixHQWhCc0M7SUFpQnJDLE1BQU1DLFdBQVc1Qiw2REFBc0JBLENBQUM7UUFDdEN1QjtRQUNBbEI7UUFDQXFCO0lBQ0Y7SUFFQSxNQUFNRyxLQUFLLElBQUkvQiwwQ0FBV0EsQ0FBQztRQUN6Qk87UUFDQU0sU0FBU0EsV0FBVyxZQUFZWiwwQ0FBV0EsQ0FBQytCLE9BQU8sR0FBRy9CLDBDQUFXQSxDQUFDZ0MsT0FBTztRQUN6RU47SUFDRjtJQUNBUCxRQUFRQyxHQUFHLENBQUNLO0lBQ1pLLEdBQUdHLFlBQVksQ0FBQztJQUVoQlIsUUFBUVMsT0FBTyxDQUFDLENBQUNDO1FBQ2ZMLEdBQUdNLFNBQVMsQ0FBQ0QsRUFBRTdCLE9BQU8sRUFBRTZCLEVBQUVFLEtBQUssRUFBRUYsRUFBRUcsTUFBTTtJQUMzQztJQUNBLE1BQU1SLEdBQUdTLHdCQUF3QixDQUFDVixVQUFVO1FBQzFDRDtJQUNGO0lBRUEsTUFBTWUsT0FBT2IsR0FBR2MsTUFBTTtJQUN0QixPQUFPRDtBQUNUO0FBRU8sZUFBZUUsb0JBQW9CLEtBZ0J6QztRQWhCeUMsRUFDeENyQixLQUFLLEVBQ0xDLE9BQU8sRUFDUEMsT0FBTyxFQUNQZCxPQUFPLEVBQ1BOLE9BQU8sRUFDUHFCLFNBQVMsRUFDVEMsV0FBVyxJQUFJLEVBU2hCLEdBaEJ5QztJQWlCeEMsTUFBTUMsV0FBVzVCLDZEQUFzQkEsQ0FBQztRQUN0Q3VCO1FBQ0FsQjtRQUNBcUI7SUFDRjtJQUVBLE1BQU1HLEtBQUssSUFBSS9CLDBDQUFXQSxDQUFDO1FBQ3pCTztRQUNBTSxTQUFTQSxXQUFXLFlBQVlaLDBDQUFXQSxDQUFDK0IsT0FBTyxHQUFHL0IsMENBQVdBLENBQUNnQyxPQUFPO1FBQ3pFTjtJQUNGO0lBQ0FQLFFBQVFDLEdBQUcsQ0FBQ1M7SUFDWkMsR0FBR0csWUFBWSxDQUFDO0lBRWhCUixRQUFRUyxPQUFPLENBQUMsQ0FBQ0M7UUFDZkwsR0FBR00sU0FBUyxDQUFDRCxFQUFFN0IsT0FBTyxFQUFFNkIsRUFBRUUsS0FBSyxFQUFFRixFQUFFRyxNQUFNO0lBQzNDO0lBQ0EsTUFBTVIsR0FBR1Msd0JBQXdCLENBQUNWLFVBQVU7UUFDMUNEO0lBQ0Y7SUFFQSxPQUFPRTtBQUNUIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2xpYi93YWxsZXQvdXRpbHMudHM/MjRmMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUcmFuc2FjdGlvbiwgTmV0d29ya1R5cGUgfSBmcm9tICcuJztcbmltcG9ydCB7IHR5cGUgVXR4bywgVW5zcGVudE91dHB1dCwgUHNidElucHV0LCBQc2J0T3V0cHV0IH0gZnJvbSAnLi91dHhvJztcbmltcG9ydCB7XG4gIGNvbnZlclV0eG9zVG9JbnB1dHMsXG4gIGNvbnZlcnRVdHhvc1RvQnRjVXR4b3MsXG4gIGNvbnZlcnRCdGNVdHhvc1RvSW5wdXRzLFxufSBmcm9tICcuL3V0eG8nO1xuaW1wb3J0IHsgQWRkcmVzcywgU2NyaXB0IH0gZnJvbSAnQGNtZGNvZGUvdGFwc2NyaXB0JztcbmltcG9ydCAqIGFzIGJpdGNvaW4gZnJvbSAnYml0Y29pbmpzLWxpYic7XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRyZXNUb1NjcmlwdFB1YmxpY0tleShhZGRyZXNzOiBzdHJpbmcpIHtcbiAgY29uc3Qgc2NyaXB0UHVibGljS2V5ID0gU2NyaXB0LmZtdC50b0FzbShcbiAgICBBZGRyZXNzLnRvU2NyaXB0UHViS2V5KGFkZHJlc3MpLFxuICApPy5bMF07XG4gIHJldHVybiBzY3JpcHRQdWJsaWNLZXk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1RhcHJvb3RBZGRyZXNzKGFkZHJlc3MsIG5ldHdvcmsgPSAnbWFpbm5ldCcpIHtcbiAgdHJ5IHtcbiAgICAvLyDpgJrov4cgYml0Y29pbmpzLWxpYiDmo4Dmn6VcbiAgICBjb25zdCBkZWNvZGVkID0gYml0Y29pbi5hZGRyZXNzLmZyb21CZWNoMzIoYWRkcmVzcyk7XG4gICAgY29uc3QgaXNCZWNoMzJtID1cbiAgICAgIChkZWNvZGVkLnByZWZpeCA9PT0gJ2JjJyAmJiBuZXR3b3JrICE9PSAndGVzdG5ldCcpIHx8XG4gICAgICAoZGVjb2RlZC5wcmVmaXggPT09ICd0YicgJiYgbmV0d29yayA9PT0gJ3Rlc3RuZXQnKTtcbiAgICBjb25zdCBpc1ZlcnNpb24xID0gZGVjb2RlZC52ZXJzaW9uID09PSAxO1xuXG4gICAgY29uc29sZS5sb2coaXNCZWNoMzJtKTtcbiAgICBjb25zb2xlLmxvZyhpc1ZlcnNpb24xKTtcbiAgICByZXR1cm4gaXNCZWNoMzJtICYmIGlzVmVyc2lvbjE7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY2FsY05ldHdvcmtGZWUoe1xuICB1dHhvcyxcbiAgb3V0cHV0cyxcbiAgZmVlUmF0ZSxcbiAgbmV0d29yayxcbiAgYWRkcmVzcyxcbiAgcHVibGljS2V5LFxuICBzdWl0YWJsZSA9IHRydWUsXG59OiB7XG4gIHV0eG9zOiBVdHhvW107XG4gIG91dHB1dHM6IFBzYnRPdXRwdXRbXTtcbiAgZmVlUmF0ZTogbnVtYmVyO1xuICBuZXR3b3JrOiBzdHJpbmc7XG4gIGFkZHJlc3M6IHN0cmluZztcbiAgcHVibGljS2V5OiBzdHJpbmc7XG4gIHN1aXRhYmxlPzogYm9vbGVhbjtcbn0pIHtcbiAgY29uc3QgYnRjVXR4b3MgPSBjb252ZXJ0VXR4b3NUb0J0Y1V0eG9zKHtcbiAgICB1dHhvcyxcbiAgICBhZGRyZXNzLFxuICAgIHB1YmxpY0tleSxcbiAgfSk7XG4gIGNvbnN0IHR4ID0gbmV3IFRyYW5zYWN0aW9uKHtcbiAgICBhZGRyZXNzLFxuICAgIG5ldHdvcms6IG5ldHdvcmsgPT0gJ3Rlc3RuZXQnID8gTmV0d29ya1R5cGUuVEVTVE5FVCA6IE5ldHdvcmtUeXBlLk1BSU5ORVQsXG4gICAgZmVlUmF0ZSxcbiAgfSk7XG4gIHR4LnNldEVuYWJsZVJCRih0cnVlKTtcblxuICBvdXRwdXRzLmZvckVhY2goKHYpID0+IHtcbiAgICB0eC5hZGRPdXRwdXQodi5hZGRyZXNzLCB2LnZhbHVlLCB2LnNjcmlwdCk7XG4gIH0pO1xuICBjb25zb2xlLmxvZyhidGNVdHhvcyk7XG4gIGF3YWl0IHR4LmFkZFN1ZmZpY2llbnRVdHhvc0ZvckZlZShidGNVdHhvcywge1xuICAgIHN1aXRhYmxlLFxuICB9KTtcbiAgY29uc3QgZmVlID0gYXdhaXQgdHguY2FsTmV0d29ya0ZlZSgpO1xuICByZXR1cm4gZmVlO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYnVpbGRUcmFuc2FjdGlvbih7XG4gIHV0eG9zLFxuICBvdXRwdXRzLFxuICBmZWVSYXRlLFxuICBuZXR3b3JrLFxuICBhZGRyZXNzLFxuICBwdWJsaWNLZXksXG4gIHN1aXRhYmxlID0gdHJ1ZSxcbn06IHtcbiAgdXR4b3M6IFV0eG9bXTtcbiAgb3V0cHV0czogUHNidE91dHB1dFtdO1xuICBmZWVSYXRlOiBudW1iZXI7XG4gIG5ldHdvcms6IHN0cmluZztcbiAgYWRkcmVzczogc3RyaW5nO1xuICBwdWJsaWNLZXk6IHN0cmluZztcbiAgc3VpdGFibGU/OiBib29sZWFuO1xufSkge1xuICBjb25zdCBidGNVdHhvcyA9IGNvbnZlcnRVdHhvc1RvQnRjVXR4b3Moe1xuICAgIHV0eG9zLFxuICAgIGFkZHJlc3MsXG4gICAgcHVibGljS2V5LFxuICB9KTtcblxuICBjb25zdCB0eCA9IG5ldyBUcmFuc2FjdGlvbih7XG4gICAgYWRkcmVzcyxcbiAgICBuZXR3b3JrOiBuZXR3b3JrID09ICd0ZXN0bmV0JyA/IE5ldHdvcmtUeXBlLlRFU1RORVQgOiBOZXR3b3JrVHlwZS5NQUlOTkVULFxuICAgIGZlZVJhdGUsXG4gIH0pO1xuICBjb25zb2xlLmxvZyhvdXRwdXRzKTtcbiAgdHguc2V0RW5hYmxlUkJGKHRydWUpO1xuXG4gIG91dHB1dHMuZm9yRWFjaCgodikgPT4ge1xuICAgIHR4LmFkZE91dHB1dCh2LmFkZHJlc3MsIHYudmFsdWUsIHYuc2NyaXB0KTtcbiAgfSk7XG4gIGF3YWl0IHR4LmFkZFN1ZmZpY2llbnRVdHhvc0ZvckZlZShidGNVdHhvcywge1xuICAgIHN1aXRhYmxlLFxuICB9KTtcblxuICBjb25zdCBwc2J0ID0gdHgudG9Qc2J0KCk7XG4gIHJldHVybiBwc2J0O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2VuZXJhdGVUcmFuc2FjdGlvbih7XG4gIHV0eG9zLFxuICBvdXRwdXRzLFxuICBmZWVSYXRlLFxuICBuZXR3b3JrLFxuICBhZGRyZXNzLFxuICBwdWJsaWNLZXksXG4gIHN1aXRhYmxlID0gdHJ1ZSxcbn06IHtcbiAgdXR4b3M6IFV0eG9bXTtcbiAgb3V0cHV0czogUHNidE91dHB1dFtdO1xuICBmZWVSYXRlOiBudW1iZXI7XG4gIG5ldHdvcms6IHN0cmluZztcbiAgYWRkcmVzczogc3RyaW5nO1xuICBwdWJsaWNLZXk6IHN0cmluZztcbiAgc3VpdGFibGU/OiBib29sZWFuO1xufSkge1xuICBjb25zdCBidGNVdHhvcyA9IGNvbnZlcnRVdHhvc1RvQnRjVXR4b3Moe1xuICAgIHV0eG9zLFxuICAgIGFkZHJlc3MsXG4gICAgcHVibGljS2V5LFxuICB9KTtcblxuICBjb25zdCB0eCA9IG5ldyBUcmFuc2FjdGlvbih7XG4gICAgYWRkcmVzcyxcbiAgICBuZXR3b3JrOiBuZXR3b3JrID09ICd0ZXN0bmV0JyA/IE5ldHdvcmtUeXBlLlRFU1RORVQgOiBOZXR3b3JrVHlwZS5NQUlOTkVULFxuICAgIGZlZVJhdGUsXG4gIH0pO1xuICBjb25zb2xlLmxvZyhidGNVdHhvcyk7XG4gIHR4LnNldEVuYWJsZVJCRih0cnVlKTtcblxuICBvdXRwdXRzLmZvckVhY2goKHYpID0+IHtcbiAgICB0eC5hZGRPdXRwdXQodi5hZGRyZXNzLCB2LnZhbHVlLCB2LnNjcmlwdCk7XG4gIH0pO1xuICBhd2FpdCB0eC5hZGRTdWZmaWNpZW50VXR4b3NGb3JGZWUoYnRjVXR4b3MsIHtcbiAgICBzdWl0YWJsZSxcbiAgfSk7XG5cbiAgcmV0dXJuIHR4O1xufVxuIl0sIm5hbWVzIjpbIlRyYW5zYWN0aW9uIiwiTmV0d29ya1R5cGUiLCJjb252ZXJ0VXR4b3NUb0J0Y1V0eG9zIiwiQWRkcmVzcyIsIlNjcmlwdCIsImJpdGNvaW4iLCJhZGRyZXNUb1NjcmlwdFB1YmxpY0tleSIsImFkZHJlc3MiLCJzY3JpcHRQdWJsaWNLZXkiLCJmbXQiLCJ0b0FzbSIsInRvU2NyaXB0UHViS2V5IiwiaXNUYXByb290QWRkcmVzcyIsIm5ldHdvcmsiLCJkZWNvZGVkIiwiZnJvbUJlY2gzMiIsImlzQmVjaDMybSIsInByZWZpeCIsImlzVmVyc2lvbjEiLCJ2ZXJzaW9uIiwiY29uc29sZSIsImxvZyIsImUiLCJlcnJvciIsImNhbGNOZXR3b3JrRmVlIiwidXR4b3MiLCJvdXRwdXRzIiwiZmVlUmF0ZSIsInB1YmxpY0tleSIsInN1aXRhYmxlIiwiYnRjVXR4b3MiLCJ0eCIsIlRFU1RORVQiLCJNQUlOTkVUIiwic2V0RW5hYmxlUkJGIiwiZm9yRWFjaCIsInYiLCJhZGRPdXRwdXQiLCJ2YWx1ZSIsInNjcmlwdCIsImFkZFN1ZmZpY2llbnRVdHhvc0ZvckZlZSIsImZlZSIsImNhbE5ldHdvcmtGZWUiLCJidWlsZFRyYW5zYWN0aW9uIiwicHNidCIsInRvUHNidCIsImdlbmVyYXRlVHJhbnNhY3Rpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./lib/wallet/utils.ts\n',
        ),
      );

      /***/
    },
});
