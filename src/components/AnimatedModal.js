// src/components/AnimatedModal.js

import React from 'react';
import { CSSTransition } from 'react-transition-group';
import './Modal.css';

const AnimatedModal = ({ show, children, onClose }) => {
  return (
    <CSSTransition
      in={show}
      timeout={300}
      classNames="modal"
      unmountOnExit
    >
      <div className="modal-overlay">
        <div className="modal">
          <div className="modal-content">{children}</div>
        </div>
        <div className="modal-backdrop" onClick={onClose}></div>
      </div>
    </CSSTransition>
  );
};

export default AnimatedModal;
