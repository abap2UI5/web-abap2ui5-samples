"use strict";
(self["webpackChunkabap2ui5_web"] = self["webpackChunkabap2ui5_web"] || []).push([["output_z2ui5_cl_stmpncfctn_api_clas_locals_mjs"],{

/***/ "./output/z2ui5_cl_stmpncfctn_api.clas.locals.mjs":
/*!********************************************************!*\
  !*** ./output/z2ui5_cl_stmpncfctn_api.clas.locals.mjs ***!
  \********************************************************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   lcl_rfc_bapi: () => (/* binding */ lcl_rfc_bapi)
/* harmony export */ });
const {cx_root} = await Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./cx_root.clas.mjs */ "./output/cx_root.clas.mjs"));
// z2ui5_cl_stmpncfctn_api.clas.locals_imp.abap
class lcl_rfc_bapi {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'CLAS-Z2UI5_CL_STMPNCFCTN_API-LCL_RFC_BAPI';
  static IMPLEMENTED_INTERFACES = [];
  static ATTRIBUTES = {"MV_DESTINATION": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "O", "is_constant": " ", "is_class": " "}};
  static METHODS = {"FACTORY_RFC_DESTINATION": {"visibility": "U", "parameters": {"R_RESULT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "LCL_RFC_BAPI", RTTIName: "\\CLASS-POOL=Z2UI5_CL_STMPNCFCTN_API\\CLASS=LCL_RFC_BAPI"});}, "is_optional": " "}, "DESTINATION": {"type": () => {return new abap.types.Character();}, "is_optional": " "}}},
  "BAPI_MESSAGE_GETDETAIL": {"visibility": "U", "parameters": {"ID": {"type": () => {return new abap.types.Character();}, "is_optional": " "}, "NUMBER": {"type": () => {return new abap.types.Character();}, "is_optional": " "}, "TEXTFORMAT": {"type": () => {return new abap.types.Character();}, "is_optional": " "}, "MESSAGE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "ERROR": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.mv_destination = new abap.types.String({qualifiedName: "STRING"});
  }
  async constructor_(INPUT) {
    if (super.constructor_) { await super.constructor_(INPUT); }
    return this;
  }
  async factory_rfc_destination(INPUT) {
    return lcl_rfc_bapi.factory_rfc_destination(INPUT);
  }
  static async factory_rfc_destination(INPUT) {
    let r_result = new abap.types.ABAPObject({qualifiedName: "LCL_RFC_BAPI", RTTIName: "\\CLASS-POOL=Z2UI5_CL_STMPNCFCTN_API\\CLASS=LCL_RFC_BAPI"});
    let destination = INPUT?.destination;
    r_result.set(await (new abap.Classes['CLAS-Z2UI5_CL_STMPNCFCTN_API-LCL_RFC_BAPI']()).constructor_());
    r_result.get().mv_destination.set(destination);
    try {
    } catch (e) {
      if ((abap.Classes['CX_ROOT'] && e instanceof abap.Classes['CX_ROOT'])) {
      } else {
        throw e;
      }
    }
    return r_result;
  }
  async bapi_message_getdetail(INPUT) {
    let id = INPUT?.id;
    let number = INPUT?.number;
    let textformat = INPUT?.textformat || new abap.types.Character();
    if (INPUT === undefined || INPUT.textformat === undefined) {textformat = new abap.types.String().set(``);}
    let message = INPUT?.message || new abap.types.String({qualifiedName: "STRING"});
    let error = INPUT?.error || new abap.types.String({qualifiedName: "STRING"});
    let lv_id = new abap.types.Character(20, {});
    let lv_number = new abap.types.Numc({length: 3});
    let lv_textformat = new abap.types.Character(3, {});
    let lv_message = new abap.types.Character(220, {});
    let lv_fm_name = new abap.types.String({qualifiedName: "STRING"});
    let x = new abap.types.ABAPObject({qualifiedName: "CX_ROOT", RTTIName: "\\CLASS=CX_ROOT"});
    lv_id.set(id);
    lv_number.set(number);
    lv_textformat.set(textformat);
    try {
      lv_fm_name.set(new abap.types.String().set(`BAPI_MESSAGE_GETDETAIL`));
      try {
        await abap.statements.callFunction({name:lv_fm_name.get().trimEnd(),destination:this.mv_destination.get(),exporting: {id: lv_id, number: lv_number, textformat: lv_textformat}, importing: {message: lv_message}});
        abap.builtin.sy.get().subrc.set(0);
      } catch (e) {
        if (e.classic) {
            switch (e.classic.toUpperCase()) {
            case "ERROR_MESSAGE": abap.builtin.sy.get().subrc.set(2); break;
            default: abap.builtin.sy.get().subrc.set(1); break;
              }
          } else {
              throw e;
          }
        }
        if (abap.compare.ne(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
          error.set(abap.builtin.abap_true);
          return;
        }
      } catch (e) {
        if ((abap.Classes['CX_ROOT'] && e instanceof abap.Classes['CX_ROOT'])) {
          x.set(e);
          error.set(abap.builtin.abap_true);
          return;
        } else {
          throw e;
        }
      }
      message.set(lv_message);
    }
  }
  abap.Classes['CLAS-Z2UI5_CL_STMPNCFCTN_API-LCL_RFC_BAPI'] = lcl_rfc_bapi;

//# sourceMappingURL=z2ui5_cl_stmpncfctn_api.clas.locals.mjs.map
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

/***/ })

}]);
//# sourceMappingURL=output_z2ui5_cl_stmpncfctn_api_clas_locals_mjs.bundle.js.map