/*
* axios 二次封装
* */

// 引入文件
import axios from "axios"
import {message} from "antd";
import storage from "./storage"

// 无效token
const TOKEN_INVALID = 'Token认证失败, 请重新登录'
// 请求异常
const NETWORK_ERROR = "网络异常,请稍后重试"

// 全局配置
const service = axios.create({
    baseURL: '/v1/react-job/api/v1/',
    timeout: 8000,
})

// 请求拦截
service.interceptors.request.use((req) => {
    const headers = req.headers
    let token = ''
    try {
        token = storage.getItem('token')
    } catch (e) {
        token = 'yam'
    }
    if (!headers.Authorization) headers.Authorization = 'Bearer ' + token
    return req
})

// 响应拦截
service.interceptors.response.use((res) => {
        return res
    },
    (error) => {
        if (error.response.status === 401) {
            message.error(TOKEN_INVALID)
        } else {
            message.error(error.response.data.msg || NETWORK_ERROR)
        }
        return Promise.reject(error.response.data.msg || NETWORK_ERROR)
    }
)

// request 方法
function request(options) {
    options.method = options.method || 'get'

    if (options.method.toLowerCase() === 'get') {
        options.params = options.data
    }

    return service(options)
}

// 使用对象的方式调用
['get', 'post', 'put', 'delete', 'patch'].forEach(item => {
    request[item] = (url, data, options) => {
        return request({
            url,
            data,
            method: item,
            ...options
        })
    }
})

export default request
