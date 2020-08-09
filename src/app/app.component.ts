import { Component } from '@angular/core';
import { Customer } from './customer.model';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { filter } from 'minimatch';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

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

  constructor() {
    this.customers.push(this.customer1);
    this.customers.push(this.customer2);
    this.customers.push(this.customer3);
    this.customers.push(this.customer4);
  }

  isShow: boolean = true
  initial: boolean = true
  showStudent() {
    this.isShow = true
    this.initial = false
  }
  showNonStudent() {
    this.isShow = false
    this.initial = false
  }

}
