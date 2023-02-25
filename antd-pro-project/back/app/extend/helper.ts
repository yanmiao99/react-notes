import SmsCode from '../util/smsCode';
import Encrypto from '../util/encrypto';
import EmailCode from '../util/emailCode';
const jwt = require('jsonwebtoken');

module.exports = {
    encryptText(text){
        return Encrypto.encryptText(this, text);
    },
    // 发送短信验证码
    async sendSmsCode(to:string){
        return await SmsCode.sendSmsCode(this.ctx, to);
    },
    // 校验短信验证码
    verifySmsCode(mobile, clientCode){
        SmsCode.verifySmsCode(this.ctx, mobile, clientCode);
    },
    // 发送邮件验证码
    async sendEmailCode(to:string){
        return await EmailCode.sendEmailCode(this.ctx, to);
    },
    // 校验邮件验证按
    verifyEmailCode(mail, clientCode){
        EmailCode.verifyEmailCode(this.ctx, mail, clientCode);
    },
    // 生成JWT令牌
    generatorJwt(user){
        const token = jwt.sign(user, this.config.keys, {expiresIn: '7 days'});
        this.ctx.cookies.set('token', token, {
            path:'/',
            maxAge: 7 * 24 * 60 * 60 * 1000,
            // 注意点: 如果httpOnly: true, 那么前端是无法获取这个cookie
            httpOnly: false,
            signed:false,
        });
    }
};
