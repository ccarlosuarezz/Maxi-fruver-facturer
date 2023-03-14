import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {environment} from '../../environments/environment.prod';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  public createCashier(user: any) {
    const headers =  new HttpHeaders()
    .set('token', localStorage.getItem('token')!);
    return this.http.post<any>(environment.APIHost+'/users', user, {headers})
    .pipe(catchError((err) => of(err.error)));
  }
}