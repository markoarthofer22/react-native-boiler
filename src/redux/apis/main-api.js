import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const API = "http://7f72ca0e7767.ngrok.io";

const instance = axios.create({
    baseURL: API
});

// IF TOKEN IS NEEDED
// instance.interceptors.request.use(
//     async (config) => {
//         const token = await AsyncStorage.getItem("jwt");
//         if (token) {
//             config.headers.Authorization = `Bearer ${token}`;
//         }

//         return config;
//     },
//     (err) => Promise.reject(err)
// );

export default instance;
