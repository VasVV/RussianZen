import { combineReducers } from 'redux';
import sound from './sound';
import background from './background';

export default combineReducers({
    sound,
    background
  })