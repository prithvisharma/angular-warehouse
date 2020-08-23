import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product.model';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];

  //Mat Table Props
  displayedColumns: string[] = ['serialNo', 'name', 'category', 'stockCount', 'price'];

  dataSource; //defining the datasource 
  ELEMENT_DATA: Product[]; //define ELEMENT DATA

  //Paginator and Sorting selectors 
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private productService: ProductService) {
    //fetch data from service and attach it in ELEMENT_DATA variable 
    this.ELEMENT_DATA = productService.fetchProducts();

    //attach ELEMENT_DATA variable to datasource. 
    this.dataSource = new MatTableDataSource<Product>(this.ELEMENT_DATA);
  }

  ngOnInit(): void {
    this.ELEMENT_DATA = this.productService.fetchProducts();
    //add paging to datasource
    this.dataSource.paginator = this.paginator;
    //add sorting to datasource
    this.dataSource.sort = this.sort;
  }
}




