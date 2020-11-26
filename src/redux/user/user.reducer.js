import { USER_SIGN_UP, USER_LOG_IN, USER_SET_ERROR } from "./user.types";

const INITIAL_STATE = {
    user: {
        isUserLogged: null
    },
    errorMessage: ""
};

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case USER_SIGN_UP:
            return {
                ...state,
                user: action.payload,
                errorMessage: ""
            };
        case USER_LOG_IN:
            return {
                ...state,
                user: action.payload,
                errorMessage: ""
            };
        case USER_SET_ERROR:
            return {
                ...state,
                errorMessage: action.payload
            };
        default:
            return state;
    }
};

export default userReducer;
