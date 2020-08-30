import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { EmployeesService } from '../_services';


@Component({ templateUrl: 'list-employees.component.html' })
export class ListEmployeesComponent implements OnInit {
    searchText;
    employees = null;

    constructor(private employeesService: EmployeesService) {}

    ngOnInit() {
        this.employeesService.getAllempl()
            .pipe(first())
            .subscribe(employees => this.employees = employees);
    }

    deleteEmployee(id: string) {
        const employee = this.employees.find(x => x.id === id);
        employee.isDeleting = true;
        this.employeesService.deleteEmpl(id)
            .pipe(first())
            .subscribe(() => {
                this.employees = this.employees.filter(x => x.id !== id) 
            });
    }
}