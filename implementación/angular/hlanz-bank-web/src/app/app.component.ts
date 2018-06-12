import { Component } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private activatedRoute: ActivatedRoute, private router : Router){
    // const path = this.activatedRoute.snapshot.queryParams['path'];
    // const navigateTo = '/' + path;

    // if (path) {
    //   this.router.navigate([navigateTo]);
    // }
  }
}
