import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductList.CompenentComponent } from './product-list.compenent.component';

describe('ProductList.CompenentComponent', () => {
  let component: ProductList.CompenentComponent;
  let fixture: ComponentFixture<ProductList.CompenentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductList.CompenentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductList.CompenentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
