import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private apiServerUrl = environment.springUrl;
  constructor(private http: HttpClient) { }

  public Login(email: String, password: String): Observable<String> {
    return this.http.get<String>(`${this.apiServerUrl}/customer/login/${email}/${password}`);
  }
  

  
}
