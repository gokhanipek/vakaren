import React, {useEffect} from 'react';
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom'
import { getMovieById, getMovieVideos, getMoviePosters, getAccountDetails } from './../../store/actions'
import { Carousel } from 'react-responsive-carousel';


import "react-responsive-carousel/lib/styles/carousel.min.css";
import './MoviePage.scss';


const MoviePage = ({getMovieById, getMovieVideos, match, getMoviePosters, movieDetails, moviePosters, movieVideos, getAccountDetails}) => {
    useEffect(() => {
        const {id} = match.params;
        getMovieById(id);
        getMovieVideos(id);
        getMoviePosters(id);
        // getAccountDetails();
    }, [])


    const {id, poster_path, title, runtime, tagline, overview, backdrop_path, genres, release_date, homepage} = movieDetails;

    const style = {
        backgroundImage: id ? `url(https://image.tmdb.org/t/p/w500/${backdrop_path})` : 'url(https://i.ibb.co/jy2CY5L/no-image.png)'
      };
   
    return (
        <div className="movie-container">
            <div className="jumbotron">
                <img src={id ? `https://image.tmdb.org/t/p/w500/${poster_path}` : 'https://i.ibb.co/jy2CY5L/no-image.png'} width="170px" alt="cover" className="cover" />
                <p className="title">{title}</p>
                <p className="tagline">{runtime} mins</p>
                <p className="tagline">{tagline}</p>
                <p className="overview">{overview}</p>
                <p className="website">{homepage}</p>
                <p className="genres">{'genres'}</p>
                <p className="release-date">{release_date}</p>
                <div className="no-such-movie"> There is no such movie. Please go back to search. </div>
            </div>
            <Carousel>
                {moviePosters && moviePosters.map(poster => 
                    <div>
                        <img src={`https://image.tmdb.org/t/p/w500${poster.file_path}`} />
                    </div>
                    )
                }
            </Carousel>
            {movieVideos && movieVideos.map(video => 
                <iframe 
                    src={`https://www.youtube.com/embed/${video.id}`}
                    frameborder='0'
                    allow='autoplay; encrypted-media'
                    allowfullscreen
                    title='video'
                />
                )
            }
        </div>
    )
}

const mapStateToProps = state => ({ 
    movieDetails: state.data.movieDetails,
    moviePosters: state.data.moviePosters.posters,
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

