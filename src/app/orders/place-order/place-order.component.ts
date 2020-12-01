import { OrdersService } from './../orders.service';
import { Order } from './../orders.model';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, NgForm } from '@angular/forms';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { MatSelectChange } from '@angular/material/select';


interface Category {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.css']
})
export class PlaceOrderComponent implements OnInit {

  order: Order;
  category_select: string;

  orderForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]),
    category: new FormControl(''),
    serialNo: new FormControl(''),
    stockCount: new FormControl(''),
    price: new FormControl(''),
  });

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  category: Category[] = [
    { value: 'Laptop', viewValue: 'Laptop' },
    { value: 'Desktop', viewValue: 'Desktop' },
    { value: 'Tablet', viewValue: 'Tablet' },
    { value: 'Accessories', viewValue: 'Accessories' }
  ];

  constructor(private _snackBar: MatSnackBar, private ordersService: OrdersService) { }


  ngOnInit(): void {
  }

  onFormSubmit() {
    this.order = this.orderForm.value;
    //passing this product object to productService 
    this.ordersService.addProduct(this.order);
    this._snackBar.open('Product Added!', 'Close', {
      duration: 5000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
    this.orderForm.reset();
  }
}
