import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-matchcard',
  templateUrl: './matchcard.component.html',
  styleUrls: ['./matchcard.component.scss'],
})
export class MatchcardComponent implements OnInit {
  @Input() isSinglePlayer: boolean = true;
  @Input() isDoublePlayer: boolean = true;
  @Input() isTiming: boolean = true;
  constructor() {}

  teamNameSecond: string = 'MI';
  teamNameFirst: string = 'RCB';
  sportType: string = 'CRICKET';
  tournamentType: string = 'Indian Premier League 2021';
  matchTime: string = '02:40PM - 04:30 PM';
  matchType: string = 'Live event';

  ngOnInit(): void {}
}
