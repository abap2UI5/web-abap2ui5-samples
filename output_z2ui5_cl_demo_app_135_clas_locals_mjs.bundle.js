"use strict";
(self["webpackChunkabap2ui5"] = self["webpackChunkabap2ui5"] || []).push([["output_z2ui5_cl_demo_app_135_clas_locals_mjs"],{

/***/ "./output/z2ui5_cl_demo_app_135.clas.locals.mjs":
/*!******************************************************!*\
  !*** ./output/z2ui5_cl_demo_app_135.clas.locals.mjs ***!
  \******************************************************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   lcl_locking: () => (/* binding */ lcl_locking)
/* harmony export */ });
const {cx_root} = await Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./cx_root.clas.mjs */ "./output/cx_root.clas.mjs"));
// z2ui5_cl_demo_app_135.clas.locals_imp.abap
class lcl_locking {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'CLAS-Z2UI5_CL_DEMO_APP_135-LCL_LOCKING';
  static IMPLEMENTED_INTERFACES = [];
  static ATTRIBUTES = {};
  static METHODS = {"ACQUIRE_LOCK": {"visibility": "U", "parameters": {}},
  "GET_LOCK_COUNTER": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return new abap.types.Integer({qualifiedName: "I"});}, "is_optional": " "}}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.INTERNAL_ID = abap.internalIdCounter++;
    this.FRIENDS_ACCESS_INSTANCE = {
    };
  }
  async constructor_(INPUT) {
    if (super.constructor_) { await super.constructor_(INPUT); }
    return this;
  }
  async acquire_lock() {
    return lcl_locking.acquire_lock();
  }
  static async acquire_lock() {
    let lv_fm = new abap.types.Character(15, {});
    let error_text = new abap.types.String({qualifiedName: "STRING"});
    lv_fm.set(abap.CharacterFactory.get(15, 'ENQUEUE_E_TABLE'));
    try {
      if (abap.FunctionModules[lv_fm.get().trimEnd()] === undefined) { if (abap.Classes['CX_SY_DYN_CALL_ILLEGAL_FUNC'.trimEnd()] === undefined) { throw "CX_SY_DYN_CALL_ILLEGAL_FUNC not found"; } else { throw new abap.Classes['CX_SY_DYN_CALL_ILLEGAL_FUNC'.trimEnd()]();} }
      await abap.FunctionModules[lv_fm.get().trimEnd()]({exporting: {tabname: abap.CharacterFactory.get(5, 'ZTEST'), varkey: abap.CharacterFactory.get(4, 'Z100')}});
      abap.builtin.sy.get().subrc.set(0);
    } catch (e) {
      if (e.classic) {
          switch (e.classic.toUpperCase()) {
          case "FOREIGN_LOCK": abap.builtin.sy.get().subrc.set(1); break;
          case "SYSTEM_FAILURE": abap.builtin.sy.get().subrc.set(2); break;
          default: abap.builtin.sy.get().subrc.set(3); break;
            }
        } else {
            throw e;
        }
      }
      if (abap.compare.ne(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
        await abap.statements.message({into: error_text, id: abap.builtin.sy.get().msgid, type: abap.builtin.sy.get().msgty, number: abap.builtin.sy.get().msgno, with: [abap.builtin.sy.get().msgv1,abap.builtin.sy.get().msgv2,abap.builtin.sy.get().msgv3,abap.builtin.sy.get().msgv4]});
        const unique247 = await (new abap.Classes['Z2UI5_CX_UTIL_ERROR']()).constructor_({val: error_text});
        unique247.EXTRA_CX = {"INTERNAL_FILENAME": "z2ui5_cl_demo_app_135.clas.locals_imp.abap","INTERNAL_LINE": 58};
        throw unique247;
      }
    }
    async get_lock_counter() {
      return lcl_locking.get_lock_counter();
    }
    static async get_lock_counter() {
      let result = new abap.types.Integer({qualifiedName: "I"});
      let enqueue_table = abap.types.TableFactory.construct(new abap.types.Structure({
      "gname": new abap.types.Character(30, {"qualifiedName":"lcl_locking=>ty_seqg3-gname"}),
      "garg": new abap.types.Character(150, {"qualifiedName":"lcl_locking=>ty_seqg3-garg"}),
      "gmode": new abap.types.Character(1, {"qualifiedName":"lcl_locking=>ty_seqg3-gmode"}),
      "gusr": new abap.types.Character(58, {"qualifiedName":"lcl_locking=>ty_seqg3-gusr"}),
      "gusrvb": new abap.types.Character(58, {"qualifiedName":"lcl_locking=>ty_seqg3-gusrvb"}),
      "guse": new abap.types.Integer({qualifiedName: "INT4"}),
      "gusevb": new abap.types.Integer({qualifiedName: "INT4"}),
      "gobj": new abap.types.Character(16, {"qualifiedName":"lcl_locking=>ty_seqg3-gobj"}),
      "gclient": new abap.types.Character(3, {"qualifiedName":"lcl_locking=>ty_seqg3-gclient"}),
      "guname": new abap.types.Character(12, {"qualifiedName":"lcl_locking=>ty_seqg3-guname"}),
      "gtarg": new abap.types.Character(50, {"qualifiedName":"lcl_locking=>ty_seqg3-gtarg"}),
      "gtcode": new abap.types.Character(20, {"qualifiedName":"lcl_locking=>ty_seqg3-gtcode"}),
      "gbcktype": new abap.types.Character(1, {"qualifiedName":"lcl_locking=>ty_seqg3-gbcktype"}),
      "gthost": new abap.types.Character(32, {"qualifiedName":"lcl_locking=>ty_seqg3-gthost"}),
      "gtwp": new abap.types.Numc({length: 2, qualifiedName: "lcl_locking=>ty_seqg3-gtwp"}),
      "gtsysnr": new abap.types.Numc({length: 2, qualifiedName: "lcl_locking=>ty_seqg3-gtsysnr"}),
      "gtdate": new abap.types.Date({qualifiedName: "LCL_LOCKING=>TY_SEQG3-GTDATE"}),
      "gttime": new abap.types.Time({qualifiedName: "LCL_LOCKING=>TY_SEQG3-GTTIME"}),
      "gtusec": new abap.types.Numc({length: 6, qualifiedName: "lcl_locking=>ty_seqg3-gtusec"}),
      "gtmark": new abap.types.Character(1, {"qualifiedName":"lcl_locking=>ty_seqg3-gtmark"}),
      "gusetxt": new abap.types.Numc({length: 10, qualifiedName: "lcl_locking=>ty_seqg3-gusetxt"}),
      "gusevbt": new abap.types.Numc({length: 10, qualifiedName: "lcl_locking=>ty_seqg3-gusevbt"})}, "lcl_locking=>ty_seqg3", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "");
      let argument = new abap.types.Character(150, {});
      let lv_fm = new abap.types.Character(12, {});
      let error_text = new abap.types.String({qualifiedName: "STRING"});
      let temp1 = new abap.types.Integer({qualifiedName: "I"});
      let temp2 = new abap.types.Structure({
      "gname": new abap.types.Character(30, {"qualifiedName":"lcl_locking=>ty_seqg3-gname"}),
      "garg": new abap.types.Character(150, {"qualifiedName":"lcl_locking=>ty_seqg3-garg"}),
      "gmode": new abap.types.Character(1, {"qualifiedName":"lcl_locking=>ty_seqg3-gmode"}),
      "gusr": new abap.types.Character(58, {"qualifiedName":"lcl_locking=>ty_seqg3-gusr"}),
      "gusrvb": new abap.types.Character(58, {"qualifiedName":"lcl_locking=>ty_seqg3-gusrvb"}),
      "guse": new abap.types.Integer({qualifiedName: "INT4"}),
      "gusevb": new abap.types.Integer({qualifiedName: "INT4"}),
      "gobj": new abap.types.Character(16, {"qualifiedName":"lcl_locking=>ty_seqg3-gobj"}),
      "gclient": new abap.types.Character(3, {"qualifiedName":"lcl_locking=>ty_seqg3-gclient"}),
      "guname": new abap.types.Character(12, {"qualifiedName":"lcl_locking=>ty_seqg3-guname"}),
      "gtarg": new abap.types.Character(50, {"qualifiedName":"lcl_locking=>ty_seqg3-gtarg"}),
      "gtcode": new abap.types.Character(20, {"qualifiedName":"lcl_locking=>ty_seqg3-gtcode"}),
      "gbcktype": new abap.types.Character(1, {"qualifiedName":"lcl_locking=>ty_seqg3-gbcktype"}),
      "gthost": new abap.types.Character(32, {"qualifiedName":"lcl_locking=>ty_seqg3-gthost"}),
      "gtwp": new abap.types.Numc({length: 2, qualifiedName: "lcl_locking=>ty_seqg3-gtwp"}),
      "gtsysnr": new abap.types.Numc({length: 2, qualifiedName: "lcl_locking=>ty_seqg3-gtsysnr"}),
      "gtdate": new abap.types.Date({qualifiedName: "LCL_LOCKING=>TY_SEQG3-GTDATE"}),
      "gttime": new abap.types.Time({qualifiedName: "LCL_LOCKING=>TY_SEQG3-GTTIME"}),
      "gtusec": new abap.types.Numc({length: 6, qualifiedName: "lcl_locking=>ty_seqg3-gtusec"}),
      "gtmark": new abap.types.Character(1, {"qualifiedName":"lcl_locking=>ty_seqg3-gtmark"}),
      "gusetxt": new abap.types.Numc({length: 10, qualifiedName: "lcl_locking=>ty_seqg3-gusetxt"}),
      "gusevbt": new abap.types.Numc({length: 10, qualifiedName: "lcl_locking=>ty_seqg3-gusevbt"})}, "lcl_locking=>ty_seqg3", undefined, {}, {});
      argument.set(new abap.types.String().set(`ZTEST                         Z100*`));
      lv_fm.set(abap.CharacterFactory.get(12, 'ENQUEUE_READ'));
      try {
        if (abap.FunctionModules[lv_fm.get().trimEnd()] === undefined) { if (abap.Classes['CX_SY_DYN_CALL_ILLEGAL_FUNC'.trimEnd()] === undefined) { throw "CX_SY_DYN_CALL_ILLEGAL_FUNC not found"; } else { throw new abap.Classes['CX_SY_DYN_CALL_ILLEGAL_FUNC'.trimEnd()]();} }
        await abap.FunctionModules[lv_fm.get().trimEnd()]({exporting: {garg: argument, guname: abap.builtin.sy.get().uname}, tables: {enq: enqueue_table}});
        abap.builtin.sy.get().subrc.set(0);
      } catch (e) {
        if (e.classic) {
            switch (e.classic.toUpperCase()) {
            case "COMMUNICATION_FAILURE": abap.builtin.sy.get().subrc.set(1); break;
            case "SYSTEM_FAILURE": abap.builtin.sy.get().subrc.set(2); break;
            default: abap.builtin.sy.get().subrc.set(3); break;
              }
          } else {
              throw e;
          }
        }
        if (abap.compare.ne(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
          await abap.statements.message({into: error_text, id: abap.builtin.sy.get().msgid, type: abap.builtin.sy.get().msgty, number: abap.builtin.sy.get().msgno, with: [abap.builtin.sy.get().msgv1,abap.builtin.sy.get().msgv2,abap.builtin.sy.get().msgv3,abap.builtin.sy.get().msgv4]});
          const unique248 = await (new abap.Classes['Z2UI5_CX_UTIL_ERROR']()).constructor_({val: error_text});
          unique248.EXTRA_CX = {"INTERNAL_FILENAME": "z2ui5_cl_demo_app_135.clas.locals_imp.abap","INTERNAL_LINE": 89};
          throw unique248;
        }
        temp1.clear();
        abap.statements.readTable(enqueue_table,{index: abap.IntegerFactory.get(1),
          into: temp2});
        if (abap.compare.eq(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
          temp1.set(temp2.get().gusevb);
        }
        result.set(temp1);
        return result;
      }
    }
    abap.Classes['CLAS-Z2UI5_CL_DEMO_APP_135-LCL_LOCKING'] = lcl_locking;
    lcl_locking.ty_seqg3 = new abap.types.Structure({
    "gname": new abap.types.Character(30, {"qualifiedName":"lcl_locking=>ty_seqg3-gname"}),
    "garg": new abap.types.Character(150, {"qualifiedName":"lcl_locking=>ty_seqg3-garg"}),
    "gmode": new abap.types.Character(1, {"qualifiedName":"lcl_locking=>ty_seqg3-gmode"}),
    "gusr": new abap.types.Character(58, {"qualifiedName":"lcl_locking=>ty_seqg3-gusr"}),
    "gusrvb": new abap.types.Character(58, {"qualifiedName":"lcl_locking=>ty_seqg3-gusrvb"}),
    "guse": new abap.types.Integer({qualifiedName: "INT4"}),
    "gusevb": new abap.types.Integer({qualifiedName: "INT4"}),
    "gobj": new abap.types.Character(16, {"qualifiedName":"lcl_locking=>ty_seqg3-gobj"}),
    "gclient": new abap.types.Character(3, {"qualifiedName":"lcl_locking=>ty_seqg3-gclient"}),
    "guname": new abap.types.Character(12, {"qualifiedName":"lcl_locking=>ty_seqg3-guname"}),
    "gtarg": new abap.types.Character(50, {"qualifiedName":"lcl_locking=>ty_seqg3-gtarg"}),
    "gtcode": new abap.types.Character(20, {"qualifiedName":"lcl_locking=>ty_seqg3-gtcode"}),
    "gbcktype": new abap.types.Character(1, {"qualifiedName":"lcl_locking=>ty_seqg3-gbcktype"}),
    "gthost": new abap.types.Character(32, {"qualifiedName":"lcl_locking=>ty_seqg3-gthost"}),
    "gtwp": new abap.types.Numc({length: 2, qualifiedName: "lcl_locking=>ty_seqg3-gtwp"}),
    "gtsysnr": new abap.types.Numc({length: 2, qualifiedName: "lcl_locking=>ty_seqg3-gtsysnr"}),
    "gtdate": new abap.types.Date({qualifiedName: "LCL_LOCKING=>TY_SEQG3-GTDATE"}),
    "gttime": new abap.types.Time({qualifiedName: "LCL_LOCKING=>TY_SEQG3-GTTIME"}),
    "gtusec": new abap.types.Numc({length: 6, qualifiedName: "lcl_locking=>ty_seqg3-gtusec"}),
    "gtmark": new abap.types.Character(1, {"qualifiedName":"lcl_locking=>ty_seqg3-gtmark"}),
    "gusetxt": new abap.types.Numc({length: 10, qualifiedName: "lcl_locking=>ty_seqg3-gusetxt"}),
    "gusevbt": new abap.types.Numc({length: 10, qualifiedName: "lcl_locking=>ty_seqg3-gusevbt"})}, "lcl_locking=>ty_seqg3", undefined, {}, {});

//# sourceMappingURL=z2ui5_cl_demo_app_135.clas.locals.mjs.map
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

/***/ })

}]);
//# sourceMappingURL=output_z2ui5_cl_demo_app_135_clas_locals_mjs.bundle.js.map