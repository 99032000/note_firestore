import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SignoutPage } from './signout.page';
var routes = [
    {
        path: '',
        component: SignoutPage
    }
];
var SignoutPageModule = /** @class */ (function () {
    function SignoutPageModule() {
    }
    SignoutPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [SignoutPage]
        })
    ], SignoutPageModule);
    return SignoutPageModule;
}());
export { SignoutPageModule };
//# sourceMappingURL=signout.module.js.map