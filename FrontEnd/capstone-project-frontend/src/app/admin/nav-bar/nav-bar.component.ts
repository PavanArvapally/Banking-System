import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  adminId: number = 0;
  constructor(private activatedRouted: ActivatedRoute) {}

  ngOnInit(): void {
    this.adminId = this.activatedRouted.snapshot.params.id;
  }
}
