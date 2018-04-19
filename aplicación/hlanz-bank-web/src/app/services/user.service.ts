import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../model/user';
import { Login } from '../model/login';

@Injectable()
export class UserService {
  encode : String;
  constructor(private http : HttpClient) { 
  }

  login(login : Login) : Observable<User>{
    this.encode = btoa(login.dni + ":" + login.pin);
    return this.http.post<User>("http://localhost:8080/hlanz-bank-web/services/rest/usuarios/autenticar", this.encode, httpOptions)
      .pipe( user => user );
  }
}

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type' :  'text/plain'
  })
};
