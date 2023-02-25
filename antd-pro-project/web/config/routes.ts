export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        name: 'login',
        path: '/user/login',
        component: './user/Login',
      },
      {
        component: './404',
      },
    ],
  },
  {
    path: '/welcome',
    name: 'welcome',
    icon: 'smile',
    component: './Welcome',
  },
  {
    path: '/userControl',
    name: 'user-control',
    icon: 'TeamOutlined',
    // access: 'canAdmin',  // 权限
    routes: [
      {
        path: '/userControl/userList',
        name: 'user-list',
        component: './Welcome',
      },
      {
        component: './404',
      },
    ],
  },

  {
    path: '/authorizeControl',
    name: 'authorize-control',
    icon: 'SafetyOutlined',
    // access: 'canAdmin',  // 权限
    routes: [
      {
        path: '/authorizeControl/roleList',
        name: 'role-list',
        component: './Welcome',
      },
      {
        path: '/authorizeControl/rightList',
        name: 'right-list',
        component: './Welcome',
      },
      {
        component: './404',
      },
    ],
  },


  {
    path: '/',
    redirect: '/welcome',
  },
  {
    component: './404',
  },
];
