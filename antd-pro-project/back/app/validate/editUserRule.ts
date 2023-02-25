export default {
    mail:{
        type:'string',
        trim:true,
        format: /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/,
        message:'邮箱验不符合要求'
    },
    mobile:{
        type:'string',
        trim:true,
        format: /^1[3456789]\d{9}$/,
        message:'手机不符合要求'
    },
    nikeName:{
        type:'string',
        trim:true,
        min:1
    },
    avatarURL:{
        type:'string',
        trim:true,
        min:1
    },
    userState:{
        type: 'boolean',
        required:false
    }
}
