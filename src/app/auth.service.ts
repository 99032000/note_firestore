import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import { resolve } from 'url';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  constructor(private afAuth: AngularFireAuth) { }
  signUp(email: string, password: string) {
    return new Promise( (resolve, reject) => {
      this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then((response) => {resolve(response); })
      .catch((error) => { reject(error); });
    });
  }

  signOut() {
    return new Promise((resolve, reject) => {
      this.afAuth.auth.signOut()
      .then(() => {resolve(true); })
      .catch((error) => reject(error));
    });
  }

  signIn( email: string, password: string) {
    return new Promise((resolve, reject) => {
      this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then((response) => {resolve(response); })
      .catch((error) => reject(error));
    });
  }
}
