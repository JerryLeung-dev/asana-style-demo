import { coerceBooleanProperty } from '@angular/cdk/coercion';
import {
  AfterViewInit,
  Component,
  ElementRef,
  forwardRef,
  Input,
  Provider,
  ViewChild,
} from '@angular/core';
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

const INPUT_FIELD_CONTROL_VALUE_ACCESSOR: Provider = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => CustomInputComponent),
  multi: true,
};

@Component({
  selector: 'app-custom-input-field',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss'],
  providers: [
    INPUT_FIELD_CONTROL_VALUE_ACCESSOR,
    {
      provide: NG_VALIDATORS,
      useExisting: CustomInputComponent,
      multi: true,
    },
  ],
})
export class CustomInputComponent
  implements ControlValueAccessor, Validator, AfterViewInit
{
  @Input() controlName: string = 'The field';

  @Input()
  get textarea(): boolean {
    return this._textarea;
  }
  set textarea(value: boolean | string) {
    this._textarea = coerceBooleanProperty(value);
  }

  @Input()
  get required(): boolean {
    return this._required;
  }
  set required(value: boolean | string) {
    this._required = coerceBooleanProperty(value);
  }

  @Input()
  get title(): boolean {
    return this._title;
  }
  set title(value: boolean | string) {
    this._title = coerceBooleanProperty(value);
  }

  @ViewChild('inputElement') inputElement: ElementRef;

  isEditing = true;
  inputControl = new FormControl('');
  disabled = false;

  private _onTouched: Function;
  private _required: boolean;
  private _title: boolean;
  private _textarea: boolean;

  constructor() {}

  writeValue(value: string): void {
    if (value) {
      this.inputControl.setValue(value, { emitEvent: false });
    } else {
      this.inputControl.reset('');
    }
  }

  ngAfterViewInit() {
    extractTouchedChanges(this.inputControl)
      .pipe(filter((touched) => touched))
      .subscribe(() => this._onTouched());
  }

  registerOnChange(fn: (value: string) => void) {
    this.inputControl.valueChanges.subscribe(fn);
  }

  registerOnTouched(fn: () => void): void {
    this._onTouched = fn;
  }

  setDisabledState(isDisabled: boolean) {
    this.disabled = isDisabled;
  }

  setEditMode(mode: boolean) {
    if (mode === true) {
      this.inputControl.enable();
      this.autoFocusElement();
    }

    if (mode === false) {
      const hasError = this.checkErrorsAfterEditing();
      if (hasError) {
        this.autoFocusElement();
        return;
      }

      this.inputControl.disable();
    }
  }

  public autoFocusElement() {
    this.inputElement.nativeElement.focus();
  }

  validate(_: AbstractControl) {
    return this.inputControl?.errors;
  }

  checkErrorsAfterEditing() {
    return this.inputControl.errors ? true : false;
  }
}
