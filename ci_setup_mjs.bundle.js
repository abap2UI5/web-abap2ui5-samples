(self["webpackChunkabap2ui5"] = self["webpackChunkabap2ui5"] || []).push([["ci_setup_mjs"],{

/***/ "?ce59":
/*!*********************************!*\
  !*** process/browser (ignored) ***!
  \*********************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?8893":
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?5041":
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?5bfe":
/*!*********************************!*\
  !*** process/browser (ignored) ***!
  \*********************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "./ci/setup.mjs":
/*!**********************!*\
  !*** ./ci/setup.mjs ***!
  \**********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setup: () => (/* binding */ setup)
/* harmony export */ });
/* harmony import */ var _abaplint_database_sqlite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @abaplint/database-sqlite */ "./node_modules/@abaplint/database-sqlite/build/index.js");


async function setup(abap, schemas, insert) {
  abap.context.databaseConnections["DEFAULT"] = new _abaplint_database_sqlite__WEBPACK_IMPORTED_MODULE_0__.SQLiteDatabaseClient();
  await abap.context.databaseConnections["DEFAULT"].connect();
  await abap.context.databaseConnections["DEFAULT"].execute(schemas.sqlite);
  await abap.context.databaseConnections["DEFAULT"].execute(insert);
}

/***/ })

}]);
//# sourceMappingURL=ci_setup_mjs.bundle.js.map