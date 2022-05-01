import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin/admin.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css'],
})
export class EditEmployeeComponent implements OnInit {
  employeeId: number = 0;
  adminId: number = 0;

  employee: any = {};
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private adminService: AdminService
  ) {}

  ngOnInit(): void {
    this.employeeId = this.activatedRoute.snapshot.params.empId;
    this.adminId = this.activatedRoute.snapshot.params.id;

    this.adminService.getEmployeeById(this.employeeId).subscribe(
      (res) => {
        this.employee = res;
      },
      (err) => {
        console.log('err', err);
      }
    );
  }
  update() {
    this.adminService.updateEmployee(this.employee).subscribe(
      (res) => {
        this.router.navigate([`admin/${this.adminId}/employees`]);
      },
      (err) => {
        console.log('err', err);
      }
    );
  }
}
