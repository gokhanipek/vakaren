import React, { useState } from 'react';
// import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom'
import { requestSearchResultAction, requestRandomMovieSearch } from "../../store/actions";


import './SearchMovies.scss';
import MovieCard from '../MovieCard/MovieCard';

const SearchMovies = ({requestSearchResultAction, requestRandomMovieSearch, searchResults}) => {

    const [ searchTerm, setSearchTerm ] = useState('');

    
    const handleSubmit = event => {
        event.preventDefault();
        const query = encodeURIComponent(searchTerm.trim());
        if (query === '') return; // Add message for the user to type something
        requestSearchResultAction(query, 1);

    }

    const handleChange = event => {
        setSearchTerm(event.target.value);
    };

    return (
        <>
            <div className="input-field col s12 searchbar">
            <form data-test="component-search-form" onSubmit={handleSubmit}>

                <input placeholder="Type a movie name...." id="search" type="text" className="validate"  onChange={handleChange}/>
                <div className="buttons-container">
                    <button type="submit" className="waves-effect waves-light btn light-blue">
                        Search
                    </button>            
                    <button type="submit" className="waves-effect waves-light btn light-blue" onClick={() => requestRandomMovieSearch()}>
                        I feel lucky
                    </button>
                </div>
            </form>
            </div>
            <div className="row">
                { searchResults.length > 0 && searchResults.map(movie => <MovieCard movie={movie} /> ) }
            </div>
        </>
    )
}

const mapStateToProps = state => ({ 
    searchResults: state.data.searchResults.results || null 
});

const mapDispatchToProps = dispatch => {
    return {
        requestSearchResultAction: (query, page) => dispatch(requestSearchResultAction(query, page)),
        requestRandomMovieSearch: () => dispatch(requestRandomMovieSearch())
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchMovies));

