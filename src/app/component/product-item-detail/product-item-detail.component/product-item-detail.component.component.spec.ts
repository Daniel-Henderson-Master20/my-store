import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductItemDetail.ComponentComponent } from './product-item-detail.component.component';

describe('ProductItemDetail.ComponentComponent', () => {
  let component: ProductItemDetail.ComponentComponent;
  let fixture: ComponentFixture<ProductItemDetail.ComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductItemDetail.ComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductItemDetail.ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
