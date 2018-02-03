import { Component, OnInit, Input } from '@angular/core';
import { Customer } from '../models/customer';
import { JsonPipe } from '@angular/common';
import { SearchPipe } from '../pipes/SearchByPipe';
import { ChangeChar } from '../pipes/changeToCapital';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css'],
  providers: [ SearchPipe, ChangeChar]
})
export class CustomerDetailComponent implements OnInit {
// using input directive to get the customerDetail from parent
@Input() customer: Customer[];

  constructor() {
  }

  ngOnInit() {
    console.log(this.customer);
  }
}
