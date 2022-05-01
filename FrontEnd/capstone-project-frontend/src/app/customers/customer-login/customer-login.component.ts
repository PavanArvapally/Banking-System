import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/services/customer/customer.service';

@Component({
  selector: 'app-customer-login',
  templateUrl: './customer-login.component.html',
  styleUrls: ['./customer-login.component.css'],
})
export class CustomerLoginComponent implements OnInit {
  customerId: number = 0;
  constructor(
    private customerService: CustomerService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.customerService.getHomePage().subscribe(
      (res) => {},
      (err) => {
        console.log('err', err);
      }
    );
  }

  login() {
    this.customerService.customerLogin(this.customerId).subscribe(
      (res: any) => {
        if (res != null) {
          this.router.navigate([`customer/${this.customerId}/dashboard`]);
        } else {
          alert('Invalid customer');
        }
      },
      (err) => {
        console.log('err', err);
        alert('Something went wrong');
      }
    );
  }
}
