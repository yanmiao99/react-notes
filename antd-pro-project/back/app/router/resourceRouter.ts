module.exports = (app)=>{
    // 权限管理
    app.router.get('/api/v1/resourceManager', app.controller.resourceManagerController.index);
    app.router.get('/api/v1/resourceManager/:level', app.controller.resourceManagerController.permission2level);
    app.router.post('/api/v1/resourceManager', app.controller.resourceManagerController.create);
    app.router.delete('/api/v1/resourceManager/:id', app.controller.resourceManagerController.destroy);
    app.router.delete('/api/v1/resourceManager', app.controller.resourceManagerController.destroy);
    app.router.put('/api/v1/resourceManager/:id', app.controller.resourceManagerController.update);

    // 分配权限
    app.router.put('/api/v1/roleResourceManager/:roleId', app.controller.roleResourceManagerController.update);

}
