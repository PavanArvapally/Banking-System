import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from 'src/app/services/customer/customer.service';

@Component({
  selector: 'app-customer-withdraw',
  templateUrl: './customer-withdraw.component.html',
  styleUrls: ['./customer-withdraw.component.css'],
})
export class CustomerWithdrawComponent implements OnInit {
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
  withdraw() {
    let payload = {
      accNo: this.custDetails.accountNo,
      amount: this.amount,
    };
    this.customerService.withdrawAmount(payload).subscribe(
      (res) => {
        alert('Withdrawn Successfully');
        this.router.navigate([`customer/${this.custId}/dashboard`]);
      },
      (err) => {
        console.log('err', err);
      }
    );
  }
}
