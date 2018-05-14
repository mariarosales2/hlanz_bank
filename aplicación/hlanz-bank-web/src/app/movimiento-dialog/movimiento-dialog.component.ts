import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-movimiento-dialog',
  templateUrl: './movimiento-dialog.component.html',
  styleUrls: ['./movimiento-dialog.component.scss']
})
export class MovimientoDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

}
