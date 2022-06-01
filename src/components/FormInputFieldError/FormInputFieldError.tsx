import * as React from 'react';
import './FormInputFieldError.scss';
export interface IFormInputFieldErrorProps {
  message: string | undefined;
}

export default function FormInputFieldError({ message }: IFormInputFieldErrorProps) {
  return <div className="error">{message}</div>;
}
