import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Usuario } from '../model/usuario.model';
import { Login } from '../model/login.model';
import { CuentasService } from './cuentas.service';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
// import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable()
export class UserService {
  encode : String;
  constructor(private http : HttpClient/* , private jwtHelper : JwtHelperService */) { 
  }

  
  login(login : Login) : Observable<Usuario>{
    this.encode = btoa(login.dni + ":" + login.pin);
    return this.http.post<Usuario>("./services/rest/usuarios/autenticar", this.encode, httpOptions)
    .pipe( user => user )
    .catch((error : HttpErrorResponse) => {return Observable.throw(error.message)});
  }
  
  public static isAuthenticated(): boolean {
    const token = localStorage.getItem('user');
    if(token != undefined)
      return true;
    return false;
  }
  
  usuarios() :  Observable<Usuario[]> {
    return this.http.get<Usuario[]>("./services/rest/usuarios/usuarios")
      .pipe(data => data)
      .catch((error : HttpErrorResponse) => {return Observable.throw(error.message)});
  }

  usuarioId(id : number) : Observable<Usuario>{
    return this.http.post<Usuario>("./services/rest/usuarios/buscar", id)
      .pipe(data => data)
      .catch((error : HttpErrorResponse) => {return Observable.throw(error.message)});
  }

  crear(usuario : Usuario) {
    return this.http.post("./services/rest/usuarios/registro", usuario)
      .pipe( data => data)
      .catch((error : HttpErrorResponse) => {return Observable.throw(error.message)});
  }

  modificar(usuario : Usuario) {
    return this.http.post("./services/rest/usuarios/modificar", usuario)
    .catch((error : HttpErrorResponse) => {return Observable.throw(error.message)});
  }
}

const httpOptions = {
  headers: new HttpHeaders({
    'Authorization' :  'Basic ' + this.encode
  })
};
