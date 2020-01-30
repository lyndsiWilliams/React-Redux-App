import {
  FETCH_SONGS_START,
  FETCH_SONGS_SUCCESS,
  FETCH_SONGS_FAILURE
} from '../actions';

const initialState = {
  songs: [],
  error: "",
  isFetching: false
};

export function songReducer(state=initialState, action) {
  console.log(state);
  switch (action.type) {
    case FETCH_SONGS_START:
      return {
        ...state,
        error: "",
        isFetching: true
      };
    case FETCH_SONGS_SUCCESS:
      return {
        ...state,
        error: "",
        isFetching: false,
        songs: action.payload
      };
    case FETCH_SONGS_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetching: false
      }
    default:
      return state;
  };
};