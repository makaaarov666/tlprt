import getGeonamesHelper from "../helpers/getGeonamesHelper";

const funcFirstParam = {
  href: "https://api.teleport.org/api/continents/geonames:AF/",
  name: "Africa",
};

it("Getting geonames from a string", () => {
  expect(getGeonamesHelper(funcFirstParam)).toEqual(["geonames:AF"]);
});
