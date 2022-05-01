import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeCustomersComponent } from './employee-customers.component';

describe('EmployeeCustomersComponent', () => {
  let component: EmployeeCustomersComponent;
  let fixture: ComponentFixture<EmployeeCustomersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeCustomersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeCustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
