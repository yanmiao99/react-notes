const jwt = require('jsonwebtoken');

const isRequest = (ctx)=>{
    // 1.拿到客户端的请求类型和请求地址
    const clientMethod = ctx.method.toUpperCase();
    const clientPath = ctx.url;
    // 3.拿到当前登录用户拥有的所有权限
    const user = ctx.session.user;
    let resources:any[] = [];
    user.roles.forEach((role)=>{
        resources = [...resources, ...role.sources];
    });
    // 4.进行权限校验
    for(let i = 0; i < resources.length; i++){
        const resource = resources[i];
        const serverMethod = resource.sourceMethod;
        const serverPath = resource.sourcePath;
        // /api/v1/usermanager/1
        // /api/v1/usermanager?username=xxx
        if(clientMethod === serverMethod &&
            clientPath.startsWith(serverPath)){
            return true;
        }
    }
    return false;
}
module.exports = (options, app) => {
    return async function (ctx, next) {
        // 0.获取客户端传递过来的JWT令牌
        // 注意点: 如果设置cookie的时候没有签名, 那么获取的时候也要告诉egg不需要签名, 否则会获取不到
        const token = ctx.cookies.get('token', {
            signed: false,
        });
        // 4.判断客户端有没有传递JWT令牌
        if(token){
            try {
                // 根据token拿到当前用户信息并保存到ctx上
                const result = await jwt.verify(token, app.config.keys);
                ctx.token = result;
            }catch (e) {
                ctx.error(400, '没有权限');
            }
        }

        // 1.获取需要权限控制的路由地址
        const authUrls = options.authUrls;
        // 2.判断当前请求的路由地址是否需要权限控制
        /*
        authUrls = ['/api/v1/smsCode']
        clientPath = '/api/v1/smsCode?mobile=1237892173'
        * */
        const clientPath = ctx.url;
        const authList = authUrls.filter((url)=>{
            return clientPath.startsWith(url);
        });
        if(authList.length === 0){
            // 需要权限控制
            console.log('需要权限控制');
            // 根据用户有用的请求权限进行权限控制
            isRequest(ctx) ? await next() : ctx.error(400, '没有权限');
        }else{
            // 不需要权限控制
            console.log('不需要权限控制');
            await next();
        }
    }
};
