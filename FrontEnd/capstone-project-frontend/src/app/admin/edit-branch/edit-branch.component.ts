import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin/admin.service';

@Component({
  selector: 'app-edit-branch',
  templateUrl: './edit-branch.component.html',
  styleUrls: ['./edit-branch.component.css'],
})
export class EditBranchComponent implements OnInit {
  branchCode: string = '';
  branchDetails: any = [];
  adminId: number = 0;

  constructor(
    private adminService: AdminService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.branchCode = this.activatedRoute.snapshot.params.ifscCode;
    this.adminId = this.activatedRoute.snapshot.params.id;

    this.adminService.getBranchDetails(this.branchCode).subscribe(
      (res) => {
        this.branchDetails = res;
        this.branchDetails.address = `${this.branchDetails.address.street},${this.branchDetails.address.city},${this.branchDetails.address.state},${this.branchDetails.address.country}, ${this.branchDetails.address.pincode}`;
      },
      (err) => {
        console.log('err', err);
      }
    );
  }
  update() {
    this.adminService.updateBranch(this.branchDetails).subscribe(
      (res) => {
        alert('Updated Successfully');
        this.router.navigate([`/admin/${this.adminId}/branches`]);
      },
      (err) => {
        console.log('err', err);
        alert('Oops Something went wrong');
      }
    );
  }
}
