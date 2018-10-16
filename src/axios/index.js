import axios from 'axios'

// axios 配置
axios.defaults.timeout = 5000; 
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
axios.defaults.baseURL = 'http://localhost:8008';

// 添加一个请求拦截器
axios.interceptors.request.use(function (config) {
    // 请求发送之前的处理
    
    return config;
  }, function (error) {
    // 请求错误时的处理

    return Promise.reject(error);
  });

// 添加一个响应拦截器
axios.interceptors.response.use(function (response) {
    // 响应成功后的处理

    return response;
  }, function (error) {
    // 响应失败后的处理

    return Promise.reject(error);
  });