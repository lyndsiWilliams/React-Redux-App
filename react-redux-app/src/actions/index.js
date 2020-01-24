// Axios
import axios from 'axios';
// Destructuring fetch command names
// Members
export const FETCH_MEMBERS_START = "FETCH_MEMBERS_START";
export const FETCH_MEMBERS_SUCCESS = "FETCH_MEMBERS_SUCCESS";
export const FETCH_MEMBERS_FAILURE = "FETCH_MEMBERS_FAILURE";
// Songs
export const FETCH_SONGS_START = "FETCH_SONGS_START";
export const FETCH_SONGS_SUCCESS = "FETCH_SONGS_SUCCESS";
export const FETCH_SONGS_FAILURE = "FETCH_SONGS_FAILURE";


export const getMembers = () => {
  return dispatch => {
    dispatch({ type: FETCH_MEMBERS_START });
    axios.get("https://xivapi.com/freecompany/9229142273877456802?data=FCM")
      .then(res => {
        console.log(res);
        dispatch({ type: FETCH_MEMBERS_SUCCESS, payload: res.data.FreeCompanyMembers });
      })
      .catch(err => {
        console.log(err.response);
        dispatch({
          type: FETCH_MEMBERS_FAILURE,
          payload: `${err.response.status} ${err.response.data}`
        });
      });
  };
};

export const getSongs = () => {
  return dispatch => {
    dispatch({ type: FETCH_SONGS_START });
    axios.get("https://xivapi.com/Orchestrion")
      .then(res => {
        console.log(res);
        dispatch({ type: FETCH_SONGS_SUCCESS, payload: res.data.Results });
      })
      .catch(err => {
        console.log(err.response);
        dispatch({
          type: FETCH_SONGS_FAILURE,
          payload: `${err.response.status} ${err.response.data}`
        });
      });
  };
};