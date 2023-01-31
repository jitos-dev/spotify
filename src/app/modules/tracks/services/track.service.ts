import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, filter, map, mergeMap, tap } from 'rxjs/operators'
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import * as dataRaw from '@data/tracks.json';
import { TrackModel } from '../../../core/models/tracks.model';
import { resolve } from 'url';


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
   * Con los Observable podemos utilizar los "pipe()" pero estos son de rxjs y no tenemos que crearlos. En este caso hemos
   * utilizado "map" porque queremos que lo que trae que es un array que se llama "data" devolver solo lo que tiene el array
   * y no el array en sí.
   */
  getAllTracks$(): Observable<any> {
    return this.httpClient.get(this.URL + "/tracks")
      .pipe(
        map((dataRaw: any) => {
          return dataRaw.data
        }),
        catchError((err) => {
          const { status, statusText } = err
          console.log("Error en service-------> ", [status, statusText]);

          //En real lo normal es mandar esto a algún sitio para registrar los errores

          return of([])
        })
      )
  }

  /*Este va a ser otro ejemplo de pipe con Observable aunque no lo usemos pero es para ver lo que podemos hacer.
  Para este ejemplo lo que hacemos es quedarnos con la "data" primero. Luego le damos la vuelta al array con reverse()
  y quitamos la canción con el id 1.*/
  getReverseTracks(): Observable<any> {
    return this.httpClient.get(this.URL + "/tracks")
      .pipe(
        map((dataRaw: any) => {
          return dataRaw.data
        }),
        map((data: any) => {
          return data.reverse()
            .filter((trackModel: TrackModel) => trackModel._id !== 1)
        })
      )
  }

  /**
   * Esta es una función de prueba que no tiene mucho sentido pero es para ver lo que podemos hacer con los
   * pipe() y los observables. En este caso le vamos a pasar la lista de canciones y un id. La función los
   * filtra y los devuelve la lista sin la canción con ese id. Luego la utilizamos en la función de
   * getReverseTracks2$
   * @param listTracks Lista de canciones filtrada
   * @param id 
   * @returns 
   */
  private skipById(listTracks: TrackModel[], id: number): Promise<TrackModel[]> {
    return new Promise((resolve, reject) => {
      const listTmp = listTracks.filter((track) => track._id != id)
      resolve(listTmp)
    })
  }

  /*Para este caso utlizamos "mergeMap" porque la función skipById lo que devuelve es una "Promise" y para pasar
  de promise a observable se utiliza mergeMap.
  Si queremos ver que es lo que va a devolver la función tenemos el operador "tap()" el cual solo vale para
  darnos una copia de lo que devuelve la función por si queremos verlo en un console.log o lo que queramos.*/
  getReverseTracks2(): Observable<any> {
    return this.httpClient.get(this.URL + "/tracks")
      .pipe(
        map((dataRaw: any) => {
          return dataRaw.data
        }),
        mergeMap((data: any) => {
          return this.skipById(data.reverse(), 1)
        }),
        tap((data) => console.log(data)),
        catchError((err) => {
          console.log('Error charge the data------>', err)
          return of([])
        })
      )
  }
}
