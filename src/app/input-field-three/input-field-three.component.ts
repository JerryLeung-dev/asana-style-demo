import { Component, ElementRef, EventEmitter, forwardRef, Input, OnInit, Output, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Subscription } from 'rxjs';
import { Task } from 'src/assets/Task';
import { ControlValueAccessor, FormControl, NG_VALIDATORS, NG_VALUE_ACCESSOR  } from '@angular/forms';

export function validateEmptyInput(c: FormControl) {
  let err = 'Subject is required';
  function isEmpty(val: string){
    return (val === undefined || val == null || val.length <= 0) ? true : false;
  }
  return (isEmpty(c.value) && (c.touched || c.dirty)) ? err : null;
}

@Component({
  selector: 'app-input-field-three',
  templateUrl: './input-field-three.component.html',
  styleUrls: ['./input-field-three.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputFieldThreeComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useValue: validateEmptyInput,
      multi: true
    }
  ]
})
export class InputFieldThreeComponent implements ControlValueAccessor {
  @Input() _task: Task = {subject: ''};
  // @ViewChild('subject') subject: ElementRef;

  isEditing = false;


  constructor() { }

  get task() {
    return this._task;
  }

  set task(val) {
    this._task = val;
    this.propagateChange(this._task);
  }

  propagateChange = (_: Task) => {};

  writeValue(value: Task) {
    if (value !== undefined) {
      this._task = value;
    }
  }

  registerOnChange(fn:any) {
    this.propagateChange = fn;
  }

  registerOnTouched() {}

  setEditMode(mode: boolean) {
    this.isEditing = mode;
  }

  save(subject: string):void {
    console.log(subject);
    this.task = {...this.task, subject: subject}
  }
}

