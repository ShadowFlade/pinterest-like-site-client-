import { Formik, Form, Field, FormikProps } from 'formik';
import { useState, useRef, ChangeEvent } from 'react';

import * as yup from 'yup';
import * as React from 'react';
import AuthFormInputField from '../AuthFormInputFiled/AuthFormInputField';
import { instance } from '../../App';
import FormInputFieldError from '../FormInputFieldError/FormInputFieldError';
const loginSchema = yup.object().shape({
  email: yup.string().email('Invalid email').required(),
  password: yup.string().min(6, 'Too short!').required(),
  FullName: yup.string().min(5, 'Too short').email('Invalid email').required(),
});
interface ILoginForm {
  left: boolean;
  closeRegisterModal: () => void;
}
interface Values {
  password: string;
  FullName: string;
  email: string;
}
const LoginForm = ({ left, closeRegisterModal }: ILoginForm) => {
  const login = async (e: React.FormEvent) => {
    e.preventDefault();
    const userData = new FormData(e.target as HTMLFormElement);
    await instance.post('/login', userData, {
      headers: {
        'Access-Control-Allow-Origin': 'http://localhost:3002',
      },
    });
  };

  return (
    <Formik
      initialValues={{
        password: '',
        email: '',
      }}
      validationSchema={loginSchema}
      onSubmit={(values, props) => {
        console.log(values);
      }}
    >
      {() => (
        <Form id="login" onSubmit={login}>
          <h3>Login</h3>
          <AuthFormInputField
            name="email"
            label="Mail"
            className="mail"
            type="mail"
            autofocus={left}
          ></AuthFormInputField>

          {
            <AuthFormInputField
              name="password"
              label="password"
              className="passwd"
              type="password"
              autofocus={false}
            ></AuthFormInputField>
          }

          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </Form>
      )}
    </Formik>
  );
};
export default LoginForm;
