// https://dev.to/bhatvikrant/how-to-setup-redux-with-react-2020-cdj

/**********Create Store***************/

/*    import { createStore } from 'redux';

    import rootReducer from './rootReducer';


    const store = createStore(rootReducer);


    export default store; */

/************* Root Reducer**************/

/* import { combineReducers } from 'redux';
import counterReducer from './Counter/counter.reducer';
    const rootReducer = combineReducers({
        counter: counterReducer,
    });
    export default rootReducer;  */

/************ Step 4: Setup counter reducer/actions/types ************/

/* export const INCREMENT = 'INCREMENT';

    export const DECREMENT = 'DECREMENT'; */

/************ Step 5: Setup Create Actions ************/

/* import { INCREMENT, DECREMENT } from "./counter.types";

export const increaseCounter = () => {
  return {
    type: INCREMENT,
  };
};

export const decreaseCounter = () => {
  return {
    type: DECREMENT,
  };
}; */

/************ Step 6: Setup Create Reducers ************/

/* import { INCREMENT, DECREMENT } from "./counter.types";

const INITIAL_STATE = {
  count: 0,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };

    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };

    default:
      return state;
  }
};

export default reducer; */

/************ Step 7: Use In component ************/
/* function App() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increaseCounter());
  };

  const handleDecrement = () => {
    dispatch(decreaseCounter());
  };
} */
