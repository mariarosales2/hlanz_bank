import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { TerminosComponent } from '../../terminos/terminos.component';

@Injectable()
export class TerminosService {
  aceptado : Boolean = false;

  constructor() { }

  aceptarTerminos(){
    this.aceptado = true;
  }

  isAcept(){
    return this.aceptado;
  }

}
