import { Component, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import * as dataRaw from '@data/tracks.json';

@Component({
  selector: 'app-play-list-body',
  templateUrl: './play-list-body.component.html',
  styleUrls: ['./play-list-body.component.css']
})
export class PlayListBodyComponent implements OnInit {

  tracks: Array<TrackModel> = []

  //inicializamos con unos valores por defecto. Lo utilizamos en el HTML para que quede todo más limpio
  optionSort: { orderby: string | null, sort: string } = { orderby: null, sort: 'asc' }

  constructor() { }

  ngOnInit() {
    // Inicializamos tracks con los valores del archivo de canciones
    this.tracks = dataRaw.data
  }

  changeSort(orderby: string | null): void {
    /*De esta forma ordenamos por el parámetro que viene (name, title) y para que cada vez que pinchemos
    se vaya cambiando de orden asc a desc lo cambiamos con un operador ternario*/
    this.optionSort = {
      orderby, //como la propiedad se llama igual que el valor solo lo ponemos una vez
      sort: this.optionSort.sort === 'asc' ? this.optionSort.sort = "desc" : this.optionSort.sort = "asc"
    }
  }

}
