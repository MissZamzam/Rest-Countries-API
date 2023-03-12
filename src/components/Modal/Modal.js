import './Modal.css'
import React from 'react';

function Modal() {
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Modal Title</h2>
        <p>Modal Content</p>
        <button className="modal-close">Close Modal</button>
      </div>
    </div>
  );
}

export default Modal;
