/*
* axios 二次封装
* */

// 引入文件
import axios from "axios"
// import config from "../../config/httpConfig"
// import router from "../router"
// import storage from "../utils/storage"

// 无效token
// const TOKEN_INVALID = 'Token认证失败, 请重新登陆'
// 请求异常
const NETWORK_ERROR = "网络异常,请稍后重试"

// 全局配置
const service = axios.create({
  // baseURL: config.baseApi,
  baseURL: '/api/v1',
  timeout: 8000,
})

// 请求拦截
service.interceptors.request.use((req) => {
  // const headers = req.headers
  // let token = ''
  // try {
  //   token = storage.getItem('userInfo').token
  // } catch (e) {
  //   token = 'yam'
  // }
  // if (!headers.Authorization) headers.Authorization = 'Bearer ' + token
  return req
})

// 响应拦截
service.interceptors.response.use((res: any) => {
  if (res.status === 200) {
    return res.data
  //   return data // 返回数据正确
  // } else if (code === 50001) {
  //   // ElMessage.error(TOKEN_INVALID) // Token 失效
  //   setTimeout(() => {
  //     // router.push("./login").then(() => Promise.reject(TOKEN_INVALID))
  //   }, 2000)
  } else {
    // ElMessage.error(msg || NETWORK_ERROR) // 常规报错
    return Promise.reject(res.msg || NETWORK_ERROR)
  }
})

// request 方法
function request(options: any) {
  options.method = options.method || 'get'

  if (options.method.toLowerCase() === 'get') {
    options.params = options.data
  }

  // // 局部 mock
  // let isMock = config.mock
  // if (typeof options.mock !== 'undefined') {
  //   isMock = options.mock
  // }
  //
  // if (config.env === 'prod') {
  //   service.defaults.baseURL = config.baseApi
  // } else {
  //   service.defaults.baseURL = isMock ? config.mockApi : config.baseApi
  // }

  return service(options)
}

// 使用对象的方式调用
['get', 'post', 'put', 'delete', 'patch'].forEach(item => {
  request[item] = (url: string, data: object, options: any) => {
    return request({
      url,
      data,
      method: item,
      ...options
    })
  }
})

export default request
