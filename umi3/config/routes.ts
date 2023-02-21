const routes = [
  // 路由是从上之下执行的
  {path: '/login', component: '@/pages/login'},
  {path: '/register', component: '@/pages/register'},
  // {
  //   path: '/',
  //   // exact: true,
  //   component: '@/layouts/index',
  //   // wrappers: [
  //   //   '@/wrappers/auth',  // 登录鉴权
  //   // ],
  //   routes: [
  //     {path: '/', redirect: '/home'}, //重定向
  //     {path: '/about', component: '@/pages/about'},
  //     {path: '/home', component: '@/pages/home'},
  //     {path: '/dva', component: '@/pages/dva'},
  //     {path: '/list', component: '@/pages/list'},
  //     {path: '/list/:id', component: '@/pages/listDetails'},
  //     {path: '*', component: '@/pages/404'},
  //   ],
  // },
]

export default routes
