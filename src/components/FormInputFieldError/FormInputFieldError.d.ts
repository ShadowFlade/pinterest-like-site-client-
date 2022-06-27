/// <reference types="react" />
import './FormInputFieldError.scss';
export interface IFormInputFieldErrorProps {
    message: string | undefined;
}
export default function FormInputFieldError({ message }: IFormInputFieldErrorProps): JSX.Element;
