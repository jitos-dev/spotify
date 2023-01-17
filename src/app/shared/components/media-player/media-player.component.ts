import { Component, OnDestroy, OnInit } from '@angular/core';
import { TrackModel } from '../../../core/models/tracks.model';
import { MultimediaService } from '../../services/multimedia.service';
import { Subscription } from 'rxjs'; //Programación reactiva

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})
export class MediaPlayerComponent implements OnInit, OnDestroy {

  mockCover: TrackModel = {
    cover: '',
    name: '',
    album: '',
    url: '',
    _id: 1
  }

  listObservers$: Array<Subscription> = []

  constructor(private multimediaService: MultimediaService) { }

  //Este es el primer ciclo de vida que se ejecuta
  ngOnInit(): void {
    const observer1$: Subscription = this.multimediaService.callback.subscribe(
      (response: TrackModel) => {
        console.log('Recibiendo cancion...', response);
      }
    );

    //Esto es por si tenemos varios observadores para eliminarlos todos más rápido
    this.listObservers$ = [observer1$];
  }


  /*Este es el último ciclo de vida que se ejecuta y destruimos las subscripciones que tengamos
  para liberar los recursos que si no se queda a la escucha*/
  ngOnDestroy(): void {
    this.listObservers$.forEach(subscription => subscription.unsubscribe())
  }

}
