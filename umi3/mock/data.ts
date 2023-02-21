export default {

  // 权限校验
  'GET /umi/auth': (req: any, res: any) => {
    res.send({
      isLogin: true
    })
  },

  'GET /umi/menus': (req: any, res: any) => {
    res.send([
      {
        path: '/',
        component: 'layouts/index',
        routes: [
          {path: '/', redirect: 'home'}, //重定向
          {path: '/about', component: 'pages/about', title: '关于我们'},
          {path: '/home', component: 'pages/home', title: '首页'},
          {path: '/dva', component: 'pages/dva', title: 'dva数据测试'},
          {path: '/list', component: 'pages/list', title: '列表文件'},
          {path: '/list/:id', component: 'pages/listDetails', title: '列表详情'},
          {path: '*', component: 'pages/404', title: '找不到页面了'},
        ],
      },
    ])
  }

}
