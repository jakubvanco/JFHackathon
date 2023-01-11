import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'ralba-checkbox',
  template: `
    <div class="checkbox-field">
      <!-- [class.ng-dirty]="showError" -->
      <p-checkbox
        [binary]="true"
        [formControl]="$any(formControl)"
        [formlyAttributes]="field"
        [label]="to.checkboxLabel"
        (onChange)="to.change && to.change(field, $event)"
        [inputId]="'a' + field.id"
        [attr.data-cy]="key"
      >
      </p-checkbox>
      <label
        [for]="'a' + field?.id"
        [innerHtml]="to.checkboxHtml"
        class="htmlLabel"
      >
      </label>
      <!-- [label]="to.label" -->
      <div></div>
    </div>
  `,
  styles: [
    `
      .checkbox-field {
        padding-top: 7px;
        padding-bottom: 6px;
      }
      .checkbox-field {
        padding-top: 7px;
        padding-bottom: 6px;
      }
      .htmlLabel {
        top: 3px;
        position: relative;
        padding-left: 0.5rem;
      }
    `,
  ],
})
export class CheckboxComponent extends FieldType {
  defaultOptions = {
    templateOptions: {
      hideLabel: true,
      checkboxLabel: '',
      checkboxHtml: '',
    },
  };
}
