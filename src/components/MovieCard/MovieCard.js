import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'
import { addToList, getAccountDetails, getList } from './../../store/actions'
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom'

import './MovieCard.scss';

const MovieCard = ({movie, addToList, getAccountDetails, accountId, getList}) => {
    const imageLink = movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : 'https://i.ibb.co/jy2CY5L/no-image.png'

    useEffect(() => {
      // getAccountDetails();
      // getList(accountId, 'favorite');
  }, [])
    return (
        <div className="col s12 m4">
          <div className="card">
            <div className="card-image">
              <img src={imageLink} alt="poster"/>
              <span className="card-title">{movie.original_title}</span>
            </div>
            <div className="card-content">
                <p>{movie.overview.substring(0,150)}...</p>
            </div>
            <div className="card-action">
                <Link to={`/movie/${movie.id}`} className="light-blue-text"> Details </Link>
                <div className="card-buttons">
                  <i className="large material-icons light-blue-text fav-or-watch" onClick={() => addToList(movie.id, accountId, 'watchlist')}>access_time</i>
                  <i className="large material-icons light-blue-text fav-or-watch" onClick={() => addToList(movie.id, accountId, 'favorite')}>favorite</i>
                </div>
            </div>
          </div>
        </div>
        )
}


const mapDispatchToProps = dispatch => {
  return {
      addToList: (movieId, accountId, listType) => dispatch(addToList(movieId, accountId, listType)),
      getAccountDetails: () => dispatch(getAccountDetails()),
      getList: (accountId, listType) => dispatch(getList(accountId, listType))
  }
};

export default withRouter(connect(null, mapDispatchToProps)(MovieCard));



