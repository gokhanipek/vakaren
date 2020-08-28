import React, { useState } from 'react';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom'
import { requestApiDataAction, getAuthTokenAction, getPopularMoviesAction, requestSearchResultAction } from "../../store/actions";


import './Searchbar.scss';

const Searchbar = ({requestSearchResultAction}) => {

    const [ searchTerm, setSearchTerm ] = useState('');

    
    const handleSubmit = event => {
        event.preventDefault();
        const query = encodeURIComponent(searchTerm.trim());

        if (query === '') return; // Add message for the user to type something

        requestSearchResultAction(query);

    }



    const handleChange = event => {
        setSearchTerm(event.target.value);
    };

    return (
        <>
            <div class="input-field col s12 searchbar">
            <form data-test="component-search-form" onSubmit={handleSubmit}>

                <input placeholder="Type a movie name...." id="search" type="text" className="validate"  onChange={handleChange}/>
                {/* <label for="search">Type a movie name...</label>     */}
                <div className="buttons-container">
                    <button type="submit" className="waves-effect waves-light btn light-blue">
                        Search
                    </button>            
                    <button type="submit" className="waves-effect waves-light btn light-blue">
                        I feel lucky
                    </button>
                </div>
            </form>
            </div>
        </>
    )
}

const mapStateToProps = state => ({ data: state.data });

const mapDispatchToProps = dispatch => options =>   bindActionCreators({ requestApiDataAction, getAuthTokenAction, getPopularMoviesAction, requestSearchResultAction: () => dispatch(requestSearchResultAction(options)) }, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Searchbar));

