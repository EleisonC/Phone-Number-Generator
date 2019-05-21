/* eslint-disable no-undef */
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk';
import moxios from 'moxios';
import axios from 'axios';

import { LOGIN, CLEARDATA } from '../../actionTypes';
import { loginAction } from '../loginActions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('register a user', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });
  it('login a user', () => {
    const loginUser = {
      Chris: 1234,
    };
    const expectedActions = [
      { type: LOGIN, payload: loginUser },
    ];
    const store = mockStore({
      userData: {
        registered: {
          chris: '1234',
        },
        currentUser: {

        },
      },
    });
    store.dispatch(loginAction(null, 'Chris', 1234));
    expect(store.getActions()).toEqual(expectedActions);
  });
  it('login a user', () => {
    const expectedActions = [
      { type: CLEARDATA },
    ];
    const store = mockStore({
      userData: {
        registered: {
          chris: '1234',
        },
        currentUser: {

        },
      },
    });
    store.dispatch(loginAction('clear', null, null));
    expect(store.getActions()).toEqual(expectedActions);
  });
});
