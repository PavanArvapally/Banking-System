import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee/employee.service';

@Component({
  selector: 'app-employee-profile',
  templateUrl: './employee-profile.component.html',
  styleUrls: ['./employee-profile.component.css'],
})
export class EmployeeProfileComponent implements OnInit {
  empId: string = '';
  employeeDetails: any = {};
  constructor(
    private activateRoute: ActivatedRoute,
    private router: Router,
    private employeeService: EmployeeService
  ) {}

  ngOnInit(): void {
    this.empId = this.activateRoute.snapshot.params.id;
    this.employeeService.getEmployeeDetails(this.empId).subscribe(
      (res) => {
        this.employeeDetails = res;
      },
      (err) => {
        console.log('err', err);
      }
    );
  }
}
