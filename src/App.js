import React from "react";
import { Provider } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";

import InfoLoader from "components/common/InfoLoader";
import HomePage from "pages/HomePage";
import CityPage from "pages/CityPage";
import ErrorIndicator from "components/common/ErrorIndicator";

import store from "./reducers/index";

import "./styles/normalize.css";

const App = () => (
  <Provider store={store}>
    <ErrorBoundary FallbackComponent={ErrorIndicator}>
      <Router>
        <InfoLoader>
          <Switch>
            <Route path="/details" component={CityPage} />
            <Route path="/" component={HomePage} />
            <Redirect to="/" />
          </Switch>
        </InfoLoader>
      </Router>
    </ErrorBoundary>
  </Provider>
);

export default App;
