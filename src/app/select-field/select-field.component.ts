import { Component, EventEmitter, forwardRef, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ViewModel } from 'src/assets/ViewModel';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'app-select-field',
  templateUrl: './select-field.component.html',
  styleUrls: ['./select-field.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectFieldComponent),
      multi: true
    }
  ]
})

export class SelectFieldComponent implements ControlValueAccessor  {

  @Input() isDisabled = false;
  // @Input() viewModel: ViewModel;

  @Input() _viewModel :ViewModel;

  private _required = false;



  constructor() { }

  writeValue(value: any) {
    if (value !== undefined) {
      this._viewModel = value;
    }
  }
  propagateChange = (_: any) => {};

  registerOnChange(fn : any) {
    this.propagateChange = fn;
  }

  registerOnTouched() {}

  get viewModel() {
    return this._viewModel;
  }

  set viewModel(val) {
    this._viewModel = val;
    this.propagateChange(this._viewModel);
  }

  get selectedPriority () {
    if(this.viewModel.action.Priority.Value){
      const value = this.viewModel.action.Priority.Value;
      switch(value) {
        case 1:
          return 'Low';
        case 2:
          return 'Medium';
        case 3:
          return 'High'
        default:
          return 'Priority'
      }
    } else {
      return 'Priority'
    }
  }

}


