import findCityHelper from "../helpers/findCityHelper";

const funcFirstParam = {
  href: "https://api.teleport.org/api/urban_areas/slug:sao-paulo/",
  name: "Sao Paulo",
};
const funcSecondParam = "S";

it("searches for a given letter in a city object", () => {
  expect(findCityHelper(funcFirstParam, funcSecondParam)).toEqual(true);
});
