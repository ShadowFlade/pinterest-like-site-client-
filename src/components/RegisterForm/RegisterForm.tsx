import * as React from 'react';
import { useContext, useState } from 'react';
import * as yup from 'yup';
import AuthFormInputField from '../AuthFormInputFiled/AuthFormInputField';
import { Form, Formik } from 'formik';
import FormInputFieldError from '../FormInputFieldError/FormInputFieldError';
import axios from 'axios';
import { axiosConfig } from '@/index';
import { MyContext } from '@/Context/Context';
export interface IRegisterFormProps {
	left: boolean;
	closeRegisterModal: () => void;
}
const registerSchema = yup
	.object()
	.shape({
		name: yup.string().max(20, 'Too long!').required(),
		email: yup.string().email('Invalid email').required(),
		password: yup.string().min(6, 'Too short!').required(),
		username: yup.string(),
	})
	.required();

export default function RegisterForm({ left, closeRegisterModal }: IRegisterFormProps) {
	const context = useContext(MyContext);
	const [error, setError] = useState('');
	const registerUser = async (e: React.FormEvent) => {
		e.preventDefault();
		const userData = new FormData(e.target as HTMLFormElement);
		await axios.post('/auth/register', userData, axiosConfig).then((res) => {
			if (res.data.success) {
				closeRegisterModal();
			} else {
				setError(res.data.error);
			}
		});
	};
	return (
		<Formik
			initialValues={{
				password: '',
				email: '',
			}}
			validationSchema={registerSchema}
			onSubmit={(values) => {}}
		>
			{({ isSubmitting }) => (
				<Form id="register" onSubmit={registerUser} tabIndex={502}>
					<h3>Register</h3>

					<AuthFormInputField
						name="email"
						label="Mail"
						className="mail"
						type="mail"
						autofocus={left}
					></AuthFormInputField>

					<AuthFormInputField
						name="password"
						label="password"
						className="passwd"
						type="password"
						autofocus={false}
					></AuthFormInputField>
					<div className="submit">
						<input type="hidden" name="_csrf" value={context.csrf} />

						<button className="btn btn-primary" disabled={isSubmitting}>
							Register
						</button>
					</div>
					<FormInputFieldError message={error} />
				</Form>
			)}
		</Formik>
	);
}
