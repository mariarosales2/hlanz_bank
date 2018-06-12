import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class AdminGuardService implements CanActivate {
  constructor(public router: Router, private cookie : CookieService) {}
  canActivate(): boolean {
    if (!this.cookie.check("admin")) {
      this.router.navigate(['']);
      return false;
    }
    return true;
  }
}
