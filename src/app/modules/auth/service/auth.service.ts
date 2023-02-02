import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';
import { CredentialsModel } from '@core/models/credentials.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly URL = environment.api

  constructor(private httpClient: HttpClient) { }

  sendCredentials(email: string, password: string): Observable<any> {
    const credentialsModel: CredentialsModel = { email, password }

    return this.httpClient.post(this.URL + "/auth", credentialsModel)
  }
}
