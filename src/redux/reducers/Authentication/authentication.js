import SIGNUP from '../../actions/actionTypes';

const initialState = {
  registered: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP: {
      const user = action.payload;

      return {
        ...state,
        registered: {
          ...state.registered,
          ...user,
        },
      };
    }
    default:
      return state;
  }
};
