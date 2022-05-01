import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCustomerEmpComponent } from './edit-customer-emp.component';

describe('EditCustomerEmpComponent', () => {
  let component: EditCustomerEmpComponent;
  let fixture: ComponentFixture<EditCustomerEmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCustomerEmpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCustomerEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
