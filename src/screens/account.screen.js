import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "react-native-elements";

// redux
import { useDispatch } from "react-redux";
import { logoutCurrentUser } from "../redux/user/user.actions";

// components
import Spacer from "../components/spacer.components";

const Account = () => {
    const dispatch = useDispatch();

    return (
        <SafeAreaView forceInset={{ top: "always" }}>
            <Text style={{ fontSize: 50 }}>Account</Text>
            <Spacer>
                <Button title="Sing Out" onPress={() => dispatch(logoutCurrentUser())} />
            </Spacer>
        </SafeAreaView>
    );
};

const style = StyleSheet.create({});

export default Account;
