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

        return this.http.put(`${environment.apiUrl}/employees/${id}`, params)

            .pipe(map(x => {
              
                // update local storage
                const employee = { ...this.employeeValue, ...params };
                localStorage.setItem('employee', JSON.stringify(employee));

                // publish updated user to subscribers
                this.employeeSubject.next(employee);
               
                return x;
            }));
    }

    deleteEmpl(id: string) {
        console.log(`delete ${id}`);
        console.log(`${environment.apiUrl}/employees/${id}`);
        return this.http.delete(`${environment.apiUrl}/employees/${id}`)
            .pipe(map(x => {
                return x;
            }));

    }
}
