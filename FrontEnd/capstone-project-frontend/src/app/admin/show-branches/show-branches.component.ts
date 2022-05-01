import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin/admin.service';

@Component({
  selector: 'app-show-branches',
  templateUrl: './show-branches.component.html',
  styleUrls: ['./show-branches.component.css'],
})
export class ShowBranchesComponent implements OnInit {
  allBranches: any = [];
  adminId: number = 0;
  constructor(
    private adminService: AdminService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.adminId = this.activatedRoute.snapshot.params.id;
    this.fetchAllBranches();
  }

  fetchAllBranches() {
    this.adminService.getAllBranches().subscribe(
      (res) => {
        this.allBranches = Array.from(res as any);
        this.allBranches.forEach((branch: any) => {
          branch.address = `${branch.address.street}, ${branch.address.city}, ${branch.address.state}, ${branch.address.country}, ${branch.address.pincode}`;
        });
      },
      (err) => {
        console.log('err', err);
      }
    );
  }

  editBranch(branchCode: string) {
    this.router.navigate([
      `admin/${this.adminId}/branches/editBranch/${branchCode}`,
    ]);
  }

  deleteBranch(branchCode: string) {
    if (confirm('Are you sure')) {
      this.adminService.deleteBranch(branchCode).subscribe(
        (res) => {
          alert(res);
          this.fetchAllBranches();
        },
        (err) => {
          alert('Ooops! Something went wrong');
          console.log('err', err);
        }
      );
    }
  }
  addNewBranch() {
    this.router.navigate([`admin/${this.adminId}/branches/addBranch`]);
  }
}
