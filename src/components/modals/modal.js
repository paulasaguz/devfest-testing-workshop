import React from 'react';
import Close from '../icons/close'

import './modal.css'

const Modal = ({ onClick, children }) => {
  return (
    <div className='modal-container' data-testid='modal'>
      {children}
      <button
        className='close-button'
        onClick={onClick}
      >
        <Close
          size={25}
          color='black'
        />
      </button>

    </div>
  )
}

export default Modal;