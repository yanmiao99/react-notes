module.exports = (app)=>{
    app.router.get('/api/v1/smsCode', app.controller.utilController.smsCode);
    app.router.get('/api/v1/emailCode', app.controller.utilController.emailCode);
    app.router.post('/api/v1/posts', app.controller.utilController.posts);
    app.router.post('/api/v1/importUsers', app.controller.utilController.importUser);
    app.router.get('/api/v1/exportUsers',app.controller.utilController.exportUser);
}
