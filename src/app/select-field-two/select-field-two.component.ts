import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { Component, EventEmitter, forwardRef, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, FormControl, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatSelectChange } from '@angular/material/select';
import { ViewModel, SelectItem } from 'src/assets/ViewModel';

@Component({
  selector: 'app-select-field-two',
  templateUrl: './select-field-two.component.html',
  styleUrls: ['./select-field-two.component.scss'],
  providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => SelectFieldTwoComponent),
			multi: true
		}
	]
})
export class SelectFieldTwoComponent implements ControlValueAccessor {

	get required(): boolean {
		return this._required;
	}
  @Input()
	set required(value: any) {
		this._required = coerceBooleanProperty(value);
	}
  @Input() isDisabled = false;
  @Input() items: SelectItem[];
  @Input() controlName: string;

  @Output() selectionChange = new EventEmitter<MatSelectChange>();

  selectListControl = new FormControl('');

  private _required: boolean;

  writeValue(value: string): void {
		if (value) {
			this.selectListControl.setValue(value, { emitEvent: false });
		} else {
			this.selectListControl.reset('');
		}
	}
  registerOnChange(fn: (value: string) => void) {
		this.selectListControl.valueChanges
			.subscribe(fn);
	}

	registerOnTouched(fn: () => void) {
		this.onTouched = fn;
	}


	onTouched: () => void = () => {};



  get selectedItem () {
      const value = this.selectListControl.value;

      const selectedItem = this.items.find(item => item.Value === value);
      return selectedItem?.Text;
  }
}
