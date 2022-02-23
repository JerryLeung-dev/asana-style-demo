import { coerceBooleanProperty } from '@angular/cdk/coercion';
import {
  AfterViewInit,
  Component,
  forwardRef,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { SelectListItem } from '../../assets/ViewModel';
import { GenericSelectComponent } from '../generic-select/generic-select.component';

@Component({
  selector: 'app-priority-select',
  templateUrl: './priority-select.component.html',
  styleUrls: ['./priority-select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PrioritySelectComponent),
      multi: true,
    },
  ],
})
export class PrioritySelectComponent implements ControlValueAccessor {
  @Input() items: SelectListItem[];
  @Input() disabled = false;

  @Input()
  get required(): boolean {
    return this._required;
  }
  set required(value: any) {
    this._required = coerceBooleanProperty(value);
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
