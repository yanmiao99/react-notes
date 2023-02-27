/*
* 环境配置封装
* */
const env = process.env.NODE_ENV || 'prod'
//     MODE: "development"
const EnvConfig = {
  dev: { // 开发环境
    baseApi: '/api',
    mockApi: 'http://127.0.0.1:7001'
  },
  test: { // 测试环境
    baseApi: '/',
    mockApi: ''
  },
  prod: { // 线上环境
    baseApi: '/',
    mockApi: ''
  }
}


export default {
  env,
  namespace: 'manager',
  mock: false, // 是否启动全局 mock
  ...EnvConfig[env]
}
