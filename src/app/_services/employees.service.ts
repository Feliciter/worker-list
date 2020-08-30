import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '.././../environments/environment';
import { Employee } from '../_models';


@Injectable({ providedIn: 'root' })
export class EmployeesService {
    private employeeSubject: BehaviorSubject<Employee>;
    public employee: Observable<Employee>;

    constructor(
        private router: Router,
        private http: HttpClient
    ) {
        this.employeeSubject = new BehaviorSubject<Employee>(JSON.parse(localStorage.getItem('employee')));
        this.employee = this.employeeSubject.asObservable();
    }

    public get employeeValue(): Employee {
        return this.employeeSubject.value;
    }

    // login(Employeename, password) {
    //     return this.http.post<Employee>(`${environment.apiUrl}/Employees/authenticate`, { Employeename, password })
    //         .pipe(map(Employee => {
    //             // store Employee details and jwt token in local storage to keep Employee logged in between page refreshes
    //             localStorage.setItem('Employee', JSON.stringify(Employee));
    //             this.EmployeeSubject.next(Employee);
    //             return Employee;
    //         }));
    // }

    // logout() {
    //     // remove Employee from local storage and set current Employee to null
    //     localStorage.removeItem('Employee');
    //     this.EmployeeSubject.next(null);
    //     this.router.navigate(['/account/login']);
    // }

    registerempl(employee: Employee) {
        return this.http.post(`${environment.apiUrl}/employees/register`, employee);
    }

    getAllempl() {
        return this.http.get<Employee[]>(`${environment.apiUrl}/employees`);
    }

    getById(id: string) {
        return this.http.get<Employee>(`${environment.apiUrl}/employees/${id}`);
    }

    update(id, params) {
        

        console.log("service")
 
        return this.http.put(`${environment.apiUrl}/employees/${id}`, params)
        // .pipe(map(x => {
        //     // update stored user if the logged in user updated their own record
        //     if (id == this.employeeValue.id) {
        //         // update local storage
        //         const employee = { ...this.employeeValue, ...params };
        //         localStorage.setItem('employee', JSON.stringify(employee));

        //         // publish updated user to subscribers
        //         this.employeeSubject.next(employee);
        //     }
        //     return x;
        // }));
    }

    deleteEmpl(id: string) {
        console.log(`${id}`)
        return this.http.delete(`${environment.apiUrl}/employee/${id}`)

        
            // .pipe(map(x => {
            //     // auto logout if the logged in Employee deleted their own record
            //     // if (id == this.EmployeeValue.id) {
            //     //     this.logout();
            //     // }
            //     return x;
            // }
            
            // ));
    }
}