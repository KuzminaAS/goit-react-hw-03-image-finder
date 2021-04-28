import React from 'react';
import {createPortal} from 'react-dom'
import styles from './Modal.module.css'

const modalRooot = document.querySelector('#modal-root')

const Modal = ({children, closeModal}) => {
    return (
      createPortal(<div onClick={closeModal}  className={styles.Overlay}>
     <div className={styles.Modal}>
          {children}
        </div>
      </div>,modalRooot)
  )
};

export default Modal;
  