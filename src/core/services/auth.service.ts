import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { IApiresponse } from '../../models/apiResponse.model';
import { IEmployee, ILoginCredentials } from '../ApiInterface/AuthInterface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  http = inject(HttpClient);
  
  login(userLogin:ILoginCredentials):Observable<IApiresponse<IEmployee>> {
    return this.http.post<IApiresponse<IEmployee>>(environment.baseUrl+'api/EmployeeLeave/Login', {...userLogin})
  }
}
