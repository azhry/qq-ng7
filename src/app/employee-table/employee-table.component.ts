import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Employee {
	id: number;
	employee_name: string;
	employee_salary: string;
	employee_age: string;
	profile_image: string;
}

@Component({
  selector: 'app-employee-table',
  templateUrl: './employee-table.component.html',
  styleUrls: ['./employee-table.component.css']
})
export class EmployeeTableComponent implements OnInit {

	displayedColumns: string[] = ['id', 'name', 'age', 'salary', '-'];	
	dataSource: Employee[];

	constructor(public httpClient: HttpClient) { 

	}


	// ini kan definisi methodnyeee
	deleteData(id) {

		// http://dummy.restapiexample.com/api/v1/delete/:id

		const url = 'http://dummy.restapiexample.com/api/v1/delete/' + id;

		this.httpClient.delete(url).subscribe(response => {

			if (response.success != undefined) {
				alert(response.success.text);
				this.getAllData();
			}

		});

	}


	getAllData() {

		const url = 'http://dummy.restapiexample.com/api/v1/employees';

		this.httpClient.get<Employee[]>(url).subscribe(res => {

			this.dataSource = res;

		});

	}


	ngOnInit() {

		this.getAllData();		

	}

}
