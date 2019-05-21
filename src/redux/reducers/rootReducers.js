import { combineReducers } from 'redux';
import registeredUser from './Authentication/authentication';
import generatedNumber from './PhoneNumGen/phoneNumGen';

export default combineReducers({
  userData: registeredUser,
  generatedNumber,
});
