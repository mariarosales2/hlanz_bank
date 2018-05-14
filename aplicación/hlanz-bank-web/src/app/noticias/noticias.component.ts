import { Component, OnInit } from '@angular/core';
import { Noticias } from '../shared/model/noticias.model';
import { NoticiasService } from '../shared/services/noticias.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-info',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.scss']
})
export class NoticiasComponent implements OnInit {
  info : Noticias;
  constructor(private noticiasService : NoticiasService, private route : ActivatedRoute,
              private location : Location) { }

  getNoticia(){
    const id = +this.route.snapshot.paramMap.get('id');
    this.noticiasService.getNoticia(id)
    .subscribe(noticia => this.info = noticia);
  }
  ngOnInit() {
  }
}