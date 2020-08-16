import { Injectable } from '@angular/core';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[] = [];
  constructor() { }

  addProduct(product: Product) {
    //adds your product to products array
    this.products.push(product);
  }

  fetchProducts() {
    //return the array
    return this.products;
  }
}
