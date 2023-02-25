import { Service } from 'egg';
import {UserModel} from "../model/userModel";

export default class OauthService extends Service {
    // 获取授权用户
    public async getOAuthUser(authUser) {
        const {ctx} = this;
        try {
            // 获取对应授权用户
            const data = await ctx.model.UserAuthModel.findOne({
                where:{
                    openId:authUser.id,
                    identityType:authUser.identityType
                },
                include:[
                    {model:UserModel}
                ]
            });
            data!.user.password = '';
            console.log('data=====', data);
            return data!.user['dataValues'];
        }catch (e) {
            throw new Error('授权用户不存在');
        }
    }
    // 创建授权用户
    public async createOAuth(obj){
        return await this.ctx.model.UserAuthModel.create(obj);
    }
    // 更新授权用户
    public async updateOAuth(obj, id){
        return await this.ctx.model.UserAuthModel.update(obj, {
            where:{id:id}
        })
    }
}
