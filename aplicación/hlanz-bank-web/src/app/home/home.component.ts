import { Component, OnInit } from '@angular/core';
import { NoticiasService } from '../services/noticias.service';
import { Noticias } from '../model/noticias';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [ NoticiasService]
})
export class HomeComponent implements OnInit {
  noticias : Noticias[];

  constructor(private infoService : NoticiasService) { }
  
  getNoticias(){
    this.infoService.getInfo()
      .subscribe(data => this.noticias = data.slice(0,3));
  }

  ngOnInit() {
    this.getNoticias();
  }

}
