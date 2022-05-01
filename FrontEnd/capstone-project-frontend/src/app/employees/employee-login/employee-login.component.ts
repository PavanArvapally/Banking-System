import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee/employee.service';

@Component({
  selector: 'app-employee-login',
  templateUrl: './employee-login.component.html',
  styleUrls: ['./employee-login.component.css'],
})
export class EmployeeLoginComponent implements OnInit {
  empId: string = '';

  constructor(
    private employeeService: EmployeeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.employeeService.getHomePage().subscribe(
      (res) => {},
      (err) => {
        console.log('err', err);
      }
    );
  }

  login() {
    this.employeeService.employeeLogin(this.empId).subscribe(
      (res: any) => {
        if (res != null) {
          this.router.navigate([`employee/${this.empId}/dashboard`]);
        } else {
          alert('Invalid employee');
        }
      },
      (err) => {
        console.log('err', err);
        alert('Invalid employee');
      }
    );
  }
}
