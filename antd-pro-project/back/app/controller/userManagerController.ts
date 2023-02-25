import { Controller } from 'egg';
import AddUserRule from '../validate/addUserRule';
import EditUserRule from '../validate/editUserRule';

export default class UserManagerController extends Controller {
    // 获取所有用户
    public async index() {
        const { ctx } = this;
        try {
            const data = await ctx.service.userManagerService.getUsers(ctx.query);
            ctx.success(data, 200);
        }catch (e) {
            ctx.error(500, e.message);
        }
    }
    // 添加用户
    public async create(){
        const {ctx} = this;
        const data = ctx.request.body;
        try {
            // 1.校验数据和验证码
            ctx.validate(AddUserRule, data);
            // 2.将校验通过的数据保存到数据库中
            const user = await ctx.service.userManagerService.createUser(data);
            ctx.success(user, 201);
        } catch (e) {
            if(e.errors){
                ctx.error(422, e.errors);
            }else{
                ctx.error(400, e.message);
            }
        }
    }
    // 删除用户
    public async destroy(){
        const {ctx} = this;
        const {id} = ctx.params;
        const data = ctx.request.body;
        try {
            const user = await ctx.service.userManagerService.destroyUser(id, data);
            ctx.success(user, 204);
        } catch (e) {
            ctx.error(400, e.message);
        }
    }
    // 更新用户
    public async update(){
        const {ctx} = this;
        const {id} = ctx.params;
        const data = ctx.request.body;
        try {
            // 1.校验数据和验证码
            ctx.validate(EditUserRule, data);
            // 2.将校验通过的数据保存到数据库中
            const user = await ctx.service.userManagerService.updateUser(id, data);
            ctx.success(user, 201);
        } catch (e) {
            if (e.errors) {
                ctx.error(422, e.errors);
            } else {
                ctx.error(400, e.message);
            }
        }
    }
}