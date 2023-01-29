import { Injectable } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { Observable, of } from 'rxjs';
import * as dataRaw from '@data/tracks.json';


@Injectable({
  providedIn: 'root'
})
export class TrackService {

  //En esta variable es donde vamos a recoger las canciones para pasarlas a cualquier parte de la aplicación
  dataTracksTrending$: Observable<TrackModel[]> = of([])
  dataTracksRandom$: Observable<Array<TrackModel>> = of([])

  constructor() {
    /*Otra forma de hacerlo es mirando que es lo que trae el archivo que queremos importar. Si vemos este
    lo que trae dentro es "data" que es un array por lo que podemos obtener los datos también así:
    this.dataTracksTrending$ = dataRaw.data */
    const { data }: any = (dataRaw as any).default;
    this.dataTracksTrending$ = of(data)
  }
}
