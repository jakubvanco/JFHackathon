import { FormlyFieldConfig } from '@ngx-formly/core';
import { z } from 'zod';

export const zodFieldTemplateOptions = z.object({
  label: z.string().optional(),
  description: z.string().optional(),
  placeholder: z.string().optional(),
  required: z.boolean().optional(),
  readonly: z.boolean().optional(),
  disabled: z.boolean().optional(),
  translate: z.boolean().optional(),
});

export const zodField = z.object({
  key: z.string().optional(),
  type: z.string().optional(),
  className: z.string().optional(),
  defaultValue: z.string().optional(),
  expressionProperties: z.object({}).optional(),
  validators: z.object({}).optional(),
  hideExpression: z.string().optional(),
  templateOptions: zodFieldTemplateOptions.optional(),
});

export const zodInputField = zodField.extend({
  type: z.literal('input'),
  templateOptions: zodFieldTemplateOptions
    .extend({
      minLength: z.number().optional(),
      maxLength: z.number().optional(),
      min: z.number().optional(),
      max: z.number().optional(),
      pattern: z.string().optional(),
      options: z
        .array(
          z.object({
            label: z.string().optional(),
            value: z.string().optional(),
          })
        )
        .optional(),
      translateOptions: z.boolean().optional(),
    })
    .optional(),
});

export const zodTextAreaField = zodInputField.extend({
  type: z.literal('textarea'),
});

export const zodCheckboxField = zodField.extend({
  type: z.literal('checkbox'),
  templateOptions: zodFieldTemplateOptions
    .extend({
      checkboxLabel: z.string().optional(),
      hideLabel: z.boolean().optional(),
    })
    .optional(),
});

export const zodSelectField = zodField.extend({
  type: z.literal('select'),
  templateOptions: zodFieldTemplateOptions
    .extend({
      min: z.number().optional(),
      max: z.number().optional(),
      options: z
        .array(
          z.object({
            label: z.string().optional(),
            value: z.string().optional(),
          })
        )
        .optional(),
      translateOptions: z.boolean().optional(),
    })
    .optional(),
});

export type InputField = z.infer<typeof zodInputField>;
export type TextAreaField = z.infer<typeof zodTextAreaField>;
export type CheckBoxField = z.infer<typeof zodCheckboxField>;
export type SelectField = z.infer<typeof zodSelectField>;

type CustomFormlyField =
  | InputField
  | TextAreaField
  | CheckBoxField
  | SelectField;

const s: CustomFormlyField = {
  type: 'checkbox',
  templateOptions: {
    checkboxLabel: 'sad',
  },
};

const xx: CustomFormlyField = {
  type: 'input',
  templateOptions: {
    checkboxLabel: 'ASd',
  },
};

export const INIT_InputField: InputField = {
  type: 'input',
  templateOptions: {
    label: 'input',
    translate: true,
  },
};
export const INIT_TextAreaField: TextAreaField = {
  type: 'textarea',
  templateOptions: {
    label: 'textarea',
    translate: true,
  },
};
export const INIT_CheckBoxField: CheckBoxField = {
  type: 'checkbox',
  templateOptions: {
    translate: true,
    checkboxLabel: 'checkbox',
    hideLabel: true,
  },
};
export const INIT_SelectField: SelectField = {
  type: 'select',
  templateOptions: {
    label: 'select',
    options: [],
    translate: true,
    translateOptions: true,
  },
};

export const INIT_FieldGroup: InputField = {
  templateOptions: {
    label: 'input',
    translate: true,
  },
  fieldGroup: [],
};
