import { Component, OnInit } from '@angular/core';
import { interceptingHandler } from '@angular/common/http/src/module';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  usuario : Usuario = {
    user : null,
    pass : null
  };

  elementos : Elementos[];
  constructor() {

   }

  nav(){
      this.elementos = [
        {name : "Cuentas y tarjetas", link : "/cuentas"},
        {name: "Créditos" , link : "/creditos"}
      ];
      // this.elementos = [
      //   {name : "Movimientos", link : "/movimientos"},
      //   {name: "Transferencias" , link : "/transferencias"}
      // ];
  }

  ngOnInit() {
    this.nav();
  }

}

export interface Usuario {
  user : string;
  pass : number;
}

export interface Elementos {
  name: string;
  link: string;
}
