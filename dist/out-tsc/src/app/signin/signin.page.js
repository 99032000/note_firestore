import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
var SigninPage = /** @class */ (function () {
    function SigninPage(afAuth, formBuilder, router, toastController) {
        this.afAuth = afAuth;
        this.formBuilder = formBuilder;
        this.router = router;
        this.toastController = toastController;
    }
    SigninPage.prototype.ngOnInit = function () {
        this.signInForm = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]]
        });
    };
    SigninPage.prototype.signIn = function (formData) {
        var _this = this;
        this.afAuth.signIn(formData.email, formData.password)
            .then(function (response) {
            console.log(response);
            //successful
            _this.router.navigate(['/home']);
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    SigninPage.prototype.presentToast = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var toast;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: 'fail to log in',
                        })];
                    case 1:
                        toast = _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SigninPage = tslib_1.__decorate([
        Component({
            selector: 'app-signin',
            templateUrl: './signin.page.html',
            styleUrls: ['./signin.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [AuthService,
            FormBuilder,
            Router,
            ToastController])
    ], SigninPage);
    return SigninPage;
}());
export { SigninPage };
//# sourceMappingURL=signin.page.js.map