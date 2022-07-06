import * as React from 'react';
import { forwardRef, MutableRefObject, useRef } from 'react';
import { Modal } from 'react-bootstrap';
import './Modal.scss';
export interface IMyModal {
	isUploadPinOpen: boolean;
	title: string;
	children: React.ReactElement;
	closeModal: () => void;
}
const MyModal = forwardRef(
	(
		{ isUploadPinOpen, title, closeModal, children }: IMyModal,
		ref: MutableRefObject<HTMLDivElement | null>
	) => {
		const newRef = useRef(document.querySelector('body'));
		return (
			<div onClick={(e) => e.stopPropagation()}>
				<Modal
					container={newRef}
					centered
					size="lg"
					show={isUploadPinOpen}
					onHide={closeModal}
				>
					<Modal.Header closeButton>
						<Modal.Title className="text-center">{title}</Modal.Title>
					</Modal.Header>
					<Modal.Body>{children}</Modal.Body>
				</Modal>
			</div>
		);
	}
);
export default MyModal;
