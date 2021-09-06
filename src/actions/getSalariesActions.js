import {
  FETCH_SALARIES_REQUEST,
  FETCH_SALARIES_SUCCESS,
  FETCH_SALARIES_FAILURE,
} from "consts/reducer";

import getSalaries from "api/getSalaries";

const salariesRequest = () => ({
  type: FETCH_SALARIES_REQUEST,
});

const salariesLoaded = newImage => ({
  type: FETCH_SALARIES_SUCCESS,
  payload: newImage,
});

const salariesError = error => ({
  type: FETCH_SALARIES_FAILURE,
  payload: error,
});

const fetchSalaries = slug => dispatch => {
  dispatch(salariesRequest());
  getSalaries(slug)
    .then(data =>
      dispatch(salariesLoaded(data.data.salaries[30].salary_percentiles)),
    )
    .catch(err => dispatch(salariesError(err)));
};

export { fetchSalaries };
