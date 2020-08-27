import React, { useEffect } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { requestApiData, getAuthToken } from "../../actions";
import { withRouter } from 'react-router-dom'

import Logo from './../Logo/Logo'; 



import './Home.scss';

const Home = ({requestApiData,getAuthToken, data, history}) => {
  useEffect(() => {
    requestApiData();
  }, [requestApiData])


  const onClickHandler = () => {
    history.push('anonymous')
  }

  return (
      <div className="home-wrapper">
        <div className="jumbotron">
          <Logo/>
          <h1 className="display-3">Welcome to Vakaren!</h1>
          <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
          <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
          <p className="lead">
          <button className="btn btn-outline-primary" color="primary" onClick={() => { getAuthToken() }}>
            Authenticate
          </button>            
          <button className="btn btn-outline-primary" color="primary" onClick={() => { onClickHandler() }}>
            Anonymous User
          </button>
          </p>
        </div>
      </div>
    )
}
const mapStateToProps = state => ({ data: state.data });

const mapDispatchToProps = dispatch =>
  bindActionCreators({ requestApiData, getAuthToken }, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));
