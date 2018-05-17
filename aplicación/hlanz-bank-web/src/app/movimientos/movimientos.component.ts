import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Movimientos } from '../shared/model/movimientos.model';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog, MatDialogConfig } from '@angular/material';
import { MovimientosService } from '../shared/services/movimientos.service';
import { CuentasComponent } from '../cuentas/cuentas.component';
import { Router } from '@angular/router';
import { CuentasService } from '../shared/services/cuentas.service';
import { MovimientoDialogComponent } from '../movimiento-dialog/movimiento-dialog.component';

@Component({
  selector: 'app-movimientos',
  templateUrl: './movimientos.component.html',
  styleUrls: ['./movimientos.component.scss']
})
export class MovimientosComponent implements OnInit {
  movimientos : Movimientos[] = [];
  displayedColumns = ["fecha","concepto","importe", "saldo"];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @Input() idCuenta : number;
  dataSource = new MatTableDataSource();
  load = false;

  constructor(private movServices : MovimientosService,
    private route : Router,
    private dialog : MatDialog){
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

  verMovimiento(data : any){
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "80%";
    dialogConfig.data = data;

    this.dialog.open(MovimientoDialogComponent, dialogConfig);
  }


  ngOnInit() {
    this.getMovimientos(this.idCuenta);
  }

}
