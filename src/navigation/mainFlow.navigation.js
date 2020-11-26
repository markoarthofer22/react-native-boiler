import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// components
import Home from "../screens/home.screen";
import Account from "../screens/account.screen";
import { MaterialIcons } from "@expo/vector-icons";

const MainFlow = (props) => {
    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator
            tabBarOptions={{
                activeTintColor: "#1b49c4",
                inactiveTintColor: "gray"
            }}
        >
            <Tab.Screen
                name="StackFlow"
                component={StackFlow}
                options={{
                    title: "Home",
                    tabBarIcon: (_props) => (
                        <MaterialIcons name="format-list-bulleted" size={24} color={_props.color} />
                    )
                }}
            />

            <Tab.Screen
                name="Account"
                component={Account}
                options={{
                    title: "Home",
                    tabBarIcon: (_props) => (
                        <MaterialIcons name="format-list-bulleted" size={24} color={_props.color} />
                    )
                }}
            />
        </Tab.Navigator>
    );
};

const StackFlow = () => {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" options={{ title: "Home" }} component={Home} />
        </Stack.Navigator>
    );
};

export default MainFlow;
