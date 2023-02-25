import { Controller } from 'egg';
const queryString = require('querystring');

export default class GithubController extends Controller {
    // 获取第三方登录界面
    public async getLoginView() {
        const baseURL = 'https://github.com/login/oauth/authorize';
        const option = {
            client_id: '018447869437696516f2',
            scope: 'user'
        }
        const url = baseURL + '?' + queryString.stringify(option);
        const {ctx} = this;
        ctx.redirect(url);
    }
    // 获取AccessToken
    public async getAccessToken(){
        const {ctx} = this;
        // 1.拿到用户同意授权之后的code
        const {code} = ctx.query;
        // 2.利用code换取令牌(access_token)
        // 发送POST请求到https://github.com/login/oauth/access_token带上必要的参数
        const baseURL = 'https://github.com/login/oauth/access_token';
        const option = {
            client_id: this.config.github.key,
            client_secret: this.config.github.secret,
            code:code
        }
        const result = await ctx.curl(baseURL, {
            method: 'POST',
            timeout: 60000,
            data: option,
            dataType: 'json',
            headers:{
                'Content-Type': 'application/json',
                'Accept':'application/json'
            }
        });
        const accessToken = result.data.access_token;
        await this.getGithubUserIinfo(accessToken);
    }
    // 获取授权用户信息
    private async getGithubUserIinfo(accessToken){
        // 获取授权用户信息
        const {ctx} = this;
        const baseURL = 'https://api.github.com/user';
        const result = await ctx.curl(baseURL, {
            method: 'GET',
            timeout: 60000,
            headers: {
                'Authorization': 'token '+accessToken
            }
        });
        const data = JSON.parse(result.data);
        data.identityType = 'github';
        data.accessToken = accessToken;
        // 3.带着accessToken跳转到注册界面
        await this.go2Admin(data);
    }
    // 跳转到登录后界面
    private async go2Admin(data){
        const {ctx} = this;
        try {
            // 用户存在直接登录
            const user = await ctx.service.oauthService.getOAuthUser(data);
            this.ctx.helper.generatorJwt(user);
            ctx.redirect('http://127.0.0.1:8000/welcome');
        }catch (e) {
            // 用户不存在, 先保存授权信息
            const oauthInfo = {
                accessToken: data.accessToken,
                identityType: data.identityType,
                openId:data.id,
            }
            const authData = await ctx.service.oauthService.createOAuth(oauthInfo);
            // 再跳转到注册界面
            ctx.redirect(`http://127.0.0.1:8000/user/register?authId=${authData.id}`);
        }
    }
}
