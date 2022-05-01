import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin/admin.service';

@Component({
  selector: 'app-add-branch',
  templateUrl: './add-branch.component.html',
  styleUrls: ['./add-branch.component.css'],
})
export class AddBranchComponent implements OnInit {
  branchCode: string = '';
  branchDetails: any = {};
  adminId: number = 0;
  constructor(
    private adminService: AdminService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.adminId = this.activatedRoute.snapshot.params.id;
  }

  add() {
    console.log(this.branchDetails);
    this.adminService.createBranch(this.branchDetails).subscribe(
      (res) => {
        alert('Created successfully');
        this.router.navigate([`admin/${this.adminId}/branches`]);
      },
      (err) => {
        alert('Something went wrong');
      }
    );
  }
}
