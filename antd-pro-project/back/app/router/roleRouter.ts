module.exports = (app)=>{
    // 角色管理
    app.router.get('/api/v1/roleManager', app.controller.roleManagerController.index);
    app.router.post('/api/v1/roleManager', app.controller.roleManagerController.create);
    /*
    注意点: 如果表与表之间没有关联关系, 那么我们是可以直接删除表中的数据的
           但是如果表与表之间有关联关系, 那么我们就不可以直接删除表中的数据了
           如果表与表之间有关联关系, 那么想删除表中的数据, 必须先把相关的依赖删掉才可以删除表中数据
    解决方案: 定义表时指定给关系表依赖字段的级联操作
             onUpdate: 'cascade', // 级联更新
             onDelete: 'cascade'  // 级联删除
     */
    app.router.delete('/api/v1/roleManager/:id', app.controller.roleManagerController.destroy);
    app.router.delete('/api/v1/roleManager', app.controller.roleManagerController.destroy);
    app.router.put('/api/v1/roleManager/:id', app.controller.roleManagerController.update);

    // 分配角色
    app.router.post('/api/v1/userRoleManager', app.controller.userRoleManagerController.create);
    app.router.delete('/api/v1/userRoleManager/:userId', app.controller.userRoleManagerController.destroy);

}
