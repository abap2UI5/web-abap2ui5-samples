"use strict";
(self["webpackChunkabap2ui5"] = self["webpackChunkabap2ui5"] || []).push([["output_z2ui5_cl_demo_app_137_clas_locals_mjs"],{

/***/ "./output/z2ui5_cl_demo_app_137.clas.locals.mjs":
/*!******************************************************!*\
  !*** ./output/z2ui5_cl_demo_app_137.clas.locals.mjs ***!
  \******************************************************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   lcl_static_container: () => (/* binding */ lcl_static_container)
/* harmony export */ });
const {cx_root} = await Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./cx_root.clas.mjs */ "./output/cx_root.clas.mjs"));
// z2ui5_cl_demo_app_137.clas.locals_imp.abap
class lcl_static_container {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'CLAS-Z2UI5_CL_DEMO_APP_137-LCL_STATIC_CONTAINER';
  static IMPLEMENTED_INTERFACES = [];
  static ATTRIBUTES = {"COUNTER": {"type": () => {return new abap.types.Integer({qualifiedName: "I"});}, "visibility": "U", "is_constant": " ", "is_class": "X"}};
  static METHODS = {"INCREMENT": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return new abap.types.Integer({qualifiedName: "I"});}, "is_optional": " "}}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.INTERNAL_ID = abap.internalIdCounter++;
    this.FRIENDS_ACCESS_INSTANCE = {
    };
    this.counter = lcl_static_container.counter;
  }
  async constructor_(INPUT) {
    if (super.constructor_) { await super.constructor_(INPUT); }
    return this;
  }
  async increment() {
    return lcl_static_container.increment();
  }
  static async increment() {
    let result = new abap.types.Integer({qualifiedName: "I"});
    lcl_static_container.counter.set(abap.operators.add(lcl_static_container.counter,abap.IntegerFactory.get(1)));
    result.set(lcl_static_container.counter);
    return result;
  }
}
abap.Classes['CLAS-Z2UI5_CL_DEMO_APP_137-LCL_STATIC_CONTAINER'] = lcl_static_container;
lcl_static_container.counter = new abap.types.Integer({qualifiedName: "I"});

//# sourceMappingURL=z2ui5_cl_demo_app_137.clas.locals.mjs.map
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

/***/ })

}]);
//# sourceMappingURL=output_z2ui5_cl_demo_app_137_clas_locals_mjs.bundle.js.map