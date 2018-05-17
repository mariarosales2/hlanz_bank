import { Component, OnInit } from '@angular/core';
import { Movimientos } from '../shared/model/movimientos.model';
import { CuentasService } from '../shared/services/cuentas.service';
import { Router } from '@angular/router';
import { Cuentas } from '../shared/model/cuentas.model';
import { MovimientosService } from '../shared/services/movimientos.service';
import { AlertComponent } from '../alert/alert.component';
import { AlertService } from '../shared/services/alert.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-transferencia',
  templateUrl: './transferencia.component.html',
  styleUrls: ['./transferencia.component.scss']
})
export class TransferenciaComponent implements OnInit {
  transferencia : Movimientos = new Movimientos();
  cuentasUsuario : Cuentas[];
  constructor(private cuentas : CuentasService, 
              private movimientos : MovimientosService, 
              private alert : AlertService,
              private route : Router) {
    this.cuentas.getCuentas(Number.parseInt(localStorage.getItem("user")))
      .subscribe(
        (data : Cuentas[]) =>{this.cuentasUsuario = data, console.log(this.cuentasUsuario)} , 
        error=> this.route.navigate(['404']));
  }

  transferir(){
    this.movimientos.transferir(this.transferencia)
      .subscribe(data => {
        AlertComponent.titulo = "Transferencia realizada",
        AlertComponent.body = "La transferencia se ha realizado con éxito.",
        this.alert.openDialog(AlertComponent.titulo, AlertComponent.body)
        },
        (error : HttpErrorResponse) => {
          AlertComponent.titulo = "Error",
          AlertComponent.body = "La transferencia no se ha podido realizar.\n" + error.message
        }
      );
  }

  ngOnInit() {
  }

}
