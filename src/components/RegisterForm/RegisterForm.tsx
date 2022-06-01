import { instance } from '../../App';
import * as React from 'react';
import { useState } from 'react';
import * as yup from 'yup';
import AuthFormInputField from '../AuthFormInputFiled/AuthFormInputField';
import { Form, Formik } from 'formik';
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
  const defaultErrorMessage = 'This field is required';
  const [mailVal, setMailVal] = useState('');
  const [passVal, setPassVal] = useState('');
  const [fullNameVal, setFullNameVal] = useState('');
  const [usernameVal, setUsernameVal] = useState('');
  const registerUser = async (e: React.FormEvent) => {
    e.preventDefault();
    const userData = new FormData(e.target as HTMLFormElement);
    await instance
      .post('/register', userData, {
        headers: {
          'Access-Control-Allow-Origin': 'http://localhost:3002',
        },
      })
      .then((res) => {
        closeRegisterModal();
      });
  };
  return (
    <Formik
      initialValues={{
        password: '',
        email: '',
      }}
      validationSchema={registerSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
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
            <button className="btn btn-primary" disabled={isSubmitting}>
              Register
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
}
