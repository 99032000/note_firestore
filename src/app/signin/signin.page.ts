import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {

  signInForm: FormGroup;
  constructor(
    private afAuth: AuthService,
    private formBuilder: FormBuilder,
    private router: Router,
    private toastController: ToastController) { }

  ngOnInit() {
    this.signInForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  signIn(formData) {
    this.afAuth.signIn(formData.email, formData.password)
      .then((response) => {
        console.log(response);
        //successful
        this.router.navigate(['/home']);
      })
      .catch((error) => {
        console.log(error);
        this.presentToast();
      });
  }

  async presentToast() {
    const toast = await this.toastController.create({

      message: 'fail to log in\nPlease check your username and password\nor sign up an account',
      position: 'middle',
      showCloseButton: true,
      color: 'warning'
    });
    toast.present();
  }

}


