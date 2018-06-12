import { Component, OnInit } from '@angular/core';
import { Movimientos } from '../shared/model/movimientos.model';
import { CuentasService } from '../shared/services/cuentas.service';
import { Router } from '@angular/router';
import { Cuentas } from '../shared/model/cuentas.model';
import { MovimientosService } from '../shared/services/movimientos.service';
import { AlertComponent } from '../alert/alert.component';
import { AlertService } from '../shared/services/alert.service';
import { HttpErrorResponse } from '@angular/common/http';
import { MatDialog } from '@angular/material';
import { TerminosComponent } from '../terminos/terminos.component';
import { TerminosService } from '../shared/services/terminos.service';
import { NavComponent } from '../nav/nav.component';

@Component({
  selector: 'app-transferencia',
  templateUrl: './transferencia.component.html',
  styleUrls: ['./transferencia.component.scss']
})
export class TransferenciaComponent implements OnInit {
  transferencia : Movimientos = new Movimientos();
  cuentasUsuario : Cuentas[];
  loading = false;
  constructor(private cuentas : CuentasService, 
              private movimientos : MovimientosService, 
              private alert : AlertService,
              private terminos : TerminosService,
              private route : Router,
              private dialog : MatDialog) {
    this.cuentas.getCuentas(Number.parseInt(localStorage.getItem("user")))
      .subscribe(
        (data : Cuentas[]) =>{this.cuentasUsuario = data, console.log(this.cuentasUsuario)} , 
        error=> this.route.navigate(['404']));
  }

  isAcept(){
    return this.terminos.isAcept();
  }

  openTerminos(){
    let dialogRef = this.dialog.open(TerminosComponent, {
      width: '800px'
    })
  }

  transferir(){
    this.loading = true;
    this.movimientos.transferir(this.transferencia)
      .subscribe(data => {
        this.loading = false;
        AlertComponent.titulo = "Transferencia realizada",
        AlertComponent.body = "La transferencia se ha realizado con éxito.",
        this.alert.openDialog(AlertComponent.titulo, AlertComponent.body)
        },
        (error : HttpErrorResponse) => {
          this.loading = false;
          AlertComponent.titulo = "Error",
          AlertComponent.body = "La transferencia no se ha podido realizar.\n" + error.message,
          this.alert.openDialog(AlertComponent.titulo, AlertComponent.body)
        }
      );
  }

  ngOnInit() {
  }

}
