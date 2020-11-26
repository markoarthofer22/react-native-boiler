import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
    return (
        <SafeAreaView forceInset={{ top: "always" }}>
            <Text style={{ fontSize: 50 }}>Home</Text>
        </SafeAreaView>
    );
};

const style = StyleSheet.create({});

export default Home;
