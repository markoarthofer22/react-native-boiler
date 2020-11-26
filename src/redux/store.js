import { createStore, applyMiddleware } from "redux";
import rootReducer from "./root-reducer";
import thunk from "redux-thunk";

const middleware = [thunk];

const store = createStore(rootReducer, window.INITIAL_STATE || {}, applyMiddleware(...middleware));

export default store;
