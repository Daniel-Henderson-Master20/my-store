import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateForm.ComponentComponent } from './create-form.component.component';

describe('CreateForm.ComponentComponent', () => {
  let component: CreateForm.ComponentComponent;
  let fixture: ComponentFixture<CreateForm.ComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateForm.ComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateForm.ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
