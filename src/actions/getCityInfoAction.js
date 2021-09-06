import {
  FETCH_CITY_INFO_REQUEST,
  FETCH_CITY_INFO_SUCCESS,
  FETCH_CITY_INFO_FAILURE,
} from "consts/reducer";

import getCityInfo from "api/getCityInfo";

const cityInfoRequest = () => ({
  type: FETCH_CITY_INFO_REQUEST,
});

const cityInfoLoaded = newCityInfo => ({
  type: FETCH_CITY_INFO_SUCCESS,
  payload: newCityInfo,
});

const cityInfoError = error => ({
  type: FETCH_CITY_INFO_FAILURE,
  payload: error,
});

const fetchCityInfo = geonameId => dispatch => {
  dispatch(cityInfoRequest());
  getCityInfo(geonameId)
    .then(data => dispatch(cityInfoLoaded(data.data)))
    .catch(err => dispatch(cityInfoError(err)));
};

export { fetchCityInfo };
