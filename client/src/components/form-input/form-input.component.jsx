import React from 'react';

import { GroupContainer, FormInputContainer, FormInputLabel } from './form-input.styles';

const FormInput = ({ handleChange, label, value, ...props }) => (
  <GroupContainer>
    <FormInputContainer onChange={handleChange} {...props} />
    {label ? (
      <FormInputLabel className={value.length ? 'shrink' : ''}>{label}</FormInputLabel>
    ) : null}
  </GroupContainer>
);

export default FormInput;
