import {
  FETCH_MEMBERS_START,
  FETCH_MEMBERS_SUCCESS,
  FETCH_MEMBERS_FAILURE,
  FETCH_SONGS_START,
  FETCH_SONGS_SUCCESS,
  FETCH_SONGS_FAILURE
} from '../actions/xivActions';

const initialMemberState = {
  freeCompanyMembers: [],
  error: "",
  isFetching: false
};

const initialSongState = {
  songs: [],
  error: "",
  isFetching: false
};

function xivReducer(state=initialMemberState, action) {
  console.log(state);
  switch (action.type) {
    case FETCH_MEMBERS_START:
      return {
        ...state,
        error: "",
        isFetching: true
      };
    case FETCH_MEMBERS_SUCCESS:
      return {
        ...state,
        error: "",
        isFetching: false,
        freeCompanyMembers: action.payload
      };
    case FETCH_MEMBERS_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetching: false
      };
    default:
      return state;
  }
}

function songReducer(state=initialSongState, action) {
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
  }
}

export default xivReducer;