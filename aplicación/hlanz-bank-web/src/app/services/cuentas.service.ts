import { Injectable } from '@angular/core';
import { Cuentas } from '../model/Cuentas';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

@Injectable()
export class CuentasService {
  constructor(private http : HttpClient) { }

  getCuentas(id) : Observable<Cuentas[]> {
    return this.http.post<Cuentas[]>('http://localhost:8080/hlanz-bank-web/services/rest/cuentas/buscar', JSON.parse(localStorage.getItem("user")).idUsuario, httpOptions)
      .pipe(data => data);
  }


}

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'text/plain'
  })
};
