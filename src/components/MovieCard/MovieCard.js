import React from 'react';
import { Link } from 'react-router-dom'

import './MovieCard.scss';

const MovieCard = ({movie}) => {
    const imageLink = movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : 'https://i.ibb.co/jy2CY5L/no-image.png'
    return (
        <div className="col s12 m4">
          <div className="card">
            <div className="card-image">
              <img src={imageLink} alt="poster"/>
              <span className="card-title">{movie.original_title}</span>
            </div>
            <div className="card-content">
                <p>{movie.overview}</p>
            </div>
            <div className="card-action">
                <Link to={`/movie/${movie.id}`} data={movie}> Details </Link>
            </div>
          </div>
        </div>
        )
}

export default MovieCard



