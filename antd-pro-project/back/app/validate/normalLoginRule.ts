export default {
    mail:{
        type:'string',
        trim:true,
        format: /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/,
        message:'邮箱验不符合要求',
    },
    password:{
        type:'string',
        min:6,
        message:'密码不符合要求'
    }
}
