import { Controller } from 'egg';
import AddRoleRule from "../validate/addRoleRule";

export default class roleManagerController extends Controller {
    // 获取所有角色
    public async index() {
        const { ctx } = this;
        try {
            const data = await ctx.service.roleManagerService.getRoles(ctx.query);
            ctx.success(data, 200);
        }catch (e) {
            ctx.error(500, e.message);
        }
    }
    // 添加角色
    public async create(){
        const {ctx} = this;
        const data = ctx.request.body;
        try {
            // 1.校验数据
            ctx.validate(AddRoleRule, data);
            // 2.将校验通过的数据保存到数据库中
            const role = await ctx.service.roleManagerService.createRole(data);
            ctx.success(role, 201);
        } catch (e) {
            if(e.errors){
                ctx.error(422, e.errors);
            }else{
                ctx.error(400, e.message);
            }
        }
    }
    // 删除角色
    public async destroy(){
        const {ctx} = this;
        const {id} = ctx.params;
        const data = ctx.request.body;
        try {
            const role = await ctx.service.roleManagerService.destroyRole(id, data);
            ctx.success(role, 204);
        } catch (e) {
            ctx.error(400, e.message);
        }
    }
    // 更新角色
    public async update(){
        const {ctx} = this;
        const {id} = ctx.params;
        const data = ctx.request.body;
        try {
            // 1.校验数据
            ctx.validate(AddRoleRule, data);
            // 2.将校验通过的数据保存到数据库中
            const role = await ctx.service.roleManagerService.updateRole(id, data);
            ctx.success(role, 201);
        } catch (e) {
            if (e.errors) {
                ctx.error(422, e.errors);
            } else {
                ctx.error(400, e.message);
            }
        }
    }
}
