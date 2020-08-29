import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '.././../environments/environment';
import { Employee } from '../_models';
import { User } from '../_models';

@Injectable({ providedIn: 'root' })
export class EmployeesService {
    private EmployeeSubject: BehaviorSubject<Employee>;
    public Employee: Observable<Employee>;

    constructor(
        private router: Router,
        private http: HttpClient
    ) {
        this.EmployeeSubject = new BehaviorSubject<Employee>(JSON.parse(localStorage.getItem('Employee')));
        this.Employee = this.EmployeeSubject.asObservable();
    }

    public get EmployeeValue(): Employee {
        return this.EmployeeSubject.value;
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

    register(Employee: Employee) {
        return this.http.post(`${environment.apiUrl}/employees/register`, Employee);
    }

    getAllempl() {
        return this.http.get<Employee[]>(`${environment.apiUrl}/employees`);
    }

    getById(id: string) {
        return this.http.get<Employee>(`${environment.apiUrl}/employee/${id}`);
    }

    update(id, params) {
        return this.http.put(`${environment.apiUrl}/employee/${id}`, params)
            .pipe(map(x => {
                // update stored Employee if the logged in Employee updated their own record
                if (id == this.EmployeeValue.id) {
                    // update local storage
                    const Employee = { ...this.EmployeeValue, ...params };
                    localStorage.setItem('employee', JSON.stringify(Employee));

                    // publish updated Employee to subscribers
                    this.EmployeeSubject.next(Employee);
                }
                return x;
            }));
    }

    deleteEmpl(id: string) {
        return this.http.delete(`${environment.apiUrl}/employee/${id}`)
            .pipe(map(x => {
                // auto logout if the logged in Employee deleted their own record
                // if (id == this.EmployeeValue.id) {
                //     this.logout();
                // }
                return x;
            }));
    }
}