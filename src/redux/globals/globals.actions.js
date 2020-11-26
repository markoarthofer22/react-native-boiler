import { SET_GLOBALS } from "./globals.types";
import mainApi from "../apis/main-api";
import _ from "underscore";

export const setGlobals = (_globals) => {
    return {
        type: SET_GLOBALS,
        payload: _globals
    };
};
