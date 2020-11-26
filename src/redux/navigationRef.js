import React from "react";

export const navigationRef = React.createRef();
export const isMountedRef = React.createRef();

export const navigate = (_name, _navigator = "MainNavigator", _params) => {
    if (isMountedRef.current && navigationRef.current) {
        // Perform navigation if the app has mounted
        navigationRef.current.navigate(_navigator, {
            screen: _name,
            params: _params
        });
    } else {
        // You can decide what to do if the app hasn't mounted
        // You can ignore this, or add these actions to a queue you can call later
    }
};
