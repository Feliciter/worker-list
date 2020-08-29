import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { EmployeesRoutingModule } from './employees-routing.module';
import { LayoutEmployeesComponent } from './layout-employees.component';
import { ListEmployeesComponent } from './list-employees.component';
import { AddEditEmployeesComponent } from './add-edit-employees.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        EmployeesRoutingModule
    ],
    declarations: [
        LayoutEmployeesComponent,
        ListEmployeesComponent,
        AddEditEmployeesComponent
    ]
})
export class EmployeesModule{ }