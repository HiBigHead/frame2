import axios from 'axios'
var instance = axios.create({
    baseURL: '',
    timeout: 5000
});
// 添加请求拦截器
instance.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response;
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});
export default function (config) {
    let _config = {
        url: '',
        method: 'get'
    }
    _config=Object.assign(_config,config)
    _config.params = _config.params
        ? _config.filter
            ? _config.filter.request(JSON.parse(JSON.stringify(_config.params)))
            : _config.params
        : ''
    if (_config.method.toLowerCase() != 'get') {
        _config.data = _config.params
        _config.params = {}
    }
    return new Promise((resolve, reject) => {
        return instance(_config)
            .then(response => {
                resolve(_config.filter ? _config.filter.response(response.data) : response.data)
            })
            .catch(error => {
                reject(error)
            })
    })
}