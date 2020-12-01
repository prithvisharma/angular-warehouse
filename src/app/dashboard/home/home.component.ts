import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public gData: Object[];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.gData = this.productService.getGData();
  }

}
