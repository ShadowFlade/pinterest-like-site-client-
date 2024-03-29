import { Formik, Form, Field, FormikProps } from 'formik';
import { useState, useRef, ChangeEvent } from 'react';
import * as yup from 'yup';
import * as React from 'react';
import AuthFormInputField from '../AuthFormInputFiled/AuthFormInputField';
import FormInputFieldError from '../FormInputFieldError/FormInputFieldError';
import { ILoginForm } from './login-form';
import axios from 'axios';
import { axiosConfig } from '@/index';
import { MyContext } from '@/Context/Context';

const loginSchema = yup.object().shape({
	email: yup.string().email('Invalid email').required(),
	password: yup.string().min(6, 'Too short!').required(),
	FullName: yup.string().min(5, 'Too short').email('Invalid email').required(),
});

const LoginForm = ({ left, closeRegisterModal }: ILoginForm) => {
	const [error, setError] = useState('');
	const { refetch, csrf } = React.useContext(MyContext);
	const timeBeforeServerErrorDisappears = 5000;
	const login = async (e: React.FormEvent) => {
		e.preventDefault();
		const userData = new FormData(e.target as HTMLFormElement);
		const sleep = new Promise((res) => setTimeout(res, timeBeforeServerErrorDisappears));
		await axios.post('/auth/login', userData, axiosConfig).then((res) => {
			if (res.data.error) {
				setError(res.data.error);
				sleep.then(() => setError(''));
			} else if (res.data.success) {
				closeRegisterModal();
				refetch ? refetch() : false;
			}
		});
	};

	function doSmth() {
		console.log('smth');
	}

	return (
		<Formik
			initialValues={{
				password: '',
				email: '',
			}}
			validateOnBlur={false}
			validationSchema={loginSchema}
			onSubmit={(values, props) => {
				console.dir(values);
			}}
		>
			{({ setErrors, handleBlur }) => {
				const onBlur = function (e: Event) {
					handleBlur(e);
				};
				return (
					<Form id="login" onSubmit={login}>
						<h3>Login</h3>
						<AuthFormInputField
							name="email"
							label="Mail"
							className="mail"
							type="mail"
							autofocus={left}
							handleServerErrors={setError}
							// handlers={{ onBlur }}
						></AuthFormInputField>

						<AuthFormInputField
							name="password"
							label="password"
							className="passwd"
							type="password"
							autofocus={false}
						></AuthFormInputField>
						<input type="hidden" name="_csrf" value={csrf} />
						<button type="submit" className="btn btn-primary">
							Login
						</button>
						<FormInputFieldError message={error} />
					</Form>
				);
			}}
		</Formik>
	);
};
export default LoginForm;
