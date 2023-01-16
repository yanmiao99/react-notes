const {createProxyMiddleware} = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        // 跨域处理
        createProxyMiddleware('/v1/react-job/api/v1/', {
            target: 'http://localhost:3221',
            changeOrigin: true,
        }),
        createProxyMiddleware('/tripartite', {
            target: 'https://v.api.aa1.cn/api/',
            changeOrigin: true,
            pathRewrite:{
                "^/tripartite":""
            }
        })
    );
};
