import { Component, OnInit, Input, Inject, Output } from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { CuentasService } from '../shared/services/cuentas.service';
import { Cuentas } from '../shared/model/cuentas.model';
import { Router } from '@angular/router';
import { MovimientosService } from '../shared/services/movimientos.service';

@Component({
  selector: 'app-cuentas',
  templateUrl: './cuentas.component.html',
  styleUrls: ['./cuentas.component.scss']
})

export class CuentasComponent implements OnInit{
  displayedColumns = ['numero', 'saldo'];
  cuentas : Cuentas[];
  load : Boolean = false;
  total : number;
  idCuenta : number = null;
  dataSource = new MatTableDataSource();

  constructor(private cuentasService : CuentasService, 
              private route : Router) {
    this.total = 0;

  }
  
  getCuentas() {
    this.cuentasService.getCuentas(localStorage.getItem("user"))
      .subscribe(row => {
        this.cuentas = row;
        this.dataSource = new MatTableDataSource(this.cuentas);
        this.load = true;
        for(var i in this.cuentas){
          this.total = this.cuentas[i].saldo;
        }
      });
  }

  changeMovimientos(row : Cuentas){
    this.route.navigate(['movimientos']);
  }

  ngOnInit() {
    this.getCuentas();
  }
}
