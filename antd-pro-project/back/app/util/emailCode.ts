const nodemailer = require("nodemailer");

let transporter;
export default {
    // 创建发送邮件对象
    createTransporterInstance(ctx){
        if(transporter){
            return transporter;
        }
        transporter = nodemailer.createTransport({
            host: ctx.app.config.smtp.host,
            port: ctx.app.config.smtp.port,
            secure: true, // true for 465, false for other ports
            auth: {
                user: ctx.app.config.smtp.user, // 发送邮件的邮箱
                pass: ctx.app.config.smtp.pass, // 邮箱对应的授权码
            },
        });
        return transporter;
    },
    // 创建需要发送的内容
    createEmailInfo(ctx, to:string){
        // 1.生成验证码
        let code = Math.random().toString(16).slice(2, 6).toUpperCase();
        // 2.生成发送内容
        let info = {
            from: '97606813@qq.com', // 谁发的
            to: to, // 发给谁
            subject: "知播渔管理后台注册验证码", // 邮件标题
            text: `您正在注册知播渔管理后台系统, 您的验证码是:${code}`, // 邮件内容
        };
        // 3.保存验证码
        ctx.session.email = {
            mail: to, // 97606814@qq.com
            code: code, // 1234
            expire: Date.now() + 60 * 1000 * 10 // 验证码10分钟之后过期
        };
        return info;
    },
    // 发送邮件
    async sendEmailCode(ctx, to:string){
        const transporter = this.createTransporterInstance(ctx);
        const info = this.createEmailInfo(ctx, to);
        return new Promise((resolve, reject)=>{
            transporter.sendMail(info, (err, data)=>{
                if(err){
                    reject(err);
                }else{
                    resolve(data);
                }
            })
        });
    },
    verifyEmailCode(ctx, clientMail ,clientCode){
        // 1.取出服务端中保存的验证码和过期时间
        const serverCaptcha = ctx.session.email;
        let serverMail; // 97606814@qq.com
        let serverCode; // 1234
        let serverExpire;
        try {
            serverMail = serverCaptcha.mail;
            serverCode = serverCaptcha.code;
            serverExpire = serverCaptcha.expire;
        }catch (e) {
            throw new Error('请重新获取验证码');
        }

        if(Date.now() > serverExpire){
            throw new Error('验证码已经过期');
        }else if(serverCode !== clientCode || serverMail !== clientMail){
            throw new Error('验证码不正确');
        }
    }
}
