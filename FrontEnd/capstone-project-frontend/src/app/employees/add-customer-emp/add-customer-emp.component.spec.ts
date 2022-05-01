import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCustomerEmpComponent } from './add-customer-emp.component';

describe('AddCustomerEmpComponent', () => {
  let component: AddCustomerEmpComponent;
  let fixture: ComponentFixture<AddCustomerEmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCustomerEmpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCustomerEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
