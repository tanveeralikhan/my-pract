import { createStore, applyMiddleware } from "redux";
//import { thunk } from "redux-thunk";

import rootReducer from "./reducers/rootReducer";

// Meet thunks.
// A thunk in this context is a function that can be dispatched to perform async
// activity and can dispatch actions and read state.
// This is an action creator that returns a thunk:

const store = createStore(rootReducer /* applyMiddleware(thunk) */);

export default store;
