import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from 'src/app/services/admin/admin.service';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.css'],
})
export class ViewProfileComponent implements OnInit {
  adminId: number = 0;
  adminDetails: any = {};
  constructor(
    private activatedRoute: ActivatedRoute,
    private adminService: AdminService
  ) {}

  ngOnInit(): void {
    this.adminId = this.activatedRoute.snapshot.params.id;
    this.getDetails();
  }
  getDetails() {
    this.adminService.getAdminDetails(this.adminId).subscribe(
      (res) => {
        this.adminDetails = res;
      },
      (err) => {
        console.log('err', err);
      }
    );
  }
}
