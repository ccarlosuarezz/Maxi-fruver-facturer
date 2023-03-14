import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCustomerWindowComponent } from './create-customer-window.component';

describe('CreateCustomerWindowComponent', () => {
  let component: CreateCustomerWindowComponent;
  let fixture: ComponentFixture<CreateCustomerWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateCustomerWindowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCustomerWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
