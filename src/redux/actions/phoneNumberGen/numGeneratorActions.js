/* eslint-disable import/prefer-default-export */
import { NUMBER_GENERATOR, CLEARDATA } from '../actionTypes';

const generatePhoneNumbers = response => ({
  type: NUMBER_GENERATOR,
  payload: response,
});
const clearPhoneNumbers = () => ({
  type: CLEARDATA,
});
// I have clean code

export const phoneNumberGenAction = data => (dispatch) => {
  if (data === 'clear') {
    dispatch(clearPhoneNumbers());
  } else {
    dispatch(generatePhoneNumbers(data));
  }
};
