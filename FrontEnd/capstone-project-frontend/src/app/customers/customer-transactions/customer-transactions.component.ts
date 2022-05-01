import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from 'src/app/services/customer/customer.service';

@Component({
  selector: 'app-customer-transactions',
  templateUrl: './customer-transactions.component.html',
  styleUrls: ['./customer-transactions.component.css'],
})
export class CustomerTransactionsComponent implements OnInit {
  accDetails: any = {};
  custId: number = 0;
  allTransactions: any = [];
  constructor(
    private activatedRoute: ActivatedRoute,
    private customerService: CustomerService
  ) {}

  ngOnInit(): void {
    this.custId = this.activatedRoute.snapshot.params.id;

    this.customerService.getCustomerAccountDetails(this.custId).subscribe(
      (res) => {
        this.accDetails = res;
        console.log('this.accDetails', this.accDetails);
      },
      (err) => {
        console.log('err', err);
      }
    );

    this.getTransactions();
  }

  getTransactions() {
    this.customerService.getCustomerTransactions(this.custId).subscribe(
      (res) => {
        this.allTransactions = Array.from(res as any);
      },
      (err) => {
        console.log('err', err);
      }
    );
  }
}
