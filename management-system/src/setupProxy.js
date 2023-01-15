const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/v1/react-job/api/v1/',
        createProxyMiddleware({
            target: 'http://localhost:3221',
            changeOrigin: true,
            // pathRewrite:{
            //     '^/v1/react-job/api/v1/':''
            // }
        }),
        'v.api.aa1.cn',
        createProxyMiddleware({
            target: 'https://v.api.aa1.cn',
            changeOrigin: true,
        })
    );
};
