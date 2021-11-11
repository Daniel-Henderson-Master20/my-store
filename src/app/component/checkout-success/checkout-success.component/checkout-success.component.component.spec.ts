import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutSuccess.ComponentComponent } from './checkout-success.component.component';

describe('CheckoutSuccess.ComponentComponent', () => {
  let component: CheckoutSuccess.ComponentComponent;
  let fixture: ComponentFixture<CheckoutSuccess.ComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckoutSuccess.ComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutSuccess.ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
