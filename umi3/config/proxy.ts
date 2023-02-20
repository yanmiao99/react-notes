export default {
  '/api': {
    target: 'https://v.api.aa1.cn/',
    https: true,
    changeOrigin: true,
    pathRewrite: {
      // '^/api': ''
    }
  }
}
