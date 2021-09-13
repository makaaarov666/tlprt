import React, { useEffect } from "react";
import { func, string } from "prop-types";
import { connect } from "react-redux";

import { fetchCityInfo, fetchImage } from "actions";
import selectors from "reducers/selectors";

import Layout from "components/common/Layout";
import CityLayout from "components/citypage/CityLayout";

const CityInfo = ({ geonameId, fetchCityInfo, image, nameCity }) => {
  const geonamesNumber = geonameId.split(":")[1];

  useEffect(() => {
    if (!geonamesNumber) {
      return null;
    }
    fetchCityInfo(geonamesNumber);
  }, [geonameId]);

  return (
    <Layout>
      <CityLayout nameCity={nameCity} image={image} />
    </Layout>
  );
};

CityInfo.propTypes = {
  nameCity: string,
  geonameId: string,
  fetchCityInfo: func,
  image: string,
};

const mapStateToProps = state => ({
  nameCity: selectors.getNameCity(state),
  geonameId: selectors.getGeonameId(state),
  image: selectors.getImage(state),
});

const mapDispatchToProps = dispatch => ({
  fetchImage: slug => dispatch(fetchImage(slug)),
  fetchCityInfo: geonamesId => dispatch(fetchCityInfo(geonamesId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CityInfo);
