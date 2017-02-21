import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../employee.service';
@Component({
  selector: 'viewdetails',
  templateUrl:'viewdetails.component.html',
  styleUrls:['viewdetails.component.css'],


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
