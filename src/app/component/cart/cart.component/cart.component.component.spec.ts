import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cart.ComponentComponent } from './cart.component.component';

describe('Cart.ComponentComponent', () => {
  let component: Cart.ComponentComponent;
  let fixture: ComponentFixture<Cart.ComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cart.ComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cart.ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
