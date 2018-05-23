import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { TerminosService } from '../shared/services/terminos.service';

@Component({
  selector: 'app-terminos',
  templateUrl: './terminos.component.html',
  styleUrls: ['./terminos.component.scss']
})
export class TerminosComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<TerminosComponent>, private terminos : TerminosService) {
   }

  onNoClick(){
    this.terminos.aceptarTerminos();
    this.dialogRef.close();
  }

  ngOnInit() {
  }

}
