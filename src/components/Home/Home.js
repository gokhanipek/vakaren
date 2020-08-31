import React, { useEffect } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom'
import {  getAuthTokenAction, getPopularMoviesAction, requestSessionId, getAccountDetails } from "../../store/actions";

import SearchMovies from '../SearchMovies/SearchMovies';

import Logo from './../Logo/Logo'; 
import './Home.scss';
import Authenticate from "../Authenticate/Authenticate";

const Home = ({getAuthTokenAction, location, getPopularMoviesAction, searchResults, requestSessionId}) => {
  useEffect(() => {
    const isAuthenticated = location.search.includes('approved=true')
    // const sessionInfo = JSON.parse(localStorage.getItem('vakaren_session_id')) ? 'Authenticated Session' : 'Unauthorized Session';
    const {request_token} = isAuthenticated ? authorizedToken() : {};
    requestSessionId(request_token);
  }, [])

  // const isAuthenticated = location.search.includes('approved=true')
  const isAuthenticated = JSON.parse(localStorage.getItem('vakaren_session_id'));

  const authorizedToken = () => {
    if(location.search === '') return null;
    const params = location.search.substring(1).split('&');
    const paramsObject = {};
    
    params.map(param => {
      const [key, value] = param.split('=');
      paramsObject[key] = value;
    })

    return paramsObject;
  }


  const onClickHandler = () => {
    return isAuthenticated ? null : getAuthTokenAction();
  }


  return (
    <div className="container">
      <div className={`home-wrapper ${searchResults.length > 0 ? 'top' : 'bottom'}`}>
          <Authenticate isAuthenticated={isAuthenticated} onClickHandler={onClickHandler} />
          <Logo/>
          <SearchMovies/>
      </div>
    </div>
    )
}


const mapDispatchToProps = dispatch =>
  bindActionCreators({ getAuthTokenAction, getPopularMoviesAction, requestSessionId, getAccountDetails }, dispatch);

const mapStateToProps = state => ({ 
    searchResults: state.data.searchResults.results || null 
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));
