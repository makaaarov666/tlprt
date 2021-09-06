import {
  FETCH_CITY_FAILURE,
  FETCH_CITY_REQUEST,
  FETCH_CITY_SUCCESS,
} from "consts/reducer";

import getCity from "api/getCity";

const cityRequested = () => ({
  type: FETCH_CITY_REQUEST,
});

const cityLoaded = newCity => ({
  type: FETCH_CITY_SUCCESS,
  payload: newCity,
});

const cityError = error => ({
  type: FETCH_CITY_FAILURE,
  payload: error,
});

const fetchCity = geonames => dispatch => {
  dispatch(cityRequested());
  getCity(geonames)
    .then(data => dispatch(cityLoaded(data.data["_links"]["ua:items"])))
    .catch(err => dispatch(cityError(err)));
};

export { fetchCity };
