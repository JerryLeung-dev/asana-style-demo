import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { GenericSelectComponent } from './generic-select/generic-select.component';
import { OptionsTemplateDirective } from './generic-select-templates/options-template/options-template.directive';
import { SelectedOptionTemplateDirective } from './generic-select-templates/selected-option-template/selected-option-template.directive';
import { PrioritySelectComponent } from './priority-select/priority-select.component';
import { StatusSelectComponent } from './status-select/status-select.component';
import { CustomInputComponent } from './custom-input/custom-input.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { BasicSelectComponent } from './basic-select/basic-select.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomInputComponent,
    DatePickerComponent,
    GenericSelectComponent,
    OptionsTemplateDirective,
    SelectedOptionTemplateDirective,
    PrioritySelectComponent,
    StatusSelectComponent,
    BasicSelectComponent,
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
    MatChipsModule,
    MatIconModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
