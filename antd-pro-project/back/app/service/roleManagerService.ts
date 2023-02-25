import { Service } from 'egg';
const { Op } = require("sequelize");
import {ResourceModel} from '../model/resourceModel';
import {MenuModel} from '../model/menuModel';

/**
 * User Manager Service
 */
export default class RoleManagerService extends Service {
    // 获取角色列表
    public async getRoles(obj){
        try {
            let roles:any[];
            let totalCount = {count:0};
            if(obj && obj.current && obj.pageSize){
                // 设置分页
                const currentPage = parseInt(obj.current) || 1;
                const pageSize = parseInt(obj.pageSize) || 5;
                // 添加查询条件
                const {roleName, roleDesc} = obj;
                const conditionList:any[] = [];
                roleName && conditionList.push({roleName:{[Op.substring]: roleName}});
                roleDesc && conditionList.push({roleDesc:{[Op.substring]: roleDesc}});
                // 查询分页数据
                roles = await this.ctx.model.RoleModel.findAll({
                    limit: pageSize,
                    offset: (currentPage - 1) * pageSize,
                    where:{
                        [Op.and]:conditionList
                    },
                    include:[
                        {model:ResourceModel},
                        {model:MenuModel},
                    ],
                });
                // 获取用户总数
                totalCount = await this.ctx.model.RoleModel.findAndCountAll({
                    where:{
                        [Op.and]:conditionList
                    }
                });
            }else{
                // 查询所有数据
                roles = await this.ctx.model.RoleModel.findAll({
                    include:[
                        {model:ResourceModel},
                        {model:MenuModel},
                    ],
                });
                // 获取用户总数
                totalCount = await this.ctx.model.RoleModel.findAndCountAll();
            }

            // 返回数据
            return {roles:roles, totalCount:totalCount.count};
        }catch (e){
            throw new Error('获取角色列表失败');
        }
    }
    // 添加角色
    public async createRole(obj){
        const {roleName} = obj;
        try {
            // 1.查询用户是否存在
            const roles = await this.ctx.model.RoleModel.findAll({where: {
                    roleName:roleName
                }});
            // 2.根据查询情况注册用户
            if(roles.length > 0){
                throw new Error('当前角色已存在');
            }else{
                const role = await this.ctx.model.RoleModel.create(obj);
                return role;
            }
        }catch (e){
            throw new Error('创建角色失败');
        }
    }
    // 删除角色
    public async destroyRole(id, list){
        try {
            let count = 0;
            if(JSON.stringify(list) !== '{}'){
                console.log(list);
                count = await this.ctx.model.RoleModel.destroy({
                    where:{
                        [Op.or]:list
                    }
                });
            }else{
                count = await this.ctx.model.RoleModel.destroy({
                    where:{id:id}
                });
            }
            if(count > 0){
                return count;
            }else{
                throw new Error('删除角色失败');
            }
        }catch (e) {
            throw new Error('删除角色失败');
        }
    }
    // 更新角色
    public async updateRole(id, obj){
        try {
            const role = await this.ctx.model.RoleModel.findByPk(id);
            if(role){
                const count = await this.ctx.model.RoleModel.update(obj, {
                    where:{
                        id:id
                    }
                });
                if(count.length > 0){
                    return role;
                }else{
                    throw new Error('更新角色失败');
                }
            }else{
                throw new Error('更新的角色不存在');
            }
        }catch (e){
            throw new Error('更新角色失败');
        }
    }
}
