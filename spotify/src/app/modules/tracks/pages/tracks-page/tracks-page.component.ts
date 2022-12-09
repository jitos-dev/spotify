import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tracks-page',
  templateUrl: './tracks-page.component.html',
  styleUrls: ['./tracks-page.component.css']
})
export class TracksPageComponent implements OnInit {

  mockTrackList = [
    {
      name: 'BEBE (OFICIAL)'
    },
    {
      name: 'BEBE (OFICIAL)'
    },
    {
      name: 'BEBE (OFICIAL)'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
