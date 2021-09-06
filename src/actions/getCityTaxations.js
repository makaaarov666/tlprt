import {
  FETCH_CITY_TAXATION_REQUEST,
  FETCH_CITY_TAXATION_SUCCESS,
  FETCH_CITY_TAXATION_FAILURE,
} from "consts/reducer";

import getTaxations from "api/getTaxations";

const taxationsRequest = () => ({
  type: FETCH_CITY_TAXATION_REQUEST,
});

const taxationsLoaded = newDetails => ({
  type: FETCH_CITY_TAXATION_SUCCESS,
  payload: newDetails,
});

const taxationsError = error => ({
  type: FETCH_CITY_TAXATION_FAILURE,
  payload: error,
});

const fetchTaxation = slug => dispatch => {
  dispatch(taxationsRequest());
  getTaxations(slug)
    .then(data => dispatch(taxationsLoaded(data.data.categories[18].data)))
    .catch(err => dispatch(taxationsError(err)));
};

export { fetchTaxation };
