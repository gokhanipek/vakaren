import { RECEIVE_API_DATA, RECEIVE_REQUEST_TOKEN } from "../actions";

export default (state = {}, { type, data }) => {
  switch (type) {
    case RECEIVE_API_DATA:
      return data;
    case RECEIVE_REQUEST_TOKEN:
      return data;
    default:
      return state;
  }
};
