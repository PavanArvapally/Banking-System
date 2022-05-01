import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './admin/login/login.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { ShowEmployeesComponent } from './admin/show-employees/show-employees.component';
import { ShowBranchesComponent } from './admin/show-branches/show-branches.component';
import { ShowTransactionsComponent } from './admin/show-transactions/show-transactions.component';
import { ShowCustomersComponent } from './admin/show-customers/show-customers.component';
import { EmployeeLoginComponent } from './employees/employee-login/employee-login.component';
import { EmployeeDashboardComponent } from './employees/employee-dashboard/employee-dashboard.component';
import { EmployeeCustomersComponent } from './employees/employee-customers/employee-customers.component';
import { EmployeeBankAccountComponent } from './employees/employee-bank-account/employee-bank-account.component';
import { EmployeeTransactionsComponent } from './employees/employee-transactions/employee-transactions.component';
import { EmployeeProfileComponent } from './employees/employee-profile/employee-profile.component';
import { CustomerLoginComponent } from './customers/customer-login/customer-login.component';
import { CustomerDashboardComponent } from './customers/customer-dashboard/customer-dashboard.component';
import { CustomerTransactionsComponent } from './customers/customer-transactions/customer-transactions.component';
import { CustomerDepositComponent } from './customers/customer-deposit/customer-deposit.component';
import { CustomerWithdrawComponent } from './customers/customer-withdraw/customer-withdraw.component';
import { HttpClientModule } from '@angular/common/http';
import { EditBranchComponent } from './admin/edit-branch/edit-branch.component';
import { EditCustomerComponent } from './admin/edit-customer/edit-customer.component';
import { ViewProfileComponent } from './admin/view-profile/view-profile.component';
import { FormsModule } from '@angular/forms';
import { AddBranchComponent } from './admin/add-branch/add-branch.component';
import { NavBarComponent } from './admin/nav-bar/nav-bar.component';
import { AddEmployeeComponent } from './admin/add-employee/add-employee.component';
import { EditEmployeeComponent } from './admin/edit-employee/edit-employee.component';
import { EditCustomerEmpComponent } from './employees/edit-customer-emp/edit-customer-emp.component';
import { AddCustomerEmpComponent } from './employees/add-customer-emp/add-customer-emp.component';
import { CustomerProfileComponent } from './customers/customer-profile/customer-profile.component';
import { EmployeeEditBankAccountComponent } from './employees/employee-edit-bank-account/employee-edit-bank-account.component';
import { AddCustomerComponent } from './admin/add-customer/add-customer.component';
import { EmployeeAddBankAccountComponent } from './employees/employee-add-bank-account/employee-add-bank-account.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    ShowEmployeesComponent,
    ShowBranchesComponent,
    ShowTransactionsComponent,
    ShowCustomersComponent,
    EmployeeLoginComponent,
    EmployeeDashboardComponent,
    EmployeeCustomersComponent,
    EmployeeBankAccountComponent,
    EmployeeTransactionsComponent,
    EmployeeProfileComponent,
    CustomerLoginComponent,
    CustomerDashboardComponent,
    CustomerTransactionsComponent,
    CustomerDepositComponent,
    CustomerWithdrawComponent,
    EditBranchComponent,
    EditCustomerComponent,
    ViewProfileComponent,
    AddBranchComponent,
    NavBarComponent,
    AddEmployeeComponent,
    EditEmployeeComponent,
    EditCustomerEmpComponent,
    AddCustomerEmpComponent,
    CustomerProfileComponent,
    EmployeeEditBankAccountComponent,
    AddCustomerComponent,
    EmployeeAddBankAccountComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
