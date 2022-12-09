import { Component, OnInit } from '@angular/core';
import { TrackModel } from '../../../core/models/tracks.model';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})
export class MediaPlayerComponent implements OnInit {

  mockCover: TrackModel = {
    cover: '',
    name: '',
    album: '',
    url: '',
    _id: 1
  }

  multimediaService: any = {

  }

  constructor() { }

  ngOnInit() {
  }

}
