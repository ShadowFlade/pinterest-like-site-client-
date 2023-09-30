import * as React from 'react';
import { ChangeEventHandler, Dispatch, SetStateAction } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import { useField, FieldHookConfig } from 'formik';
import FormInputFieldError from '../FormInputFieldError/FormInputFieldError';

export interface IAuthFormInputFieldProps {
	className: string;
	type: string;
	autofocus: boolean;
	label: string;
	name: string;
	handleServerErrors?: Dispatch<SetStateAction<string>>;
	handlers?: { onClick?: [Function]; onBlur?: [Function] }; //TODO there must be a better way, I want to just specify that there is an array of objects with functions and then unload them onto input not knowing that kind of listeners it is
}

export default function AuthFormInputField({
	type,
	label,
	autofocus,
	name,
	className,
	handleServerErrors,
	handlers,
}: IAuthFormInputFieldProps) {
	const [field, meta, helpers] = useField({ name, type, autoFocus: autofocus });
	const { value } = field;
	const { setValue } = helpers;
	const changeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValue(e.target?.value);
		handleServerErrors && handleServerErrors('');
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
				onBlur={(e) => {
					handlers?.onClick?.forEach((func) => func(e));
					handlers?.onBlur?.forEach((func) => func(e));
				}}
			/>
			<label>{label}</label>
			{meta.touched && meta.error ? <FormInputFieldError message={meta.error} /> : null}
		</div>
	);
}
