import { OrdersService } from './../orders.service';
import { Order } from './../orders.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-view-orders',
  templateUrl: './view-orders.component.html',
  styleUrls: ['./view-orders.component.css']
})
export class ViewOrdersComponent implements OnInit {

  orders: Order[] = [];

  //Mat Table Props
  displayedColumns: string[] = ['serialNo', 'name', 'category', 'stockCount', 'price'];

  dataSource; //defining the datasource 
  ELEMENT_DATA: Order[]; //define ELEMENT DATA

  //Paginator and Sorting selectors 
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private ordersService: OrdersService) {
  }

  ngOnInit(): void {
    this.ordersService.fetchProducts().subscribe(
      data => {
        this.dataSource = new MatTableDataSource<Order>(data);
        this.dataSource.paginator = this.paginator;
        //add sorting to datasource
        this.dataSource.sort = this.sort;
      }
    );
  }
}
