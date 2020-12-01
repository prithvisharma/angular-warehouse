import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  status: boolean;
  loginStatus = new BehaviorSubject<boolean>(false);
  username$ = new BehaviorSubject<string>('');

  isAuthenticated(): boolean {
    //authentication logic
    this.status = this.loginStatus.getValue();
    return this.status;
  }

  getUsername() {
    return this.username$;
  }
}
