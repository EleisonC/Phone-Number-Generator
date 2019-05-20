/* eslint-disable import/prefer-default-export */
import { SIGNUP } from '../actionTypes';

const signUp = response => ({
  type: SIGNUP,
  payload: response,
});

const signUpAction = (username, password) => (dispatch) => {
  const newUser = {
    [username]: password,
  };
  dispatch(signUp(newUser));
};


export { signUpAction };
