import { Component, OnInit } from '@angular/core';
import { interceptingHandler } from '@angular/common/http/src/module';
import { Usuario } from '../shared/model/usuario.model';
import { UserService } from '../shared/services/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Login } from '../shared/model/login.model';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  providers: [ UserService]
})
export class NavComponent implements OnInit {
  elementos : Elementos[];
  usuario : Usuario;
  login : Login = new Login();
  loading : boolean = false;
  error : boolean = false;
  admin : boolean;
  sesion : boolean;

  constructor(private userService : UserService,
              private route: ActivatedRoute,
              private router: Router) {
    this.admin = false;
    this.sesion = UserService.isAuthenticated();
  }

  
  autenticar(){
    this.loading = true;

    this.userService.login(this.login)
      .subscribe((user : Usuario) => {
        localStorage.setItem("user", user.idUsuario.toString());
        this.sesion = UserService.isAuthenticated();
        this.comprobarNav();
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
        {name : "Movimientos" , link : "cuentas"},
        {name : "Transferencias" , link : "transferencia"},
        {name : "Mi cuenta" , link : "perfil"}
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
    if(location.href.indexOf("admin") > -1)
      this.admin = true;
    this.comprobarNav();
  }
}

export interface Elementos {
  name: String;
  link: String;
}