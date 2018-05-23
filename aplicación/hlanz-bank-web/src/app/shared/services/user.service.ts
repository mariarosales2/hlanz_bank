import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario } from '../model/usuario.model';
import { Login } from '../model/login.model';
import { CuentasService } from './cuentas.service';
// import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable()
export class UserService {
  encode : String;
  constructor(private http : HttpClient/* , private jwtHelper : JwtHelperService */) { 
  }

  
  login(login : Login) : Observable<Usuario>{
    this.encode = btoa(login.dni + ":" + login.pin);
    return this.http.post<Usuario>(CuentasService.host+"services/rest/usuarios/autenticar", this.encode, httpOptions)
    .pipe( user => user );
  }
  
  public static isAuthenticated(): boolean {
    const token = localStorage.getItem('user');
    if(token != undefined)
      return true;
    return false;
  }
  
  usuarios() :  Observable<Usuario[]> {
    return this.http.get<Usuario[]>(CuentasService.host+"services/rest/usuarios/usuarios")
      .pipe(data => data);
  }

  usuarioId(id : number) : Observable<Usuario>{
    return this.http.post<Usuario>(CuentasService.host+"services/rest/usuarios/buscar", id)
      .pipe(data => data);
  }

  crear(usuario : Usuario) {
    return this.http.post(CuentasService.host+"services/rest/usuarios/registro", usuario)
      .pipe( data => data);
  }

  modificar(usuario : Usuario) {
    return this.http.post(CuentasService.host+"services/rest/usuarios/modificar", usuario);
  }
}

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type' :  'text/plain'
  })
};
