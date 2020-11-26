import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { checkIfUserIsLogged } from "../redux/user/user.actions";

const LoadingScreen = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(checkIfUserIsLogged());
    }, [dispatch]);

    return null;
};

export default LoadingScreen;
