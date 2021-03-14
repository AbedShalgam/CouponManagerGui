import { Component, OnInit } from '@angular/core';
import { Company } from '../Entities/company';
import { AdminService } from '../Services/admin.services';
import { NgForm } from '@angular/forms';
import { NULL_EXPR } from '@angular/compiler/src/output/output_ast';
import { Coupon } from '../Entities/coupon';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'company-form',
  templateUrl: './company-form.component.html',
  styleUrls: ['./company-form.component.css']
})
export class CompanyFormComponent implements OnInit {

  constructor(private adminService:AdminService) { }

  ngOnInit(): void {
  }

  apply(companyForm: NgForm): void
  {
    this.adminService.addCompany(companyForm.value).subscribe(
      (Response:string)=>{},
      (error:HttpErrorResponse)=>{console.log(error.message)}
    );




  }

}
