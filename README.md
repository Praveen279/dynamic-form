Fields should be covered:

Text
Password
Email
Select
Date
radio
checkbox/toggle
Textarea

Any application that wants to use of dynamic form component should construct this array of inputs/fields to generate the form. Options such as enumerations/list of values for select fields or radio buttons etc should be taken care by the host application i.e making service calls etc. (Quite similar to AG-grid component)

[{
  type: ‘text/email/password/date/checkbox’,
  field: ‘input’,
  id: ’Name’
  label: ‘label’
  onChange: func,
  value: ‘xyz’,
  placeholder: ‘placeholder text’
}, {
  type: ‘select/multi-select’,
  field: ‘select’,
  label: ‘label’,
  Id: ’Gender’
  onChange: func,
  defaultValue: ‘xyz’,
  value: ‘abc’,
  options: options-array
}, {
  type: ‘textarea’,
  field: ‘textarea’,
  Id: ‘Comments’
  onChange: func,
  value: ‘xyz’,
  placeholder: ‘placeholder text’
}]

Radio button structure is similar to select as it needs options

Caveats:

Confirm password case should be handled.
Requires modifications in existing controlled common components (ISG). For example, user should have control on attributes such as read-only, disabled, min, max lengths etc.
Validation and additional classes for showing errors. Existing components should be able to take error messages as props in case of failed validations.
Id should be added as a prop in the ISG components which helps in identifying the particular input value while submitting the form. Typically, id can be the attribute/key in the request object we send to service.

