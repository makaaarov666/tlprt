import React from "react";
import { connect } from "react-redux";
import selectors from "reducers/selectors";

import styles from "./styles.module.scss";

const breakdown = ({ nameCity }, number) => {
  if (!nameCity) {
    return null;
  }

  const result = nameCity.split(",")[number];

  return result;
};

const About = nameCity => {
  const adminDivision = breakdown(nameCity, 1);
  const cityName = breakdown(nameCity, 0);
  const country = breakdown(nameCity, 2);

  return (
    <>
      <ul className={styles.aboutList}>
        <li>City Name:</li>
        <li>Country of location:</li>
        <li>Admin division: </li>
        <li>Population: </li>
      </ul>
      <ul className={styles.aboutList}>
        <li>{cityName}</li>
        <li>{country}</li>
        <li>{adminDivision}</li>
        {/* <li>{population}</li> */}
      </ul>
    </>
  );
};

const mapStateToProps = state => ({
  nameCity: selectors.getNameCity(state),
  geonameId: selectors.getGeonameId(state),
  population: selectors.getPopulation(state),
});

export default connect(mapStateToProps)(About);
