import { LoginComponent } from './auth/login/login.component';
import { Router } from '@angular/router';
import { AuthService } from './service/auth.service';
import { GraphData } from './dashboard/graph-data.model';
import { data } from './datasource';
import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, from } from 'rxjs';
import { ProductService } from './product/product.service';
import { map, distinct, tap } from 'rxjs/operators';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  username: string;

  mobileQuery: MediaQueryList;

  category = [];

  data$ = from(data)

  gData = [];

  userStatus: boolean;

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private productService: ProductService, private auth: AuthService, private route: Router, private _snackBar: MatSnackBar) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);



    this.data$.pipe(
      map(p => p.category),
      distinct(),
      tap(p => this.category.push(p))
    ).subscribe();

    this.userStatus = false;
  }

  ngOnInit(): void {
    this.category.forEach(c => {
      let count = data.filter(e => e.category === c).length;
      let obj = {
        product: '',
        value: 0,
        text: ''
      }
      obj.product = c
      obj.value = count
      obj.text = '' + count //string
      this.gData.push(obj);
    })
    //console.log(this.gData);
    this.productService.setGData(this.gData);

    this.auth.loginStatus.subscribe(data => {
      this.userStatus = data;
    })

    this.auth.getUsername().subscribe(
      s => {
        this.username = s;
      }
    );
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }


  onProductClick(c) {
    this.productService.setCategory(c);
  }

  onLogout() {
    this.auth.loginStatus.next(false);
    this.route.navigate(['login']);
    this._snackBar.open('Logged Out !', 'Close', {
      duration: 5000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }
}
