import { combineReducers } from 'redux';
import { songReducer } from './songReducer';
import { xivReducer } from './xivReducer';

export const rootReducer = combineReducers({
  songReducer,
  xivReducer
});