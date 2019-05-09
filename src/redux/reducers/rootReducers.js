import { combineReducers } from 'redux';
import registeredUser from './Authentication/authentication';

export default combineReducers({
  userData: registeredUser,
});
