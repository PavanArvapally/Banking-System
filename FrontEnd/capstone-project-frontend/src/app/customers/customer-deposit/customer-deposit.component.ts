import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from 'src/app/services/customer/customer.service';

@Component({
  selector: 'app-customer-deposit',
  templateUrl: './customer-deposit.component.html',
  styleUrls: ['./customer-deposit.component.css'],
})
export class CustomerDepositComponent implements OnInit {
  amount: string = '';
  custId: number = 0;
  custDetails: any = {};
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private customerService: CustomerService
  ) {}

  ngOnInit(): void {
    this.custId = this.activatedRoute.snapshot.params.id;
    this.customerService.getCustomerAccountDetails(this.custId).subscribe(
      (res) => {
        this.custDetails = res;
      },
      (err) => {
        console.log('err', err);
      }
    );
  }

  deposit() {
    this.customerService
      .depositAmount(this.custDetails.accountNo, this.amount)
      .subscribe(
        (res) => {
          alert('Deposited Successfully');
          this.router.navigate([`customer/${this.custId}/dashboard`]);
        },
        (err) => {
          console.log('err', err);
        }
      );
  }
}
