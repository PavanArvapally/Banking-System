import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBranchComponent } from './admin/add-branch/add-branch.component';
import { AddCustomerComponent } from './admin/add-customer/add-customer.component';
import { AddEmployeeComponent } from './admin/add-employee/add-employee.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { EditBranchComponent } from './admin/edit-branch/edit-branch.component';
import { EditCustomerComponent } from './admin/edit-customer/edit-customer.component';
import { EditEmployeeComponent } from './admin/edit-employee/edit-employee.component';
import { LoginComponent } from './admin/login/login.component';
import { ShowBranchesComponent } from './admin/show-branches/show-branches.component';
import { ShowCustomersComponent } from './admin/show-customers/show-customers.component';
import { ShowEmployeesComponent } from './admin/show-employees/show-employees.component';
import { ShowTransactionsComponent } from './admin/show-transactions/show-transactions.component';
import { ViewProfileComponent } from './admin/view-profile/view-profile.component';
import { CustomerDashboardComponent } from './customers/customer-dashboard/customer-dashboard.component';
import { CustomerDepositComponent } from './customers/customer-deposit/customer-deposit.component';
import { CustomerLoginComponent } from './customers/customer-login/customer-login.component';
import { CustomerProfileComponent } from './customers/customer-profile/customer-profile.component';
import { CustomerTransactionsComponent } from './customers/customer-transactions/customer-transactions.component';
import { CustomerWithdrawComponent } from './customers/customer-withdraw/customer-withdraw.component';
import { AddCustomerEmpComponent } from './employees/add-customer-emp/add-customer-emp.component';
import { EditCustomerEmpComponent } from './employees/edit-customer-emp/edit-customer-emp.component';
import { EmployeeAddBankAccountComponent } from './employees/employee-add-bank-account/employee-add-bank-account.component';
import { EmployeeBankAccountComponent } from './employees/employee-bank-account/employee-bank-account.component';
import { EmployeeCustomersComponent } from './employees/employee-customers/employee-customers.component';
import { EmployeeDashboardComponent } from './employees/employee-dashboard/employee-dashboard.component';
import { EmployeeEditBankAccountComponent } from './employees/employee-edit-bank-account/employee-edit-bank-account.component';
import { EmployeeLoginComponent } from './employees/employee-login/employee-login.component';
import { EmployeeProfileComponent } from './employees/employee-profile/employee-profile.component';
import { EmployeeTransactionsComponent } from './employees/employee-transactions/employee-transactions.component';

const routes: Routes = [
  { path: '', redirectTo: 'customer/index', pathMatch: 'full' },
  { path: 'admin/index', component: LoginComponent },
  { path: 'admin/:id/dashboard', component: DashboardComponent },
  { path: 'admin/:id/employees', component: ShowEmployeesComponent },
  { path: 'admin/:id/branches', component: ShowBranchesComponent },
  { path: 'admin/:id/transactions', component: ShowTransactionsComponent },
  { path: 'admin/:id/customers', component: ShowCustomersComponent },
  {
    path: 'admin/:id/branches/editBranch/:ifscCode',
    component: EditBranchComponent,
  },
  { path: 'admin/:id/viewProfile', component: ViewProfileComponent },
  {
    path: 'admin/:id/customers/editCustomer/:custId',
    component: EditCustomerComponent,
  },
  { path: 'admin/:id/customers/addCustomer', component: AddCustomerComponent },
  { path: 'admin/:id/employees/addEmployee', component: AddEmployeeComponent },
  {
    path: 'admin/:id/employees/editEmployee/:empId',
    component: EditEmployeeComponent,
  },
  {
    path: 'admin/:id/branches/addBranch',
    component: AddBranchComponent,
  },

  {
    path: 'branch/:branchCode/employee/:id/dashboard',
    component: EmployeeDashboardComponent,
  },
  {
    path: 'branch/:branchCode/employee/:id/customers',
    component: EmployeeCustomersComponent,
  },
  {
    path: 'branch/:branchCode/employee/:id/bankAccounts',
    component: EmployeeBankAccountComponent,
  },
  {
    path: 'branch/:branchCode/employee/:id/transactions',
    component: EmployeeTransactionsComponent,
  },
  {
    path: 'branch/:branchCode/employee/:id/profile',
    component: EmployeeProfileComponent,
  },
  { path: 'customer/index', component: CustomerLoginComponent },
  { path: 'customer/:id/dashboard', component: CustomerDashboardComponent },
  {
    path: 'customer/:id/transactions',
    component: CustomerTransactionsComponent,
  },
  {
    path: 'customer/:id/transaction/deposit',
    component: CustomerDepositComponent,
  },
  {
    path: 'customer/:id/transaction/withdraw',
    component: CustomerWithdrawComponent,
  },
  { path: 'customer/:id/profile', component: CustomerProfileComponent },
  { path: 'employee/index', component: EmployeeLoginComponent },
  {
    path: 'employee/:id/dashboard',
    component: EmployeeDashboardComponent,
  },
  {
    path: 'employee/:id/bankAccounts/:branchCode',
    component: EmployeeBankAccountComponent,
  },
  {
    path: 'employee/:id/customers/:branchCode',
    component: EmployeeCustomersComponent,
  },
  { path: 'employee/:id/employeeProfile', component: EmployeeProfileComponent },
  {
    path: 'employee/:id/transactions',
    component: EmployeeTransactionsComponent,
  },
  {
    path: 'employee/:id/customers/addCustomer',
    component: AddCustomerEmpComponent,
  },
  {
    path: 'employee/:id/customers/editCustomer/:custId',
    component: EditCustomerEmpComponent,
  },
  {
    path: 'employee/:id/bankAccount/edit/:branchCode',
    component: EmployeeEditBankAccountComponent,
  },
  {
    path: 'employee/:id/bankAccount/:branchCode/create',
    component: EmployeeAddBankAccountComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
