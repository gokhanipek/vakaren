import { call, put, takeEvery, takeLatest } from "redux-saga/effects";

import { REQUEST_API_DATA, receiveApiData, GET_AUTH_TOKEN, RECEIVE_REQUEST_TOKEN,receiveRequestToken } from "./actions";

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

export const getAuthToken = () => {
  // first step in authentication process; get temporary request_token
  fetch(`https://api.themoviedb.org/3/authentication/token/new?api_key=${apiKey}`)
      .then(response => response.json())
      .then(response => {
          const location = window.location;
          const { request_token } = response;
          // after getting the temporary request_token, redirect the user to allow or deny the token
          // after the user action on the TMDB site is finished, the user is redirected back to the same Movie Shrine page
          window.location = `https://www.themoviedb.org/authenticate/${request_token}?redirect_to=${location}authenticated`;
      })
      .catch(error => console.log(error));
};

// worker Saga: will be fired on USER_FETCH_REQUESTED actions

function* getApiData(action) {
  try {
    // do api call
    const data = yield call(fetchData);
    yield put(receiveApiData(data));
  } catch (e) {
    console.log(e);
  }
}



/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/

export default function* requestApiData() {
  yield takeLatest( REQUEST_API_DATA, getApiData );
  yield takeLatest( GET_AUTH_TOKEN, getAuthToken );
}
