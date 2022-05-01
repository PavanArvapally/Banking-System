import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee/employee.service';

@Component({
  selector: 'app-edit-customer-emp',
  templateUrl: './edit-customer-emp.component.html',
  styleUrls: ['./edit-customer-emp.component.css'],
})
export class EditCustomerEmpComponent implements OnInit {
  custId: number = 0;
  custDetails: any = {};
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private employeeService: EmployeeService
  ) {}

  ngOnInit(): void {
    this.custId = this.activatedRoute.snapshot.params.id;
    this.employeeService.getCustomerById(this.custId).subscribe(
      (res) => {
        this.custDetails = res;
        this.custDetails.address = `${this.custDetails.address.street}, ${this.custDetails.address.city}, ${this.custDetails.address.state}, ${this.custDetails.address.country}, ${this.custDetails.address.pincode}`;
        console.log('this.custDetails', this.custDetails);
      },
      (err) => {
        console.log('err', err);
      }
    );
  }
  updateCustomer() {
    this.employeeService.updateCustomer(this.custDetails).subscribe(
      (res) => {
        alert('Updated Successfully');
        this.router.navigate([`/employee/${this.custDetails}/customers`]);
      },
      (err) => {
        console.log('err', err);
      }
    );
  }
}
