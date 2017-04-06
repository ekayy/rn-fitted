import { combineReducers } from 'redux';
import LoginReducer from './LoginReducer';

// our state from redux
export default combineReducers({
  login: LoginReducer
});
