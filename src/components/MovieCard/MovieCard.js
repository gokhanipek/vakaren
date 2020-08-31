import React from 'react';
import { Link } from 'react-router-dom'
import { addToList, getAccountDetails, getList } from './../../store/actions'
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom'

import './MovieCard.scss';

const MovieCard = ({movie, addToList, getAccountDetails, accountId, userList, favorited}) => {
    const imageLink = movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : 'https://i.ibb.co/jy2CY5L/no-image.png';

    const style = {
      backgroundImage: `url(${imageLink})`
    }

    const isItFav = userList.includes(movie.id) ? 'hellooo' : 'noooo';

    console.warn(favorited);


    return (
        <div className="col s12 m6">
            <div className="movie-card" style={style}>
              <div className="movie-card-overlay"></div>
              <div className="movie-card-right-side">
                <h2 className="card-title">{movie.original_title}</h2>
                <span className="card-date">{movie.release_date}</span>
                <span className="card-description">{movie.overview.substring(0,150)}...</span>
                <Link to={`/movie/${movie.id}`} className="btn btn-outline movie-card__button"> Details </Link>
              </div>
              <div className="movie-card-actions">
              <div className="card-buttons">
                  <i className={`large material-icons white-text fav-or-watch`} onClick={() => addToList(movie.id, accountId, 'watchlist')}>access_time</i>
                  <i className={`large material-icons white-text fav-or-watch ${favorited ? 'fav' : 'nonfav' }`} onClick={() => addToList(movie.id, accountId, 'favorite')}>favorite</i>
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



