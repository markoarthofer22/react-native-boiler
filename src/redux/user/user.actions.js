import { USER_SIGN_UP, USER_LOG_IN, USER_SET_ERROR } from "./user.types";
import mainApi from "../apis/main-api";

// third party
import _ from "underscore";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { navigate } from "../navigationRef";

export const setSignUpData = (_userInfo) => {
    return async (dispatch) => {
        await mainApi
            .post("/signup", { ..._userInfo })
            .then((response) => {
                AsyncStorage.setItem("jwt", response.data.token);
                dispatch({
                    type: USER_SIGN_UP,
                    payload: {
                        isUserLogged: response.data.token
                    }
                });
                // navigate("StackFlow", "MainFlow");
            })
            .catch((err) => {
                if (err) {
                    dispatch({
                        type: USER_SET_ERROR,
                        payload: "Something went wrong with sing up!"
                    });
                }
            });
    };
};

export const setLoginData = (_userInfo) => {
    return async (dispatch) => {
        await mainApi
            .post("/singin", { ..._userInfo })
            .then((response) => {
                AsyncStorage.setItem("jwt", response.data.token);
                dispatch({
                    type: USER_LOG_IN,
                    payload: {
                        isUserLogged: response.data.token
                    }
                });
                // navigate("TracksScreenFlow", "MainFlow");
            })
            .catch((err) => {
                if (err) {
                    dispatch({
                        type: USER_SET_ERROR,
                        payload: "Something went wrong with sing in!"
                    });
                }
            });
    };
};

export const logoutCurrentUser = () => {
    return async (dispatch) => {
        await AsyncStorage.removeItem("jwt");
        dispatch({
            type: USER_LOG_IN,
            payload: {
                isUserLogged: null
            }
        });
        // navigate("Login", "LoginFlow");
    };
};

export const clearErrorMessage = () => {
    return {
        type: USER_SET_ERROR,
        payload: ""
    };
};

export const checkIfUserIsLogged = () => {
    return async (dispatch) => {
        const token = await AsyncStorage.getItem("jwt");

        if (token) {
            dispatch({
                type: USER_LOG_IN,
                payload: {
                    isUserLogged: token
                }
            });
            // navigate("TracksScreenFlow", "MainFlow");
        } else {
            // navigate("Register", "LoginFlow");
        }
    };
};
