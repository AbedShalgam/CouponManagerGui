import { Component, Input, OnInit } from '@angular/core';
import { Customer } from '../Entities/customer';

@Component({
  selector: 'customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  @Input() customer: Customer;
  
  constructor() { }

  ngOnInit(): void {
  }

}
