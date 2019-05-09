import SIGNUP from '../actionTypes';

const signUp = response => ({
  type: SIGNUP,
  payload: response,
});

const signUpAction = (username, password) => (dispatch) => {
  console.log(username, password, '************');
  const newUser = {
    [username]: password,
  };
  dispatch(signUp(newUser));
};

const logoutAction = () => {
  localStorage.clear();
};

export { signUpAction, logoutAction };
