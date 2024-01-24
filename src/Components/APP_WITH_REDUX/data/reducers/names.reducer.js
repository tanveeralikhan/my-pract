import { GET_NAMES } from "../actions/actions.type";

const INITIAL_STATE = {};

const namesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_NAMES:
      return {
        ...state,
      };

    default:
      return state;
  }
};

export default namesReducer;
