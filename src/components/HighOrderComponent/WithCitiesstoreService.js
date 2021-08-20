import React from "react";
import { CitiesstoreServiceConsumer } from "../CitiesStoreServiceContext/CitiesStoreServiceContext";

const withCitiesstoreService = () => (Wrapped) => {
  // eslint-disable-next-line react/display-name
  return (props) => {
    return (
      <CitiesstoreServiceConsumer>
        {(citiesstoreServise) => {
          return <Wrapped {...props} citiesstoreServise={citiesstoreServise} />;
        }}
      </CitiesstoreServiceConsumer>
    );
  };
};

export default withCitiesstoreService;
