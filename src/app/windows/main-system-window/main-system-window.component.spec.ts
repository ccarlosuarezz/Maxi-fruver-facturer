import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainSystemWindowComponent } from './main-system-window.component';

describe('MainSystemWindowComponent', () => {
  let component: MainSystemWindowComponent;
  let fixture: ComponentFixture<MainSystemWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainSystemWindowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainSystemWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
