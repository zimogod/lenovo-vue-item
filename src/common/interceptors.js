/**
 * http配置
 */
import axios from 'axios';
// 超时时间
axios.defaults.timeout = 5000;
// http请求拦截器
var loadinginstace;
axios.interceptors.request.use(config => {
    console.log('request config', config);
    return config;
}, error => {
    console.log('request error', config);
    return Promise.reject(error);
});
// http响应拦截器
axios.interceptors.response.use(data => {
    console.log('response data', data);
    return data;
}, error => {
    console.log('response error', error);
    return Promise.reject(error);
});
export default axios;