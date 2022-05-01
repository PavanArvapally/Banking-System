import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-customer-dashboard',
  templateUrl: './customer-dashboard.component.html',
  styleUrls: ['./customer-dashboard.component.css'],
})
export class CustomerDashboardComponent implements OnInit {
  customerId: number = 0;
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.customerId = this.activatedRoute.snapshot.params.id;
  }

  redirectTo(type: string) {
    if (type == 'transactions')
      this.router.navigate([`customer/${this.customerId}/transactions`]);
    else
      this.router.navigate([`customer/${this.customerId}/transaction/${type}`]);
  }
}
