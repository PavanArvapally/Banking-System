import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  constructor(private http: HttpClient) {}
  getHomePage() {
    return this.http.get(environment.apiBaseUrl, { responseType: 'text' });
  }
  customerLogin(customerId: number) {
    return this.http.get(
      environment.apiBaseUrl + '/customer?customerId=' + customerId
    );
  }
  getCustomerDetails(id: number) {
    return this.http.get(environment.apiBaseUrl + `/customer?customerId=${id}`);
  }

  getCustomerAccountDetails(id: number) {
    return this.http.get(
      environment.apiBaseUrl + `/customer/${id}/accountDetails`
    );
  }

  getCustomerTransactions(id: number) {
    return this.http.get(
      environment.apiBaseUrl + `/customer/${id}/transactions`
    );
  }

  depositAmount(accNo: number, amount: string) {
    return this.http.get(
      environment.apiBaseUrl + `/transaction/deposit/${accNo}?amount=${amount}`
    );
  }

  withdrawAmount(body: any) {
    return this.http.post(
      environment.apiBaseUrl + `/transaction/withdraw`,
      body
    );
  }
}
