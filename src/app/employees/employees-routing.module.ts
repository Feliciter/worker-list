import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutEmployeesComponent } from './layout-employees.component';
import { ListEmployeesComponent } from './list-employees.component';
import { AddEditEmployeesComponent } from './add-edit-employees.component';

const routes: Routes = [
    {
        path: '', component: LayoutEmployeesComponent,
        children: [
            { path: '', component: ListEmployeesComponent },
            { path: 'add', component: AddEditEmployeesComponent },
            { path: 'edit/:id', component: AddEditEmployeesComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EmployeesRoutingModule { }