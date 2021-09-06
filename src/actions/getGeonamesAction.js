import {
  FETCH_GEONAMES_REQUEST,
  FETCH_GEONAMES_SUCCESS,
  FETCH_GEONAMES_FAILURE,
} from "consts/reducer";

import getContinentId from "api/getContinetId";

const geonamesRequested = () => ({
  type: FETCH_GEONAMES_REQUEST,
});

const geonamesLoaded = newGeonames => ({
  type: FETCH_GEONAMES_SUCCESS,
  payload: newGeonames,
});

const geonamesError = error => ({
  type: FETCH_GEONAMES_FAILURE,
  payload: error,
});

const fetchGeonames = () => dispatch => {
  dispatch(geonamesRequested());
  getContinentId()
    .then(data =>
      dispatch(geonamesLoaded(data.data["_links"]["continent:items"])),
    )
    .catch(err => dispatch(geonamesError(err)));
};

export { fetchGeonames };
