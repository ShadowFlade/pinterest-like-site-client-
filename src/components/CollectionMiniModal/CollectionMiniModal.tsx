import * as React from 'react';
import { forwardRef } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { ICollectionMiniProps } from '../CollectionMini/collection-mini';
import { Collection } from '../ProfilePage/profile-page';
import './CollectionMiniModal.scss';
export interface ICollectionMiniModalProps {
  closeModal: () => void;
  // activeCollection:Collection
}
const CollectionMiniModal = forwardRef(({ closeModal }: ICollectionMiniModalProps, ref) => {
  return (
    <Modal size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Modal heading</Modal.Title>
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
});
export default CollectionMiniModal;
