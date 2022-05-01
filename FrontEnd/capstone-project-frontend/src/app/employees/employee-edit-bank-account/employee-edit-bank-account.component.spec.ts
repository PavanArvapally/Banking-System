import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeEditBankAccountComponent } from './employee-edit-bank-account.component';

describe('EmployeeEditBankAccountComponent', () => {
  let component: EmployeeEditBankAccountComponent;
  let fixture: ComponentFixture<EmployeeEditBankAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeEditBankAccountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeEditBankAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
