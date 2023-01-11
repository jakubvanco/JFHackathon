import { CheckboxComponent } from './checkbox/checkbox.component';
import { InputFieldComponent } from './input/input.field';
import { RepeatFieldComponent } from './repeat/repeat.component';
import { SelectComponent } from './select/select.component';
import { TextAreaComponent } from './textarea/textarea.component';

export const FORMLY_TYPES = [
  { name: 'input', component: InputFieldComponent, wrappers: ['form-field'] },
  { name: 'textarea', component: TextAreaComponent, wrappers: ['form-field'] },

  {
    name: 'checkbox',
    component: CheckboxComponent,
    wrappers: ['form-field'],
    className: 'p-col-align-center', // TOODO: mkl check
  },

  {
    name: 'select',
    component: SelectComponent,
    wrappers: ['form-field'],
  },
  { name: 'repeat', component: RepeatFieldComponent },
];

export const FORMLY_INPUTS = [
  InputFieldComponent,
  TextAreaComponent,
  CheckboxComponent,
  SelectComponent,
  RepeatFieldComponent,
];

export {
  InputFieldComponent,
  TextAreaComponent,

  // ColorPickerComponent,
  CheckboxComponent,
  SelectComponent,
  RepeatFieldComponent,
};
