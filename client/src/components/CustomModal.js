import React from 'react';
import {
  Modal,
  ModalBackground,
  ModalContent,
  ModalClose,
  Title
} from 'bloomer';

const CustomModal = ({ isActive, children, title, handleClose }) => {
  return (
    <Modal isActive={isActive}>
      <ModalBackground onClick={handleClose} />
      <ModalContent
        style={{ backgroundColor: 'white', padding: '2rem', maxWidth: '100vw' }}
      >
        <Title isSize={6}>{title}</Title>
        {children}
      </ModalContent>
      <ModalClose onClick={handleClose} />
    </Modal>
  );
};

export default CustomModal;
