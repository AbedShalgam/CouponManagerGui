import { Component, OnInit } from '@angular/core';
import { Coupon } from '../Entities/coupon';
import { CompanyService } from '../Services/company.service';

@Component({
  selector: 'company-user',
  templateUrl: './company-user.component.html',
  styleUrls: ['./company-user.component.css']
})
export class CompanyUserComponent implements OnInit {
  coupons : Coupon[];
  constructor(private companyService: CompanyService) { }

  ngOnInit(): void {
  }

}
