import { Component, OnInit } from '@angular/core';
import { Employee } from "../employee";


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',   
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit{

  emp1=new Employee('Utkarsh',100,'CEO',22);
  emp2=new Employee('Utkarsh',101,'CEO',22);
  emp3=new Employee('Utkarsh',100,'CEO',22);
  
  emp:Employee[]=[this.emp1,this.emp2,this.emp3];

  


  constructor() { }

  ngOnInit(): void {
  }

}
