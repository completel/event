import axios from "axios";
import nProgress from "nprogress"; // 引入进度条
import "nprogress/nprogress.css"; // 引入进度条样式

const request = axios.create({
    baseURL: '/mock',
    timeout: 5000,
})

// 添加请求拦截器
request.interceptors.request.use((config) => {
    nProgress.start();
    return config;
}, (err) => {
    // 失败的回调
    return Promise.reject(err);
})

// 添加响应拦截器
request.interceptors.response.use((response) => {
    nProgress.done();
    return response;
}, (err) => {
    return Promise.reject(err);
})

export default request;