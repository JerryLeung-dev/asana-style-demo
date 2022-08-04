import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskboardSelectComponent } from './taskboard-select.component';

describe('TaskboardSelectComponent', () => {
  let component: TaskboardSelectComponent;
  let fixture: ComponentFixture<TaskboardSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskboardSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskboardSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
