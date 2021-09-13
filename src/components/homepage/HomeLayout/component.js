import React from "react";
import { bool, string } from "prop-types";

import HomeDetail from "../HomeDetails";

import styles from "./styles.module.scss";

const HomeLayout = ({ image }) => (
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
        <HomeDetail />
      </div>
    </div>
  </>
);
HomeLayout.propTypes = {
  image: string,
  nameCity: string,
  loadingCity: bool,
};

export default HomeLayout;
