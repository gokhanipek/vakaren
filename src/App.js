import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import Home from './components/Home/Home';
import MoviePage from "./components/MoviePage/MoviePage";


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/movie/:id" component={MoviePage}/>
        <Route path="/*" component={Home}/>
      </Switch>
    </Router>
  )
}

export default App;
