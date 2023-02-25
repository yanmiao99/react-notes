import { Service } from 'egg';
const { Op } = require("sequelize");
import {RoleModel} from "../model/roleModel";
import {ResourceModel} from '../model/resourceModel';
import {MenuModel} from '../model/menuModel';
/**
 * UserModel Service
 */
export default class UserService extends Service {
    // 获取用户
    public async getUser({mail, password, mobile, captcha}){
        password = this.ctx.helper.encryptText(password);
        if(mail){
            return await this.findUserByEmail(mail, password);
        }else{
            return await this.findUserByMobile(mobile, captcha);
        }
    }
    private async findUserByEmail(mail, password){
        try {
            const user =  await this.ctx.model.UserModel.findOne({
                where: {
                    mail:mail,
                    password:password
                }
            });
            user!.password = '';
            return user!['dataValues'];
        }catch (e) {
            throw new Error('用户名或密码不正确');
        }
    }
    private async findUserByMobile(mobile, captcha){
        try {
            // 校验验证码
            this.ctx.helper.verifySmsCode(mobile, captcha);
            // 查询对应手机用户
            const user =  await this.ctx.model.UserModel.findOne({
                where: {
                    mobile:mobile,
                },
            });
            user!.password = '';
            return user!['dataValues'];
        }catch (e) {
            throw new Error('用户不存在或验证码不正确');
        }
    }
    // 获取登录用户信息
    public async getCurrentUser(id){
        try {
            const user =  await this.ctx.model.UserModel.findOne({
                where:{
                    id:id
                },
                include:[
                    {
                        model:RoleModel,
                        include:[
                            {model: ResourceModel},
                            {model: MenuModel},
                        ]
                    },
                ],
            });
            user!.password = '';
            return user;
        }catch (e){
            throw new Error('获取用户信息失败');
        }
    }
    // 创建用户
    public async createUser({mail, mobile, password, authId}) {
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
                password = this.ctx.helper.encryptText(password); // 对密码进行加密
                const user = await this.ctx.model.UserModel.create({
                    mail:mail,
                    mobile:mobile,
                    password:password
                });
                user.password = ''; // 不要将密码返回给客户端
                // 如果是三方登录, 更新收取记录对应的用户
                if(authId){
                    await this.ctx.service.oauthService.updateOAuth({userId: user.id}, authId);
                }
                return user['dataValues'];
            }
        }catch (e) {
            throw new Error('创建用户失败');
        }
    }
    // 更新密码
    public async updateUser({mail, mobile, password}){
        try {
            password = this.ctx.helper.encryptText(password); // 对密码进行加密
           if(mail){
              return await this.ctx.model.UserModel.update({password: password}, {
                   where:{
                       mail:mail
                   }
               });
           }else{
               return await this.ctx.model.UserModel.update({password: password}, {
                   where:{
                       mobile:mobile
                   }
               });
           }
        }catch (e){
            throw new Error('重置密码失败');
        }
    }
}
