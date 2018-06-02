import { Component, OnInit } from '@angular/core';
import { interceptingHandler } from '@angular/common/http/src/module';
import { Usuario } from '../shared/model/usuario.model';
import { UserService } from '../shared/services/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Login } from '../shared/model/login.model';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  providers: [ UserService, CookieService]
})
export class NavComponent implements OnInit {
  elementos : Elementos[];
  usuario : Usuario;
  login : Login = new Login();
  static loading : boolean = false;
  error : boolean = false;
  admin : boolean;
  sesion : boolean;
  cookie = false;

  constructor(private userService : UserService,
              private route: ActivatedRoute,
              private router: Router,
              private cookieService : CookieService) {
    this.admin = false;
    this.sesion = UserService.isAuthenticated();
  }

  setCookie(){
    this.cookieService.set("ACCEPT", "1", 1);
  }
  
  autenticar(){
    NavComponent.loading = true;

    this.userService.login(this.login)
      .subscribe((user : Usuario) => {
        localStorage.setItem("user", user.idUsuario.toString());
        this.sesion = UserService.isAuthenticated();
        this.comprobarNav();
        this.router.navigate(['perfil']);
        NavComponent.loading = false;
      }, error => {
        this.error = true;
        NavComponent.loading = false;
      });
  }

  logout(){
    localStorage.clear();
    this.sesion = UserService.isAuthenticated();
    this.comprobarNav();
    this.router.navigate(['']);
  }

  comprobarNav(){
    if(this.sesion){
      this.elementos = [
        {name : "Movimientos" , link : "movimientos"},
        {name : "Transferencias" , link : "transferencia"},
        {name : "Mi cuenta" , link : "perfil"}
      ]
    }else{
      this.elementos = [
        {name : "Inicio", link : ""},
        {name : "Cuentas y créditos", link : "cuentas"}
      ];
    }
  }

  ngOnInit() {
    if(location.href.indexOf("admin") > -1)
      this.admin = true;
    if(this.cookieService.check("ACCEPT"))
      this.cookie = true;
    this.comprobarNav();
  }
}

export interface Elementos {
  name: String;
  link: String;
}