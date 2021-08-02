import { Injectable } from '@angular/core';
// we have imported fireAuth Metthod from angualar Fire
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  isLoggedIn = false;
  constructor(public firebaseAuth: AngularFireAuth, private router: Router) {}

  async signIn(email: string, password: string) {
    await this.firebaseAuth
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        console.log(res);
        this.isLoggedIn = true;
        this.router.navigate(['/home']);
        localStorage.setItem('user', JSON.stringify(res));
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // Logout
  logOut() {
    this.firebaseAuth.signOut();
    localStorage.removeItem('user');
  }
}
