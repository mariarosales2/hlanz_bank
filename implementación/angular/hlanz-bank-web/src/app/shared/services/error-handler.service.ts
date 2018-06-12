import { Injectable, ErrorHandler, Injector } from '@angular/core';
import {Router} from "@angular/router";
import { AlertService } from './alert.service';

@Injectable()
export class HandleError implements ErrorHandler {
  
  constructor(private alertHlanz : AlertService, private injector: Injector){};
               
  public handleError(error: any) {
    let httpErrorCode = error.httpErrorCode;
    // this.alertHlanz.openDialog("Error " + httpErrorCode , error.message);
    console.log(httpErrorCode);
  }
}


