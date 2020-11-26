import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// components
import SingIn from "../screens/singin.screen";
import SingUp from "../screens/singup.screen";

const LoginFlow = (props) => {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Register"
                component={SingUp}
                options={{
                    title: "My home",
                    headerStyle: {
                        backgroundColor: "#1b49c4"
                    },
                    headerTintColor: "#fff",
                    headerTitleStyle: {
                        fontWeight: "bold"
                    }
                }}
            />
            <Stack.Screen name="Login" component={SingIn} />
        </Stack.Navigator>
    );
};

export default LoginFlow;
