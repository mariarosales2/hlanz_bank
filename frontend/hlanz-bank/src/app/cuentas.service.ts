import { Injectable } from '@angular/core';
import { Cuentas } from './saldos/saldos.component';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class CuentasService {

  constructor(private http : HttpClient) { }

  getCuentas(id) : Observable<Cuentas[]> {
    return this.http.post<Cuentas[]>('http://localhost:8080/hlanz-bank-web/services/rest/cuentas/getCuentas',id, httpOptions)
      .pipe(data => data);
  }

}

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'text/plain'
  })
};
