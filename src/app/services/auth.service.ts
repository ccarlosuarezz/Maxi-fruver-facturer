import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, tap } from 'rxjs/operators';
import { of, Observable } from 'rxjs';
import {environment} from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {

  }

  public login(email: string, password: string) {
    // const user = new HttpParams()
    // .set('email', email)
    // .set('password', password);
    const user = {
      email: email,
      password: password
    };
    return this.http.post<any>(environment.APIHost+'/login', user)
    .pipe(catchError((err) => of(err.error))); // of transforma un valor booleano a un observable
  }
}