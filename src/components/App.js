import React from "react";
import { Provider } from "react-redux";
import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import store from "../store/store";
import Home from "./Home/Home";
import MoviePage from "./MoviePage/MoviePage";

export default () =>
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/movie/:id" component={MoviePage}/>
        <Route path="/*" component={Home}/>
      </Switch>
    </Router>
  </Provider>;

  
