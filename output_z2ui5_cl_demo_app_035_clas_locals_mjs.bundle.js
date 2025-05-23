"use strict";
(self["webpackChunkabap2ui5"] = self["webpackChunkabap2ui5"] || []).push([["output_z2ui5_cl_demo_app_035_clas_locals_mjs"],{

/***/ "./output/z2ui5_cl_demo_app_035.clas.locals.mjs":
/*!******************************************************!*\
  !*** ./output/z2ui5_cl_demo_app_035.clas.locals.mjs ***!
  \******************************************************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   lcl_file_api: () => (/* binding */ lcl_file_api)
/* harmony export */ });
const {cx_root} = await Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./cx_root.clas.mjs */ "./output/cx_root.clas.mjs"));
// z2ui5_cl_demo_app_035.clas.locals_imp.abap
class lcl_file_api {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'CLAS-Z2UI5_CL_DEMO_APP_035-LCL_FILE_API';
  static IMPLEMENTED_INTERFACES = [];
  static ATTRIBUTES = {};
  static METHODS = {"READ_ABAP": {"visibility": "U", "parameters": {"R_RESULT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}}},
  "READ_JSON": {"visibility": "U", "parameters": {"R_RESULT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}}},
  "READ_JS": {"visibility": "U", "parameters": {"R_RESULT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}}},
  "READ_YAML": {"visibility": "U", "parameters": {"R_RESULT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}}},
  "READ_TEXT": {"visibility": "U", "parameters": {"R_RESULT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}}}};
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
  async read_abap() {
    return lcl_file_api.read_abap();
  }
  static async read_abap() {
    let r_result = new abap.types.String({qualifiedName: "STRING"});
    r_result.set(abap.operators.concat(new abap.types.String().set(`METHOD SELECT_FILES.`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`    DATA: LV_RET_CODE TYPE I,`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`          LV_USR_AXN  TYPE I.`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`    CL_GUI_FRONTEND_SERVICES=>FILE_OPEN_DIALOG(`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`      EXPORTING`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`        WINDOW_TITLE            = 'Select file'`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`        MULTISELECTION          = 'X'`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`      CHANGING`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`        FILE_TABLE              = ME->PT_FILETAB`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`        RC                      = LV_RET_CODE`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`        USER_ACTION             = LV_USR_AXN`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`      EXCEPTIONS`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`        FILE_OPEN_DIALOG_FAILED = 1`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`        CNTL_ERROR              = 2`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`        ERROR_NO_GUI            = 3`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`        NOT_SUPPORTED_BY_GUI    = 4`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`        OTHERS                  = 5`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`           ).`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`    IF SY-SUBRC <> 0 OR`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`       LV_USR_AXN = CL_GUI_FRONTEND_SERVICES=>ACTION_CANCEL.`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`      RAISE EX_FILE_SEL_ERR.`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`    ENDIF.`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`\n`),new abap.types.String().set(`  ENDMETHOD.   `)))))))))))))))))))))))))))))))))))))))))))))))));
    return r_result;
  }
  async read_json() {
    return lcl_file_api.read_json();
  }
  static async read_json() {
    let r_result = new abap.types.String({qualifiedName: "STRING"});
    r_result.set(abap.operators.concat(new abap.types.String().set(`{`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`    "quiz": {`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`        "sport": {`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`            "q1": {`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                "test" : false,`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                "question": "Which one is correct team name in NBA?",`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                "options": [`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                    "New York Bulls",`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                    "Los Angeles Kings",`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                    "Golden State Warriros",`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                    "Huston Rocket"`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                ],`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                "answer": "Huston Rocket"`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`            }`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`        },`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`        "maths": {`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`            "q1": {`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                "question": "5 + 7 = ?",`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                "options": [`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                    "10",`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                    "11",`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                    "12",`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                    "13"`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                ],`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                "answer": "12"`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`            },`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`            "q2": {`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                "question": true,`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                "options": [`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                    "1",`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                    "2",`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                    "3",`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                    "4"`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                ],`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                "answer": 487829`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`            }`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`        }`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`    }`),abap.operators.concat(new abap.types.String().set(`\n`),new abap.types.String().set(`}`))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))));
    return r_result;
  }
  async read_js() {
    return lcl_file_api.read_js();
  }
  static async read_js() {
    let r_result = new abap.types.String({qualifiedName: "STRING"});
    r_result.set(abap.operators.concat(new abap.types.String().set(`function showAlert() {`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`    alert("Alert from JS file");`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`}`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`function updateHeading() {`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`    document.getElementById('heading').innerHTML = 'Heading changed with JS';`),abap.operators.concat(new abap.types.String().set(`\n`),new abap.types.String().set(`}`)))))))))))));
    return r_result;
  }
  async read_yaml() {
    return lcl_file_api.read_yaml();
  }
  static async read_yaml() {
    let r_result = new abap.types.String({qualifiedName: "STRING"});
    r_result.set(abap.operators.concat(new abap.types.String().set(`# Employee records`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`- martin:`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`    name: Martin Developer`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`    job: Developer`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`    skills:`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`      - python`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`      - perl`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`      - pascal`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`- tabitha:`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`    name: Tabitha Bitumen`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`    job: Developer`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`    skills:`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`      - lisp`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`      - fortran`),abap.operators.concat(new abap.types.String().set(`\n`),new abap.types.String().set(`      - erlang`))))))))))))))))))))))))))))));
    return r_result;
  }
  async read_text() {
    return lcl_file_api.read_text();
  }
  static async read_text() {
    let r_result = new abap.types.String({qualifiedName: "STRING"});
    r_result.set(abap.operators.concat(new abap.types.String().set(`TXT test file`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`Purpose: Provide example of this file type`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`Document file type: TXT`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`Version: 1.0`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`Remark:`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`Example content:`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`The names "John Doe" for males, "Jane Doe" or "Jane Roe" for females, or "Jonnie Doe" and "Janie Doe" for children, or just `),abap.operators.concat(new abap.types.String().set(` "Doe" non-gender-specifically are used as placeholder names for a party whose true identity is unknown or must `),abap.operators.concat(new abap.types.String().set(`be withheld in a legal action, case, or discussion. The names are also used to refer to acorpse or hospital patient whose `),abap.operators.concat(new abap.types.String().set(`identity is unknown. This practice is widely used in the United States and Canada, but is rarely used in other `),abap.operators.concat(new abap.types.String().set(`English-speaking countries including the United Kingdom itself, from where the use of "John Doe" in a legal context `),abap.operators.concat(new abap.types.String().set(`originates. The names Joe Bloggs or John Smith are used in the UK instead, as well as in Australia and New Zealand.`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`John Doe is sometimes used to refer to a typical male in other contexts as well, in a similar manner to John Q. Public,`),abap.operators.concat(new abap.types.String().set(` known in Great Britain as Joe Public, John Smith or Joe Bloggs. For example, the first name listed on a form is often `),abap.operators.concat(new abap.types.String().set(`John Doe, along with a fictional address or other fictional information to provide an example of how to fill in the form`),abap.operators.concat(new abap.types.String().set(`. The name is also used frequently in popular culture, for example in the Frank Capra film Meet John Doe. John Doe was `),new abap.types.String().set(`also the name of a 2002 American television series.`)))))))))))))))))))))))))));
    return r_result;
  }
}
abap.Classes['CLAS-Z2UI5_CL_DEMO_APP_035-LCL_FILE_API'] = lcl_file_api;
lcl_file_api.ty_s_suggest = new abap.types.Structure({
"name": new abap.types.String({qualifiedName: "LCL_FILE_API=>TY_S_SUGGEST-NAME"}),
"value": new abap.types.String({qualifiedName: "LCL_FILE_API=>TY_S_SUGGEST-VALUE"})}, "lcl_file_api=>ty_s_suggest", undefined, {}, {});
lcl_file_api.ty_t_suggest = abap.types.TableFactory.construct(new abap.types.Structure({
"name": new abap.types.String({qualifiedName: "LCL_FILE_API=>TY_S_SUGGEST-NAME"}),
"value": new abap.types.String({qualifiedName: "LCL_FILE_API=>TY_S_SUGGEST-VALUE"})}, "lcl_file_api=>ty_s_suggest", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "lcl_file_api=>ty_t_suggest");

//# sourceMappingURL=z2ui5_cl_demo_app_035.clas.locals.mjs.map
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

/***/ })

}]);
//# sourceMappingURL=output_z2ui5_cl_demo_app_035_clas_locals_mjs.bundle.js.map