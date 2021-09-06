import React from "react";
import { string } from "prop-types";

import styles from "./styles.module.scss";

const HomeLayout = ({ image, nameCity }) => (
  <>
    <div className={styles.background}>
      <img className={styles.img} src={image}></img>
      <div className={styles.tint} />
    </div>
    <div className={styles.text}>
      <h1 className={styles.title}>
        <span>Move to your best place to live and work.</span>
      </h1>
      <p className={styles.discription}>
        <span>
          Compare cities on quality of life, cost of living, salaries and
          <br />
          more. Explore where to move based on your personal preferences.
        </span>
      </p>
      <div className={styles.details}>
        <h1>
          <span className={styles.detailsName}>{nameCity}</span>
        </h1>
      </div>
    </div>
  </>
);

HomeLayout.propTypes = {
  image: string,
  nameCity: string,
};

export default HomeLayout;
