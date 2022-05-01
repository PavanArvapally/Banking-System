import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin/admin.service';

@Component({
  selector: 'app-show-transactions',
  templateUrl: './show-transactions.component.html',
  styleUrls: ['./show-transactions.component.css'],
})
export class ShowTransactionsComponent implements OnInit {
  allTransactions: any;
  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    this.adminService.getAllTransactions().subscribe(
      (res) => {
        this.allTransactions = Array.from(res as any);
      },
      (err) => {
        console.log('err', err);
      }
    );
  }
}
