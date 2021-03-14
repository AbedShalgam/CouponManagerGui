import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Company } from '../Entities/company';
import { Coupon } from '../Entities/coupon';
import { Category } from '../Entities/category';



@Injectable({
    providedIn: 'root'
})
export class CompanyService {

    private apiServerUrl = environment.springUrl;

    constructor(private http: HttpClient) {}

    public Login(email: String, password: String): Observable<String> {
        return this.http.get<String>(`${this.apiServerUrl}/company/login/${email}/${password}`);
    }

    public addCoupon(coupon: Coupon): Observable<String> {
        return this.http.post<String>(`${this.apiServerUrl}/company/coupon/add`, coupon);
    }

    public updateCoupon(coupon: Coupon): Observable<String> {
        return this.http.put<String>(`${this.apiServerUrl}/company/coupon/update`, coupon);
    }

    public deleteCoupon(couponId: Number): Observable<String> {
        return this.http.delete<String>(`${this.apiServerUrl}/company/coupon/delete/${couponId}`);
    }

    public getCompanyCoupons(): Observable<Coupon[]> {
        return this.http.get<Coupon[]>(`${this.apiServerUrl}/company/coupons`);
    }

    public getCompanyCouponsByCategory(category: Category): Observable<Coupon[]> {
        return this.http.get<Coupon[]>(`${this.apiServerUrl}/company/coupons/category/${category}`);
    }

    public getCompanyCouponsByPrice(price: Number): Observable<Coupon[]> {
        return this.http.get<Coupon[]>(`${this.apiServerUrl}/company/coupons/category/${price}`);
    }

    public getCompanyDetails(): Observable<Company> {
        return this.http.get<Company>(`${this.apiServerUrl}/company/details`);
    }
}