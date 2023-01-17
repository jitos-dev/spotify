import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MultimediaService {

  //Para escuchar cuando se pulsa en reproducir la canción
  callback: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }
}
