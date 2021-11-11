import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutSuccessComponent } from './checkout-success.component';

describe('CheckoutSuccess.Component', () => {
  let component: CheckoutSuccessComponent;
  let fixture: ComponentFixture<CheckoutSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckoutSuccessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
