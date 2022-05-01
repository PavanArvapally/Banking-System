import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin/admin.service';

@Component({
  selector: 'app-show-employees',
  templateUrl: './show-employees.component.html',
  styleUrls: ['./show-employees.component.css'],
})
export class ShowEmployeesComponent implements OnInit {
  allEmployees: any = [];
  adminId: number = 0;

  constructor(
    private adminService: AdminService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.adminId = this.activatedRoute.snapshot.params.id;
    this.fetchEmployees();
  }

  fetchEmployees() {
    this.adminService.getAllEmployees().subscribe(
      (res) => {
        this.allEmployees = Array.from(res as any);
      },
      (err) => {
        console.log('err', err);
      }
    );
  }

  editEmployee(id: number) {
    this.router.navigate([
      `/admin/${this.adminId}/employees/editEmployee/${id}`,
    ]);
  }

  removeEmployee(id: number) {
    if (confirm('Are you sure')) {
      this.adminService.deleteEmployeeById(id).subscribe(
        (res) => {
          this.fetchEmployees();
        },
        (err) => {
          console.log('err', err);
        }
      );
    }
  }

  addEmployee() {
    this.router.navigate([`admin/${this.adminId}/employees/addEmployee`]);
  }
}
