import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee/employee.service';

@Component({
  selector: 'app-employee-transactions',
  templateUrl: './employee-transactions.component.html',
  styleUrls: ['./employee-transactions.component.css'],
})
export class EmployeeTransactionsComponent implements OnInit {
  empId: string = '';
  allTransactions: any = [];
  constructor(
    private activateRoute: ActivatedRoute,
    private router: Router,
    private employeeService: EmployeeService
  ) {}

  ngOnInit(): void {
    this.empId = this.activateRoute.snapshot.params.id;
    this.employeeService.getAllTransactions(this.empId).subscribe(
      (res) => {
        this.allTransactions = Array.from(res as any);
      },
      (err) => {
        console.log('err', err);
      }
    );
  }
}
