import * as React from 'react';
import { ChangeEventHandler } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import { useField, FieldHookConfig } from 'formik';
import FormInputFieldError from '../FormInputFieldError/FormInputFieldError';

export interface IAuthFormInputFieldProps {
  className: string;
  type: string;
  autofocus: boolean;
  label: string;
  name: string;
}

export default function AuthFormInputField({
  type,
  label,
  autofocus,
  name,
  className,
}: IAuthFormInputFieldProps) {
  const [field, meta, helpers] = useField({ name, type, autoFocus: autofocus });
  const { value } = field;
  const { setValue } = helpers;
  const changeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target?.value);
  };
  return (
    <div className={className}>
      <input
        {...field}
        name={name}
        value={value}
        onChange={changeValue}
        type={type}
        autoFocus={autofocus}
      />
      <label>{label}</label>
      {meta.touched && meta.error ? <FormInputFieldError message={meta.error} /> : null}
    </div>
  );
}
