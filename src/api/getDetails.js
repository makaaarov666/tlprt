import axios from "axios";

const getDetails = value =>
  axios.get(`${process.env.REACT_APP_API}/urban_areas/slug%3A${value}/cities/`);

export default getDetails;
