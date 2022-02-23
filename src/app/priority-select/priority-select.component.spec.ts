import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrioritySelectComponent } from './priority-select.component';

describe('SpecificSelectComponent', () => {
  let component: PrioritySelectComponent;
  let fixture: ComponentFixture<PrioritySelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PrioritySelectComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrioritySelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
