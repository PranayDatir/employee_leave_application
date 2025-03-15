import { Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';

export const routes: Routes = [
    {
        path: '', redirectTo:'login', pathMatch:'full'
    },
    {
        path: 'login', component:LoginComponent, pathMatch:'full'
    },
    {
        path: 'main', component:MainComponent, 
        children: [
            // {path: '',component:EmployeeComponent, pathMatch:'full'},
            {path: 'employee', component: EmployeeComponent}
        ]
    }
];
