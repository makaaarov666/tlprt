import getOneSlugHelper from "../helpers/getOneSlugHelper";

const funcFirstParam = "https://api.teleport.org/api/urban_areas/slug:tampere/";

it("Getting slug from string", () => {
  expect(getOneSlugHelper(funcFirstParam)).toEqual("tampere");
});
