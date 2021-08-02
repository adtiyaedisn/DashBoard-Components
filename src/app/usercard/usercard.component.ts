import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usercard',
  templateUrl: './usercard.component.html',
  styleUrls: ['./usercard.component.scss'],
})
export class UsercardComponent implements OnInit {
  constructor() {}
  //
  userName: string = 'Somedude Someone';
  userType: string = 'Cricket Admin';
  userStatus: string = '• Active';
  ngOnInit(): void {}
}
