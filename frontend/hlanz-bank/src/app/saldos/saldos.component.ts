import { Component, OnInit } from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { CuentasService } from '../cuentas.service';

@Component({
  selector: 'app-saldos',
  templateUrl: './saldos.component.html',
  styleUrls: ['./saldos.component.scss']
})
export class SaldosComponent implements OnInit {
  displayedColumns = ['numero', 'saldo'];
  cuentas : Cuentas[];
  dataSource = new MatTableDataSource();

  constructor(private cuentasService : CuentasService) {
  }
  
  getCuentas(id: number) {
    this.cuentasService.getCuentas(id).subscribe(data => this.cuentas = data);
    this.dataSource = new MatTableDataSource(this.cuentas);
  }

  

  ngOnInit() {
    this.getCuentas(0);
    console.log("cuentas: " + this.cuentas);
  }

}

export class Cuentas {
  numero : String;
  saldo : number;
}
