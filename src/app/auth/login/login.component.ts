import { AuthService } from './../../service/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {



  constructor(private route: Router, private auth: AuthService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  login = {
    username: '',
    password: ''
  }

  hide = true;

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]),
    password: new FormControl('')
  });

  onLoginSubmit() {
    this.login = this.loginForm.value;
    if (this.login.username === 'harry' && this.login.password === 'potter') {
      this.auth.loginStatus.next(true);
      //
      this.auth.username$.next(this.login.username);
      //
      this.route.navigate(['dashboard']);
      this._snackBar.open('Logged in !', 'Close', {
        duration: 5000,
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
      });
    }
    else {
      this.auth.loginStatus.next(false);
      // add snackbar for failed login
      this._snackBar.open('Invalid Credentials !', 'Close', {
        duration: 5000,
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
      });
    }
  }



}
