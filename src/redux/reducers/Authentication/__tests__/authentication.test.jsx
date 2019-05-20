/* eslint-disable no-undef */
import reducer from '../authentication';
import { SIGNUP, LOGIN, CLEARDATA } from '../../../actions/actionTypes';

describe('authentication reducers', () => {
  const initialState = {
    registered: {},
    currentUser: {},
  };
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });
  it('handles SIGNUP', () => {
    const newUser = {
      Chris: 1234,
    };
    const startAction = {
      type: SIGNUP,
      payload: newUser,
    };
    expect(reducer(initialState, startAction)).toEqual({ currentUser: {}, registered: { Chris: 1234 } });
  });
  it('handles LOGIN', () => {
    const newUser = {
      Chris: 1234,
    };
    const startAction = {
      type: LOGIN,
      payload: newUser,
    };
    expect(reducer(initialState, startAction)).toEqual({ currentUser: { Chris: 1234 }, registered: {} });
  });
  it('handles CLEARDATA', () => {
    const startAction = {
      type: CLEARDATA,
    };
    expect(reducer(initialState, startAction)).toEqual({ currentUser: {}, registered: {} });
  });
});
