import React, { useState } from "react";
import { bool, string } from "prop-types";
import ClipLoader from "react-spinners/ClipLoader";
import { connect } from "react-redux";

import selectors from "reducers/selectors";

import Modal from "components/common/Modal";
import CityInfo from "modal/CityInfo";

import styles from "./styles.module.scss";

const HomeDetail = ({ nameCity, loadingCity }) => {
  const [isModal, setModal] = useState(false);

  const onClose = () => setModal(false);

  if (loadingCity) {
    return <ClipLoader size={150} />;
  }

  return (
    <>
      <div onClick={() => setModal(true)} className={styles.details}>
        <h1>
          <span className={styles.detailsName}>{nameCity}</span>
        </h1>
      </div>
      <Modal visible={isModal} onClose={onClose}>
        <CityInfo onClose={onClose} />
      </Modal>
    </>
  );
};

HomeDetail.propTypes = {
  image: string,
  nameCity: string,
  loadingCity: bool,
};

const mapStateToProps = state => ({
  nameCity: selectors.getNameCity(state),
  loadingCity: selectors.getLoadingCity(state),
});

export default connect(mapStateToProps)(HomeDetail);
