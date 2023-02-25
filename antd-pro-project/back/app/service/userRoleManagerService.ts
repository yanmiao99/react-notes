import { Service } from 'egg';


export default class UserRole extends Service {

    public async createUserRole(obj) {
        const {userId, roleId} = obj;
        try {
            const result = await this.ctx.model.UserRoleModel.findAll({
                where:{
                    userId:userId,
                    roleId:roleId
                }
            });
            if(result.length > 0){
                throw new Error('角色已经存在');
            }else{
                const userRole = await this.ctx.model.UserRoleModel.create(obj);
                return userRole;
            }
        }catch (e) {
            throw new Error('分配角色失败');
        }
    }
    public async destroyUser(userId, roleId){
        try {
            const data = await this.ctx.model.UserRoleModel.destroy({
                where:{userId:userId, roleId: roleId}
            });
            if(data <= 0){
                throw new Error('删除角色失败');
            }
            return data;
        }catch (e) {
            throw new Error('删除角色失败');
        }
    }
}
