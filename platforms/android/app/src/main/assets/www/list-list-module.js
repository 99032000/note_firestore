(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["list-list-module"],{

/***/ "./src/app/list/list.module.ts":
/*!*************************************!*\
  !*** ./src/app/list/list.module.ts ***!
  \*************************************/
/*! exports provided: ListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListPageModule", function() { return ListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list.page */ "./src/app/list/list.page.ts");







var ListPageModule = /** @class */ (function () {
    function ListPageModule() {
    }
    ListPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _list_page__WEBPACK_IMPORTED_MODULE_6__["ListPage"]
                    }
                ])
            ],
            declarations: [_list_page__WEBPACK_IMPORTED_MODULE_6__["ListPage"]]
        })
    ], ListPageModule);
    return ListPageModule;
}());



/***/ }),

/***/ "./src/app/list/list.page.html":
/*!*************************************!*\
  !*** ./src/app/list/list.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n      <ion-title>Todo list</ion-title>\n      <ion-button slot=\"end\" (click) = \"signOut()\">sign out</ion-button>\n    </ion-toolbar>\n  </ion-header>\n\n<ion-content>\n  <ion-toolbar color=\"secondary\">\n    <ion-input [(ngModel)]=\"inputItem\" placeholder=\"add an item\" name = \"inputItem\"></ion-input>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"add(inputItem)\" [disabled]=\"!inputItem\">Add</ion-button>\n    </ion-buttons>\n    \n  </ion-toolbar>\n  <ion-list>\n    <ion-item *ngFor = \"let todo of items  | async\" [class.done]= \"todo.status\">\n      <ion-buttons slot=\"start\">\n        <ion-checkbox [checked]= \"todo.status\" (ionChange)=\"update(todo)\"></ion-checkbox>\n      </ion-buttons>\n      \n      <ion-label>{{todo.name}}</ion-label>\n      <ion-buttons slot=\"end\">\n        <ion-button fill=\"clear\" (click)=\"delete(todo)\" *ngIf=\"todo.status\">\n          <ion-icon name=\"close\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n      \n      \n    </ion-item>\n    \n  </ion-list>\n  \n</ion-content>\n"

/***/ }),

/***/ "./src/app/list/list.page.scss":
/*!*************************************!*\
  !*** ./src/app/list/list.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-item.done {\n  text-decoration: line-through; }\n\nion-input {\n  --padding-start: 2em;\n  --background: white;\n  --color: black; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jaGVucGVuZ3l1L0Rlc2t0b3AvY3Jvc3MtcGxhdGZvcm0tZmlyc3RBcHAtbWFzdGVyL25vdGUgY29weS9zcmMvYXBwL2xpc3QvbGlzdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw2QkFBNkIsRUFBQTs7QUFFakM7RUFDSSxvQkFBZ0I7RUFDaEIsbUJBQWE7RUFDYixjQUFRLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9saXN0L2xpc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWl0ZW0uZG9uZXtcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbn1cbmlvbi1pbnB1dHtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDJlbTtcbiAgICAtLWJhY2tncm91bmQ6IHdoaXRlO1xuICAgIC0tY29sb3I6IGJsYWNrO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/list/list.page.ts":
/*!***********************************!*\
  !*** ./src/app/list/list.page.ts ***!
  \***********************************/
/*! exports provided: ListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListPage", function() { return ListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/local-notifications/ngx */ "./node_modules/@ionic-native/local-notifications/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");








var ListPage = /** @class */ (function () {
    function ListPage(afs, afAuth, authService, router, plt, localNotification) {
        var _this = this;
        this.afs = afs;
        this.afAuth = afAuth;
        this.authService = authService;
        this.router = router;
        this.plt = plt;
        this.localNotification = localNotification;
        this.afAuth.auth.onAuthStateChanged(function (user) {
            if (user) {
                _this.selectItems(user.email);
                _this.email = user.email;
                _this.localNotification.schedule({
                    id: 1,
                    title: 'Welcome',
                    text: user.email,
                    // data: { mydata: 'my data'},
                    foreground: true
                });
            }
        });
        // this.itemsDoc.collection<Todo>('todo').ref.where('status','==',false
        // this.localNotification.schedule({
        //   id:1,
        //   title: 'Welcome',
        //   text: this.email,
        //   // data: { mydata: 'my data'},
        //   foreground : true
        // });
    }
    ListPage.prototype.ngOnInit = function () {
    };
    ListPage.prototype.selectItems = function (email) {
        this.itemsDoc = this.afs.doc('users/' + email);
        this.items = this.itemsDoc.collection('todo', function (ref) { return ref.orderBy('status'); }).valueChanges();
    };
    ListPage.prototype.add = function (name) {
        var _this = this;
        var id = this.afs.createId();
        var todo = { name: name, id: id, status: false };
        this.itemsDoc.collection('todo').doc(id).set(todo).then(function () {
            _this.inputItem = '';
        })
            .catch(function (error) {
            alert(error);
        });
    };
    ;
    ListPage.prototype.delete = function (item) {
        this.itemsDoc.collection('todo').doc(item.id).delete();
    };
    ListPage.prototype.update = function (item) {
        if (item.status) {
            item.status = false;
        }
        else {
            item.status = true;
        }
        this.itemsDoc.collection('todo').doc(item.id).set(item);
    };
    ListPage.prototype.signOut = function () {
        var _this = this;
        this.authService.signOut()
            .then(function () { _this.router.navigate(['/signup']); })
            .catch();
    };
    ListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! ./list.page.html */ "./src/app/list/list.page.html"),
            styles: [__webpack_require__(/*! ./list.page.scss */ "./src/app/list/list.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"],
            _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["Platform"],
            _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_6__["LocalNotifications"]])
    ], ListPage);
    return ListPage;
}());



/***/ })

}]);
//# sourceMappingURL=list-list-module.js.map