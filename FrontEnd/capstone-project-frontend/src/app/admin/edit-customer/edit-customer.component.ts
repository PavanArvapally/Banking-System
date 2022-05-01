import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin/admin.service';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css'],
})
export class EditCustomerComponent implements OnInit {
  custId: number = 0;
  adminId: number = 0;
  custDetails: any = {};
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private adminService: AdminService
  ) {}

  ngOnInit(): void {
    this.custId = this.activatedRoute.snapshot.params.custId;
    this.adminId = this.activatedRoute.snapshot.params.id;
    this.adminService.getCustomerById(this.custId).subscribe(
      (res) => {
        this.custDetails = res;
        this.custDetails.address = `${this.custDetails.address.street}, ${this.custDetails.address.city}, ${this.custDetails.address.state}, ${this.custDetails.address.country}, ${this.custDetails.address.pincode}`;
      },
      (err) => {
        console.log('err', err);
      }
    );
  }

  updateCustomer() {
    this.adminService.updateCustomer(this.custDetails).subscribe(
      (res) => {
        alert('Updated Successfully');
        this.router.navigate([`/admin/${this.adminId}/customers`]);
      },
      (err) => {
        console.log('err', err);
      }
    );
  }
}
