import { Component, OnInit, Inject} from '@angular/core';
import { Usuario } from '../shared/model/usuario.model';
import { UserService } from '../shared/services/user.service';
import { MatDialog } from '@angular/material';
import { AlertComponent } from '../alert/alert.component';
import { Router } from '@angular/router';
import { Login } from '../shared/model/login.model';
import { AlertService } from '../shared/services/alert.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NavComponent } from '../nav/nav.component';
import { TerminosService } from '../shared/services/terminos.service';
import { TerminosComponent } from '../terminos/terminos.component';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'],
  providers: [UserService]
})
export class RegistroComponent implements OnInit {
  constructor(private usuarioService : UserService, 
              private alertService : AlertService,
              private terminosService : TerminosService,
              private route : Router,
              private dialog : MatDialog) { }

  usuario : Usuario = new Usuario();
  acept : Boolean = false;

  openTerminos(){
    let dialogRef = this.dialog.open(TerminosComponent, {
      width: '800px'
    })
  }
  registrar(){
    NavComponent.loading = true;
    this.usuarioService.crear(this.usuario)
      .subscribe(
        ok =>{
          AlertComponent.titulo = "Enhorabuena";
          AlertComponent.body = "Tu registro ha sido realizado con éxito.";
          NavComponent.loading = false;
          this.alertService.openDialog(AlertComponent.titulo , AlertComponent.body);
        }, 
        (error : HttpErrorResponse) =>{
          AlertComponent.titulo = "Error";
          AlertComponent.body = "El registro no ha podido realizarse con éxito. \n" + error.message;
          NavComponent.loading = false;
          this.alertService.openDialog(AlertComponent.titulo , AlertComponent.body);
        }
      )
  }

  ngOnInit() {
  }

  ngOnChange(){
    console.log("HOla")
    this.acept = this.terminosService.isAcept();
  }

}
