import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, NgForm } from '@angular/forms';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  product: Product;
  category: string;

  productForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]),
    category: new FormControl({ value: '', disabled: true }),
    serialNo: new FormControl(''),
    stockCount: new FormControl(''),
    price: new FormControl(''),
  });

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(public productService: ProductService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.productService.getCategory().subscribe(
      c => {
        this.category = c;
        this.productForm.get('category').setValue(this.category);
      }
    );
  }

  onFormSubmit() {
    this.product = this.productForm.value;
    this.product.category = this.category;
    //passing this product object to productService 
    this.productService.addProduct(this.product);
    this._snackBar.open('Product Added!', 'Close', {
      duration: 5000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
    this.productForm.reset();
  }
}
