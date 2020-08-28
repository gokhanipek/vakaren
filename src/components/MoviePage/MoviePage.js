import React, {useEffect} from 'react';
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom'
import { getMovieById } from './../../store/actions'

import './MoviePage.scss';

const MoviePage = ({getMovieById, match}) => {
    useEffect(() => {
        const {id} = match.params;
        getMovieById(id);
    }, [])
    return (
        <div className="movie-container">
            <div className="movie-information">
                <div className="movie-image">
                    <img className="main-poster" src="" alt="main-poster"/>
                </div>
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
            <div className="movie-videos">

            </div>
            <div className="movie-posters">

            </div>
        </div>
    )
}

const mapStateToProps = state => ({ 
    movieDetails: state.data.searchResults.results || null 
});

const mapDispatchToProps = dispatch => {
    return {
        getMovieById: id => dispatch(getMovieById(id))
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MoviePage));

