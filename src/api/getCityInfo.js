import axios from "axios";

const getCityInfo = value =>
  axios.get(`${process.env.REACT_APP_API}/cities/geonameid%3A${value}/`);

export default getCityInfo;
