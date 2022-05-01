import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee/employee.service';

@Component({
  selector: 'app-employee-bank-account',
  templateUrl: './employee-bank-account.component.html',
  styleUrls: ['./employee-bank-account.component.css'],
})
export class EmployeeBankAccountComponent implements OnInit {
  allBankAccounts: any = [];
  empId: number = 0;
  branchCode: string = '';
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private employeeService: EmployeeService
  ) {}

  ngOnInit(): void {
    this.branchCode = this.activatedRoute.snapshot.params.branchCode;
    this.empId = this.activatedRoute.snapshot.params.id;
    this.getAllBankAccounts();
  }
  getAllBankAccounts() {
    this.employeeService.getAllBankAccountsByBranch(this.branchCode).subscribe(
      (res) => {
        this.allBankAccounts = Array.from(res as any);
        console.log(this.allBankAccounts);
      },
      (err) => {
        console.log('err', err);
      }
    );
  }
  editBankAccount(accNo: number) {
    this.router.navigate([`employee/${this.empId}/bankAccount/edit/${accNo}`]);
  }

  addNewBankAccount() {
    this.router.navigate([
      `employee/${this.empId}/bankAccount/${this.branchCode}/create`,
    ]);
  }
}
