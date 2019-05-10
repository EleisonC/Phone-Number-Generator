/* eslint-disable import/prefer-default-export */
import { LOGIN } from '../actionTypes';

const login = response => ({
  type: LOGIN,
  payload: response,
});

export const loginAction = (username, password) => (dispatch) => {
  console.log(username, password, '************');
  const newUser = {
    [username]: password,
  };
  dispatch(login(newUser));
};
