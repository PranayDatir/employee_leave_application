import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { IApiresponse } from '../../models/apiResponse.model';
import { IEmployee } from '../../models/employee.model';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  http = inject(HttpService);
  constructor() { }

  getAllEmployee(): Observable<IApiresponse<IEmployee[]>>{
    return this.http.get<IApiresponse<IEmployee[]>>(environment.baseUrl+'api/EmployeeLeave/GetEmployees');
  }

  addEmployee(body: IEmployee): Observable<IApiresponse<IEmployee>>{
    return this.http.post<IApiresponse<IEmployee>>(environment.baseUrl+'api/EmployeeLeave/CreateEmployees', body);
  }
  
}
