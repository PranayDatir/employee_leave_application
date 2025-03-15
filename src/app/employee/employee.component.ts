import { Component, inject, OnInit } from '@angular/core';
import { EmployeeService } from '../../core/services/employee.service';
import { MatDialog } from '@angular/material/dialog';
// import { MatDialog } from '@angular/material/dialog';
import { IApiresponse } from '../../models/apiResponse.model';
import { IEmployee } from '../../models/employee.model';
import { AddEditEmpComponent } from './add-edit-emp.component';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {
  
  employees?:IEmployee[];
  employeeService = inject(EmployeeService);
  employeeCount:number = 0;

  constructor(
    public dialog: MatDialog,
  ) {
  }


  ngOnInit() {
    this.getAllEmployees();
  }
  
  
  getAllEmployees(){
    this.employeeService.getAllEmployee().subscribe({
      next:(response: IApiresponse<IEmployee[]>) =>{
        this.employees = response.data;
        this.employeeCount = this.employees!.length;
      },
      error: ()=>{

      },
      complete: () => {

      }
    });
  }

  addEditEmployee(data: IEmployee | undefined){
    const dialogRef = this.dialog.open(AddEditEmpComponent,
      {
      width: "70%",
      height: '70%',
      
      data: data
    });
  }


}

