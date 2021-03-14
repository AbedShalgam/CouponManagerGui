import { ThisReceiver } from '@angular/compiler';
import { Component, NgModule, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../Services/admin.services';
import { CompanyService } from '../Services/company.service';
import { CustomerService } from '../Services/customer.service';



@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  constructor(private activeRout: ActivatedRoute ,private router :Router,
              private adminService : AdminService,private companyService : CompanyService,private customerService: CustomerService)
              { }

  ngOnInit(): void {
    this.activeRout.queryParams.subscribe(params => {
      
    })
  }
  login(loginForm: NgForm): void
  {
    console.log(loginForm.value);
    const formValue = loginForm.value;
    const email = formValue.email;
    const password = formValue.password;
    const loginType = Number(formValue.loginType);
     this.loginWithTheLoginType(email, password, loginType);
  }
  loginWithTheLoginType(email:string , password:string , loginType:number){
    switch(loginType)
    {
      case 0:
        console.log('here')
       
        this.adminService.Login(email,password);
         console.log()
        //too add validation if email exsist before navigate;
        this.router.navigate(['/admin'])
        break;    
      case 1:
        this.companyService.Login(email,password);
        //too add validation if email exsist before navigate;
        this.router.navigate(['/company-user'])
        break;
          
      case 2:
        this.customerService.Login(email,password);
        //too add validation if email exsist before navigate;
        this.router.navigate(['/customer-user'])
        break; 

    }
  }

}
