import { EggAppConfig, PowerPartial } from 'egg';

export default () => {
  const config: PowerPartial<EggAppConfig> = {};
  // 添加sequelize配置
  config.sequelize = {
    dialect: 'mysql',
    host: '127.0.0.1',
    username: 'root',
    password: '12345678',
    port: 3306,
    database: 'itzb',
    // 注意点: 如果需要使用时间戳, 那么就必须指定当前的时区, 否则会相差8个小时
    timezone: '+08:00'
  };
  // Redis相关配置
  config.redis = {
    client: {
      host: '127.0.0.1',
      port: 6379,
      password: '',
      db: 1,
    }
  };
  // 短信相关配置
  config.sms = {
    accessKeyId : 'LTAI4G1ssihqxrnUXdxyksjX',
    secretAccessKey : 'tPI5bzfPnEKAp9kUqJJD3PPeStnfbd'
  };
  // 禁用CSRF安全校验
  config.security = {
    csrf: {
      enable: false
    },
  };
  // 跨域相关配置
  config.cors = {
    origin: 'http://127.0.0.1:8000', // 允许哪个地址跨域请求
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH', // 允许哪些方法跨域请求
    credentials: true // 允许前端携带cookie
  };
  // git相关配置
  config.github = {
    key:'018447869437696516f2',
    secret:'522e8aa1d62c641d9fb366312c925019902e683f',
  }
  // 邮箱相关配置
  config.smtp = {
    host: "smtp.qq.com",
    port: 465,
    user: '97606813@qq.com', // 发送邮件的邮箱
    pass: `ojgwnecskvujbiaf`, // 邮箱对应的授权码
  };
  config.logger = {
    consoleLevel: 'NONE',
  };
  return config;
};
