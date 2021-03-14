import { Component, OnInit } from '@angular/core';
import { Company } from '../Entities/company';
import { AdminService } from '../Services/admin.services';
import { NgForm } from '@angular/forms';
import { NULL_EXPR } from '@angular/compiler/src/output/output_ast';
import { Coupon } from '../Entities/coupon';

@Component({
  selector: 'company-form',
  templateUrl: './company-form.component.html',
  styleUrls: ['./company-form.component.css']
})
export class CompanyFormComponent implements OnInit {

  company: Company;

  constructor(private adminService:AdminService) { }

  ngOnInit(): void {
  }
  apply(companyForm: NgForm): void
  {
    //to check
    console.log("before");
    console.log(companyForm.value);
    
    const formValue = companyForm.value;
    const name= formValue.name;
    const email= formValue.email;
    const password = formValue.value;
    console.log("after");
    //need to fix 
     this.company.name =formValue.name;
     this.company.email = formValue.email;
     this.company.password = formValue.value;

    this.adminService.addCompany(this.company);
  }

}
