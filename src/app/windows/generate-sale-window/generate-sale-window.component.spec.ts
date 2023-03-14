import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateSaleWindowComponent } from './generate-sale-window.component';

describe('GenerateSaleWindowComponent', () => {
  let component: GenerateSaleWindowComponent;
  let fixture: ComponentFixture<GenerateSaleWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenerateSaleWindowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerateSaleWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
