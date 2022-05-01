import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeAddBankAccountComponent } from './employee-add-bank-account.component';

describe('EmployeeAddBankAccountComponent', () => {
  let component: EmployeeAddBankAccountComponent;
  let fixture: ComponentFixture<EmployeeAddBankAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeAddBankAccountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeAddBankAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
