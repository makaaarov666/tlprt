import { number, string } from "prop-types";
import React from "react";
import { connect } from "react-redux";
import selectors from "reducers/selectors";

import styles from "./styles.module.scss";

const About = ({ nameCity, population }) => {
  if (!nameCity) {
    return null;
  }

  const [adminDivision, cityName, country] = nameCity.split(",");

  return (
    <>
      <ul className={styles.aboutList}>
        <li>City Name:</li>
        <li>Country:</li>
        <li>Region: </li>
        <li>Population: </li>
      </ul>
      <ul className={styles.aboutList}>
        <li>{cityName}</li>
        <li>{country}</li>
        <li>{adminDivision}</li>
        <li>{population}</li>
      </ul>
    </>
  );
};

About.propTypes = {
  nameCity: string,
  population: number,
};

const mapStateToProps = state => ({
  population: selectors.getPopulation(state),
  nameCity: selectors.getNameCity(state),
});

export default connect(mapStateToProps)(About);
