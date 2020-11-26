import React from "react";
import { StyleSheet, ActivityIndicator } from "react-native";
import MapView, { Polyline, Circle } from "react-native-maps";

// redux
import { useSelector } from "react-redux";
import {
    locationState as _locationState,
    userCurrentLocation
} from "../redux/location/location.selectors";

const Map = () => {
    const currentLocation = useSelector(userCurrentLocation);
    const locationState = useSelector(_locationState);

    if (!currentLocation) {
        return <ActivityIndicator size="large" style={{ marginTop: 200 }} />;
    }
    return (
        <MapView
            initialRegion={{
                ...currentLocation.coords,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01
            }}
            style={style.map}
        >
            <Circle
                center={currentLocation.coords}
                radius={14}
                strokeColor="rgba(158,158,255, 1)"
                fillColor="rgba(158,158,255, .3)"
            />
            <Polyline coordinates={locationState?.locations?.map((loc) => loc.coords)} />
        </MapView>
    );
};

const style = StyleSheet.create({
    map: {
        height: 300
    }
});

export default Map;
