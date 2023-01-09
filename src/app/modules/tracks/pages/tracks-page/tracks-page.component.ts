import { Component, OnInit } from '@angular/core';
import { TrackModel } from '../../../../core/models/tracks.model';
import * as dataRaw from '@data/tracks.json'

@Component({
  selector: 'app-tracks-page',
  templateUrl: './tracks-page.component.html',
  styleUrls: ['./tracks-page.component.css']
})
export class TracksPageComponent implements OnInit {

  mockTrackList = []

  constructor() { }

  ngOnInit() {
    //se puede hacer de las dos formas y es lo mismo
    //const { data }: any = (dataRaw as any).default
    //const data: any = dataRaw.data
    this.mockTrackList = dataRaw.data
  }

}
