import React, { useEffect } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom'
import { requestApiDataAction, getAuthTokenAction, getPopularMoviesAction } from "../../store/actions";

import Searchbar from '../Searchbar/Searchbar';

import Logo from './../Logo/Logo'; 
import './Home.scss';
import Authenticate from "../Authenticate/Authenticate";

const Home = ({getAuthTokenAction, location}) => {
  useEffect(() => {
    // requestApiDataAction();
    // getPopularMoviesAction();
  }, [])

  const isAuthenticated = location.search.includes('approved=true')

  const onClickHandler = () => {
    return isAuthenticated ? null : getAuthTokenAction();
  }


  return (
      <div className="home-wrapper">
          <Authenticate isAuthenticated={isAuthenticated} onClickHandler={onClickHandler} />
          <Logo/>
          <Searchbar/>
      </div>
    )
}


const mapDispatchToProps = dispatch =>
  bindActionCreators({ getAuthTokenAction }, dispatch);

export default withRouter(connect(null, mapDispatchToProps)(Home));
