import * as React from 'react';
import { Modal, Button } from 'react-bootstrap';
import './LoginModal.scss';
export interface ILoginModalProps {
  closeModal: () => void;
}

export default function LoginModal({ closeModal }: ILoginModalProps) {
  return (
    <Modal size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Login</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* <h4>{collection.title}</h4> */}
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
          in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={closeModal}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
