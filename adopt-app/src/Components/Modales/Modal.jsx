import React from 'react';
import './Modal.css'
import ReactDOM  from 'react-dom';

export const  Modal = ({children, isOpen, closeModal}) => {
    if(!isOpen) {
        return null;
    }
    const handLeClick=(event) => {
        event.stopPropagation()
    }
    return ReactDOM.createPortal(
        <article className={`modal ${isOpen && `is-open`} modal-overlay`} onClick={closeModal}>
            <div className='modal-container' onClick={handLeClick}>
                <button className='modal-close' onClick={closeModal}></button>
                {children}
            </div>
        </article>,
        document.querySelector('.adopciones')
    );
}

export default Modal;


