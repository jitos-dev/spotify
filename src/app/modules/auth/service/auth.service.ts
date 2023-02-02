import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators'
import { CredentialsModel } from '@core/models/credentials.model';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly URL = environment.api

  constructor(
    private httpClient: HttpClient,
    private cookieService: CookieService) { }

  sendCredentials(email: string, password: string): Observable<any> {
    const credentialsModel: CredentialsModel = { email, password }
    console.log("credentialsModel------->", credentialsModel);

    return this.httpClient.post(this.URL + "/auth/login", credentialsModel)
      .pipe(
        tap(response => {
          //Creamos una cookie para guardar el token de sesión cuando se logea el usuario
          const { tokenSession } = response
          this.cookieService.set('token', tokenSession, 1, '/')
        })
      )
  }
}
