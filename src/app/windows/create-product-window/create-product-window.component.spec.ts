import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProductWindowComponent } from './create-product-window.component';

describe('CreateProductWindowComponent', () => {
  let component: CreateProductWindowComponent;
  let fixture: ComponentFixture<CreateProductWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateProductWindowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateProductWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
