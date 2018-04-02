import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Noticias } from '../model/noticias';

@Injectable()
export class NoticiasService {

  constructor(private http : HttpClient) { }

  getInfo() : Observable<Noticias[]> {
    return this.http.get<Noticias[]>('http://localhost:8080/hlanz-bank-web/services/rest/info/getInfo')
      .pipe(data => data);
  }

}

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'text/plain'
  })
}