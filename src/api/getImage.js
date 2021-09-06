import axios from "axios";

const getImage = value =>
  axios.get(`${process.env.REACT_APP_API}/urban_areas/slug%3A${value}/images/`);

export default getImage;
