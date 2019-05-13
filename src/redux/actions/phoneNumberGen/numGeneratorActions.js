/* eslint-disable import/prefer-default-export */
import { NUMBER_GENERATOR } from '../actionTypes';

const generatePhoneNumbers = response => ({
  type: NUMBER_GENERATOR,
  payload: response,
});

export const phoneNumberGenAction = data => (dispatch) => {
  dispatch(generatePhoneNumbers(data));
};
