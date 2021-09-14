import getSlugHelper from "../helpers/getSlugHelper";

const funcFirstParam = "https://api.teleport.org/api/urban_areas/slug:tampere/";

it("Getting slug from string", () => {
  expect(getSlugHelper(funcFirstParam)).toEqual("tampere");
});
