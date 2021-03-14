import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Customer } from './Entities/customer';
import { AdminService } from './Services/admin.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'couponmanagerapp';

  constructor(){}

  ngOnInit(){
  }

}