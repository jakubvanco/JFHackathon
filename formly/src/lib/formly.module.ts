import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlySelectModule } from '@ngx-formly/core/select';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { CardModule } from 'primeng/card';
import { CheckboxModule } from 'primeng/checkbox';
import { ChipModule } from 'primeng/chip';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { MultiSelectModule } from 'primeng/multiselect';
import { PanelModule } from 'primeng/panel';
import { RadioButtonModule } from 'primeng/radiobutton';
import { SelectButtonModule } from 'primeng/selectbutton';
import { TagModule } from 'primeng/tag';
import { TooltipModule } from 'primeng/tooltip';
import { FORMLY_INPUTS, FORMLY_TYPES } from './fields';
import { FORMLY_WRAPPER, FORMLY_WRAPPER_DECLARATION } from './wrappers';
@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputTextModule,
    InputTextareaModule,
    CalendarModule,
    CheckboxModule,
    ButtonModule,
    DropdownModule,
    TooltipModule,
    InputNumberModule,
    RadioButtonModule,
    FormlySelectModule,
    FormsModule,
    MultiSelectModule,
    TagModule,
    ChipModule,
    SelectButtonModule,
    AutoCompleteModule,
    CardModule,
    PanelModule,
    FormlyModule.forRoot({
      types: FORMLY_TYPES,
      wrappers: FORMLY_WRAPPER,
      // lazyRender: true
      extras: {
        // lazyRender: true,
      },
    }),
  ],
  exports: [FormlyModule],
  declarations: [...FORMLY_INPUTS, ...FORMLY_WRAPPER_DECLARATION],
})
export class CoreFormlyModule {}
