/*
* axios 二次封装
* */

// 引入文件
import axios, {AxiosRequestConfig} from "axios"

// 全局配置
const service = axios.create({
  baseURL: '/api',
  timeout: 8000,
})

// request 方法
function request(options: AxiosRequestConfig<any>) {
  options.method = options.method || 'get'

  if (options.method.toLowerCase() === 'get') {
    options.params = options.data
  }

  return service(options)
}

// 使用对象的方式调用
['get', 'post', 'put', 'delete', 'patch'].forEach(item => {
  // @ts-ignore
  request[item] = (url: any, data: any, options: AxiosRequestConfig<any>) => {
    return request({
      url,
      data,
      method: item,
      ...options
    })
  }
})

export default request
