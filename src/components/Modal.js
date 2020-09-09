import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { inject, observer } from 'mobx-react';
const ModalDialogue = ({ store, id, isOpen,i }) => {
  const { closeModal, members } = store;
  
  return (
    <Modal show={isOpen} onHide={() => closeModal(i)}>
      <Modal.Header closeButton>
        <Modal.Title>Activity Log</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => closeModal(i)}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
export default inject('store')(observer(ModalDialogue));
