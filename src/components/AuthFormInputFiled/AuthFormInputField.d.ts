import { Dispatch, SetStateAction } from 'react';
export interface IAuthFormInputFieldProps {
    className: string;
    type: string;
    autofocus: boolean;
    label: string;
    name: string;
    handleServerErrors?: Dispatch<SetStateAction<string>>;
}
export default function AuthFormInputField({ type, label, autofocus, name, className, handleServerErrors, }: IAuthFormInputFieldProps): JSX.Element;
