import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';
import {
  AfterViewInit,
  Component,
  forwardRef,
  Input,
  OnInit,
  Provider,
  ViewChild,
} from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { SelectListItem } from '../../assets/ViewModel';
import { GenericSelectComponent } from '../generic-select/generic-select.component';

const SELECT_FIELD_CONTROL_VALUE_ACCESSOR: Provider = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => PrioritySelectComponent),
  multi: true,
};

@Component({
  selector: 'app-priority-select',
  templateUrl: './priority-select.component.html',
  styleUrls: ['./priority-select.component.scss'],
  providers: [SELECT_FIELD_CONTROL_VALUE_ACCESSOR],
})
export class PrioritySelectComponent implements ControlValueAccessor, OnInit {
  @Input() items: SelectListItem[];

  @Input()
  get required(): boolean {
    return this._required;
  }
  set required(value: BooleanInput) {
    this._required = coerceBooleanProperty(value);
  }

  ngOnInit(): void {
    console.log(this.items);
  }

  @ViewChild(GenericSelectComponent, { static: true })
  genericSelect!: GenericSelectComponent;

  private _required: boolean;

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
