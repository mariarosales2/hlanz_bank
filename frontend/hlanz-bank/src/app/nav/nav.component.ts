import { Component, OnInit } from '@angular/core';
import { interceptingHandler } from '@angular/common/http/src/module';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  usuario : Usuario ;
  
  constructor() {

   }

  ngOnInit() {
  }

}

export interface Usuario {
  user : string;
  pass : number;
}
