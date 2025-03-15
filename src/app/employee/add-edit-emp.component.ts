import { Component, inject, Inject, Optional, signal } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { IEmployee } from '../../models/employee.model';
import { NgIf } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, NgForm, Validators } from '@angular/forms';
import { EmployeeService } from '../../core/services/employee.service';
import { IApiresponse } from '../../models/apiResponse.model';

@Component({
  selector: 'app-add-edit-emp',
  standalone: true,
  imports: [NgIf, FormsModule],
  templateUrl: './add-edit-emp.component.html',
  styleUrl: './add-edit-emp.component.css'
})
export class AddEditEmpComponent {
  employeeService = inject(EmployeeService);
  isLoading = signal<boolean>(false);


  constructor(
    public dialog: MatDialog,
    @Optional() public dialogRef: MatDialogRef<AddEditEmpComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public dialogData: IEmployee
    ) {
      if(dialogData){
        console.log("DialogData-->",dialogData);
      }
    }

  submitForm(form: NgForm) {
      console.log('Form Submitted', form.value);
      this.employeeService.addEmployee(form.value).subscribe(
        {
          next: (response: IApiresponse<IEmployee>)=> {
            console.log('Add Emp-->',response);
            this.dialog.closeAll();
          },
          error: () =>{

          },
          complete: () =>{
        this.isLoading.set(false);
        }
      }
    )
  }
}
