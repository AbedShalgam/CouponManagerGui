import { HttpErrorResponse } from '@angular/common/http';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AdminService } from '../Services/admin.services';

@Component({
  selector: 'customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent implements OnInit {

  constructor(private adminService:AdminService) { }


  ngOnInit(): void {
  }
  apply(customerForm: NgForm): void
  {
    this.adminService.addCustomer(customerForm.value).subscribe(
      (Response:string)=>{
        alert('Customer added');
      },
      (error:HttpErrorResponse)=>{console.log(error.message)}
    );
  }
}
