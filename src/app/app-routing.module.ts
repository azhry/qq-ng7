import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeeTableComponent } from './employee-table/employee-table.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';

const routes: Routes = [
	{
		path: 'data',
		component: EmployeeTableComponent
	},
	{
		path: 'form',
		component: EmployeeFormComponent
	},
	{
		path: 'details/:id',
		component: EmployeeDetailsComponent
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
