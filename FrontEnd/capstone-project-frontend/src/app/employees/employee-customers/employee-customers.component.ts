import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee/employee.service';

@Component({
  selector: 'app-employee-customers',
  templateUrl: './employee-customers.component.html',
  styleUrls: ['./employee-customers.component.css'],
})
export class EmployeeCustomersComponent implements OnInit {
  branchCode: string = '';
  allCustomers: any = [];
  empId: number = 0;
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private employeeService: EmployeeService
  ) {}

  ngOnInit(): void {
    this.empId = this.activatedRoute.snapshot.params.id;
    this.branchCode = this.activatedRoute.snapshot.params.branchCode;
    this.getAllCustomers();
  }
  getAllCustomers() {
    this.employeeService.getAllCustomersByBranch(this.branchCode).subscribe(
      (res) => {
        this.allCustomers = Array.from(res as any);
        this.allCustomers.forEach((customer: any) => {
          customer.address = `${customer.address.street}, ${customer.address.city}, ${customer.address.state}, ${customer.address.country}, ${customer.address.pincode}`;
        });
      },
      (err) => {
        console.log('err', err);
      }
    );
  }
  editCustomer(custId: number) {
    this.router.navigate([
      `employee/${this.empId}/customers/editCustomer/${custId}`,
    ]);
  }

  deleteCustome(custId: number) {
    if (confirm('Are you sure')) {
      this.employeeService.deleteCustomer(custId).subscribe(
        (res) => {
          alert('Deleted Successfully');
          this.getAllCustomers();
        },
        (err) => {
          console.log('err', err);
          alert('Something went wrong');
        }
      );
    }
  }

  addCustomer() {
    this.router.navigate([`employee/${this.empId}/customers/addCustomer`]);
  }
}
