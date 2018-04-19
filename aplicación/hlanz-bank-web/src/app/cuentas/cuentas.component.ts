import { Component, OnInit, Input, Inject, Output } from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { CuentasService } from '../services/cuentas.service';
import { Cuentas } from '../model/Cuentas';
import { Router } from '@angular/router';
import { MovimientosService } from '../services/movimientos.service';

@Component({
  selector: 'app-cuentas',
  templateUrl: './cuentas.component.html',
  styleUrls: ['./cuentas.component.scss']
})

export class CuentasComponent implements OnInit{
  displayedColumns = ['numero', 'saldo'];
  cuentas : Cuentas[];
  total : number;
  idCuenta : number = null;
  dataSource = new MatTableDataSource();

  constructor(private cuentasService : CuentasService, 
              private route : Router) {
    this.getCuentas();
  }
  
  getCuentas() {
    this.cuentasService.getCuentas(JSON.parse(localStorage.getItem("user")).id)
      .subscribe(row => {
        this.cuentas = row;
        this.dataSource = new MatTableDataSource(this.cuentas);
        for(var i in this.cuentas)
          this.total += this.cuentas[i].saldo;
      });
  }

  changeMovimientos(row : Cuentas){
    this.route.navigate(['movimientos']);
  }

  ngOnInit() {
    this.getCuentas();
  }
}
