import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainAdministratorWindowComponent } from './main-administrator-window.component';

describe('MainAdministratorWindowComponent', () => {
  let component: MainAdministratorWindowComponent;
  let fixture: ComponentFixture<MainAdministratorWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainAdministratorWindowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainAdministratorWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
