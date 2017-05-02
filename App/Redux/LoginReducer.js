import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER
} from './types';

const INITIAL_STATE = {
  email: '',
  password: '',
  user: null,
  error: '',
  fetching: false
};

export default (state = INITIAL_STATE, action) => {
  // console.log(action);
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, error: '', fetching: true };
    case LOGIN_USER_SUCCESS:
      return { ...state, ...INITIAL_STATE, user: action.payload };
    case LOGIN_USER_FAIL:
      return { ...state, error: 'Authentication Failed.', password: '', fetching: false };
    default:
      return state;
  }
};
