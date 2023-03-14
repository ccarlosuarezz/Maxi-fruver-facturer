import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultReportsWindowComponent } from './consult-reports-window.component';

describe('ConsultReportsWindowComponent', () => {
  let component: ConsultReportsWindowComponent;
  let fixture: ComponentFixture<ConsultReportsWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultReportsWindowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultReportsWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
