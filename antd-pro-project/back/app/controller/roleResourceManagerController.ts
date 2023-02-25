import { Controller } from 'egg';
export default class RoleResourceManagerController extends Controller {
    public async update(){
        const {ctx} = this;
        const {roleId} = ctx.params;
        const {addKeys, removeKeys} = ctx.request.body;
        let transaction;
        try {
            transaction = await ctx.model.transaction();
            if(addKeys && addKeys.length !== 0){
                for(let i = 0; i < addKeys.length; i++){
                    const obj = {roleId:roleId, sourceId:addKeys[i]};
                    await ctx.service.roleResourceManagerService.createRoleResource(obj);
                }
            }
            if(removeKeys && removeKeys.length !== 0){
                for(let i = 0; i < removeKeys.length; i++){
                    await ctx.service.roleResourceManagerService.destroyRoleResource(roleId, removeKeys[i]);
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
            const roleResource = await ctx.service.roleResourceManagerService.createRoleResource(data);
            ctx.success(roleResource, 200);
        } catch (e) {
            ctx.error(400, e.message);
        }
    }
    public async destroy(){
        const {ctx} = this;
        const {roleId} = ctx.params;
        const {sourceId} = ctx.request.body;
        try {
            const data = await ctx.service.roleResourceManagerService.destroyRoleResource(roleId, sourceId);
            ctx.success(data, 200);
        } catch (e) {
            ctx.error(400, e.message);
        }
    }
}
