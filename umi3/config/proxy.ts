export default {
  '/api': {
    target: 'https://127.0.0.1:9001',
    https: true,
    changeOrigin: true,
    pathRewrite: {
      '^/api': ''
    }
  }
}
