import { Service } from 'egg';
const { Op } = require("sequelize");

/**
 * User Manager Service
 */
export default class ResourceManagerService extends Service {
    // 获取权限列表
    public async getResources(obj){
        try {
            let sources:any[];
            let totalCount = {count:0};
            if(obj && obj.current && obj.pageSize){
                // 设置分页
                const currentPage = parseInt(obj.current) || 1;
                const pageSize = parseInt(obj.pageSize) || 5;
                // 添加查询条件
                const {sourceName, sourceDesc, sourceMethod, sourcePath} = obj;
                const conditionList:any[] = [];
                sourceName && conditionList.push({sourceName:{[Op.substring]: sourceName}});
                sourceDesc && conditionList.push({sourceDesc:{[Op.substring]: sourceDesc}});
                sourceMethod && conditionList.push({sourceMethod:{[Op.substring]: sourceMethod}});
                sourcePath && conditionList.push({sourcePath:{[Op.substring]: sourcePath}});
                // 查询分页数据
                sources = await this.ctx.model.ResourceModel.findAll({
                    limit: pageSize,
                    offset: (currentPage - 1) * pageSize,
                    where:{
                        [Op.and]:conditionList,

                    },
                    order:[
                        ['level', 'ASC']
                    ]
                });
                // 获取用户总数
                totalCount = await this.ctx.model.ResourceModel.findAndCountAll({
                    where:{
                        [Op.and]:conditionList
                    }
                });
            }else{
                // 查询所有数据
                sources = await this.ctx.model.ResourceModel.findAll({
                    order:[
                        ['level', 'ASC']
                    ]
                });
                // 获取用户总数
                totalCount = await this.ctx.model.ResourceModel.findAndCountAll();
            }
            // 返回数据
            return {sources:sources, totalCount:totalCount.count};
        }catch (e){
            throw new Error('获取权限列表失败');
        }
    }
    public async permission2level(level){
        try {
            // 查询对应等级所有权限
            const sources = await this.ctx.model.ResourceModel.findAll({
                where:{
                    level: level
                }
            });
            return sources;
        }catch (e) {
            throw new Error('获取权限列表失败');
        }
    }
    // 添加权限
    public async createResource(obj){
        let {sourcePath, sourceMethod} = obj;
        try {
            sourceMethod || (sourceMethod = 'ROOT');
            // 1.查询用户是否存在
            const sources = await this.ctx.model.ResourceModel.findAll({where: {
                    sourceMethod:sourceMethod,
                    sourcePath:sourcePath
                }});
            // 2.根据查询情况注册用户
            if(sources.length > 0){
                throw new Error('当前权限已存在');
            }else{
                const source = await this.ctx.model.ResourceModel.create(obj);
                return source;
            }
        }catch (e){
            throw new Error('创建权限失败');
        }
    }
    // 删除权限
    public async destroyResource(id, list){
        let transaction;
        try {
            transaction = await this.ctx.model.transaction();
            let count = 0;
            if(JSON.stringify(list) !== '{}'){
                // 删除对应id权限
                count = await this.ctx.model.ResourceModel.destroy({
                    where:{
                        [Op.or]:list,
                    }
                });
                // 查找被删除权限下级权限
                const pids = list.map(obj=>({parentId:obj.id}));
                const children = await this.ctx.model.ResourceModel.findAll({
                    where:{
                        [Op.or]: pids
                    }
                });
                // 删除被删除权限下级权限
                if(children.length !== 0){
                    await this.ctx.model.ResourceModel.destroy({
                        where:{
                            [Op.or]:pids,
                        }
                    });
                }
            }else{
                count = await this.ctx.model.ResourceModel.destroy({
                    where:{
                        [Op.or]:{
                            id:id,
                            parentId:id
                        }
                    }
                });
            }
            if(count > 0){
                await transaction.commit();
                return count;
            }else{
                await transaction.rollback();
                throw new Error('删除权限失败');
            }
        }catch (e) {
            console.log(e.message, '++++++++++++++++');
            await transaction.rollback();
            throw new Error('删除权限失败');
        }
    }
    // 更新权限
    public async updateResource(id, obj){
        try {
            const source = await this.ctx.model.ResourceModel.findByPk(id);
            if(source){
                const count = await this.ctx.model.ResourceModel.update(obj, {
                    where:{
                        id:id
                    }
                });
                if(count.length > 0){
                    return source;
                }else{
                    throw new Error('更新权限失败');
                }
            }else{
                throw new Error('更新的权限不存在');
            }
        }catch (e){
            throw new Error('更新权限失败');
        }
    }
}
