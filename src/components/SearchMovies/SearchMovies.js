import React, { useState, useEffect } from 'react';
// import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom'
import { 
    requestSearchResultAction,
    requestLatestMovieSearch,
    getAccountDetails,
    getList,
    resetSearchResults
} from "../../store/actions";


import './SearchMovies.scss';
import MovieCard from '../MovieCard/MovieCard';

const SearchMovies = ({
    history,
    accountDetails,
    requestSearchResultAction,
    requestLatestMovieSearch,
    searchResults,
    getList,
    getAccountDetails,
    latestMovieResultId,
    resetSearchResults,
    userList
}) => {

    const [ searchTerm, setSearchTerm ] = useState('');

    useEffect(() => {
        getAccountDetails();
        requestLatestMovieSearch();
        return () => {
            resetSearchResults();            
          };
    }, []);

    useEffect(() => {
        getList(accountDetails.id, 'favorite')
    }, [accountDetails]);
    
    const handleSubmit = event => {
        event.preventDefault();
        const query = encodeURIComponent(searchTerm.trim());
        if (query === '') return; // Add message for the user to type something
        requestSearchResultAction(query, 1);
    }

    const onClickRandomMovieHandler = () => {
        const getRandomMovie = Math.floor(Math.random() * latestMovieResultId) + 1 
        history.push(`/movie/${getRandomMovie}`)
    } 

    const handleChange = event => {
        setSearchTerm(event.target.value);
    };

    console.warn(userList && userList.results, searchResults);

    return (
        <>
            <div className="input-field col s12 searchbar">
            <form data-test="component-search-form" onSubmit={handleSubmit}>

                <input placeholder="Type a movie name...." id="search" type="text" className="validate"  onChange={handleChange}/>
                <div className="buttons-container">
                    <button type="submit" className="waves-effect waves-light btn light-blue">
                        Search
                    </button>            
                    <span type="submit" className="waves-effect waves-light btn light-blue" onClick={() => onClickRandomMovieHandler()}>
                        I feel lucky
                    </span>
                </div>
            </form>
            </div>
            <div className="row">
                { searchResults.length > 0 && searchResults.map(movie => <MovieCard favorited={userList.results.some(listObj => listObj.id == movie.id  )} userList={userList.results} accountId={accountDetails.accountId} movie={movie} /> ) }
            </div>
        </>
    )
}

const mapStateToProps = state => ({ 
    searchResults: state.data.searchResults.results || null,
    accountDetails: state.data.accountDetails || {},
    latestMovieResultId: state.data.latestMovieResultId,
    userList: state.data.userList
});

const mapDispatchToProps = dispatch => {
    return {
        requestSearchResultAction: (query, page) => dispatch(requestSearchResultAction(query, page)),
        requestLatestMovieSearch: () => dispatch(requestLatestMovieSearch()),
        getAccountDetails: () => dispatch(getAccountDetails()),
        getList: (accountId, listType) => dispatch(getList(accountId, listType)),
        resetSearchResults: () => dispatch(resetSearchResults())
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchMovies));

