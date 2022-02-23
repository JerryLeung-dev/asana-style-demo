import {
  AfterContentChecked,
  AfterViewChecked,
  Component,
  ContentChild,
  EventEmitter,
  forwardRef,
  Input,
  Output,
} from '@angular/core';
import { OptionsTemplateDirective as OptionsTemplateDirective } from '../generic-select-templates/options-template/options-template.directive';
import { SelectListItem } from '../../assets/ViewModel';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import {
  ControlValueAccessor,
  FormControl,
  NG_VALUE_ACCESSOR,
  Validator,
} from '@angular/forms';
import { MatSelectChange } from '@angular/material/select';
import { SelectedOptionTemplateDirective } from '../generic-select-templates/selected-option-template/selected-option-template.directive';

@Component({
  selector: 'app-generic-select',
  templateUrl: './generic-select.component.html',
  styleUrls: ['./generic-select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => GenericSelectComponent),
      multi: true,
    },
  ],
})
export class GenericSelectComponent implements ControlValueAccessor {
  @Input() items: SelectListItem[] | undefined;
  @Input() disabled: boolean = false;

  @Input()
  get required(): boolean {
    return this._required;
  }
  set required(value: any) {
    this._required = coerceBooleanProperty(value);
  }

  @Output() selectionChange = new EventEmitter<MatSelectChange>();

  private _required!: boolean;

  selectListControl = new FormControl('');

  @ContentChild(OptionsTemplateDirective) optionsTemplate:
    | OptionsTemplateDirective
    | undefined;
  @ContentChild(SelectedOptionTemplateDirective) selectedOptionTemplate:
    | SelectedOptionTemplateDirective
    | undefined;

  get selectedItem() {
    const value = this.selectListControl.value;
    const selectedItem = this.items?.find((item) => item.Value === value);
    return selectedItem?.Text;
  }

  ngOnInit(): void {
    if (this.disabled) {
      this.selectListControl.disable();
    }
  }

  writeValue(value: string): void {
    if (value) {
      this.selectListControl.setValue(value, { emitEvent: false });
    } else {
      this.selectListControl.reset('');
    }
  }

  registerOnChange(fn: (value: string) => void) {
    this.selectListControl.valueChanges.subscribe(fn);
  }

  registerOnTouched(fn: () => void) {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  onTouched: () => void = () => {};
}
