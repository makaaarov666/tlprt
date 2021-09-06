import {
  FETCH_IMAGE_REQUEST,
  FETCH_IMAGE_SUCCESS,
  FETCH_IMAGE_FAILURE,
} from "consts/reducer";

import getImage from "api/getImage";

const imageRequest = () => ({
  type: FETCH_IMAGE_REQUEST,
});

const imageLoaded = newImage => ({
  type: FETCH_IMAGE_SUCCESS,
  payload: newImage,
});

const imageError = error => ({
  type: FETCH_IMAGE_FAILURE,
  payload: error,
});

const fetchImage = slug => dispatch => {
  dispatch(imageRequest());
  getImage(slug)
    .then(image => dispatch(imageLoaded(image.data.photos[0].image.web)))
    .catch(err => dispatch(imageError(err)));
};

export { fetchImage };
