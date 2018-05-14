import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Noticias } from '../model/noticias.model';
import { CuentasService } from './cuentas.service';

@Injectable()
export class NoticiasService {

  constructor(private http : HttpClient) { }

  getNoticias() : Observable<Noticias[]> {
    return this.http.get<Noticias[]>(CuentasService.host+'services/rest/info/noticias')
      .pipe(data => data);
  }

  getNoticia(idNoticia : number) : Observable<Noticias> {
    return this.http.get<Noticias>(CuentasService.host+'services/rest/info/noticia/'+idNoticia)
      .pipe(data => data);
  }

  crear(noticia : Noticias){
    return this.http.post(CuentasService.host+'services/rest/info/crear', noticia);
  }

  modificar(noticia : Noticias){
    return this.http.post(CuentasService.host+'services/rest/info/modificar', noticia);
  }

}

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'text/plain'
  })
}