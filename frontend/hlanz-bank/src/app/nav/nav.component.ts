import { Component, OnInit } from '@angular/core';
import { interceptingHandler } from '@angular/common/http/src/module';
import { User } from '../model/user';
import { UserService } from '../services/user.service';
import { isUndefined } from 'util';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  providers: [ UserService, StorageService ]
})
export class NavComponent implements OnInit {
  usuario : User  = new User();

  elementos : Elementos[];
  constructor(private userService : UserService, private storageService : StorageService) {

   }

  nav(){
      this.elementos = [
        {name : "Inicio", link : ""},
        {name : "Cuentas y tarjetas", link : "/cuentas"},
        {name: "Créditos" , link : "/creditos"}
      ];
  }

  autenticar(dni : String, pin : number){
    this.userService.login(this.usuario)
      .subscribe(user => this.usuario = user, this.usuario = null);
  }

  comprobarLogin(){
    if(this.usuario != null)
      this.storageService.createSession("usuario", JSON.stringify(this.usuario));
  }

  ngOnInit() {
    this.nav();
  }
}

export interface Elementos {
  name: String;
  link: String;
}
