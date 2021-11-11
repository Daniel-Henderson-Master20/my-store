import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductList.ComponentComponent } from './product-list.component.component';

describe('ProductList.ComponentComponent', () => {
  let component: ProductList.ComponentComponent;
  let fixture: ComponentFixture<ProductList.ComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductList.ComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductList.ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
