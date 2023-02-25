import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1595824007157_9704';

  // add your egg config in here
  config.middleware = [];

  // 文件上传相关配置
  config.multipart = {
    mode: 'file',
    fileSize: '10mb',
    fileExtensions:['.xls']
  };
  // 权限控制相关配置
  config.middleware = ['auth'];
  config.auth = {
    authUrls: [
      '/api/v1/login',
      '/api/v1/register',
      '/api/v1/reset',
      '/api/v1/smsCode',
      '/api/v1/emailCode',
      '/api/v1/github',
      '/api/v1/github/callback',
      '/api/v1/posts',
      '/api/v1/currentUser'
    ]
  };


  // add your special config in here
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
  };

  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig,
  };
};
