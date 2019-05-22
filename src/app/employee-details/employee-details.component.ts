import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

export interface Employee {
	id: number;
	employee_name: string;
	employee_salary: string;
	employee_age: string;
	profile_image: string;
}


@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

	data: Employee;

	constructor(public route: ActivatedRoute, public httpClient: HttpClient) { 

	}

	ngOnInit() {
		this.route.paramMap.subscribe(params => {

			const employeeID = params.params.id;
			const url = 'http://dummy.restapiexample.com/api/v1/employee/' + employeeID;
			this.httpClient.get(url).subscribe(response => {

				this.data = response;

			});

		});
	}

}
