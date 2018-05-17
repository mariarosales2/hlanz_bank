import { Component, OnInit, Inject, ElementRef, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import * as jsPdf from 'jspdf';

@Component({
  selector: 'app-movimiento-dialog',
  templateUrl: './movimiento-dialog.component.html',
  styleUrls: ['./movimiento-dialog.component.scss']
})
export class MovimientoDialogComponent implements OnInit {

  @ViewChild('content') content: ElementRef;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              public dialogRef: MatDialogRef<MovimientoDialogComponent>) { }

  save(){
    let doc = new jsPdf();

    let content = this.content.nativeElement;

    let elements = {
      '#editor' : function(element, renderer){
        return true;
      }
    }

    doc.fromHTML(content.innerHTML, 15, 15, {
      'width' : '190px',
      'elementHandlers' : elements
    });
    doc.save(this.data.fecha);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

}
