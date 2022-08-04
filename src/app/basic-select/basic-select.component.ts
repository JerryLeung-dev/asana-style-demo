import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';
import {
  Component,
  forwardRef,
  Input,
  OnInit,
  Provider,
  ViewChild,
} from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
  Validator,
} from '@angular/forms';
import { SelectListItem } from 'src/assets/ViewModel';
import { GenericSelectComponent } from '../generic-select/generic-select.component';

const BASIC_SELECT_FIELD_CONTROL_VALUE_ACCESSOR: Provider = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => BasicSelectComponent),
  multi: true,
};

@Component({
  selector: 'app-basic-select',
  templateUrl: './basic-select.component.html',
  styleUrls: ['./basic-select.component.scss'],
  providers: [BASIC_SELECT_FIELD_CONTROL_VALUE_ACCESSOR],
})
export class BasicSelectComponent implements ControlValueAccessor {
  @Input() items: SelectListItem[];
  @Input() controlName: string = 'The field';

  @Input()
  get required(): boolean {
    return this._required;
  }
  set required(value: BooleanInput) {
    this._required = coerceBooleanProperty(value);
  }

  @ViewChild(GenericSelectComponent, { static: true })
  genericSelect!: GenericSelectComponent;

  private _required: boolean;

  constructor() {}

  writeValue(value: string): void {
    if (this.genericSelect) {
      this.genericSelect.writeValue(value);
    }
  }

  registerOnChange(fn: (value: string) => void) {
    if (this.genericSelect) {
      this.genericSelect.registerOnChange(fn);
    }
  }

  registerOnTouched(fn: () => void) {
    if (this.genericSelect) {
      this.genericSelect.registerOnTouched(fn);
    }
  }

  setDisabledState(isDisabled: boolean): void {
    if (this.genericSelect) {
      this.genericSelect.setDisabledState(isDisabled);
    }
  }
}
