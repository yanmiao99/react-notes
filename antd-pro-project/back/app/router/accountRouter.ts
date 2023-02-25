module.exports = (app)=>{
    // 注册用户
    app.router.post('/api/v1/register', app.controller.userController.create);
    // 用户登录
    app.router.post('/api/v1/login', app.controller.userController.index);
    // 获取当前用户信息
    app.router.get('/api/v1/currentUser', app.controller.userController.currentUser);
    // 三方登录
    app.router.get('/api/v1/github', app.controller.githubController.getLoginView);
    app.router.get('/api/v1/github/callback', app.controller.githubController.getAccessToken);
    // 找回密码
    app.router.post('/api/v1/reset', app.controller.userController.reset);
}
