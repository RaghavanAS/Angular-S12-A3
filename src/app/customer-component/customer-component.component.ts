import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { JsonPipe } from '@angular/common';
import { Router } from '@angular/router';

import { CityService } from '../Services/City-Service';
import { Customer } from '../models/customer';
import { CustomerService } from '../Services/Customer-Service';
@Component({
  selector: 'app-customer-component',
  templateUrl: './customer-component.component.html',
  styleUrls: ['./customer-component.component.css']
})
export class CustomerComponentComponent implements OnInit {
  // @Output() customerCreated: EventEmitter<Customer> = new EventEmitter<Customer>();
  // Citylist and CustomerList array
  cityList: string[] = [];
  customerList: Customer[] = [];
  // customer instance
  customer: Customer = new Customer();
  customerDetail: Customer;
  form: FormGroup;
  router: Router;
  // constructor dependency injection
  constructor(private cityService: CityService, private formBuilder: FormBuilder, private customerService: CustomerService) {
    this.createForm();
  }
  // validating the form using formbuilder
  private createForm() {
    this.form = this.formBuilder.group({
      name: ['', Validators.compose( [Validators.required, Validators.pattern('[A-Za-z]*')])],
      phone: ['', Validators.compose([Validators.required, Validators.pattern('[0-9]*'),
      Validators.minLength(10), Validators.maxLength(10)])],
      email: ['', Validators.required],
      city: ['', Validators.required],
      DOB: ['', Validators.compose([Validators.required, Validators.pattern(
        '(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))'
      )])]
    });
  }
  // initializing the form on ngOnInit and calling the service
  ngOnInit() {
    this.customer.name = 'Enter your Name';
    this.customer.email = 'Joe@email.com';
    this.customer.phone = 'Enter contact #';
    this.cityList = this.cityService.getCityList();
    this.customer.DOB = 'Enter the date';
    this.customerList = this.customerService.getCustomerList();
  }
  // on form submit calling the onSave method to add a customer using Customer Service
  onSave(Values) {
   this.customer.name = Values.name;
    this.customer.email = Values.email;
    this.customer.phone = Values.phone;
    this.customer.city = Values.city;
    this.customer.DOB = Values.DOB;
    this.customerService.storeCustomer(this.customer);
    this.customer = new Customer();
    }
  }
