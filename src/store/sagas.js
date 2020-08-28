import { call, put, takeEvery, takeLatest, take } from "redux-saga/effects";

import { REQUEST_API_DATA, receiveApiDataAction, receiveSearchResultAction, GET_AUTH_TOKEN, GET_POPULAR_MOVIES, GET_SEARCH_RESULT } from "./actions";

const apiKey = process.env.REACT_APP_API_KEY; 
console.warn(process.env.REACT_APP_API_KEY);

export const fetchData = async () => {
  try {    
    const response = await fetch(`https://api.themoviedb.org/3/movie/550?api_key=${apiKey}`)
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};


//authentication
export const getAuthToken = () => {
  fetch(`https://api.themoviedb.org/3/authentication/token/new?api_key=${apiKey}`)
      .then(response => response.json())
      .then(response => {
          const location = window.location;
          const { request_token } = response;
          window.location = `https://www.themoviedb.org/authenticate/${request_token}?redirect_to=${location}`;
      })
      .catch(error => console.log(error));
};

export const requestMovieSearch = ({keyword, page}) => {
  try {
    const response = fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${keyword}&page=${'1'}&include_adult=false`);
    const data = response.json();
    return data;
  } catch (e) {
    console.log(e);
  }
}

//get popular movies

export const receivePopularMovies = async () => {
  try {    
    const response = await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}`)
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};

function* getPopularMovies(action) {
  try {
    // do api call
    const data = yield call(fetchData);
    yield put(receiveApiDataAction(data));
  } catch (e) {
    console.log(e);
  }
}

function* getMovieSearch({keyword}) {
  try {
    // do api call
    const data = yield call(requestMovieSearch, keyword);
    yield put(receiveSearchResultAction(data));
  } catch (e) {
    console.log(e);
  }
}



// worker Saga: will be fired on USER_FETCH_REQUESTED actions

function* getApiData(action) {
  try {
    // do api call
    const data = yield call(fetchData);
    yield put(receiveApiDataAction(data));
  } catch (e) {
    console.log(e);
  }
}


export default function* requestApiData() {
  yield takeLatest( REQUEST_API_DATA, getApiData );
  yield takeLatest( GET_AUTH_TOKEN, getAuthToken );
  yield takeLatest( GET_POPULAR_MOVIES, getPopularMovies );
  yield takeLatest( GET_SEARCH_RESULT, getMovieSearch )
}
