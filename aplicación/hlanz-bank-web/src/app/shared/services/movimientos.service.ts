import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movimientos } from '../model/movimientos.model';
import { CuentasService } from './cuentas.service';

@Injectable()
export class MovimientosService {
  private url = "services/rest/movimientos/buscar";
  constructor(private http : HttpClient) { }

  movimientos(idCuenta : number) : Observable<Movimientos[]>{
    return this.http.post<Movimientos[]>(CuentasService.host+this.url, idCuenta, httpOptions)
      .pipe(data => data);
  }

  transferir(transferencia : Movimientos){
    return this.http.post<Movimientos[]>(CuentasService.host+'services/rest/movimientos/transferencia', transferencia)
      .pipe(data => data)
  }
}

const httpOptions = {headers : new HttpHeaders({"Content-type" : "text/plain"})};
