import axios from "axios";

const getContinentId = () =>
  axios.get(`${process.env.REACT_APP_API}/continents/`);

export default getContinentId;
