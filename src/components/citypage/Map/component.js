import React from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";
import { object } from "prop-types";
import { connect } from "react-redux";
import selectors from "reducers/selectors";

const mapStyles = {
  width: "100%",
  height: "400px",
};

const Maps = ({ google, location }) => {
  console.log(google, location);
  if (!location) {
    return null;
  }

  const { latitude: lat, longitude: lng } = location;

  return (
    <Map
      google={google}
      zoom={10}
      style={mapStyles}
      initialCenter={{ lat, lng }}
      center={{ lat, lng }}
    />
  );
};

Maps.propTypes = {
  google: object,
  location: object,
};

const mapStateToProps = state => ({
  location: selectors.getLocation(state),
});

export default GoogleApiWrapper({
  apiKey: `${process.env.REACT_APP_MAP}`,
})(connect(mapStateToProps)(Maps));
