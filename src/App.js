import React from "react";
import { Provider } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import store from "./store";
import Home from "./components/Home/Home";
import AuthenticatedUser from "./components/AuthenticatedUser/AuthenticatedUser";
import AnonUser from "./components/AnonUser/AnonUser";
import './assets/theme/bootstrap.css';
import './assets/theme/theme.css';

export default () =>
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/authenticated">
          <AuthenticatedUser />
        </Route>
        <Route path="/anonymous">
          <AnonUser />
        </Route>
      </Switch>
    </Router>
  </Provider>;

  
