import axios from "axios";

const myAxios = axios.create({
    baseURL: 'http://localhost:8080/api'
});

// 配置向后台发送消息的时候允许携带 cookie
myAxios.defaults.withCredentials = true;

// Add a request interceptor  - 全局请求拦截器
myAxios.interceptors.request.use(function (config) {
    console.log("请求发送前 - 拦截器", config);
    // Do something before request is sent
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor - 全局响应拦截器
myAxios.interceptors.response.use(function (response) {
    console.log("请求发送后 - 拦截器");
    // Do something with response data
    // data 被 axios 封装
    return response.data;
}, function (error) {
    // Do something with response error
    return Promise.reject(error);
});

export default myAxios;