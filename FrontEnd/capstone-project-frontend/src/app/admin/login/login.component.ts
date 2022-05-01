import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin/admin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  adminId: number = 0;
  constructor(private adminService: AdminService, private router: Router) {}

  ngOnInit(): void {}

  login() {
    this.adminService.adminLogin(this.adminId).subscribe(
      (res: any) => {
        if (res != null) {
          this.router.navigate([`admin/${this.adminId}/dashboard`]);
        } else {
          alert('Invalid admin');
        }
      },
      (err) => {
        console.log('err', err);
        alert('Invalid admin');
      }
    );
  }
}
