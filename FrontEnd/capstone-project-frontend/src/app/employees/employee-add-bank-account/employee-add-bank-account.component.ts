import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee/employee.service';

@Component({
  selector: 'app-employee-add-bank-account',
  templateUrl: './employee-add-bank-account.component.html',
  styleUrls: ['./employee-add-bank-account.component.css'],
})
export class EmployeeAddBankAccountComponent implements OnInit {
  newBankAccount: any = {};
  empId: number = 0;
  branchCode: number = 0;
  constructor(
    private employeeService: EmployeeService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.branchCode = this.activatedRoute.snapshot.params.branchCode;
    this.empId = this.activatedRoute.snapshot.params.id;
    this.newBankAccount.branchCode = this.branchCode;
  }

  addNewBankAccount() {
    this.employeeService.createBankAccount(this.newBankAccount).subscribe(
      (res) => {
        alert('Bank Account created');
        this.router.navigate([
          `employee/${this.empId}/bankAccounts/${this.branchCode}`,
        ]);
      },
      (err) => {
        console.log('err', err);
      }
    );
  }
}
