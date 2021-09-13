import getOneSlugHelper from "../helpers/getOneSlugHelper";

const funcFirstParam = "https://api.teleport.org/api/urban_areas/slug:tampere/";

it("searches for a given letter in a city object", () => {
  expect(getOneSlugHelper(funcFirstParam)).toEqual("tampere");
});
