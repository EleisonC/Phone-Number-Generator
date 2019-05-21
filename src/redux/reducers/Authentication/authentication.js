import { SIGNUP, LOGIN, CLEARDATA } from '../../actions/actionTypes';

const initialState = {
  registered: {},
  currentUser: {},
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
    case LOGIN: {
      const user = action.payload;
      return {
        ...state,
        currentUser: {
          ...user,
        },
      };
    }
    case CLEARDATA: {
      return {
        ...state,
        currentUser: {
        },
      };
    }
    default:
      return state;
  }
};
