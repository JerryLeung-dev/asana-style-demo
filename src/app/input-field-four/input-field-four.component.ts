import { Component, ElementRef, forwardRef, Input, OnInit, Provider } from '@angular/core';
import { AbstractControl, ControlContainer, ControlValueAccessor, FormBuilder, FormControl, FormGroup, NG_VALIDATORS, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';
import { Task } from 'src/assets/Task';

const SUBJECT_FIELD_CONTROL_VALUE_ACCESSOR: Provider = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => InputFieldFourComponent),
  multi: true,
};


@Component({
  selector: 'app-input-field-four',
  templateUrl: './input-field-four.component.html',
  styleUrls: ['./input-field-four.component.scss'],
  providers: [
    SUBJECT_FIELD_CONTROL_VALUE_ACCESSOR,
  {
    provide: NG_VALIDATORS,
    useExisting: InputFieldFourComponent,
    multi: true
  }
  ]
})
export class InputFieldFourComponent implements ControlValueAccessor {
  @Input() disabled = false;

  isEditing = true;
  input: FormGroup;

  private onTouched: Function;
  private onChanged: Function;



  constructor(fb: FormBuilder, private el: ElementRef) {
    this.input = fb.group({
      subject: [{value:'',disabled:true}, Validators.required]
    })
   }

   get subject() {
     return this.input.get("subject");
   }

  writeValue(value: string): void {
    if (value !== undefined) {
      this.input.patchValue({subject: value});
    }
  }

  registerOnChange(fn: any): void {
    this.input.controls['subject'].valueChanges.subscribe(fn); // <-- save the function
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn; // <-- save the function
  }

  setEditMode(mode:boolean) {
    if(mode === true) {
      if(this.disabled === true){
        return;
      } else {
        this.input.enable();
        this.autoFocusElement();
      }
    }

    if(mode=== false) {
      const hasError = this.checkErrorsAfterEditing();
      if(hasError){
        return;
      }
      this.input.disable();
    }
  }

  private autoFocusElement() {
    const subjectNativeEle = this.el.nativeElement.querySelector('[formControlName="subject"]');
    subjectNativeEle.focus();
  }

  validate(ctrl:AbstractControl) {
    return this.input.get('subject')?.errors;
  }

  checkErrorsAfterEditing() {
    return this.input.get('subject')?.errors ? true : false;
  }
}
