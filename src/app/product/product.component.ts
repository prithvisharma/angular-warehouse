import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  category: string;
  constructor(private productService: ProductService) { }

  onProductAdd(product) {
    this.productService.addProduct(product);
  }

  ngOnInit() {
    this.productService.getCategory().subscribe(
      c => this.category = c
    );
  }
}