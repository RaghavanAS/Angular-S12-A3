import { Injectable } from '@angular/core';
import { Customer } from '../models/customer';

@Injectable()
export class CustomerService {
  // CustomerList array of customer
  customerList: Customer[]= [];
  constructor() {}
  // returns the CustomerList
  getCustomerList(): Customer[] {
    return this.customerList;
  }
  // Stores a customer to the CustomerList
  storeCustomer(customer: Customer) {
      this.customerList.unshift(customer);
      console.log(this.customerList);
  }
}
