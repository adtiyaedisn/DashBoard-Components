import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  // Configs
  @Input() isCompanyLogoVisible = true;
  @Input() isUserProfileVisible = true;

  // Content
  companyLogo: string =
    'https://cdn.edisn.ai/sakura/v1.0/static/assets/img/icons/edisn-icon.svg';
  companyName: string = 'Edisn';
  clientLogo: string = 'https://cdn.cdnlogo.com/logos/e/63/ea-sports.svg';
  greetingMessage: string = 'Hello ESPN!';
  userLogo: string = 'https://cdn.cdnlogo.com/logos/e/63/ea-sports.svg';
  userProfileLogo: string =
    'https://cdn.cdnlogo.com/logos/s/8/sports-direct.svg';
  constructor() {}

  ngOnInit(): void {}
}
