import { Application } from 'egg';

export default (app: Application) => {
  // const { controller, router } = app;
  // 工具相关接口
  require('./router/utilRouter')(app);
  // 账户相关接口
  require('./router/accountRouter')(app);
  // 用户相关接口
  require('./router/userRouter')(app);
  // 角色相关接口
  require('./router/roleRouter')(app);
  // 权限相关接口
  require('./router/resourceRouter')(app);
  // 菜单相关接口
  require('./router/menuRouter')(app);
};
