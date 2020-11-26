import "react-native-gesture-handler";

import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// redux
import { Provider } from "react-redux";
import store from "./src/redux/store";
import { navigationRef, isMountedRef } from "./src/redux/navigationRef";

// Navigation routes
import LoginFlow from "./src/navigation/loginFlow.navigation";
import MainFlow from "./src/navigation/mainFlow.navigation";

// components
import LoadingScreen from "./src/screens/loading.screen";

const MainStack = createStackNavigator();

export default () => {
    useEffect(() => {
        isMountedRef.current = true;

        return () => (isMountedRef.current = false);
    }, []);

    return (
        <Provider store={store}>
            <NavigationContainer ref={navigationRef}>
                <MainStack.Navigator
                    headerMode="none"
                    name="MainNavigator"
                    initialRouteName="LoadingScreen"
                >
                    <MainStack.Screen name="LoadingScreen" component={LoadingScreen} />
                    <MainStack.Screen name="LoginFlow" component={LoginFlow} />
                    <MainStack.Screen name="MainFlow" component={MainFlow} />
                </MainStack.Navigator>
            </NavigationContainer>
        </Provider>
    );
};
