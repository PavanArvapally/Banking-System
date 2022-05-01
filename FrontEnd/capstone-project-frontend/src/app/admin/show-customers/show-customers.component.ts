import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin/admin.service';

@Component({
  selector: 'app-show-customers',
  templateUrl: './show-customers.component.html',
  styleUrls: ['./show-customers.component.css'],
})
export class ShowCustomersComponent implements OnInit {
  allCustomers: any = [];
  adminId: number = 0;
  constructor(
    private adminSerivce: AdminService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.adminId = this.activatedRoute.snapshot.params.id;
    this.getAllCustomers();
  }

  getAllCustomers() {
    this.adminSerivce.getAllCustomers().subscribe(
      (res) => {
        this.allCustomers = Array.from(res as any);
        this.allCustomers.forEach((customer: any) => {
          customer.address = `${customer.address.street}, ${customer.address.city}, ${customer.address.state}, ${customer.address.country}, ${customer.address.pincode}`;
        });
      },
      (err) => {
        console.log('err', err);
      }
    );
  }

  editCustomer(custId: number) {
    this.router.navigate([
      `admin/${this.adminId}/customers/editCustomer/${custId}`,
    ]);
  }

  deleteCustome(custId: number) {
    if (confirm('Are you sure')) {
      this.adminSerivce.deleteCustomer(custId).subscribe(
        (res) => {
          alert('Deleted Successfully');
          this.getAllCustomers();
        },
        (err) => {
          console.log('err', err);
          alert('Something went wrong');
        }
      );
    }
  }

  addCustomer() {
    this.router.navigate([`admin/${this.adminId}/customers/addCustomer`]);
  }
}
