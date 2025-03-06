import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { IApiresponse } from '../../models/apiResponse.model';
import { IEmployee } from '../ApiInterface/AuthInterface';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  http = inject(HttpClient);
  constructor() { }

  getAllEmployee(): Observable<IApiresponse<IEmployee>>{
    return this.http.get<IApiresponse<IEmployee>>(environment.baseUrl+'api/EmployeeLeave/GetEmployees');
  }
  
}
