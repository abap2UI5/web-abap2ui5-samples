"use strict";
(self["webpackChunkabap2ui5"] = self["webpackChunkabap2ui5"] || []).push([["output_z2ui5_cl_util_clas_locals_mjs"],{

/***/ "./output/z2ui5_cl_util.clas.locals.mjs":
/*!**********************************************!*\
  !*** ./output/z2ui5_cl_util.clas.locals.mjs ***!
  \**********************************************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   lcl_msp_mapper: () => (/* binding */ lcl_msp_mapper),
/* harmony export */   lcl_range_to_sql: () => (/* binding */ lcl_range_to_sql)
/* harmony export */ });
const {z2ui5_cl_abap_api} = await Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./z2ui5_cl_abap_api.clas.mjs */ "./output/z2ui5_cl_abap_api.clas.mjs"));
const {cx_root} = await Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./cx_root.clas.mjs */ "./output/cx_root.clas.mjs"));
// z2ui5_cl_util.clas.locals_imp.abap
class lcl_range_to_sql {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'CLAS-Z2UI5_CL_UTIL-LCL_RANGE_TO_SQL';
  static IMPLEMENTED_INTERFACES = [];
  static ATTRIBUTES = {"MV_FIELDNAME": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "O", "is_constant": " ", "is_class": " "},
  "MR_RANGE": {"type": () => {return new abap.types.DataReference(new abap.types.Character(4));}, "visibility": "O", "is_constant": " ", "is_class": " "},
  "SIGNS": {"type": () => {return new abap.types.Structure({"including": new abap.types.String({qualifiedName: "STRING"}), "excluding": new abap.types.String({qualifiedName: "STRING"})}, undefined, undefined, {}, {});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "OPTIONS": {"type": () => {return new abap.types.Structure({"equal": new abap.types.String({qualifiedName: "STRING"}), "not_equal": new abap.types.String({qualifiedName: "STRING"}), "between": new abap.types.String({qualifiedName: "STRING"}), "not_between": new abap.types.String({qualifiedName: "STRING"}), "contains_pattern": new abap.types.String({qualifiedName: "STRING"}), "not_contains_pattern": new abap.types.String({qualifiedName: "STRING"}), "greater_than": new abap.types.String({qualifiedName: "STRING"}), "greater_equal": new abap.types.String({qualifiedName: "STRING"}), "less_equal": new abap.types.String({qualifiedName: "STRING"}), "less_than": new abap.types.String({qualifiedName: "STRING"})}, undefined, undefined, {}, {});}, "visibility": "U", "is_constant": "X", "is_class": "X"}};
  static METHODS = {"QUOTE": {"visibility": "O", "parameters": {"OUT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "VAL": {"type": () => {return new abap.types.Character();}, "is_optional": " "}}},
  "CONSTRUCTOR": {"visibility": "U", "parameters": {"IV_FIELDNAME": {"type": () => {return new abap.types.Character();}, "is_optional": " "}, "IR_RANGE": {"type": () => {return new abap.types.DataReference(new abap.types.Character(4));}, "is_optional": " "}}},
  "GET_SQL": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.mv_fieldname = new abap.types.String({qualifiedName: "STRING"});
    this.mr_range = new abap.types.DataReference(new abap.types.Character(4));
    this.signs = lcl_range_to_sql.signs;
    this.options = lcl_range_to_sql.options;
  }
  async constructor_(INPUT) {
    let iv_fieldname = INPUT?.iv_fieldname;
    let ir_range = INPUT?.ir_range;
    if (ir_range === undefined) { ir_range = new abap.types.DataReference(new abap.types.Character(4)).set(INPUT.ir_range); }
    this.mr_range.set(ir_range);
    this.mv_fieldname.set(new abap.types.String().set(`${abap.templateFormatting(abap.builtin.to_upper({val: iv_fieldname}))}`));
    return this;
  }
  async get_sql() {
    let result = new abap.types.String({qualifiedName: "STRING"});
    let fs_lt_range_ = new abap.types.FieldSymbol(abap.types.TableFactory.construct(new abap.types.Character(4), {"withHeader":false,"keyType":"DEFAULT"}));
    let temp1 = new abap.types.Character(1, {"qualifiedName":"XSDBOOLEAN","ddicName":"XSDBOOLEAN","description":"XSDBOOLEAN"});
    let fs_ls_range_item_ = new abap.types.FieldSymbol(new abap.types.Character(4));
    let fs_lv_sign_ = new abap.types.FieldSymbol(new abap.types.Character(4));
    let fs_lv_option_ = new abap.types.FieldSymbol(new abap.types.Character(4));
    let fs_lv_low_ = new abap.types.FieldSymbol(new abap.types.Character(4));
    let fs_lv_high_ = new abap.types.FieldSymbol(new abap.types.Character(4));
    abap.statements.assign({target: fs_lt_range_, source: this.me.get().mr_range.dereference()});
    temp1.set(abap.builtin.boolc(abap.compare.initial(fs_lt_range_)));
    if (abap.compare.eq(temp1, abap.builtin.abap_true)) {
      return result;
    }
    result.set(new abap.types.String().set(`(`));
    for await (const unique56 of abap.statements.loop(fs_lt_range_)) {
      fs_ls_range_item_.assign(unique56);
      abap.statements.assign({component: new abap.types.Character(4).set('SIGN'), target: fs_lv_sign_, source: fs_ls_range_item_});
      abap.statements.assign({component: new abap.types.Character(6).set('OPTION'), target: fs_lv_option_, source: fs_ls_range_item_});
      abap.statements.assign({component: new abap.types.Character(3).set('LOW'), target: fs_lv_low_, source: fs_ls_range_item_});
      abap.statements.assign({component: new abap.types.Character(4).set('HIGH'), target: fs_lv_high_, source: fs_ls_range_item_});
      if (abap.compare.ne(abap.builtin.sy.get().tabix, abap.IntegerFactory.get(1))) {
        result.set(new abap.types.String().set(`${abap.templateFormatting(result)} OR`));
      }
      if (abap.compare.eq(fs_lv_sign_, lcl_range_to_sql.signs.get().excluding)) {
        result.set(new abap.types.String().set(`${abap.templateFormatting(result)} NOT`));
      }
      result.set(new abap.types.String().set(`${abap.templateFormatting(result)} ${abap.templateFormatting(this.me.get().mv_fieldname)}`));
      let unique57 = fs_lv_option_;
      if (abap.compare.eq(unique57, lcl_range_to_sql.options.get().equal) || abap.compare.eq(unique57, lcl_range_to_sql.options.get().not_equal) || abap.compare.eq(unique57, lcl_range_to_sql.options.get().greater_than) || abap.compare.eq(unique57, lcl_range_to_sql.options.get().greater_equal) || abap.compare.eq(unique57, lcl_range_to_sql.options.get().less_equal) || abap.compare.eq(unique57, lcl_range_to_sql.options.get().less_than)) {
        result.set(new abap.types.String().set(`${abap.templateFormatting(result)} ${abap.templateFormatting(fs_lv_option_)} ${abap.templateFormatting((await this.quote({val: fs_lv_low_})))}`));
      } else if (abap.compare.eq(unique57, lcl_range_to_sql.options.get().between)) {
        result.set(new abap.types.String().set(`${abap.templateFormatting(result)} BETWEEN ${abap.templateFormatting((await this.quote({val: fs_lv_low_})))} AND ${abap.templateFormatting((await this.quote({val: fs_lv_high_})))}`));
      } else if (abap.compare.eq(unique57, lcl_range_to_sql.options.get().not_between)) {
        result.set(new abap.types.String().set(`${abap.templateFormatting(result)} NOT BETWEEN ${abap.templateFormatting((await this.quote({val: fs_lv_low_})))} AND ${abap.templateFormatting((await this.quote({val: fs_lv_high_})))}`));
      } else if (abap.compare.eq(unique57, lcl_range_to_sql.options.get().contains_pattern)) {
        abap.statements.translate(fs_lv_low_, '*%');
        result.set(new abap.types.String().set(`${abap.templateFormatting(result)} LIKE ${abap.templateFormatting((await this.quote({val: fs_lv_low_})))}`));
      } else if (abap.compare.eq(unique57, lcl_range_to_sql.options.get().not_contains_pattern)) {
        abap.statements.translate(fs_lv_low_, '*%');
        result.set(new abap.types.String().set(`${abap.templateFormatting(result)} NOT LIKE ${abap.templateFormatting((await this.quote({val: fs_lv_low_})))}`));
      }
    }
    result.set(new abap.types.String().set(`${abap.templateFormatting(result)} )`));
    return result;
  }
  async quote(INPUT) {
    return lcl_range_to_sql.quote(INPUT);
  }
  static async quote(INPUT) {
    let out = new abap.types.String({qualifiedName: "STRING"});
    let val = INPUT?.val;
    out.set(new abap.types.String().set(`'${abap.templateFormatting(abap.builtin.replace({val: val, sub: new abap.types.String().set(`'`), with: new abap.types.String().set(`''`), occ: abap.IntegerFactory.get(0)}))}'`));
    return out;
  }
}
abap.Classes['CLAS-Z2UI5_CL_UTIL-LCL_RANGE_TO_SQL'] = lcl_range_to_sql;
lcl_range_to_sql.signs = new abap.types.Structure({"including": new abap.types.String({qualifiedName: "STRING"}), "excluding": new abap.types.String({qualifiedName: "STRING"})}, undefined, undefined, {}, {});
lcl_range_to_sql.signs.get().including.set('I');
lcl_range_to_sql.signs.get().excluding.set('E');
lcl_range_to_sql.options = new abap.types.Structure({"equal": new abap.types.String({qualifiedName: "STRING"}), "not_equal": new abap.types.String({qualifiedName: "STRING"}), "between": new abap.types.String({qualifiedName: "STRING"}), "not_between": new abap.types.String({qualifiedName: "STRING"}), "contains_pattern": new abap.types.String({qualifiedName: "STRING"}), "not_contains_pattern": new abap.types.String({qualifiedName: "STRING"}), "greater_than": new abap.types.String({qualifiedName: "STRING"}), "greater_equal": new abap.types.String({qualifiedName: "STRING"}), "less_equal": new abap.types.String({qualifiedName: "STRING"}), "less_than": new abap.types.String({qualifiedName: "STRING"})}, undefined, undefined, {}, {});
lcl_range_to_sql.options.get().equal.set('EQ');
lcl_range_to_sql.options.get().not_equal.set('NE');
lcl_range_to_sql.options.get().between.set('BT');
lcl_range_to_sql.options.get().not_between.set('NB');
lcl_range_to_sql.options.get().contains_pattern.set('CP');
lcl_range_to_sql.options.get().not_contains_pattern.set('NP');
lcl_range_to_sql.options.get().greater_than.set('GT');
lcl_range_to_sql.options.get().greater_equal.set('GE');
lcl_range_to_sql.options.get().less_equal.set('LE');
lcl_range_to_sql.options.get().less_than.set('LT');
class lcl_msp_mapper {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'CLAS-Z2UI5_CL_UTIL-LCL_MSP_MAPPER';
  static IMPLEMENTED_INTERFACES = [];
  static ATTRIBUTES = {};
  static METHODS = {"MSG_MAP": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return new abap.types.Structure({"text": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_MSG-TEXT"}), "id": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_MSG-ID"}), "no": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_MSG-NO"}), "type": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_MSG-TYPE"}), "v1": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_MSG-V1"}), "v2": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_MSG-V2"}), "v3": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_MSG-V3"}), "v4": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_MSG-V4"}), "timestampl": new abap.types.Packed({length: 21, decimals: 7, qualifiedName: "TIMESTAMPL"})}, "z2ui5_cl_util=>ty_s_msg", undefined, {}, {});}, "is_optional": " "}, "NAME": {"type": () => {return new abap.types.Character();}, "is_optional": " "}, "VAL": {"type": () => {return new abap.types.Character(4);}, "is_optional": " "}, "IS_MSG": {"type": () => {return new abap.types.Structure({"text": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_MSG-TEXT"}), "id": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_MSG-ID"}), "no": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_MSG-NO"}), "type": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_MSG-TYPE"}), "v1": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_MSG-V1"}), "v2": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_MSG-V2"}), "v3": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_MSG-V3"}), "v4": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_MSG-V4"}), "timestampl": new abap.types.Packed({length: 21, decimals: 7, qualifiedName: "TIMESTAMPL"})}, "z2ui5_cl_util=>ty_s_msg", undefined, {}, {});}, "is_optional": " "}}},
  "MSG_GET": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"text": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_MSG-TEXT"}), "id": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_MSG-ID"}), "no": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_MSG-NO"}), "type": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_MSG-TYPE"}), "v1": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_MSG-V1"}), "v2": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_MSG-V2"}), "v3": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_MSG-V3"}), "v4": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_MSG-V4"}), "timestampl": new abap.types.Packed({length: 21, decimals: 7, qualifiedName: "TIMESTAMPL"})}, "z2ui5_cl_util=>ty_s_msg", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util=>ty_t_msg");}, "is_optional": " "}, "VAL": {"type": () => {return new abap.types.Character(4);}, "is_optional": " "}}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
  }
  async constructor_(INPUT) {
    if (super.constructor_) { await super.constructor_(INPUT); }
    return this;
  }
  async msg_get(INPUT) {
    return lcl_msp_mapper.msg_get(INPUT);
  }
  static async msg_get(INPUT) {
    let result = abap.types.TableFactory.construct(new abap.types.Structure({"text": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_MSG-TEXT"}), "id": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_MSG-ID"}), "no": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_MSG-NO"}), "type": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_MSG-TYPE"}), "v1": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_MSG-V1"}), "v2": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_MSG-V2"}), "v3": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_MSG-V3"}), "v4": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_MSG-V4"}), "timestampl": new abap.types.Packed({length: 21, decimals: 7, qualifiedName: "TIMESTAMPL"})}, "z2ui5_cl_util=>ty_s_msg", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util=>ty_t_msg");
    let val = INPUT?.val;
    let lv_kind = new abap.types.String({qualifiedName: "STRING"});
    let fs_tab_ = new abap.types.FieldSymbol(abap.types.TableFactory.construct(new abap.types.Character(4), {"withHeader":false,"keyType":"DEFAULT"}));
    let fs_row_ = new abap.types.FieldSymbol(new abap.types.Character(4));
    let lt_tab = abap.types.TableFactory.construct(new abap.types.Structure({"text": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_MSG-TEXT"}), "id": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_MSG-ID"}), "no": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_MSG-NO"}), "type": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_MSG-TYPE"}), "v1": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_MSG-V1"}), "v2": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_MSG-V2"}), "v3": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_MSG-V3"}), "v4": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_MSG-V4"}), "timestampl": new abap.types.Packed({length: 21, decimals: 7, qualifiedName: "TIMESTAMPL"})}, "z2ui5_cl_util=>ty_s_msg", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util=>ty_t_msg");
    let lt_attri = abap.types.TableFactory.construct(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "NAME"}), "type": new abap.types.ABAPObject({qualifiedName: "CL_ABAP_DATADESCR", RTTIName: "\\CLASS=CL_ABAP_DATADESCR"}), "as_include": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "suffix": new abap.types.String({qualifiedName: "SUFFIX"})}, "abap_componentdescr", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "abap_component_tab");
    let temp54 = new abap.types.Structure({"text": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_MSG-TEXT"}), "id": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_MSG-ID"}), "no": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_MSG-NO"}), "type": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_MSG-TYPE"}), "v1": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_MSG-V1"}), "v2": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_MSG-V2"}), "v3": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_MSG-V3"}), "v4": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_MSG-V4"}), "timestampl": new abap.types.Packed({length: 21, decimals: 7, qualifiedName: "TIMESTAMPL"})}, "z2ui5_cl_util=>ty_s_msg", undefined, {}, {});
    let ls_result = new abap.types.Structure({"text": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_MSG-TEXT"}), "id": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_MSG-ID"}), "no": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_MSG-NO"}), "type": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_MSG-TYPE"}), "v1": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_MSG-V1"}), "v2": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_MSG-V2"}), "v3": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_MSG-V3"}), "v4": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_MSG-V4"}), "timestampl": new abap.types.Packed({length: 21, decimals: 7, qualifiedName: "TIMESTAMPL"})}, "z2ui5_cl_util=>ty_s_msg", undefined, {}, {});
    let temp55 = new abap.types.Structure({"name": new abap.types.String({qualifiedName: "NAME"}), "type": new abap.types.ABAPObject({qualifiedName: "CL_ABAP_DATADESCR", RTTIName: "\\CLASS=CL_ABAP_DATADESCR"}), "as_include": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "suffix": new abap.types.String({qualifiedName: "SUFFIX"})}, "abap_componentdescr", undefined, {}, {});
    let ls_attri = new abap.types.DataReference(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "NAME"}), "type": new abap.types.ABAPObject({qualifiedName: "CL_ABAP_DATADESCR", RTTIName: "\\CLASS=CL_ABAP_DATADESCR"}), "as_include": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "suffix": new abap.types.String({qualifiedName: "SUFFIX"})}, "abap_componentdescr", undefined, {}, {}));
    let lv_name = new abap.types.String({qualifiedName: "STRING"});
    let fs_comp_ = new abap.types.FieldSymbol(new abap.types.Character(4));
    let temp56 = new abap.types.ABAPObject({qualifiedName: "CX_ROOT", RTTIName: "\\CLASS=CX_ROOT"});
    let lx = new abap.types.ABAPObject({qualifiedName: "CX_ROOT", RTTIName: "\\CLASS=CX_ROOT"});
    let lt_attri_o = abap.types.TableFactory.construct(new abap.types.Structure({"length": new abap.types.Integer({qualifiedName: "LENGTH"}), "decimals": new abap.types.Integer({qualifiedName: "DECIMALS"}), "name": new abap.types.Character(61, {"qualifiedName":"abap_attrname"}), "type_kind": new abap.types.Character(1, {"qualifiedName":"abap_typekind"}), "visibility": new abap.types.Character(1, {"qualifiedName":"abap_visibility"}), "is_interface": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "is_inherited": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "is_class": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "is_constant": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "is_virtual": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "is_read_only": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "alias_for": new abap.types.Character(61, {"qualifiedName":"abap_attrname"})}, "abap_attrdescr", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":["NAME"]},"secondary":[]}, "abap_attrdescr_tab");
    let temp57 = new abap.types.Structure({"length": new abap.types.Integer({qualifiedName: "LENGTH"}), "decimals": new abap.types.Integer({qualifiedName: "DECIMALS"}), "name": new abap.types.Character(61, {"qualifiedName":"abap_attrname"}), "type_kind": new abap.types.Character(1, {"qualifiedName":"abap_typekind"}), "visibility": new abap.types.Character(1, {"qualifiedName":"abap_visibility"}), "is_interface": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "is_inherited": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "is_class": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "is_constant": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "is_virtual": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "is_read_only": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "alias_for": new abap.types.Character(61, {"qualifiedName":"abap_attrname"})}, "abap_attrdescr", undefined, {}, {});
    let ls_attri_o = new abap.types.DataReference(new abap.types.Structure({"length": new abap.types.Integer({qualifiedName: "LENGTH"}), "decimals": new abap.types.Integer({qualifiedName: "DECIMALS"}), "name": new abap.types.Character(61, {"qualifiedName":"abap_attrname"}), "type_kind": new abap.types.Character(1, {"qualifiedName":"abap_typekind"}), "visibility": new abap.types.Character(1, {"qualifiedName":"abap_visibility"}), "is_interface": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "is_inherited": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "is_class": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "is_constant": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "is_virtual": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "is_read_only": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "alias_for": new abap.types.Character(61, {"qualifiedName":"abap_attrname"})}, "abap_attrdescr", undefined, {}, {}));
    let obj = new abap.types.ABAPObject({qualifiedName: undefined, RTTIName: undefined});
    let lr_tab = new abap.types.DataReference(new abap.types.Character(4));
    let fs_tab2_ = new abap.types.FieldSymbol(new abap.types.Character(4));
    let lt_tab2 = abap.types.TableFactory.construct(new abap.types.Structure({"text": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_MSG-TEXT"}), "id": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_MSG-ID"}), "no": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_MSG-NO"}), "type": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_MSG-TYPE"}), "v1": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_MSG-V1"}), "v2": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_MSG-V2"}), "v3": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_MSG-V3"}), "v4": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_MSG-V4"}), "timestampl": new abap.types.Packed({length: 21, decimals: 7, qualifiedName: "TIMESTAMPL"})}, "z2ui5_cl_util=>ty_s_msg", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util=>ty_t_msg");
    let lx2 = new abap.types.ABAPObject({qualifiedName: "CX_ROOT", RTTIName: "\\CLASS=CX_ROOT"});
    let temp58 = new abap.types.Structure({"text": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_MSG-TEXT"}), "id": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_MSG-ID"}), "no": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_MSG-NO"}), "type": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_MSG-TYPE"}), "v1": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_MSG-V1"}), "v2": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_MSG-V2"}), "v3": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_MSG-V3"}), "v4": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_MSG-V4"}), "timestampl": new abap.types.Packed({length: 21, decimals: 7, qualifiedName: "TIMESTAMPL"})}, "z2ui5_cl_util=>ty_s_msg", undefined, {}, {});
    lv_kind.set((await abap.Classes['Z2UI5_CL_UTIL'].rtti_get_type_kind({val: val})));
    let unique58 = lv_kind;
    if (abap.compare.eq(unique58, abap.Classes['CL_ABAP_DATADESCR'].typekind_table)) {
      abap.statements.assign({target: fs_tab_, source: val});
      for await (const unique59 of abap.statements.loop(fs_tab_)) {
        fs_row_.assign(unique59);
        lt_tab.set((await this.msg_get({val: fs_row_})));
        abap.statements.insertInternal({lines: true, data: lt_tab, table: result});
      }
    } else if (abap.compare.eq(unique58, abap.Classes['CL_ABAP_DATADESCR'].typekind_struct1) || abap.compare.eq(unique58, abap.Classes['CL_ABAP_DATADESCR'].typekind_struct2)) {
      if (abap.compare.initial(val)) {
        return result;
      }
      lt_attri.set((await abap.Classes['Z2UI5_CL_UTIL'].rtti_get_t_attri_by_any({val: val})));
      abap.statements.clear(temp54);
      ls_result.set(temp54);
      for await (const unique60 of abap.statements.loop(lt_attri)) {
        ls_attri.assign(unique60);
        lv_name.set(new abap.types.String().set(`VAL-${abap.templateFormatting(ls_attri.get().name)}`));
        abap.statements.assign({target: fs_comp_, dynamicName: lv_name.get(), dynamicSource: (() => {
                      const name = lv_name.get().toLowerCase().replace(/[~\/]/g, "$").match(/[\w\$\/]+/)[0];
                      try { return eval(name); } catch {}
                      try { return eval("this." + name); } catch {}
                    })()});
          if (abap.compare.eq(ls_attri.get().name, new abap.types.Character(4).set('ITEM'))) {
            lt_tab.set((await this.msg_get({val: fs_comp_})));
            abap.statements.insertInternal({lines: true, data: lt_tab, table: result});
            return result;
          } else {
            ls_result.set((await this.msg_map({name: ls_attri.get().name, val: fs_comp_, is_msg: ls_result})));
          }
        }
        if (abap.compare.initial(ls_result.get().text) && abap.compare.initial(ls_result.get().id) === false) {
          await abap.statements.message({into: ls_result.get().text, id: ls_result.get().id, type: new abap.types.Character(1).set('I'), number: ls_result.get().no, with: [ls_result.get().v1,ls_result.get().v2,ls_result.get().v3,ls_result.get().v4]});
        }
        abap.statements.insertInternal({data: ls_result, table: result});
      } else if (abap.compare.eq(unique58, abap.Classes['CL_ABAP_DATADESCR'].typekind_oref)) {
        try {
          await abap.statements.cast(temp56, val);
          lx.set(temp56);
          abap.statements.clear(ls_result);
          ls_result.get().type.set(new abap.types.Character(1).set('E'));
          ls_result.get().text.set((await lx.get().if_message$get_text()));
          lt_attri_o.set((await abap.Classes['Z2UI5_CL_UTIL'].rtti_get_t_attri_by_oref({val: val})));
          for await (const unique62 of abap.statements.loop(lt_attri_o,{where: async (I) => {return abap.compare.eq(I.visibility, new abap.types.Character(1).set('U'));},topEquals: {"visibility": new abap.types.Character(1).set('U')}})) {
            ls_attri_o.assign(unique62);
            lv_name.set(new abap.types.String().set(`VAL->${abap.templateFormatting(ls_attri_o.get().name)}`));
            abap.statements.assign({target: fs_comp_, dynamicName: lv_name.get(), dynamicSource: (() => {
                          const name = lv_name.get().toLowerCase().replace(/[~\/]/g, "$").match(/[\w\$\/]+/)[0];
                          try { return eval(name); } catch {}
                          try { return eval("this." + name); } catch {}
                        })()});
              ls_result.set((await this.msg_map({name: ls_attri_o.get().name, val: fs_comp_, is_msg: ls_result})));
            }
            abap.statements.insertInternal({data: ls_result, table: result});
          } catch (e) {
            if ((abap.Classes['CX_ROOT'] && e instanceof abap.Classes['CX_ROOT'])) {
              obj.set(val);
              try {
                abap.statements.createData(lr_tab,{"name": 'if_bali_log=>ty_item_table'});
                abap.statements.assign({target: fs_tab2_, source: lr_tab.dereference()});
                if (obj.get().if_bali_log$get_all_items === undefined && abap.Classes['CX_SY_DYN_CALL_ILLEGAL_METHOD'.trimEnd()] === undefined) { throw "CX_SY_DYN_CALL_ILLEGAL_METHOD not found"; }
                if (obj.get().if_bali_log$get_all_items === undefined) { throw new abap.Classes['CX_SY_DYN_CALL_ILLEGAL_METHOD'.trimEnd()](); }
                fs_tab2_.set(await obj.get().if_bali_log$get_all_items());
                lt_tab2.set((await this.msg_get({val: fs_tab2_})));
                abap.statements.insertInternal({lines: true, data: lt_tab2, table: result});
              } catch (e) {
                if ((abap.Classes['CX_ROOT'] && e instanceof abap.Classes['CX_ROOT'])) {
                  try {
                    abap.statements.createData(lr_tab,{"name": 'BAPIRETTAB'});
                    abap.statements.assign({target: fs_tab2_, source: lr_tab.dereference()});
                    if (obj.get().zif_logger$export_to_table === undefined && abap.Classes['CX_SY_DYN_CALL_ILLEGAL_METHOD'.trimEnd()] === undefined) { throw "CX_SY_DYN_CALL_ILLEGAL_METHOD not found"; }
                    if (obj.get().zif_logger$export_to_table === undefined) { throw new abap.Classes['CX_SY_DYN_CALL_ILLEGAL_METHOD'.trimEnd()](); }
                    fs_tab2_.set(await obj.get().zif_logger$export_to_table());
                    lt_tab2.set((await this.msg_get({val: fs_tab2_})));
                    abap.statements.insertInternal({lines: true, data: lt_tab2, table: result});
                  } catch (e) {
                    if ((abap.Classes['CX_ROOT'] && e instanceof abap.Classes['CX_ROOT'])) {
                      lx2.set(e);
                      lt_attri_o.set((await abap.Classes['Z2UI5_CL_UTIL'].rtti_get_t_attri_by_oref({val: val})));
                      for await (const unique61 of abap.statements.loop(lt_attri_o,{where: async (I) => {return abap.compare.eq(I.visibility, new abap.types.Character(1).set('U'));},topEquals: {"visibility": new abap.types.Character(1).set('U')}})) {
                        ls_attri_o.assign(unique61);
                        lv_name.set(new abap.types.String().set(`OBJ->${abap.templateFormatting(ls_attri_o.get().name)}`));
                        abap.statements.assign({target: fs_comp_, dynamicName: lv_name.get(), dynamicSource: (() => {
                                      const name = lv_name.get().toLowerCase().replace(/[~\/]/g, "$").match(/[\w\$\/]+/)[0];
                                      try { return eval(name); } catch {}
                                      try { return eval("this." + name); } catch {}
                                    })()});
                          ls_result.set((await this.msg_map({name: ls_attri_o.get().name, val: fs_comp_, is_msg: ls_result})));
                        }
                        abap.statements.insertInternal({data: ls_result, table: result});
                      } else {
                        throw e;
                      }
                    }
                  } else {
                    throw e;
                  }
                }
              } else {
                throw e;
              }
            }
          } else {
            if (abap.compare.initial((await abap.Classes['Z2UI5_CL_UTIL'].rtti_check_clike({val: val}))) === false) {
              abap.statements.clear(temp58);
              temp58.get().text.set(val);
              abap.statements.insertInternal({data: temp58, table: result});
            }
          }
          return result;
        }
        async msg_map(INPUT) {
          return lcl_msp_mapper.msg_map(INPUT);
        }
        static async msg_map(INPUT) {
          let result = new abap.types.Structure({"text": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_MSG-TEXT"}), "id": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_MSG-ID"}), "no": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_MSG-NO"}), "type": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_MSG-TYPE"}), "v1": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_MSG-V1"}), "v2": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_MSG-V2"}), "v3": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_MSG-V3"}), "v4": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_MSG-V4"}), "timestampl": new abap.types.Packed({length: 21, decimals: 7, qualifiedName: "TIMESTAMPL"})}, "z2ui5_cl_util=>ty_s_msg", undefined, {}, {});
          let name = INPUT?.name;
          let val = INPUT?.val;
          let is_msg = INPUT?.is_msg;
          if (is_msg?.getQualifiedName === undefined || is_msg.getQualifiedName() !== "Z2UI5_CL_UTIL=>TY_S_MSG") { is_msg = undefined; }
          if (is_msg === undefined) { is_msg = new abap.types.Structure({"text": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_MSG-TEXT"}), "id": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_MSG-ID"}), "no": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_MSG-NO"}), "type": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_MSG-TYPE"}), "v1": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_MSG-V1"}), "v2": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_MSG-V2"}), "v3": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_MSG-V3"}), "v4": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_MSG-V4"}), "timestampl": new abap.types.Packed({length: 21, decimals: 7, qualifiedName: "TIMESTAMPL"})}, "z2ui5_cl_util=>ty_s_msg", undefined, {}, {}).set(INPUT.is_msg); }
          result.set(is_msg);
          let unique63 = name;
          if (abap.compare.eq(unique63, new abap.types.Character(2).set('ID')) || abap.compare.eq(unique63, new abap.types.Character(5).set('MSGID'))) {
            result.get().id.set(val);
          } else if (abap.compare.eq(unique63, new abap.types.Character(2).set('NO')) || abap.compare.eq(unique63, new abap.types.Character(6).set('NUMBER')) || abap.compare.eq(unique63, new abap.types.Character(5).set('MSGNO'))) {
            result.get().no.set(val);
          } else if (abap.compare.eq(unique63, new abap.types.Character(7).set('MESSAGE')) || abap.compare.eq(unique63, new abap.types.Character(4).set('TEXT'))) {
            result.get().text.set(val);
          } else if (abap.compare.eq(unique63, new abap.types.Character(4).set('TYPE')) || abap.compare.eq(unique63, new abap.types.Character(5).set('MSGTY'))) {
            result.get().type.set(val);
          } else if (abap.compare.eq(unique63, new abap.types.Character(10).set('MESSAGE_V1')) || abap.compare.eq(unique63, new abap.types.Character(5).set('MSGV1')) || abap.compare.eq(unique63, new abap.types.Character(2).set('V1'))) {
            result.get().v1.set(val);
          } else if (abap.compare.eq(unique63, new abap.types.Character(10).set('MESSAGE_V2')) || abap.compare.eq(unique63, new abap.types.Character(5).set('MSGV2')) || abap.compare.eq(unique63, new abap.types.Character(2).set('V2'))) {
            result.get().v2.set(val);
          } else if (abap.compare.eq(unique63, new abap.types.Character(10).set('MESSAGE_V3')) || abap.compare.eq(unique63, new abap.types.Character(5).set('MSGV3')) || abap.compare.eq(unique63, new abap.types.Character(2).set('V3'))) {
            result.get().v3.set(val);
          } else if (abap.compare.eq(unique63, new abap.types.Character(10).set('MESSAGE_V4')) || abap.compare.eq(unique63, new abap.types.Character(5).set('MSGV4')) || abap.compare.eq(unique63, new abap.types.Character(2).set('V4'))) {
            result.get().v4.set(val);
          } else if (abap.compare.eq(unique63, new abap.types.Character(9).set('TIME_STMP'))) {
            result.get().timestampl.set(val);
          }
          return result;
        }
      }
      abap.Classes['CLAS-Z2UI5_CL_UTIL-LCL_MSP_MAPPER'] = lcl_msp_mapper;

//# sourceMappingURL=z2ui5_cl_util.clas.locals.mjs.map
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

/***/ })

}]);
//# sourceMappingURL=output_z2ui5_cl_util_clas_locals_mjs.bundle.js.map