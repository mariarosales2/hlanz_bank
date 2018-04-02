import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../model/user';

@Injectable()
export class UserService {

  constructor(private http : HttpClient) { 
  }

  login(usuario : User) : Observable<User>{
    return this.http.post<User>("http://localhost:8080/hlanz-bank-web/services/rest/usuarios/autenticar",usuario, httpOptions)
      .pipe(user => user);
  }
}

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};
