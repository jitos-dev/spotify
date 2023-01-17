import { Component, Input, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { MultimediaService } from '../../services/multimedia.service';

@Component({
  selector: 'app-card-player',
  templateUrl: './card-player.component.html',
  styleUrls: ['./card-player.component.css']
})
export class CardPlayerComponent implements OnInit {

  @Input() mode: 'small' | 'big' = 'small'
  @Input() track: TrackModel = { _id: 0, name: '', album: '', cover: '', url: '' }

  /*MultimediaService es un objeto que nos podemos subscribir o emitir un evento. Como
  estamos en card-player este será el que emita el vento de pulsar click y media-player
  será el que se subscriba para recibir la info*/
  constructor(private multimediaService: MultimediaService) { }

  ngOnInit() {
  }

  sendPlay(track: TrackModel) {
    console.log('Enviando cancion...', track);
    this.multimediaService.callback.emit(track);
  }

}
