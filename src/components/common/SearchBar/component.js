import PropTypes from "prop-types";
import React, { useState } from "react";
import { connect } from "react-redux";

import SearchResults from "components/common/SearchResults";

import selectors from "reducers/selectors";

import styles from "./styles.module.scss";

const SearchBar = ({ city }) => {
  const [type, setType] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <input
        placeholder="Search for a city"
        className={styles.searchPanel}
        onChange={({ target: { value: searchString } }) => {
          setType(searchString);
        }}
        onFocus={() => setIsOpen(true)}
      />
      <SearchResults
        city={city}
        type={type}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
    </>
  );
};

const mapStateToProps = state => ({ city: selectors.getCity(state) });

SearchBar.propTypes = {
  fetchCity: PropTypes.func,
  loading: PropTypes.bool,
  city: PropTypes.array,
};

export default connect(mapStateToProps)(SearchBar);
