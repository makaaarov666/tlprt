import React, { useEffect } from "react";
import { connect } from "react-redux";
import { array, bool, func, string } from "prop-types";
import uniqueRandomArray from "unique-random-array";

import selectors from "reducers/selectors";

import getOneSlugHelper from "helpers/getOneSlugHelper";

import { fetchDetails, fetchImage, fetchCityInfo } from "actions";

import Layout from "components/common/Layout";
import HomeLayout from "components/homepage/HomeLayout";

const getRandomSlug = city => {
  const oneCity = uniqueRandomArray(city)();
  if (!oneCity) {
    return null;
  }
  const { href } = oneCity;
  const oneSlug = getOneSlugHelper(href);

  return oneSlug;
};

const HomeInfo = ({
  city,
  fetchDetails,
  fetchImage,
  image,
  loadingCity,
  geonameId,
  fetchCityInfo,
  nameCity,
}) => {
  const slug = getRandomSlug(city);
  const [, geonamesNumber] = geonameId.split(":");

  useEffect(() => {
    if (loadingCity) {
      return null;
    }
    fetchCityInfo(geonamesNumber);
  }, [geonameId]);

  useEffect(() => {
    if (loadingCity) {
      return null;
    }
    fetchDetails(slug);
    fetchImage(slug);
  }, [city]);

  return (
    <Layout>
      <HomeLayout image={image} nameCity={nameCity} />
    </Layout>
  );
};

HomeInfo.propTypes = {
  geonameId: string,
  fetchDetails: func,
  fetchImage: func,
  city: array,
  image: string,
  loadingCity: bool,
  fetchCityInfo: func,
  nameCity: string,
};

const mapStateToProps = state => ({
  city: selectors.getCity(state),
  image: selectors.getImage(state),
  loadingCity: selectors.loadingCity(state),
  geonameId: selectors.getGeonameId(state),
  nameCity: selectors.getNameCity(state),
});

const mapDispatchToProps = dispatch => ({
  fetchDetails: slug => dispatch(fetchDetails(slug)),
  fetchImage: slug => dispatch(fetchImage(slug)),
  fetchCityInfo: geonamesId => dispatch(fetchCityInfo(geonamesId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeInfo);
