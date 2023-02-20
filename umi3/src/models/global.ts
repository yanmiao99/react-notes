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
  }
}
