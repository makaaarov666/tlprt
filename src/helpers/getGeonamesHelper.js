const getGeonamesHelper = item =>
  item.href
    .split("/")
    .filter(el => el.toLowerCase().indexOf("geonames".toLowerCase()) > -1)
    .flat();

export default getGeonamesHelper;
