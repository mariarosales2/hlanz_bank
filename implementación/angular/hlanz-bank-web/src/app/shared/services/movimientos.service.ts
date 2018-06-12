import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movimientos } from '../model/movimientos.model';
import { CuentasService } from './cuentas.service';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { HandleError } from './error-handler.service';

@Injectable()
export class MovimientosService {
  private url = "./services/rest/movimientos/buscar";
  constructor(private http : HttpClient, private handlerError : HandleError) { }

  movimientos(idCuenta : number) : Observable<Movimientos[]>{
    return this.http.post<Movimientos[]>(this.url, idCuenta, httpOptions)
      .pipe(data => data)
      .catch((error : HttpErrorResponse) => {return Observable.throw(error.message)})
  }

  transferir(transferencia : Movimientos){
    return this.http.post<Movimientos[]>('./services/rest/movimientos/transferencia', transferencia)
      .pipe(data => data)
      .catch((error : HttpErrorResponse) => {return Observable.throw(error.message)})
  }
}

const httpOptions = {headers : new HttpHeaders({"Content-type" : "text/plain"})};
