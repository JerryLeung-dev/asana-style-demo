import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputFieldTwoComponent } from './input-field-two.component';

describe('InputFieldTwoComponent', () => {
  let component: InputFieldTwoComponent;
  let fixture: ComponentFixture<InputFieldTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputFieldTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputFieldTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
