import * as React from 'react';
import { Modal } from 'react-bootstrap';
export interface IMyModal {
  isUploadPinOpen: boolean;
  closeModal: () => void;
  children: React.ReactElement;
}
export default function MyModal({ isUploadPinOpen, closeModal, children }: IMyModal) {
  return (
    <Modal centered size="lg" show={isUploadPinOpen} onHide={closeModal}>
      <Modal.Header closeButton>
        <Modal.Title>Something</Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
    </Modal>
  );
}
