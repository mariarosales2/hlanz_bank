import { Component, OnInit } from '@angular/core';
import { Noticias } from '../shared/model/noticias.model';
import { NoticiasService } from '../shared/services/noticias.service';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.scss']
})
export class TarjetasComponent implements OnInit {
  noticias : Noticias[];

  constructor(private noticiasService : NoticiasService) { }

  ngOnInit() {
    this.noticiasService.getNoticias()
      .subscribe(data => this.noticias = data);
  }

}
