import { RECEIVE_API_DATA, RECEIVE_REQUEST_TOKEN, RECEIVE_POPULAR_MOVIES, RECEIVE_MOVIE_SEARCH } from "../actions";

export default (state = {}, { type, data }) => {
  switch (type) {
    case RECEIVE_API_DATA:
      return data;
    case RECEIVE_REQUEST_TOKEN:
      return data;
    case RECEIVE_POPULAR_MOVIES: 
      return data;
    case RECEIVE_MOVIE_SEARCH: 
      return data;
    default:
      return state;
  }
};
