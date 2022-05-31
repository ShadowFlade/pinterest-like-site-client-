import * as React from 'react';
import { useState, useRef } from 'react';
import { Modal } from 'react-bootstrap';
import { RegisterLoginModal } from './register-login-modal';
import { useForm } from 'react-hook-form';

import './RegisterLoginModal.scss';
import { instance } from '../../App';
import AuthFormInputField from '../AuthFormInputFiled/AuthFormInputField';

const RegisterLoginModal = ({
  isRegisterModalOpen,
  closeRegisterModal,
  left,
  setIsLeft,
}: RegisterLoginModal) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const defaultErrorMessage = 'This field is required';
  const [mailVal, setMailVal] = useState('');
  const [passVal, setPassVal] = useState('');
  const [fullNameVal, setFullNameVal] = useState('');
  const [usernameVal, setUsernameVal] = useState('');
  const wrapper = useRef<HTMLDivElement | null>(null);
  const body = useRef<HTMLDivElement | null>(null);
  const slide = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsLeft((prev) => !prev);
  };
  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const userData = new FormData(e.target as HTMLFormElement);
    await instance
      .post('/newUser', userData, {
        headers: {
          'Access-Control-Allow-Origin': 'http://localhost:3002',
        },
      })
      .then((res) => {
        closeRegisterModal();
      });
  };

  return (
    <Modal
      centered
      size="xl"
      show={isRegisterModalOpen}
      onHide={closeRegisterModal}
      dialogClassName="modal-90w"
      className="register-login-modal"
    >
      <Modal.Header closeButton />
      <Modal.Body
        ref={body}
        className="register-login-body"
        style={{ backgroundColor: `${left ? 'white' : '#bbb'} ` }}
      >
        <div className="veen" style={{ backgroundColor: `${left ? '#13cc13' : '#077707'}` }}>
          <div className="login-btn splits">
            <p>Already an user?</p>
            <button onClick={slide} className={`button-option ${left ? 'active' : null}`}>
              Login
            </button>
          </div>
          <div className="rgstr-btn splits">
            <p>Don't have an account?</p>
            <button onClick={slide} className={`button-option ${left ? 'active' : null}`}>
              Register
            </button>
          </div>
          <div className={`wrapper ${left ? null : 'move'}`} ref={wrapper}>
            <form id="login" tabIndex={500} onSubmit={handleSubmit(onSubmit)}>
              <h3>Login</h3>

              <AuthFormInputField
                label="Mail"
                className="mail"
                value={mailVal}
                formControlProps={register('mail', { required: defaultErrorMessage })}
                errorMessage={errors.mail?.message}
                type="mail"
                autofocus
                onChange={({ target }: { target: HTMLInputElement }) => setMailVal(target.value)}
              />

              <AuthFormInputField
                label="password"
                className="passwd"
                value={passVal}
                formControlProps={register('password', { required: defaultErrorMessage })}
                errorMessage={errors.password?.message}
                type="password"
                autofocus={false}
                onChange={(e) => setPassVal(e.target.value)}
              />

              <div className="submit">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <form id="register" tabIndex={502} onSubmit={handleSubmit(onSubmit)}>
              <h3>Register</h3>

              <AuthFormInputField
                label="Full name"
                className="name"
                value={fullNameVal}
                formControlProps={register('full-name', { required: defaultErrorMessage })}
                errorMessage={errors.password?.message}
                type="text"
                autofocus={false}
                onChange={(e) => setFullNameVal(e.target.value)}
              />

              <AuthFormInputField
                label="Mail"
                className="mail"
                value={mailVal}
                formControlProps={register('mail', { required: defaultErrorMessage })}
                errorMessage={errors.mail?.message}
                type="mail"
                autofocus
                onChange={({ target }: { target: HTMLInputElement }) => setMailVal(target.value)}
              />

              <AuthFormInputField
                label="Username"
                className="uid"
                value={usernameVal}
                formControlProps={register('username', { required: defaultErrorMessage })}
                errorMessage={errors.username?.message}
                type="text"
                autofocus={false}
                onChange={({ target }: { target: HTMLInputElement }) =>
                  setUsernameVal(target.value)
                }
              />
              <AuthFormInputField
                label="password"
                className="passwd"
                value={passVal}
                formControlProps={register('password', { required: defaultErrorMessage })}
                errorMessage={errors.password?.message}
                type="password"
                autofocus={false}
                onChange={(e) => setPassVal(e.target.value)}
              />
              <div className="submit">
                <button className="btn btn-primary ">Register</button>
              </div>
            </form>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default RegisterLoginModal;
