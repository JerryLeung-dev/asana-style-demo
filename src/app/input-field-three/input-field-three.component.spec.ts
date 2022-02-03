import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputFieldThreeComponent } from './input-field-three.component';

describe('InputFieldThreeComponent', () => {
  let component: InputFieldThreeComponent;
  let fixture: ComponentFixture<InputFieldThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputFieldThreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputFieldThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
