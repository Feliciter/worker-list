import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { EmployeesRoutingModule } from './employees-routing.module';
import { LayoutEmployeesComponent } from './layout-employees.component';
import { ListEmployeesComponent } from './list-employees.component';
import { AddEditEmployeesComponent } from './add-edit-employees.component';
import { FilterPipe} from '../pipes/filter.pipe';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        EmployeesRoutingModule,
         FormsModule
    ],
    declarations: [
        LayoutEmployeesComponent,
        ListEmployeesComponent,
        AddEditEmployeesComponent,
         FilterPipe 
    ]
})
export class EmployeesModule{ }