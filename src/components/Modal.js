// src/components/Modal.js

import React from 'react';
import './Modal.css';

const Modal = ({ show, children, onClose }) => {
  if (!show) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-content">{children}</div>
      </div>
      <div className="modal-backdrop" onClick={onClose}></div>
    </div>
  );
};

export default Modal;
