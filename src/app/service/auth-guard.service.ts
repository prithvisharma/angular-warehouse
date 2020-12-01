import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  status: boolean;

  constructor(private auth: AuthService, private route: Router) { }

  canActivate(): boolean {
    this.status = this.auth.isAuthenticated();
    if (this.status === false) {
      this.route.navigate(['login']);
    }
    else
      return this.status;
  }

}
// communicate to angular framework from here...