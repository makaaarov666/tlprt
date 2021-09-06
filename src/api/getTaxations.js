import axios from "axios";

const getTaxations = value =>
  axios.get(
    `${process.env.REACT_APP_API}/urban_areas/slug%3A${value}/details/`,
  );

export default getTaxations;
