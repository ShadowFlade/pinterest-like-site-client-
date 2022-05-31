import * as React from 'react';
import { useState, useRef } from 'react';
import { Modal } from 'react-bootstrap';
import { RegisterLoginModal } from './register-login-modal';
import { useForm } from 'react-hook-form';

import './RegisterLoginModal.scss';
import { instance } from '../../App';

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
              <div className="mail">
                <input
                  {...register('mail', { required: defaultErrorMessage })}
                  value={mailVal}
                  onChange={(e) => setMailVal(e.target.value)}
                  type="mail"
                  autoFocus={left}
                />
                <label>Mail</label>
                <p>{errors.mail?.message}</p>
              </div>
              <div className="passwd">
                <input
                  value={passVal}
                  type="password"
                  {...register('password', { required: defaultErrorMessage })}
                  onChange={(e) => setPassVal(e.target.value)}
                />
                <label>Password</label>
                <p>{errors.password?.message}</p>
              </div>
              <div className="submit">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <form id="register" tabIndex={502} onSubmit={handleSubmit(onSubmit)}>
              <h3>Register</h3>
              <div className="name">
                <input type="text" {...register('full-name', { required: defaultErrorMessage })} />
                <label>Full Name</label>
              </div>
              <div className="mail">
                <input
                  type="mail"
                  {...register('mail', { required: defaultErrorMessage })}
                  value={mailVal}
                  onChange={(e) => setMailVal(e.target.value)}
                  autoFocus={!left}
                />
                <label>Mail</label>
              </div>
              <div className="uid">
                <input type="text" {...register('username', { required: defaultErrorMessage })} />
                <label>User Name</label>
              </div>
              <div className="passwd">
                <input
                  type="password"
                  {...register('password', { required: defaultErrorMessage })}
                  value={passVal}
                  onChange={(e) => setPassVal(e.target.value)}
                />
                <label>Password</label>
              </div>
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
