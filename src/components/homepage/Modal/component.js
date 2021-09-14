import React from "react";
import { connect } from "react-redux";
import { bool, func, number, string } from "prop-types";
import { Link } from "react-router-dom";

import selectors from "reducers/selectors";

import styles from "./styles.module.scss";

//TODO: превратить этот компонент в обертку. Саму модалку вынести в src/modals

const Modal = ({ visible, onClose, nameCity, image, population }) => {
  if (!visible) {
    return null;
  }

  return (
    <div className={styles.modal} onClick={onClose}>
      <div
        className={styles.modalDialog}
        onClick={onClose => onClose.stopPropagation()}
      >
        <div className={styles.header}>
          <span onClick={onClose}>{nameCity}</span>
        </div>
        <div className={styles.body}>
          <div className={styles.text}>Population: {population}</div>
          <img className={styles.img} src={image}></img>
        </div>
        <div className={styles.footer}>
          <Link className={styles.details} to="/details">
            Details
          </Link>
          <div className={styles.close} onClick={onClose}>
            Close
          </div>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  visible: bool,
  onClose: func,
  nameCity: string,
  image: string,
  population: number,
};

const mapStateToProps = state => ({
  nameCity: selectors.getNameCity(state),
  image: selectors.getImage(state),
  population: selectors.getPopulation(state),
});

export default connect(mapStateToProps)(Modal);
