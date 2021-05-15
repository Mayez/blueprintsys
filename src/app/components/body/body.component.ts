import { Component, OnInit } from '@angular/core';
import * as data from './employees.json';

@Component({
  selector: 'bodyComponent',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  importData = data;
  employeeData = this.importData.employees.employee;
  fullName = "";
  address = "";
  phoneNumber = 0;
  position = 0;

  constructor() { }

  ngOnInit() {
    // console.log(this.employeeData);
  }

  personalInfo(index: number){
    this.fullName = this.employeeData[index].fullName;
    this.address = this.employeeData[index].address;
    this.phoneNumber = this.employeeData[index].phoneNumber;
    this.position = this.employeeData[index].position;
  }
}