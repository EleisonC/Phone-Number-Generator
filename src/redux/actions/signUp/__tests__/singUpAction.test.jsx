/* eslint-disable no-undef */
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk';
import moxios from 'moxios';
import axios from 'axios';

import { SIGNUP } from '../../actionTypes';
import { signUpAction } from '../signUpActions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('register a user', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });
  it('sign up a user', () => {
    const newUser = {
      Chris: 1234,
    };
    const expectedActions = [
      { type: SIGNUP, payload: newUser },
    ];
    const store = mockStore({
      userData: {
        registered: {

        },
      },
    });
    store.dispatch(signUpAction('Chris', 1234));
    expect(store.getActions()).toEqual(expectedActions);
  });
});
