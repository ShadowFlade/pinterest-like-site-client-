import * as React from 'react';
import { useEffect, useRef, useState } from 'react';
import { Modal } from 'react-bootstrap';
import './ModalTransparentSmall.scss';
export interface IModalTransparentSmallProps {
	isVisible: boolean;
	hide: () => void;
	children: JSX.Element;
	clickElement: HTMLElement;
}

export default function ModalTransparentSmall({
	isVisible,
	hide,
	children,
	clickElement,
}: IModalTransparentSmallProps) {
	const [isStyleApplied, setIsStyleApplied] = useState(true);
	const modal = useRef<HTMLDivElement | null>(null);
	const modalWidth = modal.current?.offsetWidth as number;
	const modalHeight = modal.current?.offsetHeight as number;
	useEffect(() => {
		setIsStyleApplied(!isStyleApplied);
	}, [isVisible]);
	const offsetLeft = clickElement.offsetLeft - (modalWidth / 2 - clickElement.offsetWidth - 2);
	const offsetTop = clickElement.offsetTop - (modalHeight / 2 - clickElement.offsetHeight - 2);
	const style = {
		left: `${offsetLeft}px`,
		top: `${offsetTop}px`,
	};
	return (
		<Modal
			size="sm"
			aria-labelledby="contained-modal-title-vcenter"
			show={isVisible}
			onHide={hide}
			backdropClassName="modal-ts"
			dialogClassName="modal-ts__dialog"
			style={style}
		>
			<Modal.Dialog bsPrefix="modal-ts__inside" ref={modal}>
				<Modal.Body bsPrefix="modal-ts__body">{children}</Modal.Body>
			</Modal.Dialog>
		</Modal>
	);
}
