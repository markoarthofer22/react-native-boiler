import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { View, StyleSheet } from "react-native";
import { Text, Input, Button } from "react-native-elements";
import { useIsFocused } from "@react-navigation/native";

// redux
import { setLoginData, clearErrorMessage } from "../redux/user/user.actions";
import { userErrorMessage } from "../redux/user/user.selectors";

// custom components
import Spacer from "../components/spacer.components";
import LinkButton from "../components/linkButton.component";

const SingIn = (props) => {
    const { navigation } = props;
    const dispatch = useDispatch();
    const isFocused = useIsFocused();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // selectors redux
    const userError = useSelector(userErrorMessage);

    const loginExistingUser = () => {
        const userData = {
            email: email,
            password: password
        };

        dispatch(setLoginData(userData));
    };

    useEffect(() => {
        dispatch(clearErrorMessage());
    }, [isFocused]);

    return (
        <View style={style.container}>
            {/* <NavigationEvents onWillFocus={() => dispatch(clearErrorMessage())} /> */}
            <Text style={style.mainTitle} h4>
                Welcome to Tracker
            </Text>
            <Text style={style.subTitle}>Please sing in</Text>
            <Spacer />
            <Input
                label="Email"
                value={email}
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="email-address"
                onChangeText={(e) => setEmail(e)}
            />
            <Spacer />
            <Input
                secureTextEntry
                textContentType="password"
                autoCapitalize="none"
                autoCorrect={false}
                label="Password"
                value={password}
                onChangeText={(e) => setPassword(e)}
            />
            {Boolean(userError) && <Text style={style.errorMessage}>{userError}</Text>}
            <Button buttonStyle={style.button} title="Login" onPress={() => loginExistingUser()} />
            <Spacer>
                <LinkButton
                    linkText="Don't have an account? Sing up here!"
                    linkStyle={style.linkText}
                    onPressCallback={() => navigation.navigate("Register")}
                />
            </Spacer>
        </View>
    );
};

SingIn.navigationOptions = () => {
    return {
        headerShown: false
    };
};

const style = StyleSheet.create({
    container: {
        marginTop: 100,
        paddingHorizontal: 15,
        flex: 1,
        justifyContent: "flex-start"
    },

    mainTitle: {
        textAlign: "center",
        marginTop: 10
    },

    subTitle: {
        fontSize: 14,
        textAlign: "center",
        fontWeight: "700",
        marginBottom: 20
    },

    button: {
        marginTop: 20
    },

    errorMessage: {
        backgroundColor: "#cc0011",
        borderRadius: 3,
        padding: 10,
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        fontSize: 10,
        fontWeight: "bold",
        textAlign: "center",
        textTransform: "uppercase"
    },

    linkText: {
        color: "#9803fc",
        fontSize: 15,
        textAlign: "center",
        fontWeight: "500"
    }
});

export default SingIn;
