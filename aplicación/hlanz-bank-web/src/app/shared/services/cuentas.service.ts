import { Injectable } from '@angular/core';
import { Cuentas } from '../model/cuentas.model';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

@Injectable()
export class CuentasService {
  constructor(private http : HttpClient) { }
  public static host = "http://localhost:8080/hlanz-bank-web/";

  getCuentas(id) : Observable<Cuentas[]> {
    return this.http.post<Cuentas[]>(CuentasService.host+'services/rest/cuentas/buscar', id, httpOptions)
      .pipe(data => data);
  }

}

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'text/plain'
  })
};
