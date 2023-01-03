import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appImgBroken]'
})
export class ImgBrokenDirective {

  /**Este Input es para pasar la url de la imagen en la misma etiqueta en vez de pasarla aquí. Lo
   * podemos ver en play-list-body.component.html y en card-player.component.html. Lo hacemos así
   * si queremos por ejemplo que la imagen sea diferente en distintos sitios
   */
  @Input() customImg: string = ''

  /*Este es un Listener que está a la escucha para cuando hay un error en la carga de
  una imagen. Para este ejemplo el tipo es 'error' pero hay muchos más para distintos
  casos que podamos tener. */
  @HostListener('error') handleError(): void {
    const tabError = this.host.nativeElement
    tabError.src = this.customImg
    //tabError.src = '../../assets/images/img-broken.jpg'
  }

  constructor(private host: ElementRef) { }

}
