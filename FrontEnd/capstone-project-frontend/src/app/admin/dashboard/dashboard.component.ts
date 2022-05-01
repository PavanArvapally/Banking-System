import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  adminId: number = 0;
  bankName: string = 'HDFC';
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.adminId = this.activatedRoute.snapshot.params.id;
  }

  redirectTo(type: string) {
    this.router.navigate([`/admin/${this.adminId}/${type}`]);
  }
}
