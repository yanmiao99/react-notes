import { Service } from 'egg';
const { Op } = require("sequelize");
import {RoleModel} from '../model/roleModel';

/**
 * User Manager Service
 */
export default class UserManagerService extends Service {
    // 获取用户列表
    public async getUsers(obj){
        try {
            let users:any[];
            let totalCount = {count:0};
            if(obj && obj.current && obj.pageSize){
                // 设置分页
                const currentPage = parseInt(obj.current) || 1;
                const pageSize = parseInt(obj.pageSize) || 5;
                // 添加查询条件
                const {nikeName, mail, mobile} = obj;
                const conditionList:any[] = [];
                nikeName && conditionList.push({nikeName:{[Op.substring]: nikeName}});
                mail && conditionList.push({mail:{[Op.substring]: mail}});
                mobile && conditionList.push({mobile:{[Op.substring]: mobile}});
                // 查询分页数据
                users = await this.ctx.model.UserModel.findAll({
                    attributes:{
                        exclude:['password', 'created_at', 'updated_at']
                    },
                    limit: pageSize,
                    offset: (currentPage - 1) * pageSize,
                    where:{
                        [Op.and]:conditionList
                    },
                    include:[
                        {model:RoleModel}
                    ],
                });
                // 获取用户总数
                totalCount = await this.ctx.model.UserModel.findAndCountAll({
                    where:{
                        [Op.and]:conditionList
                    }
                });
            }else{
                // 查询所有数据
                users = await this.ctx.model.UserModel.findAll({
                    attributes:{
                        exclude:['password', 'created_at', 'updated_at']
                    },
                    include:[
                        {model:RoleModel}
                    ],
                });
                // 获取用户总数
                totalCount = await this.ctx.model.UserModel.findAndCountAll();
            }
            // 返回数据
            return {users:users, totalCount:totalCount.count};
        }catch (e){
            throw new Error('获取用户列表失败');
        }
    }
    // 添加用户
    public async createUser(obj){
        const {mail, mobile, password} = obj;
        try {
            // 1.查询用户是否存在
            const users = await this.ctx.model.UserModel.findAll({where: {
                    [Op.or]: [
                        { mail: mail },
                        { mobile: mobile }
                    ]
                }});
            // 2.根据查询情况注册用户
            if(users.length > 0){
                throw new Error('当前用户已存在');
            }else{
                obj.password = this.ctx.helper.encryptText(password); // 对密码进行加密
                const user = await this.ctx.model.UserModel.create(obj);
                user.password = ''; // 不要将密码返回给客户端
                return user;
            }
        }catch (e){
            throw new Error('创建用户失败');
        }
    }
    // 删除用户
    public async destroyUser(id, list){
        // let transaction;
        try {
            // transaction = await this.ctx.model.transaction();
            // 可以通过直接设置数据库级联删除来实现
            // await this.destroyUserRole(id, list);
            let count = 0;
            if(JSON.stringify(list) !== '{}'){
                count = await this.ctx.model.UserModel.destroy({
                    where:{
                        [Op.or]:list
                    }
                });
            }else{
                count = await this.ctx.model.UserModel.destroy({
                    where:{id:id}
                });
            }
            if(count > 0){
                // await transaction.commit();
                return count;
            }else{
                // await transaction.rollback();
                throw new Error('删除用户失败');
            }
        }catch (e) {
            console.log(e.message, '============');
            // await transaction.rollback();
            throw new Error('删除用户失败');
        }
    }
    /*
    // 删除对应角色依赖
    private async destroyUserRole(id, list){
        try {
            let count = 0;
            if(JSON.stringify(list) !== '{}'){
                const roleIds = list.map(obj=>({userId: obj.id}));
                count = await this.ctx.model.UserRoleModel.destroy({
                    where:{
                        [Op.or]:roleIds
                    }
                });
            }else{
                count = await this.ctx.model.UserRoleModel.destroy({
                    where:{userId:id}
                });
            }
            return count;
        }catch (e) {
            throw new Error('删除角色失败');
        }
    }
     */
    // 更新用户
    public async updateUser(id, obj){
        try {
            const user = await this.ctx.model.UserModel.findByPk(id);
            if(user){
                const {password} = obj;
                password && (obj.password = obj.password = this.ctx.helper.encryptText(password));
                const count = await this.ctx.model.UserModel.update(obj, {
                    where:{
                        id:id
                    }
                });
                if(count.length > 0){
                    user.password = '';
                    return user;
                }else{
                    throw new Error('更新用户失败');
                }
            }else{
                throw new Error('更新的用户不存在');
            }
        }catch (e){
            throw new Error('更新用户失败');
        }
    }
}
