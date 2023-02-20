// 局部数据, 该数据只数据 dva

export default {
  namespace: 'dvaModel',
  state: {
    test: '我是测试数据'
  },
  reducers: {
    setTest(state: Object, action: { payload: { test: String } }) {
      return {
        ...state,
        test: action.payload.test
      }
    },
  }
}
