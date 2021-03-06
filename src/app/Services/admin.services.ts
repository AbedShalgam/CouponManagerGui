import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Company } from "../Entities/company";
import { Customer } from "../Entities/customer";



@Injectable({
    providedIn: 'root'
})

export class AdminService {
    private apiServerUrl = environment.springUrl;

    constructor(private http: HttpClient) {}

    public Login(email: string, password: string): Observable<any> {
        return this.http.get<string>(`${this.apiServerUrl}/admin/login/${email}/${password}`, { responseType: 'text' as 'json' });
    }

    public addCompany(company: Company): Observable<string> {
        return this.http.post<string>(`${this.apiServerUrl}/admin/company/add`, company,{ responseType: 'text' as 'json' });
    }

    public updateCompany(company: Company): Observable<string> {
        return this.http.put<string>(`${this.apiServerUrl}/admin/company/update`, company,{ responseType: 'text' as 'json' });
    }

    public deleteCompany(companyId: Number): Observable<void> {
        return this.http.delete<void>(`${this.apiServerUrl}/admin/company/delete/${companyId}`);
    }

    public getAllCompanies(): Observable<Company[]>{
        return this.http.get<Company[]>(`${this.apiServerUrl}/admin/company/getAll`);
    }

    public getOneCompany(companyId : number): Observable<Company>{
        return this.http.get<Company>(`${this.apiServerUrl}/admin/company/get/${companyId}`);
    }

    public addCustomer(customer: Customer): Observable<string> {
        return this.http.post<string>(`${this.apiServerUrl}/admin/customer/add`, customer,{ responseType: 'text' as 'json' });
    }

    public updateCustomer(customer: Customer): Observable<void> {
        return this.http.put<void>(`${this.apiServerUrl}/admin/customer/update`, customer);
    }

    public deleteCustomer(customerId: number): Observable<void> {
        return this.http.delete<void>(`${this.apiServerUrl}/admin/customer/delete/${customerId}`);
    }

    public getAllCustomers(): Observable<Customer[]>{
        return this.http.get<Customer[]>(`${this.apiServerUrl}/admin/customer/getAll`);
    }

    public getOneCustomer(customerId : Customer): Observable<Customer>{
        return this.http.get<Customer>(`${this.apiServerUrl}/admin/customer/get/${customerId}`);
    }
}