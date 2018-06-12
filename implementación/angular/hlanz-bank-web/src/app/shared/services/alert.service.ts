import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AlertComponent } from '../../alert/alert.component';

@Injectable()
export class AlertService {

  constructor(private dialog : MatDialog) { }

  openDialog(titulo : String, body : String): void {
    let dialogRef = this.dialog.open(AlertComponent, {
      width: '400px',
      data : {titulo : titulo, body : body}
    });
  }
}
