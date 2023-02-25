import { Service } from 'egg';
const { Op } = require("sequelize");

/**
 * User Manager Service
 */
export default class MenuManagerService extends Service {
    // 获取菜单列表
    public async getMenus(obj){
        try {
            let menus:any[];
            let totalCount = {count:0};
            if(obj && obj.current && obj.pageSize){
                // 设置分页
                const currentPage = parseInt(obj.current) || 1;
                const pageSize = parseInt(obj.pageSize) || 5;
                // 添加查询条件
                const {menuName, menuDesc, menuPath} = obj;
                const conditionList:any[] = [];
                menuName && conditionList.push({menuName:{[Op.substring]: menuName}});
                menuDesc && conditionList.push({menuDesc:{[Op.substring]: menuDesc}});
                menuPath && conditionList.push({menuPath:{[Op.substring]: menuPath}});
                // 查询分页数据
                menus = await this.ctx.model.MenuModel.findAll({
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
                totalCount = await this.ctx.model.MenuModel.findAndCountAll({
                    where:{
                        [Op.and]:conditionList
                    }
                });
            }else{
                // 查询所有数据
                menus = await this.ctx.model.MenuModel.findAll({
                    order:[
                        ['level', 'ASC']
                    ]
                });
                // 获取用户总数
                totalCount = await this.ctx.model.MenuModel.findAndCountAll();
            }
            // 返回数据
            return {menus:menus, totalCount:totalCount.count};
        }catch (e){
            throw new Error('获取菜单列表失败');
        }
    }
    public async permission2level(level){
        try {
            // 查询对应等级所有菜单
            const menus = await this.ctx.model.MenuModel.findAll({
                where:{
                    level: level
                }
            });
            return menus;
        }catch (e) {
            throw new Error('获取菜单列表失败');
        }
    }
    // 添加菜单
    public async createMenu(obj){
        let {menuPath} = obj;
        try {
            // 1.查询用户是否存在
            const menus = await this.ctx.model.MenuModel.findAll({where: {
                    menuPath:menuPath
                }});
            // 2.根据查询情况注册用户
            if(menus.length > 0){
                throw new Error('当前菜单已存在');
            }else{
                const menu = await this.ctx.model.MenuModel.create(obj);
                return menu;
            }
        }catch (e){
            throw new Error('创建菜单失败');
        }
    }
    // 删除菜单
    public async destroyMenu(id, list){
        let transaction;
        try {
            transaction = await this.ctx.model.transaction();
            let count = 0;
            if(JSON.stringify(list) !== '{}'){
                // 删除对应id菜单
                count = await this.ctx.model.MenuModel.destroy({
                    where:{
                        [Op.or]:list,
                    }
                });
                // 查找被删除菜单下级菜单
                const pids = list.map(obj=>({parentId:obj.id}));
                const children = await this.ctx.model.MenuModel.findAll({
                    where:{
                        [Op.or]: pids
                    }
                });
                // 删除被删除菜单下级菜单
                if(children.length !== 0){
                    await this.ctx.model.MenuModel.destroy({
                        where:{
                            [Op.or]:pids,
                        }
                    });
                }
            }else{
                count = await this.ctx.model.MenuModel.destroy({
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
                throw new Error('删除菜单失败');
            }
        }catch (e) {
            await transaction.rollback();
            throw new Error('删除菜单失败');
        }
    }
    // 更新菜单
    public async updateMenu(id, obj){
        try {
            const menu = await this.ctx.model.MenuModel.findByPk(id);
            if(menu){
                const count = await this.ctx.model.MenuModel.update(obj, {
                    where:{
                        id:id
                    }
                });
                if(count.length > 0){
                    return menu;
                }else{
                    throw new Error('更新菜单失败');
                }
            }else{
                throw new Error('更新的菜单不存在');
            }
        }catch (e){
            throw new Error('更新菜单失败');
        }
    }
}
