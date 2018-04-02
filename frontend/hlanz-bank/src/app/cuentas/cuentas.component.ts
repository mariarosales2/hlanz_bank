import { Component, OnInit } from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { CuentasService } from '../services/cuentas.service';
import { Cuentas } from '../model/Cuentas';

@Component({
  selector: 'app-cuentas',
  templateUrl: './cuentas.component.html',
  styleUrls: ['./cuentas.component.scss']
})
export class CuentasComponent implements OnInit {
  displayedColumns = ['IBAN', 'Saldo'];
  cuentas : Cuentas[];
  i : number;
  total : number;
  dataSource = new MatTableDataSource();

  constructor(private cuentasService : CuentasService) {
  }
  
  getCuentas(id: number) {
    this.cuentasService.getCuentas(id).subscribe(row => this.cuentas = row);
    this.dataSource = new MatTableDataSource(this.cuentas);
  }

  ngOnInit() {
    this.getCuentas(0);
  }
}
