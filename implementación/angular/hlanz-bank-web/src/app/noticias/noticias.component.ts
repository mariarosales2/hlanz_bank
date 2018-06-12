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
  info : Noticias = new Noticias();
  id : string;
  constructor(private noticiasService : NoticiasService, private route : ActivatedRoute) { }

  getNoticia(){
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);
      this.noticiasService.getNoticia(Number.parseInt(this.id))
        .subscribe(noticia => this.info = noticia);
  }
  ngOnInit() {
    this.getNoticia();
  }
}