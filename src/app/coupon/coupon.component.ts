import { Component, Input, OnInit } from '@angular/core';
import { Coupon } from '../Entities/coupon';

@Component({
  selector: 'coupon',
  templateUrl: './coupon.component.html',
  styleUrls: ['./coupon.component.css']
})
export class CouponComponent implements OnInit {
  @Input() coupon: Coupon;
  constructor() { }

  ngOnInit(): void {
  }

}
