import { NUMBER_GENERATOR } from '../../actions/actionTypes';

const initialState = {
  generatedNumbers: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case NUMBER_GENERATOR: {
      return {
        ...state,
        generatedNumbers: [
          ...state.generatedNumbers,
          ...action.payload,
        ],
      };
    }
    default:
      return state;
  }
};
