import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeSaleWindowComponent } from './make-sale-window.component';

describe('MakeSaleWindowComponent', () => {
  let component: MakeSaleWindowComponent;
  let fixture: ComponentFixture<MakeSaleWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MakeSaleWindowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MakeSaleWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
