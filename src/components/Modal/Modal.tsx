import * as React from 'react';
import { Modal } from 'react-bootstrap';
export interface IMyModal {
  isUploadPinOpen: boolean;
  title: string;
  closeModal: () => void;
  children: React.ReactElement;
}
export default function MyModal({ isUploadPinOpen, title, closeModal, children }: IMyModal) {
  return (
    <Modal centered size="lg" show={isUploadPinOpen} onHide={closeModal}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
    </Modal>
  );
}
