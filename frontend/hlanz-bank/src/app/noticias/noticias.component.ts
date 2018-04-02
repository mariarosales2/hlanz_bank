import { Component, OnInit } from '@angular/core';
import { Noticias } from '../model/noticias';

@Component({
  selector: 'app-info',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.scss']
})
export class NoticiasComponent implements OnInit {
  info : Noticias;
  constructor() { }

  ngOnInit() {
  }
}