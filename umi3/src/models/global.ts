// 全局数据
export default {
  // 命名空间
  namespace: 'global',

  // 放置全局数据
  state: {
    title: '我是标题',
    text: '我是文本',
    login: false,
  },

  // 处理同步业务
  reducers: {
    // 修改标题
    setTitle(state: Object) {
      return {
        ...state,
        title: '我是新的标题'
      }
    },
    // 接受外部传参
    setText(state: Object, action: { payload: { text: String } }) {
      console.log(action);
      console.log(action.payload.text);

      return {
        ...state,
        text: action.payload.text
      }
    },
    setLogin(state: Object, action: { payload: { login: Boolean } }) {
      return {
        ...state,
        login: action.payload.login
      }
    }
  },

  // 处理异步代码
  // effects  , 可以看 dva/models/model.ts , 在里面有使用

  // 处理监听
  subscriptions: {
    // setup 不是固定的写法, 可以随意定义名称的 , 例如可以 setupRouter
    setupRouter({dispatch, history}: any) {
      // history.listen 这个是监听路由的方法
      history.listen(({pathname}: any) => {
        if (pathname === '/dva') {
          console.log('监听当前的路由是 dva');

          // 派发时间
          // dispatch({
          //   type: 'showPerson'
          // })
        } else {
          console.log('监听当前的路由不是 dva');
        }
      })
    }
  }
}
