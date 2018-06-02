import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Noticias } from '../model/noticias.model';
import { CuentasService } from './cuentas.service';
import 'rxjs/add/operator/catch';

@Injectable()
export class NoticiasService {

  constructor(private http : HttpClient) { }

  getNoticias() : Observable<Noticias[]> {
    return this.http.get<Noticias[]>('./services/rest/info/noticias')
      .pipe(data => data)
      // .catch(error => Observable.throw(error))
  }

  getNoticia(idNoticia : number) : Observable<Noticias> {
    return this.http.get<Noticias>('./services/rest/info/noticia/'+idNoticia)
      .pipe(data => data)
      // .catch(error => Observable.throw(error))
  }

  crear(noticia : Noticias){
    return this.http.post('./services/rest/info/crear', noticia)
    // .catch(error => Observable.throw(error));
  }

  modificar(noticia : Noticias){
    return this.http.post('./services/rest/info/modificar', noticia)
    .catch(error => Observable.throw(error));
  }

}

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'text/plain'
  })
}