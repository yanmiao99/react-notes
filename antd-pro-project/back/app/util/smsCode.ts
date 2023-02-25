const Core = require('@alicloud/pop-core');

let transporter;
export default {
    // 创建发送短信对象
    createTransporterInstance(ctx){
        if(transporter){
            return transporter;
        }
        transporter = new Core({
            accessKeyId: ctx.app.config.sms.accessKeyId,
            accessKeySecret: ctx.app.config.sms.secretAccessKey,
            endpoint: 'https://dysmsapi.aliyuncs.com',
            apiVersion: '2017-05-25'
        });
        return transporter;
    },
    // 创建需要发送的内容
    createSmsInfo(ctx, to:string){
        // 1.生成验证码
        let code = Math.random().toString(16).slice(2, 6).toUpperCase();
        let jsonCode = {code: code};
        // 2.生成发送内容
        let info = {
            "RegionId": "cn-hangzhou",
            "PhoneNumbers": to,
            "SignName": "知播渔教育科技有限公司",
            "TemplateCode": "SMS_196652342",
            "TemplateParam": JSON.stringify(jsonCode)
        };
        // 3.保存验证码
        ctx.session.sms = {
            code: code,
            mobile: to,
            expire: Date.now() + 60 * 1000 * 5 // 验证码5分钟之后过期
        };
        return info;
    },
    // 发送短信验证码
    async sendSmsCode(ctx, to:string){
        const transporter = this.createTransporterInstance(ctx);
        const info = this.createSmsInfo(ctx, to);
        const requestOption = {
            method: 'POST'
        };
        return new Promise((resolve, reject)=>{
            transporter.request('SendSms', info, requestOption).then((result) => {
                resolve(result);
            }, (ex) => {
                reject(ex);
            })
        });
    },
    // 校验短信验证按
    verifySmsCode(ctx, mobile, clientCode){
        // 1.取出服务端中保存的验证码和过期时间
        const serverCaptcha = ctx.session.sms;
        let serverCode;
        let serverMobile;
        let serverExpire;
        try {
            serverCode = serverCaptcha.code;
            serverMobile = serverCaptcha.mobile;
            serverExpire = serverCaptcha.expire;
        }catch (e) {
            throw new Error('请重新获取验证码');
        }

        if(Date.now() > serverExpire){
            throw new Error('验证码已经过期');
        }else if(serverCode !== clientCode || serverMobile != mobile){
            throw new Error('验证码不正确');
        }
        // 注意点: 验证码无论验证成功还是失败, 都只能使用一次
        // ctx.session.email = null;
    }
}
