import { Component, OnInit, Input } from '@angular/core';
import { Customer } from '../models/customer';
import { CustomerService } from '../Services/Customer-Service';
import { SearchPipe } from '../pipes/SearchByPipe';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
  providers: [SearchPipe]
})
export class CustomerComponent implements OnInit {

  @Input() customers: Customer[];
  private searchData: string;
  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.customers = this.customerService.getCustomerList();
  }
  // onCustomerCreated(customer: Customer) {}
}
