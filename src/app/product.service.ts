import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { data } from './datasource'
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[] = [];
  constructor() {
    this.products = data;
  }


  addProduct(product: Product) {
    //adds your product to products array
    this.products.push(product);
  }

  fetchProducts() {
    //return the array
    return this.products;
  }
}
