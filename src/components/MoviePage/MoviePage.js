import React, {useEffect} from 'react';
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom'
import { getMovieById, getMovieVideos, getMoviePosters, getAccountDetails } from './../../store/actions'
import Logo from './../Logo/Logo';


import "react-responsive-carousel/lib/styles/carousel.min.css";
import './MoviePage.scss';


const MoviePage = ({getMovieById, getMovieVideos, match, getMoviePosters, movieDetails, moviePosters, movieVideos, movieBackdrops}) => {
    useEffect(() => {
        const {id} = match.params;
        getMovieById(id);
        getMovieVideos(id);
        getMoviePosters(id);
    }, [])


    const {id, poster_path, title, runtime, tagline, overview, backdrop_path, genres, release_date, homepage} = movieDetails;
   
    const jumbotronBackgroundStyle = {
        backgroundImage: poster_path ? `url(https://image.tmdb.org/t/p/w500/${poster_path})` : 'url(https://i.ibb.co/jy2CY5L/no-image.png)'
    }

    return (
        <>
            <Logo face={false} classes={'navbar'} />
            {id ? <div className="movie-container">
                <div className="jumbotron" style={jumbotronBackgroundStyle}>
                    <span className="jumbotron-overlay"/>
                    <div className="jumbotron-right-side">
                        <p className="title">{title}</p>
                        <p className="movie-info runtime">Runtime: {runtime} mins</p>
                        <p className="movie-info tagline">Tagline:  {tagline}</p>
                        <p className="movie-info overview">Overview: {overview}</p>
                        <p className="movie-info website"><a href={homepage} target="_blank">Website</a></p>
                        <p className="movie-info genres">{genres && genres.map(genre => <span className="bubble">{genre.name}</span>)} </p>
                        <p className="movie-info release-date">Release Date: {release_date}</p>
                    </div>
                </div>
                <div className="video-container">
                    <h3 className="carousel-title">Videos</h3>
                    {movieVideos && movieVideos.length > 0 ? movieVideos.map(video => 
                        <iframe
                            className="movie-video"
                            src={`https://www.youtube.com/embed/${video.key}`}
                            frameBorder='0'
                            allow='autoplay; encrypted-media'
                            allowfullscreen
                            title='video'
                        />
                        )
                    : <div className="no-such-movie"> This movie has no videos available. </div>}
                </div>
                <div className="image-container">
                    <h3 className="carousel-title">Posters</h3>
                    <div className="images">
                        {moviePosters && moviePosters.length > 0 ? moviePosters.map(poster => 
                                <img className="movie-posters" src={`https://image.tmdb.org/t/p/w500${poster.file_path}`} />
                            )
                        : <div className="no-such-movie"> This movie has no posters available. </div> }
                    </div>
                </div>
            </div> : <div className="no-such-movie"> There is no such movie. Please go back to search. </div>}
        </>
    )
}

const mapStateToProps = state => ({ 
    movieDetails: state.data.movieDetails,
    moviePosters: state.data.moviePosters.posters,
    movieBackdrops: state.data.moviePosters.backdrops,
    movieVideos: state.data.movieVideos.results
});

const mapDispatchToProps = dispatch => {
    return {
        getMovieById: id => dispatch(getMovieById(id)),
        getMovieVideos: id => dispatch(getMovieVideos(id)),
        getMoviePosters: id => dispatch(getMoviePosters(id)),
        getAccountDetails: () => dispatch(getAccountDetails())
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MoviePage));

