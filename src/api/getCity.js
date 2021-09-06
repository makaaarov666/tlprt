import axios from "axios";

const getCity = geonames =>
  axios.get(
    `${process.env.REACT_APP_API}/continents/geonames:${geonames}/urban_areas/`,
  );

export default getCity;
