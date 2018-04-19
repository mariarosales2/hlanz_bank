import { Component, OnInit } from '@angular/core';
import { interceptingHandler } from '@angular/common/http/src/module';
import { User } from '../model/user';
import { UserService } from '../services/user.service';
import { isUndefined } from 'util';
import { StorageService } from '../services/storage.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Login } from '../model/login';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  providers: [ UserService, StorageService ]
})
export class NavComponent implements OnInit {
  elementos : Elementos[];
  usuario : User;
  login : Login = new Login();
  load : boolean = false;
  error : boolean = false;
  public sesion = false;

  constructor(private userService : UserService,
              private storageService : StorageService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  
  autenticar(){
    this.load = true;
    this.usuario = null;
    this.userService.login(this.login)
    .subscribe(user => {
        localStorage.setItem("user", JSON.stringify(user));
        this.comprobarLogin();
        this.comprobarNav();
        this.load = false;
    }, error => {
        this.error = true;
        this.load = false;
      });
  }

  logout(){
    localStorage.clear();
    this.sesion = false;
    this.comprobarNav();
    this.router.navigate(['']);
  }

  comprobarLogin(){
    if(localStorage.getItem("user"))
      this.sesion = true;
  }

  comprobarNav(){
    if(this.sesion){
      this.elementos = [
        {name : "Inicio" , link : ""},
        {name : "Movimientos" , link : "cuentas"},
        {name : "Transferencias" , link : "transferencia"}
      ]
    }else{
      this.elementos = [
        {name : "Inicio", link : ""},
        {name : "Cuentas y tarjetas", link : ""},
        {name: "Créditos" , link : "creditos"}
      ];
    }
  }

    ngOnInit() {
    this.comprobarLogin();
    this.comprobarNav();
  }
}

export interface Elementos {
  name: String;
  link: String;
}