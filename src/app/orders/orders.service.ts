import { data } from './datasource-orders';
import { Order } from './orders.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  products$ = new BehaviorSubject<Order[]>([]);

  constructor() {
    this.products$.next(data);
  }

  fetchProducts(): Observable<Order[]> {
    return this.products$;
  }

  addProduct(order: Order) { //14th
    let products = [];
    //step 1 : fetch all products from subject 
    products = this.products$.value; //13 
    //step 2: add new value to products[] array
    products.push(order); //14
    //step 3: give next value to subject 
    this.products$.next(products); //14
  }
}
