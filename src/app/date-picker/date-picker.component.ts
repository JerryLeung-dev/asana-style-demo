import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';
import { Component, forwardRef, Input, OnInit, Provider } from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  FormControl,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  Validator,
} from '@angular/forms';
import { filter } from 'rxjs';
import { extractTouchedChanges } from 'src/assets/extractTouchedChanges';

const DATE_FIELD_CONTROL_VALUE_ACCESSOR: Provider = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => DatePickerComponent),
  multi: true,
};

@Component({
  selector: 'app-date-picker-field',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss'],
  providers: [
    DATE_FIELD_CONTROL_VALUE_ACCESSOR,
    {
      provide: NG_VALIDATORS,
      useExisting: DatePickerComponent,
      multi: true,
    },
  ],
})
export class DatePickerComponent
  implements OnInit, ControlValueAccessor, Validator
{
  @Input() icon: string;
  @Input() minDate: Date;
  @Input() maxDate: Date;
  @Input() matTooltip: string = 'Date picker icon';

  @Input()
  get required(): boolean {
    return this._required;
  }
  set required(value: BooleanInput) {
    this._required = coerceBooleanProperty(value);
  }

  @Input()
  get readonly(): boolean {
    return this._readonly;
  }
  set readonly(value: BooleanInput) {
    this._readonly = coerceBooleanProperty(value);
  }

  @Input()
  get dateOnly(): boolean {
    return this._dateOnly;
  }
  set dateOnly(value: BooleanInput) {
    this._dateOnly = coerceBooleanProperty(value);
  }

  isEditing = true;
  dateFieldControl = new FormControl('');
  disabled = false;

  private _onTouched: Function;
  private onChanged: Function;
  private _required: boolean;
  private _dateOnly: boolean;
  private _readonly: boolean;

  constructor() {}

  ngOnInit() {
    if (this.disabled) {
      this.dateFieldControl.disable();
    }
  }

  ngAfterViewInit() {
    extractTouchedChanges(this.dateFieldControl)
      .pipe(filter((touched) => touched))
      .subscribe(() => this._onTouched());
  }

  writeValue(value: string): void {
    this.dateFieldControl.setValue(value, { emitEvent: false });
  }

  registerOnChange(fn: (value: string) => void) {
    this.dateFieldControl.valueChanges.subscribe(fn);
  }

  registerOnTouched(fn: () => void) {
    this._onTouched = fn;
  }

  setDisabledState(isDisabled: boolean) {
    this.disabled = isDisabled;
  }

  validate(ctrl: AbstractControl) {
    return this.dateFieldControl?.errors;
  }

  get dateMode() {
    if (this._dateOnly) {
      return 'calendar';
    } else {
      return 'both';
    }
  }

  handleDeleteInput() {
    this.dateFieldControl.setValue('');
  }
}
