"use strict";
(self["webpackChunkabap2ui5_web"] = self["webpackChunkabap2ui5_web"] || []).push([["output_z2ui5_cl_core_app_search_clas_locals_mjs"],{

/***/ "./output/z2ui5_cl_core_app_search.clas.locals.mjs":
/*!*********************************************************!*\
  !*** ./output/z2ui5_cl_core_app_search.clas.locals.mjs ***!
  \*********************************************************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   lcl_github: () => (/* binding */ lcl_github)
/* harmony export */ });
const {cx_root} = await Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./cx_root.clas.mjs */ "./output/cx_root.clas.mjs"));
// z2ui5_cl_core_app_search.clas.locals_imp.abap
class lcl_github {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'CLAS-Z2UI5_CL_CORE_APP_SEARCH-LCL_GITHUB';
  static IMPLEMENTED_INTERFACES = [];
  static ATTRIBUTES = {};
  static METHODS = {"GET_REPOSITORIES": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_REPO-NAME"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_REPO-DESCR"}), "author_link": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_REPO-AUTHOR_LINK"}), "author_name": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_REPO-AUTHOR_NAME"}), "check_abap_for_cloud": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "check_standard_abap": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "link": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_REPO-LINK"}), "t_app": abap.types.TableFactory.construct(new abap.types.Structure({"id": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_APP-ID"}), "name": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_APP-NAME"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_APP-DESCR"}), "classname": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_APP-CLASSNAME"}), "check_hide": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_core_app_search=>ty_s_app", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_core_app_search=>ty_t_app"), "number_of_app": new abap.types.Integer({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_REPO-NUMBER_OF_APP"})}, "z2ui5_cl_core_app_search=>ty_s_repo", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_core_app_search=>ty_t_repo");}, "is_optional": " "}}},
  "GET_REPOSITORIES_ADDONS": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_REPO-NAME"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_REPO-DESCR"}), "author_link": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_REPO-AUTHOR_LINK"}), "author_name": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_REPO-AUTHOR_NAME"}), "check_abap_for_cloud": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "check_standard_abap": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "link": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_REPO-LINK"}), "t_app": abap.types.TableFactory.construct(new abap.types.Structure({"id": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_APP-ID"}), "name": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_APP-NAME"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_APP-DESCR"}), "classname": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_APP-CLASSNAME"}), "check_hide": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_core_app_search=>ty_s_app", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_core_app_search=>ty_t_app"), "number_of_app": new abap.types.Integer({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_REPO-NUMBER_OF_APP"})}, "z2ui5_cl_core_app_search=>ty_s_repo", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_core_app_search=>ty_t_repo");}, "is_optional": " "}}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
  }
  async constructor_(INPUT) {
    if (super.constructor_) { await super.constructor_(INPUT); }
    return this;
  }
  async get_repositories() {
    let result = abap.types.TableFactory.construct(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_REPO-NAME"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_REPO-DESCR"}), "author_link": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_REPO-AUTHOR_LINK"}), "author_name": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_REPO-AUTHOR_NAME"}), "check_abap_for_cloud": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "check_standard_abap": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "link": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_REPO-LINK"}), "t_app": abap.types.TableFactory.construct(new abap.types.Structure({"id": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_APP-ID"}), "name": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_APP-NAME"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_APP-DESCR"}), "classname": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_APP-CLASSNAME"}), "check_hide": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_core_app_search=>ty_s_app", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_core_app_search=>ty_t_app"), "number_of_app": new abap.types.Integer({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_REPO-NUMBER_OF_APP"})}, "z2ui5_cl_core_app_search=>ty_s_repo", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_core_app_search=>ty_t_repo");
    let temp19 = abap.types.TableFactory.construct(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_REPO-NAME"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_REPO-DESCR"}), "author_link": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_REPO-AUTHOR_LINK"}), "author_name": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_REPO-AUTHOR_NAME"}), "check_abap_for_cloud": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "check_standard_abap": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "link": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_REPO-LINK"}), "t_app": abap.types.TableFactory.construct(new abap.types.Structure({"id": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_APP-ID"}), "name": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_APP-NAME"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_APP-DESCR"}), "classname": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_APP-CLASSNAME"}), "check_hide": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_core_app_search=>ty_s_app", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_core_app_search=>ty_t_app"), "number_of_app": new abap.types.Integer({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_REPO-NUMBER_OF_APP"})}, "z2ui5_cl_core_app_search=>ty_s_repo", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_core_app_search=>ty_t_repo");
    let temp20 = new abap.types.Structure({"name": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_REPO-NAME"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_REPO-DESCR"}), "author_link": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_REPO-AUTHOR_LINK"}), "author_name": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_REPO-AUTHOR_NAME"}), "check_abap_for_cloud": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "check_standard_abap": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "link": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_REPO-LINK"}), "t_app": abap.types.TableFactory.construct(new abap.types.Structure({"id": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_APP-ID"}), "name": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_APP-NAME"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_APP-DESCR"}), "classname": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_APP-CLASSNAME"}), "check_hide": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_core_app_search=>ty_s_app", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_core_app_search=>ty_t_app"), "number_of_app": new abap.types.Integer({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_REPO-NUMBER_OF_APP"})}, "z2ui5_cl_core_app_search=>ty_s_repo", undefined, {}, {});
    abap.statements.clear(temp19);
    temp20.get().name.set(new abap.types.String().set(`The Quest`));
    temp20.get().descr.set(new abap.types.String().set(`A wizard's adventure game based on a fork of the AXAGE game engine (ABAP teXt Adventure Game Engine) and abap2UI5.`));
    temp20.get().check_abap_for_cloud.set(abap.builtin.abap_true);
    temp20.get().check_standard_abap.set(abap.builtin.abap_true);
    temp20.get().link.set(new abap.types.String().set(`https://github.com/nomssi/axage`));
    temp20.get().author_link.set(new abap.types.String().set(`https://github.com/nomssi`));
    temp20.get().author_name.set(new abap.types.String().set(`Nomssi`));
    abap.statements.insertInternal({data: temp20, table: temp19});
    temp20.get().name.set(new abap.types.String().set(`Advent of Code`));
    temp20.get().descr.set(new abap.types.String().set(`Template for the Advent of Code 2023 in ABAP`));
    temp20.get().author_link.set(new abap.types.String().set(`https://github.com/joltdx`));
    temp20.get().author_name.set(new abap.types.String().set(`joltdx`));
    temp20.get().link.set(new abap.types.String().set(`https://github.com/joltdx/abap-advent-2023-template`));
    temp20.get().check_abap_for_cloud.set(abap.builtin.abap_true);
    temp20.get().check_standard_abap.set(abap.builtin.abap_true);
    abap.statements.insertInternal({data: temp20, table: temp19});
    temp20.get().name.set(new abap.types.String().set(`Table Loader`));
    temp20.get().descr.set(new abap.types.String().set(`Upload, Edit & Download Table Content (CSV, JSON)`));
    temp20.get().author_link.set(new abap.types.String().set(`https://github.com/oblomov-dev`));
    temp20.get().author_name.set(new abap.types.String().set(`oblomov`));
    temp20.get().check_standard_abap.set(abap.builtin.abap_true);
    temp20.get().check_abap_for_cloud.set(abap.builtin.abap_false);
    temp20.get().link.set(new abap.types.String().set(`https://github.com/oblomov-dev/a2UI5-db_table_loader`));
    abap.statements.insertInternal({data: temp20, table: temp19});
    temp20.get().name.set(new abap.types.String().set(`Generic Search Help`));
    temp20.get().descr.set(new abap.types.String().set(`Popups with Search Helps, dynamically created based on imported values`));
    temp20.get().author_link.set(new abap.types.String().set(`https://github.com/axelmohnen`));
    temp20.get().author_name.set(new abap.types.String().set(`axelmohnen`));
    temp20.get().check_standard_abap.set(abap.builtin.abap_true);
    temp20.get().check_abap_for_cloud.set(abap.builtin.abap_true);
    temp20.get().link.set(new abap.types.String().set(`https://github.com/axelmohnen/a2UI5-generic_search_hlp`));
    abap.statements.insertInternal({data: temp20, table: temp19});
    temp20.get().name.set(new abap.types.String().set(`ABAP SQL Console`));
    temp20.get().descr.set(new abap.types.String().set(`Quickly Run SQL Commands in Your Browser`));
    temp20.get().author_link.set(new abap.types.String().set(`https://github.com/abap2UI5-apps/abap-sql-console`));
    temp20.get().author_name.set(new abap.types.String().set(`oblomov`));
    temp20.get().check_standard_abap.set(abap.builtin.abap_true);
    temp20.get().check_abap_for_cloud.set(abap.builtin.abap_true);
    temp20.get().link.set(new abap.types.String().set(`https://github.com/axelmohnen/a2UI5-generic_search_hlp`));
    abap.statements.insertInternal({data: temp20, table: temp19});
    result.set(temp19);
    return result;
  }
  async get_repositories_addons() {
    let result = abap.types.TableFactory.construct(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_REPO-NAME"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_REPO-DESCR"}), "author_link": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_REPO-AUTHOR_LINK"}), "author_name": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_REPO-AUTHOR_NAME"}), "check_abap_for_cloud": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "check_standard_abap": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "link": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_REPO-LINK"}), "t_app": abap.types.TableFactory.construct(new abap.types.Structure({"id": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_APP-ID"}), "name": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_APP-NAME"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_APP-DESCR"}), "classname": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_APP-CLASSNAME"}), "check_hide": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_core_app_search=>ty_s_app", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_core_app_search=>ty_t_app"), "number_of_app": new abap.types.Integer({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_REPO-NUMBER_OF_APP"})}, "z2ui5_cl_core_app_search=>ty_s_repo", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_core_app_search=>ty_t_repo");
    let temp21 = abap.types.TableFactory.construct(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_REPO-NAME"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_REPO-DESCR"}), "author_link": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_REPO-AUTHOR_LINK"}), "author_name": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_REPO-AUTHOR_NAME"}), "check_abap_for_cloud": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "check_standard_abap": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "link": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_REPO-LINK"}), "t_app": abap.types.TableFactory.construct(new abap.types.Structure({"id": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_APP-ID"}), "name": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_APP-NAME"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_APP-DESCR"}), "classname": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_APP-CLASSNAME"}), "check_hide": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_core_app_search=>ty_s_app", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_core_app_search=>ty_t_app"), "number_of_app": new abap.types.Integer({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_REPO-NUMBER_OF_APP"})}, "z2ui5_cl_core_app_search=>ty_s_repo", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_core_app_search=>ty_t_repo");
    let temp22 = new abap.types.Structure({"name": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_REPO-NAME"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_REPO-DESCR"}), "author_link": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_REPO-AUTHOR_LINK"}), "author_name": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_REPO-AUTHOR_NAME"}), "check_abap_for_cloud": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "check_standard_abap": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "link": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_REPO-LINK"}), "t_app": abap.types.TableFactory.construct(new abap.types.Structure({"id": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_APP-ID"}), "name": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_APP-NAME"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_APP-DESCR"}), "classname": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_APP-CLASSNAME"}), "check_hide": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_core_app_search=>ty_s_app", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_core_app_search=>ty_t_app"), "number_of_app": new abap.types.Integer({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_REPO-NUMBER_OF_APP"})}, "z2ui5_cl_core_app_search=>ty_s_repo", undefined, {}, {});
    abap.statements.clear(temp21);
    temp22.get().name.set(new abap.types.String().set(`Launchpad Proxy App`));
    temp22.get().descr.set(new abap.types.String().set(`Integrate your apps to the on-premise fiori launchpad`));
    temp22.get().link.set(new abap.types.String().set(`https://github.com/abap2UI5/abap2UI5-launchpad_proxy_app`));
    abap.statements.insertInternal({data: temp22, table: temp21});
    temp22.get().name.set(new abap.types.String().set(`BTP Proxy App`));
    temp22.get().descr.set(new abap.types.String().set(`Integrate your apps with Business Technology Platform & SAP Mobile Start`));
    temp22.get().link.set(new abap.types.String().set(`https://github.com/abap2UI5/abap2UI5-btp_proxy_app`));
    abap.statements.insertInternal({data: temp22, table: temp21});
    temp22.get().name.set(new abap.types.String().set(`S-RTTI`));
    temp22.get().descr.set(new abap.types.String().set(`Install this repository to use dynamically types variables and tables in your abap2UI5 apps`));
    temp22.get().link.set(new abap.types.String().set(`https://github.com/sandraros/S-RTTI`));
    abap.statements.insertInternal({data: temp22, table: temp21});
    temp22.get().name.set(new abap.types.String().set(`abap2UI5-web`));
    temp22.get().descr.set(new abap.types.String().set(`Run abap2UI5 with open-abap on Node.js`));
    temp22.get().link.set(new abap.types.String().set(`https://github.com/abap2UI5/abap2UI5-web`));
    abap.statements.insertInternal({data: temp22, table: temp21});
    temp22.get().name.set(new abap.types.String().set(`abap2UI5-samples`));
    temp22.get().descr.set(new abap.types.String().set(`Explore Code Samples of abap2UI5`));
    temp22.get().link.set(new abap.types.String().set(`https://github.com/abap2UI5/abap2UI5-samples`));
    abap.statements.insertInternal({data: temp22, table: temp21});
    result.set(temp21);
    return result;
  }
}
abap.Classes['CLAS-Z2UI5_CL_CORE_APP_SEARCH-LCL_GITHUB'] = lcl_github;

//# sourceMappingURL=z2ui5_cl_core_app_search.clas.locals.mjs.map
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

/***/ })

}]);
//# sourceMappingURL=output_z2ui5_cl_core_app_search_clas_locals_mjs.bundle.js.map