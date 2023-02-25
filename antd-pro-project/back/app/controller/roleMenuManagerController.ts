import { Controller } from 'egg';
export default class RoleMenuManagerController extends Controller {
    public async update(){
        const {ctx} = this;
        const {roleId} = ctx.params;
        const {addKeys, removeKeys} = ctx.request.body;
        let transaction;
        try {
            transaction = await ctx.model.transaction();
            // 增加
            if(addKeys && addKeys.length !== 0){
                for(let i = 0; i < addKeys.length; i++){
                    const obj = {roleId:roleId, menuId:addKeys[i]};
                    await ctx.service.roleMenuManagerService.createRoleMenu(obj);
                }
            }
            // 删除
            if(removeKeys && removeKeys.length !== 0){
                for(let i = 0; i < removeKeys.length; i++){
                    await ctx.service.roleMenuManagerService.destroyRoleMenu(roleId, removeKeys[i]);
                }
            }
            await transaction.commit();
            ctx.success();
        }catch (e) {
            await transaction.rollback();
            ctx.error(400, e.message);
        }
    }
    public async create() {
        const {ctx} = this;
        const data = ctx.request.body;
        try {
            const roleMenu = await ctx.service.roleMenuManagerService.createRoleMenu(data);
            ctx.success(roleMenu, 200);
        } catch (e) {
            ctx.error(400, e.message);
        }
    }
    public async destroy(){
        const {ctx} = this;
        const {roleId} = ctx.params;
        const {sourceId} = ctx.request.body;
        try {
            const data = await ctx.service.roleMenuManagerService.destroyRoleMenu(roleId, sourceId);
            ctx.success(data, 200);
        } catch (e) {
            ctx.error(400, e.message);
        }
    }
}
