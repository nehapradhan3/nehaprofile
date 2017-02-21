import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../employee.service';
@Component({
  selector: 'viewdetails',
  templateUrl:'viewdetails.component.html',
  styleUrls:['viewdetails.component.css'],
  // template: `<h2>Lead List</h2>
  // <ul *ngFor="let employee of employees">
  // <li>name : {{employee.name}}<br>
  // status: {{employee.status}}</li>
  // </ul>`

})
export class ViewdetailsComponent implements OnInit {
employees=[];
  constructor(private _employeeService: EmployeeService) { }

  ngOnInit() {
    this._employeeService.getEmployees()
    .subscribe(restEmployeeData =>
      {
        this.employees=restEmployeeData,
        console.log(restEmployeeData, "response data", this.employees);
    }
    );

  }

}
