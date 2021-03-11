import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Company } from "../Entities/company";



@Injectable({
    providedIn: 'root'
})

export class AdminService {
    private apiServerUrl = environment.springUrl;

    constructor(private http: HttpClient) {}

    public Login(email: String, password: String): Observable<String> {
        return this.http.get<String>(`${this.apiServerUrl}/admin/login/${email}/${password}`);
    }

    public addCompany(company: Company): Observable<String> {
        return this.http.post<String>(`${this.apiServerUrl}/admin/company/add`, company);
    }

    public updateCoupon(company: Company): Observable<String> {
        return this.http.put<String>(`${this.apiServerUrl}/admin/company/update`, company);
    }

    public deleteCoupon(companyId: number): Observable<String> {
        return this.http.delete<String>(`${this.apiServerUrl}/admin/company/delete/${companyId}`);
    }

    
}