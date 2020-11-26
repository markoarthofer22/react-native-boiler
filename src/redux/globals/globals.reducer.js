import { SET_GLOBALS } from "./globals.types";

const INITIAL_STATE = {
    globals: null
};

const globalsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_GLOBALS:
            return {
                ...state,
                globals: action.payload
            };
        default:
            return state;
    }
};

export default globalsReducer;
