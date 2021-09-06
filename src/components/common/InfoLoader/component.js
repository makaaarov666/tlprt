import { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { fetchGeonames, fetchCity } from "actions";
import selectors from "reducers/selectors";

const InfoLoader = ({ geonames, fetchGeonames, fetchCity, children }) => {
  useEffect(() => fetchGeonames(), []);

  useEffect(() => {
    if (!geonames || !geonames.length) {
      return null;
    }

    geonames.flat().forEach(item => {
      const newItem = item.slice(-2);
      fetchCity(newItem);
    });
  }, [geonames]);

  return children;
};

InfoLoader.propTypes = {
  fetchGeonames: PropTypes.func,
  children: PropTypes.node.isRequired,
  geonames: PropTypes.array,
  loading: PropTypes.bool,
  fetchCity: PropTypes.func,
};

const mapStateToProps = state => ({ geonames: selectors.getGeonames(state) });

const mapDispatchToProps = dispatch => ({
  fetchGeonames: data => dispatch(fetchGeonames(data)),
  fetchCity: data => dispatch(fetchCity(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(InfoLoader);
