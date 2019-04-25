import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
var SignupPage = /** @class */ (function () {
    function SignupPage(afAuth, formBuilder, router) {
        this.afAuth = afAuth;
        this.formBuilder = formBuilder;
        this.router = router;
    }
    SignupPage.prototype.ngOnInit = function () {
        this.signUpForm = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]]
        });
    };
    SignupPage.prototype.signUp = function (formData) {
        var _this = this;
        this.afAuth.signUp(formData.email, formData.password)
            .then(function (response) {
            console.log(response);
            //successful
            _this.router.navigate(['/home']);
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    SignupPage = tslib_1.__decorate([
        Component({
            selector: 'app-signup',
            templateUrl: './signup.page.html',
            styleUrls: ['./signup.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [AuthService,
            FormBuilder,
            Router])
    ], SignupPage);
    return SignupPage;
}());
export { SignupPage };
//# sourceMappingURL=signup.page.js.map