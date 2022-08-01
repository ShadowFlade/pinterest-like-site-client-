import * as React from 'react';
import { useRef, useState } from 'react';
import { Modal } from 'react-bootstrap';
import { RegisterLoginModal } from './register-login-modal';

import LoginForm from '../LoginForm/LoginForm';
import RegisterForm from '../RegisterForm/RegisterForm';
import './RegisterLoginModal.scss';

type ITriggerArgument =
	| 'email'
	| 'password'
	| 'username'
	| 'fullName'
	| ('email' | 'password' | 'username' | 'fullName')[]
	| readonly ('email' | 'password' | 'username' | 'fullName')[]
	| undefined;
const RegisterLoginModal = ({
	isRegisterModalOpen,
	closeRegisterModal,
	left,
	setIsLeft,
}: RegisterLoginModal) => {
	const wrapper = useRef<HTMLDivElement | null>(null);
	const body = useRef<HTMLDivElement | null>(null);
	const [isRegistrationBig, setIsRegisterBig] = useState(false);
	const slide = (e: React.MouseEvent) => {
		e.preventDefault();
		setIsLeft((prev) => !prev);
	};
	const closeRegModal = () => {
		closeRegisterModal();
		setIsRegisterBig(!isRegistrationBig);
	};

	return (
		<Modal
			centered
			size="xl"
			show={isRegisterModalOpen}
			onHide={closeRegModal}
			dialogClassName="modal-90w"
			className="register-login-modal"
		>
			<Modal.Header closeButton />
			<Modal.Body
				ref={body}
				className="register-login-body"
				style={{ backgroundColor: `${left ? 'white' : '#bbb'} ` }}
			>
				<div
					className="veen"
					style={{ backgroundColor: `${left ? '#13cc13' : '#077707'}` }}
				>
					<div className="login-btn splits">
						<p>Already a user?</p>
						<button
							onClick={slide}
							className={`button-option ${left ? 'active' : null}`}
						>
							Login
						</button>
					</div>
					<div className="rgstr-btn splits">
						<p>Don't have an account?</p>
						<button
							onClick={slide}
							className={`button-option ${left ? 'active' : null}`}
						>
							Register
						</button>
					</div>
					<div
						className={`wrapper ${left ? null : 'move'} ${
							isRegistrationBig ? 'wrapper--big' : ''
						}`}
						ref={wrapper}
					>
						<LoginForm closeRegisterModal={closeRegModal} left={left} />
						<RegisterForm
							setWrapperMoveInAbsolute={setIsRegisterBig}
							closeRegisterModal={closeRegModal}
							left={left}
						/>
					</div>
				</div>
			</Modal.Body>
		</Modal>
	);
};

export default RegisterLoginModal;
