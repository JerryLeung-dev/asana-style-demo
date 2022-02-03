import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { InputFieldComponent } from './input-field/input-field.component';
import { SelectFieldComponent } from './select-field/select-field.component';
import {MatSelectModule} from '@angular/material/select';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { InputFieldTwoComponent } from './input-field-two/input-field-two.component';
import { AutoFocusDirectiveDirective } from './directives/auto-focus-directive.directive';
import { InputFieldThreeComponent } from './input-field-three/input-field-three.component';
import { InputFieldFourComponent } from './input-field-four/input-field-four.component';
import { SelectFieldTwoComponent } from './select-field-two/select-field-two.component';
import {MatChipsModule} from '@angular/material/chips';

@NgModule({
  declarations: [
    AppComponent,

    InputFieldComponent,
    SelectFieldComponent,
    InputFieldTwoComponent,
    AutoFocusDirectiveDirective,
    InputFieldThreeComponent,
    InputFieldFourComponent,
    SelectFieldTwoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatChipsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
