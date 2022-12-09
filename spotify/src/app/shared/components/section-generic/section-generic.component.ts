import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-generic',
  templateUrl: './section-generic.component.html',
  styleUrls: ['./section-generic.component.css']
})
export class SectionGenericComponent implements OnInit {

  //Ttitulo de la seccion. Se lo ponemos en la etiqueta donde la utilizamos (Tracks-page-componets)
  @Input() title: string = ''
  //a la variable mode le decimos que puede tener solo dos valore que pueden ser big o small y por defecto es big
  @Input() mode: 'big' | 'small' = 'big'
  //Pa
  @Input() dataTracks: Array<any> = []

  constructor() { }

  ngOnInit() {
  }

}
