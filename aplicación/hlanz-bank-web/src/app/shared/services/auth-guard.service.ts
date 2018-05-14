import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { UserService } from './user.service';
@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(public router: Router) {}
  canActivate(): boolean {
    if (!UserService.isAuthenticated()) {
      this.router.navigate(['']);
      return false;
    }
    return true;
  }
}