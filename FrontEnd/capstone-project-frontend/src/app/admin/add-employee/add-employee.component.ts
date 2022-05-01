import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin/admin.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css'],
})
export class AddEmployeeComponent implements OnInit {
  newEmployee: any = {
    name: '',
    branchCode: '',
  };
  adminId: number = 0;
  constructor(
    private adminService: AdminService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.adminId = this.activatedRoute.snapshot.params.id;
  }

  addEmployee() {
    this.adminService.addEmployee(this.newEmployee).subscribe(
      (res) => {
        this.router.navigate([`admin/${this.adminId}/employees`]);
      },
      (err) => {
        console.log('err', err);
      }
    );
  }
}
