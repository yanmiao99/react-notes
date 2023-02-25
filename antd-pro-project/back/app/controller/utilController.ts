import { Controller } from 'egg';
const path = require('path');
const fs = require('fs');
const xlsx = require('node-xlsx');

export default class UtilController extends Controller {
    // 发送短信
    public async smsCode(){
        const {ctx} = this;
        try {
            const {mobile} = ctx.query;
            const data = await ctx.helper.sendSmsCode(mobile);
            ctx.success(data);
        }catch (e) {
            ctx.error(422, e.message);
        }
    }
    // 发送邮件
    public async emailCode(){
        const {ctx} = this;
        try {
            const {mail} = ctx.query;
            const data = await ctx.helper.sendEmailCode(mail);
            ctx.success(data);
        }catch (e) {
            ctx.error(422, e.message);
        }
    }
    // 文件上传
    public async posts(){
        const {ctx} = this;
        // 1.拿到上传过来的文件
        // 注意点: 在Egg中想要实现文件上传, 必须进行配置
        const file =  ctx.request.files[0];
        // 2.生成一个独一无二的文件名称
        const fileName =  ctx.helper.encryptText(file.filename + Date.now()) + path.extname(file.filename);
        // 3.生成存储文件的路径
        let filePath = path.join('/public/upload', fileName);
        const absFilePath = path.join(this.config.baseDir, 'app', filePath);
        // 4.写入文件
        const readStream =  fs.readFileSync(file.filepath);
        fs.writeFileSync(absFilePath, readStream);
        // 5.返回存储图片的路径
        filePath = filePath.replace(/\\/g, '/');
        ctx.success(filePath);
    }
    // 批量导入
    public async importUser(){
        const {ctx} = this;
        let transaction;
        try {
            const file =  ctx.request.files[0];
            // 1.读取Excel文件
            const workSheets = xlsx.parse(fs.readFileSync(file.filepath));
            // 2.获取到需要操作的那一页的对象
            const sheet1 = workSheets.length ? workSheets[0] : null;
            const sheet1Data = sheet1 ? sheet1.data : [];
            const users:any[] = [];
            transaction = await ctx.model.transaction();
            for(let i = 1; i < sheet1Data.length; i++){
                // 获取到所有的key
                const cloumnTitles = sheet1Data[0];
                // 获取到当前行的数据
                const cloumnValues = sheet1Data[i];
                const user = {};
                for(let j = 0; j < cloumnTitles.length; j++){
                    user[cloumnTitles[j]] = cloumnValues[j];
                }
                await ctx.service.userManagerService.createUser(user);
                users.push(user);
            }
            await transaction.commit();
            ctx.success(users, 201);
        }catch (e) {
            await transaction.rollback();
            ctx.error(500, e.message);
        }
    }
    // 批量导出
    public async exportUser(){
        const {ctx} = this;
        const {users} = await ctx.service.userManagerService.getUsers({});
        const user = users.length ? users[0].dataValues : null;
        const data:any[] = [];
        if(user){
            const cloumnTitles = Object.keys(user);
            data.push(cloumnTitles);
            users.forEach((user)=>{
                const temp:any[] = [];
                cloumnTitles.forEach((key)=>{
                    temp.push(user[key]);
                });
                data.push(temp);
            });
            const buffer = xlsx.build([{name: "mySheetName", data: data}]);
            ctx.set('Content-Type', 'application/vnd.ms-excel');
            ctx.set('Content-disposition', 'attachment;filename=users.xls');
            // ctx.attachment('users.xls');
            ctx.body = buffer;
        }
    }
}
