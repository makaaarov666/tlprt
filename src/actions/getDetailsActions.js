import {
  FETCH_DETAILS_REQUEST,
  FETCH_DETAILS_SUCCESS,
  FETCH_DETAILS_FAILURE,
} from "consts/reducer";

import getDetails from "api/getDetails";

const detailsRequest = () => ({
  type: FETCH_DETAILS_REQUEST,
});

const detailsLoaded = newDetails => ({
  type: FETCH_DETAILS_SUCCESS,
  payload: newDetails,
});

const detailsError = error => ({
  type: FETCH_DETAILS_FAILURE,
  payload: error,
});

const fetchDetails = slug => dispatch => {
  dispatch(detailsRequest());
  getDetails(slug)
    .then(data =>
      dispatch(detailsLoaded(data.data["_links"]["city:items"][0].href)),
    )
    .catch(err => dispatch(detailsError(err)));
};

export { fetchDetails };
