import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from 'src/app/services/customer/customer.service';

@Component({
  selector: 'app-customer-profile',
  templateUrl: './customer-profile.component.html',
  styleUrls: ['./customer-profile.component.css'],
})
export class CustomerProfileComponent implements OnInit {
  custId: number = 0;
  custDetails: any = {};
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private customerService: CustomerService
  ) {}

  ngOnInit(): void {
    this.custId = this.activatedRoute.snapshot.params.id;
    this.customerService.getCustomerDetails(this.custId).subscribe(
      (res) => {
        this.custDetails = res;
        this.custDetails.address = `${this.custDetails.address.street},${this.custDetails.address.city},${this.custDetails.address.state},${this.custDetails.address.country}, ${this.custDetails.address.pincode}`;
      },
      (err) => {
        console.log('err', err);
      }
    );
  }
}
