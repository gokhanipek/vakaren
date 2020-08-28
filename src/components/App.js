import React from "react";
import { Provider } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import store from "../store/store";
import Home from "./Home/Home";
import AuthenticatedUser from "./AuthenticatedUser/AuthenticatedUser";
import AnonUser from "./AnonUser/AnonUser";
import MoviePage from "./MoviePage/MoviePage";

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
        <Route path="/movie/:id" component={MoviePage}/>
      </Switch>
    </Router>
  </Provider>;

  
