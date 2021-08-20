const citiesLoaded = (allCities) => {
  return {
    type: "CITIES_LOADED",
    payload: allCities,
  };
};

export { citiesLoaded };
