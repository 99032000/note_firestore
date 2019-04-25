import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
var AppComponent = /** @class */ (function () {
    function AppComponent(platform, splashScreen, statusBar, afAuth, router) {
        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.afAuth = afAuth;
        this.router = router;
        this.appPages = [
            {
                title: 'Home',
                url: '/home',
                icon: 'home'
            },
            {
                title: 'List',
                url: '/list',
                icon: 'list'
            },
            {
                title: 'Signup',
                url: '/signup',
                icon: 'person-add'
            },
            {
                title: 'Signout',
                url: '/signout',
                icon: 'exit'
            },
            {
                title: 'Signin',
                url: '/signin',
                icon: 'log-in'
            }
        ];
        this.initializeApp();
        this.checkAuthStatus();
    }
    AppComponent.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    AppComponent.prototype.checkAuthStatus = function () {
        var _this = this;
        this.afAuth.authState.subscribe(function (user) {
            if (user) {
                _this.user = user;
                // update navigation for logged in user
                _this.router.navigate(['/home']);
                _this.appPages = [
                    {
                        title: 'Home',
                        url: '/home',
                        icon: 'home'
                    },
                    {
                        title: 'List',
                        url: '/list',
                        icon: 'list'
                    },
                    {
                        title: 'Signout',
                        url: '/signout',
                        icon: 'exit'
                    }
                ];
            }
            else {
                // update navigation for not authed user
                _this.user = null;
                _this.router.navigate(['/signup']);
                _this.appPages = [
                    {
                        title: 'Signup',
                        url: '/signup',
                        icon: 'person-add'
                    },
                    {
                        title: 'Signin',
                        url: '/signin',
                        icon: 'log-in'
                    }
                ];
            }
        });
    }; // check auth status
    AppComponent = tslib_1.__decorate([
        Component({
            selector: 'app-root',
            templateUrl: 'app.component.html'
        }),
        tslib_1.__metadata("design:paramtypes", [Platform,
            SplashScreen,
            StatusBar,
            AngularFireAuth,
            Router])
    ], AppComponent);
    return AppComponent;
}());
export { AppComponent };
//# sourceMappingURL=app.component.js.map