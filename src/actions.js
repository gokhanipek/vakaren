export const REQUEST_API_DATA = "REQUEST_API_DATA";
export const RECEIVE_API_DATA = "RECEIVE_API_DATA";
export const GET_AUTH_TOKEN = 'GET_AUTH_TOKEN';
export const RECEIVE_REQUEST_TOKEN = 'RECEIVE_REQUEST_TOKEN';

export const requestApiData = () => ({ type: REQUEST_API_DATA });
export const receiveApiData = data => ({ type: RECEIVE_API_DATA, data });
export const getAuthToken = () => ({ type: GET_AUTH_TOKEN });
export const receiveRequestToken = data => ({ type: RECEIVE_REQUEST_TOKEN, data });


