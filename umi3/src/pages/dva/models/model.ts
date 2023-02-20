// 局部数据, 该数据只数据 dva

import {request} from 'umi'

// @ts-ignore
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
    info(state: Object, action: { payload: Object }) {
      return {
        ...state,
        info: action.payload
      }
    }
  },
  effects: {
    // 处理异步操作
    // 接受来自 dispatch({type:dvaModel/getInfo}) 的操作

    // call 调用请求
    // put 调用 reducers 中的方法

    // @ts-ignore
    * getInfo(action, {call, put, select}) {
      // @ts-ignore
      const data = yield call(request, '/api/yiyan/index.php')
      console.log(data);
      yield put({
        type: 'info',
        payload: data
      })
    }
  }
}
