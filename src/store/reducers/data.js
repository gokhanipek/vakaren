import { 
  RECEIVE_API_DATA,
  RECEIVE_REQUEST_TOKEN,
  RECEIVE_POPULAR_MOVIES,
  RECEIVE_MOVIE_SEARCH,
  RECEIVE_RANDOM_MOVIE_SEARCH,
  REQUEST_SESSION_ID,
  RECEIVE_MOVIE_BY_ID
} from "../actions";

import initialState from './initialState';

export default (state = initialState, { type, data }) => {
  switch (type) {
    case RECEIVE_REQUEST_TOKEN:
      return {
        ...initialState,
        apiToken: data
      };
    case RECEIVE_POPULAR_MOVIES: 
      return {
        ...initialState,
        popularMovies: data
      };
    case RECEIVE_MOVIE_SEARCH: 
      return {
        ...initialState,
        searchResults: data
      };
    case RECEIVE_RANDOM_MOVIE_SEARCH: 
      return {
        ...initialState,
        randomMovieResult: data
      };
    case REQUEST_SESSION_ID:
      return {
        ...initialState,
        isAuthenticated: data ? true : false
      };
    case RECEIVE_MOVIE_BY_ID: 
      return {
        ...initialState,
        movieDetails: data
      } 
    default:
      return state;
  }
};
