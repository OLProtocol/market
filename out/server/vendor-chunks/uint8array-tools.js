'use strict';
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = 'vendor-chunks/uint8array-tools';
exports.ids = ['vendor-chunks/uint8array-tools'];
exports.modules = {
  /***/ '(ssr)/./node_modules/uint8array-tools/src/mjs/index.js':
    /*!********************************************************!*\
  !*** ./node_modules/uint8array-tools/src/mjs/index.js ***!
  \********************************************************/
    /***/ (
      __unused_webpack___webpack_module__,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      eval(
        '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   compare: () => (/* binding */ compare),\n/* harmony export */   fromHex: () => (/* binding */ fromHex),\n/* harmony export */   toHex: () => (/* binding */ toHex)\n/* harmony export */ });\nfunction toHex(bytes) {\n    return Buffer.from(bytes || []).toString("hex");\n}\nfunction fromHex(hexString) {\n    return Uint8Array.from(Buffer.from(hexString || "", "hex"));\n}\nfunction compare(v1, v2) {\n    return Buffer.from(v1).compare(Buffer.from(v2));\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdWludDhhcnJheS10b29scy9zcmMvbWpzL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFPO0FBQ1A7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNPO0FBQ1A7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtYXBwLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3VpbnQ4YXJyYXktdG9vbHMvc3JjL21qcy9pbmRleC5qcz8zYWFiIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiB0b0hleChieXRlcykge1xuICAgIHJldHVybiBCdWZmZXIuZnJvbShieXRlcyB8fCBbXSkudG9TdHJpbmcoXCJoZXhcIik7XG59XG5leHBvcnQgZnVuY3Rpb24gZnJvbUhleChoZXhTdHJpbmcpIHtcbiAgICByZXR1cm4gVWludDhBcnJheS5mcm9tKEJ1ZmZlci5mcm9tKGhleFN0cmluZyB8fCBcIlwiLCBcImhleFwiKSk7XG59XG5leHBvcnQgZnVuY3Rpb24gY29tcGFyZSh2MSwgdjIpIHtcbiAgICByZXR1cm4gQnVmZmVyLmZyb20odjEpLmNvbXBhcmUoQnVmZmVyLmZyb20odjIpKTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/uint8array-tools/src/mjs/index.js\n',
      );

      /***/
    },
};
