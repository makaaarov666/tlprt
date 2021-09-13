const selectors = {
  getGeonames: state => state.cityList.geonames,
  getCity: state => state.cityList.city,
  getImage: state => state.cityDetails.cityImage.image,
  loadingCity: state => state.cityList.loading,
  getGeonameId: state => state.cityDetails.urbanAreasInfo.info,
  getNameCity: state => state.cityDetails.cityInfo.info["full_name"],
  getPopulation: state => state.cityDetails.cityInfo.info.population,
  getSalaries: state => state.cityDetails.cityInfo.salaries.percent,
  getTax: state => state.cityDetails.cityInfo.taxations.tax,
  getLocation: state => state.cityDetails.cityInfo.info.location.latlon,
  getLoadingCity: state => state.cityList.loading,
};

export default selectors;
