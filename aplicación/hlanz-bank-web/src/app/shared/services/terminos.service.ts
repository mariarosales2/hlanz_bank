import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { TerminosComponent } from '../../terminos/terminos.component';

@Injectable()
export class TerminosService {
  acept : Boolean;

  constructor() { }

  aceptarTerminos(){
    this.acept = true;
  }
  isAcept(){
    return this.acept;
  }

}
