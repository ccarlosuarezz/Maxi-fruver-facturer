import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  public findProduct(searchProduct: string) {
    const headers =  new HttpHeaders()
    .set('token', localStorage.getItem('token')!);
    return this.http.get<any>(environment.APIHost+'/product/'+searchProduct, {headers})
    .pipe(catchError((err) => of(err.error)));
  }

  public createProduct(product: any) {
    const headers =  new HttpHeaders()
    .set('token', localStorage.getItem('token')!);
    return this.http.post<any>(environment.APIHost+'/product', product, {headers})
    .pipe(catchError((err) => of(err.error)));
  }
}