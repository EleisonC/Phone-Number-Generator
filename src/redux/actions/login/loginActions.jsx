/* eslint-disable import/prefer-default-export */
import { LOGIN, CLEARDATA } from '../actionTypes';

const login = response => ({
  type: LOGIN,
  payload: response,
});

const clearCurrentUser = () => ({
  type: CLEARDATA,
});

export const loginAction = (data, username, password) => (dispatch) => {
  if (data === 'clear') {
    dispatch(clearCurrentUser());
  } else {
    const newUser = {
      [username]: password,
    };
    dispatch(login(newUser));
  }
};
