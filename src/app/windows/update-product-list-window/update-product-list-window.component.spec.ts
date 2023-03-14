import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateProductListWindowComponent } from './update-product-list-window.component';

describe('UpdateProductListWindowComponent', () => {
  let component: UpdateProductListWindowComponent;
  let fixture: ComponentFixture<UpdateProductListWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateProductListWindowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateProductListWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
