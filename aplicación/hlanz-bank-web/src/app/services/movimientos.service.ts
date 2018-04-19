import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movimientos } from '../model/movimientos.model';

@Injectable()
export class MovimientosService {
  private url = "http://localhost:8080/hlanz-bank-web/services/rest/movimientos/buscar";
  constructor(private http : HttpClient) { }

  movimientos(idCuenta : number) : Observable<Movimientos[]>{
    return this.http.post<Movimientos[]>(this.url,idCuenta,httpOptions)
      .pipe(data => data);
  }
}

const httpOptions = {
  headers : new HttpHeaders({"Content-type" : "text/plain"}
  )
}
