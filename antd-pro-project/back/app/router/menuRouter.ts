module.exports = (app)=>{
    // 菜单管理
    app.router.get('/api/v1/menuManager', app.controller.menuManagerController.index);
    app.router.get('/api/v1/menuManager/:level', app.controller.menuManagerController.permission2level);
    app.router.post('/api/v1/menuManager', app.controller.menuManagerController.create);
    app.router.delete('/api/v1/menuManager/:id', app.controller.menuManagerController.destroy);
    app.router.delete('/api/v1/menuManager', app.controller.menuManagerController.destroy);
    app.router.put('/api/v1/menuManager/:id', app.controller.menuManagerController.update);
    // 分配菜单
    app.router.put('/api/v1/roleMenuManager/:roleId', app.controller.roleMenuManagerController.update);
}
