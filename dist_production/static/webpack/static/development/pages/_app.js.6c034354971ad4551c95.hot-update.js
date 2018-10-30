webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./pages/widgets/layout/index.js":
/*!***************************************!*\
  !*** ./pages/widgets/layout/index.js ***!
  \***************************************/
/*! exports provided: BaseLayout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _BaseLayout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseLayout */ "./pages/widgets/layout/BaseLayout.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseLayout", function() { return _BaseLayout__WEBPACK_IMPORTED_MODULE_0__["default"]; });



    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/widgets\\layout\\index")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/_webpack@4.20.2@webpack/buildin/harmony-module.js */ "./node_modules/_webpack@4.20.2@webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=_app.js.6c034354971ad4551c95.hot-update.js.map