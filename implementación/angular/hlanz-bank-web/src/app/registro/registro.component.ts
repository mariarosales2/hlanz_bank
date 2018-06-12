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
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

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
              private dialog : MatDialog,
              private formBuilder : FormBuilder) { }

  usuario : Usuario = new Usuario();
  static aceptado : Boolean = false;
  form : FormGroup;
  loading = false;

  openTerminos(){
    let dialogRef = this.dialog.open(TerminosComponent, {
      width: '800px'
    })
  }
  registrar(){
      this.loading = true;
      this.usuarioService.crear(this.usuario)
      .subscribe(
        ok =>{
          this.loading = false;
          AlertComponent.titulo = "Enhorabuena";
          AlertComponent.body = "Tu registro ha sido realizado con éxito.";
          this.alertService.openDialog(AlertComponent.titulo , AlertComponent.body);
        }, 
        (error : HttpErrorResponse) =>{
          this.loading = false;
          AlertComponent.titulo = "Error";
          AlertComponent.body = "El registro no ha podido realizarse con éxito. \n" + error.message;
          this.alertService.openDialog(AlertComponent.titulo , AlertComponent.body);
        }
      )
  }

  isAcept() : Boolean {
    return this.terminosService.isAcept();
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellidos : ['', Validators.required],
      dni: ['', [Validators.pattern("([0-9]{8})([A-Z]{1})"), Validators.required]],
      telefono: ['', Validators.required],
      email : ['', [Validators.email, Validators.required]],
      check : ['', Validators.required]
    })
  }

  get nombre() { return this.form.get('nombre'); }
  get apellidos() { return this.form.get('apellidos'); }
  get dni() { return this.form.get('dni'); }
  get telefono() { return this.form.get('telefono'); }
  get email() { return this.form.get('email'); }
  get check() { return this.form.get('check'); }

}
