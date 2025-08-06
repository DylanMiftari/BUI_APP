import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class userService {
  baseUri = environment.baseUri;

  constructor(private http: HttpClient) { }

  public register(pseudo: string, password: string, confirmPassword:string): Observable<any> {
    return this.http.post(`${this.baseUri}/register`, {
      "pseudo": pseudo,
      "password": password,
      "password_confirmation": confirmPassword
    });
  }
}
