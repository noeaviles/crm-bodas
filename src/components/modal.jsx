import React from 'react';

const Modal = ({clase, children, showModal}) => {
  return (
    <div className='modal'>
      <div className={ `modal-wrapper ${clase}` }>
        <div className='modal-wrapper-button' onClick={ () => showModal(false) }>
          <i className="fa-solid fa-xmark"></i>
        </div>
        { children }
      </div>
    </div>
  );
}

export default Modal;
