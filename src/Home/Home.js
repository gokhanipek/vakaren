import React, { useEffect } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { requestApiData, getAuthToken } from "../actions";

import './Home.scss';

const Home = ({requestApiData,getAuthToken, data}) => {
  useEffect(() => {
    requestApiData();
    getAuthToken();
  }, [])
  return <h2>
    <p>Hello</p>{JSON.stringify(data)}</h2>
}
const mapStateToProps = state => ({ data: state.data });

const mapDispatchToProps = dispatch =>
  bindActionCreators({ requestApiData, getAuthToken }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
