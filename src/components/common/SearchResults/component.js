import React from "react";
import { Link } from "react-router-dom";
import { array, string, func, bool } from "prop-types";
import cn from "classnames";

import styles from "./styles.module.scss";
import { connect } from "react-redux";
import {
  fetchCityInfo,
  fetchDetails,
  fetchImage,
  fetchSalaries,
  fetchTaxation,
} from "actions";

const searchSize = 5;

const getSearchContent = ({
  receivedCity,
  fetchDetails,
  setIsOpen,
  fetchImage,
  fetchSalaries,
  fetchTaxation,
}) => {
  const getSlug = href => href.split("/")[5].split(":")[1]; // TODO: в хелпер
  const fiveCitites = receivedCity.slice(0, searchSize);
  const buttons = fiveCitites.map(({ name, href }) => (
    <Link
      to="/details"
      className={styles.button}
      onClick={() => {
        const slug = getSlug(href);
        fetchDetails(slug);
        fetchImage(slug);
        fetchSalaries(slug);
        fetchTaxation(slug);
        setIsOpen(false);
      }}
      key={href}
    >
      {name}
    </Link>
  ));

  return buttons;
};

const SearchResults = ({
  city,
  type,
  fetchDetails,
  fetchImage,
  fetchSalaries,
  fetchTaxation,
  isOpen,
  setIsOpen,
}) => {
  const receivedCity = city.filter(city => {
    if (city.name.toLowerCase().startsWith(`${type.toLowerCase()}`)) {
      // TODO: в хелпер

      return city;
    }
  });
  const openStyle = isOpen ? styles.open : null;
  const searchResult = getSearchContent({
    // TODO: подумать и вынести фетчи
    fetchDetails,
    receivedCity,
    fetchImage,
    fetchSalaries,
    setIsOpen,
    fetchTaxation,
  });

  return (
    <>
      <div
        onClick={() => setIsOpen(false)}
        className={cn(styles.searchBarBackground, openStyle)}
      ></div>
      <div className={cn(styles.searchBar, openStyle)}>{searchResult}</div>
    </>
  );
};

SearchResults.propTypes = {
  city: array,
  type: string,
  fetchDetails: func,
  isOpen: bool,
  setIsOpen: func,
  fetchImage: func,
  fetchSalaries: func,
  fetchTaxation: func,
};

const mapStateToProps = state => ({ state });

const mapDispatchToProps = dispatch => ({
  fetchDetails: slug => dispatch(fetchDetails(slug)),
  fetchImage: slug => dispatch(fetchImage(slug)),
  fetchCityInfo: geonamesId => dispatch(fetchCityInfo(geonamesId)),
  fetchSalaries: slug => dispatch(fetchSalaries(slug)),
  fetchTaxation: slug => dispatch(fetchTaxation(slug)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
