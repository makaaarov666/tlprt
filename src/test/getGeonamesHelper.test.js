import getGeonamesHelper from "../helpers/getGeonamesHelper";

const funcFirstParam = {
  href: "https://api.teleport.org/api/continents/geonames:AF/",
  name: "Africa",
};

it("searches for a given letter in a city object", () => {
  expect(getGeonamesHelper(funcFirstParam)).toEqual(["geonames:AF"]);
});
