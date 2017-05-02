import {
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER
} from './types';

// attempting to login
export const request = (state) => {
  return {
    type: LOGIN_USER,
    payload: state
  };
};

export const success = (state) => {
  return {
    type: LOGIN_USER_SUCCESS,
    payload: state
  };
};

export const failure = (state) => {
  return {
    type: LOGIN_USER_FAIL,
    payload: state
  };
};
