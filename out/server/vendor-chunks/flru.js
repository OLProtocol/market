"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/flru";
exports.ids = ["vendor-chunks/flru"];
exports.modules = {

/***/ "(ssr)/./node_modules/flru/dist/flru.mjs":
/*!*****************************************!*\
  !*** ./node_modules/flru/dist/flru.mjs ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(max) {\n\tvar num, curr, prev;\n\tvar limit = max || 1;\n\n\tfunction keep(key, value) {\n\t\tif (++num > limit) {\n\t\t\tprev = curr;\n\t\t\treset(1);\n\t\t\t++num;\n\t\t}\n\t\tcurr[key] = value;\n\t}\n\n\tfunction reset(isPartial) {\n\t\tnum = 0;\n\t\tcurr = Object.create(null);\n\t\tisPartial || (prev=Object.create(null));\n\t}\n\n\treset();\n\n\treturn {\n\t\tclear: reset,\n\t\thas: function (key) {\n\t\t\treturn curr[key] !== void 0 || prev[key] !== void 0;\n\t\t},\n\t\tget: function (key) {\n\t\t\tvar val = curr[key];\n\t\t\tif (val !== void 0) return val;\n\t\t\tif ((val=prev[key]) !== void 0) {\n\t\t\t\tkeep(key, val);\n\t\t\t\treturn val;\n\t\t\t}\n\t\t},\n\t\tset: function (key, value) {\n\t\t\tif (curr[key] !== void 0) {\n\t\t\t\tcurr[key] = value;\n\t\t\t} else {\n\t\t\t\tkeep(key, value);\n\t\t\t}\n\t\t}\n\t};\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvZmxydS9kaXN0L2ZscnUubWpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSw2QkFBZSxvQ0FBVTtBQUN6QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtYXBwLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2ZscnUvZGlzdC9mbHJ1Lm1qcz8yOTc5Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChtYXgpIHtcblx0dmFyIG51bSwgY3VyciwgcHJldjtcblx0dmFyIGxpbWl0ID0gbWF4IHx8IDE7XG5cblx0ZnVuY3Rpb24ga2VlcChrZXksIHZhbHVlKSB7XG5cdFx0aWYgKCsrbnVtID4gbGltaXQpIHtcblx0XHRcdHByZXYgPSBjdXJyO1xuXHRcdFx0cmVzZXQoMSk7XG5cdFx0XHQrK251bTtcblx0XHR9XG5cdFx0Y3VycltrZXldID0gdmFsdWU7XG5cdH1cblxuXHRmdW5jdGlvbiByZXNldChpc1BhcnRpYWwpIHtcblx0XHRudW0gPSAwO1xuXHRcdGN1cnIgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuXHRcdGlzUGFydGlhbCB8fCAocHJldj1PYmplY3QuY3JlYXRlKG51bGwpKTtcblx0fVxuXG5cdHJlc2V0KCk7XG5cblx0cmV0dXJuIHtcblx0XHRjbGVhcjogcmVzZXQsXG5cdFx0aGFzOiBmdW5jdGlvbiAoa2V5KSB7XG5cdFx0XHRyZXR1cm4gY3VycltrZXldICE9PSB2b2lkIDAgfHwgcHJldltrZXldICE9PSB2b2lkIDA7XG5cdFx0fSxcblx0XHRnZXQ6IGZ1bmN0aW9uIChrZXkpIHtcblx0XHRcdHZhciB2YWwgPSBjdXJyW2tleV07XG5cdFx0XHRpZiAodmFsICE9PSB2b2lkIDApIHJldHVybiB2YWw7XG5cdFx0XHRpZiAoKHZhbD1wcmV2W2tleV0pICE9PSB2b2lkIDApIHtcblx0XHRcdFx0a2VlcChrZXksIHZhbCk7XG5cdFx0XHRcdHJldHVybiB2YWw7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRzZXQ6IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG5cdFx0XHRpZiAoY3VycltrZXldICE9PSB2b2lkIDApIHtcblx0XHRcdFx0Y3VycltrZXldID0gdmFsdWU7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRrZWVwKGtleSwgdmFsdWUpO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/flru/dist/flru.mjs\n");

/***/ })

};
;