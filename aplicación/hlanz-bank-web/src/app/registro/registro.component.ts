import { Component, OnInit, Inject} from '@angular/core';
import { Usuario } from '../shared/model/usuario.model';
import { UserService } from '../shared/services/user.service';
import { MatDialog } from '@angular/material';
import { AlertComponent } from '../alert/alert.component';
import { Router } from '@angular/router';
import { Login } from '../shared/model/login.model';
import { AlertService } from '../shared/services/alert.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'],
  providers: [UserService]
})
export class RegistroComponent implements OnInit {
  constructor(private usuarioService : UserService, 
              private alertService : AlertService,
              private route : Router) { }

  usuario : Usuario = new Usuario();

  registrar(){
    this.usuarioService.registrar(this.usuario)
      .subscribe(
        ok =>{
          AlertComponent.titulo = "Enhorabuena";
          AlertComponent.body = "Tu registro ha sido realizado con éxito.";
          this.alertService.openDialog(AlertComponent.titulo , AlertComponent.body);
        }, 
        (error : HttpErrorResponse) =>{
          AlertComponent.titulo = "Error";
          AlertComponent.body = "El registro no ha podido realizarse con éxito. \n" + error.message
          this.alertService.openDialog(AlertComponent.titulo , AlertComponent.body);
        }
      )
  }

  ngOnInit() {
  }

}
