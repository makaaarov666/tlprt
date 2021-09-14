import React from "react";
import { bool, func, node } from "prop-types";

import styles from "./styles.module.scss";

const Modal = ({ children, visible, onClose }) => {
  if (!visible) {
    return null;
  }

  return (
    <div className={styles.modal} onClick={onClose}>
      <div
        className={styles.modalDialog}
        onClick={onClose => onClose.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

Modal.propTypes = {
  visible: bool,
  children: node.isRequired,
  onClose: func,
};

export default Modal;
