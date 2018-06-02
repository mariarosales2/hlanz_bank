import { Injectable } from '@angular/core';
import { Cuentas } from '../model/cuentas.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

@Injectable()
export class CuentasService {
  constructor(private http : HttpClient) { }
  public static host = "http://localhost:8080/hlanz-bank-web/";

  getCuentas(id) : Observable<Cuentas[]> {
    return this.http.post<Cuentas[]>('./services/rest/cuentas/buscar', id, httpOptions)
      .pipe(data => data)
      // .catch(error => console.log(error));
  }

  cuentas() : Observable<Cuentas[]> {
    return this.http.get<Cuentas[]>('./services/rest/cuentas/cuentas')
    .pipe(data => data)
    // .catch( error => Observable.throw(error))
  }

}

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'text/plain'
  })
};
