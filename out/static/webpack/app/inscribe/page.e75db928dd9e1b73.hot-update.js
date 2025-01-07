"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/inscribe/page",{

/***/ "(app-pages-browser)/./lib/inscribe/rune.ts":
/*!******************************!*\
  !*** ./lib/inscribe/rune.ts ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   etchRune: function() { return /* binding */ etchRune; },\n/* harmony export */   mintRune: function() { return /* binding */ mintRune; }\n/* harmony export */ });\n/* harmony import */ var _lib_inscribe_WIFWallet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/inscribe/WIFWallet */ \"(app-pages-browser)/./lib/inscribe/WIFWallet.ts\");\n/* harmony import */ var radash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! radash */ \"(app-pages-browser)/./node_modules/radash/dist/esm/async.mjs\");\n/* harmony import */ var _lib_wallet_bitcoin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/wallet/bitcoin */ \"(app-pages-browser)/./lib/wallet/bitcoin.ts\");\n/* harmony import */ var _lib_wallet_network__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/wallet/network */ \"(app-pages-browser)/./lib/wallet/network.ts\");\n/* harmony import */ var _sat20_btc_connect_dist_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @sat20/btc-connect/dist/react */ \"(app-pages-browser)/./node_modules/@sat20/btc-connect/dist/react.js\");\n/* provided dependency */ var Buffer = __webpack_require__(/*! buffer */ \"(app-pages-browser)/./node_modules/buffer/index.js\")[\"Buffer\"];\n\n\n\n\n\nasync function mintRune(param) {\n    let { secret, network, opReturnScript, files, toAddress, feeRate, utxo } = param;\n    console.log(\"mintRune\", secret, network, opReturnScript, files, toAddress, feeRate, utxo);\n    const wallet = new _lib_inscribe_WIFWallet__WEBPACK_IMPORTED_MODULE_0__.WIFWallet({\n        network,\n        privateKey: secret\n    });\n    const fee = Math.ceil(130 * feeRate);\n    const btcNetwork = (0,_lib_wallet_network__WEBPACK_IMPORTED_MODULE_2__.toPsbtNetwork)(network === \"testnet\" ? _lib_wallet_network__WEBPACK_IMPORTED_MODULE_2__.NetworkType.TESTNET : _lib_wallet_network__WEBPACK_IMPORTED_MODULE_2__.NetworkType.MAINNET);\n    const txHexs = [];\n    const createPsbt = (inputUtxo, outputAddress, outputValue)=>{\n        const psbt = new _lib_wallet_bitcoin__WEBPACK_IMPORTED_MODULE_1__.bitcoin.Psbt({\n            network: btcNetwork\n        });\n        psbt.addInput({\n            hash: inputUtxo.txid,\n            index: inputUtxo.vout,\n            witnessUtxo: {\n                value: inputUtxo.value,\n                script: wallet.output\n            },\n            tapInternalKey: (0,_lib_inscribe_WIFWallet__WEBPACK_IMPORTED_MODULE_0__.toXOnly)(wallet.ecPair.publicKey)\n        });\n        psbt.addOutput({\n            script: Buffer.from(opReturnScript, \"hex\"),\n            value: 0\n        });\n        if (outputValue > 0) {\n            psbt.addOutput({\n                address: outputAddress,\n                value: outputValue\n            });\n        }\n        return psbt;\n    };\n    if (files.length < 3) {\n        const psbt = createPsbt(utxo, toAddress, 330);\n        const signedPsbt = wallet.signPsbt(psbt);\n        console.log(\"signedPsbt\", signedPsbt);\n        const tx = signedPsbt.extractTransaction();\n        txHexs.push({\n            psbtHex: signedPsbt.toHex(),\n            hex: tx.toHex(),\n            id: tx.getId()\n        });\n    } else {\n        let parentUtxo = utxo;\n        console.log(\"parentUtxo\", parentUtxo);\n        for(let i = 0; i < files.length - 1; i++){\n            const psbt = createPsbt(parentUtxo, toAddress, 0);\n            const balance = parentUtxo.value - fee;\n            if (i < files.length - 2) {\n                psbt.addOutput({\n                    address: wallet.address,\n                    value: balance\n                });\n            } else {\n                psbt.addOutput({\n                    address: toAddress,\n                    value: 330\n                });\n            }\n            const signedPsbt = wallet.signPsbt(psbt);\n            console.log(\"signedPsbt\", signedPsbt);\n            const tx = signedPsbt.extractTransaction();\n            parentUtxo = {\n                txid: tx.getId(),\n                vout: 1,\n                value: balance\n            };\n            txHexs.push({\n                psbtHex: signedPsbt.toHex(),\n                hex: tx.toHex(),\n                id: tx.getId()\n            });\n        }\n    }\n    const { btcWallet } = _sat20_btc_connect_dist_react__WEBPACK_IMPORTED_MODULE_3__.useReactWalletStore.getState();\n    if (!btcWallet) throw new Error(\"No wallet connected\");\n    const txids = [];\n    for(let i = 0; i < txHexs.length; i++){\n        const { psbtHex } = txHexs[i];\n        let txid;\n        try {\n            txid = await btcWallet.pushPsbt(psbtHex);\n        } catch (error) {\n            if (error.code !== -32603) {\n                throw error;\n            }\n        }\n        if (txid) {\n            try {\n                txids.push(JSON.parse(txid));\n            } catch (error) {\n                txids.push(txid);\n            }\n        }\n        await (0,radash__WEBPACK_IMPORTED_MODULE_4__.sleep)(3000);\n    }\n    return txids[txids.length - 1];\n}\nasync function etchRune(param) {\n    let { secret, network, opReturnScript, files, inscription, toAddress, feeRate, utxo } = param;\n    console.log(\"etchRune\", secret, network, opReturnScript, files, toAddress, feeRate, utxo, inscription);\n    const wallet = new _lib_inscribe_WIFWallet__WEBPACK_IMPORTED_MODULE_0__.WIFWallet({\n        network,\n        privateKey: secret\n    });\n    const btcNetwork = (0,_lib_wallet_network__WEBPACK_IMPORTED_MODULE_2__.toPsbtNetwork)(network === \"testnet\" ? _lib_wallet_network__WEBPACK_IMPORTED_MODULE_2__.NetworkType.TESTNET : _lib_wallet_network__WEBPACK_IMPORTED_MODULE_2__.NetworkType.MAINNET);\n    const psbt = new _lib_wallet_bitcoin__WEBPACK_IMPORTED_MODULE_1__.bitcoin.Psbt({\n        network: btcNetwork\n    });\n    psbt.addInput({\n        hash: utxo.txid,\n        index: 0,\n        witnessUtxo: {\n            value: utxo.value,\n            script: Buffer.from(inscription.p2tr_script, \"hex\")\n        },\n        tapLeafScript: [\n            {\n                leafVersion: inscription.redeemVersion,\n                script: Buffer.from(inscription.script, \"hex\"),\n                controlBlock: Buffer.from(inscription.cb, \"hex\")\n            }\n        ]\n    });\n    psbt.addOutput({\n        script: Buffer.from(opReturnScript, \"hex\"),\n        value: 0\n    });\n    psbt.addOutput({\n        address: toAddress,\n        value: 330\n    });\n    console.log(\"psbt\", psbt);\n    psbt.signInput(0, wallet.ecPair);\n    psbt.finalizeAllInputs();\n    // const signedPsbt = wallet.signPsbt(psbt);\n    const { btcWallet } = _sat20_btc_connect_dist_react__WEBPACK_IMPORTED_MODULE_3__.useReactWalletStore.getState();\n    if (!btcWallet) throw new Error(\"No wallet connected\");\n    const txids = [];\n    const txid = await btcWallet.pushPsbt(psbt.toHex());\n    return txid;\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2xpYi9pbnNjcmliZS9ydW5lLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQThEO0FBQy9CO0FBQ2dCO0FBQ21CO0FBQ0U7QUFZN0QsZUFBZU8sU0FBUyxLQVFkO1FBUmMsRUFDN0JDLE1BQU0sRUFDTkMsT0FBTyxFQUNQQyxjQUFjLEVBQ2RDLEtBQUssRUFDTEMsU0FBUyxFQUNUQyxPQUFPLEVBQ1BDLElBQUksRUFDVyxHQVJjO0lBUzdCQyxRQUFRQyxHQUFHLENBQ1QsWUFDQVIsUUFDQUMsU0FDQUMsZ0JBQ0FDLE9BQ0FDLFdBQ0FDLFNBQ0FDO0lBR0YsTUFBTUcsU0FBUyxJQUFJakIsOERBQVNBLENBQUM7UUFBRVM7UUFBU1MsWUFBWVY7SUFBTztJQUMzRCxNQUFNVyxNQUFNQyxLQUFLQyxJQUFJLENBQUMsTUFBTVI7SUFDNUIsTUFBTVMsYUFBYWxCLGtFQUFhQSxDQUM5QkssWUFBWSxZQUFZSiw0REFBV0EsQ0FBQ2tCLE9BQU8sR0FBR2xCLDREQUFXQSxDQUFDbUIsT0FBTztJQUVuRSxNQUFNQyxTQUF5RCxFQUFFO0lBRWpFLE1BQU1DLGFBQWEsQ0FDakJDLFdBQ0FDLGVBQ0FDO1FBRUEsTUFBTUMsT0FBTyxJQUFJM0Isd0RBQU9BLENBQUM0QixJQUFJLENBQUM7WUFBRXRCLFNBQVNhO1FBQVc7UUFDcERRLEtBQUtFLFFBQVEsQ0FBQztZQUNaQyxNQUFNTixVQUFVTyxJQUFJO1lBQ3BCQyxPQUFPUixVQUFVUyxJQUFJO1lBQ3JCQyxhQUFhO2dCQUFFQyxPQUFPWCxVQUFVVyxLQUFLO2dCQUFFQyxRQUFRdEIsT0FBT3VCLE1BQU07WUFBRTtZQUM5REMsZ0JBQWdCeEMsZ0VBQU9BLENBQUNnQixPQUFPeUIsTUFBTSxDQUFDQyxTQUFTO1FBQ2pEO1FBQ0FiLEtBQUtjLFNBQVMsQ0FBQztZQUFFTCxRQUFRTSxNQUFNQSxDQUFDQyxJQUFJLENBQUNwQyxnQkFBZ0I7WUFBUTRCLE9BQU87UUFBRTtRQUN0RSxJQUFJVCxj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TS9CLE9BQU8sTUFBTTRCLFVBQVVJLFFBQVEsQ0FBQ3BDLEtBQUt5QixLQUFLO0lBQ2hELE9BQU9yQjtBQUNUIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2xpYi9pbnNjcmliZS9ydW5lLnRzPzBkMWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgV0lGV2FsbGV0LCB0b1hPbmx5IH0gZnJvbSAnQC9saWIvaW5zY3JpYmUvV0lGV2FsbGV0JztcbmltcG9ydCB7IHNsZWVwIH0gZnJvbSAncmFkYXNoJztcbmltcG9ydCB7IGJpdGNvaW4gfSBmcm9tICdAL2xpYi93YWxsZXQvYml0Y29pbic7XG5pbXBvcnQgeyB0b1BzYnROZXR3b3JrLCBOZXR3b3JrVHlwZSB9IGZyb20gJ0AvbGliL3dhbGxldC9uZXR3b3JrJztcbmltcG9ydCB7IHVzZVJlYWN0V2FsbGV0U3RvcmUgfSBmcm9tICdAc2F0MjAvYnRjLWNvbm5lY3QvZGlzdC9yZWFjdCc7XG5cbmludGVyZmFjZSBNaW50UnVuZVBhcmFtcyB7XG4gIHNlY3JldDogc3RyaW5nO1xuICBuZXR3b3JrOiBzdHJpbmc7XG4gIG9wUmV0dXJuU2NyaXB0OiBzdHJpbmc7XG4gIGZpbGVzOiBhbnlbXTtcbiAgdG9BZGRyZXNzOiBzdHJpbmc7XG4gIGZlZVJhdGU6IG51bWJlcjtcbiAgdXR4bzogeyB0eGlkOiBzdHJpbmc7IHZvdXQ6IG51bWJlcjsgdmFsdWU6IG51bWJlciB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbWludFJ1bmUoe1xuICBzZWNyZXQsXG4gIG5ldHdvcmssXG4gIG9wUmV0dXJuU2NyaXB0LFxuICBmaWxlcyxcbiAgdG9BZGRyZXNzLFxuICBmZWVSYXRlLFxuICB1dHhvLFxufTogTWludFJ1bmVQYXJhbXMpOiBQcm9taXNlPHN0cmluZyB8IHVuZGVmaW5lZD4ge1xuICBjb25zb2xlLmxvZyhcbiAgICAnbWludFJ1bmUnLFxuICAgIHNlY3JldCxcbiAgICBuZXR3b3JrLFxuICAgIG9wUmV0dXJuU2NyaXB0LFxuICAgIGZpbGVzLFxuICAgIHRvQWRkcmVzcyxcbiAgICBmZWVSYXRlLFxuICAgIHV0eG8sXG4gICk7XG5cbiAgY29uc3Qgd2FsbGV0ID0gbmV3IFdJRldhbGxldCh7IG5ldHdvcmssIHByaXZhdGVLZXk6IHNlY3JldCB9KTtcbiAgY29uc3QgZmVlID0gTWF0aC5jZWlsKDEzMCAqIGZlZVJhdGUpO1xuICBjb25zdCBidGNOZXR3b3JrID0gdG9Qc2J0TmV0d29yayhcbiAgICBuZXR3b3JrID09PSAndGVzdG5ldCcgPyBOZXR3b3JrVHlwZS5URVNUTkVUIDogTmV0d29ya1R5cGUuTUFJTk5FVCxcbiAgKTtcbiAgY29uc3QgdHhIZXhzOiB7IHBzYnRIZXg6IHN0cmluZzsgaGV4OiBzdHJpbmc7IGlkOiBzdHJpbmcgfVtdID0gW107XG5cbiAgY29uc3QgY3JlYXRlUHNidCA9IChcbiAgICBpbnB1dFV0eG86IHR5cGVvZiB1dHhvLFxuICAgIG91dHB1dEFkZHJlc3M6IHN0cmluZyxcbiAgICBvdXRwdXRWYWx1ZTogbnVtYmVyLFxuICApID0+IHtcbiAgICBjb25zdCBwc2J0ID0gbmV3IGJpdGNvaW4uUHNidCh7IG5ldHdvcms6IGJ0Y05ldHdvcmsgfSk7XG4gICAgcHNidC5hZGRJbnB1dCh7XG4gICAgICBoYXNoOiBpbnB1dFV0eG8udHhpZCxcbiAgICAgIGluZGV4OiBpbnB1dFV0eG8udm91dCxcbiAgICAgIHdpdG5lc3NVdHhvOiB7IHZhbHVlOiBpbnB1dFV0eG8udmFsdWUsIHNjcmlwdDogd2FsbGV0Lm91dHB1dCEgfSxcbiAgICAgIHRhcEludGVybmFsS2V5OiB0b1hPbmx5KHdhbGxldC5lY1BhaXIucHVibGljS2V5IGFzIEJ1ZmZlciksXG4gICAgfSBhcyBhbnkpO1xuICAgIHBzYnQuYWRkT3V0cHV0KHsgc2NyaXB0OiBCdWZmZXIuZnJvbShvcFJldHVyblNjcmlwdCwgJ2hleCcpLCB2YWx1ZTogMCB9KTtcbiAgICBpZiAob3V0cHV0VmFsdWUgPiAwKSB7XG4gICAgICBwc2J0LmFkZE91dHB1dCh7IGFkZHJlc3M6IG91dHB1dEFkZHJlc3MsIHZhbHVlOiBvdXRwdXRWYWx1ZSB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHBzYnQ7XG4gIH07XG5cbiAgaWYgKGZpbGVzLmxlbmd0aCA8IDMpIHtcbiAgICBjb25zdCBwc2J0ID0gY3JlYXRlUHNidCh1dHhvLCB0b0FkZHJlc3MsIDMzMCk7XG4gICAgY29uc3Qgc2lnbmVkUHNidCA9IHdhbGxldC5zaWduUHNidChwc2J0KTtcbiAgICBjb25zb2xlLmxvZygnc2lnbmVkUHNidCcsIHNpZ25lZFBzYnQpO1xuXG4gICAgY29uc3QgdHggPSBzaWduZWRQc2J0LmV4dHJhY3RUcmFuc2FjdGlvbigpO1xuICAgIHR4SGV4cy5wdXNoKHtcbiAgICAgIHBzYnRIZXg6IHNpZ25lZFBzYnQudG9IZXgoKSxcbiAgICAgIGhleDogdHgudG9IZXgoKSxcbiAgICAgIGlkOiB0eC5nZXRJZCgpLFxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIGxldCBwYXJlbnRVdHhvID0gdXR4bztcbiAgICBjb25zb2xlLmxvZygncGFyZW50VXR4bycsIHBhcmVudFV0eG8pO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmaWxlcy5sZW5ndGggLSAxOyBpKyspIHtcbiAgICAgIGNvbnN0IHBzYnQgPSBjcmVhdGVQc2J0KHBhcmVudFV0eG8sIHRvQWRkcmVzcywgMCk7XG4gICAgICBjb25zdCBiYWxhbmNlID0gcGFyZW50VXR4by52YWx1ZSAtIGZlZTtcbiAgICAgIGlmIChpIDwgZmlsZXMubGVuZ3RoIC0gMikge1xuICAgICAgICBwc2J0LmFkZE91dHB1dCh7IGFkZHJlc3M6IHdhbGxldC5hZGRyZXNzLCB2YWx1ZTogYmFsYW5jZSB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBzYnQuYWRkT3V0cHV0KHsgYWRkcmVzczogdG9BZGRyZXNzLCB2YWx1ZTogMzMwIH0pO1xuICAgICAgfVxuICAgICAgY29uc3Qgc2lnbmVkUHNidCA9IHdhbGxldC5zaWduUHNidChwc2J0KTtcbiAgICAgIGNvbnNvbGUubG9nKCdzaWduZWRQc2J0Jywgc2lnbmVkUHNidCk7XG5cbiAgICAgIGNvbnN0IHR4ID0gc2lnbmVkUHNidC5leHRyYWN0VHJhbnNhY3Rpb24oKTtcbiAgICAgIHBhcmVudFV0eG8gPSB7IHR4aWQ6IHR4LmdldElkKCksIHZvdXQ6IDEsIHZhbHVlOiBiYWxhbmNlIH07XG4gICAgICB0eEhleHMucHVzaCh7XG4gICAgICAgIHBzYnRIZXg6IHNpZ25lZFBzYnQudG9IZXgoKSxcbiAgICAgICAgaGV4OiB0eC50b0hleCgpLFxuICAgICAgICBpZDogdHguZ2V0SWQoKSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHsgYnRjV2FsbGV0IH0gPSB1c2VSZWFjdFdhbGxldFN0b3JlLmdldFN0YXRlKCk7XG4gIGlmICghYnRjV2FsbGV0KSB0aHJvdyBuZXcgRXJyb3IoJ05vIHdhbGxldCBjb25uZWN0ZWQnKTtcbiAgY29uc3QgdHhpZHM6IGFueSA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHR4SGV4cy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IHsgcHNidEhleCB9ID0gdHhIZXhzW2ldO1xuICAgIGxldCB0eGlkO1xuICAgIHRyeSB7XG4gICAgICB0eGlkID0gYXdhaXQgYnRjV2FsbGV0LnB1c2hQc2J0KHBzYnRIZXgpO1xuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICAgIGlmIChlcnJvci5jb2RlICE9PSAtMzI2MDMpIHtcbiAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0eGlkKSB7XG4gICAgICB0cnkge1xuICAgICAgICB0eGlkcy5wdXNoKEpTT04ucGFyc2UodHhpZCkpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgdHhpZHMucHVzaCh0eGlkKTtcbiAgICAgIH1cbiAgICB9XG4gICAgYXdhaXQgc2xlZXAoMzAwMCk7XG4gIH1cbiAgcmV0dXJuIHR4aWRzW3R4aWRzLmxlbmd0aCAtIDFdO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZXRjaFJ1bmUoe1xuICBzZWNyZXQsXG4gIG5ldHdvcmssXG4gIG9wUmV0dXJuU2NyaXB0LFxuICBmaWxlcyxcbiAgaW5zY3JpcHRpb24sXG4gIHRvQWRkcmVzcyxcbiAgZmVlUmF0ZSxcbiAgdXR4byxcbn06IGFueSk6IFByb21pc2U8c3RyaW5nIHwgdW5kZWZpbmVkPiB7XG4gIGNvbnNvbGUubG9nKFxuICAgICdldGNoUnVuZScsXG4gICAgc2VjcmV0LFxuICAgIG5ldHdvcmssXG4gICAgb3BSZXR1cm5TY3JpcHQsXG4gICAgZmlsZXMsXG4gICAgdG9BZGRyZXNzLFxuICAgIGZlZVJhdGUsXG4gICAgdXR4byxcbiAgICBpbnNjcmlwdGlvbixcbiAgKTtcblxuICBjb25zdCB3YWxsZXQgPSBuZXcgV0lGV2FsbGV0KHsgbmV0d29yaywgcHJpdmF0ZUtleTogc2VjcmV0IH0pO1xuICBjb25zdCBidGNOZXR3b3JrID0gdG9Qc2J0TmV0d29yayhcbiAgICBuZXR3b3JrID09PSAndGVzdG5ldCcgPyBOZXR3b3JrVHlwZS5URVNUTkVUIDogTmV0d29ya1R5cGUuTUFJTk5FVCxcbiAgKTtcbiAgXG4gIGNvbnN0IHBzYnQgPSBuZXcgYml0Y29pbi5Qc2J0KHsgbmV0d29yazogYnRjTmV0d29yayB9KTtcbiAgcHNidC5hZGRJbnB1dCh7XG4gICAgaGFzaDogdXR4by50eGlkLFxuICAgIGluZGV4OiAwLFxuICAgIHdpdG5lc3NVdHhvOiB7IHZhbHVlOiB1dHhvLnZhbHVlLCBzY3JpcHQ6IEJ1ZmZlci5mcm9tKGluc2NyaXB0aW9uLnAydHJfc2NyaXB0LCAnaGV4JykgfSxcbiAgICB0YXBMZWFmU2NyaXB0OiBbXG4gICAgICB7XG4gICAgICAgIGxlYWZWZXJzaW9uOiBpbnNjcmlwdGlvbi5yZWRlZW1WZXJzaW9uLFxuICAgICAgICBzY3JpcHQ6IEJ1ZmZlci5mcm9tKGluc2NyaXB0aW9uLnNjcmlwdCwgJ2hleCcpLFxuICAgICAgICBjb250cm9sQmxvY2s6IEJ1ZmZlci5mcm9tKGluc2NyaXB0aW9uLmNiLCAnaGV4JyksXG4gICAgICB9LFxuICAgIF0sXG4gIH0gYXMgYW55KTtcbiAgXG4gIHBzYnQuYWRkT3V0cHV0KHsgc2NyaXB0OiBCdWZmZXIuZnJvbShvcFJldHVyblNjcmlwdCwgJ2hleCcpLCB2YWx1ZTogMCB9KTtcbiAgcHNidC5hZGRPdXRwdXQoeyBhZGRyZXNzOiB0b0FkZHJlc3MsIHZhbHVlOiAzMzAgfSk7XG4gIGNvbnNvbGUubG9nKCdwc2J0JywgcHNidCk7XG4gIHBzYnQuc2lnbklucHV0KDAsIHdhbGxldC5lY1BhaXIpO1xuICBwc2J0LmZpbmFsaXplQWxsSW5wdXRzKCk7XG4gIC8vIGNvbnN0IHNpZ25lZFBzYnQgPSB3YWxsZXQuc2lnblBzYnQocHNidCk7XG4gIGNvbnN0IHsgYnRjV2FsbGV0IH0gPSB1c2VSZWFjdFdhbGxldFN0b3JlLmdldFN0YXRlKCk7XG4gIGlmICghYnRjV2FsbGV0KSB0aHJvdyBuZXcgRXJyb3IoJ05vIHdhbGxldCBjb25uZWN0ZWQnKTtcbiAgY29uc3QgdHhpZHM6IGFueSA9IFtdO1xuICBjb25zdCB0eGlkID0gYXdhaXQgYnRjV2FsbGV0LnB1c2hQc2J0KHBzYnQudG9IZXgoKSk7XG4gIHJldHVybiB0eGlkO1xufVxuIl0sIm5hbWVzIjpbIldJRldhbGxldCIsInRvWE9ubHkiLCJzbGVlcCIsImJpdGNvaW4iLCJ0b1BzYnROZXR3b3JrIiwiTmV0d29ya1R5cGUiLCJ1c2VSZWFjdFdhbGxldFN0b3JlIiwibWludFJ1bmUiLCJzZWNyZXQiLCJuZXR3b3JrIiwib3BSZXR1cm5TY3JpcHQiLCJmaWxlcyIsInRvQWRkcmVzcyIsImZlZVJhdGUiLCJ1dHhvIiwiY29uc29sZSIsImxvZyIsIndhbGxldCIsInByaXZhdGVLZXkiLCJmZWUiLCJNYXRoIiwiY2VpbCIsImJ0Y05ldHdvcmsiLCJURVNUTkVUIiwiTUFJTk5FVCIsInR4SGV4cyIsImNyZWF0ZVBzYnQiLCJpbnB1dFV0eG8iLCJvdXRwdXRBZGRyZXNzIiwib3V0cHV0VmFsdWUiLCJwc2J0IiwiUHNidCIsImFkZElucHV0IiwiaGFzaCIsInR4aWQiLCJpbmRleCIsInZvdXQiLCJ3aXRuZXNzVXR4byIsInZhbHVlIiwic2NyaXB0Iiwib3V0cHV0IiwidGFwSW50ZXJuYWxLZXkiLCJlY1BhaXIiLCJwdWJsaWNLZXkiLCJhZGRPdXRwdXQiLCJCdWZmZXIiLCJmcm9tIiwiYWRkcmVzcyIsImxlbmd0aCIsInNpZ25lZFBzYnQiLCJzaWduUHNidCIsInR4IiwiZXh0cmFjdFRyYW5zYWN0aW9uIiwicHVzaCIsInBzYnRIZXgiLCJ0b0hleCIsImhleCIsImlkIiwiZ2V0SWQiLCJwYXJlbnRVdHhvIiwiaSIsImJhbGFuY2UiLCJidGNXYWxsZXQiLCJnZXRTdGF0ZSIsIkVycm9yIiwidHhpZHMiLCJwdXNoUHNidCIsImVycm9yIiwiY29kZSIsIkpTT04iLCJwYXJzZSIsImV0Y2hSdW5lIiwiaW5zY3JpcHRpb24iLCJwMnRyX3NjcmlwdCIsInRhcExlYWZTY3JpcHQiLCJsZWFmVmVyc2lvbiIsInJlZGVlbVZlcnNpb24iLCJjb250cm9sQmxvY2siLCJjYiIsInNpZ25JbnB1dCIsImZpbmFsaXplQWxsSW5wdXRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./lib/inscribe/rune.ts\n"));

/***/ })

});