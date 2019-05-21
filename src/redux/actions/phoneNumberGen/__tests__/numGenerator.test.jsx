/* eslint-disable no-undef */
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import axios from 'axios';

import { NUMBER_GENERATOR, CLEARDATA } from '../../actionTypes';
import { phoneNumberGenAction } from '../numGeneratorActions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('register a user', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });
  it('Generate phone numbers', () => {
    const nums = new Set(['0787609876', '0787654389']);
    const expectedActions = [
      { type: NUMBER_GENERATOR, payload: nums },
    ];
    const store = mockStore({
      generatedNumber: {
        generatedNumbers: [],
      },
    });
    store.dispatch(phoneNumberGenAction(nums));
    expect(store.getActions()).toEqual(expectedActions);
  });
  it('Clear all data', () => {
    const expectedActions = [
      { type: CLEARDATA },
    ];
    const store = mockStore({
      generatedNumber: {
        generatedNumbers: [],
      },
    });
    store.dispatch(phoneNumberGenAction('clear'));
    expect(store.getActions()).toEqual(expectedActions);
  });
});
