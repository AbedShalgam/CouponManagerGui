import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Company } from '../Entities/company';
import { Customer } from '../Entities/customer';
import { AdminService } from '../Services/admin.services';

@Component({
  selector: 'admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  customers: Customer[];
  companies: Company[];

  company:Company;
  customer:Customer;

  isCustomer: boolean = true;
  CustomerOrCompany : string = "Show Companies";

  constructor(private adminService: AdminService ,private router :Router) { }

  ngOnInit(): void {
    this.adminService.getAllCustomers().subscribe(res => {
      this.customers = res;
    });
    this.adminService.getAllCompanies().subscribe(res => {
      this.companies = res;
    }
      );
  }
  showcust()
  {
    this.isCustomer = !this.isCustomer;
    if(this.isCustomer){
      this.CustomerOrCompany = "Show Companies";
    }else{
      this.CustomerOrCompany = "Show Customers";
    }
  }
  
  addCompany()
  {
     this.router.navigate(['/company-form']);
     //take added comany details()
     //this.adminService.addCompany(this.company);

  }
  addCustomer() 
  {
    this.router.navigate(['/customer-form']);
  }

}
