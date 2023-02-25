module.exports = (app)=>{
    // 用户管理
    app.router.get('/api/v1/userManager', app.controller.userManagerController.index);
    app.router.post('/api/v1/userManager', app.controller.userManagerController.create);
    app.router.delete('/api/v1/userManager/:id', app.controller.userManagerController.destroy);
    app.router.delete('/api/v1/userManager', app.controller.userManagerController.destroy);
    app.router.put('/api/v1/userManager/:id', app.controller.userManagerController.update);
}
