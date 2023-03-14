import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProvidersService {

  constructor(private http: HttpClient) { }

  public createProvider(provider: any) {
    const headers =  new HttpHeaders()
    .set('token', localStorage.getItem('token')!);
    return this.http.post<any>(environment.APIHost+'/provider', provider, {headers})
    .pipe(catchError((err) => of(err.error)));
  }
}