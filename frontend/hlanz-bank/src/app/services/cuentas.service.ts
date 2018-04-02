import { Injectable } from '@angular/core';
import { Cuentas } from '../model/Cuentas';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

@Injectable()
export class CuentasService {

  constructor(private http : HttpClient) { }

  autenticar(user : String, pin : number){
    return this.http.post("", {'dni' : user, 'pin' : pin}, httpOptions);
  }

  getCuentas(id) : Observable<Cuentas[]> {
    return this.http.post<Cuentas[]>('http://localhost:8080/hlanz-bank-web/services/rest/cuentas/getCuentas', id, httpOptions)
      .pipe(data => data);
  }
}

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'text/plain'
  })
};
