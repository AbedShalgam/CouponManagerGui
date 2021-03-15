import { Component, OnInit } from '@angular/core';
import { AdminService } from '../Services/admin.services';
import { NgForm } from '@angular/forms';
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