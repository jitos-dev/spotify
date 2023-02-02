import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.css']
})
export class AuthPageComponent implements OnInit {

  /**Formulario. FormGroup hace referencia a la etiqueta Form y luego cada FormControl
   * hace referencia a cada uno de los imput
   */
  formLogin: FormGroup = new FormGroup({});

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    /**Dentro del constructor de FormControl podemos darle valor a los campos del formulario por ejemplo
    * si es un formulario de modificación donde queremos ponerle los valores que nos llegan. Podemos ver
    * el ejemplo comentado
    */
    this.formLogin = new FormGroup(
      {
        email: new FormControl('', [
          Validators.required,
          Validators.email
        ]),
        password: new FormControl('', [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(12)
        ])
      }
    );

    /*this.formLogin = new FormGroup(
      {            
        email: new FormControl('jitos@jitos.dev'),
        password: new FormControl()
      }
    );*/
    console.log(this.formLogin);
  }

  sendLogin(): void {
    //Con esto recogemos los valores del formulario cuando pinchamos en enviar. Devuelve un JSON
    const body = this.formLogin.value;

    //const peticion$ = this.httpClient.post("", body)
  }

}
