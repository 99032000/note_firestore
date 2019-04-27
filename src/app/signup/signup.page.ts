import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Validators, FormBuilder, FormGroup} from '@angular/forms';
import { Router} from '@angular/router';
import { ToastController } from '@ionic/angular';
import { prepareProfile } from 'selenium-webdriver/firefox';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  signUpForm: FormGroup;
  constructor(
    private afAuth: AuthService, 
    private formBuilder: FormBuilder,
    private router:Router,
    private toastController: ToastController) { }

  ngOnInit() {
    this.signUpForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email] ],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  signUp( formData) {
    this.afAuth.signUp(formData.email, formData.password)
    .then( (response) => {
      console.log(response);
      //successful
      this.router.navigate(['/list']);
    })
    .catch( (error) => {
      console.log(error);
      this.presentToast();
    });
  }
  async presentToast() {
    const toast = await this.toastController.create({

      message: 'this email has been used please try another email',
      position: 'middle',
      showCloseButton: true,
      color: 'warning'
    });
    toast.present();
  }
}
