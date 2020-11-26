import React, { useState, useEffect } from "react";
import { requestPermissionsAsync, watchPositionAsync, Accuracy } from "expo-location";

export default (startTracking, callback) => {
    const [locationError, setLocationError] = useState(null);
    // const [subscriber, setSubscriber] = useState(null);

    let subscriber;

    const grantLocationPremission = async () => {
        const { granted } = await requestPermissionsAsync();

        if (!granted) {
            setLocationError("Location Permission not allowed");
            return;
        }
        subscriber = await watchPositionAsync(
            {
                accuracy: Accuracy.BestForNavigation,
                timeInterval: 1000,
                distanceInterval: 10
            },
            // because callback is here it has
            // access to response from watchPositionAsync
            callback
        );
    };

    useEffect(() => {
        if (startTracking) {
            grantLocationPremission();
        } else {
            if (subscriber) subscriber.remove();
            subscriber = null;
        }

        // callback is a prop, so we can watch UseEffect on change of that prop
        return () => {
            if (subscriber) subscriber.remove();
        };
    }, [startTracking, callback]);

    return [locationError];
};
