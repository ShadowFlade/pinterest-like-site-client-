import * as React from 'react';
import { useEffect, useRef, useState } from 'react';
import { Modal } from 'react-bootstrap';
import { calculateThePositionOfPopupElement } from '@/utils/utils';
import './ModalTransparentSmall.scss';
export interface IModalTransparentSmallProps {
	isVisible: boolean;
	hide: () => void;
	children: JSX.Element;
	clickElement: HTMLElement;
	transparent?: boolean;
}

export default function ModalTransparentSmall({
	isVisible,
	hide,
	children,
	clickElement,
	transparent,
}: IModalTransparentSmallProps) {
	const [isStyleApplied, setIsStyleApplied] = useState(true);

	const modal = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		setIsStyleApplied(!isStyleApplied);
	}, [isVisible]);
	const popupElement = modal.current;
	const style = calculateThePositionOfPopupElement(clickElement, popupElement);

	return (
		<Modal
			size="sm"
			aria-labelledby="contained-modal-title-vcenter"
			show={isVisible}
			onHide={hide}
			backdropClassName="modal-ts"
			dialogClassName="modal-ts__dialog"
			style={
				style
					? {
							left: style.offsetLeft,
							top: style.offsetTop,
							backgroundColor: transparent ? 'transparent' : '',
					  }
					: {}
			}
		>
			<Modal.Dialog bsPrefix="modal-ts__inside" ref={modal}>
				<Modal.Body bsPrefix="modal-ts__body">{children}</Modal.Body>
			</Modal.Dialog>
		</Modal>
	);
}
