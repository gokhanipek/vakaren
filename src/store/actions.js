export const REQUEST_API_DATA = "REQUEST_API_DATA";
export const RECEIVE_API_DATA = "RECEIVE_API_DATA";
export const GET_AUTH_TOKEN = 'GET_AUTH_TOKEN';
export const RECEIVE_REQUEST_TOKEN = 'RECEIVE_REQUEST_TOKEN';
export const GET_POPULAR_MOVIES = 'GET_POPULAR_MOVIES';
export const RECEIVE_POPULAR_MOVIES = 'RECEIVE_POPULAR_MOVIES';
export const GET_SEARCH_RESULT = 'GET_SEARCH_RESULT';
export const RECEIVE_MOVIE_SEARCH = 'RECEIVE_MOVIE_SEARCH';

export const requestApiDataAction = () => ({ type: REQUEST_API_DATA });
export const receiveApiDataAction = data => ({ type: RECEIVE_API_DATA, data });
export const getAuthTokenAction = () => ({ type: GET_AUTH_TOKEN });
export const receiveRequestTokenAction = data => ({ type: RECEIVE_REQUEST_TOKEN, data });
export const getPopularMoviesAction = () => ({ type: GET_POPULAR_MOVIES });
export const receivePopularMoviesAction = data => ({ type: RECEIVE_POPULAR_MOVIES, data })
export const requestSearchResultAction = data => ({ type: GET_SEARCH_RESULT, data }) 
export const receiveSearchResultAction = () => ({ type: RECEIVE_MOVIE_SEARCH }) 