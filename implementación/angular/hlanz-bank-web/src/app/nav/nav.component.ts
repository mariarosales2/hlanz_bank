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
  providers: [ UserService ]
})
export class NavComponent implements OnInit {
  elementos : Elementos[];
  usuario : Usuario;
  login : Login = new Login();
  loading : boolean = false;
  error : boolean = false;
  admin : boolean = false;
  sesion : boolean;
  cookie = false;

  constructor(private userService : UserService,
              private route: ActivatedRoute,
              private router: Router,
              private cookieService : CookieService) {
    this.sesion = UserService.isAuthenticated();
    this.comprobarNav();
  }

  setCookie(){
    this.cookieService.set("ACCEPT", "1", 1);
  }
  
  autenticar(){
    this.loading = true;

    this.userService.login(this.login)
      .subscribe((user : Usuario) => {
        localStorage.setItem("user", user.idUsuario.toString());
        this.sesion = UserService.isAuthenticated();
        this.comprobarNav();
        this.router.navigate(['perfil']);
        this.loading = false;
      }, error => {
        this.error = true;
        this.loading = false;
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
    this.admin = false;
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