import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'dashlogin';

  // Header Component
  isCompanyLogo: boolean = false;
  isUserProfile: boolean = true;

  // MatchCard
  isSinglePlayer: boolean = false;
  isDuoPlayer: boolean = true;
  isTiming: boolean = true;
}
