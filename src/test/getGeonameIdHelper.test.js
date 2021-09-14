import getGeonameIdHelper from "../helpers/getGeonameIdHelper";

const funcFirstParam = {
  type: "FETCH_CITY_DETAILS_SUCCESS",
  payload: "https://api.teleport.org/api/cities/geonameid:524901/",
};

it("getting geonamesId from string", () => {
  expect(getGeonameIdHelper(funcFirstParam)).toEqual("geonameid:524901");
});
