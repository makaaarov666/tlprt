import React, { useEffect } from "react";
import { func, string } from "prop-types";
import { connect } from "react-redux";

import { fetchCityInfo, fetchImage } from "actions";
import selectors from "reducers/selectors";

import Layout from "components/common/Layout";
import CityLayout from "components/citypage/CityLayout";

import getSlugHelper from "helpers/getSlugHelper";

import setCookie from "helpers/cookies/setCookie";

const CityInfo = ({ geonameId, fetchCityInfo, image, nameCity, slugCity }) => {
  const [, geonamesNumber] = geonameId.split(":");

  useEffect(() => {
    const slugNumber = getSlugHelper(slugCity);
    setCookie("Slug", slugNumber);
  }, [slugCity]);

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
  slugCity: string,
};

const mapStateToProps = state => ({
  slugCity: selectors.getSlugCity(state),
  nameCity: selectors.getNameCity(state),
  geonameId: selectors.getGeonameId(state),
  image: selectors.getImage(state),
});

const mapDispatchToProps = dispatch => ({
  fetchImage: slug => dispatch(fetchImage(slug)),
  fetchCityInfo: geonamesId => dispatch(fetchCityInfo(geonamesId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CityInfo);
