import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Movimientos } from '../model/movimientos.model';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { MovimientosService } from '../services/movimientos.service';
import { CuentasComponent } from '../cuentas/cuentas.component';
import { Router } from '@angular/router';
import { CuentasService } from '../services/cuentas.service';

@Component({
  selector: 'app-movimientos',
  templateUrl: './movimientos.component.html',
  styleUrls: ['./movimientos.component.scss']
})
export class MovimientosComponent implements OnInit {
  movimientos : Movimientos[];
  displayedColumns = ["fecha","concepto","importe", "saldo"];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @Input() row : number;
  dataSource = new MatTableDataSource();
  load = false;

  constructor(private movServices : MovimientosService, private route : Router){
    this.getMovimientos(0);
  }

  getMovimientos(id : number){
      this.movServices.movimientos(id)
        .subscribe(data => {
          this.movimientos = data.reverse();
          this.dataSource = new MatTableDataSource(this.movimientos);
          this.dataSource.sort = this.sort;
          this.dataSource.paginator = this.paginator;
          this.load = true;
        });
  }


  ngOnInit() {
    console.log(this.row);
    this.getMovimientos(this.row);
  }

}
