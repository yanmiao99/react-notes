import { Controller } from 'egg';
import RegisterRule from '../validate/registerRule';
import NormalLoginRule from '../validate/normalLoginRule';
import MobileLoginRule from '../validate/mobileLoginRule';


export default class UserController extends Controller {
    public async index() {
        const {ctx} = this;
        const data = ctx.request.body;
        try {
            // 1.校验数据和验证码
            if(data.mail){ // 邮箱登录校验
                ctx.validate(NormalLoginRule, data);
            }else if(data.mobile){ // 短信验证码登录校验
                ctx.validate(MobileLoginRule, data);
            }
            // 2.将校验通过的数据保存到数据库中
            const user = await ctx.service.userService.getUser(data);

            // 3.生成JWT令牌
            this.ctx.helper.generatorJwt(user);
            ctx.success();
        } catch (e) {
            if (e.errors) {
                ctx.error(406, e.errors);
            } else {
                ctx.error(406, e.message);
            }
        }
    }
    public async currentUser(){
        const {ctx} = this;
        try {
            // 2.将校验通过的数据保存到数据库中
            const user = await ctx.service.userService.getCurrentUser(ctx.token.id);
            ctx.session.user = user;
            ctx.success(user);
        } catch (e) {
            ctx.error(500, e.errors);
        }
    }
    public async create() {
        const { ctx } = this;
        const data = ctx.request.body;
        try {
            // 1.校验数据和验证码
            ctx.validate(RegisterRule, data);
            ctx.helper.verifySmsCode(data.mobile, data.captcha);
            // 2.将校验通过的数据保存到数据库中
            const user = await ctx.service.userService.createUser(data);
            // 3.判断是否是三方登录
            if(data.authId){
                // 生成JWT令牌
                this.ctx.helper.generatorJwt(user);
            }
            ctx.success(user, 201);
        }catch (e) {
            if(e.errors){
                ctx.error(422, e.errors);
            }else{
                ctx.error(400, e.message);
            }
        }
    }

    public async reset(){
        const { ctx } = this;
        const data = ctx.request.body;
        try {
            if(data.mail){ // 邮箱找回
                ctx.helper.verifyEmailCode(data.mail, data.captcha);
            }else if(data.mobile){ // 手机找回
                ctx.helper.verifySmsCode(data.mobile, data.captcha);
            }
            const user = await ctx.service.userService.updateUser(data);
            ctx.success(user, 200);
        }catch (e) {
            if (e.errors) {
                ctx.error(406, e.errors);
            } else {
                ctx.error(406, e.message);
            }
        }

    }
}
