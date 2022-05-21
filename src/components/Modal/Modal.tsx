import * as React from 'react';
import { forwardRef, MutableRefObject, useRef } from 'react';
import { Modal } from 'react-bootstrap';
import './Modal.scss';
export interface IMyModal {
  isUploadPinOpen: boolean;
  title: string;
  children: React.ReactElement;
  // ref:MutableRefObject<null | HTMLDivElement>;
  closeModal: () => void;
  onEntered: (ref: MutableRefObject<null | HTMLDivElement>) => void;
}
const MyModal = forwardRef(
  (
    { isUploadPinOpen, title, closeModal, onEntered, children }: IMyModal,
    ref: MutableRefObject<HTMLDivElement | null>
  ) => {
    const newOnEntered = () => onEntered(ref);
    const newRef = useRef(document.querySelector('body'));
    return (
      <Modal
        container={newRef}
        centered
        size="lg"
        show={isUploadPinOpen}
        onHide={closeModal}
        onEntered={newOnEntered}
      >
        <Modal.Header closeButton>
          <Modal.Title className="text-center">{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{children}</Modal.Body>
      </Modal>
    );
  }
);
export default MyModal;
