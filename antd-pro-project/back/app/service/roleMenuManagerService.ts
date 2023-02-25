import { Service } from 'egg';


export default class RoleMenuManagerService extends Service {

    public async createRoleMenu(obj) {
        const {roleId, menuId} = obj;
        try {
            const result = await this.ctx.model.RoleMenuModel.findAll({
                where:{
                    roleId:roleId,
                    menuId:menuId
                }
            });
            if(result.length > 0){
                throw new Error('菜单已经存在');
            }else{
                const RoleMenu = await this.ctx.model.RoleMenuModel.create(obj);
                return RoleMenu;
            }
        }catch (e) {
            throw new Error('分配菜单失败');
        }
    }
    public async destroyRoleMenu(roleId, menuId){
        try {
            const data = await this.ctx.model.RoleMenuModel.destroy({
                where:{roleId:roleId, menuId: menuId}
            });
            if(data <= 0){
                throw new Error('删除菜单失败');
            }
            return data;
        }catch (e) {
            throw new Error('删除菜单失败');
        }
    }
}
