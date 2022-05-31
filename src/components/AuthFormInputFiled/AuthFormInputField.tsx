import * as React from 'react';
import { ChangeEventHandler } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

export interface IAuthFormInputFieldProps {
  className: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  type: string;
  autofocus: boolean;
  label: string;
  formControlProps: UseFormRegisterReturn;
  errorMessage: string;
}

export default function AuthFormInputField({
  formControlProps,
  value,
  onChange,
  type,
  label,
  autofocus,
  errorMessage,
}: IAuthFormInputFieldProps) {
  return (
    <div className="mail">
      <input
        {...formControlProps}
        value={value}
        onChange={onChange}
        type={type}
        autoFocus={autofocus}
      />
      <label>{label}</label>
      <p>{errorMessage}</p>
    </div>
  );
}
