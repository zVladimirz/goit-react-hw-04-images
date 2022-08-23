import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { ModalBackdrop, ModalContent } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export default function Modal () {
  
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);

    };

    }, []);





  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      this.props.onClose();
    }
  };

    return( createPortal(
      <ModalBackdrop onClick={handleBackdropClick}>
        <ModalContent>{children}</ModalContent>
      </ModalBackdrop>,
      modalRoot
    ));
}
