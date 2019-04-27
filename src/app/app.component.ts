import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public user: any;
  public email: string;
  public appPages = [
    
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

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private afAuth: AngularFireAuth,
    private router: Router
  ) {
    this.initializeApp();
    this.checkAuthStatus();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  checkAuthStatus() {
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.user = user;
        this.email = user.email;
        // update navigation for logged in user
        this.router.navigate(['/list']);
        this.appPages = [
          
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
      } else {
        // update navigation for not authed user
        this.user = null;
        this.router.navigate(['/signup']);
        this.appPages = [
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
  }// check auth status

}
