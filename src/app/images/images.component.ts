import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../employee.service';

@Component({
  selector: 'images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {
employees=[];
  constructor(private _employeeService:EmployeeService) { }

  ngOnInit() {
    this._employeeService.getEmployees()
    .subscribe(restEmployeeData =>{
this.employees=restEmployeeData,
       console.log(restEmployeeData,"response data", this.employees);
  }
);
}
}
