import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCashierWindowComponent } from './create-cashier-window.component';

describe('CreateCashierWindowComponent', () => {
  let component: CreateCashierWindowComponent;
  let fixture: ComponentFixture<CreateCashierWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateCashierWindowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCashierWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
