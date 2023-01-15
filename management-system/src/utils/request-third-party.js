/*
* axios 二次封装 ( 请求网络开源项目 )
* */

// 引入文件
import axios from "axios"

// 全局配置
const service = axios.create({
    timeout: 8000,
})

// request 方法
function requestThirdParty(options) {
    options.method = options.method || 'get'

    if (options.method.toLowerCase() === 'get') {
        options.params = options.data
    }

    return service(options)
}

// 使用对象的方式调用
['get', 'post', 'put', 'delete', 'patch'].forEach(item => {
    requestThirdParty[item] = (url, data, options) => {
        return requestThirdParty({
            url,
            data,
            method: item,
            ...options
        })
    }
})

export default requestThirdParty
