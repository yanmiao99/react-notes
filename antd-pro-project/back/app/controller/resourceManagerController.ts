import { Controller } from 'egg';

export default class resourceManagerController extends Controller {
    // 获取所有权限
    public async index() {
        const { ctx } = this;
        try {
            const data = await ctx.service.resourceManagerService.getResources(ctx.query);
            ctx.success(data, 200);
        }catch (e) {
            ctx.error(500, e.message);
        }
    }
    public async permission2level() {
        const { ctx } = this;
        try {
            const {level} = ctx.params;
            const data = await ctx.service.resourceManagerService.permission2level(level);
            ctx.success(data, 200);
        }catch (e) {
            ctx.error(500, e.message);
        }
    }
    // 添加权限
    public async create(){
        const {ctx} = this;
        const data = ctx.request.body;
        try {
            const resource = await ctx.service.resourceManagerService.createResource(data);
            ctx.success(resource, 201);
        } catch (e) {
            if(e.errors){
                ctx.error(422, e.errors);
            }else{
                ctx.error(400, e.message);
            }
        }
    }
    // 删除权限
    public async destroy(){
        const {ctx} = this;
        const {id} = ctx.params;
        const data = ctx.request.body;
        try {
            const resource = await ctx.service.resourceManagerService.destroyResource(id, data);
            ctx.success(resource, 204);
        } catch (e) {
            ctx.error(400, e.message);
        }
    }
    // 更新权限
    public async update(){
        const {ctx} = this;
        const {id} = ctx.params;
        const data = ctx.request.body;
        try {
            const resource = await ctx.service.resourceManagerService.updateResource(id, data);
            ctx.success(resource, 201);
        } catch (e) {
            if (e.errors) {
                ctx.error(422, e.errors);
            } else {
                ctx.error(400, e.message);
            }
        }
    }
}
