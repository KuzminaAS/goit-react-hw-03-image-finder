import {Component} from 'react';
import { createPortal } from 'react-dom'

import styles from './Modal.module.css'

const modalRoot = document.querySelector('#modal-root')

class Modal extends Component {

    componentDidMount() {
      window.addEventListener('keydown',this.handleKeyDown)
    }

   componentWillUnmount() {
        window.removeEventListener('keydown',this.handleKeyDown)
    }

     handleKeyDown = (e) => {
        if (e.code === 'Escape') {
            this.props.closeModal();
        }
    } 

  render() {
    const { children, closeModal } = this.props;
    return (
      
      createPortal(<div onClick={closeModal}  className={styles.Overlay}>
        <div className={styles.Modal}>
         {children}
        </div>
      </div>,modalRoot)
  )
  }
};

export default Modal;
  