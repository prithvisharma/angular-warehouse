import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  product: Product;

  productForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]),
    category: new FormControl(''),
    serialNo: new FormControl(''),
    stockCount: new FormControl('')
  });

  constructor(public productService: ProductService) { }

  ngOnInit(): void {
  }

  onFormSubmit() {
    this.product = this.productForm.value;
    //passing this product object to productService 
    this.productService.addProduct(this.product);
  }

}
