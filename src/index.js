import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";
import ErrorBoundary from "./components/ErrorBoundary";
import CitiesstoreServise from "./services/CitiesStoreService";
import { CitiesstoreServiceProvider } from "./components/CitiesstoreServiceContext";

import store from "./store";

const citiesstoreServise = new CitiesstoreServise();

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundary>
      <CitiesstoreServiceProvider value={citiesstoreServise}>
        <Router>
          <App />
        </Router>
      </CitiesstoreServiceProvider>
    </ErrorBoundary>
  </Provider>,
  document.getElementById("root")
);
