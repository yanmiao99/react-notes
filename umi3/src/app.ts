// 权限校验
import {history, request} from "umi";

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
const filterRoutes = (propsRouterData: []) => {
  propsRouterData.forEach((item: any) => {
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
  const {isLogin} = await request('/umi/auth')

  // const isLogin = getRandomIntInclusive(0, 1)


  if (!isLogin) {
    history.push("/login")
  } else {
    // 获取路由数据
    console.log('获取路由数据');
    routerData = await request("/umi/menus")

  }

  // 最少需要被调用一次 , 因为这个方法是把react 的render 函数进行重写
  olbRender()
}
