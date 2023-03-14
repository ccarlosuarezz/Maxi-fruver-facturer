import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProviderWindowComponent } from './create-provider-window.component';

describe('CreateProviderWindowComponent', () => {
  let component: CreateProviderWindowComponent;
  let fixture: ComponentFixture<CreateProviderWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateProviderWindowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateProviderWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
