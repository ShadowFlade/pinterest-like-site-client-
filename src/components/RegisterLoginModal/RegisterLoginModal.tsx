import * as React from 'react';
import { useState, useRef } from 'react';
import { Modal } from 'react-bootstrap';
import { RegisterLoginModal } from './register-login-modal';
import './RegisterLoginModal.scss';

const RegisterLoginModal = ({ isRegisterModalOpen, closeRegisterModal }: RegisterLoginModal) => {
  const [isBodyWhite, setIsBodyWhite] = useState(true);
  const [isLoginActive, setIsLoginActive] = useState(true);
  const [isRegisterActive, setIsRegisterActive] = useState(false);
  const [isSliderBgActive, setIsSliderBgActive] = useState(true);
  const wrapper = useRef<HTMLDivElement | null>(null);
  const body = useRef<HTMLDivElement | null>(null);
  const slide = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsLoginActive(!isLoginActive);
    setIsRegisterActive(!isRegisterActive);
    setIsBodyWhite(!isBodyWhite);
    setIsSliderBgActive(!isSliderBgActive);
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
        style={{ backgroundColor: `${isBodyWhite ? 'white' : '#bbb'} ` }}
      >
        <div
          className="veen"
          style={{ backgroundColor: `${isSliderBgActive ? '#13cc13' : '#077707'}` }}
        >
          <div className="login-btn splits">
            <p>Already an user?</p>
            <button onClick={slide} className={`button-option ${isLoginActive ? 'active' : null}`}>
              Login
            </button>
          </div>
          <div className="rgstr-btn splits">
            <p>Don't have an account?</p>
            <button
              onClick={slide}
              className={`button-option ${isRegisterActive ? 'active' : null}`}
            >
              Register
            </button>
          </div>
          <div className={`wrapper ${isRegisterActive ? 'move' : null}`} ref={wrapper}>
            <form id="login" tabIndex={500}>
              <h3>Login</h3>
              <div className="mail">
                <input type="mail" name="" />
                <label>Mail or Username</label>
              </div>
              <div className="passwd">
                <input type="password" name="" />
                <label>Password</label>
              </div>
              <div className="submit">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <form id="register" tabIndex={502}>
              <h3>Register</h3>
              <div className="name">
                <input type="text" name="" />
                <label>Full Name</label>
              </div>
              <div className="mail">
                <input type="mail" name="" />
                <label>Mail</label>
              </div>
              <div className="uid">
                <input type="text" name="" />
                <label>User Name</label>
              </div>
              <div className="passwd">
                <input type="password" name="" />
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
