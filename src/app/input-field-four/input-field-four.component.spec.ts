import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputFieldFourComponent } from './input-field-four.component';

describe('InputFieldFourComponent', () => {
  let component: InputFieldFourComponent;
  let fixture: ComponentFixture<InputFieldFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputFieldFourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputFieldFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
