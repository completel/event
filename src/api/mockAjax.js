import axios from "axios";

const request = axios.create({
    baseURL: '/mock',
    timeout: 5000,
})

// 添加请求拦截器
request.interceptors.request.use((config) => {
    return config;
}, (err) => {
    // 失败的回调
    return Promise.reject(err);
})

// 添加响应拦截器
request.interceptors.response.use((response) => {
    return response;
}, (err) => {
    return Promise.reject(err);
})

export default request;