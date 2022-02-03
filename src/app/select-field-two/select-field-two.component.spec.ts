import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectFieldTwoComponent } from './select-field-two.component';

describe('SelectFieldTwoComponent', () => {
  let component: SelectFieldTwoComponent;
  let fixture: ComponentFixture<SelectFieldTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectFieldTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectFieldTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
