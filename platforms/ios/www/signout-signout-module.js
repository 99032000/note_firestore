(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["signout-signout-module"],{

/***/ "./src/app/signout/signout.module.ts":
/*!*******************************************!*\
  !*** ./src/app/signout/signout.module.ts ***!
  \*******************************************/
/*! exports provided: SignoutPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignoutPageModule", function() { return SignoutPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _signout_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signout.page */ "./src/app/signout/signout.page.ts");







var routes = [
    {
        path: '',
        component: _signout_page__WEBPACK_IMPORTED_MODULE_6__["SignoutPage"]
    }
];
var SignoutPageModule = /** @class */ (function () {
    function SignoutPageModule() {
    }
    SignoutPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_signout_page__WEBPACK_IMPORTED_MODULE_6__["SignoutPage"]]
        })
    ], SignoutPageModule);
    return SignoutPageModule;
}());



/***/ }),

/***/ "./src/app/signout/signout.page.html":
/*!*******************************************!*\
  !*** ./src/app/signout/signout.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button>\n\n      </ion-menu-button>\n    </ion-buttons>\n    <ion-title>signout</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<ion-list>\n  <ion-item lines=\"none\">\n    <ion-button (click) = \"signOut()\">sign out</ion-button>\n  </ion-item>\n</ion-list>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/signout/signout.page.scss":
/*!*******************************************!*\
  !*** ./src/app/signout/signout.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZ25vdXQvc2lnbm91dC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/signout/signout.page.ts":
/*!*****************************************!*\
  !*** ./src/app/signout/signout.page.ts ***!
  \*****************************************/
/*! exports provided: SignoutPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignoutPage", function() { return SignoutPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




//import { Todo, TodoService } from '../todo.service'
var SignoutPage = /** @class */ (function () {
    function SignoutPage(autherService, router) {
        this.autherService = autherService;
        this.router = router;
    }
    SignoutPage.prototype.ngOnInit = function () {
    };
    SignoutPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signout',
            template: __webpack_require__(/*! ./signout.page.html */ "./src/app/signout/signout.page.html"),
            styles: [__webpack_require__(/*! ./signout.page.scss */ "./src/app/signout/signout.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], SignoutPage);
    return SignoutPage;
}());



/***/ })

}]);
//# sourceMappingURL=signout-signout-module.js.map