import { Component, inject, OnInit } from '@angular/core';
import { EmployeeService } from '../../core/services/employee.service';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent implements OnInit {
  
  employees:any;
  employeeService = inject(EmployeeService);
  ngOnInit() {
    this.getAllEmployees();
  }
  

  getAllEmployees(){
    this.employeeService.getAllEmployee().subscribe((res: any) =>{
      console.log(res)
      this.employees = res.data;
    })
  }


}

