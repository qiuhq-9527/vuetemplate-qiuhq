import axios from "axios";

const instance = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    timeout: 5000,
    withCredentials: false
});

instance.interceptors.request.use(function (config) {
    return config;
}, function (error) {

    return Promise.reject(error);
});

instance.interceptors.response.use(function onFulfilled(response) {
    return response.data;
}, function onRejected(error) {

    return Promise.reject(error);
});

export default instance
