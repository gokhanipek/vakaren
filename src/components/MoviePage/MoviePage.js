import React, {useEffect} from 'react';
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom'
import { getMovieById, getMovieVideos, getMoviePosters, getAccountDetails, resetSearchResults } from './../../store/actions'
import Logo from './../Logo/Logo';
import NoImage from './../../assets/images/no-image.png'


import "react-responsive-carousel/lib/styles/carousel.min.css";
import './MoviePage.scss';


const MoviePage = () => {

   
    const jumbotronBackgroundStyle = {
        backgroundImage: `url(${NoImage})`
    }

    const onLogoClickHandler = () => {
        return console.warn('clciked')    
    }


    return (
        <>
            <Logo face={false} classes={'navbar'} onClickHandler={onLogoClickHandler} />
            <div className="movie-container">
                <div className="jumbotron" style={jumbotronBackgroundStyle}>
                    <span className="jumbotron-overlay"/>
                    <div className="jumbotron-right-side">
                        <p className="title">{'title'}</p>
                        <p className="movie-info runtime">Runtime: {'runtime' } mins</p>
                        <p className="movie-info tagline">Tagline:  {'tagline'}</p>
                        <p className="movie-info overview">Overview: {'overview'}</p>
                        <p className="movie-info website"><a href={'homepage'} target="_blank" rel="noopener noreferrer">Website</a></p>
                        <p className="movie-info genres"><span key={'genre.id'} className="bubble">{'genre.name'}</span></p>
                        <p className="movie-info release-date">Release Date: {'release_date'}</p>
                    </div>
                </div>
                <div className="video-container">
                    <h3 className="carousel-title">Videos</h3>
                        <iframe
                            className="movie-video"
                            src={`https://www.youtube.com/embed/${'video.key'}`}
                            frameBorder='0'
                            allow='autoplay; encrypted-media'
                            allowFullScreen
                            title='video'
                            key={'index'}
                        />
                </div>
                <div className="image-container">
                    <h3 className="carousel-title">Posters</h3>
                    <div className="images">
                        <img className="movie-posters" alt="poster" key={'index'} src={`https://image.tmdb.org/t/p/w500${'poster.file_path'}`} />
                    </div>
                </div>
            </div>
        </>
    )
}


export default withRouter(MoviePage);

