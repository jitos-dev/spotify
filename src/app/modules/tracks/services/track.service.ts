import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class TrackService {

  //En esta variable es donde vamos a recoger las canciones para pasarlas a cualquier parte de la aplicación
  //dataTracksTrending$: Observable<TrackModel[]> = of([])

  //La url de la api donde hacemos la consulta para traer las canciones. Esta en los archivos de enviroments
  private readonly URL = environment.api

  constructor(private httpClient: HttpClient) {
    /*Otra forma de hacerlo es mirando que es lo que trae el archivo que queremos importar. Si vemos este
    lo que trae dentro es "data" que es un array por lo que podemos obtener los datos también así:
    this.dataTracksTrending$ = dataRaw.data */
    //const { data }: any = (dataRaw as any).default;
    //this.dataTracksTrending$ = of(data)
  }


  /**La librería de HttpClient (de HttpClientModule) tiene los métodos de get, post, put y delete que podemos utilizar para
   * las consultas.
   */
  getAllTracks$(): Observable<any> {
    return this.httpClient.get(this.URL + "/tracks")
  }
}
