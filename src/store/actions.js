export const REQUEST_API_DATA = "REQUEST_API_DATA";
export const RECEIVE_API_DATA = "RECEIVE_API_DATA";

export const GET_AUTH_TOKEN = 'GET_AUTH_TOKEN';
export const RECEIVE_REQUEST_TOKEN = 'RECEIVE_REQUEST_TOKEN';

export const GET_POPULAR_MOVIES = 'GET_POPULAR_MOVIES';
export const RECEIVE_POPULAR_MOVIES = 'RECEIVE_POPULAR_MOVIES';

export const GET_SEARCH_RESULT = 'GET_SEARCH_RESULT';
export const RECEIVE_MOVIE_SEARCH = 'RECEIVE_MOVIE_SEARCH';

export const GET_RANDOM_MOVIE_SEARCH = 'GET_RANDOM_MOVIE_SEARCH';
export const RECEIVE_RANDOM_MOVIE_SEARCH = 'RECEIVE_RANDOM_MOVIE_SEARCH';

export const REQUEST_SESSION_ID = 'REQUEST_SESSION_ID';
export const RECEIVE_SESSION_ID = 'RECEIVE_SESSION_ID';

export const GET_MOVIE_BY_ID = 'GET_MOVIE_BY_ID';
export const RECEIVE_MOVIE_BY_ID = 'RECEIVE_MOVIE_BY_ID';

export const requestApiDataAction = () => ({ type: REQUEST_API_DATA });
export const receiveApiDataAction = data => ({ type: RECEIVE_API_DATA, data });

export const getAuthTokenAction = () => ({ type: GET_AUTH_TOKEN });
export const receiveRequestTokenAction = data => ({ type: RECEIVE_REQUEST_TOKEN, data });

export const getPopularMoviesAction = () => ({ type: GET_POPULAR_MOVIES });
export const receivePopularMoviesAction = data => ({ type: RECEIVE_POPULAR_MOVIES, data });

export const requestSearchResultAction = (query, page) => ({ type: GET_SEARCH_RESULT, query, page }); 
export const receiveSearchResultAction = data => ({ type: RECEIVE_MOVIE_SEARCH, data }); 

export const requestRandomMovieSearch = () => ({ type: GET_RANDOM_MOVIE_SEARCH });
export const receiveRandomMovieSearch = data => ({ type: RECEIVE_RANDOM_MOVIE_SEARCH, data});

export const requestSessionId = data => ({ type: REQUEST_SESSION_ID, data });

export const getMovieById = id => ({ type: GET_MOVIE_BY_ID, id });
export const receiveMovieById = data => ({ type: RECEIVE_MOVIE_BY_ID, data });