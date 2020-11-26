import React from "react";
import { StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";

const LinkButton = (props) => {
    const { linkText, linkStyle, customStyle, onPressCallback } = props;

    return (
        <TouchableOpacity
            style={customStyle ? StyleSheet.flatten(style.link, customStyle) : style.link}
            onPress={onPressCallback && ((e) => onPressCallback(e))}
        >
            {linkText ? (
                <Text style={linkStyle ? linkStyle : style.linkText}>{linkText}</Text>
            ) : (
                <Text>Please provide label!</Text>
            )}
        </TouchableOpacity>
    );
};

const style = StyleSheet.create({
    link: {
        padding: 5
    },

    linkText: {
        textAlign: "center",
        color: "#1b49c4"
    }
});

export default LinkButton;
