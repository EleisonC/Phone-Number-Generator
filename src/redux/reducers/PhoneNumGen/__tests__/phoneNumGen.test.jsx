/* eslint-disable no-undef */
import reducer from '../phoneNumGen';
import { NUMBER_GENERATOR, CLEARDATA } from '../../../actions/actionTypes';

describe('authentication reducers', () => {
  const initialState = {
    generatedNumbers: [],
  };
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });
  it('handles NUMBER_GENERATOR', () => {
    const nums = new Set(['0787609876', '0787654389']);
    const startAction = {
      type: NUMBER_GENERATOR,
      payload: nums,
    };
    expect(reducer(initialState, startAction)).toEqual({ generatedNumbers: ['0787609876', '0787654389'] });
  });
  it('handles CLEARDATA', () => {
    const startAction = {
      type: CLEARDATA,
    };
    expect(reducer(initialState, startAction)).toEqual({ generatedNumbers: [] });
  });
});
