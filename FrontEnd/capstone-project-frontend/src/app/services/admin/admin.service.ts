import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  constructor(private http: HttpClient) {}

  getHomePage() {
    return this.http.get(environment.apiBaseUrl, { responseType: 'text' });
  }

  getAllBranches() {
    return this.http.get(environment.apiBaseUrl + '/branches/all');
  }

  getAllTransactions() {
    return this.http.get(
      environment.apiBaseUrl + '/transaction/showTransactions'
    );
  }

  getBranchDetails(ifscCode: string) {
    return this.http.get(
      environment.apiBaseUrl + '/branches/getBranchDetails?ifscCode=' + ifscCode
    );
  }

  deleteBranch(ifscCode: string) {
    return this.http.delete(
      environment.apiBaseUrl + '/branches/deleteBranch?ifscCode=' + ifscCode,
      { responseType: 'text' }
    );
  }

  getAllCustomers() {
    return this.http.get(environment.apiBaseUrl + '/admin/allcustomers');
  }

  getCustomerById(custId: number) {
    return this.http.get(
      environment.apiBaseUrl + '/customer?customerId=' + custId
    );
  }
  updateCustomer(body: any) {
    return this.http.patch(
      environment.apiBaseUrl + '/admin/customer/update',
      body
    );
  }

  addCustomer(body: any) {
    return this.http.post(
      environment.apiBaseUrl + '/admin/customer/create',
      body
    );
  }
  deleteCustomer(custId: number) {
    return this.http.delete(
      environment.apiBaseUrl + '/admin/customer/delete?customerId=' + custId
    );
  }

  updateBranch(branchDetails: any) {
    return this.http.patch(
      environment.apiBaseUrl + '/branches/update',
      branchDetails
    );
  }

  adminLogin(adminId: number) {
    return this.http.get(environment.apiBaseUrl + '/admin?adminId=' + adminId);
  }

  getAdminDetails(adminId: number) {
    return this.http.get(environment.apiBaseUrl + '/admin?adminId=' + adminId);
  }

  getAllEmployees() {
    return this.http.get(environment.apiBaseUrl + '/admin/allemployees');
  }

  getEmployeeById(id: number) {
    return this.http.get(environment.apiBaseUrl + '/employee?empId=' + id);
  }

  deleteEmployeeById(id: number) {
    return this.http.delete(
      environment.apiBaseUrl + '/admin/employee/delete?empId=' + id
    );
  }

  addEmployee(body: any) {
    return this.http.post(
      environment.apiBaseUrl + '/admin/employee/create',
      body
    );
  }
  updateEmployee(body: any) {
    return this.http.patch(
      environment.apiBaseUrl + '/admin/employee/update',
      body
    );
  }

  createBranch(body: any) {
    return this.http.post(environment.apiBaseUrl + '/branches/create', body);
  }
}
