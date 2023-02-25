import { Service } from 'egg';


export default class RoleResourceManagerService extends Service {

    public async createRoleResource(obj) {
        const {roleId, sourceId} = obj;
        try {
            const result = await this.ctx.model.RoleResourceModel.findAll({
                where:{
                    roleId:roleId,
                    sourceId:sourceId
                }
            });
            if(result.length > 0){
                throw new Error('权限已经存在');
            }else{
                const RoleResource = await this.ctx.model.RoleResourceModel.create(obj);
                return RoleResource;
            }
        }catch (e) {
            throw new Error('分配权限失败');
        }
    }
    public async destroyRoleResource(roleId, sourceId){
        try {
            const data = await this.ctx.model.RoleResourceModel.destroy({
                where:{roleId:roleId, sourceId: sourceId}
            });
            if(data <= 0){
                throw new Error('删除权限失败');
            }
            return data;
        }catch (e) {
            throw new Error('删除权限失败');
        }
    }
}
