(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/shared/state/offers/selectors/offers.selector.ts":
/*!******************************************************************!*\
  !*** ./src/app/shared/state/offers/selectors/offers.selector.ts ***!
  \******************************************************************/
/*! exports provided: selectOfferState, selectOffer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectOfferState", function() { return selectOfferState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectOffer", function() { return selectOffer; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");

const selectOfferState = (state) => state.offer;
const selectOffer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectOfferState, state => state.offers);


/***/ }),

/***/ "./src/app/shared/state/user/selectors/user.selector.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/state/user/selectors/user.selector.ts ***!
  \**************************************************************/
/*! exports provided: selectUserState, selectAll, selectState, select */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectUserState", function() { return selectUserState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAll", function() { return selectAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectState", function() { return selectState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "select", function() { return select; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");

const selectUserState = (state) => state.user;
const selectAll = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectUserState, state => state.user);
const selectState = (state) => state;
const select = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, state => state);


/***/ })

}]);
//# sourceMappingURL=common.js.map