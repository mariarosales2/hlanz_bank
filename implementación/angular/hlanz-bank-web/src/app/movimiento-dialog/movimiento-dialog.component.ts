import { Component, OnInit, Inject, ElementRef, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import * as jsPdf from 'jspdf';
import { nullSafeIsEquivalent } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-movimiento-dialog',
  templateUrl: './movimiento-dialog.component.html',
  styleUrls: ['./movimiento-dialog.component.scss']
})
export class MovimientoDialogComponent implements OnInit {

  @ViewChild('content') content: ElementRef;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              public dialogRef: MatDialogRef<MovimientoDialogComponent>) {
                data.movimiento += "€"
  }

  save(){
    let doc = new jsPdf('l', '', 'C5');
    doc.addHTML(document.getElementById("content"), 2 , 50 , null , () => { doc.save(this.data.fecha); });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

}
