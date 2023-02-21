// 权限校验
import {history, request as umiRequest} from "umi";

let routerData: [] = [] // 动态读取的路由

// 动态添加路由
// @ts-ignore
export const patchRoutes = ({routes}) => {
  // routes 本地的路由文件
  console.log(routes);

  // 添加一条路由
  /*
  * 注意点 :
  * 1. 添加的路由必须有 exact 的严格模式限制
  * 2. 添加的路路由必须是一个对象
  * */
  // routes.push({
  //   exact:true,
  //   component:require("@/pages/404").default
  // })

  filterRoutes(routerData)
  // 数据处理完毕, 添加到路由文件中
  routerData.map(item => routes.push(item))
}

/**
 * 处理的内容
 * 1. 动态给除了layout以外的每个路由添加 exact , 如果不添加可能会出现 子路由无法跳转
 * 2. 动态给每个路由的 component 地址用 require 包裹 , 因为动态路由需要的是一个组件, 而不是一个地址
 * 3. 动态路由读取之后, 如果跳转不显示, 则需要关闭 mfsu:{}
 * 4. 后端接口返回的数据不可以有 require , 因为会转码
 * 5. 动态路由生成的路由,指向到最后的文件, 例如 pages/index/index.ts , 否则会报document.ejs的错误, 目前在 umi3 有这个问题
 */

interface itemInterface {
  routes: [],
  exact: Boolean,
  redirect: String,
  component: String,
  // wrappers: any[]
  wrappers: string[]
}

const filterRoutes = (propsRouterData: []) => {
  propsRouterData.forEach((item: itemInterface) => {
    // 判断是否有子路由, 如果有则递归
    if (item.routes && item.routes.length > 0) {
      filterRoutes(item.routes)
    } else {
      item.exact = true
    }
    // 判断重定向 , 不是重定向链接的处理逻辑
    if (!item.redirect) {
      // 如果是 404 页面, 则直接添加 jsx 后缀
      if (item.component.includes('404')) {
        item.component = require("@/" + item.component + '.tsx').default
      } else {
        // 如果不是 404 则需要指向到 index 页面中 , 否则会不跳转
        item.component = require('@/' + item.component + '/index.tsx').default
      }
      // 判断路由权限
      if (item.wrappers && item.wrappers.length > 0) {
        item.wrappers.forEach((str: string, strIdx: number) => {
          item.wrappers[strIdx] = require("@/" + str + '.tsx').default
        })
      }
    } else {
      // 如果是重定向的, 则添加 /
      item.redirect = '/' + item.redirect
    }
  })
}

export const render = async (olbRender: () => void) => {
  // 校验地址
  const {isLogin} = await umiRequest('/umi/auth')

  // const isLogin = getRandomIntInclusive(0, 1)


  if (!isLogin) {
    history.push("/login")
  } else {
    // 获取路由数据
    console.log('获取路由数据');
    routerData = await umiRequest("/umi/menus")

  }

  // 最少需要被调用一次 , 因为这个方法是把react 的render 函数进行重写
  olbRender()
}

// 如果不用 dva 作为开发的工具, 那么监听路由, 监听全局操作的事件就可以在这个 onRouteChange 中处理
export const onRouteChange = ({matchedRoutes, location, routes, action}: any) => {

  // routes 路由集合
  // matchedRoutes 当前匹配到的路由以及子路由
  // location location 以及参数
  // action 当前跳转执行的操作

  // 例子 , 根据路由动态更改网页标题
  console.log('matchedRoutes', matchedRoutes);
  // console.log('routes',routes);
  // console.log('location',location);
  // console.log('action',action);

  document.title = matchedRoutes[matchedRoutes.length - 1].route.title || '我没有标题'

  //  如果是需要做数据埋点, 也可以在这里做
}

// 拦截器
export const request = {
  timeout: 1000, // 延时
  errorConfig: {}, // 错误处理
  middlewares: [],// 中间件
  // 请求拦截
  requestInterceptors: [(url: string, options: { headers: { token: string } }) => {
    // 添加全局 token
    options.headers = {
      token: 'xxxxxxxxx'
    }
    return {url, options}
  }],
  // 相应拦截
  responseInterceptors: [(response: any, options: any) => {
    // 响应体
    return response
  }]
}
