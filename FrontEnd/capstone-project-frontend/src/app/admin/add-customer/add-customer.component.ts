import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin/admin.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css'],
})
export class AddCustomerComponent implements OnInit {
  newCustomer: any = {
    name: '',
    branchCode: '',
  };
  adminId: number = 0;
  constructor(
    private adminService: AdminService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {}

  addCustomer() {
    this.adminService.addCustomer(this.newCustomer).subscribe(
      (res) => {
        this.router.navigate([`admin/${this.adminId}/customers`]);
      },
      (err) => {
        console.log('err', err);
      }
    );
  }
}
