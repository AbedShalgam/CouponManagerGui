import { Component, Input, OnInit } from '@angular/core';
import { Company } from '../Entities/company';
import { Coupon } from '../Entities/coupon';

@Component({
  selector: 'company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
  @Input() company: Company;
  coupons: Coupon[];
  displayCoupons :boolean = true;
  constructor() { }

  ngOnInit(): void {

  }
  showCoupons(){
    this.displayCoupons =true;
    this.coupons = this.company.coupons;
    console.log(this.coupons[0].title);
    console.log("hello");
    
  }

}
