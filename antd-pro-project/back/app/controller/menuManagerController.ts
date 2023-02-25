import { Controller } from 'egg';

export default class menuManagerController extends Controller {
    // 获取所有菜单
    public async index() {
        const { ctx } = this;
        try {
            const data = await ctx.service.menuManagerService.getMenus(ctx.query);
            ctx.success(data, 200);
        }catch (e) {
            ctx.error(500, e.message);
        }
    }
    public async permission2level() {
        const { ctx } = this;
        try {
            const {level} = ctx.params;
            const data = await ctx.service.menuManagerService.permission2level(level);
            ctx.success(data, 200);
        }catch (e) {
            ctx.error(500, e.message);
        }
    }
    // 添加菜单
    public async create(){
        const {ctx} = this;
        const data = ctx.request.body;
        try {
            const menu = await ctx.service.menuManagerService.createMenu(data);
            ctx.success(menu, 201);
        } catch (e) {
            if(e.errors){
                ctx.error(422, e.errors);
            }else{
                ctx.error(400, e.message);
            }
        }
    }
    // 删除菜单
    public async destroy(){
        const {ctx} = this;
        const {id} = ctx.params;
        const data = ctx.request.body;
        try {
            const menu = await ctx.service.menuManagerService.destroyMenu(id, data);
            ctx.success(menu, 204);
        } catch (e) {
            ctx.error(400, e.message);
        }
    }
    // 更新菜单
    public async update(){
        const {ctx} = this;
        const {id} = ctx.params;
        const data = ctx.request.body;
        try {
            const menu = await ctx.service.menuManagerService.updateMenu(id, data);
            ctx.success(menu, 201);
        } catch (e) {
            if (e.errors) {
                ctx.error(422, e.errors);
            } else {
                ctx.error(400, e.message);
            }
        }
    }
}
