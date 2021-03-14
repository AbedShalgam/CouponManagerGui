import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Coupon } from '../Entities/coupon';
import { Category } from '../Entities/category';
import { Customer } from '../Entities/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private apiServerUrl = environment.springUrl;
  constructor(private http: HttpClient) { }

  public Login(email: String, password: String): Observable<String> {
    return this.http.get<String>(`${this.apiServerUrl}/customer/login/${email}/${password}`);
  }

  public purchaseCoupon(coupon: Coupon): Observable<String> {
    return this.http.get<String>(`${this.apiServerUrl}/customer/purchaseCoupon`);
  }

  public getCustomerCoupons(): Observable<Coupon[]> {
    return this.http.get<Coupon[]>(`${this.apiServerUrl}/customer/coupons`);
  }

  public getCustomerCouponsByCategory(category: Category): Observable<Coupon[]> {
    return this.http.get<Coupon[]>(`${this.apiServerUrl}/customer/coupons/category/${category}`);
  }

  public getCustomerCouponsByPrice(price: number): Observable<Coupon[]> {
    return this.http.get<Coupon[]>(`${this.apiServerUrl}/customer/coupons/price/${price}`);
  }
 
  public getCustomerDetails(): Observable<Customer> {
    return this.http.get<Customer>(`${this.apiServerUrl}/customer/details`);
  }

  public getOneCoupon(companyId: number, title: String): Observable<Customer> {
    return this.http.get<Customer>(`${this.apiServerUrl}/customer/coupon/${companyId}/${title}`);
   }
  
}
