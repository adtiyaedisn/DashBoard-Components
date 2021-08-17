import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AngularFireModule } from '@angular/fire';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { FirebaseService } from './services/firebase.service';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { BackComponent } from './back/back.component';
import { MatchcardComponent } from './matchcard/matchcard.component';
import { UsercardComponent } from './usercard/usercard.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, HomeComponent, HeaderComponent, BackComponent, MatchcardComponent, UsercardComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp({}),
    FormsModule,
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent],
})
export class AppModule {}
