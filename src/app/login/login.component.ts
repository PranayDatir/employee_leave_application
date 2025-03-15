import { Component, inject, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';
import { from } from 'rxjs';
import { IApiresponse } from '../../models/apiResponse.model';
import { ILoginCredentials } from '../../core/ApiInterface/AuthInterface';
import { IEmployee } from '../../models/employee.model';
import { SpinnerComponent } from "../../shared/spinner/spinner.component";
import { NgIf } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, SpinnerComponent, NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  isLoading = signal<boolean>(false);
  authservice = inject(AuthService);
  router = inject(Router);

  userLogin:ILoginCredentials = {
    emailId:'',
    password:'' 
  }

  login(form: NgForm){
    this.isLoading.set(true);
    this.authservice.login(form.value).subscribe({
      next: (response: IApiresponse<IEmployee>)=>{
        if(response.result){
          this.router.navigateByUrl('main');
        }
      },
      error: (error)=>{
        console.log(error);
        this.isLoading.set(false);
      },
      complete:()=>{
        this.isLoading.set(false);
      }
    })


  }
}
