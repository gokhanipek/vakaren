import React, {useEffect} from 'react';
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom'
import { getMovieById, getMovieVideos, getMoviePosters } from './../../store/actions'

import './MoviePage.scss';

const MoviePage = ({getMovieById, getMovieVideos, match, getMoviePosters, movieDetails}) => {
    useEffect(() => {
        const {id} = match.params;
        getMovieById(id);
        getMovieVideos(id);
        getMoviePosters(id);
    }, [])

    const {id, poster_path, title, runtime, tagline, overview, backdrop_path, genres, release_date, homepage} = movieDetails;

    const style = {
        backgroundImage: id ? `url(https://image.tmdb.org/t/p/w500/${backdrop_path})` : 'url(https://i.ibb.co/jy2CY5L/no-image.png)'
      };

   
    return (
        <div className="movie-container">
            <div className="movie-card">
            <div className="container">
                <a href="#"><img src={id ? `https://image.tmdb.org/t/p/w500/${poster_path}` : 'https://i.ibb.co/jy2CY5L/no-image.png'} width="170px" alt="cover" className="cover" /></a>
                <div className="hero">
                    <span className="hero-backdrop" style={style}></span>
                <div className="details">
                <div className="title1">{title}<span>{runtime} mins</span></div>
                    <div className="title2">{tagline}</div>
                    <span className="title3">Release date: {release_date}</span>
                    <span className="title3"><a href={homepage}>Website</a></span>
                </div> 
                </div> 
                { id ? <div className="description">
                    <div className="column1">
                        {genres.map(genre => <span className="tag">{genre.name}</span> )}
                        <span className="tag">action</span>
                    </div> 
                    <div className="column2">
                        <p>{overview}</p>    
                        <div className="movie-details">
                            <h2 className="title"></h2>
                            <p className="genre"></p>
                            <p className="release-date"></p>
                            <p className="long"></p>
                            <p className="rating"></p>
                            <p className="status"></p>
                            <p className="summary"></p>
                        </div>
                    </div> 
                </div> : <div className="no-such-movie"> There is no such movie. Please go back to search. </div>
                }
            </div> 
            </div>      
        </div>
    )
}

const mapStateToProps = state => ({ 
    movieDetails: state.data.movieDetails || null 
});

const mapDispatchToProps = dispatch => {
    return {
        getMovieById: id => dispatch(getMovieById(id)),
        getMovieVideos: id => dispatch(getMovieVideos(id)),
        getMoviePosters: id => dispatch(getMoviePosters(id))
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MoviePage));

