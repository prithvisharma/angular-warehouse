import { Component, OnInit } from '@angular/core';
import { Customer } from './customer.model';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent {


  customer1: Customer = {
    'name': 'Harry Potter',
    'age': 20,
    'isStudent': true,
    'cgpa': 9.8
  }
  customer2: Customer = {
    'name': 'Roanld Wesley',
    'age': 20,
    'isStudent': true,
    'cgpa': 9.2
  }
  customer3: Customer = {
    'name': 'Hermione Granger',
    'age': 19,
    'isStudent': true,
    'cgpa': 9.9
  }
  customer4: Customer = {
    'name': 'Prof Dumbledor',
    'age': 70,
    'isStudent': false,
    'cgpa': 0.0
  }
  customers: Customer[] = [];
  filterCustomers: Customer[] = []; //step 1

  arr: number[] = [1, 3, 5, 8, 4, 9];
  filterarr: number[] = [];
  constructor() {
    this.customers.push(this.customer1);
    this.customers.push(this.customer2);
    this.customers.push(this.customer3);
    this.customers.push(this.customer4);
    this.filterCustomers = this.customers; //step 2

    this.filterarr = this.arr.filter(n => n % 2 !== 0);
    console.log(this.filterarr);
  }
  //step 3
  showStudent() {
    this.filterCustomers =
      this.customers.filter(c => c.isStudent === true);
  }
  showNonStudent() {
    this.filterCustomers =
      this.customers.filter(c => c.isStudent === false);
  }


}
