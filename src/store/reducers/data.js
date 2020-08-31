import { 
  RECEIVE_API_DATA,
  RECEIVE_REQUEST_TOKEN,
  RECEIVE_POPULAR_MOVIES,
  RECEIVE_MOVIE_SEARCH,
  RECEIVE_LATEST_MOVIE_SEARCH,
  REQUEST_SESSION_ID,
  RECEIVE_MOVIE_BY_ID,
  RECEIVE_MOVIE_VIDEOS,
  RECEIVE_MOVIE_POSTERS,
  RECEIVE_ACCOUNT_DETAILS,
  RECEIVE_LIST,
  RESET_SEARCH_RESULTS,
  ADD_TO_LIST_RESPONSE
} from "../actions";

import initialState from './initialState';

export default (state = initialState, { type, data }) => {
  switch (type) {
    case RECEIVE_REQUEST_TOKEN:
      return {
        ...state,
        apiToken: data
      };
    case RECEIVE_POPULAR_MOVIES: 
      return {
        ...state,
        popularMovies: data
      };
    case RECEIVE_MOVIE_SEARCH: 
      return {
        ...state,
        searchResults: data
      };
    case RECEIVE_LATEST_MOVIE_SEARCH: 
      return {
        ...state,
        latestMovieResultId: data.id
      };
    case REQUEST_SESSION_ID:
      return {
        ...state,
        isAuthenticated: data ? true : false
      };
    case RECEIVE_MOVIE_BY_ID: 
      return {
        ...state,
        movieDetails: data
      };
    case ADD_TO_LIST_RESPONSE:
      return {
        ...state,
        favoriteMovies: {
          ...state.favoriteMovies,
          data
        }
      }
    case RECEIVE_API_DATA: 
      return {
        ...state,
        movieDetails: data
      };
    case RECEIVE_MOVIE_VIDEOS:
      return {
        ...state,
        movieVideos: data
      };
    case RECEIVE_MOVIE_POSTERS:
      return {
        ...state,
        moviePosters: data
      };
    case RECEIVE_ACCOUNT_DETAILS: 
      return {
        ...state,
        accountDetails: data
      };
    case RECEIVE_LIST: 
      return {
        ...state,
        userList: data
      }
    case RESET_SEARCH_RESULTS:
      return {
        ...state,
        searchResults: initialState.searchResults
      }
    default:
      return state;
  }
};
