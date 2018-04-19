import { Component, OnInit } from '@angular/core';
import { Transferencia } from '../model/transferencia.model';
import { CuentasService } from '../services/cuentas.service';

@Component({
  selector: 'app-transferencia',
  templateUrl: './transferencia.component.html',
  styleUrls: ['./transferencia.component.scss']
})
export class TransferenciaComponent implements OnInit {
  transferencia : Transferencia = new Transferencia();
  cuentasUsuario : any[];
  constructor(private cuentas : CuentasService) {
    this.cuentas.getCuentas(JSON.parse(localStorage.getItem("user")).id)
      .subscribe(data => this.cuentasUsuario = data);
   }

  ngOnInit() {
  }

}
