import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee/employee.service';

@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.css'],
})
export class EmployeeDashboardComponent implements OnInit {
  empId: number = 0;
  branchCode: string = '';
  bankName: string = '';
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private employeeService: EmployeeService
  ) {}

  ngOnInit(): void {
    this.empId = this.activatedRoute.snapshot.params.id;
    this.getBranchCode();
  }
  redirectTo(type: string) {
    if (type == 'transactions') {
      this.router.navigate([`/employee/${this.empId}/${type}`]);
    } else {
      this.router.navigate([
        `/employee/${this.empId}/${type}/${this.branchCode}`,
      ]);
    }
  }
  getBranchCode() {
    this.employeeService.getBranchCode(this.empId).subscribe(
      (res: any) => {
        if (res != null) {
          this.branchCode = res.branchCode;
          this.getBankName(res.branchCode);
        }
      },
      (err) => {
        console.log('err', err);
      }
    );
  }
  getBankName(branchCode: string) {
    this.employeeService.getBankName(branchCode).subscribe(
      (res: any) => {
        if (res != null) {
          this.bankName = res.bankName;
        }
      },
      (err) => {
        console.log('err', err);
      }
    );
  }
}
