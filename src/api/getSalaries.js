import axios from "axios";

const getSalaries = slug =>
  axios.get(
    `${process.env.REACT_APP_API}/urban_areas/slug%3A${slug}/salaries/`,
  );

export default getSalaries;
