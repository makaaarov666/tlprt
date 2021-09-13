const findCityHelper = (city, type) =>
  city.name.toLowerCase().startsWith(`${type.toLowerCase()}`);

export default findCityHelper;
