import { combineReducers } from "redux";

// reducers
import globalsReducer from "./globals/globals.reducer";
import userReducer from "./user/user.reducer";

export default combineReducers({
    globals: globalsReducer,
    user: userReducer
});
