import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movimientos } from '../model/movimientos.model';
import { CuentasService } from './cuentas.service';
import 'rxjs/add/operator/catch';

@Injectable()
export class MovimientosService {
  private url = "./services/rest/movimientos/buscar";
  constructor(private http : HttpClient) { }

  movimientos(idCuenta : number) : Observable<Movimientos[]>{
    return this.http.post<Movimientos[]>(this.url, idCuenta, httpOptions)
      .pipe(data => data)
      // .catch(error => Observable.throw(error))
  }

  transferir(transferencia : Movimientos){
    return this.http.post<Movimientos[]>('./services/rest/movimientos/transferencia', transferencia)
      .pipe(data => data)
      // .catch(error => Observable.throw(error))
  }
}

const httpOptions = {headers : new HttpHeaders({"Content-type" : "text/plain"})};
