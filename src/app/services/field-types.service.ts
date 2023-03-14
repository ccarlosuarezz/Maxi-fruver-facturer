import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {environment} from '../../environments/environment.prod';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FieldTypesService {

  constructor(private http: HttpClient) { }

  public getPersonTypes() {
    const headers =  new HttpHeaders()
    .set('token', localStorage.getItem('token')!);
    return this.http.get<any>(environment.APIHost+'/person-types', {headers})
    .pipe(catchError((err) => of(err.error)));
  }

  public getDocumentTypes() {
    const headers =  new HttpHeaders()
    .set('token', localStorage.getItem('token')!);
    return this.http.get<any>(environment.APIHost+'/document-types', {headers})
    .pipe(catchError((err) => of(err.error)));
  }

  public getAddress() {
    return ['Calle', 'Carrera', 'Transversal', 'Diagonal', 'Vereda', 'Municipio', 'Ciudad', ''];
  }

  public getProductCategories() {
    const headers =  new HttpHeaders()
    .set('token', localStorage.getItem('token')!);
    return this.http.get<any>(environment.APIHost+'/categories', {headers})
    .pipe(catchError((err) => of(err.error)));
  }

  public getMeasurementUnits() {
    const headers =  new HttpHeaders()
    .set('token', localStorage.getItem('token')!);
    return this.http.get<any>(environment.APIHost+'/measurement-units', {headers})
    .pipe(catchError((err) => of(err.error)));
  }

  public getProviders() {
    const headers =  new HttpHeaders()
    .set('token', localStorage.getItem('token')!);
    return this.http.get<any>(environment.APIHost+'/providers', {headers})
    .pipe(catchError((err) => of(err.error)));
  }

  public getMeasurementUnitByID(idUnit: number) {
    const headers =  new HttpHeaders()
    .set('token', localStorage.getItem('token')!);
    return this.http.get<any>(environment.APIHost+'/measurement-units/'+idUnit, {headers})
    .pipe(catchError((err) => of(err.error)));
  }
}