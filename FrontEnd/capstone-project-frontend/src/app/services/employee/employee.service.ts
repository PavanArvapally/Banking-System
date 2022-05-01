import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(private http: HttpClient) {}
  getHomePage() {
    return this.http.get(environment.apiBaseUrl, { responseType: 'text' });
  }
  employeeLogin(empId: string) {
    return this.http.get(environment.apiBaseUrl + '/employee?empId=' + empId);
  }
  getBranchCode(empId: number) {
    return this.http.get(environment.apiBaseUrl + '/employee?empId=' + empId);
  }
  getBankName(branchCode: string) {
    return this.http.get(
      environment.apiBaseUrl + '/employee/bank?branchCode=' + branchCode
    );
  }
  getAllCustomersByBranch(branchCode: string) {
    return this.http.get(
      environment.apiBaseUrl + `/employee/customers/${branchCode}`
    );
  }

  getCustomerById(custId: number) {
    return this.http.get(
      environment.apiBaseUrl + '/customer?customerId=' + custId
    );
  }
  deleteCustomer(custId: number) {
    return this.http.delete(
      environment.apiBaseUrl + '/admin/customer/delete?customerId=' + custId
    );
  }
  updateCustomer(body: any) {
    return this.http.patch(
      environment.apiBaseUrl + '/admin/customer/update',
      body
    );
  }
  getAllBankAccountsByBranch(branchCode: string) {
    return this.http.get(
      environment.apiBaseUrl + `/employee/bankaccount/${branchCode}`
    );
  }

  createBankAccount(body: any) {
    return this.http.post(environment.apiBaseUrl + '/bankaccount/create', body);
  }
  getAllTransactions(empId: string) {
    return this.http.get(
      environment.apiBaseUrl + '/employee/transactions?empId=' + empId
    );
  }

  getEmployeeDetails(empId: string) {
    return this.http.get(environment.apiBaseUrl + '/employee?empId=' + empId);
  }
}
