import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(public firebaseServie: FirebaseService) {}
  signIn: boolean = true;
  email: string = '';
  password: string = '';
  ngOnInit(): void {
    if (localStorage.getItem('user') !== null) {
      this.signIn = true;
    } else {
      this.signIn = false;
    }
  }

  async onSignin(email: string, password: string) {
    await this.firebaseServie.signIn(email, password);
    if (this.firebaseServie.isLoggedIn) {
      this.signIn = true;
    }
  }
}
