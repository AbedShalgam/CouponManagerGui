import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { CompanyComponent } from './company/company.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomerFormComponent } from './customer-form/customer-form.component';
import { CouponComponent } from './coupon/coupon.component';
import { RouterModule, Routes } from '@angular/router'
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { CompanyUserComponent } from './company-user/company-user.component';
import { CustomerUserComponent } from './customer-user/customer-user.component';
import { CompanyFormComponent } from './company-form/company-form.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'company-user', component: CompanyUserComponent},
  {path: 'customer-user', component: CustomerUserComponent},
  {path: 'company-form', component: CompanyFormComponent},
  {path: 'customer-form', component: CustomerFormComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,
    CompanyComponent,
    CustomerComponent,
    CustomerFormComponent,
    CouponComponent,
    CompanyUserComponent,
    CustomerUserComponent,
    CompanyFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
