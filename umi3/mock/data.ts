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
          {path: '/about', component: 'pages/about'},
          {path: '/home', component: 'pages/home'},
          {path: '/dva', component: 'pages/dva'},
          {path: '/list', component: 'pages/list'},
          {path: '/list/:id', component: 'pages/listDetails'},
          {path: '*', component: 'pages/404'},
        ],
      },
    ])
  }

}
