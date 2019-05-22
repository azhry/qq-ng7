import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {

	name: string;
	age: number;
	salary: number;	

	constructor(public httpClient: HttpClient, public route: Router) { }

	addData() {

		const url = 'http://dummy.restapiexample.com/api/v1/create';
		const data = {
			name: this.name,
			age: this.age,
			salary: this.salary
		};
		this.httpClient.post(url, data).subscribe(response => {

			console.log(response);
			this.route.navigate(['data']);

		});

	}

	ngOnInit() {
	}

}
